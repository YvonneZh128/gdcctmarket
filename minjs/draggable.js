"use strict";!function(){function t(t){for(var e=t.offsetLeft,o=t.offsetTop;t.offsetParent;)e+=t.offsetParent.offsetLeft,o+=t.offsetParent.offsetTop,t=t.offsetParent;return{left:e,top:o}}function e(t,e){return t.currentStyle?t.currentStyle[e]:getComputedStyle(t)[e]}function o(t,e){if(!e)return t;var o={};for(var n in t)o[n]=t[n];for(var n in e)o[n]=e[n];return o}var n=window.VBArray?function(t,e,o){t.attachEvent("on"+e,o)}:function(t,e,o,n){t.addEventListener(e,o,!!n)};window.draggable=function(f,a){if("absolute"==e(f,"position")||"fixed"==e(f,"position")){var i=o({x:!0,y:!0,limit:!0,paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,callback:function(){}},a);if(i.limit)var r={minLeft:i.paddingLeft-i.marginLeft,maxLeft:f.offsetParent.offsetWidth-f.offsetWidth-i.paddingRight-i.marginLeft+i.marginRight,minTop:i.paddingTop-i.marginTop,maxTop:f.offsetParent.offsetHeight-f.offsetHeight-i.paddingBottom-i.marginTop+i.marginBottom};var m={x:t(f).left,y:t(f).top};n(f,"mousedown",function(e){function o(e){var o={pageX:(e=e||event).clientX+document.body.scrollLeft||document.documentElement.scrollLeft,pageY:e.clientY+document.body.scrollTop||document.documentElement.scrollTop};i.limit?(i.x&&(f.style.left=Math.min(r.maxLeft,Math.max(r.minLeft,o.pageX-t(f.offsetParent).left-a.offsetX))+"px"),i.y&&(f.style.top=Math.min(r.maxTop,Math.max(r.minTop,o.pageY-t(f.offsetParent).top-a.offsetY))+"px")):(i.x&&(f.style.left=o.pageX-t(f.offsetParent).left-a.offsetX+"px"),i.y&&(f.style.top=o.pageY-t(f.offsetParent).top-a.offsetY+"px")),i.callback.call(f,r,{x:t(f).left-m.x,y:t(f).top-m.y})}var a={pageX:(e=e||event).clientX+document.body.scrollLeft||document.documentElement.scrollLeft,pageY:e.clientY+document.body.scrollTop||document.documentElement.scrollTop};a.offsetX=a.pageX-t(f).left+i.marginLeft,a.offsetY=a.pageY-t(f).top+i.marginTop,n(document,"mousemove",o),n(document,"mouseup",function(t){document.removeEventListener("mousemove",o)})})}}}();