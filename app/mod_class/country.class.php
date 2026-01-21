<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Country extends ActiveRecord
{
	
	function selected()
	{
		if($this->get('id')==d()->user->country){
			return 'selected';
		}
		return '';
	}
}