<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Head_slide extends ActiveRecord
{
	
	function title()
	{
		return $this->get('image');
	}
}