<?php
error_reporting(0);
ini_set('display_errors', 0);
include_once('config.php');
include_once('cms/cms.php');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$files = [];
try {
    foreach(d()->Information->order_by('sort') as $info) {
        $file_path = $_SERVER['DOCUMENT_ROOT'] . $info->file;
        $size = 0;
        if(file_exists($file_path)) {
            $size = round(filesize($file_path) / 1024);
        }
        $ext = pathinfo($info->file, PATHINFO_EXTENSION);
        $files[] = [
            'id' => $info->id,
            'title' => $info->title,
            'file' => $info->file,
            'extension' => $ext,
            'size' => $size
        ];
    }
    echo json_encode(['success' => true, 'files' => $files]);
} catch(Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
