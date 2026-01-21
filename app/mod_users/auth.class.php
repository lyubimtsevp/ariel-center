<?php


class Auth extends UniversalSingletoneHelper
{	
	private $_id=0;
	function is_guest()
	{
		if(!isset($_SESSION['auth']) || $_SESSION['auth']==''){
			return true;
		}
		return false;
	}
	function is_authorised()
	{
		if(!isset($_SESSION['auth']) || $_SESSION['auth']==''){
			return false;
		}
		return true;
	}
	
	function login($userid=0, $uid=0){
		$_SESSION['auth']=$userid;
		$_SESSION['uid']=$uid;
		$this->_id=$userid;
	}
	
	function logout(){
		unset($_SESSION['auth']);
		unset($_SESSION['uid']);
        setcookie("auth", '', time() + 999999999, '/');
        setcookie("auth_code", '', time() + 999999999, '/');
		$this->_id=false;
	}
	
	function id()
	{
		return $_SESSION['auth'];
	}
    
    function uid()
	{
		return $_SESSION['uid'];
	}
	
	function user($id=false)
	{
		if ($id===false){
			$id = $_SESSION['auth'];
		}
		return d()->User($id);
	}

}
