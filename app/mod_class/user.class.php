<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class User extends ActiveRecord
{

	function date_f()
	{
		return date('d/m/Y', strtotime($this->get('created_at')));
	}
	
	function country_f()
	{
		return d()->Country($this->get('country'))->title;
	}
	
	function type_word()
	{
		if($this->get('type')=='fiz'){
			return 'Физическое лицо';
		}
		return 'Юридическое лицо';
	}
	function type_admword()
	{
		if($this->get('type')=='fiz'){
			return 'Физ. лицо';
		}
		return 'Юр. лицо';
	}
    
    function cashback_f()
	{
	    $cb = str_replace(',','.', $this->get('cashback'));
        $cd = array_diff(explode('|', $cb), array(''));
        $cd = max($cd);
		return floatval($cd);
	}

	function reg_date()
	{
		return date('d.m.Y', strtotime($this->get('created_at')));
	}

	function title()
	{
		if($this->get('type')=='fiz'){
            return $this->get('name').' '.$this->get('surname');
        }
        return $this->get('title');
	}


	function gender()
	{
		if($this->get('gender')=='male'){
		    if(d()->lang=='en'){
                return 'Male';
            }
            return 'Мужской';
        }
        if($this->get('gender')=='female'){
            if(d()->lang=='en'){
                return 'Female';
            }
            return 'Женский';
        }
	}

	function malecheked()
	{
		if($this->get('gender')=='male'){
            return 'checked';
        }
        return '';
	}

	function femalecheked()
	{
		if($this->get('gender')=='female'){
            return 'checked';
        }
        return '';
	}

	function balance()
	{
        return floatval($this->get('balance'));
	}

	function cb_balance()
	{
        return floatval($this->get('cb_balance'));
	}

	function opencb_balance()
	{
        return floatval($this->get('opencb_balance'));
	}

	function total_cb_balance()
	{
        $adm = $this->get('adm_cb_balance')/2;
        return floatval($this->get('cb_balance')+$adm);
	}

	function total_opencb_balance()
	{
        $log_balance = 0;
        $logs = d()->Admitad_log->where('uid = ?', $this->get('uid'))->fast_all_of('value');
        if(count($logs)){
            $log_balance = array_sum($logs);
        }
	    return floatval($this->get('opencb_balance')+$this->get('adm_opencb_balance')+$log_balance);
	}

	function user_id_f()
	{
        if(!$this->get('user_id')){
            return '-';
        }
	    return '<a href="/admin/list/users?uid='.$this->get('user_id').'">'.$this->get('user_id').'</a>';
	}

	function adm_package_title()
	{
        if($this->get('type')=='ur')return '-';
	    return '<a href="/admin/edit/packages/'.d()->packages->find_by_id($this->get('package'))->id.'">'.d()->packages->find_by_id($this->get('package'))->title.'</a>';
	}

	function adm_status_title()
	{
        if(!$this->get('max_status')){
            return '-';
        }
	    return '<a href="/admin/edit/statuses/'.d()->statuses->find_by_id($this->get('max_status'))->id.'">'.d()->statuses->find_by_id($this->get('max_status'))->title.'</a>';
	}

	function status_title()
	{
        if(!$this->get('max_status')){
            return '-';
        }
	    return d()->Status($this->get('max_status'))->title;
	}

    function adm_referals()
    {
        return '<a href="/admin/list/users?user_id='.$this->get('uid').'" class="btn btn-mini">Смотреть</a>';
    }
	
}

