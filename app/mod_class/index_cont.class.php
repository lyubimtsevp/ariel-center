<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Index_cont extends ActiveRecord
{
	
	function agreement_but()
	{
		$s = $this->get('agreement_but');
		$s = str_replace('<', '<a href="#agreement" data-toggle="modal" data-dismiss="modal">', $s);
		$s = str_replace('>', '</a>', $s);
		return $s;
	}
	
	function cashback_rules_but()
	{
		$s = $this->get('cashback_rules_but');
		$s = str_replace('<', '<a href="#cashback_rules" data-toggle="modal" data-dismiss="modal">', $s);
		$s = str_replace('>', '</a>', $s);
		return $s;
	}
	
	function agreement_but_ur()
	{
		$s = $this->get('agreement_but_ur');
		$s = str_replace('<', '<a href="#agreement-ur" data-toggle="modal" data-dismiss="modal">', $s);
		$s = str_replace('>', '</a>', $s);
		return $s;
	}
	
	function cashback_rules_but_ur()
	{
		$s = $this->get('cashback_rules_but_ur');
		$s = str_replace('<', '<a href="#cashback_rules-ur" data-toggle="modal" data-dismiss="modal">', $s);
		$s = str_replace('>', '</a>', $s);
		return $s;
	}
}