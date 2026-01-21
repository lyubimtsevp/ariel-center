<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Partner extends ActiveRecord
{
    function map()
    {
        $map=preg_replace('!width=(.*?)&!si','width=100%&', $this->get('map'));
        $map=preg_replace('!height=(.*?)"!si','height=100%"', $map);
        return $map;
    }
    

}