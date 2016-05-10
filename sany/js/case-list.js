// JavaScript Document
$(document).ready(function(){
  $("#allbtn").click(function(){
	$("#product-name").animate({
	  height:'toggle'
	});
	$(this).toggleClass('on');
  });
});