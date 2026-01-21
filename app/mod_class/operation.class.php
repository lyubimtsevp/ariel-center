<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Operation extends ActiveRecord
{
    function name()
    {
        $u = d()->User->where('uid=?',$this->get('uid'));
        return $u->name.' '.$u->surname;
    }
    
    function date_f()
    {
        return date('d.m.Y, H:i', strtotime($this->get('created_at')));
    }

    function date_dmy()
    {
        return date('d.m.Y', strtotime($this->get('created_at')));
    }

    function adm_title()
    {
        $ttl = '';
        if($this->get('type')=='cashback'){
            $ttl = 'Бонус CashBack';
        }
        if($this->get('type')=='adm_cashback'){
            $ttl = 'Бонус CashBack (Admitad)';
        }
        if($this->get('type')=='ur_payment'){
            $ttl = 'Оффлайн чек';
        }
        if($this->get('type')=='buy_package'){
            $ttl = 'Покупка пакета';
        }
        if($this->get('type')=='upgrade_package'){
            $ttl = 'Апгрейд пакета';
        }
        if($this->get('type')=='leader_bonus'){
            $ttl = 'Лидерский бонус';
        }
        if($this->get('type')=='buy_license'){
            $ttl = 'Покупка лицензии';
        }
        if($this->get('type')=='new_status'){
            $ttl = 'Достижение статуса';
        }
        if($this->get('type')=='withdrawal'){
            $ttl = 'Вывод средств';
        }
        if($this->get('type')=='agent_reward'){
            $ttl = 'Агентский CashBack';
        }
        if($this->get('type')=='buy_shop'){
            $ttl = 'Покупка в SHOP';
        }
        if($this->get('type')=='buy_event'){
            $ttl = 'Покупка мероприятия';
        }
        return $ttl;
    }

    function usr_title()
    {
        return d()->get_operation_title($this->get('type'),$this->get('text'),$this->get('amount'));
    }

    function sum()
    {
        return d()->get_operation_sum($this->get('type'), $this->get('value'), $this->get('amount'), $this->get('value_p'));
    }

    function usr_desc()
    {
        return d()->get_operation_desc($this->get('type'), $this->get('user_id'), $this->get('text'), $this->get('amount'));
    }

    function description()
    {
        $desc = '';

        if($this->get('type')=='buy_event'){
            $desc .= 'Мероприятие: <strong>'.$this->get('text').'</strong><br>';
            $desc .= 'Билеты: <strong>'.floatval($this->get('value_p')).' шт.</strong><br>';
            $desc .= 'Стоимость: <strong>'.floatval($this->get('amount')).' руб.</strong>';
        }

        if($this->get('type')=='buy_shop'){
            $m = json_decode($this->get('text'), true);
            $h = '(';
            if($m['size'])$h .= $m['size'].' | ';
            if($m['color'])$h .= $m['color'].' | ';
            $h .= floatval($this->get('value_p')).' шт.)';
            $desc .= 'Товар: <strong>'.$m['title'].' '.$h.'</strong><br>';
            $desc .= 'Стоимость: <strong>'.floatval($this->get('amount')).' руб.</strong>';
        }

        if($this->get('type')=='ur_payment'){
            $ur = d()->User->where('uid=?',$this->get('le_user_id'))->limit('0,1');
            $desc .= 'Сумма в чеке: <strong>'.floatval($this->get('amount')).' руб.</strong><br>';
            $desc .= 'CashBack: <strong>'.floatval($this->get('value')).' руб. ('.floatval($this->get('value_p')).'%)</strong><br>';
            $desc .= 'Юридическое лицо: <a href="/admin/edit/users/'.$ur->id.'">'.$ur->title.'</a> (ID '.$this->get('le_user_id').')';
        }

        if($this->get('type')=='cashback'){
            $ur = d()->User->where('uid=?',$this->get('le_user_id'))->limit('0,1');
            $us = d()->User->where('uid=?',$this->get('user_id'))->limit('0,1');
            $desc .= 'Сумма исчисления: <strong>'.floatval($this->get('amount')).' руб.</strong><br>';
            $desc .= 'CashBack: <strong>'.floatval($this->get('value')).' руб. ('.floatval($this->get('value_p')).'%)</strong><br>';
            $desc .= 'Юридическое лицо: <a href="/admin/edit/users/'.$ur->id.'">'.$ur->title.'</a>';
            if($us->id){
                $desc .= '<br>Покупатель: <a href="/admin/edit/users/'.$us->id.'">'.$us->email.'</a>';
            }
        }

        if($this->get('type')=='agent_reward'){
            $ur = d()->User->where('uid=?',$this->get('le_user_id'))->limit('0,1');
            $us = d()->User->where('uid=?',$this->get('user_id'))->limit('0,1');
            $desc .= 'Сумма исчисления: <strong>'.floatval($this->get('amount')).' руб.</strong><br>';
            $desc .= 'Вознаграждения: <strong>'.floatval($this->get('value')).' руб. ('.floatval($this->get('value_p')).'%)</strong><br>';
            $desc .= 'Юридическое лицо: <a href="/admin/edit/users/'.$ur->id.'">'.$ur->title.'</a>';
            if($us->id){
                $desc .= '<br>Покупатель: <a href="/admin/edit/users/'.$us->id.'">'.$us->email.'</a>';
            }
        }

        if($this->get('type')=='adm_cashback'){
            $desc .= 'Сумма исчисления: <strong>'.floatval($this->get('amount')).' руб.</strong><br>';
            $desc .= 'CashBack: <strong>'.floatval($this->get('value')).' руб. ('.floatval($this->get('value_p')).'%)</strong><br>';
            $desc .= 'Юридическое лицо: Admitad';
        }

        if($this->get('type')=='buy_package' || $this->get('type')=='upgrade_package'){
            $desc .= 'Пакет: <strong>'.$this->get('text').' </strong><br>';
            $desc .= 'Сумма к оплате: <strong>'.floatval($this->get('amount')).' руб.</strong>';
        }

        if($this->get('type')=='leader_bonus'){
            $us = d()->User->where('uid=?',$this->get('user_id'))->limit('0,1');
            $desc .= 'Сумма исчисления: <strong>'.floatval($this->get('amount')).' руб.</strong><br>';
            $desc .= 'Вознаграждение: <strong>'.floatval($this->get('value')).' руб. ('.floatval($this->get('value_p')).'%)</strong><br>';
            $desc .= 'Реферал: <a href="/admin/edit/users/'.$us->id.'">'.$us->email.'</a> ('.$this->get('text').' линия)';
        }

        if($this->get('type')=='buy_license'){
            $desc .= 'Количество лицензий: <strong>'.floatval($this->get('value')).'</strong><br>';
            $desc .= 'Сумма к оплате: <strong>'.floatval($this->get('amount')).' руб.</strong>';
        }

        if($this->get('type')=='new_status'){

            if($this->get('text')){
                $desc .= 'Статус: <strong>'.$this->get('text').'</strong><br>';
            }

            if(floatval($this->get('amount'))>0){
                $rb = ' руб.';
            }else{
                if($this->get('check_reward')){
                    $rb = ' ('.$this->get('value_p').' руб.)';
                }
            }
            $desc .= 'Вознаграждение: <strong>'.$this->get('amount').$rb.'</strong>';
            if(!$this->get('text')){
                $desc .= '<br><small>Подтверждение статуса: <strong>Diamond</strong> или выше<small>';
            }
        }

        if($this->get('type')=='withdrawal'){
            $desc .= 'Сумма вывода: <strong>'.floatval($this->get('value')).' руб.</strong><br>';
            $desc .= 'С учетом комиссии: <strong>'.floatval($this->get('amount')).' руб. ('.floatval($this->get('value_p')).'%)</strong><br>';
        }

        return $desc;
    }

    function value()
    {
        //return str_replace('.00', '', $this->get('value'));
        return floatval($this->get('value'));
    }

    function value_p()
    {
        //return str_replace('.00', '', $this->get('value_p'));
        return floatval($this->get('value_p'));
    }

    function mdate()
    {
        return date('d.m.Y H:i', strtotime($this->get('created_at')));
    }

    function adm_user()
    {
        $u = d()->User->where('uid=?', $this->get('uid'));
        return '<a href="/admin/edit/users/'.$u->id.'">'.$u->email.'</a> (ID <a href="/admin/list/users?uid='.$u->uid.'">'.$this->get('uid').'</a>) <a href="/admin/debug?auth='.$u->id.'" style="margin-left:8px;" class="btn btn-small btn-default" target="_blank">ЛК</a>';
    }

    function adm_status()
    {
        $dop = '';
        if(!$this->get('status')){
            if($this->get('type')=='buy_shop')$dop = '(ожидает оплаты)';
            if($this->get('type')=='buy_event')$dop = '(ожидает оплаты)';
            if($this->get('type')=='buy_license')$dop = '(ожидает оплаты)';
            if($this->get('type')=='buy_package')$dop = '(ожидает оплаты)';
            if($this->get('type')=='upgrade_package')$dop = '(ожидает оплаты)';
            return '<strong style="color:#ff8100;">Новый</strong> '.$dop;
        }
        if($this->get('status')==2){
            if($this->get('type')=='buy_shop')$dop = '(не оплачен)';
            if($this->get('type')=='buy_event')$dop = '(не оплачен)';
            if($this->get('type')=='buy_license')$dop = '(не оплачен)';
            if($this->get('type')=='buy_package')$dop = '(не оплачен)';
            if($this->get('type')=='upgrade_package')$dop = '(не оплачен)';
            return '<strong style="color:darkred;">Отклонен</strong> '.$dop;
        }
        if($this->get('status')==1){
            if($this->get('type')=='buy_shop')$dop = '(оплачен)';
            if($this->get('type')=='buy_event')$dop = '(оплачен)';
            if($this->get('type')=='buy_license')$dop = '(оплачен)';
            if($this->get('type')=='buy_package')$dop = '(оплачен)';
            if($this->get('type')=='upgrade_package')$dop = '(оплачен)';
            return '<strong style="color:forestgreen;">Выполнен</strong> '.$dop;
        }
    }

    function status_word()
    {
        if(!$this->get('status')){
            if($this->get('type')=='withdrawal'){
                if(d()->lang=='en'){
                    return 'In anticipation';
                }
                return 'В ожидании';
            }
            if(d()->lang=='en'){
                return 'New';
            }
            return 'Новый';
        }
        if($this->get('status')==2){
            if(d()->lang=='en'){
                return 'Refused';
            }
            return 'Отклонен';
        }
        if($this->get('status')==1){
            if(d()->lang=='en'){
                return 'Done';
            }
            return 'Выполнен';
        }
    }

    function title()
    {
        if(!$this->get('title')) {
            return '-';
        }
        return $this->get('title');
    }


}

