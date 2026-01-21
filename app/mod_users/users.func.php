<?php
//контроллер
class UsersController {
    //Регистрация  
    function registration()
    {
        if($_POST['info']){
            $info = json_decode($_POST['info'], true);
            if($info['type']=='ur'){
                if(!$info['password'] || !$info['password_repeat'] || !$info['email'] || !$info['phone'] || !$info['type']){
                    return d()->t("dont_fields");
                }
            }else{
                if(!$info['password'] || !$info['password_repeat'] || !$info['surname'] || !$info['name'] || !$info['country'] || !$info['city'] || !$info['email'] || !$info['type']){
                    return d()->t("dont_fields");
                }
            }
            
            if($info['password']!=$info['password_repeat']){
                return d()->t("error_pass_repeat");
            }
            if(!filter_var($info['email'], FILTER_VALIDATE_EMAIL)){
                return d()->t("error_email");
            }
            $check = d()->User->where('email=?', $info['email']);
            if(count($check)){
                return d()->t("error_email2");
            }
            $sponsor = $info['sponsor'];
            if(!$sponsor){
                $sponsor=1;
            }else{
                if($info['sponsor']!="1"){
                    $ch = d()->User->where('uid=?', $info['sponsor']);
                    if(!count($ch)){
                        return d()->t("error_userid");
                    }
                    if($info['type']=='ur' && !$ch->licensies){
                        return d()->t("not_licensies");
                    }
                }
            }
                        
            // функция генерации случайного уникального uid
            $uid = rand(10000, 99999999);
            $u = d()->User->where('uid=?', $uid);
            while($u->id){
                $uid = rand(10000, 99999999);
                $u = d()->User->where('uid=?', $uid);
            }
            
            $user = d()->User->new;
            $user->user_id = $sponsor;
            $user->uid = $uid;
            $user->password = md5('dfg45'.$info['password'].'gg43');
            $user->surname = $info['surname'];
            $user->name = $info['name'];
            $user->country = $info['country'];
            $user->city = $info['city'];
            $user->email = $info['email'];
            $user->phone = $info['phone'];
            $user->type = $info['type'];
            // Копируем требуемый объём активации из настроек
            $user->user_required_volume = d()->Option->user_activation_volume;
            if($info['type']=='fiz'){
                $user->is_active = 1;
            }
            $user->save;
            // заполнение связей для нового пользователя
            d()->sv_users($uid);
            
            $option = d()->Option;
            
            d()->password = $info['password'];
            d()->reg_email = $info['email'];
            $l = d()->Letter(1); 
                            
            d()->Mail->to($info['email']);
            d()->Mail->set_smtp($option->smtp_server,$option->smtp_port,$option->smtp_mail,$option->smtp_password,$option->smtp_protocol);
            d()->Mail->from($option->smtp_mfrom,$option->smtp_tfrom);
            d()->Mail->subject($l->title);
            d()->Mail->message($l->text);
            d()->Mail->send();
            
            return 'success';
        }
        return 'Server error';
    }
    
    function auth()
    {
        if($_POST['info']){
            $info = json_decode($_POST['info'], true);
            if(!$info['password'] || !$info['email']){
                return d()->t("dont_fields");
            }
            
            $pass = md5('dfg45'.$info['password'].'gg43');
            $check = d()->User->where('email=? AND password=? AND type=?', $info['email'], $pass, $info['type']);
            if(!count($check)){
                return d()->t("auth_error");
            }
            if(!$check->is_active){
                return d()->t("user_not_active");
            }
            if($info['remember']=='yes'){
                $auth_code = md5($check->password.'48gjdslIKMNC2@%%'.$check->email);
                setcookie("auth", $check->id, time() + 999999999, '/');
                setcookie("auth_code", $auth_code, time() + 999999999, '/');
            }
            
            d()->Auth->login($check->id, $check->uid);
            return 'success';
        }
        return 'Server error';
    }
    
    function forgot()
    {
        if($_POST['info']){
            $info = json_decode($_POST['info'], true);
            if(!$info['email']){
                return d()->t("dont_fields");
            }
            $check = d()->User->where('email=?', $info['email']);
            if(!count($check)){
                return d()->t("not_user");
            }
                            
            $option = d()->Option;
            
            $code = md5('346hh'.$check->email.$check->updated_at.'dsfdsf');
            $lnk = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].d()->langlink.'/?email='.$info['email'].'&code='.$code.'&type=forgot';
            d()->change_pass_link = '<a href="'.$lnk.'">'.$lnk.'</a>';
            $l = d()->Letter(2); 
                            
            d()->Mail->to($info['email']);
            d()->Mail->set_smtp($option->smtp_server,$option->smtp_port,$option->smtp_mail,$option->smtp_password,$option->smtp_protocol);
            d()->Mail->from($option->smtp_mfrom,$option->smtp_tfrom);
            d()->Mail->subject($l->title);
            d()->Mail->message($l->text);
            d()->Mail->send();
            
            return 'success';
        }
        return 'Server error';
    }
}

function too_short($login){
    if( strlen($login)<4) {
        return false;
    }
}
