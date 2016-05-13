// JavaScript Document
$(document).ready(function(){
  $("#allbtn").click(function(){
	$("#product-name").animate({
	  height:'toggle'
	});
	$(this).toggleClass('on');
  });
});


$(document).ready(function(){
	$(".product-list-name li a").click(function(){
		$(".product-list-name li").each(function(){
			$("#product-name").slideUp();
			$("#allbtn").addClass('on');
		});
	});
});