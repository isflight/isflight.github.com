// JavaScript Document

meituan.index={};
/*跨年*/
meituan.index.yearToblock=function (){
	var oYearBlock=document.getElementById('footerfixed-left');
	var oYearClose=document.getElementById('footerfixed-close');
	var oYearPan=document.getElementById('footerfixed-close-i');
	oYearBlock.onclick=function(){
		move(oYearBlock,{width:0});
		move(oYearClose,{width:1280},{duration:1000});
	};
	oYearPan.onclick=function(){
		move(oYearClose,{width:0},{complete:function(){
			move(oYearBlock,{width:115},{duration:1000});
		}});
	};
};
/*头部图片*/
meituan.index.picToblock=function (){
	var oPicBlock=document.getElementById('header-middle-btn');
	var oPicClose=document.getElementById('header-middle-close');
	oPicBlock.onclick=function(){
		this.style.display='none';
		oPicClose.style.display='none';
	};
	
};
/*微信*/

/*meituan.index.dropdownToblock=function (){
	var oDropdownBlock=document.getElementById('header-top-left-four-block');
	var oDropdownClose=document.getElementById('dropdown-menu-block');
	oDropdownBlock.onmouseover=function(){
		this.className='active header-top-left-four-block header-top-left-four';
		oDropdownClose.className='dropdown-menu active';
	};
	oDropdownBlock.onmouseout=function(){
		this.className=' header-top-left-four-block header-top-left-four';
		oDropdownClose.className='dropdown-menu';
	};
	
};
*/
/*顶部导航*/
/*meituan.index.NavToblock=function (){
	var oUlTopBlock=document.getElementById('header-top-right');
	var aLiTopBlock=oUlTopBlock.children;
	for(var i=0;i<aLiTopBlock.length;i++)
	{
		(function(index){
			var timer=null;
			aLiTopBlock[i].onmouseover=function(){
				var oUl1=this.getElementsByTagName('ul')[0];
				clearTimeout(timer);
				if(oUl1)
				{	var _this=this;
					timer=setInterval(function(){
						aLiTopBlock[index].className='active header-top-right-one';
						oUl1.style.display='block';
					},100)
					
				}
			
			};
			aLiTopBlock[i].onmouseout=function(){
				var oUl1=this.getElementsByTagName('ul')[0];
				clearTimeout(timer);
				if(oUl1)
				{	var _this=this;
					timer=setInterval(function(){
						oUl1.style.display='none';
						_this.className='header-top-right-one';
					},100)
					
				}
			};
		})(i);
			
	}
};*/

/*搜索框*/
/*meituan.index.Searchmiddle=function (){
	var oSearchmiddle=document.getElementById('span1');
	var oSearch=document.getElementById('search');
	
	oSearchmiddle.onclick=function (){
		oSearchmiddle.style.display='none';
		oSearch.focus();
	};
	
	oSearch.onblur=function (){
		if (oSearch.value.length == 0)
		{
			oSearchmiddle.style.display='block';
		}
	};
	
	oSearch.onfocus=function (){
		oSearchmiddle.style.display='none';
	};
	
};
*/

/*侧边栏*/
meituan.index.Sublist=function (){
	var oSublist=document.getElementById('sublist');
	var aLiSublist=oSublist.children;
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


/*中间选项卡*/
meituan.index.Roll=function (){
	var oRoll=document.getElementById('roll');
	var oPrevRoll=document.getElementById('rollprve');
	var oNextRoll=document.getElementById('rollnext');
	var aUlRoll=oRoll.getElementsByTagName('ul');
	var timer=null;
	var n=0;
	
	oRoll.onmouseover=function(){
		move(oPrevRoll,{opacity:1},{duration:500});
		move(oNextRoll,{opacity:1},{duration:500});
		clearInterval(timer);
	};
	oRoll.onmouseout=function(){
		timer=setInterval(next,2000);
		move(oPrevRoll,{opacity:0},{duration:500});
		move(oNextRoll,{opacity:0},{duration:500});
	};
	
	oPrevRoll.onclick=function(){
		next();
	};
	
	oNextRoll.onclick=function(){
		for(var i=0;i<aUlRoll.length;i++)
		{
			aUlRoll[i].className='con-nav-right-middle-ul';
		}
		n--;
		if(n ==-1)
		{
			n=3;
		}
		aUlRoll[n].className='active con-nav-right-middle-ul';
	};
	
	
	var timer=setInterval(function(){
		next();
	},2000)
	
	function next()
	{
		for(var i=0;i<aUlRoll.length;i++)
		{
			aUlRoll[i].className='con-nav-right-middle-ul';
		}
		n++;
		if(n==4)
		{
			n=0;
		}
		aUlRoll[n].className='active con-nav-right-middle-ul';
	}
	
};

/*倒计时*/
meituan.index.computeTime=function(){
	var oCountdown=document.getElementById('countdown');
	var aCountdownImg=oCountdown.getElementsByTagName('img');
	
	oTarget();
	setInterval(oTarget,1000);
	function oTarget(){
		var oTarget = new Date();
		var nowTime = new Date();
			oTarget.setFullYear(2016);
			oTarget.setMonth(3);
			oTarget.setDate(26);
			oTarget.setHours(0,0,0);
			var total=oTarget.getTime()-nowTime.getTime();
			total=parseInt(total/1000);
			var d=parseInt(total/86400);
			total%=86400;
			var h=parseInt(total/3600);
			total%=3600;
			var m=parseInt(total/60);
			total%=60;
			var s=total;
			var str=toDub(h)+toDub(m)+toDub(s);
			
			for(var i=0;i<aCountdownImg.length;i++)
			{
				aCountdownImg[i].src='images/picc-'+str.charAt(i)+'.jpg';
			}
	}	
		
		function toDub(n)
		{
			return n<10 ? '0'+n : ''+n ;
		}
};



/*吸顶*/	
meituan.index.ceiling=function(top){
	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
	var oCeiling=document.getElementById('ceiling');
	var oCeilingUl=document.getElementById('ceiling-ul');
	var aCeilingLi=oCeilingUl.getElementsByTagName('li');
	
	for(var i=0;i<aCeilingLi.length;i++)
	{
		addEvent(aCeilingLi[i],'mouseover',function(){
		for(var i=0;i<aCeilingLi.length;i++)
		{	
			aCeilingLi[i].style.background='#fff';
		}
			this.style.background='#31d2c2';
			
		})
		
	}
	
		if (top <scrollTop)
		{
			oCeiling.className='ceil';
		}
		else
		{
			oCeiling.className='ceiling';
		}
		
		var oFineFd=document.getElementById('finefd');
		var oFineFood=document.getElementById('finefood');
		
		
		
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
}

		
function addEvent(obj,sEv,fn)
{
	if(obj.addEventListener)
	{
		obj.addEventListener(sEv,fn,false)
	}
	else
	{
		obj.attachEvent('on'+sEv,fn)
	}
}
	
	



/*图片延迟加载*/
meituan.index.Defer=function (){
	var aImgDefer=document.getElementsByTagName('img');
	var aImgDeferScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var aImgDeferClientHeight=document.documentElement.clientHeight;
	var clientBottom=aImgDeferScrollTop+aImgDeferClientHeight;
	
		for(var i=0;i<aImgDefer.length;i++)
		{	
			var top=getPos(aImgDefer[i]).top;
			if(top <= clientBottom)
			{
				var _src=aImgDefer[i].getAttribute('_src');
				
				aImgDefer[i].src=_src;
			}
		}
	function getPos(obj)
	{
		var top=0;
		
		while (obj)
		{
			top+=obj.offsetTop;
			
			obj=obj.offsetParent;
		}
		
		return {top:top};
	}
};
/*底部选项卡*/

meituan.index.FooterAdd=function (){
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

/*无缝滚动*/
meituan.index.Seamless=function(){
	var oSeamless=document.getElementById('con-shopping');
	var oPrevSeamless=document.getElementById('shoppingprev');
	var oNextSeamless=document.getElementById('shoppingnext');
	var aUlSeamless=oSeamless.getElementsByTagName('ul');
	oSeamless.appendChild(aUlSeamless[0].cloneNode(true));
	//oSeamless.appendChild(aUlSeamless[1].cloneNode(true));
	oSeamless.style.width=aUlSeamless[0].offsetWidth*aUlSeamless.length+'px';
 	var w=oSeamless.offsetWidth/3;
	//var w=oSeamless.offsetWidth/2;
	var left=0;
	var timer=null;
	var n=0;
	oPrevSeamless.onclick=function(){
		n++;
		if(n>=3)
		{
			oSeamless.style.left=0;
			n=1;
		}
		move(oSeamless,{left:-n*w},{duration:1000});
	/*
		move(oSeamless,{left:-w},{duration:800,complete:function(){
				var cloneEle = aUlSeamless[0].cloneNode(true);
				oSeamless.appendChild(cloneEle);
				oSeamless.removeChild(aUlSeamless[0]);
				oSeamless.style.left = 0;
			}})*/
		
	/*timer=setInterval(function(){
			left-=2;
			if(left<0)
			{
				oSeamless.style.left=left%w+'px';
			}
			else
			{
				oSeamless.style.left=left%w-w+'px';
			}
		},30);*/
	
	};
	
	
	oNextSeamless.onclick=function(){
		n--;
		if(n<0)
		{
			oSeamless.style.left=-2344+'px';
			n=1;
		}
		move(oSeamless,{left:-n*w},{duration:1000});
		/*var cloneEle1 = aUlSeamless[1].cloneNode(true);
		oSeamless.insertBefore(cloneEle1,aUlSeamless[0]);
		//oSeamless.style.width=aUlSeamless[0].offsetWidth*aUlSeamless.length+'px';
		oSeamless.style.left = -w + 'px';
			
		move(oSeamless,{left:0},{duration:800,complete:function(){
				oSeamless.removeChild(aUlSeamless[2]);
				//oSeamless.style.left = 0 + 'px';
				
			}})*/
		
		/*timer=setInterval(function(){
			left+=2;
			
			if(left<0)
			{
				oSeamless.style.left=left%w+'px';
			}
			else
			{
				oSeamless.style.left=left%w-w+'px';
			}
		},30);*/
		
	};

}
/*回到顶部*/
meituan.index.Totop=function(timer){
	var oTotopUl=document.getElementById('totop-ul');
	var oTotopLi=oTotopUl.children;
	var oTotop=document.getElementById('fixbar-item-top');
	//var oSpan=document.getElementById('fixbar-item-top-s');
	
	for(var i=0;i<oTotopLi.length;i++)
	{
			addEvent(oTotopLi[i],'mouseover',function(){
				var oSpan=this.children[1];
				oSpan.style.display='block';
			});
		
		
			addEvent(oTotopLi[i],'mouseout',function(){
				var oSpan=this.children[1];
				oSpan.style.display='none';
			});
	
	}
	var userScroll=false;
	
	addEvent(window,'scroll',function(){
		if (userScroll)
		{
			clearInterval(timer);
		}
		userScroll=true;
	});
	
	addEvent(oTotop,'click',function(){
		var start=document.documentElement.scrollTop|| document.body.scrollTop;
		var dis=0-start;
	    var count=Math.floor(1000/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function (){
			n++;
			userScroll=false;
			var cur=start+dis*n/count;
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			if (n == count)
			{
				clearInterval(timer);
			}
		}, 30);
	
	});
	
};


meituan.index.food = function(){
	var oFood = document.getElementById('finefd');
	var oFoodCont = document.getElementById('finefood');
	var oContT =oFoodCont.offsetTop;
	
	addEvent(window,'scroll',function(){
		var ScrollTop=document.documentElement.scrollTop|| document.body.scrollTop;
		oFood.onclick=function(){
			oFoodCont.style.marginTop=100;
		};
	});
	
	
}







function addEvent(obj,sEv,fn)
	{
		if(obj.addEventListener)
		{
			obj.addEventListener(sEv,fn,false);
		}
		else
		{
			obj.attachEvent('on'+sEv,fn);
		}
	}



