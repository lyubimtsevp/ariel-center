<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class PagesController
{
	function show()
	{
		$url = url();
		d()->this = d()->Page->find_by_url($url);
		if (d()->this->is_empty) {
			d()->page_not_found();
		}
		
		d()->header = d()->headerall_tpl();
		d()->footer = d()->footerall_tpl();

	}
	
	function stores()
    {

		d()->categories_list = d()->Category;
		d()->stores = d()->Store;
		d()->slides = d()->Head_slide;

		
		// количество элементов на странице
		d()->cnt = d()->Option->store_count;
		
		if(!$_GET['category']){
			d()->active='active';
			d()->title = d()->t('all_stores');
			d()->cat = 0;
		}else{
			d()->category = d()->Category($_GET['category']);
			if(!d()->category->id){
				header('Location: '.d()->langlink.'/stores');
				exit;
			}
			d()->title = d()->category->title;
			d()->cat = d()->category->id;
			
			d()->stores->search('category_id', ','.$_GET['category'].',');
		}

        d()->search = '';
        if($_GET['search']){
            d()->search = $_GET['search'];
            d()->stores->search('zag','title','tags', $_GET['search']);
        }
		
		d()->sort = '';
		if($_GET['sort']=='date'){
			d()->date_a = 'active';
			d()->sort = 'date';
			d()->stores->order_by('created_at DESC');
		}
		if($_GET['sort']=='cashback'){
			d()->cashback_a = 'active';
			d()->sort = 'cashback';
			d()->stores->order_by('cashback DESC');
		}
		if($_GET['sort']=='popular'){
			d()->popular_a = 'active';
			d()->sort = 'popular';
			d()->stores->order_by('view DESC');
		}

		d()->check_more = 0;
		if(count(d()->stores)>d()->cnt){
			d()->check_more = 1;
		}
		
		d()->stores->limit(0,d()->cnt);
        
        if(!d()->Seo->title){
            d()->Seo->title = 'Онлайн магазины / ALBIXE'; 
        }

		d()->header = d()->headerall_tpl();
		d()->footer = d()->footerall_tpl();
	}
	
	function partners()
	{
		d()->categories_list = d()->Pcategory;
		if($_SESSION['city'] && $_SESSION['city']!='all'){
            d()->stores = d()->Partner->where('city_id=?', $_SESSION['city']);
        }else{
            d()->stores = d()->Partner;
        }

		d()->slides = d()->Head_slide;
		
		// количество элементов на странице
		d()->cnt = d()->Option->partner_count;
		
		if(!$_GET['category']){
			d()->active='active';
			d()->title = d()->t('all_partners');
			d()->cat = 0;
		}else{
			d()->category = d()->Category($_GET['category']);
			if(!d()->category->id){
				header('Location: '.d()->langlink.'/partners');
				exit;
			}
			d()->title = d()->category->title;
			d()->cat = d()->category->id;
			
			d()->stores->search('category_id', ','.$_GET['category'].',');
		}

        d()->search = '';
        if($_GET['search']){
            d()->search = $_GET['search'];
            d()->stores->search('zag','title','tags', $_GET['search']);
        }
		
		d()->sort = '';
		if($_GET['sort']=='date'){
			d()->date_a = 'active';
			d()->sort = 'date';
			d()->stores->order_by('created_at DESC');
		}
		if($_GET['sort']=='cashback'){
			d()->cashback_a = 'active';
			d()->sort = 'cashback';
			d()->stores->order_by('cashback DESC');
		}
		if($_GET['sort']=='popular'){
			d()->popular_a = 'active';
			d()->sort = 'popular';
			d()->stores->order_by('view DESC');
		}
		
		d()->check_more = 0;
		if(count(d()->stores)>d()->cnt){
			d()->check_more = 1;
		}
		
		d()->stores->limit(0,d()->cnt);
        
        if(!d()->Seo->title){
            d()->Seo->title = 'Партнеры / ALBIXE'; 
        }

		d()->header = d()->headerall_tpl();
		d()->footer = d()->footerall_tpl();
	}
	
	function stores_show()
	{
        if(d()->Auth->is_guest){
            header('Location: '.d()->langlink.'/stores');
            exit;
        }

		d()->this = d()->Store(url(2));
        d()->this->view = d()->this->view+1;
        d()->this->save;
		
		if(!count(d()->this)){
			d()->page_not_found();
		}
		
		if(!d()->Seo->title){
            d()->Seo->title = d()->this->title.' / ALBIXE'; 
        }

		d()->header = d()->headerall_tpl();
		d()->footer = d()->footerall_tpl();
	}
	
	function partners_show()
	{
		d()->this = d()->Partner(url(2));
        d()->this->view = d()->this->view+1;
        d()->this->save;
		
		if(!count(d()->this)){
			d()->page_not_found();
		}
		
		if(!d()->Seo->title){
            d()->Seo->title = d()->this->title.' / ALBIXE'; 
        }

		d()->header = d()->headerall_tpl();
		d()->footer = d()->footerall_tpl();
	}
	
	function request()
	{
		if($_POST['info']){
			$info = json_decode($_POST['info'], true);
			if(!$info['name'] || !$info['email'] || !$info['phone'] || !$info['text']){
				return d()->t("dont_fields");
			}
			
			$option = d()->Option;
			
			$subject = 'Обратный звонок ALBIXE';
			$text = 'Имя: '.$info['name'].'<br>Телефон: '.$info['phone'].'<br>E-mail: '.$info['email'].'<br>Текст: '.$info['text'].'<br>';
			
			d()->Mail->to($option->email);
			d()->Mail->set_smtp($option->smtp_server,$option->smtp_port,$option->smtp_mail,$option->smtp_password,$option->smtp_protocol);
			d()->Mail->from($option->smtp_mfrom,$option->smtp_tfrom);
			d()->Mail->subject($subject);
			d()->Mail->message($text);
			d()->Mail->send();
			
			return 'success';
		}
		return 'Server error';

	}
	
	function contact()
	{
		if($_POST['info']){
			$info = json_decode($_POST['info'], true);
			if(!$info['name'] || !$info['email'] || !$info['text']){
				return d()->t("dont_fields");
			}
			
			$option = d()->Option;
			
			$subject = 'Сообщение с сайта ALBIXE';
			$text = 'Имя: '.$info['name'].'<br>E-mail: '.$info['email'].'<br>Текст: '.$info['text'].'<br>';
			
			d()->Mail->to($option->email);
			d()->Mail->set_smtp($option->smtp_server,$option->smtp_port,$option->smtp_mail,$option->smtp_password,$option->smtp_protocol);
			d()->Mail->from($option->smtp_mfrom,$option->smtp_tfrom);
			d()->Mail->subject($subject);
			d()->Mail->message($text);
			d()->Mail->send();
			
			return 'success';
		}
		return 'Server error';

	}
	
	function index()
	{
		d()->cont = d()->Index_cont;
		d()->head_slides = d()->Head_slide;
		d()->about_slides = d()->About_slide;
		
		// для восстановления пароля
		if($_GET['type']=='forgot' && $_GET['email'] && $_GET['code']){
			$check = d()->User->where('email=?', $_GET['email']);
			$code = md5('346hh'.$check->email.$check->updated_at.'dsfdsf');
			if($_GET['code']!=$code){
				d()->js_action = "<script>$('#forgot-error').modal('show');</script>";
			}else{
				d()->new_pass = rand(100000, 999999);
				$check->password = md5('dfg45'.d()->new_pass.'gg43');
				$check->save;

                $option = d()->Option;
                $l = d()->Letter(3);

                d()->Mail->to($check->email);
                d()->Mail->set_smtp($option->smtp_server,$option->smtp_port,$option->smtp_mail,$option->smtp_password,$option->smtp_protocol);
                d()->Mail->from($option->smtp_mfrom,$option->smtp_tfrom);
                d()->Mail->subject($l->title);
                d()->Mail->message($l->text);
                d()->Mail->send();
				
				d()->js_action = "<script>$('#forgot-success').modal('show');</script>";
			}
		}
        
        if(!d()->Seo->title){
            d()->Seo->title = 'ALBIXE'; 
        }
		
		d()->header = d()->header_tpl();
		d()->footer = d()->footer_tpl();
	}
	
}

