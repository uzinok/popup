!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}window.onload=function(){new o(document.querySelector(".btn")),new o(document.querySelector('[data-BoltPopup="bolt-2"]')),new o(document.querySelector(".btn-2"))};var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.btn=e,this.popup=document.getElementById(this.btn.getAttribute("data-BoltPopup")),this.interactiveCSS="\n        a[href]:not([tabindex='-1']),\n        area[href]:not([tabindex='-1']),\n        input:not([disabled]):not([tabindex='-1']),\n        select:not([disabled]):not([tabindex='-1']),\n        textarea:not([disabled]):not([tabindex='-1']),\n        button:not([disabled]):not([tabindex='-1']),\n        iframe:not([tabindex='-1']),\n        [tabindex]:not([tabindex='-1']),\n        [contentEditable=true]:not([tabindex='-1'])\n      ",this.initB(),this.actions(),this.check=!1,this.scrollY=0,this.btnClick=this.btn}var e,o,i;return e=t,(o=[{key:"initB",value:function(){for(var t=this.popup.querySelectorAll(this.interactiveCSS),e=0;e<t.length;e++)t[e].getAttribute("tabindex")&&t[e].setAttribute("data-tabindex",t[e].getAttribute("tabindex")),t[e].setAttribute("tabindex",-1),t[e].setAttribute("data-p",!0)}},{key:"actions",value:function(){this.popup&&(document.addEventListener("click",this.trackСlick.bind(null,this),!1),document.addEventListener("keydown",this.monitorKeyboard.bind(null,this),!1))}},{key:"open",value:function(t){t.check=!0,t.popup.removeAttribute("aria-hidden"),t.popup.classList.remove("bolt-popup--hidden");for(var e=document.querySelectorAll(t.interactiveCSS),n=0;n<e.length;n++)e[n].getAttribute("tabindex")&&e[n].setAttribute("data-tabindex",e[n].getAttribute("tabindex")),e[n].setAttribute("tabindex",-1);for(var o=t.popup.querySelectorAll("[data-p]"),i=0;i<o.length;i++)o[i].getAttribute("data-tabindex")?o[i].setAttribute("tabindex",o[i].getAttribute("data-tabindex")):o[i].removeAttribute("tabindex");o[0].focus(),document.body.style.paddingRight=window.innerWidth-document.body.offsetWidth+"px",t.scrollY=window.scrollY||window.pageYOffset,document.body.style.top="-".concat(t.scrollY,"px"),setTimeout((function(){document.body.style.position="fixed"}),0),t.popup.setAttribute("tabindex","0")}},{key:"close",value:function(t){t.check=!1,t.popup.setAttribute("aria-hidden",!0),t.popup.classList.add("bolt-popup--hidden"),document.body.style.position="",document.body.style.top="",document.body.style.paddingRight="",window.scrollTo(0,t.scrollY);for(var e=t.popup.querySelectorAll("[data-p]"),n=0;n<e.length;n++)e[n].setAttribute("tabindex",-1);for(var o=document.querySelectorAll('[tabindex="-1"]'),i=0;i<o.length;i++)o[i].getAttribute("data-p")||(o[i].getAttribute("data-tabindex")?o[i].setAttribute("tabindex",o[i].getAttribute("data-tabindex")):o[i].removeAttribute("tabindex"));t.btnClick.focus(),t.popup.removeAttribute("tabindex")}},{key:"monitorKeyboard",value:function(t,e){t.check&&27==e.keyCode&&t.close(t)}},{key:"trackСlick",value:function(t,e){e.target==t.btn?(t.btnClick=e.target,t.open(t)):(e.target==t.popup.querySelector(".bolt-popup-close")&&t.check||e.target==t.popup&&e.target!=t.popup.querySelector(".bolt-popup-container"))&&t.check&&t.close(t)}}])&&n(e.prototype,o),i&&n(e,i),t}()}]);