<?php if(iam()){ ?>
	<link rel="stylesheet" type="text/css" href="/cms/mod_admin/assets/admin_panel.css" />
    <style>
        ul#admin_main_user_menu>li>ul li.zag{
            margin-left: 15px;
            display: block;
            margin-top: 15px;
            margin-bottom: 0;
        }
        ul#admin_main_user_menu>li>ul li.zag:first-child{
            margin-top: 5px;
        }
    </style>
	<script>
		document.body.style.position="relative"
		document.body.style.top="30px"
	</script>
	<div style="position:fixed;width:100%;height:30px;background:#2C2C2C;left:0;top:0;z-index:6900;border-bottom:1px solid white;">
	<ul id="admin_main_user_menu">
	<li>
    <a href="#" >
          Редактировать
          <b class="caret"></b>
    </a>
    <ul>
    <?
        if($_SESSION['admin']!='developer' && $_SESSION['admin']!='admin') {
            d()->adm = d()->Admin_user->where('login=?', $_SESSION['admin'])->to_array();
        }
    ?>
 	<?php foreach (d()->admin['leftmenu'] as $_value) { ?>
	    <?
        if($_value[0]=='zag'){
            if(!count(d()->adm)) print '<li class="zag"><span>'.$_value[1].'</span></li>';
            continue;
        }
        ?>
        <?
            // проверка на разрешение
            $v = str_replace('/admin/list/', '', $_value[0]);
            $v = str_replace('/admin/edit/', '', $v);
            $v = str_replace('/all', '', $v);
            $v = str_replace('/', '', $v);

            $ch = d()->adm[0]['is_'.$v];

            if(!$ch && count(d()->adm))continue;
        ?>
		<?php if(substr( $_value[0],0,7)!='/admin/'){ ?>
			<li><a target="_blank" href="/admin/list/<?php print $_value[0]; ?>"   ><?php print $_value[1]; ?></a></li>
		<?php }else{ ?>
			<li><a target="_blank" href="<?php print $_value[0]; ?>"   ><?php print $_value[1]; ?></a></li>
		<?php } ?>
	<?php } ?>
        
		
		
    	
    </ul>
  </li>

		<?php if(iam('developer')){ ?>
		  
				  <li>
			<a href="#"
				  
				 >
				  Скаффолдинг
				  
			</a>
			<ul >
			
			
			<li><a target="_blank" href="/admin/scaffold/new">Создать</a></li>
				

				
				<li><a target="_blank" href="/admin/scaffold/install_plugin">Установить расширение</a></li>
				<li><a target="_blank" href="/admin/scaffold/update_system">Обновить систему</a></li>	
				<li><a target="_blank" href="/admin/scaffold/update_scheme">Обработать схему</a></li>
				<li><a target="_blank" href="/admin/scaffold/migrate_scheme">Миграция схемы</a></li>
			</ul>
		  </li>
		  
		  
		<?php } ?>


		<?php foreach(d()->admin_panel_buttons as $button){?>
			<li><a href="<?php print $button['url']?>" onclick="if (jQuery.browser.opera && parseInt(jQuery.browser.version) >= 12){window.open(this.href);return false;}" target="_blank"><?php print $button['title']?></a></li>
		<?php } ?>
		  <li><a href="/admin/logout">Выход</a></li>
	</ul>
	
	</div>
	
	
<?php } ?>
