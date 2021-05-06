(()=>{"use strict";var t=function(t,n){return{x:t.x+n.x,y:t.y+n.y}},n=function(t,n){return{x:n*t.x,y:n*t.y}},r=function(r,e){return t(r,n(e,-1))},e=function(t){var n=t.x,r=t.y;return Math.hypot(n,r)},o=function(t,n){return e(r(t,n))},a=function(t,n){return t.x*n.x+t.y*n.y};function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var u=function(t){return t.map((function(t){var n,r=function(t){if(Array.isArray(t))return t}(n=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return r[0]+r.slice(1).map((function(t){return" ".concat(t.x.toFixed(4)," ").concat(t.y.toFixed(4))})).join("")})).join(" ")},l=function(t,n){for(var r in n)t.setAttribute(r,n[r]);return t};function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var e,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(e=r.next()).done)&&(a.push(e.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,n)||s(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){if(t){if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,n):void 0}}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var p=function(t,n,r){for(var e=[],o=0;o<=t.length;o++)0===o?e.push(v(n,t[0],r)):o===t.length?e.push(v(t[t.length-1],n,r)):e.push((v(t[o-1],n,r)+v(n,t[o],r))/2);var a=Math.min.apply(Math,e);return{idx:e.indexOf(a),minScore:a}},m=function(t,n){for(var r=[],e=1;e<t.length;e++)r.push(v(t[e-1],t[e],n));return function(t){for(var n=[],r=Math.max.apply(Math,function(t){if(Array.isArray(t))return c(t)}(a=t.map((function(t){return t.length})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(t,n){if(t){if("string"==typeof t)return c(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,n):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=function(r){n.push(t.map((function(t){return t[r]})))},o=0;o<r;o++)e(o);var a;return n}([[r[0]].concat(r),[].concat(r,[r[r.length-1]])]).map((function(t){var n=f(t,2);return(n[0]+n[1])/2}))},d=function(t,n,r){var e=0,o=0;return n>0&&(e+=v(t[n-1],t[n],r),o++),n<t.length-1&&(e+=v(t[n],t[n+1],r),o++),o>0&&(e/=o),e},v=function(t,o){var i,u,l,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=null!==(i=c.distWeight)&&void 0!==i?i:1e-4,h=null!==(u=c.tangentWeight)&&void 0!==u?u:1,s=null!==(l=c.strokeJoinPenalty)&&void 0!==l?l:1e5,y=r(o.point,t.point),p=e(y);y=n(y,1/Math.max(1e-4,p));var m=t.tangent,d=o.tangent;return p*(f+h*Math.acos(a(m,y))*Math.acos(a(n(d,-1),y))/(Math.PI*Math.PI))+(t.path===o.path?0:s)};function g(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){if(t){if("string"==typeof t)return A(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,n):void 0}}function A(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function S(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var w,x=new(function(){function a(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),this.pathsByLength=g(document.querySelectorAll(t)).map((function(t){return{path:t,length:t.getTotalLength()}})),this.totalLength=this.pathsByLength.reduce((function(t,n){return t+n.length}),0)}var i,c;return i=a,(c=[{key:"fitCurve",value:function(t){var n,r=this.sampleAndOrder(t),e=this.fitCurveToPoints(r);return"path",n={d:u(e),fill:"none",stroke:"black","stroke-width":"1"},l(document.createElementNS("http://www.w3.org/2000/svg","path"),n)}},{key:"fitCurveToPoints",value:function(e){var a=[];e.forEach((function(i,u){var l=i.point,c=i.tangent;if(u>0){var f=o(l,e[u-1].point);a.push(r(l,n(c,f/3)))}if(a.push(l),u<e.length-1){var h=o(l,e[u+1].point);a.push(t(l,n(c,h/3)))}}));for(var i=[["M",a[0]]],u=1;u<a.length;u+=3)i.push(["C"].concat(g(a.slice(u,u+3))));return i}},{key:"sampleAndOrder",value:function(t,r){for(var e=[],o=0;o<t;o++)e.push(this.getSample());return function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=h(t),o=e.length,a=r.numIts||20*o,i=m(e,r),u=0;u<a;u++){var l=i.indexOf(Math.max.apply(Math,h(i)));i.splice(l,1);var c=f(e.splice(l,1),1)[0],s={point:c.point,tangent:n(c.tangent,-1)},y=p(e,c,r),v=r.allowFlippedTangents?p(e,s,r):{minScore:1/0};y.minScore<v.minScore?(e.splice(y.idx,0,c),i.splice(y.idx,0,d(e,y.idx))):(e.splice(v.idx,0,c),i.splice(v.idx,0,d(e,v.idx,r)))}return e}(e,r)}},{key:"getSample",value:function(){var t,o=this.totalLength,a=Math.random()*o,i=this.toLocalPath(a),u=i.t,l=i.path,c=l.getPointAtLength(u),f=l.getPointAtLength(Math.min(u+.001,l.getTotalLength()));return{point:c,tangent:(t=r(f,c),n(t,1/Math.max(1e-4,e(t)))),path:l}}},{key:"toLocalPath",value:function(t){var n,r=this.pathsByLength,e=r[0].path,o=t,a=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=b(t))){r&&(t=r);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}(r);try{for(a.s();!(n=a.n()).done;){var i=n.value,u=i.path,l=i.length;if(o<l){e=u;break}o-=l}}catch(t){a.e(t)}finally{a.f()}return{t:o,path:e}}}])&&S(i.prototype,c),a}())("#character path"),M=document.getElementById("canvas");!function t(){var n,r;w&&w.remove(),w=l(x.fitCurve(100),{fill:"none",stroke:(r=["#3881f5","#f59d38","#db3535","#d145ae","#2ab091"],r[Math.floor(Math.random()*r.length)]),"stroke-width":"3",pathLength:1,style:(n={"stroke-dasharray":1,"animation-name":"dash","animation-timing-function":"linear","animation-iteration-count":1,"animation-direction":"normal","animation-duration":"".concat(5,"s"),"animation-fill-mode":"forwards"},Object.keys(n).map((function(t){return"".concat(t,": ").concat(n[t],";")})).join(" "))}),M.appendChild(w),setTimeout(t,5200)}()})();