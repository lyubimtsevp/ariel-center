// JavaScript Document
$(document).ready(function () {
    
    $.validator.messages.required = $('input[name=required_error]').val();
    $('#profile-form').validate();
    $('#support-form').validate({
		submitHandler: function(form) {
			$(form).find('button[type=submit]').prop('disabled', true);
			$(form).submit();
		}
	});
	$('#withdrawal-form').validate({
		submitHandler: function(form) {
			$(form).find('button[type=submit]').prop('disabled', true);
			$(form).submit();
		}
	});
    $('#step2form').validate();

	// fancybox

	// class="fancybox" data-fancybox-group="gallery"
	// $('.fancybox').fancybox();

	// class="fancybox-thumbs" data-fancybox-group="thumb"
	// $('.fancybox-thumbs').fancybox({
		// prevEffect : 'none',
		// nextEffect : 'none',

		// closeBtn  : true,
		// arrows    : true,
		// nextClick : true,

		// helpers : {
			// thumbs : {
				// width  : 50,
				// height : 50
			// }
		// }
	// });
    // fancybox
	
	// Slick Slider
	// <section class="slider">
	// <img src="/images/slides/1.jpg" alt="">
	// <img src="/images/slides/2.jpg" alt="">
	// </section>
	$('#sl').slick({
		dots: true,
		infinite: true,
		speed: 400,
		fade: false,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
	});
	
	$('#sl2').slick({
		dots: true,
		infinite: true,
		speed: 400,
		fade: false,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
	});
	
	$('#sl3').slick({
		dots: true,
		infinite: true,
		speed: 400,
		fade: false,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
	});
	
	var lang = '/'+$('body').data('lang');
    if(lang=='/ru'){
        lang = '';
    }  
    
	$(window).scroll(function(){
		if ($(window).scrollTop() > 1) {
			$('#fix-header').addClass('fix-header-bg');
			//$('#bodyall').css('padding-top', '100px');
		}else{
			$('#fix-header').removeClass('fix-header-bg');
			//$('#bodyall').css('padding-top', '0');
		}
	});
	
	$('.go_to').click( function(){
		var scroll_el = $(this).attr('href');
        if($(scroll_el).length != 0){ 
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top-160 }, 1000);
        }
	    return false;
    });

	
	window.hashName = window.location.hash;
	if(window.location.hash){
		$('html, body').animate({scrollTop: $(window.hashName).offset().top-160}, 1000);
		return false;
	}
	
	$('.step-wide span').click(function(){
		var type = $(this).data('id');
		$('.type').val(type);
		$('.reg').hide();
		$('.reg-'+type).show();
	});
	
	$('#login-form').on('hide.bs.modal', function() {
		$('#success_register').hide();
	});
	
	$(".pink-checkbox input:checkbox" ).on("change", function() {
		var wrap = $(this).closest('.modal-body');
		var btn = wrap.find('button[type=submit]');
        var all_chk = wrap.find('input:checkbox').length;
        var chk = wrap.find('input:checkbox:checked').length;
		if(chk==all_chk){
			btn.prop('disabled', '');
		}else{
			btn.prop('disabled', 'disabled');
		}
    });

	$(".sub-wrap input:checkbox" ).on("change", function() {
		var wrap = $(this).closest('.sub-wrap');
		var btn = wrap.find('button');
        var all_chk = wrap.find('input:checkbox').length;
        var chk = wrap.find('input:checkbox:checked').length;
		if(chk==all_chk){
			btn.prop('disabled', '');
		}else{
			btn.prop('disabled', 'disabled');
		}
    });
	
	$('.albixe-form').submit(function(){
		var form = $(this);
		var btn = form.find('button[type=submit]');
		var loading = form.find('img.loading');
		var error = form.find('div.error');
		error.hide();
		error.html('');

		var t = $(this).attr('id');
		
		btn.prop('disabled','true');
		loading.show();
		
		if(t=='registration-form'){
			var info = {
			  'sponsor': form.find('input[name="referer"]').val(),
			  'surname': form.find('input[name="surname"]').val(),
			  'name': form.find('input[name="name"]').val(),
			  'country': form.find('select[name="country"]').val(),
			  'city': form.find('input[name="city"]').val(),
			  'email': form.find('input[name="email"]').val(),
			  'password': form.find('input[name="password"]').val(),
			  'password_repeat': form.find('input[name="password_repeat"]').val(),
			  'type': $('#auth-type').val(),
			};
			
			var json = JSON.stringify(info);
			//console.log(json);
			
			$.post(lang+'/ajax/registration', {info:json}, function(data) {
				if(data=='success'){
					btn.prop('disabled','');
					loading.hide();
					
					$('#success_register').show();
					
					$('#registration').modal('hide');
					$('#login-form').modal('show');
				}else{
					
					error.show();
					error.html(data);
					btn.prop('disabled','');
					loading.hide();
				}
			});
		}
		
		if(t=='registration-ur-form'){
			var info = {
			  'sponsor': form.find('input[name="referer"]').val(),
			  'email': form.find('input[name="email"]').val(),
			  'phone': form.find('input[name="phone"]').val(),
			  'password': form.find('input[name="password"]').val(),
			  'password_repeat': form.find('input[name="password_repeat"]').val(),
			  'type': $('#auth-type').val(),
			};
			
			var json = JSON.stringify(info);
			//console.log(json);
			
			$.post(lang+'/ajax/registration', {info:json}, function(data) {
				if(data=='success'){
					btn.prop('disabled','');
					loading.hide();
					
					$('#success_register').show();
					
					$('#registration_ur').modal('hide');
					$('#login-form').modal('show');
				}else{
					
					error.show();
					error.html(data);
					btn.prop('disabled','');
					loading.hide();
				}
			});
		}
		
		if(t=='auth-form'){
			var remember = 'no';
			if(form.find('input[name="remember"]:checked').length){
				remember = 'yes';
			}
			var info = {
			  'email': form.find('input[name="email"]').val(),
			  'password': form.find('input[name="password"]').val(),
			  'remember': remember,
			  'type': $('#auth-type').val(),
			};

			var json = JSON.stringify(info);

			console.log(json);

			$.post(lang+'/ajax/auth', {info:json}, function(data) {
				if(data=='success'){
                    if(lang=='/ru'){
                        lang = '';
                    }
                    if($('#auth-type').val()=='ur'){
                        window.location.href = lang+'/le_cabinet/payment';
                    }else{
                        window.location.href = lang+'/cabinet/';
                    }
				}else{

					$('#success_register').hide();
					error.show();
					error.html(data);
					btn.prop('disabled','');
					loading.hide();
				}
			});
		}
		
		if(t=='forgot-form'){
			var info = {
			  'email': form.find('input[name="email"]').val()
			};
			
			var json = JSON.stringify(info);
			//console.log(json);
			
			$.post(lang+'/ajax/forgot', {info:json}, function(data) {
				if(data=='success'){				
					$('#success_forgot').show();
					loading.hide();
				}else{
					
					$('#success_forgot').hide();
					error.show();
					error.html(data);
					btn.prop('disabled','');
					loading.hide();
				}
			});
		}
		
		if(t=='request-form'){
			var info = {
			  'email': form.find('input[name="email"]').val(),
			  'name': form.find('input[name="name"]').val(),
			  'phone': form.find('input[name="phone"]').val(),
			  'text': form.find('textarea[name="text"]').val(),
			};
			
			var json = JSON.stringify(info);
			//console.log(json);
			
			$.post(lang+'/ajax/request', {info:json}, function(data) {
				if(data=='success'){				
					$('#success_request').show();
					loading.hide();
				}else{
					
					$('#success_request').hide();
					error.show();
					error.html(data);
					btn.prop('disabled','');
					loading.hide();
				}
			});
		}
		
		if(t=='contact-form'){
			var info = {
			  'email': form.find('input[name="email"]').val(),
			  'name': form.find('input[name="name"]').val(),
			  'text': form.find('textarea[name="text"]').val(),
			};
			
			var json = JSON.stringify(info);
			//console.log(json);
			
			$.post(lang+'/ajax/contact', {info:json}, function(data) {
				if(data=='success'){				
					$('#success_contact').show();
					loading.hide();
				}else{
					
					$('#success_contact').hide();
					error.show();
					error.html(data);
					btn.prop('disabled','');
					loading.hide();
				}
			});
		}
		
		
		return false;
    });
	
	$('.categories a').click(function(){
		var wrap = $('.categories');
		var input = $('#ssearch');
		var lies = wrap.find('li');
		var block = $('.stores');
		var elementspage = block.data('elementspage');
		var am_block = $('.add-more');
		var load = am_block.find('img');
		var btn = am_block.find('button');
		var not_stores = $('#not_stores');
		var table = $('#table').val();
		var category_name = $(this).html().split('</i>');
		var title = $('.c_sad h1')

		var ttl = category_name[1].split('(');
		title.html(ttl[0]);
		
		var category = $(this).data('category');
		var sort = $('.stores').data('sort');
		var amount = 0;

		input.val('');
		lies.removeClass('active');
		$(this).closest('li').addClass('active');
		block.data('category', category).attr('data-category', category);
		block.data('amount', elementspage).attr('data-amount', elementspage);
		block.data('search', '').attr('data-search', '');

		am_block.show();
		load.show();
		btn.hide();
		not_stores.hide();
		block.html('');
		
		$.post(lang+'/ajax/'+table, {category:category,sort:sort,amount:amount},  function(data){
			var r = JSON.parse(data);
			//console.log(r);
			//console.log(r.result);
			
			$('.stores').html(r.result);
			
			load.hide();
			if(r.more>0){
				btn.show();
			}
			if(!r.result){
				$('#not_stores').show();
			}
			
			if(lang=='/ru'){
				lang = '';
			}
			history.pushState(null, null, lang+'/'+table+'?category='+category+'&sort='+sort);
			
		});	
		
		return false;
	});
	
	$('.c_sad a').click(function(){
		var wrap = $('.c_sad');
		var input = $('#ssearch');
		var links = $('.c_sad a');
		var block = $('.stores');
		var elementspage = block.data('elementspage');
		var am_block = $('.add-more');
		var load = am_block.find('img');
		var btn = am_block.find('button');
		var not_stores = $('#not_stores');
		var table = $('#table').val();
		
		var category = block.data('category');
		var sort = $(this).data('sort');
		var search = input.val();
		var amount = 0;
		
		links.removeClass('active');
		$(this).addClass('active');
		block.data('sort', sort).attr('data-sort', sort);
		block.data('amount', elementspage).attr('data-amount', elementspage);
		block.data('search', search).attr('data-search', search);

		am_block.show();
		load.show();
		btn.hide();
		not_stores.hide();
		block.html('');
		
		$.post(lang+'/ajax/'+table, {category:category,sort:sort,amount:amount,search:search},  function(data){
			var r = JSON.parse(data);
			//console.log(r);
			//console.log(r.result);
			
			$('.stores').html(r.result);
			
			load.hide();
			if(r.more>0){
				btn.show();
			}
			if(!r.result){
				$('#not_stores').show();
			}
			
			if(lang=='/ru'){
				lang = '';
			}
			history.pushState(null, null, lang+'/'+table+'?category='+category+'&sort='+sort+'&search='+search);
			
		});	
		
		return false;
	});

	$('#searchform').submit(function(){
		var block = $('.stores');
		var input = $('#ssearch');
		var elementspage = block.data('elementspage');
		var am_block = $('.add-more');
		var load = am_block.find('img');
		var btn = am_block.find('button');
		var not_stores = $('#not_stores');
		var table = $('#table').val();

		var category = block.data('category');
		var sort = block.data('sort');
		var search = input.val();
		var amount = 0;

		block.data('search', search).attr('data-search', search);
		block.data('amount', elementspage).attr('data-amount', elementspage);

		am_block.show();
		load.show();
		btn.hide();
		not_stores.hide();
		block.html('');

		$.post(lang+'/ajax/'+table, {category:category,sort:sort,amount:amount,search:search},  function(data){
			var r = JSON.parse(data);
			//console.log(r);
			//console.log(r.result);

			$('.stores').html(r.result);

			load.hide();
			if(r.more>0){
				btn.show();
			}
			if(!r.result){
				$('#not_stores').show();
			}

			if(lang=='/ru'){
				lang = '';
			}
			history.pushState(null, null, lang+'/'+table+'?category='+category+'&sort='+sort+'&search='+search);

		});
		return false;
	});
   
   $('#cab-upload-img').on('change', function(){
		files = this.files;
		if( typeof files == 'undefined' ) return;
		var data = new FormData();
		
		$.each(files,function(key,value){
			data.append(key,value);
		});
		
		data.append('my_file_upload', 1);
		
		$('#cab-upload-load').show();

		$.ajax({
			url         : '/ajax/change_image',
			type        : 'POST',
			data        : data,
			cache       : false,
			dataType    : 'text',
			processData : false,
			contentType : false, 
			success: function(data){
				location.reload();
			},
			
		});
	});
    
    $('input.onchange').on('input keyup', function(e) {
        var form = $(this).closest('form');
        var btn = form.find('button[type=submit]');
        var id = $(this).val().replace(/[^0-9]/g, '');
        $(this).val(id);
        if(id>0){
            btn.attr('disabled', false);
        }else{
            btn.attr('disabled', 'disabled');
        }
    });
    
    $('#amount').on('input keyup', function(e) {
    	cb_change('amount');
		$('#amount').closest('form').find('button[type=submit]').prop('disabled', false);
    });
    
    // $('#amount_cashback').on('input keyup', function(e) {
        // var form = $(this).closest('form');
        // var btn = form.find('button[type=submit]');
        // var amount = $('#amount');
        // var amount_cashback = $(this).val().replace(/[^0-9]/g, '');
        // var cashback = $('#cashback').val();

        // var r = amount_cashback/cashback*100;
        // r = truncated(r);

        // amount.val(r);
        // $(this).val(amount_cashback);
    // });
    
    $('.submitdisabled').submit(function(){
        var btn = $(this).find('button[type=submit]');
        btn.attr('disabled', 'disabled');
    });

	if($("#birthdate").length){
		$("#birthdate").datetimepicker({
			format: 'DD.MM.YYYY',
			locale: $('#locale').data('locale')
		});
	}
	// инициализация startdate и enddate
	if($("#startdate").length){
		$("#startdate").datetimepicker({
			format: 'DD.MM.YYYY',
			locale: $('#locale').data('locale')
		});
	}
	if($("#enddate").length){
		$("#enddate").datetimepicker({
			useCurrent: false,
			format: 'DD.MM.YYYY',
			locale: $('#locale').data('locale')
		});
	}
	$("#startdate").on("dp.change", function (e) {
		$('#enddate').data("DateTimePicker").minDate(e.date);
	});
	$("#enddate").on("dp.change", function (e) {
		$('#startdate').data("DateTimePicker").maxDate(e.date);
	});

	$('.clicka').click(function () {
		var b = $('#datepicker-locale');
		b.show();
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('#datepicker-locale'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});

	$('.cb-list li').click(function () {
		var wrap = $(this).parent();
		wrap.find('li').removeClass('active');
		$(this).addClass('active');

		$('#cashback').val($(this).data('value'));
		cb_change('amount');
	});

	$('#copy-ref').click(function () {
		var msg = $('#copy-message');
		copyToClipboard(document.getElementById("reflnk"));
		msg.addClass('copy_ref_info_show');
		setTimeout(function(){
			msg.removeClass('copy_ref_info_show');
		}, 1500);
	});

	$('.tmevent span.z-tm').click(function () {
		var wrap = $(this).closest('.cab-iblock');
		if(wrap.hasClass('tmhide')){
			wrap.removeClass('tmhide');
		}else{
			wrap.addClass('tmhide');
		}
		//var all = $('.tmevent').not(wrap).not('.tmhide');
		//all.addClass('tmhide');
	});

	$('#profile_edit').click(function () {
		var pe = $('.profile_edit');
		var ro = $('.ro_input');
		pe.show();
		ro.hide();
		$('.showhide').show();
		$(this).hide();
		$('#profile_edit_cancel').show();
		$('#profile_save').show();
	});

	$('#profile_edit_cancel').click(function () {
		var pe = $('.profile_edit');
		var ro = $('.ro_input');
		pe.hide();
		ro.show();
		$('.showhide').hide();
		$(this).hide();
		$('#profile_edit').show();
		$('#profile_save').hide();
		$('#succes_msg').hide();
		$('#error_msg').html('').hide();
	});

	$('.fltr').click(function () {
		var key = $(this).data('key');
		var desc = $(this).data('desc');
		var type = $(this).data('type');
		var filter = 1;
		var table = $('#tableinfo');
		var l = $('#fees-loading');

		if(!type || type==''){
			if($(this).hasClass('active')){
				$('.fltr').removeClass('active');
				filter = 0;
			}else{
				$('.fltr').removeClass('active');
				$(this).addClass('active');
			}

			l.show();
			table.html('');
			$.post(lang+'/ajax/cabinet/my_fees', {key:key,desc:desc,filter:filter},function(data){
				table.html(data);
				l.hide();
			});
		}else{
			$('.fltr').removeClass('active');``
			filter = 0;
			l.show();
			table.html('');
			$.post(lang+'/ajax/cabinet/my_fees?type='+type, {filter:filter},function(data){
				table.html(data);
				l.hide();
			});
		}
	});

	$('.select_package li').click(function () {
		var wrap = $(this).closest('.modal-body');
		var lies = $(this).closest('ul').find('li');
		var input = wrap.find('input[name=package]');

		lies.removeClass('active');
		$(this).addClass('active');
		input.val($(this).data('id'));
	});

	$('#profile_save').click(function () {
		var loading = $('.pedit-loading');
		var btn = $(this);
		var cancel = $('#profile_edit_cancel');

		// собираем переменные
		var name = $('#e_name').val();
		var surname = $('#e_surname').val();
		var otchestvo = $('#e_otchestvo').val();
		var birthdate = $('#birthdate').val();
		var gender = $('input[name="gender"]:checked').val();
		var country = $('#e_country').val();
		var city = $('#e_city').val();
		var phone = $('#e_phone').val();
		var email = $('#e_email').val();
		var wallet = $('#e_wallet').val();
		var card = $('#e_card').val();
		var password = $('#e_password').val();
		// собираем переменные

		loading.show();
		btn.prop('disabled', true);
		cancel.prop('disabled', true);
		$('#succes_msg').hide();
		$('#error_msg').html('').hide();

		$.post(lang+'/ajax/profile_edit', {name:name,surname:surname,otchestvo:otchestvo,birthdate:birthdate,gender:gender,country:country,city:city,phone:phone,email:email,wallet:wallet,card:card,password:password},  function(data){
			var r = JSON.parse(data);
			console.log(r);

			loading.hide();
			if(!r.error){
				$('#succes_msg').show();
			}else{
				$('#error_msg').html(r.error).show();
				btn.prop('disabled', false);
				cancel.prop('disabled', false);
			}

		});
	});

	// костыли для фиксации body на iOS
	//$(document).on('shown.bs.modal', function () { // открытие любого модального окна Bootstrap
		//bodyFixPosition();
	//})

	//$(document).on('hidden.bs.modal', function () { // закрытие любого модального окна Bootstrap
		//bodyUnfixPosition();
	//})
    
});

function fees(elem){
	var wrap = $(elem).closest('.ht-wrap');
	if(wrap.hasClass('active')){
		wrap.find('.ht-tbl').slideUp(function () {
			wrap.removeClass('active');
		});
	}else{
		$('.ht-wrap').removeClass('active');
		$('.ht-wrap').find('.ht-tbl').slideUp();

		wrap.addClass('active');
		wrap.find('.ht-tbl').slideDown();
	}
}

function cb_change(id){
	var form = $('#'+id).closest('form');
	var btn = form.find('button[type=submit]');
	var amount_cashback = $('#amount_cashback');
	var amount = $('#'+id).val().replace(/[^0-9]/g, '');
	var cashback = $('#cashback').val();

	var r = amount/100*cashback;
	r = truncated(r);

	amount_cashback.val(r);
	$('#'+id).val(amount);
}

function change_cnt(znak, elem){
	var wrap = $(elem).closest('.modal-body');
	var count = wrap.find('.bt-count');
	var input_count = wrap.find('input[name=count]');
	var price = count.data('price');
	var total = wrap.find('.sum');
	var max = wrap.find('input[name=max]');
	if(max.length){
		max = max.val();
	}else{
		max = 999999;
	}

	if(znak=='+'){
		var new_count = parseInt(count.html())+1;
		if(new_count>max){
			new_count = new_count-1;
		}
	}else{
		var new_count = parseInt(count.html())-1;
	}

	var new_total = price*new_count;

	if(new_total>0){
		count.html(new_count);
		input_count.val(new_count);
		total.html(new_total);
	}
}

function truncated(num){
	// считаем количество знаков после запятой
	const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

	if(f(num)>2){
		return Math.round(num * 100) / 100;
	}
	return num;

}

function captcha_clean(){
    $("#data_captcha").val("").focus();
}

function addmore(el){
	var btn = $(el);
	var wrap = btn.closest('.add-more');
	var load = wrap.find('img');
	var lang = '/'+$('body').data('lang');
	
	var category = $('.stores').data('category');
	var sort = $('.stores').data('sort');
	var amount = $('.stores').data('amount');
	var table = $('#table').val();
	
	load.show();
	btn.hide();
	
	$.post(lang+'/ajax/'+table, {category:category,sort:sort,amount:amount},  function(data){
		var r = JSON.parse(data);
		console.log(r);
		
		$('.stores').append(r.result);
		$('.stores').data('amount', r.amount).attr('data-amount', r.amount);
		
		load.hide();
		if(r.more>0){
			btn.show();
		}
	});	
}

function load_operations(el){
	var btn = $(el);
	var wrap = btn.closest('div');
	var load = wrap.find('img');
	var lang = '/'+$('body').data('lang');
	
	var limit = btn.data('limit');
	
	load.show();
	btn.hide();
	
	$.post(lang+'/ajax/operations', {limit:limit},  function(data){
		var r = JSON.parse(data);
		console.log(r);
		
		$('.clients_wrap').append(r.result);
		btn.data('limit', r.limit).attr('data-limit', r.limit);
		
		load.hide();
		if(r.more>0){
			btn.show();
		}
	});	
}

function ShowHidePassword(id){
	element = $('#'+id)
	element.replaceWith(element.clone().attr('type',(element.attr('type') == 'password') ? 'text' : 'password'))
}

function backstep2(){
	$('.login-step1').addClass('none');
	$('.login-step2').removeClass('none');
}

function stdr(t, block){
	$('.b-line span').removeClass('active');
	$(t).addClass('active');
	$('#info').hide();
	$('#rec').hide();
	$('#'+block).show();
}

function copyToClipboard(elem) {
	// create hidden text element, if it doesn't already exist
	var targetId = "_hiddenCopyText_";
	var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	var origSelectionStart, origSelectionEnd;
	if (isInput) {
		// can just use the original source element for the selection and copy
		target = elem;
		origSelectionStart = elem.selectionStart;
		origSelectionEnd = elem.selectionEnd;
	} else {
		// must use a temporary form element for the selection and copy
		target = document.getElementById(targetId);
		if (!target) {
			var target = document.createElement("textarea");
			target.style.position = "absolute";
			target.style.left = "-9999px";
			target.style.top = "0";
			target.id = targetId;
			document.body.appendChild(target);
		}
		target.textContent = elem.textContent;
	}
	// select the content
	var currentFocus = document.activeElement;
	target.focus();
	target.setSelectionRange(0, target.value.length);

	// copy the selection
	var succeed;
	try {
		succeed = document.execCommand("copy");
	} catch(e) {
		succeed = false;
	}
	// restore original focus
	if (currentFocus && typeof currentFocus.focus === "function") {
		currentFocus.focus();
	}

	if (isInput) {
		// restore prior selection
		elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	} else {
		// clear temporary content
		target.textContent = "";
	}
	return succeed;
}

// костыли для фиксации прокрутки на iOS
// 1. Фиксация <body>
function bodyFixPosition() {

	setTimeout( function() {
		/* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */

		if ( !document.body.hasAttribute('data-body-scroll-fix') ) {

			let scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Получаем позицию прокрутки

			document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = '-' + scrollPosition + 'px';
			document.body.style.left = '0';
			document.body.style.width = '100%';

		}

	}, 10 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */

}

// 2. Расфиксация <body>
function bodyUnfixPosition() {

	if ( document.body.hasAttribute('data-body-scroll-fix') ) {

		let scrollPosition = document.body.getAttribute('data-body-scroll-fix'); // Получаем позицию прокрутки из атрибута

		document.body.removeAttribute('data-body-scroll-fix'); // Удаляем атрибут
		document.body.style.overflow = '';
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.width = '';

		window.scroll(0, scrollPosition); // Прокручиваем на полученное из атрибута значение

	}

}
