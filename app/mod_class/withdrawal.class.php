<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Withdrawal extends ActiveRecord
{
	function adm_title()
	{
		return $this->get('title').' (ID <a href="/admin/list/users?uid='.$this->get('uid').'">'.$this->get('uid').'</a>)';
	}

	function adm_amount()
	{
		$text = '<strong>'.floatval($this->get('amount')).' руб.</strong><br>';
		$text .= '<small>'.floatval($this->get('total_amount')).' руб. - '.floatval($this->get('comission')).'%</small>';
		return $text;
	}

	function adm_date()
	{
		return date('d.m.Y H:i', strtotime($this->get('created_at')));
	}

    
}
