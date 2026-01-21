<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Information extends ActiveRecord
{
	
	function extension()
	{
		return end(explode(".", $this->get('file')));
	}

	function size()
	{
        return round(filesize($_SERVER['DOCUMENT_ROOT'].$this->get('file'))/1024);
	}
}
