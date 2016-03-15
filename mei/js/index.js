// JavaScript Document

//主页js部分
meituan.index={};


//主题左列表
meituan.index.RightList=function(){
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

//主题选项卡
meituan.index.contTab=function(){
	var oTabDiv=document.getElementById('tab');
	var aTabUl=oTabDiv.getElementsByTagName('ul');
	var oBtnTabL=document.getElementById('pren');
	var oBtnTabR=document.getElementById('next');	
	
	var now=0;
	
	//上一个
	oBtnTabL.onclick=function(){
		now--;	
		
		if(now == -1)
		{
			now=aTabUl.length-1;	
		}
		
		
		for(var i=0; i<aTabUl.length; i++)
		{
			for(var i=0; i<aTabUl.length; i++)
			{
				aTabUl[i].className='content-botm';
				aTabUl[i].style.zIndex=1;
				move(aTabUl[i], {opacity:0}, {duration:500});	
			}
			aTabUl[now].className='tab-active content-botm';
			aTabUl[now].style.zIndex=2;
			move(aTabUl[now], {opacity:1}, {duration:500});
		}
		oBtnTabR.innerHTML=(now+1)%88+'/'+aTabUl.length;
	};
	
	
	//下一个
	oBtnTabR.onclick=function(){
		next();
		oBtnTabR.innerHTML=now+1+'/'+aTabUl.length;
	};
	
	//自动播放
	clearInterval(timer);
	var timer=setInterval(function(){	
		next()	
	},3000);
	
	//移入
	oTabDiv.onmouseover=function(){
		clearInterval(timer);	
		oBtnTabL.style.display='block';
		oBtnTabR.style.display='block';
		oBtnTabR.innerHTML=now+1+'/'+aTabUl.length;
	};
	
	//移除
	oTabDiv.onmouseout=function(){
		timer=setInterval(function(){	
			next()	
		},3000);
		oBtnTabL.style.display='none';
		oBtnTabR.style.display='none';	
	};
	
	//函数封装
	function next()
	{
		now++;	
		
		if(now == aTabUl.length)
		{
			now=0;	
		}
		
		
		for(var i=0; i<aTabUl.length; i++)
		{
			for(var i=0; i<aTabUl.length; i++)
			{
				aTabUl[i].className='content-botm';
				aTabUl[i].style.zIndex=1;
				move(aTabUl[i], {opacity:0}, {duration:500});	
			}
			aTabUl[now].className='tab-active content-botm';
			aTabUl[now].style.zIndex=2;
			move(aTabUl[now], {opacity:1}, {duration:500});
		}	
	}
};

//抢购倒计时
meituan.index.SnapTime=function(){
	var oSnapDiv=document.getElementById('time');
	var aSnapSpan=oSnapDiv.getElementsByTagName('span');
	
	tick();
	setInterval(tick,1000);
	
	function tick(){
		
		var oTarget=new Date;
		var oNow=new Date;
		
		oTarget.setFullYear(2016);
		oTarget.setMonth(0);
		oTarget.setDate(14);
		oTarget.setHours(0,0,0);
		
		var total=oTarget.getTime()-oNow.getTime();
		total=parseInt(total/1000);
		
		var h=parseInt(total/3600);
		total%=3600;
		
		var m=parseInt(total/60);
		total%=60;
		
		var s=total;
		
		var str=toDub(h)+toDub(m)+toDub(s);
		
		
		for(var i=0; i<aSnapSpan.length; i++)
		{
			aSnapSpan[i].innerHTML=str.charAt(i);
		}
		
	}	
	function toDub(n){
		return n < 10 ? '0'+n : ''+n;
	};	
};


//抢购选项卡
meituan.index.Shoping=function(){
	var oShopDiv=document.getElementById('shoping-snap');
	var aShopUl=oShopDiv.children;
	var oShopPrev=document.getElementById('snap-prev');
	var oShopNext=document.getElementById('snap-next');	
	
	oShopDiv.appendChild(aShopUl[0].cloneNode(true));
	oShopDiv.style.width=aShopUl[0].offsetWidth*aShopUl.length+'px';
	var w=oShopDiv.offsetWidth/aShopUl.length;
	var left=0;
	var n=0;
	
	oShopNext.onclick=function(){
		n++;
		if(n >= aShopUl.length)
		{
			oShopDiv.style.left=0;
			n=1;
		}	
		move(oShopDiv, {left:-n*w}, {duration:800});
	};
	
	oShopPrev.onclick=function(){
		n--;
		if(n <= 0)
		{
			oShopDiv.style.left=-(aShopUl.length-1)*w+'px';
			n=1;
		}
		move(oShopDiv, {left:-n*w}, {duration:800});	
	};
};


//悬浮广告
meituan.index.Ad=function(){
	var oAdEndDiv=document.getElementById('xuanfu-ad');
	var oAdOpen=document.getElementById('ad-open');
	var oAdClod=document.getElementById('ad-clod');
	var w=document.documentElement.clientWidth;
	
	
	oAdOpen.onclick=function(){
		move(oAdOpen,{ width:0},{
			complete:function(){
				move(oAdEndDiv,{ width:w});
			}
		});
	};
	
	oAdClod.onclick=function(){
		move(oAdEndDiv,{ width:0},{
			complete:function(){
				move(oAdOpen,{ width:115});
			}
		});
	};
};



























