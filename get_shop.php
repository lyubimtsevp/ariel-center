<?php
header('Content-Type: application/json; charset=utf-8');
try {
    $pdo = new PDO('mysql:host=localhost;dbname=albixe;charset=utf8mb4', 'albixe', 'Albixe2024Secure!');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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
    echo json_encode(['success' => true, 'items' => $items]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
