<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Pcategory extends ActiveRecord
{
	
	function active()
	{
		if($this->get('id')==$_GET['category']){
			return 'active';
		}
		return '';
	}

	function cnt()
	{
		return d()->Partner->search('category_id', ','.$this->get('id').',')->count;
	}

}
