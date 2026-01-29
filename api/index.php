<?php
/**
 * Albixe REST API v2 - Direct MySQL connection (no CMS dependency)
 */

ini_set('display_errors', 0);
error_reporting(E_ALL);

// CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database config
define('DB_HOST', 'localhost');
define('DB_NAME', 'albixe');
define('DB_USER', 'albixe');
define('DB_PASSWORD', 'Albixe2024Secure!');

// Connect to MySQL
try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASSWORD,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit();
}

// Session for auth
session_start();

// Restore user from Bearer token if session is empty
if (empty($_SESSION['user_id'])) {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? ($_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '');
    if (preg_match('/Bearer\s+(.+)/i', $authHeader, $m)) {
        $tokenData = json_decode(base64_decode($m[1]), true);
        if ($tokenData && !empty($tokenData['id']) && !empty($tokenData['exp']) && $tokenData['exp'] > time()) {
            $_SESSION['user_id'] = $tokenData['id'];
            $_SESSION['user_uid'] = $tokenData['uid'] ?? null;
        }
    }
}

// Get request path
$uri = $_SERVER['REQUEST_URI'];
$path = str_replace('/api/', '', parse_url($uri, PHP_URL_PATH));
$path = trim($path, '/');
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true) ?? [];

// Routing
try {
    $response = route($path, $method, $input, $pdo);
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}


function getPackagesList($pdo) {
    $stmt = $pdo->query('SELECT id, title, price FROM packages WHERE is_active = 1 ORDER BY sort');
    $list = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return ['success' => true, 'packages' => $list];
}


// === HELPER: Get effective lines for a user ===
function getEffectiveLines($user, $package) {
    $lines = intval($package['a_lines']);
    if ($user['user_lines_activated'] == 1 && $lines == 0) {
        $lines = 5; // User with activated lines
    }
    return $lines;
}

// === HELPER: Create sv_users sponsor relationships ===
function createSvUsers($uid, $pdo) {
    $stmt = $pdo->prepare('SELECT * FROM users WHERE uid = ?');
    $stmt->execute([$uid]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user) return;

    // Load all packages
    $pkgs = [];
    $allPkgs = $pdo->query('SELECT * FROM packages')->fetchAll(PDO::FETCH_ASSOC);
    foreach ($allPkgs as $pk) $pkgs[$pk['id']] = $pk;

    $sponsor = $user['user_id'];
    $type = 1;

    if ($user['type'] == 'fiz') {
        while ($type <= 16) {
            $stmt = $pdo->prepare('SELECT * FROM users WHERE uid = ?');
            $stmt->execute([$sponsor]);
            $sp = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!$sp) break;

            $spPkg = $pkgs[$sp['package']] ?? null;
            $spLines = $spPkg ? getEffectiveLines($sp, $spPkg) : 0;

            if ($type > $spLines || $sp['type'] != 'fiz') {
                $sponsor = $sp['user_id'];
                $type++;
                continue;
            }

            // Check if relationship already exists
            $chk = $pdo->prepare('SELECT id FROM sv_users WHERE uid = ? AND sponsor = ? AND type = ?');
            $chk->execute([$uid, $sponsor, $type]);
            if (!$chk->fetch()) {
                $ins = $pdo->prepare('INSERT INTO sv_users (uid, sponsor, type, created_at) VALUES (?, ?, ?, NOW())');
                $ins->execute([$uid, $sponsor, $type]);
            }

            $sponsor = $sp['user_id'];
            $type++;
        }
    }
}

// === HELPER: Expand sv_users lines after package upgrade ===
function expandLines($uid, $oldLines, $newLines, $pdo) {
    if ($newLines <= $oldLines) return;

    $cl = $oldLines;
    $childs = [];

    while ($cl <= $newLines) {
        if (empty($childs)) {
            $stmt = $pdo->prepare('SELECT uid FROM sv_users WHERE sponsor = ? AND type = ?');
            $stmt->execute([$uid, $cl]);
            $childs = $stmt->fetchAll(PDO::FETCH_COLUMN);
        }
        if (empty($childs)) break;

        // Get next level: first-line referrals of current childs
        $placeholders = implode(',', array_fill(0, count($childs), '?'));
        $stmt = $pdo->prepare("SELECT uid FROM sv_users WHERE sponsor IN ($placeholders) AND type = 1");
        $stmt->execute($childs);
        $subchilds = $stmt->fetchAll(PDO::FETCH_COLUMN);
        if (empty($subchilds)) break;

        $cl++;
        if ($cl > $newLines) break;

        foreach ($subchilds as $childUid) {
            $chk = $pdo->prepare('SELECT id FROM sv_users WHERE uid = ? AND sponsor = ? AND type = ?');
            $chk->execute([$childUid, $uid, $cl]);
            if (!$chk->fetch()) {
                $ins = $pdo->prepare('INSERT INTO sv_users (uid, sponsor, type, created_at) VALUES (?, ?, ?, NOW())');
                $ins->execute([$childUid, $uid, $cl]);
            }
        }
        $childs = $subchilds;
    }
}

// === HELPER: Check and activate User lines ===
function checkUserActivation($sponsorUid, $pdo) {
    $stmt = $pdo->prepare('SELECT * FROM users WHERE uid = ?');
    $stmt->execute([$sponsorUid]);
    $sponsor = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$sponsor) return;

    // Only for User package (a_lines=0) with not yet activated lines
    $stmt2 = $pdo->prepare('SELECT a_lines FROM packages WHERE id = ?');
    $stmt2->execute([$sponsor['package']]);
    $pkg = $stmt2->fetch(PDO::FETCH_ASSOC);
    if (!$pkg || $pkg['a_lines'] > 0) return; // Not a User package
    if ($sponsor['user_lines_activated'] == 1) return; // Already activated

    $reqVol = intval($sponsor['user_required_volume']);
    if ($reqVol <= 0) $reqVol = 226000;

    if (intval($sponsor['priv_sale_volume']) >= $reqVol) {
        // Activate 5 lines
        $pdo->prepare('UPDATE users SET user_lines_activated = 1 WHERE uid = ?')->execute([$sponsorUid]);
        // Expand lines from 0 to 5
        expandLines($sponsorUid, 0, 5, $pdo);
    }
}

// === BUY PACKAGE ===
function handleBuyPackage($input, $pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }

    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user) return ['success' => false, 'error' => 'User not found'];

    $packageId = intval($input['package_id'] ?? 0);
    if (!$packageId) return ['success' => false, 'error' => 'Не указан пакет'];

    $stmt = $pdo->prepare('SELECT * FROM packages WHERE id = ? AND is_active = 1');
    $stmt->execute([$packageId]);
    $newPkg = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$newPkg) return ['success' => false, 'error' => 'Пакет не найден'];

    $price = floatval($newPkg['price']);
    if ($price <= 0) return ['success' => false, 'error' => 'Этот пакет нельзя купить'];

    $balance = floatval($user['balance']);
    if ($balance < $price) {
        return ['success' => false, 'error' => 'Недостаточно средств. Баланс: ' . number_format($balance, 0, ',', ' ') . ' руб., нужно: ' . number_format($price, 0, ',', ' ') . ' руб.'];
    }

    // Get old package info
    $stmt = $pdo->prepare('SELECT * FROM packages WHERE id = ?');
    $stmt->execute([$user['package']]);
    $oldPkg = $stmt->fetch(PDO::FETCH_ASSOC);
    $oldLines = $oldPkg ? getEffectiveLines($user, $oldPkg) : 0;
    $newLines = intval($newPkg['a_lines']);

    // Deduct balance
    $pdo->prepare('UPDATE users SET balance = balance - ?, package = ?, user_lines_activated = 1 WHERE id = ?')
        ->execute([$price, $packageId, $user['id']]);

    // Create operation record
    $pdo->prepare('INSERT INTO operations (uid, type, value, amount, text, status, created_at) VALUES (?, ?, ?, ?, ?, 1, NOW())')
        ->execute([$user['uid'], 'buy_package', $packageId, $price, 'Покупка пакета ' . $newPkg['title']]);

    // Expand lines
    expandLines($user['uid'], $oldLines, $newLines, $pdo);

    // Load all packages for bonus calculation
    $allPkgs = [];
    foreach ($pdo->query('SELECT * FROM packages')->fetchAll(PDO::FETCH_ASSOC) as $pk) {
        $allPkgs[$pk['id']] = $pk;
    }

    // Distribute bonuses to sponsors
    $stmt = $pdo->prepare('SELECT * FROM sv_users WHERE uid = ? ORDER BY type ASC');
    $stmt->execute([$user['uid']]);
    $svUsers = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($svUsers as $sv) {
        $stmt = $pdo->prepare('SELECT * FROM users WHERE uid = ? AND type = "fiz"');
        $stmt->execute([$sv['sponsor']]);
        $sponsor = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$sponsor) continue;

        $spPkg = $allPkgs[$sponsor['package']] ?? null;
        if (!$spPkg) continue;

        $spLines = getEffectiveLines($sponsor, $spPkg);
        $lineType = intval($sv['type']);
        if ($lineType > $spLines) continue;

        // Calculate bonus
        $bonusField = 'bonus_l' . $lineType;
        $percent = floatval($spPkg[$bonusField] ?? 0);
        $bonusValue = 0;
        if ($percent > 0) {
            $bonusValue = floor($price / 100 * $percent);
        }

        // Update sale_volume
        $saleVol = intval($sponsor['sale_volume']) + intval($price);
        $privSaleVol = 0;
        if ($lineType == 1) {
            $privSaleVol = intval($price);
        }

        // Update sponsor
        $pdo->prepare('UPDATE users SET balance = balance + ?, sale_volume = ?, priv_sale_volume = priv_sale_volume + ? WHERE uid = ?')
            ->execute([$bonusValue, $saleVol, $privSaleVol, $sv['sponsor']]);

        // Log bonus operation
        if ($bonusValue > 0) {
            $pdo->prepare('INSERT INTO operations (uid, type, value, amount, text, status, created_at) VALUES (?, ?, ?, ?, ?, 1, NOW())')
                ->execute([$sv['sponsor'], 'bonus', $user['uid'], $bonusValue, 'Бонус за покупку пакета ' . $newPkg['title'] . ' (линия ' . $lineType . ', ' . $percent . '%)']);
        }

        // Check if this sponsor is a User that should be activated
        if ($lineType == 1) {
            checkUserActivation($sv['sponsor'], $pdo);
        }
    }

    return ['success' => true, 'message' => 'Пакет ' . $newPkg['title'] . ' успешно куплен!'];
}

function route($path, $method, $input, $pdo) {
    switch ($path) {
        case 'auth/login': return handleLogin($input, $pdo);
        case 'auth/register': return handleRegister($input, $pdo);
        case 'auth/logout': return handleLogout();
        case 'auth/check': return handleAuthCheck($pdo);
        case 'cabinet/dashboard': return getDashboard($pdo);
        case 'cabinet/team': return getTeam($pdo);
        case 'cabinet/news': return getNews($pdo);
        case 'cabinet/events': return getEvents($pdo);
        case 'cabinet/info': return getInfo($pdo);
        case 'cabinet/shop': return getShop($pdo);
        case 'cabinet/support': return handleSupport($input, $pdo);
        case 'cabinet/fees': return getFees($pdo);
        case 'cabinet/packages': return getPackagesList($pdo);
        case 'cabinet/buy-package': return handleBuyPackage($input, $pdo);
        case 'cabinet/withdrawals': return handleWithdrawals($input, $pdo);
        case 'auth/debug-token': return handleDebugToken($input, $pdo);
        case 'profile':
            return $method === 'GET' ? getProfile($pdo) : updateProfile($input, $pdo);
        case 'transfer': return handleTransfer($input, $pdo);
        default:
            http_response_code(404);
            return ['success' => false, 'error' => 'Endpoint not found: ' . $path];
    }
}

// ==================== AUTH ====================

function handleLogin($input, $pdo) {
    if (empty($input['email']) || empty($input['password'])) {
        return ['success' => false, 'error' => 'Email и пароль обязательны'];
    }
    
    $email = $input['email'];
    $password = md5('dfg45' . $input['password'] . 'gg43');
    $type = $input['type'] ?? 'fiz';
    
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ? AND password = ? AND type = ?');
    $stmt->execute([$email, $password, $type]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user) {
        return ['success' => false, 'error' => 'Неверный email или пароль'];
    }
    
    if (!$user['is_active']) {
        return ['success' => false, 'error' => 'Аккаунт не активирован'];
    }
    
    // Save to session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_uid'] = $user['uid'];
    
    // Generate token
    $token = base64_encode(json_encode([
        'id' => $user['id'],
        'uid' => $user['uid'],
        'exp' => time() + 86400 * 30
    ]));
    
    return [
        'success' => true,
        'token' => $token,
        'user' => formatUser($user)
    ];
}

function handleRegister($input, $pdo) {
    if (empty($input['email']) || empty($input['password'])) {
        return ['success' => false, 'error' => 'Заполните обязательные поля'];
    }
    
    if ($input['password'] !== ($input['password_repeat'] ?? '')) {
        return ['success' => false, 'error' => 'Пароли не совпадают'];
    }
    
    // Check email
    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
    $stmt->execute([$input['email']]);
    if ($stmt->fetch()) {
        return ['success' => false, 'error' => 'Email уже зарегистрирован'];
    }
    
    // Generate uid
    do {
        $uid = rand(10000, 99999999);
        $stmt = $pdo->prepare('SELECT id FROM users WHERE uid = ?');
        $stmt->execute([$uid]);
    } while ($stmt->fetch());
    
    // Get User package id and activation volume
    $userPkg = $pdo->query("SELECT id FROM packages WHERE title = 'User' AND is_active = 1 LIMIT 1")->fetch(PDO::FETCH_ASSOC);
    $userPkgId = $userPkg ? $userPkg['id'] : 1;
    $opts = $pdo->query('SELECT user_activation_volume FROM options LIMIT 1')->fetch(PDO::FETCH_ASSOC);
    $reqVolume = $opts['user_activation_volume'] ?? 226000;

    // Validate sponsor
    $sponsor = $input['sponsor'] ?? 1;
    if ($sponsor != 1) {
        $chk = $pdo->prepare('SELECT id FROM users WHERE uid = ?');
        $chk->execute([$sponsor]);
        if (!$chk->fetch()) $sponsor = 1;
    }

    // Insert user with User package and fixed volume threshold
    $stmt = $pdo->prepare('INSERT INTO users (user_id, uid, email, password, name, surname, type, is_active, package, user_required_volume, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?, NOW())');
    $stmt->execute([
        $sponsor,
        $uid,
        $input['email'],
        md5('dfg45' . $input['password'] . 'gg43'),
        $input['name'] ?? '',
        $input['surname'] ?? '',
        $input['type'] ?? 'fiz',
        $userPkgId,
        $reqVolume
    ]);

    // Create sponsor relationships (sv_users)
    createSvUsers($uid, $pdo);
    return ['success' => true, 'message' => 'Регистрация успешна', 'uid' => $uid];
}

function handleLogout() {
    session_destroy();
    return ['success' => true];
}

function handleAuthCheck($pdo) {
    if (empty($_SESSION['user_id'])) {
        return ['success' => false, 'authenticated' => false];
    }
    
    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user) {
        return ['success' => false, 'authenticated' => false];
    }
    
    return ['success' => true, 'authenticated' => true, 'user' => formatUser($user)];
}

// ==================== PROFILE ====================

function getProfile($pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }
    
    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    return [
        'success' => true,
        'profile' => [
            'id' => $user['id'],
            'uid' => $user['uid'],
            'email' => $user['email'],
            'name' => $user['name'],
            'surname' => $user['surname'],
            'phone' => $user['phone'] ?? '',
            'balance' => floatval($user['balance']),
            'type' => $user['type']
        ]
    ];
}

function updateProfile($input, $pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }
    
    $allowed = ['name', 'surname', 'phone', 'country', 'city'];
    $updates = [];
    $values = [];
    
    foreach ($allowed as $field) {
        if (isset($input[$field])) {
            $updates[] = "$field = ?";
            $values[] = $input[$field];
        }
    }
    
    if ($updates) {
        $values[] = $_SESSION['user_id'];
        $sql = 'UPDATE users SET ' . implode(', ', $updates) . ' WHERE id = ?';
        $pdo->prepare($sql)->execute($values);
    }
    
    return ['success' => true, 'message' => 'Профиль обновлен'];
}

// ==================== CABINET ====================

function getDashboard($pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }
    
    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Team count
    $stmt = $pdo->prepare('SELECT COUNT(*) as cnt FROM sv_users WHERE sponsor = ?');
    $stmt->execute([$user['uid']]);
    $teamCount = $stmt->fetch(PDO::FETCH_ASSOC)['cnt'] ?? 0;
    
    // Package
    $package = 'Simple';
    if ($user['package']) {
        $stmt = $pdo->prepare('SELECT title FROM packages WHERE id = ?');
        $stmt->execute([$user['package']]);
        $p = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($p) $package = $p['title'];
    }

    // Status
    $status = 'Отсутствует';
    if ($user['max_status']) {
        $stmt = $pdo->prepare('SELECT title FROM statuses WHERE id = ?');
        $stmt->execute([$user['max_status']]);
        $s = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($s) $status = $s['title'];
    }
    
    return [
        'success' => true,
        'dashboard' => [
            'user' => formatUser($user),
            'balance' => floatval($user['balance']),
            'status' => $status,
            'referralLink' => 'https://albixe.com/?r=' . $user['uid'],
            'teamCount' => (int)$teamCount,
            'salesVolume' => floatval($user['sale_volume'] ?? 0),
            'package' => $package
        ]
    ];
}

function getTeam($pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }
    
    $stmt = $pdo->prepare('SELECT uid FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $me = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $team = [];
    $stmt = $pdo->prepare('SELECT sv.uid, sv.type as line, u.name, u.surname FROM sv_users sv JOIN users u ON u.uid = sv.uid WHERE sv.sponsor = ? AND u.type != "ur"');
    $stmt->execute([$me['uid']]);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $team[] = [
            'line' => $row['line'],
            'uid' => $row['uid'],
            'name' => $row['name'] . ' ' . $row['surname']
        ];
    }
    
    return ['success' => true, 'team' => $team, 'totalCount' => count($team)];
}

function getNews($pdo) {
    $items = [];
    $stmt = $pdo->query('SELECT * FROM news WHERE is_active = 1 ORDER BY sort DESC LIMIT 10');
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $items[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'text' => $row['text'],
            'image' => $row['image'] ?? '',
            'date' => date('d.m.Y', strtotime($row['created_at']))
        ];
    }
    return ['success' => true, 'news' => $items];
}

function getEvents($pdo) {
    $items = [];
    $stmt = $pdo->query('SELECT * FROM events WHERE is_active = 1');
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $items[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'text' => $row['text'] ?? '',
            'image' => $row['image'] ?? ''
        ];
    }
    return ['success' => true, 'events' => $items];
}

function getInfo($pdo) {
    $items = [];
    $stmt = $pdo->query('SELECT * FROM informations');
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $items[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'file' => $row['file'] ?? ''
        ];
    }
    return ['success' => true, 'info' => $items];
}

function getShop($pdo) {
    $items = [];
    $stmt = $pdo->query('SELECT * FROM shops WHERE is_active = 1 ORDER BY sort DESC LIMIT 12');
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $items[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['text'] ?? '',
            'price' => floatval($row['price'] ?? 0),
            'image' => $row['image'] ?? ''
        ];
    }
    return ['success' => true, 'shop' => $items];
}

// ==================== TRANSFER ====================

function handleTransfer($input, $pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }
    
    if (empty($input['to_uid']) || empty($input['amount'])) {
        return ['success' => false, 'error' => 'Укажите получателя и сумму'];
    }
    
    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $me = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $amount = floatval($input['amount']);
    if ($amount > $me['balance']) {
        return ['success' => false, 'error' => 'Недостаточно средств'];
    }
    
    $stmt = $pdo->prepare('SELECT * FROM users WHERE uid = ?');
    $stmt->execute([$input['to_uid']]);
    $recipient = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$recipient) {
        return ['success' => false, 'error' => 'Получатель не найден'];
    }
    
    $pdo->beginTransaction();
    try {
        $pdo->prepare('UPDATE users SET balance = balance - ? WHERE id = ?')->execute([$amount, $me['id']]);
        $pdo->prepare('UPDATE users SET balance = balance + ? WHERE id = ?')->execute([$amount, $recipient['id']]);
        $pdo->commit();
    } catch (Exception $e) {
        $pdo->rollBack();
        return ['success' => false, 'error' => 'Ошибка перевода'];
    }
    
    return ['success' => true, 'message' => 'Перевод выполнен', 'newBalance' => $me['balance'] - $amount];
}


// ==================== DEBUG TOKEN ====================

function handleDebugToken($input, $pdo) {
    // Only works if admin session is active and user_id is provided
    if (empty($_SESSION['admin']) && empty($_GET['uid'])) {
        return ['success' => false, 'error' => 'Forbidden'];
    }
    $userId = $_GET['uid'] ?? ($input['uid'] ?? null);
    if (!$userId) {
        return ['success' => false, 'error' => 'No user specified'];
    }
    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user) {
        return ['success' => false, 'error' => 'User not found'];
    }
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_uid'] = $user['uid'];
    $token = base64_encode(json_encode([
        'id' => $user['id'],
        'uid' => $user['uid'],
        'exp' => time() + 86400 * 30
    ]));
    return ['success' => true, 'token' => $token, 'user' => [
        'id' => $user['id'],
        'uid' => $user['uid'],
        'name' => $user['name'],
        'surname' => $user['surname'],
        'email' => $user['email']
    ]];
}


// ==================== FEES ====================

function getFees($pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }

    $stmt = $pdo->prepare('SELECT uid FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $me = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$me) return ['success' => false, 'error' => 'User not found'];

    $uid = $me['uid'];
    $year = $_GET['year'] ?? date('Y');
    $y0 = strval($year);
    $y1 = strval($year - 1);
    $y2 = strval($year - 2);

    $stmt = $pdo->prepare("SELECT type, text, value, amount, value_p, created_at FROM operations WHERE uid = ? AND (type='leader_bonus' OR type='new_status' OR type='cashback' OR type='adm_cashback' OR type='agent_reward') AND status = 1");
    $stmt->execute([$uid]);

    $lp = 0;
    $lb = 0;
    $sb = 0;
    $totals = [$y0 => 0, $y1 => 0, $y2 => 0];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $t = $row['type'];
        $val = floatval($row['value']);
        $amt = $row['amount'];
        $vp = floatval($row['value_p']);

        if ($t == 'new_status' && ($amt == 'World Tour' || $amt == 'Dream Car')) {
            $sum = $vp;
        } elseif ($t == 'buy_package' || $t == 'upgrade_package' || $t == 'buy_license' || $t == 'new_status' || $t == 'buy_shop' || $t == 'buy_event') {
            $sum = floatval($amt);
        } else {
            $sum = $val;
        }

        // Yearly totals
        foreach ([$y0, $y1, $y2] as $yr) {
            if (strpos($row['created_at'], $yr . '-') !== false) {
                $totals[$yr] += $sum;
                break;
            }
        }

        // Current year breakdowns
        if (strpos($row['created_at'], $y0 . '-') === false) continue;

        if ($t == 'leader_bonus' && $row['text'] == '1') {
            $lp += $sum;
        }
        if ($t == 'leader_bonus' && $row['text'] != '1') {
            $lb += $sum;
        }
        if ($t == 'new_status' && $amt != 'World Tour' && $amt != 'Dream Car') {
            $sb += $sum;
        }
    }

    $yearlyTotals = [];
    foreach ($totals as $yr => $total) {
        $yearlyTotals[] = ['year' => intval($yr), 'total' => $total];
    }

    return [
        'success' => true,
        'fees' => [
            'personal_sales' => $lp,
            'leader_bonus' => $lb,
            'status_bonus' => $sb,
            'year' => $year,
            'yearly_totals' => $yearlyTotals
        ]
    ];
}

// ==================== WITHDRAWALS ====================

function handleWithdrawals($input, $pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }

    $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user) return ['success' => false, 'error' => 'User not found'];

    $method = $_SERVER['REQUEST_METHOD'];

    // GET - return withdrawal history + ways
    if ($method === 'GET') {
        $stmt = $pdo->prepare('SELECT id, type, amount, total_amount, comission, status, created_at FROM withdrawals WHERE uid = ? ORDER BY id DESC');
        $stmt->execute([$user['uid']]);
        $list = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $stmt2 = $pdo->query('SELECT id, title, comission FROM ways ORDER BY sort');
        $ways = $stmt2->fetchAll(PDO::FETCH_ASSOC);

        $stmt3 = $pdo->query('SELECT wind_comission, min_wind FROM options LIMIT 1');
        $options = $stmt3->fetch(PDO::FETCH_ASSOC);

        return [
            'success' => true,
            'withdrawals' => $list,
            'ways' => $ways,
            'balance' => floatval($user['balance']),
            'comission' => floatval($options['wind_comission']),
            'min_amount' => floatval($options['min_wind'])
        ];
    }

    // POST - create withdrawal
    if ($method === 'POST') {
        $amount = floatval($input['amount'] ?? 0);
        $wayId = intval($input['way_id'] ?? 0);
        $transferUid = trim($input['transfer_uid'] ?? '');

        $stmt = $pdo->query('SELECT wind_comission, min_wind FROM options LIMIT 1');
        $options = $stmt->fetch(PDO::FETCH_ASSOC);
        $minWind = floatval($options['min_wind']);
        // Use per-way comission
        $stmt = $pdo->prepare('SELECT comission FROM ways WHERE id = ?');
        $stmt->execute([$wayId]);
        $wayData = $stmt->fetch(PDO::FETCH_ASSOC);
        $comission = ($wayData && $wayData['comission'] !== null) ? floatval($wayData['comission']) : floatval($options['wind_comission']);

        if ($amount < $minWind) {
            return ['success' => false, 'error' => 'Минимальная сумма вывода ' . $minWind . ' руб.'];
        }
        if ($amount > floatval($user['balance'])) {
            return ['success' => false, 'error' => 'Недостаточно средств'];
        }

        $stmt = $pdo->prepare('SELECT title FROM ways WHERE id = ?');
        $stmt->execute([$wayId]);
        $way = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$way) return ['success' => false, 'error' => 'Неверный способ вывода'];

        $com = floor($amount / 100 * $comission);
        $totalSum = $amount - $com;

        $stmt = $pdo->prepare('SELECT COALESCE(MAX(sort),0)+1 as next_sort FROM withdrawals');
        $stmt->execute();
        $nextSort = $stmt->fetch(PDO::FETCH_ASSOC)['next_sort'];

        // Transfer to another user
        if ($way['title'] === 'Перевести') {
            if (empty($transferUid)) {
                return ['success' => false, 'error' => 'Укажите ID пользователя для перевода'];
            }
            $stmt = $pdo->prepare('SELECT * FROM users WHERE uid = ?');
            $stmt->execute([$transferUid]);
            $recipient = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!$recipient) {
                return ['success' => false, 'error' => 'Пользователь с ID ' . $transferUid . ' не найден'];
            }
            if ($recipient['uid'] === $user['uid']) {
                return ['success' => false, 'error' => 'Нельзя перевести самому себе'];
            }

            $text = '<strong>Перевод пользователю:</strong> ' . htmlspecialchars($recipient['name'] . ' ' . $recipient['surname']) . ' (ID: ' . htmlspecialchars($transferUid) . ')';

            $stmt = $pdo->prepare('INSERT INTO withdrawals (uid, title, type, amount, total_amount, comission, text, status, sort, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, NOW(), NOW())');
            $stmt->execute([
                $user['uid'],
                $user['name'] . ' ' . $user['surname'],
                $way['title'],
                $totalSum,
                $amount,
                $comission,
                $text,
                $nextSort
            ]);

            // Deduct from sender
            $stmt = $pdo->prepare('UPDATE users SET balance = balance - ? WHERE id = ?');
            $stmt->execute([$amount, $user['id']]);

            // Credit recipient (amount minus commission)
            $stmt = $pdo->prepare('UPDATE users SET balance = balance + ? WHERE id = ?');
            $stmt->execute([$totalSum, $recipient['id']]);

            return ['success' => true, 'message' => 'Перевод выполнен. ' . $totalSum . ' руб. отправлено пользователю ID ' . $transferUid];
        }

        // Regular withdrawal
        $text = '<strong>Электронный кошелек: </strong>' . htmlspecialchars($user['wallet'] ?? '') . '<br><strong>Банковская карта:</strong> ' . htmlspecialchars($user['card'] ?? '');

        $stmt = $pdo->prepare('INSERT INTO withdrawals (uid, title, type, amount, total_amount, comission, text, status, sort, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, NOW(), NOW())');
        $stmt->execute([
            $user['uid'],
            $user['name'] . ' ' . $user['surname'],
            $way['title'],
            $totalSum,
            $amount,
            $comission,
            $text,
            $nextSort
        ]);

        // Deduct from balance
        $stmt = $pdo->prepare('UPDATE users SET balance = balance - ? WHERE id = ?');
        $stmt->execute([$amount, $user['id']]);

        return ['success' => true, 'message' => 'Заявка на вывод создана'];
    }

    return ['success' => false, 'error' => 'Method not allowed'];
}
// ==================== SUPPORT ====================

function handleSupport($input, $pdo) {
    if (empty($_SESSION['user_id'])) {
        http_response_code(401);
        return ['success' => false, 'error' => 'Требуется авторизация'];
    }

    if (empty($input['subject']) || empty($input['email']) || empty($input['text'])) {
        return ['success' => false, 'error' => 'Заполните все поля'];
    }

    $subject = htmlspecialchars(trim($input['subject']), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    $text = htmlspecialchars(trim($input['text']), ENT_QUOTES, 'UTF-8');

    if (!$email) {
        return ['success' => false, 'error' => 'Некорректный email'];
    }

    // Save to DB
    $stmt = $pdo->prepare('INSERT INTO supports (title, email, text, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())');
    $stmt->execute([$subject, $email, $text]);

    // Send email via SMTP
    $stmt2 = $pdo->query('SELECT email, smtp_server, smtp_port, smtp_mail, smtp_password, smtp_protocol, smtp_mfrom, smtp_tfrom FROM options LIMIT 1');
    $option = $stmt2->fetch(PDO::FETCH_ASSOC);

    if ($option && $option['smtp_server']) {
        $to = $option['email'];
        $mailSubject = "Техподдержка: " . $subject;
        $mailBody = "Тема: $subject\nEmail: $email\n\nСообщение:\n$text";

        $smtp = $option['smtp_server'];
        $port = $option['smtp_port'];
        $user = $option['smtp_mail'];
        $pass = $option['smtp_password'];
        $protocol = $option['smtp_protocol'];
        $from = $option['smtp_mfrom'];
        $fromName = $option['smtp_tfrom'];

        $errno = 0;
        $errstr = '';
        $prefix = ($protocol === 'ssl') ? 'ssl://' : (($protocol === 'tls') ? 'tls://' : '');
        $sock = @fsockopen($prefix . $smtp, (int)$port, $errno, $errstr, 10);

        if ($sock) {
            $resp = function() use ($sock) { return fgets($sock, 512); };
            $cmd = function($c) use ($sock, $resp) { fputs($sock, $c . "\r\n"); return $resp(); };

            $resp();
            $cmd("EHLO localhost");
            stream_set_timeout($sock, 2);
            while ($line = fgets($sock, 512)) {
                if (strpos($line, '250 ') === 0) break;
            }
            $cmd("AUTH LOGIN");
            $cmd(base64_encode($user));
            $cmd(base64_encode($pass));
            $cmd("MAIL FROM:<$from>");
            $cmd("RCPT TO:<$to>");
            $cmd("DATA");
            fputs($sock, "From: $fromName <$from>\r\n");
            fputs($sock, "To: <$to>\r\n");
            fputs($sock, "Subject: =?UTF-8?B?" . base64_encode($mailSubject) . "?=\r\n");
            fputs($sock, "Content-Type: text/plain; charset=UTF-8\r\n");
            fputs($sock, "\r\n");
            fputs($sock, $mailBody . "\r\n");
            $cmd(".");
            $cmd("QUIT");
            fclose($sock);
        }
    }

    return ['success' => true, 'message' => 'Сообщение отправлено'];
}

// ==================== HELPERS ====================

function formatUser($user) {
    return [
        'id' => $user['id'],
        'uid' => $user['uid'],
        'name' => $user['name'],
        'surname' => $user['surname'],
        'email' => $user['email'],
        'type' => $user['type'],
        'balance' => floatval($user['balance']),
        'image' => $user['image'] ?? ''
    ];
}
