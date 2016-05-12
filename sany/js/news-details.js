// JavaScript Document
<!--新闻-->
$(document).ready(function(){
	$(".sany-jhs-btn").click(function(){
	  $(".sany-jhs").hide();
	  $(".sany-jhs1").slideDown();
	});
});
$(document).ready(function(){
	$(".sany-jhs-btn1").click(function(){
	  $(".sany-jhs").slideDown();
	  $(".sany-jhs1").slideUp();
	});
});

<!--点击回到新闻位置-->
jQuery(document).ready(function($) {
	$(".scroll").click(function(event){	
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},500);
	});
});