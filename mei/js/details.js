// JavaScript Document

meituan.details={};


//详情页商家信息选项卡	
meituan.details.Listing=function(){
	var oListingUl=document.getElementById('listing-lb');
	var aListingLi=oListingUl.children;
	var oListingDiv=document.getElementById('listing-nr');
	var aListingDiv=oListingDiv.children;
	
	for(var i=0; i<aListingLi.length; i++)
	{
		(function(index){
			aListingLi[i].onmouseover=function(){
				for(var i=0; i<aListingLi.length; i++)
				{
					aListingLi[i].className='';
					aListingDiv[i].className='qita-lsting-lt';
				}
				aListingLi[index].className='active';	
				aListingDiv[index].className='listing-active';
			};
		})(i);
	}
};

//详情页主图选项卡
meituan.details.DetaTab=function(){
	var oDetaP=document.getElementById('detail-btn1');
	var aDetaTopImg=oDetaP.children;
	var oDetaDiv=document.getElementById('detail-pic');
	var aDetaBotImg=oDetaDiv.children;
	
	for(var i=0; i<aDetaBotImg.length; i++)
	{
		(function(index){
			aDetaBotImg[i].onmouseover=function(){	
				for(var i=0; i<aDetaBotImg.length; i++)
				{
					aDetaBotImg[i].className='xb-bg';
					aDetaTopImg[i].className='';
				}
				aDetaBotImg[index].className='xb-bg xb-active';
				aDetaTopImg[index].className='img-active';	
			}
		})(i);
	}
};

//商品购买数量增加或减少
meituan.details.detailSp=function(){
	var oDetaNext=document.getElementById('span-next');
	var oDetaPrev=document.getElementById('span-prev');
	var oDetaCont=document.getElementById('span-content');
	var n=1;
	
	oDetaNext.onclick=function(){
		n--;
		if(n <= 1)
		{
			n=1;
		}
		oDetaCont.innerHTML=n;
	};
	
	oDetaPrev.onclick=function(){
		n++;
		oDetaCont.innerHTML=n;	
	};
	
	
	
};

















