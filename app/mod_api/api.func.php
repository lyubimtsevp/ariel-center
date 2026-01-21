<?php
// React SPA API Controller
class ApiController {
    
    private function check_auth() {
        if(d()->Auth->is_guest()) {
            return false;
        }
        d()->user = d()->Auth->user();
        if(!d()->user->id) {
            return false;
        }
        return true;
    }
    
    // Получить данные текущего пользователя
    function user_data()
    {
        header("Content-Type: application/json");
        
        if(!$this->check_auth()) {
            print json_encode(["error" => "not_authorized"]);
            return;
        }
        
        $user = d()->user;
        $package = d()->Package($user->package);
        $option = d()->Option;
        
        $ways = [];
        foreach(d()->Way as $w) {
            $ways[] = ["id" => $w->id, "title" => $w->title];
        }
        
        print json_encode([
            "uid" => $user->uid,
            "name" => $user->name,
            "surname" => $user->surname,
            "email" => $user->email,
            "phone" => $user->phone,
            "balance" => floatval($user->balance),
            "package" => [
                "id" => $package->id,
                "title" => $package->title,
                "price" => $package->price
            ],
            "country" => $user->country,
            "city" => $user->city,
            "wallet" => $user->wallet,
            "card" => $user->card,
            "ways" => $ways,
            "settings" => [
                "min_withdrawal" => intval($option->min_wind),
                "withdrawal_commission" => intval($option->wind_comission),
                "transfer_commission" => 4
            ]
        ]);
    }
    
    // Вывод средств
    function withdrawal()
    {
        header("Content-Type: application/json");
        
        if(!$this->check_auth()) {
            print json_encode(["error" => "not_authorized"]);
            return;
        }
        
        if($_SERVER["REQUEST_METHOD"] !== "POST") {
            print json_encode(["error" => "method_not_allowed"]);
            return;
        }
        
        $amount = floatval($_POST["amount"]);
        $type = intval($_POST["type"]);
        $option = d()->Option;
        
        if($option->min_wind > $amount) {
            print json_encode(["error" => "Минимальная сумма вывода ".$option->min_wind." руб."]);
            return;
        }
        
        if($amount > d()->user->balance) {
            print json_encode(["error" => "Недостаточно средств на балансе"]);
            return;
        }
        
        $com = floor($amount/100*$option->wind_comission);
        $total_sum = $amount - $com;
        
        $w = d()->Withdrawal->new;
        $w->uid = d()->user->uid;
        $w->title = d()->user->title;
        $w->type = d()->Way($type)->title;
        $w->amount = $total_sum;
        $w->total_amount = $amount;
        $w->comission = $option->wind_comission;
        $w->text = "Электронный кошелек: ".d()->user->wallet." Банковская карта: ".d()->user->card;
        $w->save;
        
        d()->user->balance = d()->user->balance - $amount;
        d()->user->save;
        
        print json_encode([
            "success" => true,
            "new_balance" => floatval(d()->user->balance),
            "withdrawn" => $total_sum
        ]);
    }
    
    // Перевод другому пользователю
    function transfer()
    {
        header("Content-Type: application/json");
        
        if(!$this->check_auth()) {
            print json_encode(["error" => "not_authorized"]);
            return;
        }
        
        if($_SERVER["REQUEST_METHOD"] !== "POST") {
            print json_encode(["error" => "method_not_allowed"]);
            return;
        }
        
        $amount = floatval($_POST["amount"]);
        $recipient_uid = intval($_POST["recipient_uid"]);
        $option = d()->Option;
        
        if($option->min_wind > $amount) {
            print json_encode(["error" => "Минимальная сумма перевода ".$option->min_wind." руб."]);
            return;
        }
        
        if($amount > d()->user->balance) {
            print json_encode(["error" => "Недостаточно средств на балансе"]);
            return;
        }
        
        $recipient = d()->User->where("uid=?", $recipient_uid)->limit(0,1);
        if(!count($recipient)) {
            print json_encode(["error" => "Пользователь с ID ".$recipient_uid." не найден"]);
            return;
        }
        
        if($recipient->uid == d()->user->uid) {
            print json_encode(["error" => "Нельзя перевести самому себе"]);
            return;
        }
        
        $com = floor($amount/100*4);
        $transfer_amount = $amount - $com;
        
        d()->user->balance = d()->user->balance - $amount;
        d()->user->save;
        
        $recipient->balance = $recipient->balance + $transfer_amount;
        $recipient->save;
        
        $op = d()->Operation->new;
        $op->uid = d()->user->uid;
        $op->type = "transfer_out";
        $op->value = $amount;
        $op->text = "Перевод пользователю ID: ".$recipient_uid;
        $op->save;
        
        $op2 = d()->Operation->new;
        $op2->uid = $recipient_uid;
        $op2->type = "transfer_in";
        $op2->value = $transfer_amount;
        $op2->text = "Перевод от пользователя ID: ".d()->user->uid;
        $op2->save;
        
        print json_encode([
            "success" => true,
            "new_balance" => floatval(d()->user->balance),
            "transferred" => $transfer_amount,
            "recipient_uid" => $recipient_uid
        ]);
    }
    
    // Обновление профиля
    function profile()
    {
        header("Content-Type: application/json");
        
        if(!$this->check_auth()) {
            print json_encode(["error" => "not_authorized"]);
            return;
        }
        
        if($_SERVER["REQUEST_METHOD"] !== "POST") {
            $user = d()->user;
            print json_encode([
                "name" => $user->name,
                "surname" => $user->surname,
                "email" => $user->email,
                "phone" => $user->phone,
                "country" => $user->country,
                "city" => $user->city,
                "wallet" => $user->wallet,
                "card" => $user->card
            ]);
            return;
        }
        
        $user = d()->user;
        
        if(isset($_POST["name"])) $user->name = $_POST["name"];
        if(isset($_POST["surname"])) $user->surname = $_POST["surname"];
        if(isset($_POST["phone"])) $user->phone = $_POST["phone"];
        if(isset($_POST["country"])) $user->country = $_POST["country"];
        if(isset($_POST["city"])) $user->city = $_POST["city"];
        if(isset($_POST["wallet"])) $user->wallet = $_POST["wallet"];
        if(isset($_POST["card"])) $user->card = $_POST["card"];
        
        if($_POST["password"] && $_POST["password"] === $_POST["password_confirm"]) {
            $user->password = md5("dfg45".$_POST["password"]."gg43");
        }
        
        $user->save;
        
        print json_encode(["success" => true]);
    }
    
    // Моя команда
    function team()
    {
        header("Content-Type: application/json");
        
        if(!$this->check_auth()) {
            print json_encode(["error" => "not_authorized"]);
            return;
        }
        
        $user = d()->user;
        $package = d()->Package($user->package);
        
        $active_lines = $package->a_lines;
        if($user->package == 1 && $user->user_lines_activated) {
            $active_lines = 5;
        }
        
        $sv = d()->Sv_user->where("sponsor=?", $user->uid);
        $team = [];
        
        foreach($sv as $v) {
            $line = $sv->type;
            if($line > $active_lines) continue;
            
            $member = d()->User->where("uid=?", $sv->uid)->limit(0,1);
            if(!count($member)) continue;
            
            if(!isset($team[$line])) $team[$line] = [];
            
            $team[$line][] = [
                "uid" => $member->uid,
                "name" => $member->name . " " . $member->surname,
                "package" => d()->Package($member->package)->title
            ];
        }
        
        print json_encode([
            "active_lines" => $active_lines,
            "team" => $team,
            "total_count" => count($sv)
        ]);
    }
}
