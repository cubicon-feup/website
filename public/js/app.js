!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var r={},n={},t={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,s=function(e,r){for(var n,t=[],o=(i.test(r)?e+"/"+r:r).split("/"),s=0,a=o.length;s<a;s++)n=o[s],".."===n?t.pop():"."!==n&&""!==n&&t.push(n);return t.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},u=function(r){return function(n){var t=s(a(r),n);return e.require(t,r)}},c=function(e,r){var t=h&&h.createHot(e),o={id:e,exports:{},hot:t};return n[e]=o,r(o.exports,u(e),o),o.exports},l=function(e){return t[e]?l(t[e]):e},f=function(e,r){return l(s(a(e),r))},d=function(e,t){null==t&&(t="/");var i=l(e);if(o.call(n,i))return n[i].exports;if(o.call(r,i))return c(i,r[i]);throw new Error("Cannot find module '"+e+"' from '"+t+"'")};d.alias=function(e,r){t[r]=e};var p=/\.[^.\/]+$/,w=/\/index(\.[^\/]+)?$/,v=function(e){if(p.test(e)){var r=e.replace(p,"");o.call(t,r)&&t[r].replace(p,"")!==r+"/index"||(t[r]=e)}if(w.test(e)){var n=e.replace(w,"");o.call(t,n)||(t[n]=e)}};d.register=d.define=function(e,t){if(e&&"object"==typeof e)for(var i in e)o.call(e,i)&&d.register(i,e[i]);else r[e]=t,delete n[e],v(e)},d.list=function(){var e=[];for(var n in r)o.call(r,n)&&e.push(n);return e};var h=e._hmr&&new e._hmr(f,d,r,n);d._cache=n,d.hmr=h&&h.wrap,d.brunch=!0,e.require=d}}(),function(){var e;"undefined"==typeof window?this:window;require.register("js/initialize.js",function(e,r,n){"use strict";document.addEventListener("DOMContentLoaded",function(){"addEventListener"in window&&(window.addEventListener("load",function(){document.body.className=document.body.className.replace(/\bis-loading\b/,"");var e="cubicon.xyz";e===window.location.host&&"https:"!==window.location.protocol&&(window.location=window.location.toString().replace(/^http:/,"https:"))}),document.body.className+=navigator.userAgent.match(/(MSIE|rv:11\.0)/)?" is-ie":"")})}),require.register("js/someFile.js",function(e,r,n){"use strict";function t(){console.log("some function")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=t}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,r,n){window.jQuery=r("jquery"),window.$=r("jquery"),window.bootstrap=r("bootstrap")})}(),require("___globals___"),require("js/initialize");