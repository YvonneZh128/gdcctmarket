require.config({
	baseUrl:"../js",
	paths: {
		"jquery" : "myplugin/jquery-1.11.3",
 	}
});

define(["jquery"],function($){
	return {
		head:function(){
			
			this.logoEWM();
			this.searchInfo();
			this.prodMenu();
		},
		foot:function(){
			this.footendclick();
		},
		//页面底部的点击效果；
		footendclick:function(){
			var $this=$(".footmenul");
//			var $sel=$(options.endmenu);
//			if($sel == false){
//				$this.parent().remove();
//			}
			var currentIndex=0;
			$this.find("li").mouseover(function(){
				$(this).find("a").addClass("onhover").parent().siblings().find("a").removeClass("onhover");
				var $count=$(this).index();
				$(".foot-sed").eq($count-1).show().siblings().hide();
			});
		},
		
		
		//头部二维码的选择关闭；
		logoEWM:function(){
			$(".closeEWM").click(function() {
				$(this).siblings().css("visibility", "hidden");
			});
			return this;
		},
		
		//搜索框的事件
		searchInfo:function(){
			//搜索种类选择；
			$("#sel").find("dt").mouseenter(function() {
				var self = $(this);
				$(this).siblings().show();
				$(this).find("a").css("background", "rgb(245,245,245)");
				$(this).find("img").css("backgroundPositionY", "-5px");
				//dd  的触发；
				$(this).siblings().find("a").mouseenter(function() {
					$(this).css("background", "rgb(245,245,245)");
					//dd 的点击事件；
					$(this).click(function() {

						var x = self.find("a").text();
						self.find("a").text($(this).text());
						$(this).text(x);
						self.siblings().hide();
						self.find("a").css("background", "#FFF");
						self.find("img").css("backgroundPositionY", "0");

					});
				});
				$(this).siblings().find("a").mouseleave(function() {
					$(this).css("background", "#fff");
				});

			});

			$("#sel").mouseleave(function() {
				$(this).find("dt").find("a").css("background", "#FFF");
				$(this).find("dt").find("img").css("backgroundPositionY", "0");
				$(this).find("dd").hide();
			});
			
			//搜索框输入；
			$(".searchtxt").focus(function() {
				if($(this).val("请输入您想要找的信息")) {
					$(this).val("");
				}
			})
			$(".searchtxt").blur(function() {
				if($(this).val("")) {
					$(this).val("请输入您想要找的信息");
				}
			});
			return this;
			
			
		},
		prodMenu:function(options){
			//定义下拉菜单背景图
			var $arr = [""];
			$(".downmenu li").each(function(i) {
				$(this).mouseenter(function() {
					$(this).find(".menuone").stop().animate({
						left: 10
					}, 500);
					$(this).find(".next").hide();
					$(this).find(".menutwo").css({
						"display": "block",
						"top": (-i * $(this).height()) + "px",
					});
					console.log(i + "ok");
					$(this).siblings().find(".menutwo").hide();
				});
			})
			$(".downmenu li").each(function() {
				$(this).mouseleave(function() {
					$(this).find(".next").show();
					$(this).find(".menuone").stop().animate({
						left: 0
					}, 500);
					$(this).find(".menutwo").css("display", "none");

				})
			});
			
			
			
		},
		dropdownlist:function(){
			var $list=$(".allProd");
			$list.find(".downmenu").css("display","none");
			$list.mouseover(function(){
				$(this).find(".downmenu").show();
				
			});
			$list.mouseout(function(){
				$(this).find(".downmenu").hide();
				
			});	
			return this;
		}
		
		
	}	
	
});













































/*//通用逻辑
define(["jquery"], function($) {
		
		return{
			
			head : function(){
				//------------------top-bar-----------
				//导航-选项卡
				function topbarOp() {
			
					$(".top_bar p span").click(function() {
						$(".top_bar_nav").show();
						$(".top_bar p").addClass("top_bar_p_on");
						//区县点击事件
						$("#navUL li").click(function() {
		
							$("#navUL li").removeClass("cur");
							$(this).addClass("cur");
							$(".card").eq($(this).index()).show();
							$(".card").eq($(this).index()).siblings().hide();
		
						});
						//街道点击事件，委托
						$(".card").click(function(e){
							if(e.target.nodeName == "A"){
								$(".top_bar p span").text(e.target.innerText);
								$("#navUL>div").click();
							}
						})
					});
					$("#navUL>div").click(function() {
						$(".top_bar_nav").hide();
						$(".top_bar p").removeClass("top_bar_p_on");
					})
				}
				//导航-导航栏
				function topbarNav(){
					
					$(".top_bar_right a").not($("#color-red")).on("mouseenter mouseleave",function(e){
						if(e.type == "mouseenter"){
							$(this).css("color","#F03838");
						}else{
							$(this).css("color","#666666");
						}
					})
					
					$(".top_bar_right li").has("em").on("mouseenter mouseleave",function(e){
						if(e.type == "mouseenter"){
							$(this).find(".top_bar_right_nav").show();
							$(this).find("a,span").addClass("ahover");
						}else{
							$(this).find(".top_bar_right_nav").hide();
							$(this).find("a,span").removeClass("ahover");
						}
					})
					
					$(".top_bar_right li").has("em").each(function(){
						$(this).find(".top_bar_right_nav").not($(".item2 .top_bar_right_nav")).width($(this).width()-1);
					})
				}
				
				//-------搜索框----------
				//搜索框
				//购物车
				//热门导航
				function hotword(){
					$(".hotword li:eq(1) a").css("color","#F03838");
					$(".hotword li:gt(1) a").on("mouseenter mouseleave",function(e){
						if(e.type == "mouseenter"){
							$(this).css("color","#F03838");
						}else{
							$(this).css("color","#999999");
						}
					})
				}
				
				//-----------------导航2---------------------
				//左侧
				function nav2left(){
					//左侧导航栏
					var str=[-273,-592,-315,-294,-357,-336,-210,-252,-399,-231,-378];
					var strWhite = [-65,-570,-108,-86,-149,-128,-2,-44,-191,-23,-170];
					$(".nav2list li b").each(function(index){
						$(this).attr("style","background:url(../img/spriteSheet/nav_i.png) 0"+str[index]+"px no-repeat;");
					});
					
					//右侧显示板
					$(".list_table").each(function(index){
						$(this).css("top",-index*47);
					})
					//滑入滑出效果
					$(".nav2list li").on("mouseenter mouseleave",function(e){
						if(e.type == "mouseenter"){
							$(this).css("background","#F03838");
							$(this).find("a").css("color","white");
							$(this).find("s").attr("style","background:url(../img/spriteSheet/index.png) 0 -644px no-repeat;");
							$(this).find("b").attr("style","background:url(../img/spriteSheet/nav_i.png) 0"+strWhite[$(this).index()]+"px no-repeat;");
							$(this).find(".list_table").show();
						}else{
							$(this).css("background","white");
							$(this).find("a").css("color","#333333");
							$(this).find("s").attr("style","background:url(../img/spriteSheet/index.png) 0 -666px no-repeat;");
							$(this).find("b").attr("style","background:url(../img/spriteSheet/nav_i.png) 0"+str[$(this).index()]+"px no-repeat;");
							$(this).find(".list_table").hide();
						}
					})
					
					
				}
				//右侧
				function nav2right(){
					$(".nav2_right li:first a").css("color","#F03838");
					$(".nav2_right li:gt(0) a").on("mouseenter mouseleave",function(e){
						if(e.type == "mouseenter"){
							$(this).css("color","#F03838");
						}else{
							$(this).css("color","#000000");
						}
					})
					
					
				}
				
				//导航1
				topbarOp();
				topbarNav();
				//搜索
				hotword();
				//导航2
				nav2right();
				nav2left();
			},
			
			foot : function(){
				//------------------页脚-----------------------------------
				function foot(){
					var footstr=[0,-193,-384,-572,-761,-948];
					$(".service_logo").each(function(index,item){
						$(this).attr("style","background:url(../img/spriteSheet/footer.png) "+footstr[index]+"px 0 no-repeat");
					});
				}
				
				foot();
			}
			
		}
		
	});
*/