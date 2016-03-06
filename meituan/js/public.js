// JavaScript Document
// 空间
var meituan={};

// 公共代码
meituan.public={};

// 公共头部
/*头部导航*/
meituan.public.NavToblock=function (){
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
};

/*微信*/
meituan.public.dropdownToblock=function (){
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
/*头部图片*/
meituan.public.picToblock=function (){
	var oPicBlock=document.getElementById('header-middle-btn');
	var oPicClose=document.getElementById('header-middle-close');
	oPicBlock.onclick=function(){
		this.style.display='none';
		oPicClose.style.display='none';
	};
	
};

/*搜索框*/
meituan.public.Searchmiddle=function (){
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
/*侧边导航*/
meituan.public.LeftNav=function (){
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
meituan.public.FooterAdd=function (){
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





