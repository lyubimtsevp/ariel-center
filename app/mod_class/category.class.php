<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Category extends ActiveRecord
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
		return d()->Store->search('category_id', ','.$this->get('id').',')->count;
	}

}
