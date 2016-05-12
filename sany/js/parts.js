// JavaScript Document
<!--特点介绍-->
$(document).ready(function(){
	$(".policy-service-btn").click(function(){
	  $(".policy-service-d1").hide();
	  $(".policy-service-d2").slideDown();
	  $(".policy-service-span").hide();
	});
});
$(document).ready(function(){
	$(".policy-service-btn1").click(function(){
	  $(".policy-service-d1").show();
	  $(".policy-service-d2").slideUp();
	});
});

<!--点击回到特点介绍位置-->
jQuery(document).ready(function($) {
	$(".scroll").click(function(event){	
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},500);
	});
});

<!--技术参数-->
$(document).ready(function(){
	$(".jscanshu-btn").click(function(){
	  $(".policy-jscanshu1").hide();
	  $(".policy-jscanshu2").slideDown();
	  $(".jscanshu-span").hide();
	});
});
$(document).ready(function(){
	$(".jscanshu-btn1").click(function(){
	  $(".policy-jscanshu1").show();
	  $(".policy-jscanshu2").slideUp();
	});
});

<!--点击回到技术参数位置-->
jQuery(document).ready(function($) {
	$(".scroll-1").click(function(event){	
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},500);
	});
});


/*--技术参数--*/
$(document).ready(function(){
	$(".jscanshu-btn-xq1").click(function(){
	  $(".policy-xq1").hide();
	  $(".policy-xq2").slideDown();
	  $(".jscanshu-span").hide();
	});
});
$(document).ready(function(){
	$(".jscanshu-btn-xq2").click(function(){
	  $(".policy-xq1").show();
	  $(".policy-xq2").slideUp();
	});
});

/*--点击回到技术参数位置--*/
jQuery(document).ready(function($) {
	$(".scroll-2").click(function(event){	
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},500);
	});
});







