<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Store extends ActiveRecord
{
	function cashback()
	{
		return str_replace('.0','',$this->get('cashback'));
	}
    
    function adm_link()
	{
		if(!$this->get('link')){
            return '';
        }
        return $this->get('link').'?subid='.d()->Auth->uid;
	}

	function adm_is_top()
	{
		if(!$this->get('is_top')){
            return '<strong style="color:#ff8100;">Нет</strong>';;
        }
        return '<strong style="color:forestgreen;">Да</strong>';
	}

	function adm_url()
	{
		if(!$this->get('url')){
            return '-';;
        }
        return '<a href="//'.$this->get('url').'" target="_blank">'.$this->get('url').'</a>';
	}
    
    
}
