<?php
// PHP прокси для API заявок -> Node.js сервер
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Cookie');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$nodeUrl = 'http://127.0.0.1:3000/api/applications';
$method = $_SERVER['REQUEST_METHOD'];

$ch = curl_init($nodeUrl);

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => $method,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Cookie: ' . ($_SERVER['HTTP_COOKIE'] ?? '')
    ],
    CURLOPT_TIMEOUT => 30
]);

if ($method === 'POST') {
    $input = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
}

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    http_response_code(502);
    echo json_encode(['error' => 'Backend unavailable', 'details' => $error]);
    exit;
}

http_response_code($httpCode);
echo $response;

