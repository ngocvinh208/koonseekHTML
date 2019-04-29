jQuery(function() {
	tab();
	validate();
	formatPrice();
	$('#wellcomeModal').modal('show');
	$('.forgot-pass').on('click',function() {
		$('.modal').modal('hide');
		setTimeout(function(){ 
			$('body').addClass('modal-open');
		}, 500);
	});

	var exc = 'except';
	$('#typeaccountModal .choosenaccount-list label').on('click',function() {
		$('#typeaccountModal .choosenaccount-list label').removeClass('active');
		$(this).addClass('active');
	});
	$('body').on('click','.btn-checktype',function(){
		$('#typeaccountModal .choosenaccount-list label').each(function(){
			var name = $(this).attr('data-name');
			if($(this).hasClass('active')){
				if(name == exc){
					$('#typeaccountModal .close').click();
					$(".btn-checktype").prop("type", "button");
					$('#exceptModal').modal('show');
				}else{
					$(".btn-checktype").prop("type", "submit");
				}
			}
		});
	});

	$('.choosenload-list label').on('click',function() {
		$('.choosenload-list label').removeClass('active');
		$(this).addClass('active');
	});
	$('.trigger-register').on('click',function() {
		$('.modal').modal('hide');
		setTimeout(function(){ 
			$('body').addClass('modal-open');
		}, 500);
		$('#signupModal').modal('show');
		$('#registerTab').click();
		return false;
	});
	$('body').on('click','.comments',function() {
		$(this).parents('.the-postshow').find('.phightlight-commentslist').slideToggle();
		return false;
	});
	$(document).on('click',function(e){
		if( !$(e.target).is('.phightlight-item .phight-aciton .more ul,.top-settings ul,.more-default,.dropdown-message') && !$(e.target).is('.phightlight-item .phight-aciton .more ul *,.top-settings ul *,.more-default *,.dropdown-message *',)){
			$('.phightlight-item .phight-aciton .more,.top-settings,.more-default,.dropdown-message').removeClass('active');
		}
	});

	$('.form-share-with label').on('click',function(){
		$('.form-share-with label').removeClass('active');
		$(this).addClass('active');
	});
	

	$('.sub-design li a').on('click',function(){
		var tex = $(this).html();
		$(this).parents('.list-modal-text ul li').find('.text-design span').html(tex);
		return false;
	});

	jQuery.datetimepicker.setLocale('vi');

	$('#timePlan').datetimepicker({
		format:'d.m.Y H:i',
	});
	$('#timeDealine').datetimepicker({
		format:'d.m.Y H:i',
	});
	$('.field-datepicker').datepicker({
		dateFormat: "dd/mm/yy",
	});
	$('.scrollbar-inner').scrollbar();
	customselect();
	customchat();
	/* Menu */
	if($(window).width() > 1200) {
		$('#menu-top > ul > li > a').hover(function() {
			$('#menu-top > ul > li').removeClass('active');
			$(this).parents('li').addClass('active');
		});
		$('#menu-top > ul').mouseleave(function() {
			$('#menu-top > ul > li').removeClass('active');
		});
		$('.customer-main .sidebar-menu > ul > li > a').hover(function() {
			$('.customer-main .sidebar-menu > ul > li').removeClass('active');
			$(this).parents('li').addClass('active');
			return false;
		});
		$('.customer-main .sidebar-menu').mouseleave(function() {
			$('.customer-main .sidebar-menu > ul > li').removeClass('active');
		});
	}
	$('body').on('click','.like',function() {
		$(this).toggleClass('active');
		return false;
	});
});
function customchat(){
	var html = '<div class="chat-box-item">'+
				'<div class="box-header">'+
					'<h4><a href="personalpage-main.html"><span class="dot"></span>Customer Name 1</a></h4>'+
					'<a href="" class="close-box"><img src="images/icon/close-box.png" alt=""></a>'+
				'</div>'+
				'<div class="box-include">'+
					'<div class="box-content">'+
						'<div class="chat-item chat-item-left text-left">'+
							'<div class="avatar" style="background-image: url(images/avatar-default.png);"></div>'+
							'<div class="inner-chat">'+
								'<span>when an unknown printer took a galley of</span>'+
								'<span>when an unknown printer took a galley of</span>'+
							'</div>'+
							'<p class="timer text-center"> T6 16:22</p>'+
						'</div>'+
						'<div class="chat-item chat-item-right text-right">'+
							'<div class="inner-chat">'+
								'<div class="line-text" >'+
									'<span title="8 tháng 10 22:22">Lorem Ipsum is simply... </span>'+
								'</div>'+
								'<div class="line-text" >'+
									'<span title="1 tháng 11 00:00">Lorem Ipsum is simply... </span>'+
								'</div>'+
							'</div>'+
							'<p class="timer"><i class="fa fa-check"></i> Đã xem lúc 22:22</p>'+
						'</div>'+
					'</div>'+
					'<div class="box-action">'+
						'<input type="text" class="form-control" placeholder="Nhập tin nhắn ..." autocomplete="off">'+
						'<a href="" class="send-message">Gửi </a>'+
					'</div>'+
				'</div> '+
			'</div>';

	$('.sidebar-connect ul li a').on('click',function(){
		$('.chat-open').append(html);
		var tooltips = $(".line-text span").tooltip({
	    position: {
	        my: "left top",
	        at: "right+25 top",
	        using: function( position, feedback ) {
	          $(this).css(position);
	          $( "<div>")
		            .addClass("arrow")
		            .addClass(feedback.vertical)
		            .addClass(feedback.horizontal)
		            .appendTo(this);
	       	 	}
	  		}
		});
		return false;
	});

	$('body').on('click','.close-box',function(){
		$(this).parents('.chat-box-item').hide();
		return false;
	});

	$('.sidebar-message .list-chatting ul li a').on('click',function(){
		var href = $(this).attr('href');
		$('.sidebar-message .list-chatting ul li a').removeClass('current');
		$(this).addClass('current');
		$('.tab-pane-page').removeClass('active');
		$(href).addClass('active');
		return false;
	});

	$('.quick-connect').on('click',function(){
		$(this).hide();
		$('.sidebar-connect').addClass('active');
		$('#content').addClass('move');
		$('.konseek-support').hide();
		return false;
	});
	$('.connect-close').on('click',function(){
		$('.quick-connect').show();
		$('.sidebar-connect').removeClass('active');
		$('#content').removeClass('move');
		$('.konseek-support').show();
		return false;
	});

	$('.action-open').on('click',function(){
		var child = $(this).find('span');
		var paren = $(this).parents('.price-include');
		$(this).toggleClass('active');
		if($(child).text() == 'Thu gọn') $(child).text('Mở rộng');
		else $(child).text('Thu gọn');
		paren.find('.extend').slideToggle();
		return false;
	});
}
function customselect() {
	$('.the-select .current').on('click',function() {
		if($(this).parents('.the-select').find('.parent-custom').hasClass('active')) {
			$('.parent-custom').removeClass('active');
		} else {
			$('.parent-custom').removeClass('active');
			$(this).parents('.the-select').find('.parent-custom').toggleClass('active');
		}
		return false;
	});

	$('.customer-main .sidebar-menu > ul > li > a').on('click',function() {
		$(this).parents('li').find('.submenu').slideToggle();
		$(this).find('i').toggleClass('fa-caret-down fa-caret-right');
		return false;
	});
	
	$('.sub-child li a.click-child').on('click',function(){
		$(this).toggleClass('current');
		$(this).parents('.sub-child li').find('.sub2-menu').slideToggle();
		return false;
	});

	$("body").click(function(e){
		if(e.target.className !== "parent-custom") {
			$(".parent-custom").removeClass('active');
		}
	});
	$('.the-select .parent-custom li a').on('click',function(){
		var tex = $(this).html();
		$(this).parents('.the-select').find('.current span').html(tex);
		$('.the-select .parent-custom').removeClass('active');
		return false;
	});
	$('.phightlight-item .phight-aciton .more .current').on('click',function() {
		$(this).parents('.phightlight-item .phight-aciton .more').toggleClass('active');
		return false;
	});
	$('.more-default .current').on('click',function() {
		$(this).parents('.more-default').toggleClass('active');
		return false;
	});
	$('.header-right .top-settings .action').on('click',function(){
		$('.header-right .top-settings').toggleClass('active');
		$('.dropdown-message').removeClass('active');
		$('.box-notification').removeClass('active');
		return false;
	});
	
	$('.show-message').on('click',function(){
		$('.dropdown-message').toggleClass('active');
		$('.header-right .top-settings').removeClass('active');
		$('.box-notification').removeClass('active');
		return false;
	});
	
	$('.top-notify a').on('click',function(){
		$('.box-notification').toggleClass('active');
		$('.dropdown-message').removeClass('active');
		$('.header-right .top-settings').removeClass('active');
		return false;
	});
	$('.dropdown-design').on('click',function(){
		$('.show-dropdown').slideToggle();
		return false;
	});
	$('.show-dropdown li a').on('click',function(){
		var tex = $(this).html();
		$(this).parents('.list-modal-design').find('.dropdown-design span').html(tex);
		$('.show-dropdown').hide();
		return false;
	});
	// Select multi modal	
	$('body').on('click','.select-custom-multi > .current',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).parents('.select-custom-multi').find('.parent-multi').removeClass('active');
		}else{
			$('.select-custom-multi .current').removeClass('active');
			$(this).addClass('active');
			$('.select-custom-multi .parent-multi').removeClass('active');
			$(this).parents('.select-custom-multi').find('.parent-multi').addClass('active');
		}
		return false;
	});
	$('.parent-multi li a').on('click',function(){
		$(this).addClass('check');
		$(this).parents('.select-custom-multi').find('.current p').hide();
		var tex = $(this).html();
		$(this).attr('attr-name',tex);
		exist = $('.select-custom-multi .current span').filter(function() {
		  	return $(this).text() == tex
		});
		if (!exist.length) $(this).parents('.select-custom-multi').find('.current').append('<span>'+tex+'</span>');
		return false;
	});

	$('body').on('click', '.select-custom-multi .current span', function(){
		$(this).remove();
		var tcompare = $(this).html();
		$('.parent-multi li a').each(function(){
			var tcompare2 = $(this).attr('attr-name');
			if (tcompare == tcompare2) {
				$(this).removeClass('check');
			}
		});
		$('.select-custom-multi .current').each(function(){
			var count = $(this).find('span').length;
			if(count == 0){
				$(this).find('p').show();
			}
		});
		return false;
	});

	$('.input-group-custom').on('change keyup keydown paste cut', 'textarea', function (){
	    $(this).height(0).height(this.scrollHeight);
	}).find('textarea').change();

	$('.provide-item ul li a').on('click',function(){
		$(this).toggleClass('check');
		var len = $('.provide-item ul li a.check').length;
		if(len > 7){
			alert('Chỉ được chọn tối đa 7 sản phẩm hay dịch vụ');
			$(this).removeClass('check');
		}
		return false;
	});
}
function tab() {
	$('.top-user a').click(function() {
		var href = $(this).attr('href');
		$(href).click();
	});
	$('body').on('click','.tab-nav a',function() {
		var paren = $(this).parents('.the-tab');
		paren.find('.tab-nav a').removeClass('active');
		paren.find('.tab-content').removeClass('active');
		var href = $(this).attr('href');
		$(this).addClass('active');
		$(href).addClass('active');
		return false;
	});
}
function formatPrice(){
	$('.format-price').keyup(function(event) {
		if(event.which >= 37 && event.which <= 40){
			event.preventDefault();
		}
		$(this).val(function(index, value) {
			return value
				.replace(/\D/g, '')
				.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
			;
		});
	});
}
function validate() {
	/* Login */
	$("#loginForm").validate({
		rules: {
			login_user: {
			  required: true
			},
			login_password: {
				required: true,
			}
		},
		messages: {
			login_user: {
				required: "Vui lòng nhập tên tài khoản hoặc email"
			},
			login_password: {
				required: "Vui lòng nhập mật khẩu",
			}
		}
	});
	/* Register */
	jQuery.validator.addMethod("noSpace", function(value, element) { 
	  return value.indexOf(" ") < 0 && value != ""; 
	}, "No space please and don't leave it empty");
	jQuery.validator.addMethod("username", function(value, element) {
	  return this.optional(element) || /^[a-z 0-9]+$/i.test(value);
	}, "Letters only please"); 
	$("#loginRegister").validate({
		rules: {
			register_name: {
				required: true,
			},
			register_username: {
				required: true,
				noSpace: true,
				username: true
			},
			register_phone: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 11
			},
			register_email: {
				required: true,
				email: true
			},
			register_password: {
				required: true,
				minlength: 8
			},
			register_repassword: {
				required: true,
				equalTo: "#registerPasword"
			}
		},
		messages: {
			register_name: {
				required: 'Vui lòng nhập họ tên / tên doanh nghiệp',
			},
			register_username: {
				required: 'Vui lòng nhập tên tài khoản',
				noSpace: 'Tên tài khoản chưa hợp lệ',
				username: 'Tên tài khoản chưa hợp lệ'
			},
			register_phone: {
				required: 'Vui lòng nhập số điện thoại',
				number: 'Số điện thoại chưa hợp lệ',
				minlength: 'Số điện thoại chưa hợp lệ',
				maxlength: 'Số điện thoại chưa hợp lệ',
			},
			register_email: {
				required: 'Vui lòng nhập địa chỉ email',
				email: 'Email chưa hợp lệ',
			},
			register_password: {
				required: 'Vui lòng nhập mật khẩu',
				minlength: 'Mật khẩu có tối thiểu 8 ký tự',
			},
			register_repassword: {
				required: 'Vui lòng nhập lại mật khẩu',
				equalTo: 'Mật khẩu nhắc lại không đúng',
			}
		},
		submitHandler: function() {
			$('.close').click();
			$('#typeaccountModal').modal('show')
		}
	});
	/* public Post */
	var pubPostValid = $("#publicPost");
	pubPostValid.validate({
		rules: {
			title_post: {
			  required: true
			},
			select_province_post: {
			  required: true
			},
			select_district_post: {
			  required: true
			},
		},
		messages: {
			title_post: {
			  required: 'Vui lòng nhập tiêu đề'
			},
			select_district_post: {
				required: 'Vui lòng chọn Quận/ huyện',
			},
			select_province_post: {
				required: 'Vui lòng chọn Tỉnh/ thành',
			}
		}
	});
	$('.click-continue-public').on('click',function(){
		if ((!pubPostValid.valid())) {
		} else {
			var href = $(this).attr('attr-id');
			$(href).click();
			$('#mpostPublic').rules( "add", {
			  required: true,
			  messages: {
				required: "Vui lòng nhập nội dung bài viết",
			  }
			});
		}
	});
	$('.btn-finish').on('click',function(){
		pubPostValid.valid();
	});
	/* edit Post */
	var editPostValid = $("#editPost");
	editPostValid.validate({
		rules: {
			title_post: {
			  required: true
			},
			select_province_postedit: {
			  required: true
			},
			select_district_postedit: {
			  required: true
			},
		},
		messages: {
			title_post: {
			  required: 'Vui lòng nhập tiêu đề'
			},
			select_district_postedit: {
				required: 'Vui lòng chọn Quận/ huyện',
			},
			select_province_postedit: {
				required: 'Vui lòng chọn Tỉnh/ thành',
			}
		}
	});
	$('.click-continue-edit').on('click',function(){
		if ((!editPostValid.valid())) {
		} else {
			var href = $(this).attr('attr-id');
			$(href).click();
			$('#mposteditPublic').rules( "add", {
			  required: true,
			  messages: {
				required: "Vui lòng nhập nội dung bài viết",
			  }
			});
		}
	});
	$('.btn-finish-edit').on('click',function(){
		editPostValid.valid();
	});
	/* Request Quote */
	$("#requestQuote").validate({
		rules: {
			request_title: {
			  required: true
			},
			mdes_request: {
			  required: true
			},
			from_price: {
			  required: true
			},
			to_price: {
			  required: true
			},
			select_provice: {
			  required: true
			},
			select_district: {
			  required: true
			},
			request_deadline: {
				required: true
			},
			request_street:{
				required: true
			},
			select_house:{
				required: true
			},
			acreage:{
				required: true
			},
			time_plan:{
				required: true,
			},
			email_quote: {
				required: true,
				email: true
			},
			phone_quote:{
				required: true,
				number: true,
				minlength: 10,
				maxlength: 11
			}
		},
		messages: {
			request_title: {
			  required: 'Vui lòng nhập tiêu đề'
			},
			mdes_request: {
				required: 'Vui lòng nhập mô tả chi tiết',
			},
			from_price: {
				required: 'Vui lòng nhập giá',
			},
			to_price: {
				required: 'Vui lòng nhập giá',
			},
			select_district: {
				required: 'Vui lòng chọn Quận/ huyện',
			},
			select_provice: {
				required: 'Vui lòng chọn Tỉnh/ thành',
			},
			request_street: {
				required: 'Vui lòng nhập đầy đủ Đường/Phố, Phường/Xã',
			},
			request_deadline: {
				required: 'Vui lòng nhập hạn cuối nhận báo giá',
			},
			request_street: {
				required: 'Vui lòng nhập Đường Phố, Phường/Xã',
			},
			select_house:{
				required: 'Vui lòng chọn loại nhà'
			},
			acreage:{
				required: 'Vui lòng nhập diện tích thi công'
			},
			time_plan:{
				required: 'Vui lòng nhập thời gian dự định bắt đầu'
			},
			email_quote:{
				required: 'Vui lòng nhập địa chỉ email',
				email: 'Địa chỉ email không hợp lệ',
			},
			phone_quote:{
				required: 'Vui lòng nhập số điện thoại',
				number: 'Số điện thoại chưa hợp lệ',
				minlength: 'Số điện thoại chưa hợp lệ',
				maxlength: 'Số điện thoại chưa hợp lệ',
			}
		}
	});
	/* publicPost */
	/* forgotPassword */
	$("#forgotPasswordForm").validate({
		rules: {
			forgot_email: {
				required: true,
				email: true
			}
		},
		messages: {
			forgot_email: {
				required: 'Vui lòng nhập địa chỉ email',
				email: 'Địa chỉ email không hợp lệ',
			}
		}
	});
	/* Request quote Modal*/
	$("#requestquoteModal").validate({
		rules: {
			forgot_email: {
				required: true,
				email: true
			}
		},
		messages: {
			forgot_email: {
				required: 'Vui lòng nhập địa chỉ email',
				email: 'Email chưa hợp lệ',
			}
		}
	});
	
	$("#infoAccount").validate({
		rules: {
			register_username: {
				required: true,
				noSpace: true,
				username: true
			},
			register_phone: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 11
			},
			register_email: {
				required: true,
				email: true
			},
			register_passwordold: {
				required: true,
				minlength: 8
			},
			register_password: {
				required: true,
				minlength: 8
			},
			register_repassword: {
				required: true,
				equalTo: "#registerPasword"
			}
		},
		messages: {
			register_username: {
				required: 'Vui lòng nhập tên tài khoản',
				noSpace: 'Tên tài khoản chưa hợp lệ',
				username: 'Tên tài khoản chưa hợp lệ'
			},
			register_phone: {
				required: 'Vui lòng nhập số điện thoại',
				number: 'Số điện thoại chưa hợp lệ',
				minlength: 'Số điện thoại chưa hợp lệ',
				maxlength: 'Số điện thoại chưa hợp lệ',
			},
			register_email: {
				required: 'Vui lòng nhập địa chỉ email',
				email: 'Email chưa hợp lệ',
			},
			register_passwordold: {
				required: 'Vui lòng nhập mật khẩu cũ',
				minlength: 'Mật khẩu có tối thiểu 8 ký tự',
				equalTo: 'Mật cũ không đúng',
			},
			register_password: {
				required: 'Vui lòng nhập mật khẩu',
				minlength: 'Mật khẩu có tối thiểu 8 ký tự',
			},
			register_repassword: {
				required: 'Vui lòng nhập lại mật khẩu',
				equalTo: 'Mật khẩu nhắc lại không đúng',
			}
		},
	});
}

// $(window).scroll(function(){
// 	// height = $('#header').outerHeight();
// 	if($(window).scrollTop() > 90){
// 		$('.sidebar-connect').addClass('active');
// 	}else{
// 		$('.sidebar-connect').removeClass('active');
// 	}
// });
$(window).bind('scroll', function(e){
	var fheight = $('#footer').outerHeight();
	if($(window).scrollTop() + window.innerHeight > $('#footer').offset().top){
	   $('.item-fixed').css('bottom',fheight);
	}
	else{
	   $('.item-fixed').css('bottom','0');
	}
});