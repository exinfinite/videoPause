!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"vidPause",(function(){return a})),n.d(t,"vid_pause",(function(){return c}));var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.cfg=t}var t,n;return t=e,(n=[{key:"obInit",value:function(e){return new IntersectionObserver((function(t){t.forEach((function(t){return e.call(null,t)}))}),this.cfg)}},{key:"observe",value:function(e,t){var n=this.obInit(t);e.forEach((function(e){return n.observe(e)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.obsrv=new i(e),this.html5(),this.yt(),this}},{key:"html5",value:function(){this.obsrv.observe(Array.from(document.querySelectorAll("video")),(function(e){var t=e.target;if(!e.isIntersecting)return 4==t.readyState?t.pause():"";t.autoplay&&4==t.readyState&&t.play()}))}},{key:"yt",value:function(){var e=Array.from(document.querySelectorAll("iframe")).filter((function(e){var t=[e.src,e.dataset.src],n=t[1];return t[0].concat(n).includes("youtube.com/embed")}));this.obsrv.observe(e,(function(e){var t=e.target.contentWindow;e.isIntersecting||t.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}}])&&u(t.prototype,n),e}(),c=new a}])}));