<?php
error_reporting(0);
ini_set('display_errors', 0);
include_once('config.php');
include_once('cms/cms.php');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$events = [];

try {
    foreach(d()->Event->where('is_active=1')->order_by('date DESC') as $event) {
        // Extract short text from full text (first 200 chars)
        $short_text = '';
        if(!empty($event->text)) {
            $short_text = strip_tags($event->text);
            if(mb_strlen($short_text) > 200) {
                $short_text = mb_substr($short_text, 0, 200) . '...';
            }
        }

        // Check if tickets available
        $disbut = '';
        if(empty($event->tickets) || $event->tickets <= 0) {
            $disbut = 'disabled';
        }

        $events[] = [
            'id' => $event->id,
            'title' => $event->title,
            'date' => $event->date,
            'price' => $event->price,
            'tickets' => $event->tickets,
            'total_tickets' => $event->total_tickets,
            'image' => $event->image,
            'short_text' => $short_text,
            'text' => $event->text,
            'disbut' => $disbut
        ];
    }

    echo json_encode(['success' => true, 'events' => $events]);
} catch(Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
