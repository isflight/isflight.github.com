// JavaScript Document
/*--新机--*/
$(document).ready(function(){
	$("#btn1").click(function(){
	  $("#product-ul-2").slideUp();
	  $("#product-ul-3").slideUp();
	  $("#product-ul-1").animate({
		height:"toggle"
	  });
	  $("#machine").toggleClass('on1');
	});
});

/*--配件--*/
$(document).ready(function(){
	$("#btn2").click(function(){
	  $("#product-ul-1").slideUp();
	  $("#product-ul-3").slideUp();
	  $("#product-ul-2").animate({
		height:"toggle"
	  });
	  $("#parts").toggleClass('on2');
	});
});

/*--二手--*/
$(document).ready(function(){
	$("#btn3").click(function(){
	  $("#product-ul-1").slideUp();
	  $("#product-ul-2").slideUp();
	  $("#product-ul-3").animate({
		height:"toggle"
	  });
	  $("#ershou").toggleClass('on3');
	});
});
