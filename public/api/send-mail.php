<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['to']) || !isset($data['subject']) || !isset($data['body'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$to = $data['to'];
$subject = '=?UTF-8?B?' . base64_encode($data['subject']) . '?=';
$body = $data['body'];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: noreply@mdi-ariel.ru',
    'Reply-To: noreply@mdi-ariel.ru',
    'X-Mailer: PHP/' . phpversion()
];

$result = mail($to, $subject, $body, implode("\r\n", $headers));

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Email sent']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}

