<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Event extends ActiveRecord
{
    function short_text()
    {
        $text = str_replace('"','',$this->get('text'));
        $text = str_replace("'","",$text);
        return d()->cut_text($text, 180);
    }

    function adm_is_active()
    {
        if(!$this->get('is_active')){
            return '<strong style="color:#ff8100;"Нет</strong>';
        }
        return '<strong style="color:forestgreen;">Да</strong>';
    }

    function disbut()
    {
        if(!$this->get('tickets')){
            return 'disabled';
        }
        return '';
    }

}
