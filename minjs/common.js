"use strict";require.config({baseUrl:"../js",paths:{jquery:"myplugin/jquery-1.11.3"}}),define(["jquery"],function(i){return{head:function(){this.logoEWM(),this.searchInfo(),this.prodMenu()},foot:function(){this.footendclick()},footendclick:function(){i(".footmenul").find("li").mouseover(function(){i(this).find("a").addClass("onhover").parent().siblings().find("a").removeClass("onhover");var n=i(this).index();i(".foot-sed").eq(n-1).show().siblings().hide()})},logoEWM:function(){return i(".closeEWM").click(function(){i(this).siblings().css("visibility","hidden")}),this},searchInfo:function(){return i("#sel").find("dt").mouseenter(function(){var n=i(this);i(this).siblings().show(),i(this).find("a").css("background","rgb(245,245,245)"),i(this).find("img").css("backgroundPositionY","-5px"),i(this).siblings().find("a").mouseenter(function(){i(this).css("background","rgb(245,245,245)"),i(this).click(function(){var s=n.find("a").text();n.find("a").text(i(this).text()),i(this).text(s),n.siblings().hide(),n.find("a").css("background","#FFF"),n.find("img").css("backgroundPositionY","0")})}),i(this).siblings().find("a").mouseleave(function(){i(this).css("background","#fff")})}),i("#sel").mouseleave(function(){i(this).find("dt").find("a").css("background","#FFF"),i(this).find("dt").find("img").css("backgroundPositionY","0"),i(this).find("dd").hide()}),i(".searchtxt").focus(function(){i(this).val("请输入您想要找的信息")&&i(this).val("")}),i(".searchtxt").blur(function(){i(this).val("")&&i(this).val("请输入您想要找的信息")}),this},prodMenu:function(n){i(".downmenu li").each(function(n){i(this).mouseenter(function(){i(this).find(".menuone").stop().animate({left:10},500),i(this).find(".next").hide(),i(this).find(".menutwo").css({display:"block",top:-n*i(this).height()+"px"}),console.log(n+"ok"),i(this).siblings().find(".menutwo").hide()})}),i(".downmenu li").each(function(){i(this).mouseleave(function(){i(this).find(".next").show(),i(this).find(".menuone").stop().animate({left:0},500),i(this).find(".menutwo").css("display","none")})})},dropdownlist:function(){var n=i(".allProd");return n.find(".downmenu").css("display","none"),n.mouseover(function(){i(this).find(".downmenu").show()}),n.mouseout(function(){i(this).find(".downmenu").hide()}),this}}});