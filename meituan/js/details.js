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
	var timer=null;
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
			move(oBossNav,{width:697});
			move(oBossRush,{width:0});
			oBossRush.innerHTML='';
			oBossNavDiv.style.dispaly='';
		}
		
		
		var aLooktop=document.getElementsByClassName('looktop');
	
		for(var i=0;i<aLooktop.length;i++)
		{
			(function(index){
				addEvent(window,'scroll',function(){
					var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
					
					if(scrollTop>getPos(aLooktop[index]).top&& scrollTop<getPos(aLooktop[index+1]).top)
					{
						aLiBossNav[index].className='active';
					}else
					{
						aLiBossNav[index].className='';
					}
					
					if(scrollTop<getPos(aLooktop[0]).top)
					{
						aLiBossNav[0].className='active';
					}
				});
			})(i);
		}
		
		for(var i=0;i<aLiBossNav.length;i++)
		{
			(function(index){
				var tag=getPos(aLooktop[index]).top;
				
				aLiBossNav[i].onclick=function(){
					for(var i=0;i<aLiBossNav.length;i++)
					{
						aLiBossNav[i].className='';
					}
					this.className='active';
				
					var start=document.documentElement.scrollTop|| document.body.scrollTop;
					var dis=tag-start;
					var count=Math.floor(1000/30);
					var n=0;
					
					clearInterval(timer);
					timer=setInterval(function (){
						n++;
						var cur=start+dis*n/count;
						
						document.body.scrollTop=cur;
						document.documentElement.scrollTop=cur;
						if (n == count)
						{
							clearInterval(timer);
						}
					}, 30);
			};})(i);
		}
		
		
		
		
		/*
		for(var i=0;i<aLiBossNav.length;i++)
		{
			aLiBossNav[i].index=i;
			addEvent(aLiBossNav[i],'click',function(){
				for(var i=0;i<aLiBossNav.length;i++)
				{
					aLiBossNav[i].className='';
				}
				this.className='active';
				document.body.scrollTop=getPos(aLooktop[this.index]).top;
				document.documentElement.scrollTop=getPos(aLooktop[this.index]).top;
			});
		}	
		*/
		

		
		
		
};

meituan.details.Pic=function(){
	var aLiPic=document.getElementsByClassName('pic-detail');
	var oDivPic=document.getElementById('pic-detail-min');
	var aImgPic=oDivPic.getElementsByTagName('img');
	for(var i=0;i<aImgPic.length;i++)
	{
		aImgPic[i].index=i;
		aImgPic[i].onclick=function(){
			for(var i=0;i<aImgPic.length;i++)
			{	
				aLiPic[i].className='pic-detail';
			}
			aLiPic[this.index].className='pic-detail active';
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