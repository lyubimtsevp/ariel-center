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
    
    // Insert user
    $stmt = $pdo->prepare('INSERT INTO users (user_id, uid, email, password, name, surname, type, is_active, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, 1, NOW())');
    $stmt->execute([
        $input['sponsor'] ?? 1,
        $uid,
        $input['email'],
        md5('dfg45' . $input['password'] . 'gg43'),
        $input['name'] ?? '',
        $input['surname'] ?? '',
        $input['type'] ?? 'fiz'
    ]);
    
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
            'salesVolume' => floatval($user['sale_volume'] ?? 0)
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

// ==================== HELPERS ====================

function formatUser($user) {
    return [
        'id' => $user['id'],
        'uid' => $user['uid'],
        'name' => $user['name'],
        'surname' => $user['surname'],
        'email' => $user['email'],
        'type' => $user['type'],
        'balance' => floatval($user['balance'])
    ];
}
