<?php

//Дополнительные пользователи
class Admin_usersController
{
	function index()
	{
		d()->admin_users_list = d()->Admin_user;
		print d()->view();
	}
	function save()
	{
		if(!iam()){
			//До этого не должно дойти
			exit();
		}
		if(!iam('admin') && !iam('developer')){
			//До этого не должно дойти
			exit();
		}
		
		if(d()->validate()){
			if($_POST['element_id']=='add'){
				if(empty(d()->params['password'])){
					d()->add_notice('Вы не ввели пароль','password');
				}
			}
		}
		if(d()->validate()){
			if(d()->params['login']=='admin' || d()->params['login']=='developer'){
				d()->add_notice('Имена admin и developer использовать нельзя.','login');
			}
		}
		if(d()->validate()){
			if($_POST['element_id']=='add'){
				if (! d()->Admin_user->is_empty){
					if(!d()->Admin_user->where('login = ?',d()->params['login'])->is_empty){
						d()->add_notice('Такой логин уже занят','login');
					}
				}
			}else{
				if (! d()->Admin_user->is_empty){
					if(!d()->Admin_user->where('login = ?',d()->params['login'])->is_empty && d()->Admin_user->where('login = ?',d()->params['login'])->id!=$_POST['element_id']){
						d()->add_notice('Такой логин уже занят','login');
					}
				}
			}
				 
			 
		}
		if(d()->validate()){
			if($_POST['element_id']=='add'){
				$user = d()->Admin_user->new;
			}else{
				$user = d()->Admin_user($_POST['element_id']);
				if($user->is_empty){
					d()->add_notice('Такой пользователь не найден');
					print '$(".notice_container").html(' . json_encode(d()->notice(array('bootstrap'))) . '); ';
					d()->reload();
					exit();
					//return 'Пользователь не найден';
				}
			}
			$user->login = d()->params['login'];
            $wl = '';

            $user->is_o_cb = d()->params['is_o_cb'];
            $user->is_o_cb_adm = d()->params['is_o_cb_adm'];
            $user->is_o_offcheck = d()->params['is_o_offcheck'];
            $user->is_o_pack = d()->params['is_o_pack'];
            $user->is_o_lead = d()->params['is_o_lead'];
            $user->is_o_lic = d()->params['is_o_lic'];
            $user->is_o_status = d()->params['is_o_status'];
            $user->is_o_shop = d()->params['is_o_shop'];
            $user->is_o_event = d()->params['is_o_event'];

            $is_operations = 0;
            if(d()->params['is_o_cb'] || d()->params['is_o_cb_adm'] || d()->params['is_o_offcheck'] || d()->params['is_o_pack'] || d()->params['is_o_lead'] || d()->params['is_o_lic'] || d()->params['is_o_status'] || d()->params['is_o_shop'] || d()->params['is_o_event'])$is_operations = 1;

            $user->is_operations = $is_operations;
            if($is_operations)$wl .= 'operations,';

            $user->is_withdrawals = d()->params['is_withdrawals'];
            if(d()->params['is_withdrawals'])$wl .= 'withdrawals,';
            $user->is_ex_cashbacks = d()->params['is_ex_cashbacks'];
            if(d()->params['is_ex_cashbacks'])$wl .= 'ex_cashbacks,';
            $user->is_users = d()->params['is_users'];
            if(d()->params['is_users'])$wl .= 'users,';
            $user->is_packages = d()->params['is_packages'];
            if(d()->params['is_packages'])$wl .= 'packages,';
            $user->is_statuses = d()->params['is_statuses'];
            if(d()->params['is_statuses'])$wl .= 'statuses,';
            $user->is_events = d()->params['is_events'];
            if(d()->params['is_events'])$wl .= 'events,';
            $user->is_news = d()->params['is_news'];
            if(d()->params['is_news'])$wl .= 'news,';
            $user->is_shops = d()->params['is_shops'];
            if(d()->params['is_shops'])$wl .= 'shops,';
            $user->is_informations = d()->params['is_informations'];
            if(d()->params['is_informations'])$wl .= 'informations,';
            $user->is_supports = d()->params['is_supports'];
            if(d()->params['is_supports'])$wl .= 'supports,';
            $user->is_index_conts = d()->params['is_index_conts'];
            if(d()->params['is_index_conts'])$wl .= 'index_conts,head_slides,about_slides,';
            $user->is_stores = d()->params['is_stores'];
            if(d()->params['is_stores'])$wl .= 'stores,';
            $user->is_partners = d()->params['is_partners'];
            if(d()->params['is_partners'])$wl .= 'partners,';
            $user->is_letters = d()->params['is_letters'];
            if(d()->params['is_letters'])$wl .= 'letters,';
            $user->is_options = d()->params['is_options'];
            if(d()->params['is_options'])$wl .= 'options,ways,categories,pcategories,cities,countries,';
            $user->is_seoparams = d()->params['is_seoparams'];
            if(d()->params['is_seoparams'])$wl .= 'seoparams,';

            $wl = substr($wl,0,-1);
            $user->whitelist = $wl;

            if(d()->params['password']!=''){
				$user->password = md5(d()->params['password']);
			}
			$user->save();

			print 'document.location.href="/admin/list/admin_users";';
			exit();
		}
		if(d()->notice(array('bootstrap'))){
			print '$(".notice_container").html(' . json_encode(d()->notice(array('bootstrap'))) . '); ';
		}
		d()->reload();
	}
	function edit()
	{

		if(!iam('admin') && !iam('developer')){
			return 'Только главный администратор может управлять доступом.';
		}
		if(url(4)!='add'){
			d()->user = d()->Admin_user(url(4));
			if(d()->user->is_empty){
				return 'Пользователь не найден';
			}
		}else{
			d()->user = d()->Admin_user->limit(0);
		}
		print d()->view();
	}
}
