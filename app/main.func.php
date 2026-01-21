<?php

function main()
{

	if(substr($_SERVER['REQUEST_URI'],-5)=='index' && !$_GET){
		header("HTTP/1.1 301 Moved Permanently");
		header('Location: '.substr($_SERVER['REQUEST_URI'],0,-5));
		exit;
	}
    
    if($_GET['action']=='logout'){
        d()->Auth->logout();
        header('Location: '.d()->langlink.'/');
        exit;
    }

    if($_COOKIE['sponsor']){
        d()->sponsor = $_COOKIE['sponsor'];
    }

    if($_GET['r']){
        d()->sponsor = $_GET['r'];
        setcookie("sponsor", $_GET['r'], time() + 999999999, '/');
    }

    //d()->nocache=rand();
    d()->nocache=17;

    // получаем список стран, городов и выбранный город
    d()->cities_list = d()->get_cities();
    d()->countries_list = d()->Country;
    // получаем текущую ссылку
    d()->thislnk = d()->getlnk();

    if(d()->Auth->is_guest() && $_COOKIE['auth']){
        $check = d()->User($_COOKIE['auth']);
        $auth_code = md5($check->password.'48gjdslIKMNC2@%%'.$check->email);
        if(count($check) && $_COOKIE['auth_code']==$auth_code){
            d()->Auth->login($check->id, $check->uid);
        }
    }
    d()->user = d()->Auth->user();

    d()->o = d()->Option;


    d()->content = d()->content();
	print d()->render('main_tpl');
}

function test(){
    //print 'Ururu';
//    $r = d()->get_pay_url('2000000', 'a823', d()->lang, '1', 'Покупка какой то фигни на ALBIXE');
//    print '<pre>';
//    print_r($r);
//    print '</pre>';
}

function admin_ex_cashback_list()
{
    if(!iam_allow(url(3))){
        return 'Вам запрещён доступ к этому разделу.';
    }
    d()->curr_title='Ожидаемый CashBack';
    print d()->admin_show_one_list_ex_cb(url(3),url(4),url(5));

    print d()->admin_show();
}

function get_pay_url($amount='', $orderid='', $lang='', $uid='', $desc=''){
    $o = d()->Option;
    // создание платежа
    $url = 'https://securepay.tinkoff.ru/v2/Init';

    $post_data = array (
        "TerminalKey" => $o->terminalkey,
        "NotificationURL" => $o->notificationurl,
        //"SuccessURL" => $o->successurl,
        //"FailURL" => $o->failurl,
        "Amount" => $amount,
        "OrderId" => $orderid,
        "Language" => $lang,
        "CustomerKey" => $uid,
        "Description" => $desc
    );
    // генерируем токен
    $ch = $post_data;
    $ch['Password'] = $o->terminalpassword;
    ksort($ch);
    $st = '';
    foreach($ch as $k=>$v){
        $st .= $v;
    }
    $post_data['Token'] = hash('sha256', $st);

    $headers = array('Content-Type: application/json');

    $ch = curl_init();
    // 1. инициализация

    // 2. указываем параметры, включая url
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // указываем, что у нас POST запрос
    curl_setopt($ch, CURLOPT_POST, 1);
    // добавляем переменные
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data));

    // 3. получаем HTML в качестве результата
    $output = curl_exec($ch);
    // 4. закрываем соединение
    curl_close($ch);

    $r = json_decode($output, true);
    //return $r['PaymentURL'];
    return $r;
}

function pay_notification(){
    header('content-type: application/json');
    $o = d()->Option;
    $r = json_decode(file_get_contents("php://input"), true);

    // проверяем токен
    $ch = $r;
    unset($ch['Token']);
    $ch['Password'] = $o->terminalpassword;
    // сортируем по ключам
    ksort($ch);
    $st = '';
    foreach($ch as $k=>$v){
        if($k=='Success' && $v){
            $st .= 'true';
            continue;
        }
        $st .= $v;
    }
    $hash = hash('sha256', $st);
    $tkn = $r['Token'];

    if($tkn!=$hash){
        exit;
    }

    if($r['Status']=='CONFIRMED'){
        $op = d()->Operation($r['OrderId'])->limit(0,1);
        $adm_type = $op->adm_title;
        $uid = $op->uid;
        if($op->type == 'buy_shop'){
            $op->status = 1;
        }
        if($op->type == 'buy_event'){
            $op->status = 1;
            $e = d()->Event($op->value)->limit(0,1);
            $e->tickets = $e->tickets - $op->value_p;
            $e->save;
        }
        $op->save;

        if($op->type == 'buy_license'){
            d()->buy_license_success($op->id);
        }
        if($op->type == 'buy_package' || $op->type == 'upgrade_package'){
            d()->buy_package_success($op->id);
        }

        // отправляем письмо одмину
        d()->detail = $adm_type;
        d()->operation_id = $r['OrderId'];
        d()->amount = $r['Amount']/100;
        d()->user_id = $uid;

        $l = d()->Letter(11);

        d()->Mail->to($o->email);
        d()->Mail->set_smtp($o->smtp_server,$o->smtp_port,$o->smtp_mail,$o->smtp_password,$o->smtp_protocol);
        d()->Mail->from($o->smtp_mfrom,$o->smtp_tfrom);
        d()->Mail->subject($l->title);
        d()->Mail->message($l->text);
        d()->Mail->send();
    }

    if($r['Status']!='AUTHORIZED' && $r['Status']!='CONFIRMED'){
        $op = d()->Operation($r['OrderId'])->limit(0,1);
        $op->status = 2;
        $op->save;
    }

    //$l = d()->Log->new;
    //$l->text = $hash.' | '.json_encode($r);
    //$l->save;
    print 'OK';
}

// создание связей для пользователей
function sv_users($uid=''){
    if(!$uid){
        return;
    }

    $user = d()->User->where('uid=?', $uid);
    $sponsor = $user->user_id;
    $packages = d()->Package;
    $p = Array();
    foreach($packages as $v){
        $p[$packages->id] = $packages->a_lines;
    }
    $type = 1;

    // связи для физиков
    if($user->type=='fiz'){
        while($type<=16){
            $sp = d()->User->where('uid = ?', $sponsor);

            // если отсутствует пользователь
            if(!count($sp)){
                break;
            }

            // позволяет ли ему пакет иметь такую линию
            // если нет, переходим к следующей итерации
            if($type > $p[$sp->package] || $sp->type != 'fiz'){
                $sponsor = $sp->user_id;
                $type++;
                continue;
            }

            $sv = d()->Sv_user->new;
            $sv->uid = $uid;
            $sv->sponsor = $sponsor;
            $sv->type = $type;
            $sv->save;

            $sponsor = $sp->user_id;
            $type++;
        }
    }else{
        // связи для юриков
        while($type<=2){
            $sp = d()->User->where('uid = ?', $sponsor);

            // если отсутствует пользователь
            if(!count($sp)){
                break;
            }

            // проверяем пакеты и в зависимости от этого создаем связи
            $pck = d()->Package($sp->package);
            if($type==1){
                // есть ли на пакете агентсвое вознаграждение
                if(!$pck->bonus_agent){
                    $sponsor = $sp->user_id;
                    $type++;
                    continue;
                }
            }
            if($type==2){
                // есть ли на пакете агентсвое вознаграждение
                if(!$pck->bonus_dopagent){
                    $sponsor = $sp->user_id;
                    $type++;
                    continue;
                }
            }

            $sv = d()->Sv_user->new;
            $sv->uid = $uid;
            $sv->sponsor = $sponsor;
            $sv->type = $type;
            $sv->save;

            $sponsor = $sp->user_id;
            $type++;
        }
    }
}

function run_ex_cashback(){
    $key = hash('md5','ti%^rex'.d()->Option->admin_key.'p@anz0#er');
    if($_GET['key']!=$key) {
        header('Location: //'.$_SERVER['SERVER_NAME']);
        exit;
    }

    $shop = d()->User->where('uid=?', $_GET['uid'])->limit(0,1);
    if(!count($shop)) {
        header('Location: //'.$_SERVER['SERVER_NAME']);
        exit;
    }

    // выбираем нужные операции
    $o = d()->Operation->where('type="ur_payment" AND le_user_id=? AND status=0', $shop->uid);
    if($_GET['date1'] && !$_GET['date2']){
        $d1 = date('Y-m-d', strtotime($_GET['date1']));
        $o = d()->Operation->where('type="ur_payment" AND le_user_id=? AND created_at >= ? AND status=0', $shop->uid, $d1);
    }
    if(!$_GET['date1'] && $_GET['date2']){
        $d2 = date('Y-m-d H:i:s', strtotime($_GET['date2'])+86399);
        $o = d()->Operation->where('type="ur_payment" AND le_user_id=? AND created_at <= ? AND status=0', $shop->uid, $d2);
    }
    if($_GET['date1'] && $_GET['date2']){
        $d1 = date('Y-m-d', strtotime($_GET['date1']));
        $d2 = date('Y-m-d H:i:s', strtotime($_GET['date2'])+86399);
        $o = d()->Operation->where('type="ur_payment" AND le_user_id=? AND created_at >= ? AND created_at <= ? AND status=0', $shop->uid, $d1, $d2);
    }

    foreach($o as $v){
        // выполняем операцию по начислению КБ
        d()->run_cb($o->id);

        // ставим метку, что вознагрождение прошло и статус
        $elem = d()->Operation($o->id);
        $elem->check_reward = 1;
        $elem->status = 1;
        $elem->save;
    }

    header('Location: /admin/list/ex_cashbacks/?run=success&date1='.$_GET['date1'].'&date2='.$_GET['date2'].'&uid='.$_GET['id'].'&title='.$_GET['title']);
    exit;
}

function run_cb($id=''){
    if(!$id){
        return;
    }

    $elem = d()->Operation($id);
    if(!count($elem)){
        return;
    }

    $user = d()->User->where('uid=?', $elem->uid);
    $le_user = d()->User->where('uid=?',$elem->le_user_id)->limit(0,1);
    //$option = d()->Option;

    // начисляем ожидаемый КБ у главного пользователя
    $cf = d()->Package($user->package)->cashback;
    $pcb = d()->truncated($elem->value/100*$cf);
    $rpcb = $user->opencb_balance - $pcb;
    if($rpcb<0){
        $rpcb = 0;
    }
    $user->opencb_balance = $rpcb;
    $user->cb_balance = $user->cb_balance + $pcb;
    $user->balance = $user->balance + $pcb;
    $user->save;

    // создаем operation и отправляем письмо
    d()->ch($elem->uid, $pcb, 'cashback', $elem->value, $elem->le_user_id, $cf, $le_user->title, '', '1');

    // начисляем ожидаемый КБ у всех, кому должны начислить
    $uids = explode(',',$elem->text);

    //d()->printr($uids);

    $packages = d()->Package->to_array();
    $p = Array();
    foreach($packages as $k=>$v){
        $p[$v['id']] = $v;
    }

    $sv_users = d()->Sv_user->where('uid=?', $elem->uid)->to_array();
    $sv = Array();
    foreach($sv_users as $k=>$v){
        $sv[$v['sponsor']] = $v['type'];
    }

    foreach($uids as $v){
        // расчитываем ожидаемый КБ который нужно начислить
        $us = d()->User->where('uid=?', $v)->limit(0,1);

        // если отсутствует пользователь
        if(!count($us)){
            continue;
        }

        $line = $sv[$v];
        $cf = $p[$us->package]['cashback_l'.$line];

        $pcb = d()->truncated($elem->value/100*$cf);
        $rpcb = $us->opencb_balance - $pcb;
        if($rpcb<0){
            $rpcb = 0;
        }
        $us->opencb_balance = $rpcb;
        $us->cb_balance = $us->cb_balance + $pcb;
        $us->balance = $us->balance + $pcb;
        $us->save;

        // создаем operation и отправляем письмо
        d()->ch($v, $pcb, 'cashback', $elem->value, $elem->le_user_id, $cf, '', $elem->uid, '1');
    }

    // далее начисляем агентский КБ, если есть кому
    $ag_sv_users = d()->Sv_user->where('uid=?', $elem->le_user_id)->to_array();
    foreach($ag_sv_users as $k=>$v){
        $ag_user = d()->User->where('uid=?', $v['sponsor']);
        // есть ли пользователь
        if(!count($ag_user)){
            continue;
        }
        // позволяет ли ему пакет
        if($v['type']==1){
            if($p[$ag_user->package]['bonus_agent']>0){
                $value_p = $p[$ag_user->package]['bonus_agent'];
                // расчитываем бонус
                $value = d()->truncated($elem->value/100*$value_p);
            }else{
                continue;
            }
        }
        if($v['type']==2){
            if($p[$ag_user->package]['bonus_dopagent']>0){
                $value_p = $p[$ag_user->package]['bonus_dopagent'];
                // расчитываем бонус
                $value = d()->truncated($elem->value/100*$value_p);
            }else{
                continue;
            }
        }

        // начисляем денюжки
        $ag_user->balance = $ag_user->balance + $value;
        $ag_user->cb_balance = $ag_user->cb_balance + $value;
        // списываем ожидаемый КБ
        $ag_user->opencb_balance = $ag_user->opencb_balance - $value;
        if($ag_user->opencb_balance<0) $ag_user->opencb_balance = 0;
        $ag_user->save;

        // создаем operation и отправляем письмо
        d()->ch($v['sponsor'], $value, $type='agent_reward', $elem->value, $elem->le_user_id, $value_p, $le_user->title, $elem->uid, '1');
    }
}

// начисление ожидаемого кешбека пользователям по линиям
function cb_make($uid='', $cb='', $tp=''){
    if(!$uid || !$cb){
        return;
    }

    d()->sponsors = '';

    $user = d()->User->where('uid=?', $uid);
    $sponsor = $user->user_id;

    $packages = d()->Package->to_array();
    $p = Array();
    foreach($packages as $k=>$v){
        $p[$v['id']] = $v;
    }
    //$type = 1;

    $sv_users = d()->Sv_user->where('uid=?', $uid);

    foreach($sv_users as $v){
        $sp = d()->User->where('uid = ?', $sv_users->sponsor)->limit(0,1);
        // если отсутствует пользователь
        if(!count($sp)){
            break;
        }

        // позволяет ли ему пакет иметь такую линию
        // если нет, переходим к следующей итерации
        if($sv_users->type > $p[$sp->package]['a_lines'] || $sp->type != 'fiz'){
            continue;
        }

        // список спонсоров, кому начислился ожидаемый КБ
        d()->sponsors .= $sv_users->sponsor.',';
        // расчитываем размер КБ для пользователя
        $pp = $p[$sp->package]['cashback_l'.$sv_users->type];
        $pcb = d()->truncated($cb/100*$pp);

        // сохраняем ожидаемый КБ
        if($pcb>0){
            if($tp=='del'){
                $r = $sp->opencb_balance - $pcb;
                if($r<0)$r=0;
                $sp->opencb_balance = $r;
            }else{
                $sp->opencb_balance = $sp->opencb_balance + $pcb;
            }
            $sp->save;
        }
    }
    // удаляем последнюю запятую
    d()->sponsors = substr(d()->sponsors,0,-1);
}

// генератор operations
function ch($uid='', $value='', $type='', $amount='', $le_user_id='', $value_p='', $text='', $user_id='', $status=''){

    if(!$uid || !$value && $type!='new_status' || !$type){
        return;
    }

    $u = d()->User()->where('uid=?', $uid)->limit(0,1);
    if(!count($u)){
        return;
    }


    $ch = d()->Operation->new;
    $ch->uid = $uid;
    $ch->value = $value;
    $ch->type = $type;
    if($value_p){
        $ch->value_p = $value_p;
    }
    if($text){
        $ch->text = $text;
    }
    if($user_id){
        $ch->user_id = $user_id;
    }
    if($le_user_id){
        $ch->le_user_id = $le_user_id;
    }
    if($amount){
        $ch->amount = $amount;
    }
    if($status){
        $ch->status = $status;
    }
    if($status==1){
        $ch->check_reward = 1;
    }
    $ch->save;

    if($type=='adm_cashback' || $type=='cashback'){
        d()->cashback = $value;
        $l = d()->Letter(6);
    }

    if($type=='ur_payment'){
        d()->amount = $amount;
        $cf = d()->Package($u->package)->cashback;
        d()->cashback = d()->truncated($value/100*$cf);
        $l = d()->Letter(4);
    }

    if($type=='leader_bonus'){
        return;
    }

    if($type=='new_status'){
        d()->status = $text;
        d()->reward = $amount;
        $l = d()->Letter(9);
    }

    if($type=='withdrawal'){
        d()->amount = $value;
        d()->comission = $value_p;
        $l = d()->Letter(10);
    }

    $o = d()->Option;

    d()->Mail->to($u->email);
    d()->Mail->set_smtp($o->smtp_server,$o->smtp_port,$o->smtp_mail,$o->smtp_password,$o->smtp_protocol);
    d()->Mail->from($o->smtp_mfrom,$o->smtp_tfrom);
    d()->Mail->subject($l->title);
    d()->Mail->message($l->text);
    d()->Mail->send();
}


// сохранение операции
function save_operations()
{
    $elem = d()->Operation(url(4));
    $elem->status = $_POST['data']['status'];

    // если пришла отмена операции, и она уже была начислена пользователям, то ничего не делаем
    // если пришла отмена операции, и она еще не была начислена пользователям, то:
    if($_POST['data']['status']==2 && !$elem->check_reward){
        // ставим метку, что вознагрождение прошло
        $elem->check_reward = 1;

        $user = d()->User->where('uid=?', $elem->uid);
        $option = d()->Option;

        if($elem->type=='ur_payment'){
            // убираем ожидаемый КБ у главного пользователя
            $cf = d()->Package($user->package)->cashback;
            $pcb = d()->truncated($elem->value/100*$cf);
            $rpcb = $user->opencb_balance - $pcb;
            if($rpcb<0){
                $rpcb = 0;
            }
            $user->opencb_balance = $rpcb;
            $user->save;

            // убираем ожидаемый КБ у всех, кому начислили
            $uids = explode(',',$elem->text);

            $packages = d()->Package->to_array();
            $p = Array();
            foreach($packages as $k=>$v){
                $p[$v['id']] = $v;
            }

            $sv_users = d()->Sv_user->where('uid=?', $elem->uid)->to_array();
            $sv = Array();
            foreach($sv_users as $k=>$v){
                $sv[$v['sponsor']] = $v['type'];
            }

            foreach($uids as $v){
                // расчитываем ожидаемый КБ который нужно убрать
                $us = d()->User->where('uid=?', $v)->limit(0,1);

                // если отсутствует пользователь
                if(!count($us)){
                    continue;
                }

                $line = $sv[$v];
                $pp = $p[$us->package]['cashback_l'.$line];

                $pcb = d()->truncated($elem->value/100*$pp);
                $rpcb = $us->opencb_balance - $pcb;
                if($rpcb<0){
                    $rpcb = 0;
                }
                $us->opencb_balance = $rpcb;
                $us->save;
            }
        }

        if($elem->type=='withdrawal'){
            // возвращаем деньги пользователю
            $user->balance = $user->balance + $elem->value;
            $user->save;
        }
    }

    // если пришло подтверждение операции, и она уже была начислена пользователям, то ничего не делаем
    // если пришло подтверждение операции, и она еще не была начислена пользователям, то:
    if($_POST['data']['status']==1 && !$elem->check_reward){
        // ставим метку, что вознагрождение прошло
        if($elem->type!='withdrawal') {
            $elem->check_reward = 1;
        }

        $user = d()->User->where('uid=?', $elem->uid);
        $option = d()->Option;

        if($elem->type=='ur_payment'){
            // выполняем эту операцию (вызывается из нескольких мест)
            d()->run_cb($elem->id);
        }

        if($elem->type=='buy_package' || $elem->type=='upgrade_package'){
            // вызываем функцией, потому что вызывается из нескольких мест
            d()->buy_package_success($elem->id);
        }

        if($elem->type=='buy_event'){
            $e = d()->Event($elem->value)->limit(0,1);
            $e->tickets = $e->tickets - $elem->value_p;
            $e->save;
        }

        if($elem->type=='new_status' && $elem->amount=='World Tour' || $elem->type=='new_status' && $elem->amount=='Dream Car'){
            // начисляем денюшку пользователю
            $user->balance = $user->balance + $_POST['data']['value_p'];
            $user->save;

            $elem->value_p = $_POST['data']['value_p'];
        }
    }

    $elem->save();
    header('Location: /admin/list/operations');
    exit;
}

// удаление операции
function del_operations()
{
    if(!iam_allow(url(3))){
        return 'Вам запрещён доступ к этому разделу.';
    }

    $operation = d()->Operation(url(4));
    if($operation->type=='ur_payment'){
        // убираем ожидаемый КБ у пользователей

        $u = d()->User->where('uid=?', $operation->uid)->limit(0,1);

        $amount_cashback = $operation->value;
        $cf = d()->Package($u->package)->cashback;
        $pcb = $u->opencb_balance - d()->truncated($amount_cashback/100*$cf);
        // убираем ожидаемый КБ для пользователя
        if($pcb<0){
            $pcb = 0;
        }
        $u->opencb_balance = $pcb;
        $u->save;

        // убираем ожидаемый КБ по линиям
        d()->cb_make($u->uid, $amount_cashback, 'del');

        // убираем ожидаемый КБ для агентов
        $ag_sv_users = d()->Sv_user->where('uid=?', $operation->le_user_id)->to_array();
        $packages = d()->Package->to_array();
        $p = Array();
        foreach($packages as $k=>$v){
            $p[$v['id']] = $v;
        }
        foreach($ag_sv_users as $k=>$v){
            $ag_user = d()->User->where('uid=?', $v['sponsor']);
            // есть ли пользователь
            if(!count($ag_user)){
                continue;
            }
            // позволяет ли ему пакет
            if($v['type']==1){
                if($p[$ag_user->package]['bonus_agent']>0){
                    $value_p = $p[$ag_user->package]['bonus_agent'];
                    // расчитываем бонус
                    $value = d()->truncated($amount_cashback/100*$value_p);
                }else{
                    continue;
                }
            }
            if($v['type']==2){
                if($p[$ag_user->package]['bonus_dopagent']>0){
                    $value_p = $p[$ag_user->package]['bonus_dopagent'];
                    // расчитываем бонус
                    $value = d()->truncated($amount_cashback/100*$value_p);
                }else{
                    continue;
                }
            }

            // убираем ожидаемый КБ
            $re = $ag_user->opencb_balance - $value;
            if($re<0)$re=0;
            $ag_user->opencb_balance = $re;
            $ag_user->save;
        }
    }

    // нативное удаление
    if(substr(url(3),-8)=='__fields'){
        $tablename = substr(url(3),0,-8);
        $columns = d()->db->query ('select * from '.et(url(3)).' where id = '.e(url(4)))->fetchAll();
        if($columns){

            d()->Scaffold->rename_column($tablename,$columns[0]['field_name'],'deleted_field_'. $columns[0]['id'] );
        }
    }
    d()->db->exec("delete from `".et(url(3))."`  where id= ".e(url(4))." ");

    return  "<script> window.opener.document.location.href=window.opener.document.location.href;window.open('','_self','');window.close();</script>";
}

function login_check(){
    if(d()->Auth->is_guest()){
        header('Location: '.d()->langlink.'/');
        exit;
    }
    d()->user = d()->Auth->user();
    if(!d()->user->id){
        d()->Auth->logout();
        header('Location: '.d()->langlink.'/');
        exit;
    }
    if(d()->user->type=='ur' && url(1)=='cabinet'){
        header('Location: '.d()->langlink.'/');
        exit;
    }
    if(d()->user->type=='fiz' && url(1)=='le_cabinet'){
        header('Location: '.d()->langlink.'/');
        exit;
    }

    if(d()->user->max_status){
        d()->status = d()->Status(d()->user->max_status);
    }
    d()->package = d()->Package(d()->user->package);
}

function get_underline($uid = Array()){
    d()->users_list = d()->User->where('user_id IN (?)',$uid);
}

function get_packages_array(){
    d()->packages_array = Array();
    $p = d()->Package;
    foreach($p as $v){
        d()->packages_array[$p->id] = $p->title;
    }
}

function get_statuses_array(){
    d()->statuses_array = Array();
    d()->statuses_array[0] = d()->t("none_status");
    $s = d()->Status;
    foreach($s as $v){
        d()->statuses_array[$s->id] = $s->title;
    }
}

function printr($m = Array()){
    print '<pre>';
    print_r($m);
    print '</pre>';
    exit();
}

function get_server(){
    if($_SESSION['admin']) {
        print '<pre>';
        print_r($_SERVER);
        print '</pre>';
        exit;
    }
    d()->page_not_found();
}

function profile_edit(){
    $r = Array();
    if($_POST){
        if($_POST['name'] && $_POST['surname'] && $_POST['country'] && $_POST['city'] && $_POST['email']){
            $u = d()->Auth()->user;
            if(!$u->count){
                $r['error'] = d()->t("server_error");
            }else{

                if($_POST['email']!=$u->email && $_POST['email']){
                    $ch = d()->User->where('email=?',$_POST['email']);
                    if(count($ch)){
                        $r['error'] = d()->t("double_user");
                    }
                }else{
                    // $l = d()->Log->new;
                    // $l->text = json_encode($_POST);
                    // $l->save;

                    $u->name = $_POST['name'];
                    $u->surname = $_POST['surname'];
                    $u->otchestvo = $_POST['otchestvo'];
                    $u->birthdate = $_POST['birthdate'];
                    $u->gender = $_POST['gender'];
                    $u->country = $_POST['country'];
                    $u->city = $_POST['city'];
                    $u->phone = $_POST['phone'];
                    $u->email = $_POST['email'];
                    $u->wallet = $_POST['wallet'];
                    $u->card = $_POST['card'];
                    if($_POST['password']){
                        $u->password = md5('dfg45'.$_POST['password'].'gg43');
                    }
                    $u->save;
                    $r['error'] = 0;
                }
            }
        }else{
            $r['error'] = d()->t("obyaz_polya");
        }
    }else{
        $r['error'] = 1;
    }
    print json_encode($r);
}

function get_session(){
    if($_SESSION['admin']) {
        print '<pre>';
        print_r($_SESSION);
        print '</pre>';
        exit;
    }
    d()->page_not_found();
}

function qrgenerator(){
    $id = url(2);
    $lnk = 'https://'.$_SERVER['SERVER_NAME'].'/le_cabinet/payment?id='.$id.'&step=2';
    if(!$id || $id=='index'){
        exit;
    }
    include $_SERVER['DOCUMENT_ROOT']."/vendors/phpqrcode-master/qrlib.php";
    QRcode::png($lnk, false, 'L', 18, 1);
}

function cut_text($value, $limit = 300)
{
    $value = stripslashes($value);
    $value = htmlspecialchars_decode($value, ENT_QUOTES);
    $value = str_ireplace(array('<br>', '<br />', '<br/>'), ' ', $value);
    $value = strip_tags($value);
    $value = trim($value);

    if (mb_strlen($value) < $limit) {
        return $value;
    } else {
        $value   = mb_substr($value, 0, $limit);
        $length  = mb_strripos($value, ' ');
        $end     = mb_substr($value, $length - 1, 1);

        if (empty($length)) {
            return $value;
        } elseif (in_array($end, array('.', '!', '?'))) {
            return mb_substr($value, 0, $length);
        } elseif (in_array($end, array(',', ':', ';', '«', '»', '…', '(', ')', '—', '–', '-'))) {
            return trim(mb_substr($value, 0, $length - 1)) . '...';
        } else {
            return trim(mb_substr($value, 0, $length)) . '...';
        }

        return trim();
    }
}

function access_check(){
    if(!d()->user->access){
        header('Location: '.d()->langlink.'/le_cabinet/profile_edit');
        exit;
    }
}

function truncated($num){
    return floor($num * 100)/100;
}

function buy_system(){
    print '<pre>';
    print_r($_GET);
    print '</pre>';

    d()->option = d()->Option;

    if($_GET['type']){
        d()->user = d()->Auth->user();
        d()->package = d()->Package(d()->user->package);
        $type = $_GET['type'];
    }
    if($_GET['type']=='buy_package' && $_GET['package']){
        $p = d()->Package($_GET['package']);
        if(!count($p)){
            header('Location: '.d()->langlink.'/cabinet/?error=none_package');
            exit();
        }
        $amount = $p->price;
        $ttl = 'Покупка пакета '.$p->titile;
        if(d()->package->price > 0){
            $type = 'upgrade_package';
            $amount = d()->get_pp($p->price);
            $ttl = 'Апгрейд пакета до '.$p->titile;
        }

        // комиссия терминала
        $pamount = $amount;
        $pamount += floatval($amount/100*d()->option->terminalcomission);

        // создаем операцию
        $o = d()->Operation->new;
        $o->type = $type;
        $o->value = $_GET['package'];
        $o->amount = $amount;
        $o->uid = d()->user->uid;
        $o->text = $p->title;
        $ro = $o->save_and_load();

        // интеграция с платежной системой
        if(d()->option->paytype=='tinkoff'){
            $amount_pay = $pamount*100;
            $pay_lnk = $r = d()->get_pay_url($amount_pay, $ro->id, d()->lang, d()->user->uid, $ttl);
            if(!$pay_lnk['ErrorCode']){
                header('Location: '.$pay_lnk['PaymentURL']);
                exit;
            }
            print 'Error '.$pay_lnk['ErrorCode'];
            exit;
        }

        if(d()->option->paytype=='qiwi'){
            header('Location: '.d()->option->qiwi_link);
            exit;
        }

        // функция успешно оплаченной покупки пакета d()->buy_package_success($ro->id);
        //header('Location: '.d()->langlink.'/cabinet/?action=buy_package');
        //exit;
    }

    if($_GET['type']=='buy_license'){
        $count = $_GET['count'];
        $amount = d()->option->license_price*$count;

        // комиссия терминала
        $pamount = $amount;
        $pamount += floatval($amount/100*d()->option->terminalcomission);

        // создаем операцию
        $o = d()->Operation->new;
        $o->type = $type;
        $o->value = $count;
        $o->amount = $amount;
        $o->uid = d()->user->uid;
        $ro = $o->save_and_load();

        // интеграция с платежной системой
        if(d()->option->paytype=='tinkoff'){
            $amount_pay = $pamount*100;
            $pay_lnk = $r = d()->get_pay_url($amount_pay, $ro->id, d()->lang, d()->user->uid, 'Покупка лицензии');
            if(!$pay_lnk['ErrorCode']){
                header('Location: '.$pay_lnk['PaymentURL']);
                exit;
            }
            print 'Error '.$pay_lnk['ErrorCode'];
            exit;
        }

        if(d()->option->paytype=='qiwi'){
            header('Location: '.d()->option->qiwi_link);
            exit;
        }

        // функция успешно оплаченной покупки лицензии d()->buy_license_success($ro->id);
        //d()->buy_license_success($ro->id);
    }

    if($_GET['type']=='buy_shop'){
        $count = $_GET['count'];
        $msize = $_GET['msize'];
        $color = $_GET['color'];
        $id = $_GET['id'];

        $e = d()->Shop($id)->limit(0,1);
        $amount = $e->price*$count;
        // комиссия терминала
        $pamount = $amount;
        $pamount += floatval($amount/100*d()->option->terminalcomission);

        // создаем операцию
        $o = d()->Operation->new;
        $o->type = $type;
        $o->value = $id;
        $o->value_p = $count;
        $o->amount = $amount;
        $o->uid = d()->user->uid;
        $o->text = '{"title":"'.$e->title.'","color":"'.$color.'","size":"'.$msize.'"}';
        $ro = $o->save_and_load();

        // интеграция с платежной системой
        if(d()->option->paytype=='tinkoff'){
            $amount_pay = $pamount*100;
            $pay_lnk = $r = d()->get_pay_url($amount_pay, $ro->id, d()->lang, d()->user->uid, $e->title);
            if(!$pay_lnk['ErrorCode']){
                header('Location: '.$pay_lnk['PaymentURL']);
                exit;
            }
            print 'Error '.$pay_lnk['ErrorCode'];
            exit;
        }

        if(d()->option->paytype=='qiwi'){
            header('Location: '.d()->option->qiwi_link);
            exit;
        }
    }

    if($_GET['type']=='buy_event'){
        $count = $_GET['count'];
        $id = $_GET['id'];

        $e = d()->Event($id)->limit(0,1);
        $amount = $e->price*$count;
        // комиссия терминала
        $pamount = $amount;
        $pamount += floatval($amount/100*d()->option->terminalcomission);

        // создаем операцию
        $o = d()->Operation->new;
        $o->type = $type;
        $o->value = $id;
        $o->value_p = $count;
        $o->amount = $amount;
        $o->uid = d()->user->uid;
        $o->text = $e->title;
        $ro = $o->save_and_load();

        // интеграция с платежной системой
        if(d()->option->paytype=='tinkoff'){
            $amount_pay = $pamount*100;
            $pay_lnk = $r = d()->get_pay_url($amount_pay, $ro->id, d()->lang, d()->user->uid, $e->title);
            if(!$pay_lnk['ErrorCode']){
                header('Location: '.$pay_lnk['PaymentURL']);
                exit;
            }
            print 'Error '.$pay_lnk['ErrorCode'];
            exit;
        }

        if(d()->option->paytype=='qiwi'){
            header('Location: '.d()->option->qiwi_link);
            exit;
        }
    }
}

function get_cities()
{
	$cities = d()->City->to_array();
	$a = Array();
	$ru = Array();
	$en = Array();
	foreach($cities as $key=>$val){
		$code = mb_substr($val['title'], 0, 1);
		$en_code = mb_substr($val['en_title'], 0, 1);
		$a[] = Array('title'=>$val['title'], 'en_title'=>$val['en_title'],'code'=>$code,'en_code'=>$en_code,'id'=>$val['id']);
		
		$ru[] = $code;
		$en[] = $en_code;
	}
	
	sort($ru, SORT_LOCALE_STRING);
	sort($en);
	d()->ru_alf = array_unique($ru);
	d()->en_alf = array_unique($en);
	
	if($_GET['change_city']){
		$_SESSION['city'] = $_GET['change_city'];
		//$_COOKIES['city'] = $_GET['change_city'];
	}

	if($_SESSION['city'] && $_SESSION['city']!='all'){
		d()->city = d()->City($_SESSION['city'])->title;
	}else{
		d()->city = d()->t("all_city");
        $_SESSION['city']='all';
	}
	
	return $a;
}

function getlnk()
{
	d()->thislnk = url();
	if(substr(d()->thislnk, -5)=='index'){
		d()->thislnk = substr(d()->thislnk, 0, -5);
	}
	return d()->thislnk;
}

function change_image()
{
	$user = d()->Auth->user();
	if(isset($_POST['my_file_upload']) && $user->id){
		
		$name=$_FILES[0]['name'];
		$tmp_name=$_FILES[0]['tmp_name'];
		
		$picture_adress = '/images/profiles/'.md5_file($tmp_name).'.' . strtolower( substr(strrchr($name, '.'), 1));
		move_uploaded_file($tmp_name,$_SERVER['DOCUMENT_ROOT'].$picture_adress);
		
		$user->image = $picture_adress;
		$user->save();
		
		print $picture_adress;
	}
	
}

function get_access_token()
{
    $o = d()->Option;
    $url = 'https://api.admitad.com/token/';
    
    $post_data = array (
        "code" => $o->code,
        "client_secret" => $o->client_secret,
        "grant_type" => "authorization_code",
        "client_id" => $o->client_id,
        "redirect_uri" => $o->redirect_uri
    );
    $headers = array("Authorization: Basic ".$o->base64_header);
    
    // 1. инициализация
    $ch = curl_init();

    // 2. указываем параметры, включая url
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // указываем, что у нас POST запрос
    curl_setopt($ch, CURLOPT_POST, 1);
    // добавляем переменные
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

    // 3. получаем HTML в качестве результата
    $output = curl_exec($ch);
    // 4. закрываем соединение
    curl_close($ch);
    
    $r = json_decode($output);
    print '<pre>';
    print_r($r, true);
    print '</pre>';
    
    $o->access_token = $r->access_token;
    $o->refresh_token = $r->refresh_token;
    $o->expires_in = round($r->expires_in/60/60/24);
    $o->refresh_date = date('d.m.Y H:i');
    $o->save;

}

function refresh_access_token()
{
    $o = d()->Option;
    $url = 'https://api.admitad.com/token/';
    
    $post_data = array (
        "refresh_token" => $o->refresh_token,
        "client_secret" => $o->client_secret,
        "grant_type" => "refresh_token",
        "client_id" => $o->client_id
    );
    
    
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // указываем, что у нас POST запрос
    curl_setopt($ch, CURLOPT_POST, 1);
    // добавляем переменные
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    // 3. получаем HTML в качестве результата
    $output = curl_exec($ch);
    // 4. закрываем соединение
    curl_close($ch);
    
    $r = json_decode($output);

    $o->access_token = $r->access_token;
    $o->refresh_token = $r->refresh_token;
    $o->expires_in = round($r->expires_in/60/60/24);
    $o->refresh_date = date('d.m.Y H:i');
    $o->save;

    print '<pre>';
    print_r($r);
    print '</pre>';
}

function get_subid_info()
{
    $o = d()->Option;
    $url = 'https://api.admitad.com/statistics/sub_ids/';
    $headers = array("Authorization: Bearer ".$o->access_token);
    
    if($_GET){
        $url .= '?'.$_SERVER['QUERY_STRING'];
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    
    $r = json_decode($output, true);
    
    print "<pre>";
	print_r($r);
	print "</pre>";
    print $url;
}

// обновление CashBack Admitad (каждый час)
function refresh_adm_cashback()
{
    $o = d()->Option;
    $url = 'https://api.admitad.com/statistics/sub_ids/';
    $headers = array("Authorization: Bearer ".$o->access_token);

    // проверка, есть ли нужные токены иначе while будет висеть
    if(!$o->access_token || $o->access_token==""){
        //d()->Mail->to($o->email);
        d()->Mail->to('mfrf@bk.ru');
        d()->Mail->set_smtp($o->smtp_server,$o->smtp_port,$o->smtp_mail,$o->smtp_password,$o->smtp_protocol);
        d()->Mail->from($o->smtp_mfrom,$o->smtp_tfrom);
        d()->Mail->subject('Ошибка интеграции с API Admitad');
        d()->Mail->message('Необходимо обновить access_token');
        d()->Mail->send();

        $tes = file_get_contents('https://albixe.com/api/get_access_token');
        print '$tes';
        exit();
    }

    $packages = d()->Package->to_array();

    // изначально выбираем всех пользователей, у кого есть ожидаемый КБ
    // и если он уже начислен в Адмитад, то начисляем его пользвателям в ALBIXE
    $u = d()->User->where('adm_opencb_balance>0');
    foreach($u as $val){
        // формируем запрос в Admitad
        // берем всю историю по этому UID
        $url .= '?date_start=01.01.2019&subid='.$u->uid.'&limit=500&offset=0';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);

        $r = json_decode($output, true);

        print "UID: ".$u->uid;
        print '<pre>';
        print_r($r);
        print '</pre>';

        // проверяем, если показатели пользователя отличаются
        if($r['results'][0]['payment_sum_approved']>$u->adm_cb_balance){
             // вычисляем ожидаемый КБ
             $adm_opencb_balance = 0;
             if($r['results'][0]['payment_sum_open']){
                 $adm_opencb_balance = $r['results'][0]['payment_sum_open']/100*$o->admitad_p;
             }

             // вычисляем ссумму начисления
             $su = $r['results'][0]['payment_sum_approved']-$u->adm_cb_balance;
             $s = $su/100*$o->admitad_p;

             // то производим начисление
             $user = d()->User($u->id);
             $user->adm_cb_balance = $r['results'][0]['payment_sum_approved'];
             $user->adm_opencb_balance = floatval(round($adm_opencb_balance, 2));
             $user->balance = $user->balance + floatval(round($s, 2));
             $user->save;

             // далее создаем историю начисления
             d()->ch($u->uid, $s, 'adm_cashback', floatval(round($su, 2)), '', $o->admitad_p, '', '', 1);

            // далее начисляем спонсорам
            $sv = d()->Sv_user->where('uid=?', $user->uid)->to_array();
            foreach($sv as $vl){
                $usr = d()->User->where('uid = ?', $vl['sponsor'])->limit(0,1);
                $pr = $packages[$usr->package]['cashback_l'.$vl['type']];
                if($pr){
                    $value = 0;
                    if($su){
                        $value = floatval(round($su/100*$pr, 2));
                    }

                    // ищем строку в логах
                    $l = d()->Admitad_log->where('uid=? AND user_id=?', $vl['sponsor'], $user->uid);
                    $rvl = $l->value - $value;
                    if($rvl>0){
                        $l->value = $rvl;
                    }else{
                        $l->value = 0;
                    }
                    $l->save;

                    if($value){
                        $usr->balance = $usr->balance + $value;
                        $usr->save;
                        d()->ch($usr->uid, $value, 'adm_cashback', floatval(round($su, 2)), '', $pr, '', $user->uid, 1);
                    }
                }
            }

             print $u->uid.' | '.$s.'<br>';
        }

        // убраем лишний ожидаемый КБ, если операция была отклонена
        $check_adm_opencb_balance = 0;
        if($r['results'][0]['payment_sum_open']){
            $check_adm_opencb_balance = $r['results'][0]['payment_sum_open']/100*$o->admitad_p;
        }
        if($u->adm_opencb_balance > $check_adm_opencb_balance && $r['results'][0]['payment_sum_approved'] == $u->adm_cb_balance){

            $oocb = $u->adm_opencb_balance;

            $adm_opencb_balance = 0;
            if($r['results'][0]['payment_sum_open']){
                $adm_opencb_balance = $r['results'][0]['payment_sum_open']/100*$o->admitad_p;
            }
            // то производим начисление
            $user = d()->User($u->id);
            $user->adm_opencb_balance = floatval(round($adm_opencb_balance, 2));
            $user->save;

            // убираем у спонсоров
            $oores = ($oocb - $adm_opencb_balance)*2;
            $sv = d()->Sv_user->where('uid=?', $u->uid)->to_array();
            foreach($sv as $vl){
                $usr = d()->User->where('uid = ?', $vl['sponsor'])->limit(0,1);
                $pr = $packages[$usr->package]['cashback_l'.$vl['type']];
                if($pr){
                    $value = 0;
                    if($oores){
                        $value = floatval(round($oores/100*$pr, 2));
                    }
                    if($value){
                        // ищем строку в логах
                        $l = d()->Admitad_log->where('uid=? AND user_id=?', $vl['sponsor'], $user->uid);
                        $rvl = $l->value - $value;
                        if($rvl>0){
                            $l->value = $rvl;
                        }else{
                            $l->value = 0;
                        }
                        $l->save;
                    }
                }
            }
        }
    }


     // затем берем данные за вчера и сегодня
     // и проверяем, есть ли у пользователей расхождения в ожидаемых КБ
     // если есть, обновляем пользователю ожидаемый КБ

     $offset = 0;
     $wh = 0;

     $uids = Array();
     $adm = Array();

     // вайл на случай, если результатов в Адмитад больше 500
     while($wh==0) {
        // получаем дату для фильтра
        $start_date = date('d.m.Y', strtotime("-1 days"));
        $url = 'https://api.admitad.com/statistics/sub_ids/';
        $url .= '?date_start='.$start_date.'&limit=500&offset='.$offset;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);

        $r = json_decode($output, true);

        foreach($r['results'] as $v){
            if($v['subid']){
                $uids[] = $v['subid'];
                $adm[$v['subid']] = $v['payment_sum_open'];
            }
        }

        if($r['_meta']['limit']<=$r['_meta']['count']){
            $offset = $offset + $r['_meta']['count'];
        }else{
            $wh=1;
        }
        //$wh=1;
        print $offset;
     }

     $users = d()->User->where('uid IN (?)', $uids);
     foreach($users as $v){
         $adm_opencb = $adm[$v['uid']];
         if($adm_opencb != $users->adm_opencb_balance){
             // вычисляем ожидаемый КБ
             $adm_opencb_balance = 0;
             if($adm_opencb){
                 $adm_opencb_balance = $adm_opencb/100*$o->admitad_p;
             }
             $us = d()->User->where('uid = ?', $v['uid']);
             $us->adm_opencb_balance = floatval(round($adm_opencb_balance, 2));
             $us->save;

             // далее создаем admitad_log для спонсоров
             $sv = d()->Sv_user->where('uid=?', $us->uid)->to_array();
             foreach($sv as $vl){
                 $usr = d()->User->where('uid = ?', $vl['sponsor'])->limit(0,1);
                 $pr = $packages[$usr->package]['cashback_l'.$vl['type']];
                 if($pr){
                     $value = 0;
                     if($adm_opencb){
                         $value = floatval(round($adm_opencb/100*$pr, 2));
                     }

                     // ищем строку в логах
                     $l = d()->Admitad_log->where('uid=? AND user_id=?', $vl['sponsor'], $us->uid);
                     if(!count($l)){
                         $l = d()->Admitad_log->new;
                         $l->uid = $vl['sponsor'];
                         $l->user_id = $us->uid;
                         $l->value = $value;
                         $l->save;
                     }else{
                         $l->value = $l->value + $value;
                         $l->save;
                     }
                 }
             }
         }
     }

     print 'UIDS';
     print '<pre>';
     print_r($uids);
     print '</pre>';

     print 'ADM';
     print '<pre>';
     print_r($adm);
     print '</pre>';

     print 'R';
     print '<pre>';
     print_r($r);
     print '</pre>';

     //print $url;
}

function hello_world()
{
	print "<pre>";
	print_r($_SERVER);
	print "</pre>";
}

function page_not_found()
{
	ob_end_clean();
	header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found'); 
	header('Status: 404 Not Found');
	d()->content = d()->error_404_tpl();
	print d()->main_tpl();
	exit;
}

function save_users()
{
	$user = d()->User(url(4))->limit(0,1);
	
	if($_POST['data']['pass']){
		$user->password=md5('dfg45'.$_POST['data']['pass'].'gg43');
	}
    $flag = 0;
	if(!$user->check_active && $_POST['data']['is_active']){
	    $flag = 1;
	    $user_id = $user->user_id;
    }
	
	$user->name=$_POST['data']['name'];
	$user->surname=$_POST['data']['surname'];
	$user->email=$_POST['data']['email'];
	
	$user->country=$_POST['data']['country'];
	$user->city=$_POST['data']['city'];
	$user->type=$_POST['data']['type'];
	$user->licensies=$_POST['data']['licensies'];
	$user->balance=$_POST['data']['balance'];
	$user->phone=$_POST['data']['phone'];
	$user->is_active=$_POST['data']['is_active'];
	$user->cashback=$_POST['data']['cashback'];
    if(!$user->check_active && $_POST['data']['is_active']){
        $user->check_active=1;
    }

	$user->save();

	// списываем лицензию
	if($flag){
        $sp = d()->User->where('uid=?',$user_id)->limit(0,1);
        $nl = $sp->licensies - 1;
        if($nl < 0){
            $nl = 0;
        }
        $sp->licensies = $nl;
        $sp->save;
    }

	header('Location: /admin/list/users');
	exit;
}

function save_stores()
{
	//$s = d()->Store(url(4))->limit(0,1);

	print '<pre>';
	print_r($_POST);
	print '</pre>';


	//header('Location: /admin/list/users');
	exit;
}

function debug(){
	if($_SESSION['admin']){
		if($_GET['auth']){
            $u = d()->User($_GET['auth']);
            d()->Auth->login($_GET['auth']);
		    if($u->type=='fiz'){
                header('Location: /cabinet/');
            }else{
                header('Location: /le_cabinet/');
            }
		}
		
	}
}

function ajax_stores(){
	if(isset($_POST['amount'])){
		$a = Array();
		$o = d()->Option;
		d()->stores = d()->Store;
		if($_POST['category']){
			d()->stores->search('category_id', ','.$_POST['category'].',');
		}
		if($_POST['search']){
            d()->stores->search('zag','title','tags', $_POST['search']);
		}
		if($_POST['sort']=='popular'){
			d()->stores->order_by('view DESC');
		}
		if($_POST['sort']=='cashback'){
			d()->stores->order_by('cashback DESC');
		}
		if($_POST['sort']=='date'){
			d()->stores->order_by('created_at DESC');
		}
		
		$full_cnt = count(d()->stores);
		d()->stores->limit($_POST['amount'],$o->store_count);
		
		if(count(d()->stores)){
			$stores = d()->stores->to_array();
			$line = '';
			foreach($stores as $key=>$val){
                if(d()->Auth->is_guest){
                    $href = 'href="#not-auth" data-toggle="modal"';
                }else{
                    $href = 'href="'.d()->langlink.'/stores/'.$val['id'].'"';
                }
				$line .= '<div class="store"><div class="img"><a '.$href.'><img src="'.d()->preview($val['image'], 'auto', 129).'" alt="'.$val['title'].'" /></a></div><span class="hr"><img src="/images/elip1.png" class="elip1" /><hr><img src="/images/elip2.png" class="elip2" /></span><center>'.d()->t("cb").'<span class="cashback">'.$val['cashback'].'%</span><p class="url">'.$val['url'].'</p></center>';
				
				if($val['is_top'])$line .= '<span class="sticker">'.d()->t("top").'</span>';
				
				$line .= '</div>';
			}
		}
		$a['result'] = $line;
		$a['amount'] = $_POST['amount']+$o->store_count;
		$a['more'] = $full_cnt-($_POST['amount']+$o->store_count);
		
		return json_encode($a);
	}
}

function ajax_operations(){
	if(isset($_POST['limit'])){

	    d()->user = d()->User($_SESSION['auth']);
	    if(!count(d()->user))return'';

		$a = Array();
		$o = d()->Option;
		d()->operations = d()->Operation->where('le_user_id=? AND type="ur_payment"', d()->user->uid)->order_by('sort desc');
		
		$full_cnt = count(d()->operations);
		d()->operations->limit($_POST['limit'],$o->operation_limit);
        $num = $_POST['limit'];
		
		if(count(d()->operations)){
			$operations = d()->operations->to_array();
			$line = '';
			foreach($operations as $key=>$val){
                $num++;
                $date_f = date('d.m.Y, H:i', strtotime($val['created_at']));
                $u = d()->User->where('uid=?',$val['uid']);
                $u_name = $u->name.' '.$u->surname;
                
				$line .= '<div class="clients_line"><span class="flex0"><strong>№:</strong>'.$num.'</span><span class="flex15"><strong>'.d()->t("client_fio").':</strong>'.$u_name.'</span><span class="flex1"><strong>ID:</strong>'.$val['uid'].'</span>
                <span><strong>'.d()->t("date").':</strong>'.$date_f.'</span><span class="c"><strong>'.d()->t("summa_cheta").':</strong>'.$val['amount'].' RUB</span>
                <span class="c"><strong>CashBack:</strong>'.$val['cashback_p'].'% / '.$val['cashback'].' RUB</span></div>';

			}
		}
		$a['result'] = $line;
		$a['limit'] = $_POST['limit']+$o->operation_limit;
		$a['more'] = $full_cnt-($_POST['limit']+$o->operation_limit);
		
		return json_encode($a);
	}
}

function ajax_partners(){
	if(isset($_POST['amount'])){
		$a = Array();
		$o = d()->Option;
        if($_SESSION['city'] && $_SESSION['city']!='all'){
            d()->stores = d()->Partner->where('city_id=?', $_SESSION['city']);
        }else{
            d()->stores = d()->Partner;
        }
		if($_POST['category']){
			d()->stores->search('category_id', ','.$_POST['category'].',');
		}
        if($_POST['search']){
            d()->stores->search('zag','title','tags', $_POST['search']);
        }
		if($_POST['sort']=='popular'){
			d()->stores->order_by('view DESC');
		}
		if($_POST['sort']=='cashback'){
			d()->stores->order_by('cashback DESC');
		}
		if($_POST['sort']=='date'){
			d()->stores->order_by('created_at DESC');
		}
		
		$full_cnt = count(d()->stores);
		d()->stores->limit($_POST['amount'],$o->store_count);
		
		if(count(d()->stores)){
			$stores = d()->stores->to_array();
			$line = '';
			foreach($stores as $key=>$val){
				$line .= '<div class="store"><div class="img"><a href="'.d()->langlink.'/stores/'.$val['id'].'"><img src="'.d()->preview($val['image'], 'auto', 129).'" alt="'.$val['title'].'" /></a></div><span class="hr"><img src="/images/elip1.png" class="elip1" /><hr><img src="/images/elip2.png" class="elip2" /></span><center>'.d()->t("cb").'<span class="cashback">'.$val['cashback'].'%</span><p class="url">'.$val['url'].'</p></center>';
				
				if($val['is_top'])$line .= '<span class="sticker">'.d()->t("top").'</span>';
				
				$line .= '</div>';
			}
		}
		$a['result'] = $line;
		$a['amount'] = $_POST['amount']+$o->store_count;
		$a['more'] = $full_cnt-($_POST['amount']+$o->store_count);
		
		return json_encode($a);
	}
}

function get_pp($p){
    if(!d()->package->id){
        $u = d()->Auth->user();
        d()->package = d()->Package($u->package);
    }
    return $p - d()->package->price;
}

function buy_package_success($id){
    $op = d()->Operation($id)->limit(0,1);
    if(!count($op)){
       return;
    }
    $u = d()->User->where('uid=?', $op->uid)->limit(0,1);
    if(!count($u)){
        return;
    }
    // вычисляем лицензии
    $licensies = 0;
    $pack = d()->Package($op->value);
    $oldpack = d()->Package($u->package);
    if($pack->licensies){
        $licensies = $pack->licensies - $oldpack->licensies;
    }
    // ставим пользователю новый пакет
    $u->package = $op->value;
    // добавляем лицензии если есть
    $u->licensies = $u->licensies + $licensies;
    $u->save;
    // ставим метку, что операция выполнена
    $op->status = 1;
    $op->check_reward = 1;
    $op->save;

    // создаем новые связи, исходя из данных нового пакета
    $cl = $oldpack->a_lines;
    $max_lines = $pack->a_lines;
    $childs = Array();
    while($cl<=$max_lines){
        // получаем UIDs всех пользователей, последней доступной линии
        if(!count($childs)) {
            $childs = d()->Sv_user->where('sponsor=? AND type=?', $u->uid, $cl)->fast_all_of('uid');
        }
        // если дети отсутствуют, выходим из цикла
        if(!count($childs)){
            break;
        }

        // выбираем нижнюю линию деток и создаем связь
        $subchilds = d()->Sv_user->find_by_type('1')->where('sponsor IN (?)', $childs)->fast_all_of('uid');
        // если нижняя линия отсутствуют, выходим из цикла
        if(!count($subchilds)){
            break;
        }

        $cl++;
        foreach($subchilds as $va){
            $sv = d()->Sv_user->new;
            $sv->uid = $va;
            $sv->sponsor = $u->uid;
            $sv->type = $cl;
            $sv->save;
        }
        $childs = $subchilds;
    }


    // отправляем письмо о смене пакета
    $o = d()->Option;

    d()->package_title = $op->text;
    $l = d()->Letter(7);

    d()->Mail->to($u->email);
    d()->Mail->set_smtp($o->smtp_server,$o->smtp_port,$o->smtp_mail,$o->smtp_password,$o->smtp_protocol);
    d()->Mail->from($o->smtp_mfrom,$o->smtp_tfrom);
    d()->Mail->subject($l->title);
    d()->Mail->message($l->text);
    d()->Mail->send();

    // раскидываем вознаграждение пользователям
    $sv_users = d()->Sv_user->where('uid=?', $op->uid)->order_by('type asc')->to_array();

    $packs = d()->Package->to_array();
    $ps = Array();
    foreach($packs as $v){
        $ps[$v['id']] = $v;
    }

    // массив статусов
    $statu = d()->Status->order_by('volume asc')->to_array();
    $statuses = Array();
    foreach($statu as $v){
        $statuses[$v['id']] = $v['volume'];
    }

    foreach($sv_users as $v){
        $s = d()->User->where('uid=? AND type="fiz"', $v['sponsor'])->limit(0,1);
        if(!count($s)){
            continue;
        }
        // расчитываем процент бонуса
        $percent = $ps[$s->package]['bonus_l'.$v['type']];
        // расчитываем вознаграждение
        $value = 0;
        $itogo_price = $ps[$op->value]['price'] - $oldpack->price;
        if($percent && $percent>0) {
            $value = floor($itogo_price / 100 * $percent);
        }
        // расчитываем общую сумму продаж
        $sale_volume = $s->sale_volume + $itogo_price;
        // расчитываем личные продажи
        $priv_sale_volume = 0;
        if($v['type']==1){
            $priv_sale_volume += $itogo_price;
        }

        // проверяем, не получил ли пользователь новый статус
        $check_ns = 0;
        // если пакет позволяет получить бонус за статус, то считаем
        $status_bonus = 0;
        $status_n = 0;
        $nms = $s->max_status;
        $t_value = $statuses[$s->status];
        $maxt_value = $statuses[$s->max_status];
        $ns_value = 0;
        foreach ($statuses as $k => $va) {
            if ($va > $t_value && !$ns_value) {
                $ns_value = $va;
                $ns = $k;
                if ($va > $maxt_value) {
                    $nms = $k;
                }
            }
        }

        // ставим метку, что у пользователя новый статус и добавляем вознаграждение
        if($sale_volume >= $ns_value && $ns_value>0){
            $status_n = 0;
            $check_ns = 1;
            d()->new_status = d()->Status($ns);
            $ns_id = d()->new_status->id;
            $ns_title = d()->new_status->title;
            // если есть вознаграждение у статуса и пакет позволяет получить бонус то:
            if(d()->new_status->reward && $ps[$s->package]['bonus_status']){
                $status_bonus = d()->new_status->reward;
            }
            if(d()->new_status->reward_n=='World Tour' && $ps[$s->package]['bonus_wt']){
                $status_n = 'World Tour';
            }
            // закоментировал Dream Car потому что в первый раз оказывается, начисляются только деньги
            //if(d()->new_status->reward_n=='Dream Car' && $ps[$s->package]['bonus_dc']){
            //   $status_n = 'Dream Car';
            //}

            // начисляем ДримКар за каждый статус выше Diamond
            if($ns>8 && $ps[$s->package]['bonus_dc']){
               $status_n = 'Dream Car';
            }
        }else{
            // если нового статуса нет, но пользователь опять закрыл Dream Car, то начисляем его
            $dc = d()->Status(8);

            $ns_id = 0;
            $ns_title = '';

            if($sale_volume >= $dc->volume && $ps[$s->package]['bonus_dc']){
                $status_n = 'Dream Car';
            }

        }

        // начисляем общую сумму продаж
        $s->sale_volume = $sale_volume;
        // начисляем личную сумму продаж
        $s->priv_sale_volume = $s->priv_sale_volume + $priv_sale_volume;
        // меняем статус, если есть новый
        if($check_ns){
            $s->status = $ns;
            // возможно изменился и максимальный статус
            $s->max_status = $nms;
        }
        // начисляем пользователю бонусы если они есть
        $s->balance = $s->balance + $value + $status_bonus;
        $s->save;

        // создаем operation для начисления лидерского бонуса если он есть
        if($value) {
            d()->ch($v['sponsor'], $value, 'leader_bonus', $itogo_price, '', $percent, $v['type'], $op->uid, '1');
        }
        // создаем operation для нового статуса
        if($status_bonus){
            d()->ch($v['sponsor'], $ns_id, 'new_status', $status_bonus, '', '', $ns_title, '', 1);
        }
        if($status_n){
            d()->ch($v['sponsor'], $ns_id, 'new_status', $status_n, '', '', $ns_title, '', 0);
        }

    }
}

function buy_license_success($id){
    $op = d()->Operation($id)->limit(0,1);
    if(!count($op)){
       return;
    }
    $u = d()->User->where('uid=?', $op->uid)->limit(0,1);
    if(!count($u)){
        return;
    }
    // добавляем лицензии пользователю
    $u->licensies = $u->licensies + $op->value;
    $u->save;
    // ставим метку, что операция выполнена
    $op->status = 1;
    $op->check_reward = 1;
    $op->save;

    // отправляем письмо о смене пакета
    $o = d()->Option;

    d()->count = floatval($op->value);
    d()->amount = $op->amount;
    $l = d()->Letter(8);

    d()->Mail->to($u->email);
    d()->Mail->set_smtp($o->smtp_server,$o->smtp_port,$o->smtp_mail,$o->smtp_password,$o->smtp_protocol);
    d()->Mail->from($o->smtp_mfrom,$o->smtp_tfrom);
    d()->Mail->subject($l->title);
    d()->Mail->message($l->text);
    d()->Mail->send();
}

function clear_sale_volume(){
    d()->User->sql('UPDATE `users` SET `sale_volume`=0');
    d()->User->sql('UPDATE `users` SET `priv_sale_volume`=0');
}

function clear_status(){
    d()->User->sql('UPDATE `users` SET `sale_volume`=0');
    d()->User->sql('UPDATE `users` SET `priv_sale_volume`=0');
    d()->User->sql('UPDATE `users` SET `status`=0');
}

function af($k){
    if(d()->ca1 <= $k['created_at'] && $k['created_at'] <= d()->ca2){
        return true;
    }
}

function get_operation_title($t, $text, $amount){
    if($amount=='World Tour' || $amount=='Dream Car'){
        if(d()->lang=='en'){
            return 'Bonus '.$amount;
        }
        return 'Бонус '.$amount;
    }
    if($t=='cashback' || $t=='adm_cashback'){
        if(d()->lang=='en'){
            return 'Bonus CashBack';
        }
        return 'Бонус CashBack';
    }
    if($t=='ur_payment'){
        if(d()->lang=='en'){
            return 'Offline voucher';
        }
        return 'Оффлайн чек';
    }
    if($t=='buy_package'){
        if(d()->lang=='en'){
            return 'Buy package';
        }
        return 'Покупка пакета';
    }
    if($t=='upgrade_package'){
        if(d()->lang=='en'){
            return 'Upgrade package';
        }
        return 'Апгрейд пакета';
    }
    if($t=='leader_bonus'){
        if($text==1){
            if(d()->lang=='en'){
                return 'Personal sales';
            }
            return 'Личная продажа';
        }
        if(d()->lang=='en'){
            return 'Leadership bonus';
        }
        return 'Лидерский бонус';
    }
    if($t=='buy_license'){
        if(d()->lang=='en'){
            return 'Buy license';
        }
        return 'Покупка лицензии';
    }
    if($t=='new_status'){
        if(d()->lang=='en'){
            return 'Status bonus';
        }
        return 'Бонус за статус';
    }
    if($t=='agent_reward'){
        if(d()->lang=='en'){
            return 'Agency CashBack';
        }
        return 'Агентский CashBack';
    }
    if($t=='buy_shop'){
        if(d()->lang=='en'){
            return 'Purchase in SHOP';
        }
        return 'Покупка в SHOP';
    }
    if($t=='buy_event'){
        if(d()->lang=='en'){
            return 'Event purchase';
        }
        return 'Покупка мероприятия';
    }
}

function get_operation_desc($t, $user_id, $text, $amount){
    if($t=='cashback' || $t=='adm_cashback' || $t=='leader_bonus' && $text==1){
        if($user_id){
            return 'ID '.$user_id;
        }
        if($t=='cashback' && !$user_id){
            return $text;
        }
    }
    if($t=='leader_bonus' && $text!=1){
        if(d()->lang=='en'){
            return 'Line '.$text;
        }
        return 'Линия '.$text;
    }
    if($amount=='World Tour' || $amount=='Dream Car'){
        return '-';
    }
    if($t=='new_status' || $t=='agent_reward'){
        return $text;
    }
    if($t=='buy_shop'){
        $m = json_decode($text);
        return $m['title'];
    }
    if($t=='buy_event'){
        return $text;
    }
    return '-';
}

function get_operation_sum($t, $value, $amount, $value_p){
    if($t=='new_status' && $amount=='World Tour' || $t=='new_status' && $amount=='Dream Car'){
        return floatval($value_p);
    }
    if($t=='buy_package' || $t=='upgrade_package' || $t=='buy_license' || $t=='new_status' || $t=='buy_shop' || $t=='buy_event'){
        return floatval($amount);
    }
    return floatval($value);
}

function change_withdrawals(){
    $w = d()->Withdrawal($_GET['id'])->limit(0,1);
    $key = hash('md5','ti%^rex'.d()->Option->admin_key.'p@anz0#er');

    if(count($w) && $_GET['key']==$key){
        if($_GET['status']==2){
            // возвращаем денюшки
            $user = d()->User->where('uid=?', $w->uid)->limit(0,1);
            $user->balance = $user->balance + $w->total_amount;
            $user->save;
        }

        $w->status = $_GET['status'];
        $w->save;
    }

    header('Location: /admin/list/withdrawals');
    exit;
}

function debug_sv_users(){
    $uid = $_GET['uid'];
    $old_p = $_GET['old_p'];
    $u = d()->User->where('uid=?', $uid)->limit(0,1);
    if(!count($u) || !$old_p || !$uid){
        exit;
    }
    // вычисляем лицензии
    $pack = d()->Package($u->package);
    $oldpack = d()->Package($old_p);

    // создаем новые связи, исходя из данных нового пакета
    $cl = $oldpack->a_lines;
    $max_lines = $pack->a_lines;
    $childs = Array();
    while($cl<=$max_lines){
        // получаем UIDs всех пользователей, последней доступной линии
        if(!count($childs)) {
            $childs = d()->Sv_user->where('sponsor=? AND type=?', $u->uid, $cl)->fast_all_of('uid');
        }
        // если дети отсутствуют, выходим из цикла
        if(!count($childs)){
            break;
        }

        // выбираем нижнюю линию деток и создаем связь
        $subchilds = d()->Sv_user->find_by_type('1')->where('sponsor IN (?)', $childs)->fast_all_of('uid');
        // если нижняя линия отсутствуют, выходим из цикла
        if(!count($subchilds)){
            break;
        }

        $cl++;
        foreach($subchilds as $va){
            // проверяем, есть ли такая запись
            $ch = d()->Sv_user->where('uid=? AND sponsor=? AND type=?', $va, $u->uid, $cl)->limit(0,1);
            if(!count($ch)){
                $sv = d()->Sv_user->new;
                $sv->uid = $va;
                $sv->sponsor = $u->uid;
                $sv->type = $cl;
                $sv->save;
            }
        }
        $childs = $subchilds;
    }
}


function login_page() {
    readfile(__DIR__.'/mod_users/_login_new.html');
}

function register_page() {
    readfile(__DIR__.'/mod_users/_register_new.html');
}

function forgot_page() {
    readfile(__DIR__.'/mod_users/_forgot_new.html');
}

// Функция для расчёта объёма продаж в первой линии
function get_first_line_volume($uid) {
    $volume = 0;
    $first_line = d()->Sv_user->where('sponsor=? AND type=1', $uid);
    foreach($first_line as $v) {
        $user = d()->User->where('uid=?', $first_line->uid)->limit(0,1);
        if(count($user) && $user->package > 1) {
            // Берём стоимость пакета пользователя
            $pkg = d()->Package($user->package);
            $volume += $pkg->price;
        }
    }
    return $volume;
}

// Функция проверки и активации линий для пакета User
function check_user_lines_activation($user) {
    // Если пакет Simple (ID=1) и линии еще не активированы
    if($user->package == 1 && !$user->user_lines_activated) {
        // Считаем объём продаж в 1 линии
        $first_line_volume = get_first_line_volume($user->uid);
        if($first_line_volume >= $user->user_required_volume) {
            $user->user_lines_activated = 1;
            $user->save;
            return true;
        }
    }
    return false;
}

// Получить количество активных линий для пользователя
function get_user_active_lines($user, $package) {
    // Если пакет Simple и линии активированы - даём 5 линий
    if($user->package == 1 && $user->user_lines_activated) {
        return 5;
    }
    // Иначе возвращаем линии пакета
    return $package->a_lines;
}
