<?php
//Автоматически регистрировать все контроллеры
route_all();

// Входная группа (новый дизайн)
route("/login", "main", "login_page");
route("/register", "main", "register_page");
route("/users/login", "main", "login_page");
route("/users/register", "main", "register_page");
route("/users/forgot", "main", "forgot_page");


route('/test', 'main', 'test');

route('/error_404', 'error_404');
route('/', 'pages#');
route('/index', 'pages#index');
route('/stores', 'pages#stores');
route('/stores/', 'pages#stores_show');

route('/partners', 'pages#partners');
route('/partners/', 'pages#partners_show');

route('/cabinet/index', 'cabinet#index');
route('/cabinet/my_team', 'cabinet#my_team');
route('/cabinet/my_profile', 'cabinet#my_profile');
route('/cabinet/my_fees', 'cabinet#my_fees');
route('/ajax/cabinet/my_fees', 'main', 'cabinet#my_fees');
route('/cabinet/amount_sales', 'cabinet#amount_sales');
route('/cabinet/information', 'cabinet#information');
route('/cabinet/info', 'cabinet#information');
  route('/cabinet/photo', 'cabinet#events');
route('/cabinet/events', 'cabinet#events');
route('/cabinet/news', 'cabinet#news');
route('/cabinet/shop', 'cabinet#shop');
route('/cabinet/support', 'cabinet#support');

route('/le_cabinet/index', 'le_cabinet#index');
route('/le_cabinet/qr', 'le_cabinet#qr');
route('/le_cabinet/payment', 'le_cabinet#payment');
route('/le_cabinet/clients', 'le_cabinet#clients');

route('/getqr/', 'main', 'qrgenerator');

route('/ajax/registration', 'main', 'users#registration');
route('/ajax/auth', 'main', 'users#auth');
route('/ajax/forgot', 'main', 'users#forgot');
route('/ajax/request', 'main', 'pages#request');
route('/ajax/contact', 'main', 'pages#contact');
route('/ajax/stores', 'main', 'ajax_stores');
route('/ajax/partners', 'main', 'ajax_partners');
route('/ajax/change_image', 'main', 'change_image');
route('/ajax/operations', 'main', 'ajax_operations');
route('/ajax/profile_edit', 'main', 'profile_edit');
route('/ajax/buy_system', 'main', 'buy_system');

route('/admin/edit/operations/', 'admin_save_data', 'save_operations');
route('/admin/delete/operations/', 'admin_delete_element', 'del_operations');
route('/admin/list/ex_cashbacks/', 'content', 'admin_ex_cashback_list');

route('/api/get_access_token', 'main', 'get_access_token');
route('/api/get_subid_info', 'main', 'get_subid_info');

route('/cron/refresh_access_token', 'main', 'refresh_access_token');
route('/cron/refresh_adm_cashback', 'main', 'refresh_adm_cashback');
route('/cron/clear_sale_volume', 'main', 'clear_sale_volume');
route('/cron/clear_status', 'main', 'clear_status');

route('/admin/edit/users/', 'admin_save_data', 'save_users');
route('/admin/debug', 'main', 'debug');

route('/success_pay', 'main', 'success_pay');
route('/error_pay', 'main', 'error_pay');
route('/pay/notification', 'main', 'pay_notification');

route('/get/server', 'main', 'get_server');
route('/get/session', 'main', 'get_session');

route('/change_withdrawals', 'main', 'change_withdrawals');
route('/run_ex_cashback', 'main', 'run_ex_cashback');

// React SPA API endpoints
route('/api/user', 'main', 'api#user_data');
route('/api/withdrawal', 'main', 'api#withdrawal');
route('/api/transfer', 'main', 'api#transfer');
route('/api/profile', 'main', 'api#profile');
route('/api/team', 'main', 'api#team');
