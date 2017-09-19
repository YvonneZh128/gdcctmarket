require.config({
	baseUrl:"../js",
	paths:{
		"jquery":"myplugin/jquery-1.11.3",
		"common":"common"
		
	}
});
require(["jquery","common"],function($,com){
	$(function(){
		$("#loadheader").load("header.html",function(){
			com.head();
			com.dropdownlist();
		});
		
		//详情页中的具体；
		small2Big();
		prodimglist();
		//加载页面底部
		$("#loadfooter").load("footer.html",function(){
			com.foot();
		});
	});
	
	function small2Big(){
		var $smallImg = $("#smallImg");//小图
		var $bigImg = $("#bigImg")//大图
		var $smallCursor = $("#smallCursor");//小可视区域
		var $bigCursor = $("#bigCursor");//大可视区域
		
		//根据比例重新计算小可视区的大小
		//公式：  小可视区宽度/大可视区宽度 = 小图宽度/大图宽度
		$smallCursor.width($smallImg.outerWidth()*$bigCursor.outerWidth()/800);
		$smallCursor.height($smallImg.outerHeight()*$bigCursor.outerHeight()/800);
		//由于小可视区域会隐藏，因此不能使用offsetWidth属性来计算宽度。
		//smallCursor的边长
		diameter = $smallCursor.outerWidth();
		//大小可视区比例
		var scale = $bigCursor.outerWidth()/diameter;
		
		
		$smallImg.mousemove(function(evt){
			var e = evt || event;
			var disX = e.clientX - $smallImg.offset().left - diameter/2;
			var disY = e.pageY - $smallImg.offset().top - diameter/2;
			
			var leftSide = $smallImg.offset().left + diameter/2;
			var topSide = $smallImg.offset().top + diameter/2;
			
			var rightSide = $smallImg.offset().left + $smallImg.outerWidth() - diameter/2;
			var downSide = $smallImg.offset().top + $smallImg.outerHeight() - diameter/2;
			if(e.pageX >= leftSide && e.pageX <= rightSide && e.pageY >= topSide && e.pageY <= downSide) {
				$smallCursor.css("display","block");
				//小图的位置
				$bigCursor.css("display","block");
				$smallCursor.css("left",disX+"px");
				$smallCursor.css("top",disY+"px");
				//大图的位置
				$bigImg.css("left",-disX*scale+"px");
				$bigImg.css("top",-disY*scale+"px");
			} else {
				$bigCursor.css("display","none");
				$smallCursor.css("display","none");
			}
		});
	}
	
	//详情页中的img列表= =
	function prodimglist(){
		$(".prodimglist ul").find("li").each(function(i){
			$(this).mouseover(function(){
				$(this).css("border-color","#FF4000");
				$(this).siblings().removeClass("hover");
				$("#smallImg").css("background-image","url(../img/prodimg/small0"+(i+1)+".jpg)");
				$("#bigImg").src("../img/prodimg/big0"+(i+1)+".jpg");
			})
			$(this).mouseout(function(){
				$(this).css("border-color","#dedede");
			});
		});
	}
});
