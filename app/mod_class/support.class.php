<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Support extends ActiveRecord
{
	
	function status_word()
	{
		if($this->get('status')==1){
			return '<strong>Просмотрено</strong>';
		}
		if($this->get('status')==2){
			return '<strong style="color:green;">Обработано</strong>';
		}
		return '<strong style="color:#ff7600;">Новое</strong>';
	}
}
