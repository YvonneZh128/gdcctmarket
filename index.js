require(["js/config.js"], function() {
	require(["jquery", "swiper","common"], function($, Swiper,common) {
		$(function(){
			$("#loadHeader").load("html/header.html",function(){
				common.head();
				
			});
			
			Swiperon();
			tjmodel();
			floorBanner();
			$("#loadFooter").load("html/footer.html",function(){
				common.foot();
				$(".footmenu").show();
			});
			
		});
		function Swiperon() {
			this.init = function() {
				this.bannerswiper = new Swiper('#swiper1', {
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween: 30,
					effect: 'fade',
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
				
				
			}
			this.init();
		}

		function tjmodel() {

			$(".tjul").find("li").bind("mouseover", function() {
				$(this).width(290).siblings().width(165);
				$(this).find("img").stop().animate({
					left: -165
				}, 500).siblings().stop().animate({
					left: 0
				}, 100);
				//				$(this).addClass("tjactive").siblings().removeClass("tjactive");
			});

			$(".tjul").find("li").bind("mouseout", function() {

				if($(this).find("img").css("left", "-165px")) {
					$(this).find("img").stop().animate({
						left: 0
					}, 500).siblings().stop().animate({
						left: 0
					}, 100);
				}
				$(this).find("img").css("left", "-165px");

			});
		}

		function floorBanner(options) {
			this.init=function(){
				this.flone = new Swiper('#swiper3', {
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
				this.fltwoswiper=new Swiper('#swiper4',{
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
				this.flthree=new Swiper('#swiper5',{
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
				this.flfour=new Swiper('#swiper6',{
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
				this.flfive=new Swiper('#swiper2',{
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
			}
			this.init();
			this.navs=function(){
				var $flbabtn=$(".fl-babtn");
				var $currentIndex=0;
				var $faimg=$(".fl-baimg");
				
				$flbabtn.find("span").each(function(i){
					$(this).mouseover(function(){
						$(this).css("scale","1.2");
					});
					$(this).mouseout(function(){
						$(this).css("scale","1");
					})
					var _width=0;
					var st=setInterval(function(){
						var $this=$(this);
						
						$this.width(_width+"%");
						$this.addClass("btnon");
						if(_width==30){
							clearInterval(st);
						}
						_width+=1;
					},3000);
					
				});
				
				
			}
			this.navs();
			
			this.liimgmove=function(){
				var $listimg=$(".fl-on").find("li");
				$listimg.mouseover(function(){
					$(this).find("img").stop().animate({left:-5},100);
				});
				$listimg.mouseout(function(){
					$(this).find("img").stop().animate({left:0},100);
				})
			}
			this.liimgmove();
			
			//鼠标滑入透明度；
			this.imgover=function(){
				var $pimg=$(".p-img");
				$pimg.mouseover(function(){
					$(this).css("opacity","0.5");
				});
				$pimg.mouseout(function(){
					$(this).css("opacity","1");
				})
			}
			
			
			//商城社区部分轮播图
			//专题推荐部分
			this.markethome=function(){
				this.floorswiper = new Swiper('#swiperpanel', {
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 1500,
					loop: true,
					autoplay: 2000
				});
				return this;
			}
			this.markethome();
			
			//热门精选部分
			this.markethome=function(){
				this.floorswiper = new Swiper('#hotpanel', {
					pagination: '.swiper-pagination',
					paginationClickable: '.swiper-pagination',
					spaceBetween:0,
					speed: 2000,
					loop: true,
					autoplay: 3000
				});
				return this;
			}
			this.markethome();
		}
	});
});