//版权 北京智能社©, 保留所有权利

// $.fn.tab=function (){};

// 批量设置插件
$.fn.extend({
	tab:function (){
		this.each(function (){
			var obj=$(this);
			var aBtn=obj.find('.j-btn');
			var aCont=obj.find('.j-cont');
			
			aBtn.each(function (index){
				aBtn.eq(index).click(function (){
					aBtn.removeClass('active');
					aCont.removeClass('active');
					
					$(this).addClass('active');
					aCont.eq(index).addClass('active');
				});
			});
			
			/*
			index() -> 麻烦
			aBtn.click(function (){
				aBtn.removeClass('active');
				aCont.removeClass('active');
				
				$(this).addClass('active');
				var index=$(this).index();
				aCont.eq(index).addClass('active');
			});
			*/
		});
	}
});















