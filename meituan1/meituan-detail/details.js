// JavaScript Document
meituan.details={};

/*头部导航*/

meituan.details.Opreation=function(){
	var oBtnOpre=document.getElementById('btn');
	var oBtn1Opre=document.getElementById('btn1');
	var oTOpre=document.getElementById('t');
	var n=oTOpre.value;
	var timer=null;
	
	oBtnOpre.onmousedown=function (){
		timer=setInterval(function (){
			n++;
			oTOpre.value=n;
		}, 100);
	};

	
	oBtn1Opre.onmousedown=function (){
		timer=setInterval(function (){
			
			if(n <= 1)
			{
				n=1;
			}
			oTOpre.value=n;
			n--;
		}, 100);
	};
	
	oBtnOpre.onmouseup=oBtn1Opre.onmouseup=function (){
		clearInterval(timer);
	};
};


meituan.details.BossNav=function(oBossNavTop,oBossNav){
	var oBossNavDiv=document.getElementById('boss-nav-ul-div');
	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
	var aLiBossNav=oBossNav.getElementsByTagName('li');
	var oBossRush=document.getElementById('boss-rush');
	
		if(oBossNavTop<scrollTop)
		{
			oBossNav.style.position='fixed';
			move(oBossNav,{width:980});
			move(oBossRush,{width:60});
			oBossRush.innerHTML='抢购';
			oBossNavDiv.style.dispaly='block';
		}
		else
		{
			oBossNav.style.position='';
			move(oBossNav,{width:700});
			move(oBossRush,{width:0});
			oBossRush.innerHTML='';
			oBossNavDiv.style.dispaly='';
		}
		
		for(var i=0;i<aLiBossNav.length;i++)
		{
			aLiBossNav[i].onclick=function(){
				for(var i=0;i<aLiBossNav.length;i++)
				{
					aLiBossNav[i].className='';
				}
				this.className='active';
			};
		}
		
		
		
		
};
meituan.details.Weixin=function(){
	var oBtnWei=document.getElementById('weixinr');
	var oIWei=oBtnWei.children[0];
	oIWei.onclick=function(){
		oBtnWei.style.display='none';
	};
	
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