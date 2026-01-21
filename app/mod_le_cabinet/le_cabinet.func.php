<?php
/*
	Модуль для работы с текстовыми страницами, для вывода меню, выода подстраниц
*/
class Le_cabinetController
{
	function index()
	{
	    d()->login_check();
        // првоеряем доступ у пользователя ко всем разделам
        d()->access_check();

        d()->profile_a = 'active';
        d()->body_le = 'cab-body-le';
        
        if(!d()->Seo->title){
            d()->Seo->title = d()->t("my_profile");
        }
        
        d()->header = d()->cab_header_tpl();
		d()->footer = d()->cab_footer_tpl();
	}
    
    function profile_edit()
	{
		d()->login_check();
        
        if($_POST){
            if($_POST['title'] && $_POST['phone'] && $_POST['city']){
                d()->user->title = $_POST['title'];
                //d()->user->email = $_POST['email'];
                d()->user->phone = $_POST['phone'];
                d()->user->city = $_POST['city'];
                d()->user->country = $_POST['country'];
                if($_POST['password']){
                    d()->user->password = md5('dfg45'.$_POST['password'].'gg43');
                }
                d()->user->access = 1;
                d()->user->save;
                header('Location: '.d()->langlink.'/'.url(1).'/?action=profile_edit');
                exit;
            }else{
                header('Location: '.d()->langlink.'/'.url(1).'/profile_edit?action=error');
                exit;
            }
        }
        
        if(!d()->Seo->title){
            d()->Seo->title = d()->t("profile_edit");
        }
        
        d()->profile_a = 'active';
        d()->body_le = 'cab-body-le';
        
        d()->countries_list = d()->Country;
        
        d()->header = d()->cab_header_tpl();
		d()->footer = d()->cab_footer_tpl();
	}
    
    function qr()
	{
        d()->login_check();
        // првоеряем доступ у пользователя ко всем разделам
        d()->access_check();
        d()->body_le = 'cab-body-le';
        
        if(!d()->Seo->title){
            d()->Seo->title = d()->t("qr_scanner");
        }
        
        d()->header = d()->cab_header_tpl();
		d()->footer = d()->cab_footer_tpl();
	}
    
    function payment()
	{
		d()->login_check();
        // проверяем доступ у пользователя ко всем разделам
        d()->access_check();
        d()->payment_a = 'active';
        d()->body_le = 'cab-body-le';
        d()->hidesmprofile = 'hidesmprofile';
        
        if($_POST['step']=='3' && $_POST['id'] && $_POST['amount'] && $_POST['amount_cashback']){
            $u = d()->User->where('uid = ? AND type="fiz"', $_POST['id']);
            if(!count($u)){
                header('Location: '.d()->langlink.'/le_cabinet/payment?action=user_error&id='.$_POST['id']);
                exit;
            }
            
            $cashback = $_POST['cashback'];
            
            //$amount_cashback = d()->truncated($_POST['amount']/100*$cashback);
            $amount_cashback = floatval(round(($_POST['amount']/100*$cashback), 2));
            $cf = d()->Package($u->package)->cashback;
            $pcb = d()->truncated($amount_cashback/100*$cf);

            // сохраняем ожидаемый КБ для пользователя
            if($pcb>0){
                $u->opencb_balance = $u->opencb_balance + $pcb;
                $u->save;
            }

            // начисляем ожидаемый КБ по линиям
            // в переменную d()->sponsors получаем список uid через запятую
            // которым начислился ожидаемый КБ
            d()->cb_make($_POST['id'], $amount_cashback);

            // начисляем ожидаемый КБ для агентов
            $ag_sv_users = d()->Sv_user->where('uid=?', d()->user->uid)->to_array();
            $packages = d()->Package->to_array();
            $p = Array();
            foreach($packages as $k=>$v){
                $p[$v['id']] = $v;
            }
            foreach($ag_sv_users as $k=>$v){
                $ag_user = d()->User->where('uid=?', $v['sponsor']);
                // есть ли пользователь
                if(!count($ag_user)){
                    continue;
                }
                // позволяет ли ему пакет
                if($v['type']==1){
                    if($p[$ag_user->package]['bonus_agent']>0){
                        $value_p = $p[$ag_user->package]['bonus_agent'];
                        // расчитываем бонус
                        $value = d()->truncated($amount_cashback/100*$value_p);
                    }else{
                        continue;
                    }
                }
                if($v['type']==2){
                    if($p[$ag_user->package]['bonus_dopagent']>0){
                        $value_p = $p[$ag_user->package]['bonus_dopagent'];
                        // расчитываем бонус
                        $value = d()->truncated($amount_cashback/100*$value_p);
                    }else{
                        continue;
                    }
                }

                // начисляем ожидаемый КБ
                $ag_user->opencb_balance = $ag_user->opencb_balance + $value;
                $ag_user->save;
            }

            // генерируем operation и отправляем письмо
            d()->ch($_POST['id'], $amount_cashback, 'ur_payment', $_POST['amount'], d()->user->uid, $cashback, d()->sponsors);


            header('Location: '.d()->langlink.'/le_cabinet/payment?step=3&amount='.$_POST['amount']);
            exit;
        }
        
        d()->step = $_GET['step'];
        if(!$_GET['step']){
            d()->id = $_GET['id'];
            if(!d()->id){
                d()->dis = 'disabled';
            }
        }
        if($_GET['step']==2){
            $u = d()->User->where('uid = ? AND type="fiz"', $_GET['id']);
            if(!count($u)){
                header('Location: '.d()->langlink.'/le_cabinet/payment?action=user_error&id='.$_GET['id']);
                exit;
            }
            d()->cbs = array_diff(explode('|', d()->user->cashback), array(''));
            sort(d()->cbs);
        }
        
        if(!d()->Seo->title){
            d()->Seo->title = d()->t("payment");
        }
        
        d()->header = d()->cab_header_tpl();
		d()->footer = d()->cab_footer_tpl();
	}
    
    function clients()
	{
        d()->login_check();
        // првоеряем доступ у пользователя ко всем разделам
        d()->access_check();
        d()->body_le = 'cab-body-le';
        d()->clients_a = 'active';
        d()->hidesmprofile = 'hidesmprofile';
        
        d()->operations_list = d()->Operation->where('le_user_id=? AND type="ur_payment"', d()->user->uid)->order_by('sort desc');

        if(count(d()->operations_list)>d()->o->operation_limit){
            d()->flg = 1;
        }
        d()->operations_list->limit(0,d()->o->operation_limit);

        d()->filtr = '';
        if($_GET['startdate'] && !$_GET['enddate']){
            $startdate = date("Y-m-d", strtotime($_GET['startdate'])).' 00:00:00';

            d()->operations_list = d()->Operation->where('le_user_id=? AND type="ur_payment" AND created_at>=?', d()->user->uid,$startdate)->order_by('sort desc');

            d()->filtr = '<div class="filtrc">'.d()->t("period").': '.d()->t("from").' <u>'.$_GET['startdate'].'</u><a href="'.d()->langlink.'/le_cabinet/clients"><i class="mdi mdi-close"></i></a></div>';
        }elseif(!$_GET['startdate'] && $_GET['enddate']){
            $enddate = date("Y-m-d", strtotime($_GET['enddate'])).' 23:59:59';

            d()->operations_list = d()->Operation->where('le_user_id=? AND type="ur_payment" AND created_at<=?', d()->user->uid,$enddate)->order_by('sort desc');

            d()->filtr = '<div class="filtrc">'.d()->t("period").': '.d()->t("to").' <u>'.$_GET['enddate'].'</u><a href="'.d()->langlink.'/le_cabinet/clients"><i class="mdi mdi-close"></i></a></div>';
        }elseif($_GET['startdate'] && $_GET['enddate']){
            $startdate = date("Y-m-d", strtotime($_GET['startdate'])).' 00:00:00';
            $enddate = date("Y-m-d", strtotime($_GET['enddate'])).' 23:59:59';

            d()->operations_list = d()->Operation->where('le_user_id=? AND type="ur_payment" AND created_at>=? AND created_at<=?', d()->user->uid,$startdate,$enddate)->order_by('sort desc');

            d()->filtr = '<div class="filtrc">'.d()->t("period").': '.d()->t("from").' <u>'.$_GET['startdate'].'</u> '.d()->t("to").' <u>'.$_GET['enddate'].'</u><a href="'.d()->langlink.'/le_cabinet/clients"><i class="mdi mdi-close"></i></a></div>';
        }

        if(!d()->operations_list->count){
            d()->noresults = '<p>'.d()->t("noresults").'</p>';
        }
        
        if(!d()->Seo->title){
            d()->Seo->title = d()->t("clients");
        }
        
        d()->header = d()->cab_header_tpl();
		d()->footer = d()->cab_footer_tpl();
	}

}

