<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Package extends ActiveRecord
{
    function price_f()
    {
        if(d()->package->price>0){
            return d()->get_pp($this->get('price'));
        }
        return $this->get('price');
    }

    function price_comission_f()
    {
        if(d()->package->price>0){
            return d()->get_pp($this->get('price_comission'));
        }
        return $this->get('price_comission');
    }
    
    function adm_is_active()
    {
        if(!$this->get('is_active')){
            return '<strong style="color:#ff8100;">Нет</strong>';
        }
        return '<strong style="color:forestgreen;">Да</strong>';
    }
}
