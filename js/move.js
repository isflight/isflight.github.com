function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}
function startMove(obj,json,options){
	options=options || {};
	options.time=options.time || 400;
	options.type=options.type || 'linear';
	clearInterval(obj.timer);
	var count=Math.floor(options.time/30);
	var start={};
	var dis={};

	for(var name in json){
		if(name=='opacity'){
			start[name]=parseFloat(getStyle(obj,name));
		}else{
			start[name]=parseInt(getStyle(obj,name));
		}
		switch(start[name]){
			case 'left':
				start[name]=obj.offsetLeft;
				break;
			case 'top':
				start[name]=obj.offsetTop;
				break;
			case 'width':
				start[name]=obj.offsetWidth;
				break;
			case 'height':
				start[name]=obj.offsetHeight;
				break;
		}
		dis[name]=json[name]-start[name];
	}

	var n=0;
	obj.timer=setInterval(function(){
		n++;

		for(var name in json){
			switch(options.type){
				case 'linear':
					var iScale=n/count;
					var cur=start[name]+dis[name]*iScale;
					break;
				case 'ease-in':
					var iScale=n/count;
					var cur=start[name]+dis[name]*Math.pow(iScale,3);
					break;
				case 'ease-out':
					var iScale=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(iScale,3))
			}

			if(name=='opacity'){
				obj.style.opacity=Math.round(cur*100)/100;
				obj.style.filter='alpha(opacity:'+Math.round(cur*100)+')'
			}else{
				obj.style[name]=cur+'px';
			}
		}

		if(n==count){
			clearInterval(obj.timer);
			options.end && options.end();
		}
	},30)
}