
/*ajax({
	type : "jsonp",
	url : "http://xxxxx.com?callback",
	jsonpcallback : "cb",
	success : function(){
		
	}
})*/

/*
function ajax({type="get", params, jsonpcallback="callback",url, async=true, success=function(){}}) {
	//验证传入的链接地址是否正确；
	if(!/^https?:\/\/.+(\?.+=.+)?$/.test(url)){
		console.error("url格式不正确");
		return;
	}
	//根据传入的类型判断调用方式，默认是get;
	switch(type) {
		case "get" : ajaxGet(url, async, success); break;
		case "post" : ajaxPost(url, params, async, success); break;
		case "jsonp" : Jsonp(url, jsonpcallback,success); break;
	}
	
	function ajaxGet(url, async, success){
		var req = getXHR();//解决兼容问题；
		req.open("get", url, async);
		
		if(!!req.onload){//判断req.onload 方法是否存在，解决兼容问题；
			req.onload = function(){
				success(req.response);
			}
		} else {
			req.onreadystatechange = function(){
				if(req.readyState == 4 && req.status == 200) {
					success(req.responseText);
				}
			}
		}
		req.send();
	}
	
	function ajaxPost(url, params, async, success) {
		var req = getXHR();
		req.open("post", url, async);
		//设置编码方法；
		req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		if(!!req.onload){
			req.onload = function(){
				success(req.response);
			}
		} else {
			req.onreadystatechange = function(){
				if(req.readyState == 4 && req.status == 200) {
					success(req.responseText);
				}
			}
		}
		//传递参数，属于保密范围的内容；
		req.send(params);
	}
	
	function Jsonp(url,jsonpcallback,success){
		var _script = document.createElement("script");
		//自己指定的函数名；；
		var cbkfunname = "_ajax_jsonp_callback"+new Date().getTime();
		
		//传入指定的参数和相应的函数名，比如：不同浏览器对于“cb”和“callback”的差别;
		if(/\?([^\?=]+=[^\?=]+)+$/.test(url)) {
			_script.src = url+"&"+jsonpcallback+"="+cbkfunname;
		} else {
			_script.src = url+"?"+jsonpcallback+"="+cbkfunname;
		}
		
		//回调函数使用；
		window[cbkfunname] = function(data) {
			success(data);
			delete window[cbkfunname];
			_script.remove();
		}
		document.body.appendChild(_script);
	}
	
	function getXHR(){
		if(window.VBArray) {
			return new ActiveXObject("Msxml2.XMLHTTP")
		} else {
			return new XMLHttpRequest();
		}
	}
}
*/

function ajax(type="get",params,url,jsonpcallback="callback",async=true,success=function(){}){
	if(!(/^https?:\/\/.+(\?.+=.+)?$/.test(url))){
		alert("错误的URL地址");
		return;
	}
	switch(type){
		case "get":ajaxGet(url,async,success);break;
		case "post":ajaxPost(url,params,async,success);break;
		case "jsonp":ajaxJsonp(url,jsonpcallback,async,success);break;
	}
	function ajaxGet(url,async,success){
		var req=getXHR();
		req.open("get",url,async);
		getResponse(success);
		req.send();
	}
	
	function ajaxPost(url,params,async,success){
		var req=getXHR();
		req.open("post",url,async);
		req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		getResponse(success);
		req.send(params);
	
	}
	function ajaxJsonP(url,jsonpcallback,async,success){
		var _script = document.createElement("script");
		var cbkname="_ajax_jsonp_cbk"+new Date().getTime();
		if(/\?([^\?=]+=[^\?=]+)+$/.test(url)){
			_script.src=url+"&"+jsonpcallback+"="+cbkname;
		}else{
			_script.src=url+"?"+jsonpcallback+"="+cbkname;
		}
		window[cbkname]=function(data){
			success(data);
			delete window[cbkname];
			_script.remove();
		}
		document.body.appendchild(_script);
	}
	function getXHR(){
		if(window.VBArray){
			return new ActiveXObject("Msxml2.XMLHTTP");
		}else{
			return new XMLHttpRequest();
		}
	}
	function getResponse(success){
		if(!!req.onload){
			req.onload=function(){
				success(req.response);
			}
		}else{
			req.onreadystatechange=function(){
				if(req.readyState == 4 && req.status == 200){
					success(req.responseText);
				}
			}
		}
	}
}