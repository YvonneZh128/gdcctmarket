
require.config({
	baseUrl:"../js",
	paths:{
		"jquery":"myplugin/jquery-1.11.3",
		"common":"common"
	}
});


require(["jquery","common"],function($,common){
	$(function(){
		
		//加载页头
		$("#loadheader").load("headsimple.html");
		
		checkInfo();
		//加载页尾
		$("#loadfooter").load("footer.html",function(){
			common.foot();
			
		});
	});
	function checkInfo(){
		/*this.init=function(){
			this.checkon();
		},*/
//		this.checkon=function(){
			
			var regbtn = $("#regbtn");
			var inputs=$("input[name=checkinput]");
			var regform=$(".regInfo");
			var checkReg={
				UserName:/^[a-zA-Z_]\w{5,19}$/,
				PassWord:/^[0-9a-zA-Z]{6,15}$/,
				Email:/^[^@]+@[^@]+(\.[^@]+)+/
			}
			
			//验证用户名；
			$(".username").find("input").focus(function(){
				$(this).css("border-color","#3cb300");
				if($(this).val() == "以字母开头，只能由字母或数字组成"){
					$(this).val("");
				}
				$(this).keyup(function(){
					if($(this).val().match(/^[^a-zA-Z]/)){
						$(this).css("border-color","red");
						$(this).nextAll("p").text("用户名只能以字母开头！");
					}else{
						$(this).nextAll("p").text("");
						
					}
				});
			});
			$(".username").find("input").blur(function(){
				if($(this).val() =="" ){
					$(this).val() =="以字母开头，只能由字母或数字组成";
					$(this).css("border-color","red");
					$(this).nextAll("p").text("请输入用户名！");
				}
				
				if($(this).val().length <6 || $(this).val().length>20){
					$(this).css("border-color","red");
					$(this).nextAll("p").text("用户名长度在6~20之间！");
				}else{
					if($(this).val().match(/^[a-zA-Z][a-zA-Z0-9]{5,19}$/)){
						$(this).css("border-color","#3cb300");
						$(this).next().css("visibility","visible");
						$(this).nextAll("p").text("");
						
					}else{
						$(this).css("border-color","red");
						$(this).nextAll("p").text("用户名只能由字母或数字组成！");
					}
					
				}
				
				
			});
			
			//验证电子邮件
//			var $com = $(".checkemail").text();
			$(".email").find("input").focus(function(){
				$(this).css("border-color","#3cb300");
				var emailtxt=$(this).val();
				$(this).keyup(function(){
					
					$(".checkemail").css("display","block");
					$(".checkemail").find("li").each(function(index){
						
						var $com=$(this).text();
						
						$(this).text(emailtxt+$com);
						$(this).click(function(){
							self.val($(this).text());
							$(".checkemail").hde();
							
						});
					})
				});
			});
			$(".email").find("input").blur(function(){
				
				if($(this).val() == ""){
					$(this).css("border-color","red");
					$(this).nextAll("p").text("请填写您常用的电子邮箱，用于找回密码和接收交易提醒邮件！");
				}else{
					if(!($(this).val().match(/^\w+@\w+(\.\w+)+$/))){
						$(this).css("border-color","red");
						$(this).nextAll("p").text("请输入正确的邮箱地址！");
					}else{
						$(this).next().css("visibility","visible");
					}
					$(".checkemail").hide();
					
				}
			});
			
			//验证 密码
			$(".pwd").find("input").focus(function(){
				$(this).css("border-color","#009900");
			});
			$(".pwd").find("input").blur(function(){
				if($(this).val().length >15 || $(this).val().length <6){
					$(this).css("border-color","red");
					$(this).nextAll("p").text("密码长度为6~15位！");
				}else{
					if($(this).val().match(/^([0-9]{6,15})|([a-z]{6,15})|([A-Z]{6,15})$/)){
						$(this).css("border-color","red");
						$(this).nextAll("p").text("密码过于简单，不能是纯数字或纯字母！");
					}else{
						$(this).css("border-color","#e5e5e5");
						$(this).next().css("visibility","visible");
					}
				}
			});
			$(".surepwd").find("input").focus(function(){
				$(this).css("border-color","#009900");
			});
			$(".surepwd").find("input").blur(function(){
				if($(this).val() == $(".pwd").find("input").val()){
					$(this).css("border-color","#e5e5e5");
					$(this).next().css("visibility","visible");
					
				}else{
					$(this).css("border-color","red");
					$(this).nextAll("p").text("密码不一致，请重新输入");
				}
			});
			
			//验证码；
			
			
			
			//所有验证结束；
			
			inputs.each(function(oInput){
				oInput.keyup(function(){
					var ispass= checkReg[oInput.getAttribute("pattern")].test(this.value);
					
					this.setAttribute("pass",ispass);
					if(ispass){
						this.nextElementSibling.style.visibility="visible";
						
					}
				})
			});
			regbtn.click(function(){
				var res = inputs.every(function(oInput){
					return oInput.pass==false;
				})
				if(!res){
					reform.submit();
				}
			})
//		}
	}
});
