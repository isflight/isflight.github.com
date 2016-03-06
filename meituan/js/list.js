// JavaScript Document
meituan.list={};

/*全部分类*/
meituan.list.LeftNav=function (){
	var oLeftNav=document.getElementById('left-nav');
	var oSublist=document.getElementById('sublist');
	var aLiSublist=oSublist.children;
	var timer=null;
	
	
	oSublist.onmouseover=oLeftNav.onmousemove=function(){
		clearTimeout(timer);
		timer=setInterval(function(){
			oSublist.style.display='block';
			oSublist.style.position="absolute";
			oSublist.style.zIndex=10;
		},100);
	};
	
	
	oSublist.onmouseout=oLeftNav.onmouseout=function(){
		clearTimeout(timer);
		timer=setInterval(function(){
			oSublist.style.display='none';
		},100);
	};
	
	
	for(var i=0;i<aLiSublist.length;i++)
	{
		(function(index){
			var timer=null;
			aLiSublist[i].onmouseover=function(ev){
				var oUl1=this.getElementsByTagName('ul')[0];
				clearTimeout(timer);
				if(oUl1)
				{	var _this=this;
					timer=setInterval(function(){
						_this.className='show';
						oUl1.className='show-sublist';
					},100)
				}
				else
				{
					var _this=this;
					_this.className='show1';
				}
			
			};
			aLiSublist[i].onmouseout=function(){
				var oUl1=this.getElementsByTagName('ul')[0];
				clearTimeout(timer);
				if(oUl1)
				{	var _this=this;
					timer=setInterval(function(){
						oUl1.className='con-nav-sublist';
						_this.className='';
					},100)
				}
				else
				{
					var _this=this;
					_this.className='';
				}
			};
		})(i);
	}
	
	
	
};


/*底部选项卡*/
meituan.list.FooterAdd=function (){
	var FooterAdd=document.getElementById('footer-nav-add');
	var aLiFooterAdd=FooterAdd.getElementsByTagName('li');
	var FooterSubAdd=document.getElementById('footer-nav-subadd');
	var aLiFooterSubAdd=FooterSubAdd.getElementsByTagName('ul');

	for(var i=0;i<aLiFooterAdd.length;i++)
	{
			aLiFooterAdd[i].index=i; 
			aLiFooterAdd[i].onclick=function(){
				
				for(var i=0;i<aLiFooterAdd.length;i++)
				{
					aLiFooterAdd[i].className='';
					aLiFooterSubAdd[i].className='';
				};
				
				this.className='active';
				aLiFooterSubAdd[this.index].className='active footer-classification';
			};
	
	}
};


meituan.list.ConLeft=function (){
	var oUlConLeft=document.getElementById('con-left');
	var n=0;
	addEvent(window,'scroll',function (){
		var Height=document.body.scrollHeight;
		var clientHeight=document.documentElement.clientHeight;
	 	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		
		if (Height <= clientHeight+scrollTop+100)
		{
				createLi();
		}
		
	});
		
		function createLi()
		{
			n++;
			if(n>=5)
			{
				return;
			}
			
			for(var i=0;i<6;i++)
			{
				var aLi=document.createElement('li');
				aLi.setAttribute('data-id',i+6+(n-1)*6);
				aLi.className='list-con-left-li';
				
				aLi.innerHTML='<i class="location1"></i>\
					<i class="location2"></i>\
					<img src="images/pic-27.jpg" />\
					<h3>【7店通用】松子日本料理</h3>\
					<b class="clearfix">\
						<span class="favorable">￥58元</span>\
						<em class="reduce">立减5</em>\
						<em class="original">门店价99</em>\
					</b>\
					<div class="list-con-left-star clearfix">\
						<i class="print1">已售<span class="print2">9934</span></i>\
						<i class="print">9934评价</i>\
						<img src="images/star-1.jpg"/>\
					</div>';
				oUlConLeft.appendChild(aLi);
			}
		}
		
	var oUlBrowse=document.getElementById('browse-sth');
	var aLiConLeft=oUlConLeft.children;
	var arr=[];
	for(var i=0;i<aLiConLeft.length;i++)
	{	
		aLiConLeft[i].setAttribute('data-id',i);
		
		aLiConLeft[i].onclick=function(){
			var id=this.getAttribute('data-id');
			var aSon=oUlBrowse.children;
			
			var oImg=this.getElementsByTagName('img')[0];
			var oH3=this.getElementsByTagName('h3')[0];
			var oEm=this.getElementsByTagName('em')[1];
			var oSpan=this.getElementsByTagName('span')[0];
			
			if (aSon.length == 0)
			{
				var oLi=document.createElement('li');
				oLi.innerHTML='<img src="'+oImg.src+'" />\
							<div class="browse-p">\
								<p>'+oH3.innerHTML+'</p>\
								<span class="print3">'+oSpan.innerHTML+'</span>\
								<em class="original2">'+oEm.innerHTML+'</em>\
							</div>';
				oUlBrowse.appendChild(oLi);
				oLi.className='clearfix browse-sth-li';
				oLi.setAttribute('data-id',id);
				arr.push(id);
			}
			else
			{
				if (! findInArr(id ,arr))
				{
					var oLi=document.createElement('li');
					oLi.innerHTML='<img src="'+oImg.src+'" />\
								<div class="browse-p">\
									<p>'+oH3.innerHTML+'</p>\
									<span class="print3">'+oSpan.innerHTML+'</span>\
									<em class="original2">'+oEm.innerHTML+'</em>\
								</div>';
					oUlBrowse.appendChild(oLi);
					oLi.className='clearfix browse-sth-li';
					oLi.setAttribute('data-id',id);
					arr.push(id);
				}
			}
	};
	

	
	
	function findInArr(n, arr)
	{
		for (var i=0; i<arr.length; i++)
		{
			if (arr[i] == n)
			{
				return true;
			}
		}
		
		return false;
	}
	
	};
		
};

meituan.list.Area=function (){
	var oBtnArea=document.getElementById('area-nav-class');
	var oUlArea=document.getElementById('area-nav-class-ul');
	oBtnArea.onmouseover=function(){
		oUlArea.style.display='block';
		
	};
	oBtnArea.onmouseout=function(){
		oUlArea.style.display='none';
		
	};
};


meituan.list.Browse=function(){
	var oBrowse=document.getElementById('browse');
	var oEmpty=document.getElementById('empty');
	var oUlBrowse=document.getElementById('browse-sth');
	var top=getPos(oBrowse)	.top;
	addEvent(window,'scroll',function (){
		var Height=document.body.scrollHeight;
	 	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		
		if (top <=scrollTop+100)
		{
			oBrowse.style.position='fixed';
			oBrowse.style.top=-20+'px';
			oBrowse.style.right=182+'px';
			oBrowse.style.zIndex=1;
		}
		else
		{
			oBrowse.style.position='';
		}
	});
	var bFlag=false;
	oEmpty.onclick=function(){
		if(bFlag)
		{
			return;
		}
		bFlag=true;
		if(!(oUlBrowse.length==0))
		{
			oBrowse.removeChild(oUlBrowse);
			
		}
	};

};


meituan.list.AreaDiv=function(){
	var oBtnArea=document.getElementById('area-nav-class');
	var oUlArea=document.getElementById('area-class');
	var aLiArea=oUlArea.getElementsByTagName('li');
	var oBtnA=document.getElementById('area-nav');
	
	for(var i=0;i<aLiArea.length;i++)
	{	
		aLiArea[i].onclick=function(){
			var aA=this.children[0];
			oBtnA.innerHTML=aA.innerHTML;
		};
	}
	
};


function getPos(obj)
		{
			var top=0;
			
			while (obj)
			{
				top+=obj.offsetTop;
				
				obj=obj.offsetParent;
			}
			
			return {top:top};
		};
	

