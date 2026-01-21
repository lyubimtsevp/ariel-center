<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Shop extends ActiveRecord
{

    function adm_is_active()
    {
        if(!$this->get('is_active')){
            return '<strong style="color:#ff8100;"Нет</strong>';
        }
        return '<strong style="color:forestgreen;">Да</strong>';
    }

}
