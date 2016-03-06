/**
 * 
 * @authors dongjiulong (djlweb@126.com)
 * @date    2014-06-23 13:25:53
 * @version v2013
 */

// 思路：
// 1.获取每月一号是周几，确定插入几个空li，（或者上个月的最后几天）
// 2.获取一个月有多少天，然后创建这么多个li插入
// 3.获取一个月最后一天是周几，确定剩余几个li位置，用下个月的前几号占位；
// 4.加样式：过去的日子，周末，鼠标移入移出
// 5.翻月，定义一变量计数 iNow 当月为0，上月-- 下月++，setMonth的时候用
(function() {
	window.calendar = function(id) {
		function toDouble(n) {
			if (n < 10) {
				return '0' + n;
			} else {
				return n
			};
		}

		function findArr(arr, n) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == n) return true;

			}
			return false;
		}

		function getPos(obj) {
			var l = 0;
			var t = 0;
			while (obj) {
				l += obj.offsetLeft;
				t += obj.offsetTop;
				obj = obj.offsetParent;
			}
			return {
				left: l,
				top: t
			}
		}

		function addEvent(obj, sEv, fn) {
			if (obj.addEventListener) {
				obj.addEventListener(sEv, fn, false);
			} else {
				obj.attachEvent('on' + sEv, fn);
			}
		}

		function getByClass(obj, sClass) { //通过class获取元素
			if (document.getElementsByClassName) {
				return obj.getElementsByClassName(sClass);
			} else {
				var arr = [];
				var aEle = obj.getElementsByTagName('*');
				for (var i = 0; i < aEle.length; i++) {

					var tmp = aEle[i].className.split(' ');
					if (findArr(tmp, sClass)) {
						arr.push(aEle[i]);
					}
				}
				return arr;
			}
		}
		var oInput = document.getElementById(id);
		var oBox = document.createElement('div');
		oBox.innerHTML = '<div class="title">' + '<h3>January 2013</h3>' + '<a href="javascript:;" class="prev off"></a>' + '<a href="javascript:;" class="next"></a>' + '</div>' + '<div>' + '<ol class="date">'

		+ '<li>一</li>' + '<li>二</li>' + '<li>三</li>' + '<li>四</li>' + '<li>五</li>' + '<li>六</li>' + '<li>七</li>' + '</ol>' + '<ul class="date day">' + '</ul>' + '<div>';
		oBox.className = 'calendar';
		document.body.appendChild(oBox);
		var oUl = oBox.getElementsByTagName('ul')[0];
		var oH3 = oBox.getElementsByTagName('h3')[0];
		var pre = oBox.children[0].getElementsByTagName('a')[0];
		var next = oBox.children[0].getElementsByTagName('a')[1];
		var iNow = 0;
		oInput.onfocus = function() {

			oBox.style.display = 'block';
			oBox.style.left = getPos(oInput).left + 'px';
			oBox.style.top = getPos(oInput).top + oInput.offsetHeight + 'px';
			var abox = getByClass(document, 'calendar')
			for (var i = 0; i < abox.length; i++) {
				abox[i].style.display = 'none';
			};
			oBox.style.display = 'block';
		}

		oBox.onclick = oInput.onclick = function(ev) {
			var oEvent = ev || event;
			oEvent.cancelBubble = 1;

		}
		pre.onclick = function(ev) {
			iNow--;
			oUl.innerHTML = ''
			fresh();
			var oEvent = ev || event;
			oEvent.cancelBubble = 1;
		}
		next.onclick = function(ev) {
			iNow++;
			oUl.innerHTML = ''
			fresh();
			var oEvent = ev || event;
			oEvent.cancelBubble = 1;
		}

		function hide() {
			oBox.style.display = 'none';
		}
		addEvent(document, 'click', hide);
		

		function fresh() {
			//获取几个空li
			var oDate = new Date();
			oDate.setMonth(oDate.getMonth() + iNow);
			oDate.setDate(1);
			var d = oDate.getDay();
			if (d == 0) {
				d = 7
			};
			d--;
			for (var i = -(d - 1); i < 1; i++) {

				var oLi = document.createElement('li');
				oLi.style.color = '#ccc';
				oLi.style.border = 'none';
				oLi.style.width = '26px';
				oLi.style.height = '26px';
				oLi.style.cursor = 'default';
				var oDate1 = new Date();
				oDate1.setMonth(oDate1.getMonth() + iNow, 1);
				oDate1.setDate(i);

				oLi.innerHTML = oDate1.getDate();
				oUl.appendChild(oLi);
				if (iNow > 0) {
					oLi.onclick = function() {
						var oDate = new Date();
						oDate.setMonth(oDate.getMonth() + iNow - 1);
						oInput.value = oDate.getFullYear() + '-' + toDouble(oDate.getMonth() + 1) + '-' + toDouble(this.innerHTML);
						oBox.style.display = 'none';

					}
				};
			};
			//获取多少天
			var oDate = new Date();
			window.today = oDate.getDate();
			oDate.setMonth(oDate.getMonth() + 1 + iNow, 1);
			oDate.setDate(0);
			var d2 = oDate.getDay();
			d2 == 0 && (d2 = 7);
			var m = oDate.getDate()
			for (var i = 0; i < m; i++) {
				var oLi = document.createElement('li');
				oLi.innerHTML = i + 1;;

				oUl.appendChild(oLi);
				oLi.onclick = function() {
					var oDate = new Date();
					oDate.setMonth(oDate.getMonth() + iNow);
					oInput.value = oDate.getFullYear() + '-' + toDouble(oDate.getMonth() + 1) + '-' + toDouble(this.innerHTML);
					oBox.style.display = 'none';
				}

			};
			function weekend(){
				for (var i = 0; i < oUl.children.length; i++) {
					if (i % 7 == 5 || i % 7 == 6) {
						oUl.children[i].className = 'weekend';
						oUl.children[i].onmouseover = function() {
							this.className = 'today';
						}
						oUl.children[i].onmouseout = function() {
							this.className = 'weekend';
						}

					};

				};
			}
			
			if (iNow < 0) {
				for (var i = 0; i < oUl.children.length; i++) {

					oUl.children[i].className = 'pass';
					oUl.children[i].onclick = null;
				}
			} else if (iNow == 0) {
				
				for (var i = d; i < oUl.children.length; i++) {
					if (oUl.children[i].innerHTML < today) {
						oUl.children[i].className = 'pass';
						oUl.children[i].onclick = null;
						oUl.children[i].onmouseover = null;
						oUl.children[i].onmouseout = null;
					} else if (oUl.children[i].innerHTML == today) {
						oUl.children[i].className = 'today';
					} else {
						oUl.children[i].onmouseover = function() {
							this.className = 'today';
						}
						oUl.children[i].onmouseout = function() {
							this.className = '';
						}
						if (i % 7 == 5 || i % 7 == 6) {
							oUl.children[i].className = 'weekend';
							oUl.children[i].onmouseover = function() {
								this.className = 'today';
							}
							oUl.children[i].onmouseout = function() {
								this.className = 'weekend';
							}

						};
					}
				};

			} else {

				for (var i = 0; i < oUl.children.length; i++) {
					if (oUl.children[i].innerHTML != '') {
						oUl.children[i].onmouseover = function() {
							this.className = 'today';
						}
						oUl.children[i].onmouseout = function() {
							this.className = '';
						}
					};
				};
				if (iNow == 1) {
					for (var i = 0; i < d; i++) {
						if (oUl.children[i].innerHTML < today) {
							oUl.children[i].onmouseover = null;
							oUl.children[i].onclick = null;

						}
					};
				}
				weekend();
			}
			for (var i = 1; i < (8 - d2); i++) {

				var oLi = document.createElement('li');
				oLi.style.color = '#ccc';
				oLi.style.border = 'none';
				oLi.style.width = '26px';
				oLi.style.height = '26px';
				oLi.style.cursor = 'default';
				var oDate1 = new Date();
				oDate1.setMonth(oDate1.getMonth() + iNow + 1);
				oDate1.setDate(i);

				oLi.innerHTML = oDate1.getDate();
				oUl.appendChild(oLi);
				if (iNow > -1) {
					oLi.onclick = function() {
						var oDate = new Date();
						oDate.setMonth(oDate.getMonth() + iNow + 1);
						oInput.value = oDate.getFullYear() + '-' + toDouble(oDate.getMonth() + 1) + '-' + toDouble(this.innerHTML);
						oBox.style.display = 'none';


					}
					oLi.onmouseover = function() {
						this.className = 'today';
					}
					oLi.onmouseout = function() {
						this.className = '';
					}
				};
			};
			var oDate = new Date();

			oDate.setMonth(oDate.getMonth() + iNow, 1);
			today = oDate.getDate();
			oH3.innerHTML = oDate.getFullYear() + '年' + (oDate.getMonth() + 1) + '月';
		}
		fresh();

		
	}

	var oLink = document.createElement('link');
	oLink.rel = 'stylesheet'
	oLink.type = 'text/css';
	oLink.href = 'style/myCalendar.css';
	var oHead = document.getElementsByTagName('head')[0];
	oHead.appendChild(oLink);
})();