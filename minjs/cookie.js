"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cookie={get:function(t){for(var e=document.cookie.split("; "),o=0;o<e.length;o++){var n=e[o].split("=");if(n[0]==t)return n[1]}return null},set:function(t,e,o,n){if("number"==typeof o||"string"==typeof o)if(o=Number(o),isNaN(o))o=void 0;else{var r=new Date;r.setDate(r.getDate()+o)}return o instanceof Date||"object"!=(void 0===o?"undefined":_typeof(o))||(o=void 0),document.cookie=t+"="+e+";"+(o?"expires="+r+";":"")+(n?"path="+n+";":"")}};