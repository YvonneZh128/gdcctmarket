
require.config({
	baseUrl:"../js",
	paths: {
		"jquery" : "myplugin/jquery-1.11.3",
		"common":"common"
 	}
});

require(["jquery","common"],function($,common){
	$(function(){
		$("#loadheader").load("headsimple.html");
		
		//middle;
		loginCheck();
		autologin();
		
		$("#loadfooter").load("footer.html",function(){
			common.foot();
		});
	});
	function loginCheck(){
		$(".loginuname").focus(function(){
			if($(this).val() == "用户名/邮箱/手机号"){
				$(this).val("");
			}
			$(this).css("border-color","#009900");
			
		});
		$(".loginuname").blur(function(){
			if($(this).val() == ""){
				$(this).val("用户名/邮箱/手机号");
				$(this).nextAll("p").text("请输入用户名/邮箱/手机号");
			}
			
		});
		$(".loginpwd").focus(function(){
			$(this).css("border-color","#009900");
			
		});
		$(".loginpwd").blur(function(){
			if($(this).val() == ""){
				$(this).nextAll("p").text("请输入密码");
			}
		});
		
		
	}
	function autologin(){
		$(".autologin").find("em").mouseenter(function(){
			$(this).css({
				"border":"1px solid #FF2A00",
		        "background":"#F2DEDE",
				"border-bottom":"0"
			});
			$(".logintip").css("visibility","visible");
		});
	}
});