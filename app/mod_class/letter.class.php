<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Letter extends ActiveRecord
{
	function text()
	{
		if(d()->lang=='ru'){
			$text = $this->get('text');	
		}elseif(d()->lang=='en'){
			$text = $this->get('en_text');
		}
		
		$text = str_replace('`password`', d()->password, $text);
		$text = str_replace('`reg_email`', d()->reg_email, $text);
		
		$text = str_replace('`change_pass_link`', d()->change_pass_link, $text);
		
		$text = str_replace('`new_pass`', d()->new_pass, $text);
		
		$text = str_replace('`package_title`', d()->package_title, $text);
		$text = str_replace('`user_email`', d()->user_email, $text);
		
		$text = str_replace('`amount_btc`', d()->amount_btc, $text);
		$text = str_replace('`amount_usd`', d()->amount_usd, $text);
		$text = str_replace('`amount_gts`', d()->amount_gts, $text);
		$text = str_replace('`user_wallet`', d()->user_wallet, $text);
		$text = str_replace('`system_wallet`', d()->system_wallet, $text);
		
		$text = str_replace('`user_id`', d()->user_id, $text);
		$text = str_replace('`user_send_id`', d()->user_send_id, $text);
		
		$text = str_replace('`amount_rbtc`', d()->amount_rbtc, $text);
		$text = str_replace('`comission`', d()->comission, $text);
		
		$text = str_replace('`reward`', d()->reward, $text);
		$text = str_replace('`status`', d()->status, $text);
		$text = str_replace('`message`', d()->email_message, $text);
		$text = str_replace('`detail`', d()->detail, $text);
        
		$text = str_replace('`amount`', d()->amount, $text);
		$text = str_replace('`cashback`', d()->cashback, $text);

		$text = str_replace('`subject`', d()->subject, $text);
		$text = str_replace('`email`', d()->email, $text);
		$text = str_replace('`text`', d()->text, $text);
		$text = str_replace('`count`', d()->count, $text);
		$text = str_replace('`operation_id`', d()->operation_id, $text);

		return $text;
	}

}

