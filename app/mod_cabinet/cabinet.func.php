<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class CabinetController
{
	function index()
	{
		d()->login_check();

		d()->sptpl = 'index-cb';
		d()->cont = d()->Index_cont;

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->reflnk = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'].d()->langlink.'/?r='.d()->user->uid;

        d()->packages_list = d()->Package->where('price>? AND is_active=1', d()->package->price)->order_by('price asc');
        d()->pactive = 'active';
        d()->pid = d()->packages_list->id;

        d()->package_word = d()->t("package");
        d()->mxs = 'modal-xs';
        if(d()->package->price > 0){
            d()->package_word = d()->t("up_package");
            d()->mxs = '';
        }

        d()->last_package = 0;
        // проверка на максимальный пакет
        $plast = d()->Package->where('price>? AND is_active=1', d()->package->price);
        if($plast->id){
            d()->last_package = 1;
        }

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("cabinet");
        }
        
        d()->header = d()->cab_header_tpl();
		d()->footer = d()->cab_footer_tpl();
	}

    function my_team()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        //получаем массив пакетов, для минимизации запросов к базе
        d()->get_packages_array();
        //получаем массив статусов, для минимизации запросов к базе
        d()->get_statuses_array();
        // формируем массивы для этой страницы
        $l=1;
        d()->line=1;
        d()->tm_count = 0;
        d()->tm_array = Array();

        d()->sponsor = d()->User->where('uid=?', d()->user->user_id)->limit(0,1);

        $sv = d()->Sv_user->where('sponsor=?',d()->user->uid);
        $s = Array();
        foreach($sv as $v){
            $s[$sv->type][] = $sv->uid;
        }

        //d()->printr($s);

        $active_lines = get_user_active_lines(d()->user, d()->package);
        check_user_lines_activation(d()->user);
        while($l<=$active_lines) {
            if(!count($s[$l])){
                $l++;
                continue;
            }
            $ulist = d()->User->where('uid IN (?)',$s[$l]);
            foreach($ulist as $v){
                if($ulist->type=='ur')continue;
                d()->tm_array[$l][] = Array(
                    'uid'=>$ulist->uid,
                    'title'=>$ulist->title,
                    'package'=>d()->packages_array[$ulist->package],
                    'status'=>d()->statuses_array[$ulist->max_status]
                );
                d()->tm_count++;
            }
            $l++;
        }

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->mtm_a = 'active';

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("myteam");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function my_profile()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->mprof_a = 'active';
        d()->country_list = d()->Country;

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("myprofile");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function my_fees()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->mfees_a = 'active';

        d()->option = d()->Option;
        d()->ways_list = d()->Way;

        // Перевод другому пользователю
        if($_POST["withdrawal"] && $_POST["transfer_uid"]){
            $error = 0;
            $amount = floatval($_POST["amount"]);
            $transfer_uid = intval($_POST["transfer_uid"]);
            
            // Проверяем минимальную сумму
            if(d()->option->min_wind > $amount) {
                d()->error_message = "Минимальная сумма перевода ".d()->option->min_wind." руб.";
                $error = 1;
            } elseif($amount > d()->user->balance) {
                d()->error_message = "Недостаточно средств на балансе";
                $error = 1;
            } else {
                // Ищем получателя
                $recipient = d()->User->where("uid=?", $transfer_uid)->limit(0,1);
                if(!count($recipient)){
                    d()->error_message = "Пользователь с ID ".$transfer_uid." не найден";
                    $error = 1;
                } elseif($recipient->uid == d()->user->uid) {
                    d()->error_message = "Нельзя перевести самому себе";
                    $error = 1;
                }
            }
            
            if($error){
                d()->show_modal = '<script>$(document).ready(function(){$("#withdrawal-error").modal("show");});</script>';
            } else {
                // Комиссия 4%
                $com = floor($amount/100*4);
                $transfer_amount = $amount - $com;
                
                // Списываем у отправителя
                d()->user->balance = d()->user->balance - $amount;
                d()->user->save;
                
                // Начисляем получателю
                $recipient->balance = $recipient->balance + $transfer_amount;
                $recipient->save;
                
                // Создаём операции для истории
                $op = d()->Operation->new;
                $op->uid = d()->user->uid;
                $op->type = "transfer_out";
                $op->value = $amount;
                $op->text = "Перевод пользователю ID: ".$transfer_uid;
                $op->save;
                
                $op2 = d()->Operation->new;
                $op2->uid = $transfer_uid;
                $op2->type = "transfer_in";
                $op2->value = $transfer_amount;
                $op2->text = "Перевод от пользователя ID: ".d()->user->uid;
                $op2->save;
                
                header("Location: ".d()->langlink."/cabinet/my_fees");
                exit;
            }
        }

        // вывод средств
        if($_POST['withdrawal']){
            $error = 0;
            // считаем сумму с комиссией
            $amount = floatval($_POST['amount']);
            $com = floor($amount/100*d()->option->wind_comission);
            $total_sum = $amount - $com;
            // если условие минимальной суммы не выполнено
            if(d()->option->min_wind > $amount) {
                d()->error_message = 'Минимальная сумма вывода '.d()->option->min_wind.' руб.';
                if(d()->lang=='en'){
                    d()->error_message = 'Minimum withdrawal amount '.d()->option->min_wind.' RUB';
                }
                $error = 1;
            }elseif($amount > d()->user->balance){
                // если нехватает денюжек
                d()->error_message = 'Недостаточно средств. Сумма к выводу с учетом комиссии: '.$total_sum.' руб.';
                if(d()->lang=='en'){
                    d()->error_message = 'Insufficient funds. Withdrawal amount including the fee: '.$total_sum.' RUB';
                }
                $error = 1;
            }
            if($error){
                d()->show_modal = '<script>$(document).ready(function(){$("#withdrawal-error").modal("show");});</script>';
            }else{
                // создаем операцию для вывода средств
                //d()->ch(d()->user->uid, $amount, 'withdrawal', $total_sum, '', d()->option->wind_comission, '', '', '');

                $w = d()->Withdrawal->new;
                $w->uid = d()->user->uid;
                $w->title = d()->user->title;
                $w->type = d()->Way($_POST['type'])->title;
                $w->amount = $total_sum;
                $w->total_amount = $amount;
                $w->comission = d()->option->wind_comission;
                $w->text = '<strong>Электронный кошелек: </strong>'.d()->user->wallet.'<br><strong>Банковская карта:</strong> '.d()->user->card;
                $w->save;

                d()->amount = $amount;
                d()->comission = d()->option->wind_comission;
                $l = d()->Letter(10);

                $o = d()->Option;

                d()->Mail->to(d()->user->email);
                d()->Mail->set_smtp($o->smtp_server,$o->smtp_port,$o->smtp_mail,$o->smtp_password,$o->smtp_protocol);
                d()->Mail->from($o->smtp_mfrom,$o->smtp_tfrom);
                d()->Mail->subject($l->title);
                d()->Mail->message($l->text);
                d()->Mail->send();

                // списываем сумму у пользователя
                d()->user->balance = d()->user->balance - $amount;
                d()->user->save;
                header('Location: '.d()->langlink.'/cabinet/my_fees?filter=1&key=withdrawal');
            }
        }

        d()->year = $_GET['year'];
        if(!d()->year) {
            d()->year = date('Y');
        }
        d()->table_ttl = d()->year.' '.d()->t("osbon");
        // считаем денюжки
        // выбираем все операции с плюсовой темой
        // TODO если добавляются новые type у operatios, нужно добавлять сюда для счета
        $y = d()->year.'-';
        $y1 = (d()->year-1).'-';
        $y2 = (d()->year-2).'-';
        // для фильтра
        if(!$_POST['filter']){
            d()->operations = d()->Operation->find_by_uid(d()->user->uid)->where('type="leader_bonus" OR type="new_status" AND status=1 OR type="cashback" OR type="adm_cashback" OR type="agent_reward"');
        }
        if($_POST['key'] && $_POST['filter']){
            $q = 'type="'.$_POST['key'].'"';
            if($_POST['key']=='cashback'){
                $q .= ' OR type="adm_cashback" OR type="agent_reward"';
            }
            if($_POST['key']=='leader_bonus'){
                if($_POST['desc']=='1'){
                    $q .= ' AND text="1"';
                }else{
                    $q .= ' AND text!="1"';
                }
            }
            if($_POST['key']=='new_status'){
                if($_POST['desc']=='worldtour'){
                    $q .= ' AND amount="World Tour"';
                }elseif($_POST['desc']=='dreamcar'){
                    $q .= ' AND amount="Dream Car"';
                }else{
                    $q .= ' AND amount!="World Tour" AND amount!="Dream Car"';
                }
            }
            d()->operations = d()->Operation->find_by_uid(d()->user->uid)->where($q);
        }
        if($_GET['type']=='withdrawal'){
            d()->w_list = d()->Operation->find_by_uid(d()->user->uid)->where('type="withdrawal"')->order_by('sort desc');
            d()->tableinfo = 'none';
            d()->tablewind = '';
        }else{
            d()->tableinfo = '';
            d()->tablewind = 'none';
        }
        d()->lp = 0;
        d()->lb = 0;
        d()->sb = 0;
        d()->wt = 0;
        d()->dc = 0;
        d()->bc = 0;
        $au = 0;
        $au1 = 0;
        $au2 = 0;
        $forpage = d()->operations;
        $forpage = $forpage->to_array();
        foreach(d()->operations as $v){
            if(strpos(d()->operations->created_at, $y) !== false) {
                // доход за год
                $au += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);

                // за личные продажи
                if(d()->operations->type=='leader_bonus' && d()->operations->text=='1'){
                    d()->lp += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
                }
                // лидерский бонус
                if(d()->operations->type=='leader_bonus' && d()->operations->text!='1'){
                    d()->lb += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
                }
                // бонус за статус
                if(d()->operations->type=='new_status' && d()->operations->amount!='World Tour' && d()->operations->amount!='Dream Car'){
                    d()->sb += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
                }
                // Bonus WORLDTOUR
                if(d()->operations->type=='new_status' && d()->operations->amount=='World Tour'){
                    d()->wt += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
                }
                // Bonus WORLDTOUR
                if(d()->operations->type=='new_status' && d()->operations->amount=='Dream Car'){
                    d()->dc += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
                }
                // Bonus CashBack
                if(d()->operations->type=='cashback' || d()->operations->type=='adm_cashback' || d()->operations->type=='agent_reward'){
                    d()->bc += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
                }
            }

            if(strpos(d()->operations->created_at, $y1) !== false) {
                // доход за предыдущий год
                $au1 += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
            }

            if(strpos(d()->operations->created_at, $y2) !== false) {
                // доход 2 года назад
                $au2 += d()->get_operation_sum(d()->operations->type, d()->operations->value, d()->operations->amount, d()->operations->value_p);
            }
        }

        // танцы с бубном
        // получаем массив с неделями
        if($_GET['year']){
            $year = $_GET['year'];
        }else{
            $year = date('Y');
        }
        $tyear = $year;
        $fdate = strtotime('01.01.'.$year);
        $n = 1;
        d()->weeks = Array();
        d()->history = Array();

        while($tyear == $year){
            // проверяем день, понедельник?
            $w = date('w', $fdate);
            if(!$w){
                $w = 7;
            }

            $count_w = 6;
            if($w!=1){
                $count_w = 7 - $w;
            }
            $tt = $count_w*24*60*60 + $fdate;
            $last_day = date('U', $tt);
            while(date('Y', $last_day)!=$year){
                $last_day = $last_day - 24*60*60;
            }
            // выбираем операции под эти недели
            d()->ca1 = date('Y-m-d', $fdate);
            d()->ca2 = date('Y-m-d', $last_day);
            $check[$n] = array_filter($forpage, 'af');
            if(count($check[$n])) {
                d()->weeks[] = Array(
                    'num' => $n,
                    'date' => date('d.m.Y', $fdate) . ' - ' . date('d.m.Y', $last_day)
                );
            }

            $fdate = $last_day + 24*60*60;
            $tyear = date('Y', $fdate);
            $n++;
        }
        d()->olist = $check;

        // добавляем переменные в массив
        foreach (d()->olist as $k => $v){
            if(count($v)){
                foreach($v as $k2 => $v2){
                    d()->olist[$k][$k2]['date_f'] = date('d.m.Y', strtotime($v2['created_at']));
                    d()->olist[$k][$k2]['usr_title'] = d()->get_operation_title($v2['type'], $v2['text'], $v2['amount']);
                    d()->olist[$k][$k2]['sum'] = d()->get_operation_sum($v2['type'], $v2['value'], $v2['amount'], $v2['value_p']);
                    d()->olist[$k][$k2]['usr_desc'] = d()->get_operation_desc($v2['type'], $v2['user_id'], $v2['text'], $v2['amount']);
                }
            }
        }

        //d()->printr(d()->olist);

        // формируем блок "Общая сумма бонусов по годам"
        // вычисляем максимальный заработок
        $ymax = $au;
        if($ymax < $au1)$ymax = $au1;
        if($ymax < $au2)$ymax = $au2;
        // вычисляем процент
        $yp = ceil($au/($ymax/100));
        $yp1 = ceil($au1/($ymax/100));
        $yp2 = ceil($au2/($ymax/100));
        d()->years = Array();
        d()->years[] = Array(
            'year'=>d()->year-2,
            'amount'=>floor($au2),
            'percent'=>$yp2,
        );
        d()->years[] = Array(
            'year'=>d()->year-1,
            'amount'=>floor($au1),
            'percent'=>$yp1,
        );
        d()->years[] = Array(
            'year'=>d()->year,
            'amount'=>floor($au),
            'percent'=>$yp,
        );

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("mysavings");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function amount_sales()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->asales_a = 'active';

        d()->line=2;

        // высчитываем сколько до следующего статуса
        if(d()->user->status){
            d()->status = d()->Status(d()->user->status);
            d()->ns_status = d()->Status->where('volume>?', d()->status->volume)->order_by('volume asc')->limit(0,1);
        }else{
            d()->ns_status = d()->Status->order_by('volume asc')->limit(0,1);
        }
        d()->ns_volume = d()->ns_status->volume - d()->user->sale_volume;

        // считаем объем продаж по линиям
        // сначала высчитываем первую линию
        $sv_users = d()->Sv_user->where('sponsor=?', d()->user->uid);
        $uids = Array();
        foreach($sv_users as $v){
            $uids[] = $sv_users->uid;
        }
        $usrs = d()->User->where('uid IN (?)', $uids);
        d()->volumes = Array();
        foreach($sv_users as $v){
            d()->volumes[$sv_users->type] += $usrs->find_by_uid($sv_users->uid)->priv_sale_volume;
        }

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("amount_of_sales");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function information()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->information_a = 'active';

        d()->files = d()->Information;

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("useful_information");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function events()
    {
        d()->login_check();

        d()->sptpl = 'hide900';
        d()->cont = d()->Index_cont;

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->events_a = 'active';

        d()->events = d()->Event->where('is_active=1');

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("events");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function news()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->news_a = 'active';

        d()->news_list = d()->News->where('is_active=1')->order_by('sort desc')->paginate(6);
        d()->paginator = d()->Paginator->generate(d()->news_list);

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("news");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function shop()
    {
        d()->login_check();

        d()->sptpl = 'hide900';
        d()->cont = d()->Index_cont;

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->shop_a = 'active';

        d()->shop_list = d()->Shop->where('is_active=1')->order_by('sort desc')->paginate(9);
        d()->paginator = d()->Paginator->generate(d()->shop_list);

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("shop");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }

    function support()
    {
        d()->login_check();

        d()->sptpl = 'hide900';

        if($_POST['subject'] && $_POST['email'] && $_POST['text']){

            $s = d()->Support->new;
            $s->title = $_POST['subject'];
            $s->email = $_POST['email'];
            $s->text = $_POST['text'];
            $s->save;

            $option = d()->Option;

            d()->subject = $_POST['subject'];
            d()->email = $_POST['email'];
            d()->text = $_POST['text'];

            $l = d()->Letter(5);

            d()->Mail->to($option->email);
            d()->Mail->set_smtp($option->smtp_server,$option->smtp_port,$option->smtp_mail,$option->smtp_password,$option->smtp_protocol);
            d()->Mail->from($option->smtp_mfrom,$option->smtp_tfrom);
            d()->Mail->subject($l->title);
            d()->Mail->message($l->text);
            d()->Mail->send();

            header('Location: '.d()->langlink.'/cabinet/support?action=send');
            exit;
        }

        if($_GET['action']=='send'){
            d()->action_send = '<div class="alert alert-success">'.d()->t("s_success").'</div>';
        }

        d()->body_le = 'cab-body-le';
        d()->fluid = '-fluid';
        d()->fizfooter = 'fiz-footer';
        d()->support_a = 'active';

        if(!d()->Seo->title){
            d()->Seo->title = d()->t("techsupport");
        }

        d()->header = d()->cab_header_tpl();
        d()->footer = d()->cab_footer_tpl();
    }


}

