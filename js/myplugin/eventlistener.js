//事件监听，兼容各大浏览器

/*
addEventListener:监听Dom元素的事件

target：监听函数类型，如：click，mouseover
func :监听函数

*/

function addEventHandler(target,type,func){
	if(target.addEventListener){
	//监听IE9 谷歌  火狐
		target.addEventListener(type,func,false);
	}else if(target.attachEvent){
		target.attachEvent("on"+type,func);
	}else{
		target["on"+type]=func;
	}
}

/*
*removeEventHandler:移除dom元素的事件
*
*target  ：监听对象
*type:监听函数类型，如：click，mouseover
*func:监听函数
*/
function removeEventHandler(target,type,func){
	if(target.removeEventListener){
		//监听IE9 谷歌  火狐
		target.removeEventListener(target,type,func);
		
	}else if(target.detachEvent){
		target.detachEvent("on"+type,func);
	}else{
		delete target["on"+type];
	}	
}

//在加载js文件的时候，函数就已经开始执行了，之后决定用哪一个函数之后。
//函数的柯里化
var addEvent = (function(){
	if(window.VBArray){
		return function(obj,eventname,func,isCapture){
			obj.attachEvent("on"+eventname,func);
		}
	}else{
		return function(obj,eventname,func,isCapture){
			obj.addEventListener(eventname,func,!!isCapture);
	
		}
	}
})();

//有缺陷，判断多次，每次打开都要判断浏览器；
function addEvent(obj,eventname,func,isCapture){
	if(window.VBArray){
		obj.attachEvent("on"+eventname,func);
	}else{
		obj.addEventListener(eventname,func,!!isCapture);
	}
}








/*var eventOne = function(){ 
   alert("第一个监听事件"); 
} 
function eventTwo(){ 
   alert("第二个监听事件"); 
} 
window.onload = function(){ 
   var bindEventBtn = document.getElementById("bindEvent"); 
   //监听eventOne事件 
   addEventHandler(bindEventBtn,"click",eventOne); 
   //监听eventTwo事件 
   addEventHandler(bindEventBtn,"click",eventTwo ); 
   //监听本身的事件 
   addEventHandler(bindEventBtn,"click",function(){ 
alert("第三个监听事件"); 
   }); 
   //取消第一个监听事件 
   removeEventHandler(bindEventBtn,"click",eventOne); 
   //取消第二个监听事件 
   removeEventHandler(bindEventBtn,"click",eventTwo); 
} */



