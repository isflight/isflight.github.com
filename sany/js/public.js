// JavaScript Document

/*--返回顶部--*/
$(document).ready(function() {
    $("#back-to-top").hide();
    $(function() {
    	$(window).scroll(function() {
        	if ($(window).scrollTop() > 300) {
            	$("#back-to-top").fadeIn(1000);
            } else {
            	$("#back-to-top").fadeOut(1000);
        	}
    	});
    	$("#back-to-top").click(function() {
        	$('body,html').animate({
            	scrollTop: 0
    		},1000);
        	return false;
      	});
	});
});