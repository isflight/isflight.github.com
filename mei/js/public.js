// JavaScript Document

//公共js部分
var meituan={};

meituan.public={};


//头部下拉列表
meituan.public.Header=function(){
	var aMymtLi=document.getElementsByClassName('mymt-huoqu');
	var aMymtUl=document.getElementsByClassName('mymeituan');
	var aMymtA=document.getElementsByClassName('mymt-linka');
	
	for(var i=0; i<aMymtLi.length; i++)
	{
		(function(index){
			aMymtLi[i].onmouseover=function(){
				this.className='link-active';
				aMymtUl[index].style.display='block';
				aMymtA[index].style.borderRight='1px solid #fafafa'	;
			};
			
			aMymtLi[i].onmouseout=function(){
				this.className='';
				aMymtUl[index].style.display='none';	
				aMymtA[index].style.borderRight='1px solid #dddddd'	
			};
		})(i);
	}	
};

//公共广告
meituan.public.Ad=function(){
	var adDiv=document.getElementById('ad');
	var adImg=adDiv.children[0];
	var adSpan=adDiv.children[1];
	//alert(adSpan.class);
	adSpan.onclick=function(){
		adImg.style.display='none';	
		adSpan.style.display='none';
		adDiv.style.display='none';
	};
};

//公共导航
meituan.public.Vav=function(){
	var oNavUl=document.getElementById('nav');
	var aNavLi=oNavUl.children;
	//var timer=null;
	
	for(var i=0; i<aNavLi.length; i++)
	{
		(function(index){
			aNavLi[i].onmouseover=function(){
				for(var i=0; i<aNavLi.length; i++)
				{
					aNavLi[i].className='';
				}	
				aNavLi[index].className='nav-active';	
			};
		})(i);
	}
};

//导航吸顶条
meituan.public.NavTop=function(){
	var oNavTop1=document.getElementById('nav-top1');
	var oNavTop2=document.getElementById('nav-top2');
	
	var top=getPos(oNavTop1).top;
	
	addEvent(window,'scroll',function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		
		if(top < scrollTop)
		{
			oNavTop1.style.position='fixed';
			oNavTop1.style.left=142+'px';
			oNavTop2.style.display='block';
		}	
		else
		{
			oNavTop1.style.position='';
			oNavTop1.style.left=0;
			oNavTop2.style.display='none';
		}
	});

	
	
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
	
	};
	
	//封装函数
	function getPos(obj)
	{
		var left=0;
		var top=0;
		
		while (obj)
		{
			left+=obj.offsetLeft;
			top+=obj.offsetTop;
			
			obj=obj.offsetParent;
		}
		
		return {left:left, top:top};
	}
};


//主题左列表
meituan.public.RightList=function(){
	var oListUl=document.getElementById('list-ul');
	var aList=document.getElementsByClassName('ct-list');
	var aCont=document.getElementsByClassName('ct-content');
	var aListI=document.getElementsByClassName('triangle');
	
	
	var timer=null;
	oListUl.onmouseover=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			oListUl.className='show content-list';	
		},100);
	};
	
	oListUl.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			oListUl.className='content-list';	
		},100);
		
	};
	
	
	
	for(var i=0; i<aList.length; i++)
	{
		(function(index){
			var timer=null;
			aList[i].onmouseover=function(){
				clearInterval(timer);
				timer=setInterval(function(){
					aList[index].className='list-bt ct-list active';
					aCont[index].className='list-content ct-content active';
					aListI[index].style.display='none';
				},100);
			};
			
			aList[i].onmouseout=function(){
				clearInterval(timer);
				timer=setInterval(function(){	
					aList[index].className='list-bt ct-list';
					aCont[index].className='list-content ct-content';
					aListI[index].style.display='block';;
				},100);
			};
		})(i);
	}
};

//公共尾部选项卡
meituan.public.EndTab=function(){
	var oEndTabUl=document.getElementById('end');
	var aEndTabLi=oEndTabUl.getElementsByTagName('li');	
	var oEndTabDiv=document.getElementById('end-tab');
	var aEndTabDiv=oEndTabDiv.getElementsByTagName('div');
	//alert(aEndTabDiv.length);
	
	for(var i=0; i<aEndTabLi.length; i++)
	{
		(function(index){
			aEndTabLi[i].onmouseover=function(){
				for(var i=0; i<aEndTabLi.length; i++)
				{
					aEndTabLi[i].className='';
					aEndTabDiv[i].className='end-yqlink';
				}
				aEndTabLi[index].className='active';
				aEndTabDiv[index].className='end-yqlink end-active';	
			};
		})(i);
	}
};

//右边定位按钮
meituan.public.RigthBtn=function(){
	var oRbtnTop=document.getElementById('btn-p1');
	var oRbtnExp=document.getElementById('btn-p2');
	var oRbtnHelp=document.getElementById('btn-p3');
	var oRbtnView=document.getElementById('btn-p4');
	var timer=null;
	var userScroll=false;
	
	
	//返回顶部，移入
	oRbtnTop.onmouseover=function(){
		oRbtnTop.style.background='#ccc';
		oRbtnTop.innerHTML='返回<br />顶部';	
	};	
	
	oRbtnTop.onmouseout=function(){
		oRbtnTop.style.background='';
		oRbtnTop.innerHTML='';	
	};
	
	
	//返回顶部，点击
	oRbtnTop.onclick=function(){
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		var dis=0-start;
		var count=Math.floor(1000/30);
		var n=0;
		
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			
			userScroll=false;
			var cur=start+dis*n/count;
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			
			if(n == count)
			{
				clearInterval(timer);
			}	
		}, 30);	
	};
	
	
	//用户滚动
	window.onscroll=function(){
		if(userScroll)
		{
			clearInterval(timer);
		}
		userScroll=true;	
	};
	
	//问卷调查
	oRbtnExp.onmouseover=function(){
		oRbtnExp.style.background='#ccc';
		oRbtnExp.innerHTML='问卷<br />调查';	
	};	
	
	oRbtnExp.onmouseout=function(){
		oRbtnExp.style.background='';
		oRbtnExp.innerHTML='';	
	};
	
	
	//帮助中心
	oRbtnHelp.onmouseover=function(){
		oRbtnHelp.style.background='#ccc';
		oRbtnHelp.innerHTML='帮助<br />中心';	
	};	
	
	oRbtnHelp.onmouseout=function(){
		oRbtnHelp.style.background='';
		oRbtnHelp.innerHTML='';	
	};
	
	
	//意见反馈
	oRbtnView.onmouseover=function(){
		oRbtnView.style.background='#ccc';
		oRbtnView.innerHTML='意见<br />反馈';	
	};	
	
	oRbtnView.onmouseout=function(){
		oRbtnView.style.background='';
		oRbtnView.innerHTML='';	
	};
};

































