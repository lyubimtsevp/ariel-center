!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=oe.type(e);return"function"!==n&&!oe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e,t,n){if(oe.isFunction(t))return oe.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return oe.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ge.test(t))return oe.filter(t,e,n);t=oe.filter(t,e)}return oe.grep(e,function(e){return Z.call(t,e)>-1!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={};return oe.each(e.match(we)||[],function(e,n){t[n]=!0}),t}function s(){G.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s),oe.ready()}function a(){this.expando=oe.expando+a.uid++}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(De,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Se.test(n)?oe.parseJSON(n):n)}catch(i){}Ne.set(e,t,n)}else n=void 0;return n}function l(e,t,n,r){var i,o=1,s=20,a=r?function(){return r.cur()}:function(){return oe.css(e,t,"")},u=a(),l=n&&n[3]||(oe.cssNumber[t]?"":"px"),c=(oe.cssNumber[t]||"px"!==l&&+u)&&Ae.exec(oe.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do o=o||".5",c/=o,oe.style(e,t,c+l);while(o!==(o=a()/u)&&1!==o&&--s)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function c(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&oe.nodeName(e,t)?oe.merge([e],n):n}function f(e,t){for(var n=0,r=e.length;n<r;n++)Ee.set(e[n],"globalEval",!t||Ee.get(t[n],"globalEval"))}function p(e,t,n,r,i){for(var o,s,a,u,l,p,d=t.createDocumentFragment(),h=[],g=0,v=e.length;g<v;g++)if(o=e[g],o||0===o)if("object"===oe.type(o))oe.merge(h,o.nodeType?[o]:o);else if(Re.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Oe.exec(o)||["",""])[1].toLowerCase(),u=Pe[a]||Pe._default,s.innerHTML=u[1]+oe.htmlPrefilter(o)+u[2],p=u[0];p--;)s=s.lastChild;oe.merge(h,s.childNodes),s=d.firstChild,s.textContent=""}else h.push(t.createTextNode(o));for(d.textContent="",g=0;o=h[g++];)if(r&&oe.inArray(o,r)>-1)i&&i.push(o);else if(l=oe.contains(o.ownerDocument,o),s=c(d.appendChild(o),"script"),l&&f(s),n)for(p=0;o=s[p++];)Fe.test(o.type||"")&&n.push(o);return d}function d(){return!0}function h(){return!1}function g(){try{return G.activeElement}catch(e){}}function v(e,t,n,r,i,o){var s,a;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(a in t)v(e,a,n,r,t[a],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=h;else if(!i)return e;return 1===o&&(s=i,i=function(e){return oe().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=oe.guid++)),e.each(function(){oe.event.add(this,t,i,r,n)})}function m(e,t){return oe.nodeName(e,"table")&&oe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function y(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function x(e){var t=Xe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(Ee.hasData(e)&&(o=Ee.access(e),s=Ee.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)oe.event.add(t,i,l[i][n])}Ne.hasData(e)&&(a=Ne.access(e),u=oe.extend({},a),Ne.set(t,u))}}function w(e,t){var n=t.nodeName.toLowerCase();"input"===n&&He.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function T(e,t,n,r){t=J.apply([],t);var i,o,s,a,u,l,f=0,d=e.length,h=d-1,g=t[0],v=oe.isFunction(g);if(v||d>1&&"string"==typeof g&&!re.checkClone&&_e.test(g))return e.each(function(i){var o=e.eq(i);v&&(t[0]=g.call(this,i,o.html())),T(o,t,n,r)});if(d&&(i=p(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=oe.map(c(i,"script"),y),a=s.length;f<d;f++)u=i,f!==h&&(u=oe.clone(u,!0,!0),a&&oe.merge(s,c(u,"script"))),n.call(e[f],u,f);if(a)for(l=s[s.length-1].ownerDocument,oe.map(s,x),f=0;f<a;f++)u=s[f],Fe.test(u.type||"")&&!Ee.access(u,"globalEval")&&oe.contains(l,u)&&(u.src?oe._evalUrl&&oe._evalUrl(u.src):oe.globalEval(u.textContent.replace(ze,"")))}return e}function C(e,t,n){for(var r,i=t?oe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||oe.cleanData(c(r)),r.parentNode&&(n&&oe.contains(r.ownerDocument,r)&&f(c(r,"script")),r.parentNode.removeChild(r));return e}function k(e,t){var n=oe(t.createElement(e)).appendTo(t.body),r=oe.css(n[0],"display");return n.detach(),r}function E(e){var t=G,n=Ve[e];return n||(n=k(e,t),"none"!==n&&n||(Ue=(Ue||oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ue[0].contentDocument,t.write(),t.close(),n=k(e,t),Ue.detach()),Ve[e]=n),n}function N(e,t,n){var r,i,o,s,a=e.style;return n=n||Qe(e),s=n?n.getPropertyValue(t)||n[t]:void 0,""!==s&&void 0!==s||oe.contains(e.ownerDocument,e)||(s=oe.style(e,t)),n&&!re.pixelMarginRight()&&Ge.test(s)&&Ye.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o),void 0!==s?s+"":s}function S(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function D(e){if(e in rt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in rt)return e}function j(e,t,n){var r=Ae.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function A(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;o<4;o+=2)"margin"===n&&(s+=oe.css(e,n+qe[o],!0,i)),r?("content"===n&&(s-=oe.css(e,"padding"+qe[o],!0,i)),"margin"!==n&&(s-=oe.css(e,"border"+qe[o]+"Width",!0,i))):(s+=oe.css(e,"padding"+qe[o],!0,i),"padding"!==n&&(s+=oe.css(e,"border"+qe[o]+"Width",!0,i)));return s}function q(t,n,r){var i=!0,o="width"===n?t.offsetWidth:t.offsetHeight,s=Qe(t),a="border-box"===oe.css(t,"boxSizing",!1,s);if(G.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(o=Math.round(100*t.getBoundingClientRect()[n])),o<=0||null==o){if(o=N(t,n,s),(o<0||null==o)&&(o=t.style[n]),Ge.test(o))return o;i=a&&(re.boxSizingReliable()||o===t.style[n]),o=parseFloat(o)||0}return o+A(t,n,r||(a?"border":"content"),i,s)+"px"}function L(e,t){for(var n,r,i,o=[],s=0,a=e.length;s<a;s++)r=e[s],r.style&&(o[s]=Ee.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Le(r)&&(o[s]=Ee.access(r,"olddisplay",E(r.nodeName)))):(i=Le(r),"none"===n&&i||Ee.set(r,"olddisplay",i?n:oe.css(r,"display"))));for(s=0;s<a;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function O(){return e.setTimeout(function(){it=void 0}),it=oe.now()}function F(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=qe[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function P(e,t,n){for(var r,i=(I.tweeners[t]||[]).concat(I.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function R(e,t,n){var r,i,o,s,a,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&Le(e),g=Ee.get(e,"fxshow");n.queue||(a=oe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,oe.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=oe.css(e,"display"),c="none"===l?Ee.get(e,"olddisplay")||E(e.nodeName):l,"inline"===c&&"none"===oe.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],st.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||oe.style(e,r)}else l=void 0;if(oe.isEmptyObject(p))"inline"===("none"===l?E(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=Ee.access(e,"fxshow",{}),o&&(g.hidden=!h),h?oe(e).show():f.done(function(){oe(e).hide()}),f.done(function(){var t;Ee.remove(e,"fxshow");for(t in p)oe.style(e,t,p[t])});for(r in p)s=P(h?g[r]:0,r,f),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function M(e,t){var n,r,i,o,s;for(n in e)if(r=oe.camelCase(n),i=t[r],o=e[n],oe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=oe.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function I(e,t,n){var r,i,o=0,s=I.prefilters.length,a=oe.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=it||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;s<u;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),o<1&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{},easing:oe.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=oe.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props;for(M(c,l.opts.specialEasing);o<s;o++)if(r=I.prefilters[o].call(l,e,c,l.opts))return oe.isFunction(r.stop)&&(oe._queueHooks(l.elem,l.opts.queue).stop=oe.proxy(r.stop,r)),r;return oe.map(c,P,l),oe.isFunction(l.opts.start)&&l.opts.start.call(e,l),oe.fx.timer(oe.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function W(e){return e.getAttribute&&e.getAttribute("class")||""}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(we)||[];if(oe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function B(e,t,n,r){function i(a){var u;return o[a]=!0,oe.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===Nt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function _(e,t){var n,r,i=oe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&oe.extend(!0,e,r),e}function X(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}function z(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function U(e,t,n,r){var i;if(oe.isArray(t))oe.each(t,function(t,i){n||At.test(e)?r(e,i):U(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==oe.type(t))r(e,t);else for(i in t)U(e+"["+i+"]",t[i],n,r)}function V(e){return oe.isWindow(e)?e:9===e.nodeType&&e.defaultView}var Y=[],G=e.document,Q=Y.slice,J=Y.concat,K=Y.push,Z=Y.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,re={},ie="2.2.2",oe=function(e,t){return new oe.fn.init(e,t)},se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,ue=/-([\da-z])/gi,le=function(e,t){return t.toUpperCase()};oe.fn=oe.prototype={jquery:ie,constructor:oe,selector:"",length:0,toArray:function(){return Q.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Q.call(this)},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return oe.each(this,e)},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Q.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:K,sort:Y.sort,splice:Y.splice},oe.extend=oe.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||oe.isFunction(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(oe.isPlainObject(r)||(i=oe.isArray(r)))?(i?(i=!1,o=n&&oe.isArray(n)?n:[]):o=n&&oe.isPlainObject(n)?n:{},s[t]=oe.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},oe.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!oe.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"constructor")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=oe.trim(e),e&&(1===e.indexOf("use strict")?(t=G.createElement("script"),t.text=e,G.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(ue,le)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0;if(n(e))for(r=e.length;i<r&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(se,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):K.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:Z.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;o<s;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o,s=0,a=[];if(n(e))for(i=e.length;s<i;s++)o=t(e[s],s,r),null!=o&&a.push(o);else for(s in e)o=t(e[s],s,r),null!=o&&a.push(o);return J.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),oe.isFunction(e))return r=Q.call(arguments,2),i=function(){return e.apply(t||this,r.concat(Q.call(arguments)))},i.guid=e.guid=e.guid||oe.guid++,i},now:Date.now,support:re}),"function"==typeof Symbol&&(oe.fn[Symbol.iterator]=Y[Symbol.iterator]),oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h=t&&t.ownerDocument,g=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;if(!r&&((t?t.ownerDocument||t:W)!==L&&q(t),t=t||L,O)){if(11!==g&&(l=me.exec(e)))if(i=l[1]){if(9===g){if(!(s=t.getElementById(i)))return n;if(s.id===i)return n.push(s),n}else if(h&&(s=h.getElementById(i))&&M(t,s)&&s.id===i)return n.push(s),n}else{if(l[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(w.qsa&&!z[e+" "]&&(!F||!F.test(e))){if(1!==g)h=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(xe,"\\$&"):t.setAttribute("id",a=I),f=E(e),o=f.length,u=pe.test(a)?"#"+a:"[id='"+a+"']";o--;)f[o]=u+" "+p(f[o]);d=f.join(","),h=ye.test(e)&&c(t.parentNode)||t}if(d)try{return K.apply(n,h.querySelectorAll(d)),n}catch(v){}finally{a===I&&t.removeAttribute("id")}}}return S(e.replace(ae,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[I]=!0,e}function i(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=B++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l,c=[$,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[I]||(t[I]={}),u=l[t.uniqueID]||(l[t.uniqueID]={}),(a=u[r])&&a[0]===$&&a[1]===o)return c[2]=a[2];if(u[r]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function v(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)));return s}function m(e,t,n,i,o,s){return i&&!i[I]&&(i=m(i)),o&&!o[I]&&(o=m(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,m=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?m:v(m,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y;if(n&&n(y,x,a,u),i)for(l=v(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=v(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):K.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];a<i;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[I]){for(r=++a;r<i&&!T.relative[e[r].type];r++);return m(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,a<r&&y(e.slice(a,r)),r<i&&y(e=e.slice(r)),r<i&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],m=[],y=D,x=r||o&&T.find.TAG("*",l),b=$+=null==y?1:Math.random()||.1,w=x.length;for(l&&(D=s===L||s||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,s||c.ownerDocument===L||(q(c),a=!O);p=e[f++];)if(p(c,s||L,a)){u.push(c);break}l&&($=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,s,a);if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=Q.call(u));m=v(m)}K.apply(u,m),l&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&($=b,D=y),g};return i?r(s):s}var b,w,T,C,k,E,N,S,D,j,A,q,L,H,O,F,P,R,M,I="sizzle"+1*new Date,W=e.document,$=0,B=0,_=n(),X=n(),z=n(),U=function(e,t){return e===t&&(A=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,K=G.push,Z=G.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,xe=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Te=function(){q()};try{K.apply(G=Z.call(W.childNodes),W.childNodes),G[W.childNodes.length].nodeType}catch(Ce){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},q=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:W;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=L.documentElement,O=!k(L),(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ve.test(L.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=I,!L.getElementsByName||!L.getElementsByName(I).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(be,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&O)return t.getElementsByClassName(e)},P=[],F=[],(w.qsa=ve.test(L.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=ve.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),P.push("!=",oe)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),t=ve.test(H.compareDocumentPosition),M=t||ve.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===W&&M(W,e)?-1:t===L||t.ownerDocument===W&&M(W,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===L?-1:t===L?1:i?-1:o?1:j?ee(j,e)-ee(j,t):0;if(i===o)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?s(a[r],u[r]):a[r]===W?-1:u[r]===W?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&q(e),n=n.replace(ce,"='$1']"),w.matchesSelector&&O&&!z[n+" "]&&(!P||!P.test(n))&&(!F||!F.test(n)))try{var r=R.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&q(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&q(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,j=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return j=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!u&&!a,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(p=v,f=p[I]||(p[I]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[$,d,x];break}}else if(y&&(p=t,f=p[I]||(p[I]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d),x===!1)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++x||(y&&(f=p[I]||(p[I]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[$,x]),p!==t)););return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[I]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=ee(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(ae,"$1"));return i[I]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,we),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,we).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){
return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,E=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=X[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=T.preFilter;a;){r&&!(i=ue.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=le.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ae," ")}),a=a.slice(r.length));for(s in T.filter)!(i=de[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):X(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[I]?r.push(o):i.push(o);o=z(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&E(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(t=(T.find.ID(s.matches[0].replace(be,we),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(be,we),ye.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return K.apply(n,r),n;break}}return(l||N(e,f))(r,t,!O,n,!t||ye.test(e)&&c(t.parentNode)||t),n},w.sortStable=I.split("").sort(U).join("")===I,w.detectDuplicates=!!A,q(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);oe.find=ce,oe.expr=ce.selectors,oe.expr[":"]=oe.expr.pseudos,oe.uniqueSort=oe.unique=ce.uniqueSort,oe.text=ce.getText,oe.isXMLDoc=ce.isXML,oe.contains=ce.contains;var fe=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&oe(e).is(n))break;r.push(e)}return r},pe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},de=oe.expr.match.needsContext,he=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,ge=/^.[^:#\[\.,]*$/;oe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?oe.find.matchesSelector(r,e)?[r]:[]:oe.find.matches(e,oe.grep(t,function(e){return 1===e.nodeType}))},oe.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(oe(e).filter(function(){for(t=0;t<n;t++)if(oe.contains(i[t],this))return!0}));for(t=0;t<n;t++)oe.find(e,i[t],r);return r=this.pushStack(n>1?oe.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&de.test(e)?oe(e):e||[],!1).length}});var ve,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ye=oe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||ve,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof oe?t[0]:t,oe.merge(this,oe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),he.test(r[1])&&oe.isPlainObject(t))for(r in t)oe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=G.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=G,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?void 0!==n.ready?n.ready(e):e(oe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))};ye.prototype=oe.fn,ve=oe(G);var xe=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};oe.fn.extend({has:function(e){var t=oe(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(oe.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=de.test(e)||"string"!=typeof e?oe(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&oe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?oe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?Z.call(oe(e),this[0]):Z.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(oe.uniqueSort(oe.merge(this.get(),oe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return fe(e,"parentNode")},parentsUntil:function(e,t,n){return fe(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return fe(e,"nextSibling")},prevAll:function(e){return fe(e,"previousSibling")},nextUntil:function(e,t,n){return fe(e,"nextSibling",n)},prevUntil:function(e,t,n){return fe(e,"previousSibling",n)},siblings:function(e){return pe((e.parentNode||{}).firstChild,e)},children:function(e){return pe(e.firstChild)},contents:function(e){return e.contentDocument||oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,r){var i=oe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),this.length>1&&(be[e]||oe.uniqueSort(i),xe.test(e)&&i.reverse()),this.pushStack(i)}});var we=/\S+/g;oe.Callbacks=function(e){e="string"==typeof e?o(e):oe.extend({},e);var t,n,r,i,s=[],a=[],u=-1,l=function(){for(i=e.once,r=t=!0;a.length;u=-1)for(n=a.shift();++u<s.length;)s[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=s.length,n=!1);e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(u=s.length-1,a.push(n)),function r(t){oe.each(t,function(t,n){oe.isFunction(n)?e.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==oe.type(n)&&r(n)})}(arguments),n&&!t&&l()),this},remove:function(){return oe.each(arguments,function(e,t){for(var n;(n=oe.inArray(t,s,n))>-1;)s.splice(n,1),n<=u&&u--}),this},has:function(e){return e?oe.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=a=[],n||(s=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,o){var s=oe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,r):r}},i={};return r.pipe=r.then,oe.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Q.call(arguments),s=o.length,a=1!==s||e&&oe.isFunction(e.promise)?s:0,u=1===a?e:oe.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Q.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);i<s;i++)o[i]&&oe.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--a;return a||u.resolveWith(r,o),u.promise()}});var Te;oe.fn.ready=function(e){return oe.ready.promise().done(e),this},oe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){(e===!0?--oe.readyWait:oe.isReady)||(oe.isReady=!0,e!==!0&&--oe.readyWait>0||(Te.resolveWith(G,[oe]),oe.fn.triggerHandler&&(oe(G).triggerHandler("ready"),oe(G).off("ready"))))}}),oe.ready.promise=function(t){return Te||(Te=oe.Deferred(),"complete"===G.readyState||"loading"!==G.readyState&&!G.documentElement.doScroll?e.setTimeout(oe.ready):(G.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s))),Te.promise(t)},oe.ready.promise();var Ce=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===oe.type(n)){i=!0;for(a in n)Ce(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,oe.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(oe(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},ke=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};a.uid=1,a.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!ke(e))return{};var t=e[this.expando];return t||(t={},ke(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[t]=n;else for(r in t)i[r]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,oe.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{oe.isArray(t)?r=t.concat(t.map(oe.camelCase)):(i=oe.camelCase(t),t in o?r=[t,i]:(r=i,r=r in o?[r]:r.match(we)||[])),n=r.length;for(;n--;)delete o[r[n]]}(void 0===t||oe.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!oe.isEmptyObject(t)}};var Ee=new a,Ne=new a,Se=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,De=/[A-Z]/g;oe.extend({hasData:function(e){return Ne.hasData(e)||Ee.hasData(e)},data:function(e,t,n){return Ne.access(e,t,n)},removeData:function(e,t){Ne.remove(e,t)},_data:function(e,t,n){return Ee.access(e,t,n)},_removeData:function(e,t){Ee.remove(e,t)}}),oe.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=Ne.get(o),1===o.nodeType&&!Ee.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=oe.camelCase(r.slice(5)),u(o,r,i[r])));Ee.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Ne.set(this,e)}):Ce(this,function(t){var n,r;if(o&&void 0===t){if(n=Ne.get(o,e)||Ne.get(o,e.replace(De,"-$&").toLowerCase()),void 0!==n)return n;if(r=oe.camelCase(e),n=Ne.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else r=oe.camelCase(e),this.each(function(){var n=Ne.get(this,r);Ne.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&Ne.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ne.remove(this,e)})}}),oe.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Ee.get(e,t),n&&(!r||oe.isArray(n)?r=Ee.access(e,t,oe.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),r=n.length,i=n.shift(),o=oe._queueHooks(e,t),s=function(){oe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Ee.get(e,n)||Ee.access(e,n,{empty:oe.Callbacks("once memory").add(function(){Ee.remove(e,[t+"queue",n])})})}}),oe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?oe.queue(this[0],e):void 0===t?this:this.each(function(){var n=oe.queue(this,e,t);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=oe.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=Ee.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var je=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ae=new RegExp("^(?:([+-])=|)("+je+")([a-z%]*)$","i"),qe=["Top","Right","Bottom","Left"],Le=function(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)},He=/^(?:checkbox|radio)$/i,Oe=/<([\w:-]+)/,Fe=/^$|\/(?:java|ecma)script/i,Pe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pe.optgroup=Pe.option,Pe.tbody=Pe.tfoot=Pe.colgroup=Pe.caption=Pe.thead,Pe.th=Pe.td;var Re=/<|&#?\w+;/;!function(){var e=G.createDocumentFragment(),t=e.appendChild(G.createElement("div")),n=G.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),re.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",re.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Me=/^key/,Ie=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,We=/^([^.]*)(?:\.(.+)|)/;oe.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=Ee.get(e);if(v)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=oe.guid++),(u=v.events)||(u=v.events={}),(s=v.handle)||(s=v.handle=function(t){return"undefined"!=typeof oe&&oe.event.triggered!==t.type?oe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(we)||[""],l=t.length;l--;)a=We.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d&&(f=oe.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=oe.event.special[d]||{},c=oe.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&oe.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,s)!==!1||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),oe.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=Ee.hasData(e)&&Ee.get(e);if(v&&(u=v.events)){for(t=(t||"").match(we)||[""],l=t.length;l--;)if(a=We.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=oe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,v.handle)!==!1||oe.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)oe.event.remove(e,d+t[l],n,r,!0);oe.isEmptyObject(u)&&Ee.remove(e,"handle events")}},dispatch:function(e){e=oe.event.fix(e);var t,n,r,i,o,s=[],a=Q.call(arguments),u=(Ee.get(this,"events")||{})[e.type]||[],l=oe.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(s=oe.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((oe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],n=0;n<a;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?oe(i,this).index(u)>-1:oe.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||G,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[oe.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Ie.test(i)?this.mouseHooks:Me.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new oe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=G),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==g()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===g()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&oe.nodeName(this,"input"))return this.click(),!1},_default:function(e){return oe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},oe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},oe.Event=function(e,t){return this instanceof oe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?d:h):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),void(this[oe.expando]=!0)):new oe.Event(e,t)},oe.Event.prototype={constructor:oe.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=d,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=d,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=d,e&&e.stopImmediatePropagation(),this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||oe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),oe.fn.extend({on:function(e,t,n,r){return v(this,e,t,n,r)},one:function(e,t,n,r){return v(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,oe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=h),this.each(function(){oe.event.remove(this,e,n,t)})}});var $e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Be=/<script|<style|<link/i,_e=/checked\s*(?:[^=]|=\s*.checked.)/i,Xe=/^true\/(.*)/,ze=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;oe.extend({htmlPrefilter:function(e){return e.replace($e,"<$1></$2>")},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=oe.contains(e.ownerDocument,e);if(!(re.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(s=c(a),o=c(e),r=0,i=o.length;r<i;r++)w(o[r],s[r]);if(t)if(n)for(o=o||c(e),s=s||c(a),r=0,i=o.length;r<i;r++)b(o[r],s[r]);else b(e,a);return s=c(a,"script"),s.length>0&&f(s,!u&&c(e,"script")),a},cleanData:function(e){for(var t,n,r,i=oe.event.special,o=0;void 0!==(n=e[o]);o++)if(ke(n)){if(t=n[Ee.expando]){if(t.events)for(r in t.events)i[r]?oe.event.remove(n,r):oe.removeEvent(n,r,t.handle);n[Ee.expando]=void 0}n[Ne.expando]&&(n[Ne.expando]=void 0)}}}),oe.fn.extend({domManip:T,detach:function(e){return C(this,e,!0)},remove:function(e){return C(this,e)},text:function(e){return Ce(this,function(e){return void 0===e?oe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return T(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.appendChild(e)}})},prepend:function(){return T(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=m(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return T(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return T(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(oe.cleanData(c(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return Ce(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Be.test(e)&&!Pe[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=oe.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(oe.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return T(this,arguments,function(t){var n=this.parentNode;oe.inArray(this,e)<0&&(oe.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,r=[],i=oe(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),oe(i[s])[t](n),K.apply(r,n.get());return this.pushStack(r)}});var Ue,Ve={HTML:"block",BODY:"block"},Ye=/^margin/,Ge=new RegExp("^("+je+")(?!px)[a-z%]+$","i"),Qe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Je=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i},Ke=G.documentElement;!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Ke.appendChild(s);var t=e.getComputedStyle(a);n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,a.style.marginRight="50%",i="4px"===t.marginRight,Ke.removeChild(s)}var n,r,i,o,s=G.createElement("div"),a=G.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",re.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),oe.extend(re,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},pixelMarginRight:function(){return null==r&&t(),i},reliableMarginLeft:function(){return null==r&&t(),o},reliableMarginRight:function(){var t,n=a.appendChild(G.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Ke.appendChild(s),t=!parseFloat(e.getComputedStyle(n).marginRight),Ke.removeChild(s),a.removeChild(n),t}}))}();var Ze=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],rt=G.createElement("div").style;oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=N(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=oe.camelCase(t),u=e.style;return t=oe.cssProps[a]||(oe.cssProps[a]=D(a)||a),s=oe.cssHooks[t]||oe.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ae.exec(n))&&i[1]&&(n=l(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(oe.cssNumber[a]?"":"px")),re.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,s,a=oe.camelCase(t);return t=oe.cssProps[a]||(oe.cssProps[a]=D(a)||a),s=oe.cssHooks[t]||oe.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=N(e,t,r)),"normal"===i&&t in tt&&(i=tt[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,r){if(n)return Ze.test(oe.css(e,"display"))&&0===e.offsetWidth?Je(e,et,function(){return q(e,t,r)}):q(e,t,r)},set:function(e,n,r){var i,o=r&&Qe(e),s=r&&A(e,t,r,"border-box"===oe.css(e,"boxSizing",!1,o),o);return s&&(i=Ae.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=oe.css(e,t)),j(e,n,s)}}}),oe.cssHooks.marginLeft=S(re.reliableMarginLeft,function(e,t){if(t)return(parseFloat(N(e,"marginLeft"))||e.getBoundingClientRect().left-Je(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),oe.cssHooks.marginRight=S(re.reliableMarginRight,function(e,t){if(t)return Je(e,{display:"inline-block"},N,[e,"marginRight"])}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+qe[r]+t]=o[r]||o[r-2]||o[0];return i}},Ye.test(e)||(oe.cssHooks[e+t].set=j)}),oe.fn.extend({css:function(e,t){return Ce(this,function(e,t,n){var r,i,o={},s=0;if(oe.isArray(t)){for(r=Qe(e),i=t.length;s<i;s++)o[t[s]]=oe.css(e,t[s],!1,r);return o}return void 0!==n?oe.style(e,t,n):oe.css(e,t)},e,t,arguments.length>1)},show:function(){return L(this,!0)},hide:function(){return L(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Le(this)?oe(this).show():oe(this).hide()})}}),oe.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||oe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=oe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[oe.cssProps[e.prop]]&&!oe.cssHooks[e.prop]?e.elem[e.prop]=e.now:oe.style(e.elem,e.prop,e.now+e.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},oe.fx=H.prototype.init,oe.fx.step={};var it,ot,st=/^(?:toggle|show|hide)$/,at=/queueHooks$/;oe.Animation=oe.extend(I,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return l(n.elem,e,Ae.exec(t),n),n}]},tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.match(we);for(var n,r=0,i=e.length;r<i;r++)n=e[r],I.tweeners[n]=I.tweeners[n]||[],I.tweeners[n].unshift(t)},prefilters:[R],prefilter:function(e,t){t?I.prefilters.unshift(e):I.prefilters.push(e)}}),oe.speed=function(e,t,n){var r=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)},r},oe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Le).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=oe.isEmptyObject(e),o=oe.speed(t,n,r),s=function(){var t=I(this,oe.extend({},e),o);(i||Ee.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=oe.timers,s=Ee.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&at.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||oe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Ee.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=oe.timers,s=r?r.length:0;for(n.finish=!0,oe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,r,i)}}),oe.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),oe.timers=[],oe.fx.tick=function(){var e,t=0,n=oe.timers;for(it=oe.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);
n.length||oe.fx.stop(),it=void 0},oe.fx.timer=function(e){oe.timers.push(e),e()?oe.fx.start():oe.timers.pop()},oe.fx.interval=13,oe.fx.start=function(){ot||(ot=e.setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){e.clearInterval(ot),ot=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fn.delay=function(t,n){return t=oe.fx?oe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),n=t.appendChild(G.createElement("option"));e.type="checkbox",re.checkOn=""!==e.value,re.optSelected=n.selected,t.disabled=!0,re.optDisabled=!n.disabled,e=G.createElement("input"),e.value="t",e.type="radio",re.radioValue="t"===e.value}();var ut,lt=oe.expr.attrHandle;oe.fn.extend({attr:function(e,t){return Ce(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})}}),oe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?oe.prop(e,t,n):(1===o&&oe.isXMLDoc(e)||(t=t.toLowerCase(),i=oe.attrHooks[t]||(oe.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void oe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=oe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!re.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(we);if(o&&1===e.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,oe.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),ut={set:function(e,t,n){return t===!1?oe.removeAttr(e,n):e.setAttribute(n,n),n}},oe.each(oe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=lt[t]||oe.find.attr;lt[t]=function(e,t,r){var i,o;return r||(o=lt[t],lt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,lt[t]=o),i}});var ct=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;oe.fn.extend({prop:function(e,t){return Ce(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[oe.propFix[e]||e]})}}),oe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&oe.isXMLDoc(e)||(t=oe.propFix[t]||t,i=oe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=oe.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),re.optSelected||(oe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),oe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){oe.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;oe.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,u=0;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,W(this)))});if("string"==typeof e&&e)for(t=e.match(we)||[];n=this[u++];)if(i=W(n),r=1===n.nodeType&&(" "+i+" ").replace(pt," ")){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,u=0;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,W(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(we)||[];n=this[u++];)if(i=W(n),r=1===n.nodeType&&(" "+i+" ").replace(pt," ")){for(s=0;o=t[s++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");a=oe.trim(r),i!==a&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,W(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=oe(this),o=e.match(we)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=W(this),t&&Ee.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Ee.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+W(n)+" ").replace(pt," ").indexOf(t)>-1)return!0;return!1}});var dt=/\r/g,ht=/[\x20\t\r\n\f]+/g;oe.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=oe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,oe(this).val()):e,null==i?i="":"number"==typeof i?i+="":oe.isArray(i)&&(i=oe.map(i,function(e){return null==e?"":e+""})),t=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=oe.valHooks[i.type]||oe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(dt,""):null==n?"":n)}}}),oe.extend({valHooks:{option:{get:function(e){var t=oe.find.attr(e,"value");return null!=t?t:oe.trim(oe.text(e)).replace(ht," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,s=o?null:[],a=o?i+1:r.length,u=i<0?a:o?i:0;u<a;u++)if(n=r[u],(n.selected||u===i)&&(re.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=oe.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=oe.inArray(oe.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]={set:function(e,t){if(oe.isArray(t))return e.checked=oe.inArray(oe(e).val(),t)>-1}},re.checkOn||(oe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var gt=/^(?:focusinfocus|focusoutblur)$/;oe.extend(oe.event,{trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||G],d=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||G,3!==r.nodeType&&8!==r.nodeType&&!gt.test(d+oe.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[oe.expando]?t:new oe.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:oe.makeArray(n,[t]),f=oe.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!oe.isWindow(r)){for(u=f.delegateType||d,gt.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||G)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(Ee.get(s,"events")||{})[t.type]&&Ee.get(s,"handle"),c&&c.apply(s,n),c=l&&s[l],c&&c.apply&&ke(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!ke(r)||l&&oe.isFunction(r[d])&&!oe.isWindow(r)&&(a=r[l],a&&(r[l]=null),oe.event.triggered=d,r[d](),oe.event.triggered=void 0,a&&(r[l]=a)),t.result}},simulate:function(e,t,n){var r=oe.extend(new oe.Event,n,{type:e,isSimulated:!0});oe.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}}),oe.fn.extend({trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return oe.event.trigger(e,t,n,!0)}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),oe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),re.focusin="onfocusin"in e,re.focusin||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){oe.event.simulate(t,e.target,oe.event.fix(e))};oe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Ee.access(r,t);i||r.addEventListener(e,n,!0),Ee.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ee.access(r,t)-1;i?Ee.access(r,t,i):(r.removeEventListener(e,n,!0),Ee.remove(r,t))}}});var vt=e.location,mt=oe.now(),yt=/\?/;oe.parseJSON=function(e){return JSON.parse(e+"")},oe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+t),n};var xt=/#.*$/,bt=/([?&])_=[^&]*/,wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Tt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ct=/^(?:GET|HEAD)$/,kt=/^\/\//,Et={},Nt={},St="*/".concat("*"),Dt=G.createElement("a");Dt.href=vt.href,oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vt.href,type:"GET",isLocal:Tt.test(vt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":St,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_(_(e,oe.ajaxSettings),t):_(oe.ajaxSettings,e)},ajaxPrefilter:$(Et),ajaxTransport:$(Nt),ajax:function(t,n){function r(t,n,r,a){var l,f,y,x,w,C=n;2!==b&&(b=2,u&&e.clearTimeout(u),i=void 0,s=a||"",T.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(x=X(p,T,r)),x=z(p,x,T,l),l?(p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(oe.lastModified[o]=w),w=T.getResponseHeader("etag"),w&&(oe.etag[o]=w)),204===t||"HEAD"===p.type?C="nocontent":304===t?C="notmodified":(C=x.state,f=x.data,y=x.error,l=!y)):(y=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(n||C)+"",l?g.resolveWith(d,[f,C,T]):g.rejectWith(d,[T,C,y]),T.statusCode(m),m=void 0,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[T,p,l?f:y]),v.fireWith(d,[T,C]),c&&(h.trigger("ajaxComplete",[T,p]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,s,a,u,l,c,f,p=oe.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?oe(d):oe.event,g=oe.Deferred(),v=oe.Callbacks("once memory"),m=p.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=wt.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)m[t]=[m[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=v.add,T.success=T.done,T.error=T.fail,p.url=((t||p.url||vt.href)+"").replace(xt,"").replace(kt,vt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=oe.trim(p.dataType||"*").toLowerCase().match(we)||[""],null==p.crossDomain){l=G.createElement("a");try{l.href=p.url,l.href=l.href,p.crossDomain=Dt.protocol+"//"+Dt.host!=l.protocol+"//"+l.host}catch(C){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=oe.param(p.data,p.traditional)),B(Et,p,n,T),2===b)return T;c=oe.event&&p.global,c&&0===oe.active++&&oe.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Ct.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(yt.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=bt.test(o)?o.replace(bt,"$1_="+mt++):o+(yt.test(o)?"&":"?")+"_="+mt++)),p.ifModified&&(oe.lastModified[o]&&T.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&T.setRequestHeader("If-None-Match",oe.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+St+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=B(Nt,p,n,T)){if(T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),2===b)return T;p.async&&p.timeout>0&&(u=e.setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(y,r)}catch(C){if(!(b<2))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return oe.get(e,t,n,"json")},getScript:function(e,t){return oe.get(e,void 0,t,"script")}}),oe.each(["get","post"],function(e,t){oe[t]=function(e,n,r,i){return oe.isFunction(n)&&(i=i||r,r=n,n=void 0),oe.ajax(oe.extend({url:e,type:t,dataType:i,data:n,success:r},oe.isPlainObject(e)&&e))}}),oe._evalUrl=function(e){return oe.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},oe.fn.extend({wrapAll:function(e){var t;return oe.isFunction(e)?this.each(function(t){oe(this).wrapAll(e.call(this,t))}):(this[0]&&(t=oe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()}}),oe.expr.filters.hidden=function(e){return!oe.expr.filters.visible(e)},oe.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var jt=/%20/g,At=/\[\]$/,qt=/\r?\n/g,Lt=/^(?:submit|button|image|reset|file)$/i,Ht=/^(?:input|select|textarea|keygen)/i;oe.param=function(e,t){var n,r=[],i=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){i(this.name,this.value)});else for(n in e)U(n,e[n],t,i);return r.join("&").replace(jt,"+")},oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&Ht.test(this.nodeName)&&!Lt.test(e)&&(this.checked||!He.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(qt,"\r\n")}}):{name:t.name,value:n.replace(qt,"\r\n")}}).get()}}),oe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var Ot={0:200,1223:204},Ft=oe.ajaxSettings.xhr();re.cors=!!Ft&&"withCredentials"in Ft,re.ajax=Ft=!!Ft,oe.ajaxTransport(function(t){var n,r;if(re.cors||Ft&&!t.crossDomain)return{send:function(i,o){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(s in i)a.setRequestHeader(s,i[s]);n=function(e){return function(){n&&(n=r=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Ot[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),r=a.onerror=n("error"),void 0!==a.onabort?a.onabort=r:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(u){if(n)throw u}},abort:function(){n&&n()}}}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=oe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Pt=[],Rt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Pt.pop()||oe.expando+"_"+mt++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(Rt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=oe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Rt,"$1"+i):t.jsonp!==!1&&(t.url+=(yt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||oe.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){void 0===o?oe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Pt.push(i)),s&&oe.isFunction(o)&&o(s[0]),s=o=void 0}),"script"}),oe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||G;var r=he.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=p([e],t,i),i&&i.length&&oe(i).remove(),oe.merge([],r.childNodes))};var Mt=oe.fn.load;oe.fn.load=function(e,t,n){if("string"!=typeof e&&Mt)return Mt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>-1&&(r=oe.trim(e.slice(a)),e=e.slice(0,a)),oe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&oe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?oe("<div>").append(oe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){s.each(function(){n.apply(s,o||[e.responseText,t,e])})}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length},oe.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=oe.css(e,"position"),f=oe(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=oe.css(e,"top"),u=oe.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),oe.isFunction(t)&&(t=t.call(e,n,oe.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},oe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)return t=o.documentElement,oe.contains(t,r)?(i=r.getBoundingClientRect(),n=V(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===oe.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(r=e.offset()),r.top+=oe.css(e[0],"borderTopWidth",!0),r.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-oe.css(n,"marginTop",!0),left:t.left-r.left-oe.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||Ke})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;oe.fn[e]=function(r){return Ce(this,function(e,r,i){var o=V(e);return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),oe.each(["top","left"],function(e,t){oe.cssHooks[t]=S(re.pixelPosition,function(e,n){if(n)return n=N(e,t),Ge.test(n)?oe(e).position()[t]+"px":n})}),oe.each({Height:"height",Width:"width"},function(e,t){oe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){oe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return Ce(this,function(t,n,r){var i;return oe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?oe.css(t,n,s):oe.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),oe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),oe.fn.andSelf=oe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return oe});var It=e.jQuery,Wt=e.$;return oe.noConflict=function(t){return e.$===oe&&(e.$=Wt),t&&e.jQuery===oe&&(e.jQuery=It),oe},t||(e.jQuery=e.$=oe),oe});
jQuery.noConflict();
/*  Prototype JavaScript framework, version 1.7
 *  (c) 2005-2010 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

var Prototype = {

  Version: '1.7',

  Browser: (function(){
    var ua = navigator.userAgent;
    var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
    return {
      IE:             !!window.attachEvent && !isOpera,
      Opera:          isOpera,
      WebKit:         ua.indexOf('AppleWebKit/') > -1,
      Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
      MobileSafari:   /Apple.*Mobile/.test(ua)
    }
  })(),

  BrowserFeatures: {
    XPath: !!document.evaluate,

    SelectorsAPI: !!document.querySelector,

    ElementExtensions: (function() {
      var constructor = window.Element || window.HTMLElement;
      return !!(constructor && constructor.prototype);
    })(),
    SpecificElementExtensions: (function() {
      if (typeof window.HTMLDivElement !== 'undefined')
        return true;

      var div = document.createElement('div'),
          form = document.createElement('form'),
          isSupported = false;

      if (div['__proto__'] && (div['__proto__'] !== form['__proto__'])) {
        isSupported = true;
      }

      div = form = null;

      return isSupported;
    })()
  },

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  emptyFunction: function() { },

  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;


var Abstract = { };


var Try = {
  these: function() {
    var returnValue;

    for (var i = 0, length = arguments.length; i < length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) { }
    }

    return returnValue;
  }
};

/* Based on Alex Arnell's inheritance implementation. */

var Class = (function() {

  var IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 }) {
      if (p === 'toString') return false;
    }
    return true;
  })();

  function subclass() {};
  function create() {
    var parent = null, properties = $A(arguments);
    if (Object.isFunction(properties[0]))
      parent = properties.shift();

    function klass() {
      this.initialize.apply(this, arguments);
    }

    Object.extend(klass, Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }

    for (var i = 0, length = properties.length; i < length; i++)
      klass.addMethods(properties[i]);

    if (!klass.prototype.initialize)
      klass.prototype.initialize = Prototype.emptyFunction;

    klass.prototype.constructor = klass;
    return klass;
  }

  function addMethods(source) {
    var ancestor   = this.superclass && this.superclass.prototype,
        properties = Object.keys(source);

    if (IS_DONTENUM_BUGGY) {
      if (source.toString != Object.prototype.toString)
        properties.push("toString");
      if (source.valueOf != Object.prototype.valueOf)
        properties.push("valueOf");
    }

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i], value = source[property];
      if (ancestor && Object.isFunction(value) &&
          value.argumentNames()[0] == "$super") {
        var method = value;
        value = (function(m) {
          return function() { return ancestor[m].apply(this, arguments); };
        })(property).wrap(method);

        value.valueOf = method.valueOf.bind(method);
        value.toString = method.toString.bind(method);
      }
      this.prototype[property] = value;
    }

    return this;
  }

  return {
    create: create,
    Methods: {
      addMethods: addMethods
    }
  };
})();
(function() {

  var _toString = Object.prototype.toString,
      NULL_TYPE = 'Null',
      UNDEFINED_TYPE = 'Undefined',
      BOOLEAN_TYPE = 'Boolean',
      NUMBER_TYPE = 'Number',
      STRING_TYPE = 'String',
      OBJECT_TYPE = 'Object',
      FUNCTION_CLASS = '[object Function]',
      BOOLEAN_CLASS = '[object Boolean]',
      NUMBER_CLASS = '[object Number]',
      STRING_CLASS = '[object String]',
      ARRAY_CLASS = '[object Array]',
      DATE_CLASS = '[object Date]',
      NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON &&
        typeof JSON.stringify === 'function' &&
        JSON.stringify(0) === '0' &&
        typeof JSON.stringify(Prototype.K) === 'undefined';

  function Type(o) {
    switch(o) {
      case null: return NULL_TYPE;
      case (void 0): return UNDEFINED_TYPE;
    }
    var type = typeof o;
    switch(type) {
      case 'boolean': return BOOLEAN_TYPE;
      case 'number':  return NUMBER_TYPE;
      case 'string':  return STRING_TYPE;
    }
    return OBJECT_TYPE;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  function inspect(object) {
    try {
      if (isUndefined(object)) return 'undefined';
      if (object === null) return 'null';
      return object.inspect ? object.inspect() : String(object);
    } catch (e) {
      if (e instanceof RangeError) return '...';
      throw e;
    }
  }

  function toJSON(value) {
    return Str('', { '': value }, []);
  }

  function Str(key, holder, stack) {
    var value = holder[key],
        type = typeof value;

    if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    var _class = _toString.call(value);

    switch (_class) {
      case NUMBER_CLASS:
      case BOOLEAN_CLASS:
      case STRING_CLASS:
        value = value.valueOf();
    }

    switch (value) {
      case null: return 'null';
      case true: return 'true';
      case false: return 'false';
    }

    type = typeof value;
    switch (type) {
      case 'string':
        return value.inspect(true);
      case 'number':
        return isFinite(value) ? String(value) : 'null';
      case 'object':

        for (var i = 0, length = stack.length; i < length; i++) {
          if (stack[i] === value) { throw new TypeError(); }
        }
        stack.push(value);

        var partial = [];
        if (_class === ARRAY_CLASS) {
          for (var i = 0, length = value.length; i < length; i++) {
            var str = Str(i, value, stack);
            partial.push(typeof str === 'undefined' ? 'null' : str);
          }
          partial = '[' + partial.join(',') + ']';
        } else {
          var keys = Object.keys(value);
          for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i], str = Str(key, value, stack);
            if (typeof str !== "undefined") {
               partial.push(key.inspect(true)+ ':' + str);
             }
          }
          partial = '{' + partial.join(',') + '}';
        }
        stack.pop();
        return partial;
    }
  }

  function stringify(object) {
    return JSON.stringify(object);
  }

  function toQueryString(object) {
    return $H(object).toQueryString();
  }

  function toHTML(object) {
    return object && object.toHTML ? object.toHTML() : String.interpret(object);
  }

  function keys(object) {
    if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
    var results = [];
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        results.push(property);
      }
    }
    return results;
  }

  function values(object) {
    var results = [];
    for (var property in object)
      results.push(object[property]);
    return results;
  }

  function clone(object) {
    return extend({ }, object);
  }

  function isElement(object) {
    return !!(object && object.nodeType == 1);
  }

  function isArray(object) {
    return _toString.call(object) === ARRAY_CLASS;
  }

  var hasNativeIsArray = (typeof Array.isArray == 'function')
    && Array.isArray([]) && !Array.isArray({});

  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }

  function isHash(object) {
    return object instanceof Hash;
  }

  function isFunction(object) {
    return _toString.call(object) === FUNCTION_CLASS;
  }

  function isString(object) {
    return _toString.call(object) === STRING_CLASS;
  }

  function isNumber(object) {
    return _toString.call(object) === NUMBER_CLASS;
  }

  function isDate(object) {
    return _toString.call(object) === DATE_CLASS;
  }

  function isUndefined(object) {
    return typeof object === "undefined";
  }

  extend(Object, {
    extend:        extend,
    inspect:       inspect,
    toJSON:        NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,
    toQueryString: toQueryString,
    toHTML:        toHTML,
    keys:          Object.keys || keys,
    values:        values,
    clone:         clone,
    isElement:     isElement,
    isArray:       isArray,
    isHash:        isHash,
    isFunction:    isFunction,
    isString:      isString,
    isNumber:      isNumber,
    isDate:        isDate,
    isUndefined:   isUndefined
  });
})();
Object.extend(Function.prototype, (function() {
  var slice = Array.prototype.slice;

  function update(array, args) {
    var arrayLength = array.length, length = args.length;
    while (length--) array[arrayLength + length] = args[length];
    return array;
  }

  function merge(array, args) {
    array = slice.call(array, 0);
    return update(array, args);
  }

  function argumentNames() {
    var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
      .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
      .replace(/\s+/g, '').split(',');
    return names.length == 1 && !names[0] ? [] : names;
  }

  function bind(context) {
    if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
    var __method = this, args = slice.call(arguments, 1);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(context, a);
    }
  }

  function bindAsEventListener(context) {
    var __method = this, args = slice.call(arguments, 1);
    return function(event) {
      var a = update([event || window.event], args);
      return __method.apply(context, a);
    }
  }

  function curry() {
    if (!arguments.length) return this;
    var __method = this, args = slice.call(arguments, 0);
    return function() {
      var a = merge(args, arguments);
      return __method.apply(this, a);
    }
  }

  function delay(timeout) {
    var __method = this, args = slice.call(arguments, 1);
    timeout = timeout * 1000;
    return window.setTimeout(function() {
      return __method.apply(__method, args);
    }, timeout);
  }

  function defer() {
    var args = update([0.01], arguments);
    return this.delay.apply(this, args);
  }

  function wrap(wrapper) {
    var __method = this;
    return function() {
      var a = update([__method.bind(this)], arguments);
      return wrapper.apply(this, a);
    }
  }

  function methodize() {
    if (this._methodized) return this._methodized;
    var __method = this;
    return this._methodized = function() {
      var a = update([this], arguments);
      return __method.apply(null, a);
    };
  }

  return {
    argumentNames:       argumentNames,
    bind:                bind,
    bindAsEventListener: bindAsEventListener,
    curry:               curry,
    delay:               delay,
    defer:               defer,
    wrap:                wrap,
    methodize:           methodize
  }
})());



(function(proto) {


  function toISOString() {
    return this.getUTCFullYear() + '-' +
      (this.getUTCMonth() + 1).toPaddedString(2) + '-' +
      this.getUTCDate().toPaddedString(2) + 'T' +
      this.getUTCHours().toPaddedString(2) + ':' +
      this.getUTCMinutes().toPaddedString(2) + ':' +
      this.getUTCSeconds().toPaddedString(2) + 'Z';
  }


  function toJSON() {
    return this.toISOString();
  }

  if (!proto.toISOString) proto.toISOString = toISOString;
  if (!proto.toJSON) proto.toJSON = toJSON;

})(Date.prototype);


RegExp.prototype.match = RegExp.prototype.test;

RegExp.escape = function(str) {
  return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
var PeriodicalExecuter = Class.create({
  initialize: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;

    this.registerCallback();
  },

  registerCallback: function() {
    this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  execute: function() {
    this.callback(this);
  },

  stop: function() {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  },

  onTimerEvent: function() {
    if (!this.currentlyExecuting) {
      try {
        this.currentlyExecuting = true;
        this.execute();
        this.currentlyExecuting = false;
      } catch(e) {
        this.currentlyExecuting = false;
        throw e;
      }
    }
  }
});
Object.extend(String, {
  interpret: function(value) {
    return value == null ? '' : String(value);
  },
  specialChar: {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  }
});

Object.extend(String.prototype, (function() {
  var NATIVE_JSON_PARSE_SUPPORT = window.JSON &&
    typeof JSON.parse === 'function' &&
    JSON.parse('{"test": true}').test;

  function prepareReplacement(replacement) {
    if (Object.isFunction(replacement)) return replacement;
    var template = new Template(replacement);
    return function(match) { return template.evaluate(match) };
  }

  function gsub(pattern, replacement) {
    var result = '', source = this, match;
    replacement = prepareReplacement(replacement);

    if (Object.isString(pattern))
      pattern = RegExp.escape(pattern);

    if (!(pattern.length || pattern.source)) {
      replacement = replacement('');
      return replacement + source.split('').join(replacement) + replacement;
    }

    while (source.length > 0) {
      if (match = source.match(pattern)) {
        result += source.slice(0, match.index);
        result += String.interpret(replacement(match));
        source  = source.slice(match.index + match[0].length);
      } else {
        result += source, source = '';
      }
    }
    return result;
  }

  function sub(pattern, replacement, count) {
    replacement = prepareReplacement(replacement);
    count = Object.isUndefined(count) ? 1 : count;

    return this.gsub(pattern, function(match) {
      if (--count < 0) return match[0];
      return replacement(match);
    });
  }

  function scan(pattern, iterator) {
    this.gsub(pattern, iterator);
    return String(this);
  }

  function truncate(length, truncation) {
    length = length || 30;
    truncation = Object.isUndefined(truncation) ? '...' : truncation;
    return this.length > length ?
      this.slice(0, length - truncation.length) + truncation : String(this);
  }

  function strip() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  function stripTags() {
    return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
  }

  function stripScripts() {
    return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
  }

  function extractScripts() {
    var matchAll = new RegExp(Prototype.ScriptFragment, 'img'),
        matchOne = new RegExp(Prototype.ScriptFragment, 'im');
    return (this.match(matchAll) || []).map(function(scriptTag) {
      return (scriptTag.match(matchOne) || ['', ''])[1];
    });
  }

  function evalScripts() {
    return this.extractScripts().map(function(script) { return eval(script) });
  }

  function escapeHTML() {
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function unescapeHTML() {
    return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  }


  function toQueryParams(separator) {
    var match = this.strip().match(/([^?#]*)(#.*)?$/);
    if (!match) return { };

    return match[1].split(separator || '&').inject({ }, function(hash, pair) {
      if ((pair = pair.split('='))[0]) {
        var key = decodeURIComponent(pair.shift()),
            value = pair.length > 1 ? pair.join('=') : pair[0];

        if (value != undefined) value = decodeURIComponent(value);

        if (key in hash) {
          if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
          hash[key].push(value);
        }
        else hash[key] = value;
      }
      return hash;
    });
  }

  function toArray() {
    return this.split('');
  }

  function succ() {
    return this.slice(0, this.length - 1) +
      String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
  }

  function times(count) {
    return count < 1 ? '' : new Array(count + 1).join(this);
  }

  function camelize() {
    return this.replace(/-+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  }

  function capitalize() {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
  }

  function underscore() {
    return this.replace(/::/g, '/')
               .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
               .replace(/([a-z\d])([A-Z])/g, '$1_$2')
               .replace(/-/g, '_')
               .toLowerCase();
  }

  function dasherize() {
    return this.replace(/_/g, '-');
  }

  function inspect(useDoubleQuotes) {
    var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
      if (character in String.specialChar) {
        return String.specialChar[character];
      }
      return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
    });
    if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
    return "'" + escapedString.replace(/'/g, '\\\'') + "'";
  }

  function unfilterJSON(filter) {
    return this.replace(filter || Prototype.JSONFilter, '$1');
  }

  function isJSON() {
    var str = this;
    if (str.blank()) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
  }

  function evalJSON(sanitize) {
    var json = this.unfilterJSON(),
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    if (cx.test(json)) {
      json = json.replace(cx, function (a) {
        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      });
    }
    try {
      if (!sanitize || json.isJSON()) return eval('(' + json + ')');
    } catch (e) { }
    throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
  }

  function parseJSON() {
    var json = this.unfilterJSON();
    return JSON.parse(json);
  }

  function include(pattern) {
    return this.indexOf(pattern) > -1;
  }

  function startsWith(pattern) {
    return this.lastIndexOf(pattern, 0) === 0;
  }

  function endsWith(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.indexOf(pattern, d) === d;
  }

  function empty() {
    return this == '';
  }

  function blank() {
    return /^\s*$/.test(this);
  }

  function interpolate(object, pattern) {
    return new Template(this, pattern).evaluate(object);
  }

  return {
    gsub:           gsub,
    sub:            sub,
    scan:           scan,
    truncate:       truncate,
    strip:          String.prototype.trim || strip,
    stripTags:      stripTags,
    stripScripts:   stripScripts,
    extractScripts: extractScripts,
    evalScripts:    evalScripts,
    escapeHTML:     escapeHTML,
    unescapeHTML:   unescapeHTML,
    toQueryParams:  toQueryParams,
    parseQuery:     toQueryParams,
    toArray:        toArray,
    succ:           succ,
    times:          times,
    camelize:       camelize,
    capitalize:     capitalize,
    underscore:     underscore,
    dasherize:      dasherize,
    inspect:        inspect,
    unfilterJSON:   unfilterJSON,
    isJSON:         isJSON,
    evalJSON:       NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
    include:        include,
    startsWith:     startsWith,
    endsWith:       endsWith,
    empty:          empty,
    blank:          blank,
    interpolate:    interpolate
  };
})());

var Template = Class.create({
  initialize: function(template, pattern) {
    this.template = template.toString();
    this.pattern = pattern || Template.Pattern;
  },

  evaluate: function(object) {
    if (object && Object.isFunction(object.toTemplateReplacements))
      object = object.toTemplateReplacements();

    return this.template.gsub(this.pattern, function(match) {
      if (object == null) return (match[1] + '');

      var before = match[1] || '';
      if (before == '\\') return match[2];

      var ctx = object, expr = match[3],
          pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;

      match = pattern.exec(expr);
      if (match == null) return before;

      while (match != null) {
        var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
        ctx = ctx[comp];
        if (null == ctx || '' == match[3]) break;
        expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
        match = pattern.exec(expr);
      }

      return before + String.interpret(ctx);
    });
  }
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;

var $break = { };

var Enumerable = (function() {
  function each(iterator, context) {
    var index = 0;
    try {
      this._each(function(value) {
        iterator.call(context, value, index++);
      });
    } catch (e) {
      if (e != $break) throw e;
    }
    return this;
  }

  function eachSlice(number, iterator, context) {
    var index = -number, slices = [], array = this.toArray();
    if (number < 1) return array;
    while ((index += number) < array.length)
      slices.push(array.slice(index, index+number));
    return slices.collect(iterator, context);
  }

  function all(iterator, context) {
    iterator = iterator || Prototype.K;
    var result = true;
    this.each(function(value, index) {
      result = result && !!iterator.call(context, value, index);
      if (!result) throw $break;
    });
    return result;
  }

  function any(iterator, context) {
    iterator = iterator || Prototype.K;
    var result = false;
    this.each(function(value, index) {
      if (result = !!iterator.call(context, value, index))
        throw $break;
    });
    return result;
  }

  function collect(iterator, context) {
    iterator = iterator || Prototype.K;
    var results = [];
    this.each(function(value, index) {
      results.push(iterator.call(context, value, index));
    });
    return results;
  }

  function detect(iterator, context) {
    var result;
    this.each(function(value, index) {
      if (iterator.call(context, value, index)) {
        result = value;
        throw $break;
      }
    });
    return result;
  }

  function findAll(iterator, context) {
    var results = [];
    this.each(function(value, index) {
      if (iterator.call(context, value, index))
        results.push(value);
    });
    return results;
  }

  function grep(filter, iterator, context) {
    iterator = iterator || Prototype.K;
    var results = [];

    if (Object.isString(filter))
      filter = new RegExp(RegExp.escape(filter));

    this.each(function(value, index) {
      if (filter.match(value))
        results.push(iterator.call(context, value, index));
    });
    return results;
  }

  function include(object) {
    if (Object.isFunction(this.indexOf))
      if (this.indexOf(object) != -1) return true;

    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  }

  function inGroupsOf(number, fillWith) {
    fillWith = Object.isUndefined(fillWith) ? null : fillWith;
    return this.eachSlice(number, function(slice) {
      while(slice.length < number) slice.push(fillWith);
      return slice;
    });
  }

  function inject(memo, iterator, context) {
    this.each(function(value, index) {
      memo = iterator.call(context, memo, value, index);
    });
    return memo;
  }

  function invoke(method) {
    var args = $A(arguments).slice(1);
    return this.map(function(value) {
      return value[method].apply(value, args);
    });
  }

  function max(iterator, context) {
    iterator = iterator || Prototype.K;
    var result;
    this.each(function(value, index) {
      value = iterator.call(context, value, index);
      if (result == null || value >= result)
        result = value;
    });
    return result;
  }

  function min(iterator, context) {
    iterator = iterator || Prototype.K;
    var result;
    this.each(function(value, index) {
      value = iterator.call(context, value, index);
      if (result == null || value < result)
        result = value;
    });
    return result;
  }

  function partition(iterator, context) {
    iterator = iterator || Prototype.K;
    var trues = [], falses = [];
    this.each(function(value, index) {
      (iterator.call(context, value, index) ?
        trues : falses).push(value);
    });
    return [trues, falses];
  }

  function pluck(property) {
    var results = [];
    this.each(function(value) {
      results.push(value[property]);
    });
    return results;
  }

  function reject(iterator, context) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator.call(context, value, index))
        results.push(value);
    });
    return results;
  }

  function sortBy(iterator, context) {
    return this.map(function(value, index) {
      return {
        value: value,
        criteria: iterator.call(context, value, index)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }).pluck('value');
  }

  function toArray() {
    return this.map();
  }

  function zip() {
    var iterator = Prototype.K, args = $A(arguments);
    if (Object.isFunction(args.last()))
      iterator = args.pop();

    var collections = [this].concat(args).map($A);
    return this.map(function(value, index) {
      return iterator(collections.pluck(index));
    });
  }

  function size() {
    return this.toArray().length;
  }

  function inspect() {
    return '#<Enumerable:' + this.toArray().inspect() + '>';
  }









  return {
    each:       each,
    eachSlice:  eachSlice,
    all:        all,
    every:      all,
    any:        any,
    some:       any,
    collect:    collect,
    map:        collect,
    detect:     detect,
    findAll:    findAll,
    select:     findAll,
    filter:     findAll,
    grep:       grep,
    include:    include,
    member:     include,
    inGroupsOf: inGroupsOf,
    inject:     inject,
    invoke:     invoke,
    max:        max,
    min:        min,
    partition:  partition,
    pluck:      pluck,
    reject:     reject,
    sortBy:     sortBy,
    toArray:    toArray,
    entries:    toArray,
    zip:        zip,
    size:       size,
    inspect:    inspect,
    find:       detect
  };
})();

function $A(iterable) {
  if (!iterable) return [];
  if ('toArray' in Object(iterable)) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}


function $w(string) {
  if (!Object.isString(string)) return [];
  string = string.strip();
  return string ? string.split(/\s+/) : [];
}

Array.from = $A;


(function() {
  var arrayProto = Array.prototype,
      slice = arrayProto.slice,
      _each = arrayProto.forEach; // use native browser JS 1.6 implementation if available

  function each(iterator, context) {
    for (var i = 0, length = this.length >>> 0; i < length; i++) {
      if (i in this) iterator.call(context, this[i], i, this);
    }
  }
  if (!_each) _each = each;

  function clear() {
    this.length = 0;
    return this;
  }

  function first() {
    return this[0];
  }

  function last() {
    return this[this.length - 1];
  }

  function compact() {
    return this.select(function(value) {
      return value != null;
    });
  }

  function flatten() {
    return this.inject([], function(array, value) {
      if (Object.isArray(value))
        return array.concat(value.flatten());
      array.push(value);
      return array;
    });
  }

  function without() {
    var values = slice.call(arguments, 0);
    return this.select(function(value) {
      return !values.include(value);
    });
  }

  function reverse(inline) {
    return (inline === false ? this.toArray() : this)._reverse();
  }

  function uniq(sorted) {
    return this.inject([], function(array, value, index) {
      if (0 == index || (sorted ? array.last() != value : !array.include(value)))
        array.push(value);
      return array;
    });
  }

  function intersect(array) {
    return this.uniq().findAll(function(item) {
      return array.detect(function(value) { return item === value });
    });
  }


  function clone() {
    return slice.call(this, 0);
  }

  function size() {
    return this.length;
  }

  function inspect() {
    return '[' + this.map(Object.inspect).join(', ') + ']';
  }

  function indexOf(item, i) {
    i || (i = 0);
    var length = this.length;
    if (i < 0) i = length + i;
    for (; i < length; i++)
      if (this[i] === item) return i;
    return -1;
  }

  function lastIndexOf(item, i) {
    i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
    var n = this.slice(0, i).reverse().indexOf(item);
    return (n < 0) ? n : i - n - 1;
  }

  function concat() {
    var array = slice.call(this, 0), item;
    for (var i = 0, length = arguments.length; i < length; i++) {
      item = arguments[i];
      if (Object.isArray(item) && !('callee' in item)) {
        for (var j = 0, arrayLength = item.length; j < arrayLength; j++)
          array.push(item[j]);
      } else {
        array.push(item);
      }
    }
    return array;
  }

  Object.extend(arrayProto, Enumerable);

  if (!arrayProto._reverse)
    arrayProto._reverse = arrayProto.reverse;

  Object.extend(arrayProto, {
    _each:     _each,
    clear:     clear,
    first:     first,
    last:      last,
    compact:   compact,
    flatten:   flatten,
    without:   without,
    reverse:   reverse,
    uniq:      uniq,
    intersect: intersect,
    clone:     clone,
    toArray:   clone,
    size:      size,
    inspect:   inspect
  });

  var CONCAT_ARGUMENTS_BUGGY = (function() {
    return [].concat(arguments)[0][0] !== 1;
  })(1,2)

  if (CONCAT_ARGUMENTS_BUGGY) arrayProto.concat = concat;

  if (!arrayProto.indexOf) arrayProto.indexOf = indexOf;
  if (!arrayProto.lastIndexOf) arrayProto.lastIndexOf = lastIndexOf;
})();
function $H(object) {
  return new Hash(object);
};

var Hash = Class.create(Enumerable, (function() {
  function initialize(object) {
    this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
  }


  function _each(iterator) {
    for (var key in this._object) {
      var value = this._object[key], pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  }

  function set(key, value) {
    return this._object[key] = value;
  }

  function get(key) {
    if (this._object[key] !== Object.prototype[key])
      return this._object[key];
  }

  function unset(key) {
    var value = this._object[key];
    delete this._object[key];
    return value;
  }

  function toObject() {
    return Object.clone(this._object);
  }



  function keys() {
    return this.pluck('key');
  }

  function values() {
    return this.pluck('value');
  }

  function index(value) {
    var match = this.detect(function(pair) {
      return pair.value === value;
    });
    return match && match.key;
  }

  function merge(object) {
    return this.clone().update(object);
  }

  function update(object) {
    return new Hash(object).inject(this, function(result, pair) {
      result.set(pair.key, pair.value);
      return result;
    });
  }

  function toQueryPair(key, value) {
    if (Object.isUndefined(value)) return key;
    return key + '=' + encodeURIComponent(String.interpret(value));
  }

  function toQueryString() {
    return this.inject([], function(results, pair) {
      var key = encodeURIComponent(pair.key), values = pair.value;

      if (values && typeof values == 'object') {
        if (Object.isArray(values)) {
          var queryValues = [];
          for (var i = 0, len = values.length, value; i < len; i++) {
            value = values[i];
            queryValues.push(toQueryPair(key, value));
          }
          return results.concat(queryValues);
        }
      } else results.push(toQueryPair(key, values));
      return results;
    }).join('&');
  }

  function inspect() {
    return '#<Hash:{' + this.map(function(pair) {
      return pair.map(Object.inspect).join(': ');
    }).join(', ') + '}>';
  }

  function clone() {
    return new Hash(this);
  }

  return {
    initialize:             initialize,
    _each:                  _each,
    set:                    set,
    get:                    get,
    unset:                  unset,
    toObject:               toObject,
    toTemplateReplacements: toObject,
    keys:                   keys,
    values:                 values,
    index:                  index,
    merge:                  merge,
    update:                 update,
    toQueryString:          toQueryString,
    inspect:                inspect,
    toJSON:                 toObject,
    clone:                  clone
  };
})());

Hash.from = $H;
Object.extend(Number.prototype, (function() {
  function toColorPart() {
    return this.toPaddedString(2, 16);
  }

  function succ() {
    return this + 1;
  }

  function times(iterator, context) {
    $R(0, this, true).each(iterator, context);
    return this;
  }

  function toPaddedString(length, radix) {
    var string = this.toString(radix || 10);
    return '0'.times(length - string.length) + string;
  }

  function abs() {
    return Math.abs(this);
  }

  function round() {
    return Math.round(this);
  }

  function ceil() {
    return Math.ceil(this);
  }

  function floor() {
    return Math.floor(this);
  }

  return {
    toColorPart:    toColorPart,
    succ:           succ,
    times:          times,
    toPaddedString: toPaddedString,
    abs:            abs,
    round:          round,
    ceil:           ceil,
    floor:          floor
  };
})());

function $R(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

var ObjectRange = Class.create(Enumerable, (function() {
  function initialize(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  }

  function _each(iterator) {
    var value = this.start;
    while (this.include(value)) {
      iterator(value);
      value = value.succ();
    }
  }

  function include(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }

  return {
    initialize: initialize,
    _each:      _each,
    include:    include
  };
})());



var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new XMLHttpRequest()},
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')}
    ) || false;
  },

  activeRequestCount: 0
};

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(responder) {
    if (!this.include(responder))
      this.responders.push(responder);
  },

  unregister: function(responder) {
    this.responders = this.responders.without(responder);
  },

  dispatch: function(callback, request, transport, json) {
    this.each(function(responder) {
      if (Object.isFunction(responder[callback])) {
        try {
          responder[callback].apply(responder, [request, transport, json]);
        } catch (e) { }
      }
    });
  }
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate:   function() { Ajax.activeRequestCount++ },
  onComplete: function() { Ajax.activeRequestCount-- }
});
Ajax.Base = Class.create({
  initialize: function(options) {
    this.options = {
      method:       'post',
      asynchronous: true,
      contentType:  'application/x-www-form-urlencoded',
      encoding:     'UTF-8',
      parameters:   '',
      evalJSON:     true,
      evalJS:       true
    };
    Object.extend(this.options, options || { });

    this.options.method = this.options.method.toLowerCase();

    if (Object.isHash(this.options.parameters))
      this.options.parameters = this.options.parameters.toObject();
  }
});
Ajax.Request = Class.create(Ajax.Base, {
  _complete: false,

  initialize: function($super, url, options) {
    $super(options);
    this.transport = Ajax.getTransport();
    this.request(url);
  },

  request: function(url) {
    this.url = url;
    this.method = this.options.method;
    var params = Object.isString(this.options.parameters) ?
          this.options.parameters :
          Object.toQueryString(this.options.parameters);

    if (!['get', 'post'].include(this.method)) {
      params += (params ? '&' : '') + "_method=" + this.method;
      this.method = 'post';
    }

    if (params && this.method === 'get') {
      this.url += (this.url.include('?') ? '&' : '?') + params;
    }

    this.parameters = params.toQueryParams();

    try {
      var response = new Ajax.Response(this);
      if (this.options.onCreate) this.options.onCreate(response);
      Ajax.Responders.dispatch('onCreate', this, response);

      this.transport.open(this.method.toUpperCase(), this.url,
        this.options.asynchronous);

      if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);

      this.transport.onreadystatechange = this.onStateChange.bind(this);
      this.setRequestHeaders();

      this.body = this.method == 'post' ? (this.options.postBody || params) : null;
      this.transport.send(this.body);

      /* Force Firefox to handle ready state 4 for synchronous requests */
      if (!this.options.asynchronous && this.transport.overrideMimeType)
        this.onStateChange();

    }
    catch (e) {
      this.dispatchException(e);
    }
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState > 1 && !((readyState == 4) && this._complete))
      this.respondToReadyState(this.transport.readyState);
  },

  setRequestHeaders: function() {
    var headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Prototype-Version': Prototype.Version,
      'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
    };

    if (this.method == 'post') {
      headers['Content-type'] = this.options.contentType +
        (this.options.encoding ? '; charset=' + this.options.encoding : '');

      /* Force "Connection: close" for older Mozilla browsers to work
       * around a bug where XMLHttpRequest sends an incorrect
       * Content-length header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType &&
          (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
            headers['Connection'] = 'close';
    }

    if (typeof this.options.requestHeaders == 'object') {
      var extras = this.options.requestHeaders;

      if (Object.isFunction(extras.push))
        for (var i = 0, length = extras.length; i < length; i += 2)
          headers[extras[i]] = extras[i+1];
      else
        $H(extras).each(function(pair) { headers[pair.key] = pair.value });
    }

    for (var name in headers)
      this.transport.setRequestHeader(name, headers[name]);
  },

  success: function() {
    var status = this.getStatus();
    return !status || (status >= 200 && status < 300) || status == 304;
  },

  getStatus: function() {
    try {
      if (this.transport.status === 1223) return 204;
      return this.transport.status || 0;
    } catch (e) { return 0 }
  },

  respondToReadyState: function(readyState) {
    var state = Ajax.Request.Events[readyState], response = new Ajax.Response(this);

    if (state == 'Complete') {
      try {
        this._complete = true;
        (this.options['on' + response.status]
         || this.options['on' + (this.success() ? 'Success' : 'Failure')]
         || Prototype.emptyFunction)(response, response.headerJSON);
      } catch (e) {
        this.dispatchException(e);
      }

      var contentType = response.getHeader('Content-type');
      if (this.options.evalJS == 'force'
          || (this.options.evalJS && this.isSameOrigin() && contentType
          && contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
        this.evalResponse();
    }

    try {
      (this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
      Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
    } catch (e) {
      this.dispatchException(e);
    }

    if (state == 'Complete') {
      this.transport.onreadystatechange = Prototype.emptyFunction;
    }
  },

  isSameOrigin: function() {
    var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
    return !m || (m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
      protocol: location.protocol,
      domain: document.domain,
      port: location.port ? ':' + location.port : ''
    }));
  },

  getHeader: function(name) {
    try {
      return this.transport.getResponseHeader(name) || null;
    } catch (e) { return null; }
  },

  evalResponse: function() {
    try {
      return eval((this.transport.responseText || '').unfilterJSON());
    } catch (e) {
      this.dispatchException(e);
    }
  },

  dispatchException: function(exception) {
    (this.options.onException || Prototype.emptyFunction)(this, exception);
    Ajax.Responders.dispatch('onException', this, exception);
  }
});

Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];








Ajax.Response = Class.create({
  initialize: function(request){
    this.request = request;
    var transport  = this.transport  = request.transport,
        readyState = this.readyState = transport.readyState;

    if ((readyState > 2 && !Prototype.Browser.IE) || readyState == 4) {
      this.status       = this.getStatus();
      this.statusText   = this.getStatusText();
      this.responseText = String.interpret(transport.responseText);
      this.headerJSON   = this._getHeaderJSON();
    }

    if (readyState == 4) {
      var xml = transport.responseXML;
      this.responseXML  = Object.isUndefined(xml) ? null : xml;
      this.responseJSON = this._getResponseJSON();
    }
  },

  status:      0,

  statusText: '',

  getStatus: Ajax.Request.prototype.getStatus,

  getStatusText: function() {
    try {
      return this.transport.statusText || '';
    } catch (e) { return '' }
  },

  getHeader: Ajax.Request.prototype.getHeader,

  getAllHeaders: function() {
    try {
      return this.getAllResponseHeaders();
    } catch (e) { return null }
  },

  getResponseHeader: function(name) {
    return this.transport.getResponseHeader(name);
  },

  getAllResponseHeaders: function() {
    return this.transport.getAllResponseHeaders();
  },

  _getHeaderJSON: function() {
    var json = this.getHeader('X-JSON');
    if (!json) return null;
    json = decodeURIComponent(escape(json));
    try {
      return json.evalJSON(this.request.options.sanitizeJSON ||
        !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  },

  _getResponseJSON: function() {
    var options = this.request.options;
    if (!options.evalJSON || (options.evalJSON != 'force' &&
      !(this.getHeader('Content-type') || '').include('application/json')) ||
        this.responseText.blank())
          return null;
    try {
      return this.responseText.evalJSON(options.sanitizeJSON ||
        !this.request.isSameOrigin());
    } catch (e) {
      this.request.dispatchException(e);
    }
  }
});

Ajax.Updater = Class.create(Ajax.Request, {
  initialize: function($super, container, url, options) {
    this.container = {
      success: (container.success || container),
      failure: (container.failure || (container.success ? null : container))
    };

    options = Object.clone(options);
    var onComplete = options.onComplete;
    options.onComplete = (function(response, json) {
      this.updateContent(response.responseText);
      if (Object.isFunction(onComplete)) onComplete(response, json);
    }).bind(this);

    $super(url, options);
  },

  updateContent: function(responseText) {
    var receiver = this.container[this.success() ? 'success' : 'failure'],
        options = this.options;

    if (!options.evalScripts) responseText = responseText.stripScripts();

    if (receiver = $(receiver)) {
      if (options.insertion) {
        if (Object.isString(options.insertion)) {
          var insertion = { }; insertion[options.insertion] = responseText;
          receiver.insert(insertion);
        }
        else options.insertion(receiver, responseText);
      }
      else receiver.update(responseText);
    }
  }
});

Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
  initialize: function($super, container, url, options) {
    $super(options);
    this.onComplete = this.options.onComplete;

    this.frequency = (this.options.frequency || 2);
    this.decay = (this.options.decay || 1);

    this.updater = { };
    this.container = container;
    this.url = url;

    this.start();
  },

  start: function() {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },

  stop: function() {
    this.updater.options.onComplete = undefined;
    clearTimeout(this.timer);
    (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
  },

  updateComplete: function(response) {
    if (this.options.decay) {
      this.decay = (response.responseText == this.lastText ?
        this.decay * this.options.decay : 1);

      this.lastText = response.responseText;
    }
    this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  }
});


function $(element) {
  if (arguments.length > 1) {
    for (var i = 0, elements = [], length = arguments.length; i < length; i++)
      elements.push($(arguments[i]));
    return elements;
  }
  if (Object.isString(element))
    element = document.getElementById(element);
  return Element.extend(element);
}

if (Prototype.BrowserFeatures.XPath) {
  document._getElementsByXPath = function(expression, parentElement) {
    var results = [];
    var query = document.evaluate(expression, $(parentElement) || document,
      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0, length = query.snapshotLength; i < length; i++)
      results.push(Element.extend(query.snapshotItem(i)));
    return results;
  };
}

/*--------------------------------------------------------------------------*/

if (!Node) var Node = { };

if (!Node.ELEMENT_NODE) {
  Object.extend(Node, {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
  });
}



(function(global) {
  function shouldUseCache(tagName, attributes) {
    if (tagName === 'select') return false;
    if ('type' in attributes) return false;
    return true;
  }

  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function(){
    try {
      var el = document.createElement('<input name="x">');
      return el.tagName.toLowerCase() === 'input' && el.name === 'x';
    }
    catch(err) {
      return false;
    }
  })();

  var element = global.Element;

  global.Element = function(tagName, attributes) {
    attributes = attributes || { };
    tagName = tagName.toLowerCase();
    var cache = Element.cache;

    if (HAS_EXTENDED_CREATE_ELEMENT_SYNTAX && attributes.name) {
      tagName = '<' + tagName + ' name="' + attributes.name + '">';
      delete attributes.name;
      return Element.writeAttribute(document.createElement(tagName), attributes);
    }

    if (!cache[tagName]) cache[tagName] = Element.extend(document.createElement(tagName));

    var node = shouldUseCache(tagName, attributes) ?
     cache[tagName].cloneNode(false) : document.createElement(tagName);

    return Element.writeAttribute(node, attributes);
  };

  Object.extend(global.Element, element || { });
  if (element) global.Element.prototype = element.prototype;

})(this);

Element.idCounter = 1;
Element.cache = { };

Element._purgeElement = function(element) {
  var uid = element._prototypeUID;
  if (uid) {
    Element.stopObserving(element);
    element._prototypeUID = void 0;
    delete Element.Storage[uid];
  }
}

Element.Methods = {
  visible: function(element) {
    return $(element).style.display != 'none';
  },

  toggle: function(element) {
    element = $(element);
    Element[Element.visible(element) ? 'hide' : 'show'](element);
    return element;
  },

  hide: function(element) {
    element = $(element);
    element.style.display = 'none';
    return element;
  },

  show: function(element) {
    element = $(element);
    element.style.display = '';
    return element;
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
    return element;
  },

  update: (function(){

    var SELECT_ELEMENT_INNERHTML_BUGGY = (function(){
      var el = document.createElement("select"),
          isBuggy = true;
      el.innerHTML = "<option value=\"test\">test</option>";
      if (el.options && el.options[0]) {
        isBuggy = el.options[0].nodeName.toUpperCase() !== "OPTION";
      }
      el = null;
      return isBuggy;
    })();

    var TABLE_ELEMENT_INNERHTML_BUGGY = (function(){
      try {
        var el = document.createElement("table");
        if (el && el.tBodies) {
          el.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
          var isBuggy = typeof el.tBodies[0] == "undefined";
          el = null;
          return isBuggy;
        }
      } catch (e) {
        return true;
      }
    })();

    var LINK_ELEMENT_INNERHTML_BUGGY = (function() {
      try {
        var el = document.createElement('div');
        el.innerHTML = "<link>";
        var isBuggy = (el.childNodes.length === 0);
        el = null;
        return isBuggy;
      } catch(e) {
        return true;
      }
    })();

    var ANY_INNERHTML_BUGGY = SELECT_ELEMENT_INNERHTML_BUGGY ||
     TABLE_ELEMENT_INNERHTML_BUGGY || LINK_ELEMENT_INNERHTML_BUGGY;

    var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function () {
      var s = document.createElement("script"),
          isBuggy = false;
      try {
        s.appendChild(document.createTextNode(""));
        isBuggy = !s.firstChild ||
          s.firstChild && s.firstChild.nodeType !== 3;
      } catch (e) {
        isBuggy = true;
      }
      s = null;
      return isBuggy;
    })();


    function update(element, content) {
      element = $(element);
      var purgeElement = Element._purgeElement;

      var descendants = element.getElementsByTagName('*'),
       i = descendants.length;
      while (i--) purgeElement(descendants[i]);

      if (content && content.toElement)
        content = content.toElement();

      if (Object.isElement(content))
        return element.update().insert(content);

      content = Object.toHTML(content);

      var tagName = element.tagName.toUpperCase();

      if (tagName === 'SCRIPT' && SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
        element.text = content;
        return element;
      }

      if (ANY_INNERHTML_BUGGY) {
        if (tagName in Element._insertionTranslations.tags) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          Element._getContentFromAnonymousElement(tagName, content.stripScripts())
            .each(function(node) {
              element.appendChild(node)
            });
        } else if (LINK_ELEMENT_INNERHTML_BUGGY && Object.isString(content) && content.indexOf('<link') > -1) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          var nodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts(), true);
          nodes.each(function(node) { element.appendChild(node) });
        }
        else {
          element.innerHTML = content.stripScripts();
        }
      }
      else {
        element.innerHTML = content.stripScripts();
      }

      content.evalScripts.bind(content).defer();
      return element;
    }

    return update;
  })(),

  replace: function(element, content) {
    element = $(element);
    if (content && content.toElement) content = content.toElement();
    else if (!Object.isElement(content)) {
      content = Object.toHTML(content);
      var range = element.ownerDocument.createRange();
      range.selectNode(element);
      content.evalScripts.bind(content).defer();
      content = range.createContextualFragment(content.stripScripts());
    }
    element.parentNode.replaceChild(content, element);
    return element;
  },

  insert: function(element, insertions) {
    element = $(element);

    if (Object.isString(insertions) || Object.isNumber(insertions) ||
        Object.isElement(insertions) || (insertions && (insertions.toElement || insertions.toHTML)))
          insertions = {bottom:insertions};

    var content, insert, tagName, childNodes;

    for (var position in insertions) {
      content  = insertions[position];
      position = position.toLowerCase();
      insert = Element._insertionTranslations[position];

      if (content && content.toElement) content = content.toElement();
      if (Object.isElement(content)) {
        insert(element, content);
        continue;
      }

      content = Object.toHTML(content);

      tagName = ((position == 'before' || position == 'after')
        ? element.parentNode : element).tagName.toUpperCase();

      childNodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts());

      if (position == 'top' || position == 'after') childNodes.reverse();
      childNodes.each(insert.curry(element));

      content.evalScripts.bind(content).defer();
    }

    return element;
  },

  wrap: function(element, wrapper, attributes) {
    element = $(element);
    if (Object.isElement(wrapper))
      $(wrapper).writeAttribute(attributes || { });
    else if (Object.isString(wrapper)) wrapper = new Element(wrapper, attributes);
    else wrapper = new Element('div', wrapper);
    if (element.parentNode)
      element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(element);
    return wrapper;
  },

  inspect: function(element) {
    element = $(element);
    var result = '<' + element.tagName.toLowerCase();
    $H({'id': 'id', 'className': 'class'}).each(function(pair) {
      var property = pair.first(),
          attribute = pair.last(),
          value = (element[property] || '').toString();
      if (value) result += ' ' + attribute + '=' + value.inspect(true);
    });
    return result + '>';
  },

  recursivelyCollect: function(element, property, maximumLength) {
    element = $(element);
    maximumLength = maximumLength || -1;
    var elements = [];

    while (element = element[property]) {
      if (element.nodeType == 1)
        elements.push(Element.extend(element));
      if (elements.length == maximumLength)
        break;
    }

    return elements;
  },

  ancestors: function(element) {
    return Element.recursivelyCollect(element, 'parentNode');
  },

  descendants: function(element) {
    return Element.select(element, "*");
  },

  firstDescendant: function(element) {
    element = $(element).firstChild;
    while (element && element.nodeType != 1) element = element.nextSibling;
    return $(element);
  },

  immediateDescendants: function(element) {
    var results = [], child = $(element).firstChild;
    while (child) {
      if (child.nodeType === 1) {
        results.push(Element.extend(child));
      }
      child = child.nextSibling;
    }
    return results;
  },

  previousSiblings: function(element, maximumLength) {
    return Element.recursivelyCollect(element, 'previousSibling');
  },

  nextSiblings: function(element) {
    return Element.recursivelyCollect(element, 'nextSibling');
  },

  siblings: function(element) {
    element = $(element);
    return Element.previousSiblings(element).reverse()
      .concat(Element.nextSiblings(element));
  },

  match: function(element, selector) {
    element = $(element);
    if (Object.isString(selector))
      return Prototype.Selector.match(element, selector);
    return selector.match(element);
  },

  up: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return $(element.parentNode);
    var ancestors = Element.ancestors(element);
    return Object.isNumber(expression) ? ancestors[expression] :
      Prototype.Selector.find(ancestors, expression, index);
  },

  down: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return Element.firstDescendant(element);
    return Object.isNumber(expression) ? Element.descendants(element)[expression] :
      Element.select(element, expression)[index || 0];
  },

  previous: function(element, expression, index) {
    element = $(element);
    if (Object.isNumber(expression)) index = expression, expression = false;
    if (!Object.isNumber(index)) index = 0;

    if (expression) {
      return Prototype.Selector.find(element.previousSiblings(), expression, index);
    } else {
      return element.recursivelyCollect("previousSibling", index + 1)[index];
    }
  },

  next: function(element, expression, index) {
    element = $(element);
    if (Object.isNumber(expression)) index = expression, expression = false;
    if (!Object.isNumber(index)) index = 0;

    if (expression) {
      return Prototype.Selector.find(element.nextSiblings(), expression, index);
    } else {
      var maximumLength = Object.isNumber(index) ? index + 1 : 1;
      return element.recursivelyCollect("nextSibling", index + 1)[index];
    }
  },


  select: function(element) {
    element = $(element);
    var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
    return Prototype.Selector.select(expressions, element);
  },

  adjacent: function(element) {
    element = $(element);
    var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
    return Prototype.Selector.select(expressions, element.parentNode).without(element);
  },

  identify: function(element) {
    element = $(element);
    var id = Element.readAttribute(element, 'id');
    if (id) return id;
    do { id = 'anonymous_element_' + Element.idCounter++ } while ($(id));
    Element.writeAttribute(element, 'id', id);
    return id;
  },

  readAttribute: function(element, name) {
    element = $(element);
    if (Prototype.Browser.IE) {
      var t = Element._attributeTranslations.read;
      if (t.values[name]) return t.values[name](element, name);
      if (t.names[name]) name = t.names[name];
      if (name.include(':')) {
        return (!element.attributes || !element.attributes[name]) ? null :
         element.attributes[name].value;
      }
    }
    return element.getAttribute(name);
  },

  writeAttribute: function(element, name, value) {
    element = $(element);
    var attributes = { }, t = Element._attributeTranslations.write;

    if (typeof name == 'object') attributes = name;
    else attributes[name] = Object.isUndefined(value) ? true : value;

    for (var attr in attributes) {
      name = t.names[attr] || attr;
      value = attributes[attr];
      if (t.values[attr]) name = t.values[attr](element, value);
      if (value === false || value === null)
        element.removeAttribute(name);
      else if (value === true)
        element.setAttribute(name, name);
      else element.setAttribute(name, value);
    }
    return element;
  },

  getHeight: function(element) {
    return Element.getDimensions(element).height;
  },

  getWidth: function(element) {
    return Element.getDimensions(element).width;
  },

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(element, className) {
    if (!(element = $(element))) return;
    var elementClassName = element.className;
    return (elementClassName.length > 0 && (elementClassName == className ||
      new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
  },

  addClassName: function(element, className) {
    if (!(element = $(element))) return;
    if (!Element.hasClassName(element, className))
      element.className += (element.className ? ' ' : '') + className;
    return element;
  },

  removeClassName: function(element, className) {
    if (!(element = $(element))) return;
    element.className = element.className.replace(
      new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ').strip();
    return element;
  },

  toggleClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element[Element.hasClassName(element, className) ?
      'removeClassName' : 'addClassName'](element, className);
  },

  cleanWhitespace: function(element) {
    element = $(element);
    var node = element.firstChild;
    while (node) {
      var nextNode = node.nextSibling;
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
        element.removeChild(node);
      node = nextNode;
    }
    return element;
  },

  empty: function(element) {
    return $(element).innerHTML.blank();
  },

  descendantOf: function(element, ancestor) {
    element = $(element), ancestor = $(ancestor);

    if (element.compareDocumentPosition)
      return (element.compareDocumentPosition(ancestor) & 8) === 8;

    if (ancestor.contains)
      return ancestor.contains(element) && ancestor !== element;

    while (element = element.parentNode)
      if (element == ancestor) return true;

    return false;
  },

  scrollTo: function(element) {
    element = $(element);
    var pos = Element.cumulativeOffset(element);
    window.scrollTo(pos[0], pos[1]);
    return element;
  },

  getStyle: function(element, style) {
    element = $(element);
    style = style == 'float' ? 'cssFloat' : style.camelize();
    var value = element.style[style];
    if (!value || value == 'auto') {
      var css = document.defaultView.getComputedStyle(element, null);
      value = css ? css[style] : null;
    }
    if (style == 'opacity') return value ? parseFloat(value) : 1.0;
    return value == 'auto' ? null : value;
  },

  getOpacity: function(element) {
    return $(element).getStyle('opacity');
  },

  setStyle: function(element, styles) {
    element = $(element);
    var elementStyle = element.style, match;
    if (Object.isString(styles)) {
      element.style.cssText += ';' + styles;
      return styles.include('opacity') ?
        element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
    }
    for (var property in styles)
      if (property == 'opacity') element.setOpacity(styles[property]);
      else
        elementStyle[(property == 'float' || property == 'cssFloat') ?
          (Object.isUndefined(elementStyle.styleFloat) ? 'cssFloat' : 'styleFloat') :
            property] = styles[property];

    return element;
  },

  setOpacity: function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1 || value === '') ? '' :
      (value < 0.00001) ? 0 : value;
    return element;
  },

  makePositioned: function(element) {
    element = $(element);
    var pos = Element.getStyle(element, 'position');
    if (pos == 'static' || !pos) {
      element._madePositioned = true;
      element.style.position = 'relative';
      if (Prototype.Browser.Opera) {
        element.style.top = 0;
        element.style.left = 0;
      }
    }
    return element;
  },

  undoPositioned: function(element) {
    element = $(element);
    if (element._madePositioned) {
      element._madePositioned = undefined;
      element.style.position =
        element.style.top =
        element.style.left =
        element.style.bottom =
        element.style.right = '';
    }
    return element;
  },

  makeClipping: function(element) {
    element = $(element);
    if (element._overflow) return element;
    element._overflow = Element.getStyle(element, 'overflow') || 'auto';
    if (element._overflow !== 'hidden')
      element.style.overflow = 'hidden';
    return element;
  },

  undoClipping: function(element) {
    element = $(element);
    if (!element._overflow) return element;
    element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
    element._overflow = null;
    return element;
  },

  clonePosition: function(element, source) {
    var options = Object.extend({
      setLeft:    true,
      setTop:     true,
      setWidth:   true,
      setHeight:  true,
      offsetTop:  0,
      offsetLeft: 0
    }, arguments[2] || { });

    source = $(source);
    var p = Element.viewportOffset(source), delta = [0, 0], parent = null;

    element = $(element);

    if (Element.getStyle(element, 'position') == 'absolute') {
      parent = Element.getOffsetParent(element);
      delta = Element.viewportOffset(parent);
    }

    if (parent == document.body) {
      delta[0] -= document.body.offsetLeft;
      delta[1] -= document.body.offsetTop;
    }

    if (options.setLeft)   element.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
    if (options.setTop)    element.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
    if (options.setWidth)  element.style.width = source.offsetWidth + 'px';
    if (options.setHeight) element.style.height = source.offsetHeight + 'px';
    return element;
  }
};

Object.extend(Element.Methods, {
  getElementsBySelector: Element.Methods.select,

  childElements: Element.Methods.immediateDescendants
});

Element._attributeTranslations = {
  write: {
    names: {
      className: 'class',
      htmlFor:   'for'
    },
    values: { }
  }
};

if (Prototype.Browser.Opera) {
  Element.Methods.getStyle = Element.Methods.getStyle.wrap(
    function(proceed, element, style) {
      switch (style) {
        case 'height': case 'width':
          if (!Element.visible(element)) return null;

          var dim = parseInt(proceed(element, style), 10);

          if (dim !== element['offset' + style.capitalize()])
            return dim + 'px';

          var properties;
          if (style === 'height') {
            properties = ['border-top-width', 'padding-top',
             'padding-bottom', 'border-bottom-width'];
          }
          else {
            properties = ['border-left-width', 'padding-left',
             'padding-right', 'border-right-width'];
          }
          return properties.inject(dim, function(memo, property) {
            var val = proceed(element, property);
            return val === null ? memo : memo - parseInt(val, 10);
          }) + 'px';
        default: return proceed(element, style);
      }
    }
  );

  Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(
    function(proceed, element, attribute) {
      if (attribute === 'title') return element.title;
      return proceed(element, attribute);
    }
  );
}

else if (Prototype.Browser.IE) {
  Element.Methods.getStyle = function(element, style) {
    element = $(element);
    style = (style == 'float' || style == 'cssFloat') ? 'styleFloat' : style.camelize();
    var value = element.style[style];
    if (!value && element.currentStyle) value = element.currentStyle[style];

    if (style == 'opacity') {
      if (value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
        if (value[1]) return parseFloat(value[1]) / 100;
      return 1.0;
    }

    if (value == 'auto') {
      if ((style == 'width' || style == 'height') && (element.getStyle('display') != 'none'))
        return element['offset' + style.capitalize()] + 'px';
      return null;
    }
    return value;
  };

  Element.Methods.setOpacity = function(element, value) {
    function stripAlpha(filter){
      return filter.replace(/alpha\([^\)]*\)/gi,'');
    }
    element = $(element);
    var currentStyle = element.currentStyle;
    if ((currentStyle && !currentStyle.hasLayout) ||
      (!currentStyle && element.style.zoom == 'normal'))
        element.style.zoom = 1;

    var filter = element.getStyle('filter'), style = element.style;
    if (value == 1 || value === '') {
      (filter = stripAlpha(filter)) ?
        style.filter = filter : style.removeAttribute('filter');
      return element;
    } else if (value < 0.00001) value = 0;
    style.filter = stripAlpha(filter) +
      'alpha(opacity=' + (value * 100) + ')';
    return element;
  };

  Element._attributeTranslations = (function(){

    var classProp = 'className',
        forProp = 'for',
        el = document.createElement('div');

    el.setAttribute(classProp, 'x');

    if (el.className !== 'x') {
      el.setAttribute('class', 'x');
      if (el.className === 'x') {
        classProp = 'class';
      }
    }
    el = null;

    el = document.createElement('label');
    el.setAttribute(forProp, 'x');
    if (el.htmlFor !== 'x') {
      el.setAttribute('htmlFor', 'x');
      if (el.htmlFor === 'x') {
        forProp = 'htmlFor';
      }
    }
    el = null;

    return {
      read: {
        names: {
          'class':      classProp,
          'className':  classProp,
          'for':        forProp,
          'htmlFor':    forProp
        },
        values: {
          _getAttr: function(element, attribute) {
            return element.getAttribute(attribute);
          },
          _getAttr2: function(element, attribute) {
            return element.getAttribute(attribute, 2);
          },
          _getAttrNode: function(element, attribute) {
            var node = element.getAttributeNode(attribute);
            return node ? node.value : "";
          },
          _getEv: (function(){

            var el = document.createElement('div'), f;
            el.onclick = Prototype.emptyFunction;
            var value = el.getAttribute('onclick');

            if (String(value).indexOf('{') > -1) {
              f = function(element, attribute) {
                attribute = element.getAttribute(attribute);
                if (!attribute) return null;
                attribute = attribute.toString();
                attribute = attribute.split('{')[1];
                attribute = attribute.split('}')[0];
                return attribute.strip();
              };
            }
            else if (value === '') {
              f = function(element, attribute) {
                attribute = element.getAttribute(attribute);
                if (!attribute) return null;
                return attribute.strip();
              };
            }
            el = null;
            return f;
          })(),
          _flag: function(element, attribute) {
            return $(element).hasAttribute(attribute) ? attribute : null;
          },
          style: function(element) {
            return element.style.cssText.toLowerCase();
          },
          title: function(element) {
            return element.title;
          }
        }
      }
    }
  })();

  Element._attributeTranslations.write = {
    names: Object.extend({
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing'
    }, Element._attributeTranslations.read.names),
    values: {
      checked: function(element, value) {
        element.checked = !!value;
      },

      style: function(element, value) {
        element.style.cssText = value ? value : '';
      }
    }
  };

  Element._attributeTranslations.has = {};

  $w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' +
      'encType maxLength readOnly longDesc frameBorder').each(function(attr) {
    Element._attributeTranslations.write.names[attr.toLowerCase()] = attr;
    Element._attributeTranslations.has[attr.toLowerCase()] = attr;
  });

  (function(v) {
    Object.extend(v, {
      href:        v._getAttr2,
      src:         v._getAttr2,
      type:        v._getAttr,
      action:      v._getAttrNode,
      disabled:    v._flag,
      checked:     v._flag,
      readonly:    v._flag,
      multiple:    v._flag,
      onload:      v._getEv,
      onunload:    v._getEv,
      onclick:     v._getEv,
      ondblclick:  v._getEv,
      onmousedown: v._getEv,
      onmouseup:   v._getEv,
      onmouseover: v._getEv,
      onmousemove: v._getEv,
      onmouseout:  v._getEv,
      onfocus:     v._getEv,
      onblur:      v._getEv,
      onkeypress:  v._getEv,
      onkeydown:   v._getEv,
      onkeyup:     v._getEv,
      onsubmit:    v._getEv,
      onreset:     v._getEv,
      onselect:    v._getEv,
      onchange:    v._getEv
    });
  })(Element._attributeTranslations.read.values);

  if (Prototype.BrowserFeatures.ElementExtensions) {
    (function() {
      function _descendants(element) {
        var nodes = element.getElementsByTagName('*'), results = [];
        for (var i = 0, node; node = nodes[i]; i++)
          if (node.tagName !== "!") // Filter out comment nodes.
            results.push(node);
        return results;
      }

      Element.Methods.down = function(element, expression, index) {
        element = $(element);
        if (arguments.length == 1) return element.firstDescendant();
        return Object.isNumber(expression) ? _descendants(element)[expression] :
          Element.select(element, expression)[index || 0];
      }
    })();
  }

}

else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
  Element.Methods.setOpacity = function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1) ? 0.999999 :
      (value === '') ? '' : (value < 0.00001) ? 0 : value;
    return element;
  };
}

else if (Prototype.Browser.WebKit) {
  Element.Methods.setOpacity = function(element, value) {
    element = $(element);
    element.style.opacity = (value == 1 || value === '') ? '' :
      (value < 0.00001) ? 0 : value;

    if (value == 1)
      if (element.tagName.toUpperCase() == 'IMG' && element.width) {
        element.width++; element.width--;
      } else try {
        var n = document.createTextNode(' ');
        element.appendChild(n);
        element.removeChild(n);
      } catch (e) { }

    return element;
  };
}

if ('outerHTML' in document.documentElement) {
  Element.Methods.replace = function(element, content) {
    element = $(element);

    if (content && content.toElement) content = content.toElement();
    if (Object.isElement(content)) {
      element.parentNode.replaceChild(content, element);
      return element;
    }

    content = Object.toHTML(content);
    var parent = element.parentNode, tagName = parent.tagName.toUpperCase();

    if (Element._insertionTranslations.tags[tagName]) {
      var nextSibling = element.next(),
          fragments = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
      parent.removeChild(element);
      if (nextSibling)
        fragments.each(function(node) { parent.insertBefore(node, nextSibling) });
      else
        fragments.each(function(node) { parent.appendChild(node) });
    }
    else element.outerHTML = content.stripScripts();

    content.evalScripts.bind(content).defer();
    return element;
  };
}

Element._returnOffset = function(l, t) {
  var result = [l, t];
  result.left = l;
  result.top = t;
  return result;
};

Element._getContentFromAnonymousElement = function(tagName, html, force) {
  var div = new Element('div'),
      t = Element._insertionTranslations.tags[tagName];

  var workaround = false;
  if (t) workaround = true;
  else if (force) {
    workaround = true;
    t = ['', '', 0];
  }

  if (workaround) {
    div.innerHTML = '&nbsp;' + t[0] + html + t[1];
    div.removeChild(div.firstChild);
    for (var i = t[2]; i--; ) {
      div = div.firstChild;
    }
  }
  else {
    div.innerHTML = html;
  }
  return $A(div.childNodes);
};

Element._insertionTranslations = {
  before: function(element, node) {
    element.parentNode.insertBefore(node, element);
  },
  top: function(element, node) {
    element.insertBefore(node, element.firstChild);
  },
  bottom: function(element, node) {
    element.appendChild(node);
  },
  after: function(element, node) {
    element.parentNode.insertBefore(node, element.nextSibling);
  },
  tags: {
    TABLE:  ['<table>',                '</table>',                   1],
    TBODY:  ['<table><tbody>',         '</tbody></table>',           2],
    TR:     ['<table><tbody><tr>',     '</tr></tbody></table>',      3],
    TD:     ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
    SELECT: ['<select>',               '</select>',                  1]
  }
};

(function() {
  var tags = Element._insertionTranslations.tags;
  Object.extend(tags, {
    THEAD: tags.TBODY,
    TFOOT: tags.TBODY,
    TH:    tags.TD
  });
})();

Element.Methods.Simulated = {
  hasAttribute: function(element, attribute) {
    attribute = Element._attributeTranslations.has[attribute] || attribute;
    var node = $(element).getAttributeNode(attribute);
    return !!(node && node.specified);
  }
};

Element.Methods.ByTag = { };

Object.extend(Element, Element.Methods);

(function(div) {

  if (!Prototype.BrowserFeatures.ElementExtensions && div['__proto__']) {
    window.HTMLElement = { };
    window.HTMLElement.prototype = div['__proto__'];
    Prototype.BrowserFeatures.ElementExtensions = true;
  }

  div = null;

})(document.createElement('div'));

Element.extend = (function() {

  function checkDeficiency(tagName) {
    if (typeof window.Element != 'undefined') {
      var proto = window.Element.prototype;
      if (proto) {
        var id = '_' + (Math.random()+'').slice(2),
            el = document.createElement(tagName);
        proto[id] = 'x';
        var isBuggy = (el[id] !== 'x');
        delete proto[id];
        el = null;
        return isBuggy;
      }
    }
    return false;
  }

  function extendElementWith(element, methods) {
    for (var property in methods) {
      var value = methods[property];
      if (Object.isFunction(value) && !(property in element))
        element[property] = value.methodize();
    }
  }

  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkDeficiency('object');

  if (Prototype.BrowserFeatures.SpecificElementExtensions) {
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      return function(element) {
        if (element && typeof element._extendedByPrototype == 'undefined') {
          var t = element.tagName;
          if (t && (/^(?:object|applet|embed)$/i.test(t))) {
            extendElementWith(element, Element.Methods);
            extendElementWith(element, Element.Methods.Simulated);
            extendElementWith(element, Element.Methods.ByTag[t.toUpperCase()]);
          }
        }
        return element;
      }
    }
    return Prototype.K;
  }

  var Methods = { }, ByTag = Element.Methods.ByTag;

  var extend = Object.extend(function(element) {
    if (!element || typeof element._extendedByPrototype != 'undefined' ||
        element.nodeType != 1 || element == window) return element;

    var methods = Object.clone(Methods),
        tagName = element.tagName.toUpperCase();

    if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);

    extendElementWith(element, methods);

    element._extendedByPrototype = Prototype.emptyFunction;
    return element;

  }, {
    refresh: function() {
      if (!Prototype.BrowserFeatures.ElementExtensions) {
        Object.extend(Methods, Element.Methods);
        Object.extend(Methods, Element.Methods.Simulated);
      }
    }
  });

  extend.refresh();
  return extend;
})();

if (document.documentElement.hasAttribute) {
  Element.hasAttribute = function(element, attribute) {
    return element.hasAttribute(attribute);
  };
}
else {
  Element.hasAttribute = Element.Methods.Simulated.hasAttribute;
}

Element.addMethods = function(methods) {
  var F = Prototype.BrowserFeatures, T = Element.Methods.ByTag;

  if (!methods) {
    Object.extend(Form, Form.Methods);
    Object.extend(Form.Element, Form.Element.Methods);
    Object.extend(Element.Methods.ByTag, {
      "FORM":     Object.clone(Form.Methods),
      "INPUT":    Object.clone(Form.Element.Methods),
      "SELECT":   Object.clone(Form.Element.Methods),
      "TEXTAREA": Object.clone(Form.Element.Methods),
      "BUTTON":   Object.clone(Form.Element.Methods)
    });
  }

  if (arguments.length == 2) {
    var tagName = methods;
    methods = arguments[1];
  }

  if (!tagName) Object.extend(Element.Methods, methods || { });
  else {
    if (Object.isArray(tagName)) tagName.each(extend);
    else extend(tagName);
  }

  function extend(tagName) {
    tagName = tagName.toUpperCase();
    if (!Element.Methods.ByTag[tagName])
      Element.Methods.ByTag[tagName] = { };
    Object.extend(Element.Methods.ByTag[tagName], methods);
  }

  function copy(methods, destination, onlyIfAbsent) {
    onlyIfAbsent = onlyIfAbsent || false;
    for (var property in methods) {
      var value = methods[property];
      if (!Object.isFunction(value)) continue;
      if (!onlyIfAbsent || !(property in destination))
        destination[property] = value.methodize();
    }
  }

  function findDOMClass(tagName) {
    var klass;
    var trans = {
      "OPTGROUP": "OptGroup", "TEXTAREA": "TextArea", "P": "Paragraph",
      "FIELDSET": "FieldSet", "UL": "UList", "OL": "OList", "DL": "DList",
      "DIR": "Directory", "H1": "Heading", "H2": "Heading", "H3": "Heading",
      "H4": "Heading", "H5": "Heading", "H6": "Heading", "Q": "Quote",
      "INS": "Mod", "DEL": "Mod", "A": "Anchor", "IMG": "Image", "CAPTION":
      "TableCaption", "COL": "TableCol", "COLGROUP": "TableCol", "THEAD":
      "TableSection", "TFOOT": "TableSection", "TBODY": "TableSection", "TR":
      "TableRow", "TH": "TableCell", "TD": "TableCell", "FRAMESET":
      "FrameSet", "IFRAME": "IFrame"
    };
    if (trans[tagName]) klass = 'HTML' + trans[tagName] + 'Element';
    if (window[klass]) return window[klass];
    klass = 'HTML' + tagName + 'Element';
    if (window[klass]) return window[klass];
    klass = 'HTML' + tagName.capitalize() + 'Element';
    if (window[klass]) return window[klass];

    var element = document.createElement(tagName),
        proto = element['__proto__'] || element.constructor.prototype;

    element = null;
    return proto;
  }

  var elementPrototype = window.HTMLElement ? HTMLElement.prototype :
   Element.prototype;

  if (F.ElementExtensions) {
    copy(Element.Methods, elementPrototype);
    copy(Element.Methods.Simulated, elementPrototype, true);
  }

  if (F.SpecificElementExtensions) {
    for (var tag in Element.Methods.ByTag) {
      var klass = findDOMClass(tag);
      if (Object.isUndefined(klass)) continue;
      copy(T[tag], klass.prototype);
    }
  }

  Object.extend(Element, Element.Methods);
  delete Element.ByTag;

  if (Element.extend.refresh) Element.extend.refresh();
  Element.cache = { };
};


document.viewport = {

  getDimensions: function() {
    return { width: this.getWidth(), height: this.getHeight() };
  },

  getScrollOffsets: function() {
    return Element._returnOffset(
      window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      window.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop);
  }
};

(function(viewport) {
  var B = Prototype.Browser, doc = document, element, property = {};

  function getRootElement() {
    if (B.WebKit && !doc.evaluate)
      return document;

    if (B.Opera && window.parseFloat(window.opera.version()) < 9.5)
      return document.body;

    return document.documentElement;
  }

  function define(D) {
    if (!element) element = getRootElement();

    property[D] = 'client' + D;

    viewport['get' + D] = function() { return element[property[D]] };
    return viewport['get' + D]();
  }

  viewport.getWidth  = define.curry('Width');

  viewport.getHeight = define.curry('Height');
})(document.viewport);


Element.Storage = {
  UID: 1
};

Element.addMethods({
  getStorage: function(element) {
    if (!(element = $(element))) return;

    var uid;
    if (element === window) {
      uid = 0;
    } else {
      if (typeof element._prototypeUID === "undefined")
        element._prototypeUID = Element.Storage.UID++;
      uid = element._prototypeUID;
    }

    if (!Element.Storage[uid])
      Element.Storage[uid] = $H();

    return Element.Storage[uid];
  },

  store: function(element, key, value) {
    if (!(element = $(element))) return;

    if (arguments.length === 2) {
      Element.getStorage(element).update(key);
    } else {
      Element.getStorage(element).set(key, value);
    }

    return element;
  },

  retrieve: function(element, key, defaultValue) {
    if (!(element = $(element))) return;
    var hash = Element.getStorage(element), value = hash.get(key);

    if (Object.isUndefined(value)) {
      hash.set(key, defaultValue);
      value = defaultValue;
    }

    return value;
  },

  clone: function(element, deep) {
    if (!(element = $(element))) return;
    var clone = element.cloneNode(deep);
    clone._prototypeUID = void 0;
    if (deep) {
      var descendants = Element.select(clone, '*'),
          i = descendants.length;
      while (i--) {
        descendants[i]._prototypeUID = void 0;
      }
    }
    return Element.extend(clone);
  },

  purge: function(element) {
    if (!(element = $(element))) return;
    var purgeElement = Element._purgeElement;

    purgeElement(element);

    var descendants = element.getElementsByTagName('*'),
     i = descendants.length;

    while (i--) purgeElement(descendants[i]);

    return null;
  }
});

(function() {

  function toDecimal(pctString) {
    var match = pctString.match(/^(\d+)%?$/i);
    if (!match) return null;
    return (Number(match[1]) / 100);
  }

  function getPixelValue(value, property, context) {
    var element = null;
    if (Object.isElement(value)) {
      element = value;
      value = element.getStyle(property);
    }

    if (value === null) {
      return null;
    }

    if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)) {
      return window.parseFloat(value);
    }

    var isPercentage = value.include('%'), isViewport = (context === document.viewport);

    if (/\d/.test(value) && element && element.runtimeStyle && !(isPercentage && isViewport)) {
      var style = element.style.left, rStyle = element.runtimeStyle.left;
      element.runtimeStyle.left = element.currentStyle.left;
      element.style.left = value || 0;
      value = element.style.pixelLeft;
      element.style.left = style;
      element.runtimeStyle.left = rStyle;

      return value;
    }

    if (element && isPercentage) {
      context = context || element.parentNode;
      var decimal = toDecimal(value);
      var whole = null;
      var position = element.getStyle('position');

      var isHorizontal = property.include('left') || property.include('right') ||
       property.include('width');

      var isVertical =  property.include('top') || property.include('bottom') ||
        property.include('height');

      if (context === document.viewport) {
        if (isHorizontal) {
          whole = document.viewport.getWidth();
        } else if (isVertical) {
          whole = document.viewport.getHeight();
        }
      } else {
        if (isHorizontal) {
          whole = $(context).measure('width');
        } else if (isVertical) {
          whole = $(context).measure('height');
        }
      }

      return (whole === null) ? 0 : whole * decimal;
    }

    return 0;
  }

  function toCSSPixels(number) {
    if (Object.isString(number) && number.endsWith('px')) {
      return number;
    }
    return number + 'px';
  }

  function isDisplayed(element) {
    var originalElement = element;
    while (element && element.parentNode) {
      var display = element.getStyle('display');
      if (display === 'none') {
        return false;
      }
      element = $(element.parentNode);
    }
    return true;
  }

  var hasLayout = Prototype.K;
  if ('currentStyle' in document.documentElement) {
    hasLayout = function(element) {
      if (!element.currentStyle.hasLayout) {
        element.style.zoom = 1;
      }
      return element;
    };
  }

  function cssNameFor(key) {
    if (key.include('border')) key = key + '-width';
    return key.camelize();
  }

  Element.Layout = Class.create(Hash, {
    initialize: function($super, element, preCompute) {
      $super();
      this.element = $(element);

      Element.Layout.PROPERTIES.each( function(property) {
        this._set(property, null);
      }, this);

      if (preCompute) {
        this._preComputing = true;
        this._begin();
        Element.Layout.PROPERTIES.each( this._compute, this );
        this._end();
        this._preComputing = false;
      }
    },

    _set: function(property, value) {
      return Hash.prototype.set.call(this, property, value);
    },

    set: function(property, value) {
      throw "Properties of Element.Layout are read-only.";
    },

    get: function($super, property) {
      var value = $super(property);
      return value === null ? this._compute(property) : value;
    },

    _begin: function() {
      if (this._prepared) return;

      var element = this.element;
      if (isDisplayed(element)) {
        this._prepared = true;
        return;
      }

      var originalStyles = {
        position:   element.style.position   || '',
        width:      element.style.width      || '',
        visibility: element.style.visibility || '',
        display:    element.style.display    || ''
      };

      element.store('prototype_original_styles', originalStyles);

      var position = element.getStyle('position'),
       width = element.getStyle('width');

      if (width === "0px" || width === null) {
        element.style.display = 'block';
        width = element.getStyle('width');
      }

      var context = (position === 'fixed') ? document.viewport :
       element.parentNode;

      element.setStyle({
        position:   'absolute',
        visibility: 'hidden',
        display:    'block'
      });

      var positionedWidth = element.getStyle('width');

      var newWidth;
      if (width && (positionedWidth === width)) {
        newWidth = getPixelValue(element, 'width', context);
      } else if (position === 'absolute' || position === 'fixed') {
        newWidth = getPixelValue(element, 'width', context);
      } else {
        var parent = element.parentNode, pLayout = $(parent).getLayout();

        newWidth = pLayout.get('width') -
         this.get('margin-left') -
         this.get('border-left') -
         this.get('padding-left') -
         this.get('padding-right') -
         this.get('border-right') -
         this.get('margin-right');
      }

      element.setStyle({ width: newWidth + 'px' });

      this._prepared = true;
    },

    _end: function() {
      var element = this.element;
      var originalStyles = element.retrieve('prototype_original_styles');
      element.store('prototype_original_styles', null);
      element.setStyle(originalStyles);
      this._prepared = false;
    },

    _compute: function(property) {
      var COMPUTATIONS = Element.Layout.COMPUTATIONS;
      if (!(property in COMPUTATIONS)) {
        throw "Property not found.";
      }

      return this._set(property, COMPUTATIONS[property].call(this, this.element));
    },

    toObject: function() {
      var args = $A(arguments);
      var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
       args.join(' ').split(' ');
      var obj = {};
      keys.each( function(key) {
        if (!Element.Layout.PROPERTIES.include(key)) return;
        var value = this.get(key);
        if (value != null) obj[key] = value;
      }, this);
      return obj;
    },

    toHash: function() {
      var obj = this.toObject.apply(this, arguments);
      return new Hash(obj);
    },

    toCSS: function() {
      var args = $A(arguments);
      var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
       args.join(' ').split(' ');
      var css = {};

      keys.each( function(key) {
        if (!Element.Layout.PROPERTIES.include(key)) return;
        if (Element.Layout.COMPOSITE_PROPERTIES.include(key)) return;

        var value = this.get(key);
        if (value != null) css[cssNameFor(key)] = value + 'px';
      }, this);
      return css;
    },

    inspect: function() {
      return "#<Element.Layout>";
    }
  });

  Object.extend(Element.Layout, {
    PROPERTIES: $w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),

    COMPOSITE_PROPERTIES: $w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),

    COMPUTATIONS: {
      'height': function(element) {
        if (!this._preComputing) this._begin();

        var bHeight = this.get('border-box-height');
        if (bHeight <= 0) {
          if (!this._preComputing) this._end();
          return 0;
        }

        var bTop = this.get('border-top'),
         bBottom = this.get('border-bottom');

        var pTop = this.get('padding-top'),
         pBottom = this.get('padding-bottom');

        if (!this._preComputing) this._end();

        return bHeight - bTop - bBottom - pTop - pBottom;
      },

      'width': function(element) {
        if (!this._preComputing) this._begin();

        var bWidth = this.get('border-box-width');
        if (bWidth <= 0) {
          if (!this._preComputing) this._end();
          return 0;
        }

        var bLeft = this.get('border-left'),
         bRight = this.get('border-right');

        var pLeft = this.get('padding-left'),
         pRight = this.get('padding-right');

        if (!this._preComputing) this._end();

        return bWidth - bLeft - bRight - pLeft - pRight;
      },

      'padding-box-height': function(element) {
        var height = this.get('height'),
         pTop = this.get('padding-top'),
         pBottom = this.get('padding-bottom');

        return height + pTop + pBottom;
      },

      'padding-box-width': function(element) {
        var width = this.get('width'),
         pLeft = this.get('padding-left'),
         pRight = this.get('padding-right');

        return width + pLeft + pRight;
      },

      'border-box-height': function(element) {
        if (!this._preComputing) this._begin();
        var height = element.offsetHeight;
        if (!this._preComputing) this._end();
        return height;
      },

      'border-box-width': function(element) {
        if (!this._preComputing) this._begin();
        var width = element.offsetWidth;
        if (!this._preComputing) this._end();
        return width;
      },

      'margin-box-height': function(element) {
        var bHeight = this.get('border-box-height'),
         mTop = this.get('margin-top'),
         mBottom = this.get('margin-bottom');

        if (bHeight <= 0) return 0;

        return bHeight + mTop + mBottom;
      },

      'margin-box-width': function(element) {
        var bWidth = this.get('border-box-width'),
         mLeft = this.get('margin-left'),
         mRight = this.get('margin-right');

        if (bWidth <= 0) return 0;

        return bWidth + mLeft + mRight;
      },

      'top': function(element) {
        var offset = element.positionedOffset();
        return offset.top;
      },

      'bottom': function(element) {
        var offset = element.positionedOffset(),
         parent = element.getOffsetParent(),
         pHeight = parent.measure('height');

        var mHeight = this.get('border-box-height');

        return pHeight - mHeight - offset.top;
      },

      'left': function(element) {
        var offset = element.positionedOffset();
        return offset.left;
      },

      'right': function(element) {
        var offset = element.positionedOffset(),
         parent = element.getOffsetParent(),
         pWidth = parent.measure('width');

        var mWidth = this.get('border-box-width');

        return pWidth - mWidth - offset.left;
      },

      'padding-top': function(element) {
        return getPixelValue(element, 'paddingTop');
      },

      'padding-bottom': function(element) {
        return getPixelValue(element, 'paddingBottom');
      },

      'padding-left': function(element) {
        return getPixelValue(element, 'paddingLeft');
      },

      'padding-right': function(element) {
        return getPixelValue(element, 'paddingRight');
      },

      'border-top': function(element) {
        return getPixelValue(element, 'borderTopWidth');
      },

      'border-bottom': function(element) {
        return getPixelValue(element, 'borderBottomWidth');
      },

      'border-left': function(element) {
        return getPixelValue(element, 'borderLeftWidth');
      },

      'border-right': function(element) {
        return getPixelValue(element, 'borderRightWidth');
      },

      'margin-top': function(element) {
        return getPixelValue(element, 'marginTop');
      },

      'margin-bottom': function(element) {
        return getPixelValue(element, 'marginBottom');
      },

      'margin-left': function(element) {
        return getPixelValue(element, 'marginLeft');
      },

      'margin-right': function(element) {
        return getPixelValue(element, 'marginRight');
      }
    }
  });

  if ('getBoundingClientRect' in document.documentElement) {
    Object.extend(Element.Layout.COMPUTATIONS, {
      'right': function(element) {
        var parent = hasLayout(element.getOffsetParent());
        var rect = element.getBoundingClientRect(),
         pRect = parent.getBoundingClientRect();

        return (pRect.right - rect.right).round();
      },

      'bottom': function(element) {
        var parent = hasLayout(element.getOffsetParent());
        var rect = element.getBoundingClientRect(),
         pRect = parent.getBoundingClientRect();

        return (pRect.bottom - rect.bottom).round();
      }
    });
  }

  Element.Offset = Class.create({
    initialize: function(left, top) {
      this.left = left.round();
      this.top  = top.round();

      this[0] = this.left;
      this[1] = this.top;
    },

    relativeTo: function(offset) {
      return new Element.Offset(
        this.left - offset.left,
        this.top  - offset.top
      );
    },

    inspect: function() {
      return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
    },

    toString: function() {
      return "[#{left}, #{top}]".interpolate(this);
    },

    toArray: function() {
      return [this.left, this.top];
    }
  });

  function getLayout(element, preCompute) {
    return new Element.Layout(element, preCompute);
  }

  function measure(element, property) {
    return $(element).getLayout().get(property);
  }

  function getDimensions(element) {
    element = $(element);
    var display = Element.getStyle(element, 'display');

    if (display && display !== 'none') {
      return { width: element.offsetWidth, height: element.offsetHeight };
    }

    var style = element.style;
    var originalStyles = {
      visibility: style.visibility,
      position:   style.position,
      display:    style.display
    };

    var newStyles = {
      visibility: 'hidden',
      display:    'block'
    };

    if (originalStyles.position !== 'fixed')
      newStyles.position = 'absolute';

    Element.setStyle(element, newStyles);

    var dimensions = {
      width:  element.offsetWidth,
      height: element.offsetHeight
    };

    Element.setStyle(element, originalStyles);

    return dimensions;
  }

  function getOffsetParent(element) {
    element = $(element);

    if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
      return $(document.body);

    var isInline = (Element.getStyle(element, 'display') === 'inline');
    if (!isInline && element.offsetParent) return $(element.offsetParent);

    while ((element = element.parentNode) && element !== document.body) {
      if (Element.getStyle(element, 'position') !== 'static') {
        return isHtml(element) ? $(document.body) : $(element);
      }
    }

    return $(document.body);
  }


  function cumulativeOffset(element) {
    element = $(element);
    var valueT = 0, valueL = 0;
    if (element.parentNode) {
      do {
        valueT += element.offsetTop  || 0;
        valueL += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);
    }
    return new Element.Offset(valueL, valueT);
  }

  function positionedOffset(element) {
    element = $(element);

    var layout = element.getLayout();

    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (isBody(element)) break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);

    valueL -= layout.get('margin-top');
    valueT -= layout.get('margin-left');

    return new Element.Offset(valueL, valueT);
  }

  function cumulativeScrollOffset(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return new Element.Offset(valueL, valueT);
  }

  function viewportOffset(forElement) {
    element = $(element);
    var valueT = 0, valueL = 0, docBody = document.body;

    var element = forElement;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      if (element.offsetParent == docBody &&
        Element.getStyle(element, 'position') == 'absolute') break;
    } while (element = element.offsetParent);

    element = forElement;
    do {
      if (element != docBody) {
        valueT -= element.scrollTop  || 0;
        valueL -= element.scrollLeft || 0;
      }
    } while (element = element.parentNode);
    return new Element.Offset(valueL, valueT);
  }

  function absolutize(element) {
    element = $(element);

    if (Element.getStyle(element, 'position') === 'absolute') {
      return element;
    }

    var offsetParent = getOffsetParent(element);
    var eOffset = element.viewportOffset(),
     pOffset = offsetParent.viewportOffset();

    var offset = eOffset.relativeTo(pOffset);
    var layout = element.getLayout();

    element.store('prototype_absolutize_original_styles', {
      left:   element.getStyle('left'),
      top:    element.getStyle('top'),
      width:  element.getStyle('width'),
      height: element.getStyle('height')
    });

    element.setStyle({
      position: 'absolute',
      top:    offset.top + 'px',
      left:   offset.left + 'px',
      width:  layout.get('width') + 'px',
      height: layout.get('height') + 'px'
    });

    return element;
  }

  function relativize(element) {
    element = $(element);
    if (Element.getStyle(element, 'position') === 'relative') {
      return element;
    }

    var originalStyles =
     element.retrieve('prototype_absolutize_original_styles');

    if (originalStyles) element.setStyle(originalStyles);
    return element;
  }

  if (Prototype.Browser.IE) {
    getOffsetParent = getOffsetParent.wrap(
      function(proceed, element) {
        element = $(element);

        if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
          return $(document.body);

        var position = element.getStyle('position');
        if (position !== 'static') return proceed(element);

        element.setStyle({ position: 'relative' });
        var value = proceed(element);
        element.setStyle({ position: position });
        return value;
      }
    );

    positionedOffset = positionedOffset.wrap(function(proceed, element) {
      element = $(element);
      if (!element.parentNode) return new Element.Offset(0, 0);
      var position = element.getStyle('position');
      if (position !== 'static') return proceed(element);

      var offsetParent = element.getOffsetParent();
      if (offsetParent && offsetParent.getStyle('position') === 'fixed')
        hasLayout(offsetParent);

      element.setStyle({ position: 'relative' });
      var value = proceed(element);
      element.setStyle({ position: position });
      return value;
    });
  } else if (Prototype.Browser.Webkit) {
    cumulativeOffset = function(element) {
      element = $(element);
      var valueT = 0, valueL = 0;
      do {
        valueT += element.offsetTop  || 0;
        valueL += element.offsetLeft || 0;
        if (element.offsetParent == document.body)
          if (Element.getStyle(element, 'position') == 'absolute') break;

        element = element.offsetParent;
      } while (element);

      return new Element.Offset(valueL, valueT);
    };
  }


  Element.addMethods({
    getLayout:              getLayout,
    measure:                measure,
    getDimensions:          getDimensions,
    getOffsetParent:        getOffsetParent,
    cumulativeOffset:       cumulativeOffset,
    positionedOffset:       positionedOffset,
    cumulativeScrollOffset: cumulativeScrollOffset,
    viewportOffset:         viewportOffset,
    absolutize:             absolutize,
    relativize:             relativize
  });

  function isBody(element) {
    return element.nodeName.toUpperCase() === 'BODY';
  }

  function isHtml(element) {
    return element.nodeName.toUpperCase() === 'HTML';
  }

  function isDocument(element) {
    return element.nodeType === Node.DOCUMENT_NODE;
  }

  function isDetached(element) {
    return element !== document.body &&
     !Element.descendantOf(element, document.body);
  }

  if ('getBoundingClientRect' in document.documentElement) {
    Element.addMethods({
      viewportOffset: function(element) {
        element = $(element);
        if (isDetached(element)) return new Element.Offset(0, 0);

        var rect = element.getBoundingClientRect(),
         docEl = document.documentElement;
        return new Element.Offset(rect.left - docEl.clientLeft,
         rect.top - docEl.clientTop);
      }
    });
  }
})();
window.$$ = function() {
  var expression = $A(arguments).join(', ');
  return Prototype.Selector.select(expression, document);
};

Prototype.Selector = (function() {

  function select() {
    throw new Error('Method "Prototype.Selector.select" must be defined.');
  }

  function match() {
    throw new Error('Method "Prototype.Selector.match" must be defined.');
  }

  function find(elements, expression, index) {
    index = index || 0;
    var match = Prototype.Selector.match, length = elements.length, matchIndex = 0, i;

    for (i = 0; i < length; i++) {
      if (match(elements[i], expression) && index == matchIndex++) {
        return Element.extend(elements[i]);
      }
    }
  }

  function extendElements(elements) {
    for (var i = 0, length = elements.length; i < length; i++) {
      Element.extend(elements[i]);
    }
    return elements;
  }


  var K = Prototype.K;

  return {
    select: select,
    match: match,
    find: find,
    extendElements: (Element.extend === K) ? K : extendElements,
    extendElement: Element.extend
  };
})();
Prototype._original_property = window.Sizzle;
/*!
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;

[0, 0].sort(function(){
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	var origContext = context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, check, mode, extra, prune = true, contextXML = isXML(context),
		soFar = selector;

	while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {
		soFar = m[3];

		parts.push( m[1] );

		if ( m[2] ) {
			extra = m[3];
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] )
					selector += parts.shift();

				set = posProcess( selector, set );
			}
		}
	} else {
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
			var ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
		}

		if ( context ) {
			var ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
			set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray(set);
			} else {
				prune = false;
			}

			while ( parts.length ) {
				var cur = parts.pop(), pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}
		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context && context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function(results){
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort(sortOrder);

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[i-1] ) {
					results.splice(i--, 1);
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice(1,1);

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;

				if ( curLoop == result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
	leftMatch: {},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( !/\W/.test(part) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context, isXML){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while ( (node = node.previousSibling) )  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while ( (node = node.nextSibling) )  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first == 1 && last == 0 ) {
						return true;
					}

					var doneName = match[0],
						parent = elem.parentNode;

					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}
						parent.sizcache = doneName;
					}

					var diff = elem.nodeIndex - last;
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value != check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 );

} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		if ( !a.sourceIndex || !b.sourceIndex ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		if ( !a.ownerDocument || !b.ownerDocument ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return 0;
		}

		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.setStart(a, 0);
		aRange.setEnd(a, 0);
		bRange.setStart(b, 0);
		bRange.setEnd(b, 0);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

(function(){
	var form = document.createElement("div"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<a name='" + id + "'/>";

	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	if ( !!document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
	root = form = null; // release memory in IE
})();

(function(){

	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}

	div = null; // release memory in IE
})();

if ( document.querySelectorAll ) (function(){
	var oldSizzle = Sizzle, div = document.createElement("div");
	div.innerHTML = "<p class='TEST'></p>";

	if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
		return;
	}

	Sizzle = function(query, context, extra, seed){
		context = context || document;

		if ( !seed && context.nodeType === 9 && !isXML(context) ) {
			try {
				return makeArray( context.querySelectorAll(query), extra );
			} catch(e){}
		}

		return oldSizzle(query, context, extra, seed);
	};

	for ( var prop in oldSizzle ) {
		Sizzle[ prop ] = oldSizzle[ prop ];
	}

	div = null; // release memory in IE
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	if ( div.getElementsByClassName("e").length === 0 )
		return;

	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 )
		return;

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	div = null; // release memory in IE
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && elem.ownerDocument.documentElement.nodeName !== "HTML";
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};


window.Sizzle = Sizzle;

})();

;(function(engine) {
  var extendElements = Prototype.Selector.extendElements;

  function select(selector, scope) {
    return extendElements(engine(selector, scope || document));
  }

  function match(element, selector) {
    return engine.matches(selector, [element]).length == 1;
  }

  Prototype.Selector.engine = engine;
  Prototype.Selector.select = select;
  Prototype.Selector.match = match;
})(Sizzle);

window.Sizzle = Prototype._original_property;
delete Prototype._original_property;

var Form = {
  reset: function(form) {
    form = $(form);
    form.reset();
    return form;
  },

  serializeElements: function(elements, options) {
    if (typeof options != 'object') options = { hash: !!options };
    else if (Object.isUndefined(options.hash)) options.hash = true;
    var key, value, submitted = false, submit = options.submit, accumulator, initial;

    if (options.hash) {
      initial = {};
      accumulator = function(result, key, value) {
        if (key in result) {
          if (!Object.isArray(result[key])) result[key] = [result[key]];
          result[key].push(value);
        } else result[key] = value;
        return result;
      };
    } else {
      initial = '';
      accumulator = function(result, key, value) {
        return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
      }
    }

    return elements.inject(initial, function(result, element) {
      if (!element.disabled && element.name) {
        key = element.name; value = $(element).getValue();
        if (value != null && element.type != 'file' && (element.type != 'submit' || (!submitted &&
            submit !== false && (!submit || key == submit) && (submitted = true)))) {
          result = accumulator(result, key, value);
        }
      }
      return result;
    });
  }
};

Form.Methods = {
  serialize: function(form, options) {
    return Form.serializeElements(Form.getElements(form), options);
  },

  getElements: function(form) {
    var elements = $(form).getElementsByTagName('*'),
        element,
        arr = [ ],
        serializers = Form.Element.Serializers;
    for (var i = 0; element = elements[i]; i++) {
      arr.push(element);
    }
    return arr.inject([], function(elements, child) {
      if (serializers[child.tagName.toLowerCase()])
        elements.push(Element.extend(child));
      return elements;
    })
  },

  getInputs: function(form, typeName, name) {
    form = $(form);
    var inputs = form.getElementsByTagName('input');

    if (!typeName && !name) return $A(inputs).map(Element.extend);

    for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
      var input = inputs[i];
      if ((typeName && input.type != typeName) || (name && input.name != name))
        continue;
      matchingInputs.push(Element.extend(input));
    }

    return matchingInputs;
  },

  disable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('disable');
    return form;
  },

  enable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('enable');
    return form;
  },

  findFirstElement: function(form) {
    var elements = $(form).getElements().findAll(function(element) {
      return 'hidden' != element.type && !element.disabled;
    });
    var firstByIndex = elements.findAll(function(element) {
      return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
    }).sortBy(function(element) { return element.tabIndex }).first();

    return firstByIndex ? firstByIndex : elements.find(function(element) {
      return /^(?:input|select|textarea)$/i.test(element.tagName);
    });
  },

  focusFirstElement: function(form) {
    form = $(form);
    var element = form.findFirstElement();
    if (element) element.activate();
    return form;
  },

  request: function(form, options) {
    form = $(form), options = Object.clone(options || { });

    var params = options.parameters, action = form.readAttribute('action') || '';
    if (action.blank()) action = window.location.href;
    options.parameters = form.serialize(true);

    if (params) {
      if (Object.isString(params)) params = params.toQueryParams();
      Object.extend(options.parameters, params);
    }

    if (form.hasAttribute('method') && !options.method)
      options.method = form.method;

    return new Ajax.Request(action, options);
  }
};

/*--------------------------------------------------------------------------*/


Form.Element = {
  focus: function(element) {
    $(element).focus();
    return element;
  },

  select: function(element) {
    $(element).select();
    return element;
  }
};

Form.Element.Methods = {

  serialize: function(element) {
    element = $(element);
    if (!element.disabled && element.name) {
      var value = element.getValue();
      if (value != undefined) {
        var pair = { };
        pair[element.name] = value;
        return Object.toQueryString(pair);
      }
    }
    return '';
  },

  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    return Form.Element.Serializers[method](element);
  },

  setValue: function(element, value) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    Form.Element.Serializers[method](element, value);
    return element;
  },

  clear: function(element) {
    $(element).value = '';
    return element;
  },

  present: function(element) {
    return $(element).value != '';
  },

  activate: function(element) {
    element = $(element);
    try {
      element.focus();
      if (element.select && (element.tagName.toLowerCase() != 'input' ||
          !(/^(?:button|reset|submit)$/i.test(element.type))))
        element.select();
    } catch (e) { }
    return element;
  },

  disable: function(element) {
    element = $(element);
    element.disabled = true;
    return element;
  },

  enable: function(element) {
    element = $(element);
    element.disabled = false;
    return element;
  }
};

/*--------------------------------------------------------------------------*/

var Field = Form.Element;

var $F = Form.Element.Methods.getValue;

/*--------------------------------------------------------------------------*/

Form.Element.Serializers = (function() {
  function input(element, value) {
    switch (element.type.toLowerCase()) {
      case 'checkbox':
      case 'radio':
        return inputSelector(element, value);
      default:
        return valueSelector(element, value);
    }
  }

  function inputSelector(element, value) {
    if (Object.isUndefined(value))
      return element.checked ? element.value : null;
    else element.checked = !!value;
  }

  function valueSelector(element, value) {
    if (Object.isUndefined(value)) return element.value;
    else element.value = value;
  }

  function select(element, value) {
    if (Object.isUndefined(value))
      return (element.type === 'select-one' ? selectOne : selectMany)(element);

    var opt, currentValue, single = !Object.isArray(value);
    for (var i = 0, length = element.length; i < length; i++) {
      opt = element.options[i];
      currentValue = this.optionValue(opt);
      if (single) {
        if (currentValue == value) {
          opt.selected = true;
          return;
        }
      }
      else opt.selected = value.include(currentValue);
    }
  }

  function selectOne(element) {
    var index = element.selectedIndex;
    return index >= 0 ? optionValue(element.options[index]) : null;
  }

  function selectMany(element) {
    var values, length = element.length;
    if (!length) return null;

    for (var i = 0, values = []; i < length; i++) {
      var opt = element.options[i];
      if (opt.selected) values.push(optionValue(opt));
    }
    return values;
  }

  function optionValue(opt) {
    return Element.hasAttribute(opt, 'value') ? opt.value : opt.text;
  }

  return {
    input:         input,
    inputSelector: inputSelector,
    textarea:      valueSelector,
    select:        select,
    selectOne:     selectOne,
    selectMany:    selectMany,
    optionValue:   optionValue,
    button:        valueSelector
  };
})();

/*--------------------------------------------------------------------------*/


Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
  initialize: function($super, element, frequency, callback) {
    $super(callback, frequency);
    this.element   = $(element);
    this.lastValue = this.getValue();
  },

  execute: function() {
    var value = this.getValue();
    if (Object.isString(this.lastValue) && Object.isString(value) ?
        this.lastValue != value : String(this.lastValue) != String(value)) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  }
});

Form.Element.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = Class.create({
  initialize: function(element, callback) {
    this.element  = $(element);
    this.callback = callback;

    this.lastValue = this.getValue();
    if (this.element.tagName.toLowerCase() == 'form')
      this.registerFormCallbacks();
    else
      this.registerCallback(this.element);
  },

  onElementEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  },

  registerFormCallbacks: function() {
    Form.getElements(this.element).each(this.registerCallback, this);
  },

  registerCallback: function(element) {
    if (element.type) {
      switch (element.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          Event.observe(element, 'click', this.onElementEvent.bind(this));
          break;
        default:
          Event.observe(element, 'change', this.onElementEvent.bind(this));
          break;
      }
    }
  }
});

Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});
(function() {

  var Event = {
    KEY_BACKSPACE: 8,
    KEY_TAB:       9,
    KEY_RETURN:   13,
    KEY_ESC:      27,
    KEY_LEFT:     37,
    KEY_UP:       38,
    KEY_RIGHT:    39,
    KEY_DOWN:     40,
    KEY_DELETE:   46,
    KEY_HOME:     36,
    KEY_END:      35,
    KEY_PAGEUP:   33,
    KEY_PAGEDOWN: 34,
    KEY_INSERT:   45,

    cache: {}
  };

  var docEl = document.documentElement;
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl
    && 'onmouseleave' in docEl;



  var isIELegacyEvent = function(event) { return false; };

  if (window.attachEvent) {
    if (window.addEventListener) {
      isIELegacyEvent = function(event) {
        return !(event instanceof window.Event);
      };
    } else {
      isIELegacyEvent = function(event) { return true; };
    }
  }

  var _isButton;

  function _isButtonForDOMEvents(event, code) {
    return event.which ? (event.which === code + 1) : (event.button === code);
  }

  var legacyButtonMap = { 0: 1, 1: 4, 2: 2 };
  function _isButtonForLegacyEvents(event, code) {
    return event.button === legacyButtonMap[code];
  }

  function _isButtonForWebKit(event, code) {
    switch (code) {
      case 0: return event.which == 1 && !event.metaKey;
      case 1: return event.which == 2 || (event.which == 1 && event.metaKey);
      case 2: return event.which == 3;
      default: return false;
    }
  }

  if (window.attachEvent) {
    if (!window.addEventListener) {
      _isButton = _isButtonForLegacyEvents;
    } else {
      _isButton = function(event, code) {
        return isIELegacyEvent(event) ? _isButtonForLegacyEvents(event, code) :
         _isButtonForDOMEvents(event, code);
      }
    }
  } else if (Prototype.Browser.WebKit) {
    _isButton = _isButtonForWebKit;
  } else {
    _isButton = _isButtonForDOMEvents;
  }

  function isLeftClick(event)   { return _isButton(event, 0) }

  function isMiddleClick(event) { return _isButton(event, 1) }

  function isRightClick(event)  { return _isButton(event, 2) }

  function element(event) {
    event = Event.extend(event);

    var node = event.target, type = event.type,
     currentTarget = event.currentTarget;

    if (currentTarget && currentTarget.tagName) {
      if (type === 'load' || type === 'error' ||
        (type === 'click' && currentTarget.tagName.toLowerCase() === 'input'
          && currentTarget.type === 'radio'))
            node = currentTarget;
    }

    if (node.nodeType == Node.TEXT_NODE)
      node = node.parentNode;

    return Element.extend(node);
  }

  function findElement(event, expression) {
    var element = Event.element(event);

    if (!expression) return element;
    while (element) {
      if (Object.isElement(element) && Prototype.Selector.match(element, expression)) {
        return Element.extend(element);
      }
      element = element.parentNode;
    }
  }

  function pointer(event) {
    return { x: pointerX(event), y: pointerY(event) };
  }

  function pointerX(event) {
    var docElement = document.documentElement,
     body = document.body || { scrollLeft: 0 };

    return event.pageX || (event.clientX +
      (docElement.scrollLeft || body.scrollLeft) -
      (docElement.clientLeft || 0));
  }

  function pointerY(event) {
    var docElement = document.documentElement,
     body = document.body || { scrollTop: 0 };

    return  event.pageY || (event.clientY +
       (docElement.scrollTop || body.scrollTop) -
       (docElement.clientTop || 0));
  }


  function stop(event) {
    Event.extend(event);
    event.preventDefault();
    event.stopPropagation();

    event.stopped = true;
  }


  Event.Methods = {
    isLeftClick:   isLeftClick,
    isMiddleClick: isMiddleClick,
    isRightClick:  isRightClick,

    element:     element,
    findElement: findElement,

    pointer:  pointer,
    pointerX: pointerX,
    pointerY: pointerY,

    stop: stop
  };

  var methods = Object.keys(Event.Methods).inject({ }, function(m, name) {
    m[name] = Event.Methods[name].methodize();
    return m;
  });

  if (window.attachEvent) {
    function _relatedTarget(event) {
      var element;
      switch (event.type) {
        case 'mouseover':
        case 'mouseenter':
          element = event.fromElement;
          break;
        case 'mouseout':
        case 'mouseleave':
          element = event.toElement;
          break;
        default:
          return null;
      }
      return Element.extend(element);
    }

    var additionalMethods = {
      stopPropagation: function() { this.cancelBubble = true },
      preventDefault:  function() { this.returnValue = false },
      inspect: function() { return '[object Event]' }
    };

    Event.extend = function(event, element) {
      if (!event) return false;

      if (!isIELegacyEvent(event)) return event;

      if (event._extendedByPrototype) return event;
      event._extendedByPrototype = Prototype.emptyFunction;

      var pointer = Event.pointer(event);

      Object.extend(event, {
        target: event.srcElement || element,
        relatedTarget: _relatedTarget(event),
        pageX:  pointer.x,
        pageY:  pointer.y
      });

      Object.extend(event, methods);
      Object.extend(event, additionalMethods);

      return event;
    };
  } else {
    Event.extend = Prototype.K;
  }

  if (window.addEventListener) {
    Event.prototype = window.Event.prototype || document.createEvent('HTMLEvents').__proto__;
    Object.extend(Event.prototype, methods);
  }

  function _createResponder(element, eventName, handler) {
    var registry = Element.retrieve(element, 'prototype_event_registry');

    if (Object.isUndefined(registry)) {
      CACHE.push(element);
      registry = Element.retrieve(element, 'prototype_event_registry', $H());
    }

    var respondersForEvent = registry.get(eventName);
    if (Object.isUndefined(respondersForEvent)) {
      respondersForEvent = [];
      registry.set(eventName, respondersForEvent);
    }

    if (respondersForEvent.pluck('handler').include(handler)) return false;

    var responder;
    if (eventName.include(":")) {
      responder = function(event) {
        if (Object.isUndefined(event.eventName))
          return false;

        if (event.eventName !== eventName)
          return false;

        Event.extend(event, element);
        handler.call(element, event);
      };
    } else {
      if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED &&
       (eventName === "mouseenter" || eventName === "mouseleave")) {
        if (eventName === "mouseenter" || eventName === "mouseleave") {
          responder = function(event) {
            Event.extend(event, element);

            var parent = event.relatedTarget;
            while (parent && parent !== element) {
              try { parent = parent.parentNode; }
              catch(e) { parent = element; }
            }

            if (parent === element) return;

            handler.call(element, event);
          };
        }
      } else {
        responder = function(event) {
          Event.extend(event, element);
          handler.call(element, event);
        };
      }
    }

    responder.handler = handler;
    respondersForEvent.push(responder);
    return responder;
  }

  function _destroyCache() {
    for (var i = 0, length = CACHE.length; i < length; i++) {
      Event.stopObserving(CACHE[i]);
      CACHE[i] = null;
    }
  }

  var CACHE = [];

  if (Prototype.Browser.IE)
    window.attachEvent('onunload', _destroyCache);

  if (Prototype.Browser.WebKit)
    window.addEventListener('unload', Prototype.emptyFunction, false);


  var _getDOMEventName = Prototype.K,
      translations = { mouseenter: "mouseover", mouseleave: "mouseout" };

  if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    _getDOMEventName = function(eventName) {
      return (translations[eventName] || eventName);
    };
  }

  function observe(element, eventName, handler) {
    element = $(element);

    var responder = _createResponder(element, eventName, handler);

    if (!responder) return element;

    if (eventName.include(':')) {
      if (element.addEventListener)
        element.addEventListener("dataavailable", responder, false);
      else {
        element.attachEvent("ondataavailable", responder);
        element.attachEvent("onlosecapture", responder);
      }
    } else {
      var actualEventName = _getDOMEventName(eventName);

      if (element.addEventListener)
        element.addEventListener(actualEventName, responder, false);
      else
        element.attachEvent("on" + actualEventName, responder);
    }

    return element;
  }

  function stopObserving(element, eventName, handler) {
    element = $(element);

    var registry = Element.retrieve(element, 'prototype_event_registry');
    if (!registry) return element;

    if (!eventName) {
      registry.each( function(pair) {
        var eventName = pair.key;
        stopObserving(element, eventName);
      });
      return element;
    }

    var responders = registry.get(eventName);
    if (!responders) return element;

    if (!handler) {
      responders.each(function(r) {
        stopObserving(element, eventName, r.handler);
      });
      return element;
    }

    var i = responders.length, responder;
    while (i--) {
      if (responders[i].handler === handler) {
        responder = responders[i];
        break;
      }
    }
    if (!responder) return element;

    if (eventName.include(':')) {
      if (element.removeEventListener)
        element.removeEventListener("dataavailable", responder, false);
      else {
        element.detachEvent("ondataavailable", responder);
        element.detachEvent("onlosecapture", responder);
      }
    } else {
      var actualEventName = _getDOMEventName(eventName);
      if (element.removeEventListener)
        element.removeEventListener(actualEventName, responder, false);
      else
        element.detachEvent('on' + actualEventName, responder);
    }

    registry.set(eventName, responders.without(responder));

    return element;
  }

  function fire(element, eventName, memo, bubble) {
    element = $(element);

    if (Object.isUndefined(bubble))
      bubble = true;

    if (element == document && document.createEvent && !element.dispatchEvent)
      element = document.documentElement;

    var event;
    if (document.createEvent) {
      event = document.createEvent('HTMLEvents');
      event.initEvent('dataavailable', bubble, true);
    } else {
      event = document.createEventObject();
      event.eventType = bubble ? 'ondataavailable' : 'onlosecapture';
    }

    event.eventName = eventName;
    event.memo = memo || { };

    if (document.createEvent)
      element.dispatchEvent(event);
    else
      element.fireEvent(event.eventType, event);

    return Event.extend(event);
  }

  Event.Handler = Class.create({
    initialize: function(element, eventName, selector, callback) {
      this.element   = $(element);
      this.eventName = eventName;
      this.selector  = selector;
      this.callback  = callback;
      this.handler   = this.handleEvent.bind(this);
    },

    start: function() {
      Event.observe(this.element, this.eventName, this.handler);
      return this;
    },

    stop: function() {
      Event.stopObserving(this.element, this.eventName, this.handler);
      return this;
    },

    handleEvent: function(event) {
      var element = Event.findElement(event, this.selector);
      if (element) this.callback.call(this.element, event, element);
    }
  });

  function on(element, eventName, selector, callback) {
    element = $(element);
    if (Object.isFunction(selector) && Object.isUndefined(callback)) {
      callback = selector, selector = null;
    }

    return new Event.Handler(element, eventName, selector, callback).start();
  }

  Object.extend(Event, Event.Methods);

  Object.extend(Event, {
    fire:          fire,
    observe:       observe,
    stopObserving: stopObserving,
    on:            on
  });

  Element.addMethods({
    fire:          fire,

    observe:       observe,

    stopObserving: stopObserving,

    on:            on
  });

  Object.extend(document, {
    fire:          fire.methodize(),

    observe:       observe.methodize(),

    stopObserving: stopObserving.methodize(),

    on:            on.methodize(),

    loaded:        false
  });

  if (window.Event) Object.extend(window.Event, Event);
  else window.Event = Event;
})();

(function() {
  /* Support for the DOMContentLoaded event is based on work by Dan Webb,
     Matthias Miller, Dean Edwards, John Resig, and Diego Perini. */

  var timer;

  function fireContentLoadedEvent() {
    if (document.loaded) return;
    if (timer) window.clearTimeout(timer);
    document.loaded = true;
    document.fire('dom:loaded');
  }

  function checkReadyState() {
    if (document.readyState === 'complete') {
      document.stopObserving('readystatechange', checkReadyState);
      fireContentLoadedEvent();
    }
  }

  function pollDoScroll() {
    try { document.documentElement.doScroll('left'); }
    catch(e) {
      timer = pollDoScroll.defer();
      return;
    }
    fireContentLoadedEvent();
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
  } else {
    document.observe('readystatechange', checkReadyState);
    if (window == top)
      timer = pollDoScroll.defer();
  }

  Event.observe(window, 'load', fireContentLoadedEvent);
})();

Element.addMethods();

/*------------------------------- DEPRECATED -------------------------------*/

Hash.toQueryString = Object.toQueryString;

var Toggle = { display: Element.toggle };

Element.Methods.childOf = Element.Methods.descendantOf;

var Insertion = {
  Before: function(element, content) {
    return Element.insert(element, {before:content});
  },

  Top: function(element, content) {
    return Element.insert(element, {top:content});
  },

  Bottom: function(element, content) {
    return Element.insert(element, {bottom:content});
  },

  After: function(element, content) {
    return Element.insert(element, {after:content});
  }
};

var $continue = new Error('"throw $continue" is deprecated, use "return" instead');

var Position = {
  includeScrollOffsets: false,

  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  within: function(element, x, y) {
    if (this.includeScrollOffsets)
      return this.withinIncludingScrolloffsets(element, x, y);
    this.xcomp = x;
    this.ycomp = y;
    this.offset = Element.cumulativeOffset(element);

    return (y >= this.offset[1] &&
            y <  this.offset[1] + element.offsetHeight &&
            x >= this.offset[0] &&
            x <  this.offset[0] + element.offsetWidth);
  },

  withinIncludingScrolloffsets: function(element, x, y) {
    var offsetcache = Element.cumulativeScrollOffset(element);

    this.xcomp = x + offsetcache[0] - this.deltaX;
    this.ycomp = y + offsetcache[1] - this.deltaY;
    this.offset = Element.cumulativeOffset(element);

    return (this.ycomp >= this.offset[1] &&
            this.ycomp <  this.offset[1] + element.offsetHeight &&
            this.xcomp >= this.offset[0] &&
            this.xcomp <  this.offset[0] + element.offsetWidth);
  },

  overlap: function(mode, element) {
    if (!mode) return 0;
    if (mode == 'vertical')
      return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
        element.offsetHeight;
    if (mode == 'horizontal')
      return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
        element.offsetWidth;
  },


  cumulativeOffset: Element.Methods.cumulativeOffset,

  positionedOffset: Element.Methods.positionedOffset,

  absolutize: function(element) {
    Position.prepare();
    return Element.absolutize(element);
  },

  relativize: function(element) {
    Position.prepare();
    return Element.relativize(element);
  },

  realOffset: Element.Methods.cumulativeScrollOffset,

  offsetParent: Element.Methods.getOffsetParent,

  page: Element.Methods.viewportOffset,

  clone: function(source, target, options) {
    options = options || { };
    return Element.clonePosition(target, source, options);
  }
};

/*--------------------------------------------------------------------------*/

if (!document.getElementsByClassName) document.getElementsByClassName = function(instanceMethods){
  function iter(name) {
    return name.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + name + " ')]";
  }

  instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ?
  function(element, className) {
    className = className.toString().strip();
    var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
    return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
  } : function(element, className) {
    className = className.toString().strip();
    var elements = [], classNames = (/\s/.test(className) ? $w(className) : null);
    if (!classNames && !className) return elements;

    var nodes = $(element).getElementsByTagName('*');
    className = ' ' + className + ' ';

    for (var i = 0, child, cn; child = nodes[i]; i++) {
      if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) ||
          (classNames && classNames.all(function(name) {
            return !name.toString().blank() && cn.include(' ' + name + ' ');
          }))))
        elements.push(Element.extend(child));
    }
    return elements;
  };

  return function(className, parentElement) {
    return $(parentElement || document.body).getElementsByClassName(className);
  };
}(Element.Methods);

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(iterator) {
    this.element.className.split(/\s+/).select(function(name) {
      return name.length > 0;
    })._each(iterator);
  },

  set: function(className) {
    this.element.className = className;
  },

  add: function(classNameToAdd) {
    if (this.include(classNameToAdd)) return;
    this.set($A(this).concat(classNameToAdd).join(' '));
  },

  remove: function(classNameToRemove) {
    if (!this.include(classNameToRemove)) return;
    this.set($A(this).without(classNameToRemove).join(' '));
  },

  toString: function() {
    return $A(this).join(' ');
  }
};

Object.extend(Element.ClassNames.prototype, Enumerable);

/*--------------------------------------------------------------------------*/

(function() {
  window.Selector = Class.create({
    initialize: function(expression) {
      this.expression = expression.strip();
    },

    findElements: function(rootElement) {
      return Prototype.Selector.select(this.expression, rootElement);
    },

    match: function(element) {
      return Prototype.Selector.match(element, this.expression);
    },

    toString: function() {
      return this.expression;
    },

    inspect: function() {
      return "#<Selector: " + this.expression + ">";
    }
  });

  Object.extend(Selector, {
    matchElements: function(elements, expression) {
      var match = Prototype.Selector.match,
          results = [];

      for (var i = 0, length = elements.length; i < length; i++) {
        var element = elements[i];
        if (match(element, expression)) {
          results.push(Element.extend(element));
        }
      }
      return results;
    },

    findElement: function(elements, expression, index) {
      index = index || 0;
      var matchIndex = 0, element;
      for (var i = 0, length = elements.length; i < length; i++) {
        element = elements[i];
        if (Prototype.Selector.match(element, expression) && index === matchIndex++) {
          return Element.extend(element);
        }
      }
    },

    findChildElements: function(element, expressions) {
      var selector = expressions.toArray().join(', ');
      return Prototype.Selector.select(selector, element || document);
    }
  });
})();

Prototype.ScriptFragment='<script(?![^>]*type="x-tmpl-mustache")[^>]*>([\\S\\s]*?)</script>';
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var l="hover"==r?"mouseenter":"focusin",a="hover"==r?"mouseleave":"focusout";this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),!i.isInStateTrue())return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var l="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,p=a.test(l);p&&(l=l.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(l).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),f=s[0].offsetWidth,c=s[0].offsetHeight;if(p){var u=l,d=this.getPosition(this.$viewport);l="bottom"==l&&h.bottom+c>d.bottom?"top":"top"==l&&h.top-c<d.top?"bottom":"right"==l&&h.right+f>d.width?"left":"left"==l&&h.left-f<d.left?"right":l,s.removeClass(u).addClass(l)}var v=this.getCalculatedOffset(l,h,f,c);this.applyPlacement(v,l);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),l=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(l)&&(l=0),e.top+=r,e.left+=l,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var a=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,a,p);h.left?e.left+=h.left:e.top+=h.top;var f=/top|bottom/.test(i),c=f?2*h.left-n+a:2*h.top-s+p,u=f?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][u],f)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);if(!r.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,r=o?{top:0,left:0}:s?null:e.offset(),l={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,l,a,r)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var l=e.top-s-r.scroll,a=e.top+s-r.scroll+o;l<r.top?n.top=r.top-l:a>r.top+r.height&&(n.top=r.top+r.height-a)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){t.ui=t.ui||{};var e=(t.ui.version="1.12.1",0),i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var u=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?void(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}()):void(r[e]=s)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;a<r;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(t.isPlainObject(n)?e[s]=t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):e[s]=n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;r<i.length;r++)a=n.classesElementLookup[i[r]]||t(),a=t(e.add?t.unique(a.get().concat(e.element.get())):a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){t.inArray(e.target,n)!==-1&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){if(e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}});t.widget});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery)}(function(e){"use strict";var t=0,r=e,n="parseJSON";"JSON"in window&&"parse"in JSON&&(r=JSON,n="parse"),e.ajaxTransport("iframe",function(r){if(r.async){var n,a,o,i=r.initialIframeSrc||"javascript:false;";return{send:function(p,m){n=e('<form style="display:none;"></form>'),n.attr("accept-charset",r.formAcceptCharset),o=/\?/.test(r.url)?"&":"?","DELETE"===r.type?(r.url=r.url+o+"_method=DELETE",r.type="POST"):"PUT"===r.type?(r.url=r.url+o+"_method=PUT",r.type="POST"):"PATCH"===r.type&&(r.url=r.url+o+"_method=PATCH",r.type="POST"),t+=1,a=e('<iframe src="'+i+'" name="iframe-transport-'+t+'"></iframe>').bind("load",function(){var t,o=e.isArray(r.paramName)?r.paramName:[r.paramName];a.unbind("load").bind("load",function(){var t;try{if(t=a.contents(),!t.length||!t[0].firstChild)throw new Error}catch(r){t=void 0}m(200,"success",{iframe:t}),e('<iframe src="'+i+'"></iframe>').appendTo(n),window.setTimeout(function(){n.remove()},0)}),n.prop("target",a.prop("name")).prop("action",r.url).prop("method",r.type),r.formData&&e.each(r.formData,function(t,r){e('<input type="hidden"/>').prop("name",r.name).val(r.value).appendTo(n)}),r.fileInput&&r.fileInput.length&&"POST"===r.type&&(t=r.fileInput.clone(),r.fileInput.after(function(e){return t[e]}),r.paramName&&r.fileInput.each(function(t){e(this).prop("name",o[t]||r.paramName)}),n.append(r.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data"),r.fileInput.removeAttr("form")),n.submit(),t&&t.length&&r.fileInput.each(function(r,n){var a=e(t[r]);e(n).prop("name",a.prop("name")).attr("form",a.attr("form")),a.replaceWith(n)})}),n.append(a).appendTo(document.body)},abort:function(){a&&a.unbind("load").prop("src",i),n&&n.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&r[n](e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe xml":function(t){var r=t&&t[0];return r&&e.isXMLDoc(r)?r:e.parseXML(r.XMLDocument&&r.XMLDocument.xml||e(r.body).html())},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery-ui/ui/widget"],e):"object"==typeof exports?e(require("jquery"),require("./vendor/jquery.ui.widget")):e(window.jQuery)}(function(e){"use strict";function t(t){var i="dragover"===t;return function(r){r.dataTransfer=r.originalEvent&&r.originalEvent.dataTransfer;var n=r.dataTransfer;n&&e.inArray("Files",n.types)!==-1&&this._trigger(t,e.Event(t,{delegatedEvent:r}))!==!1&&(r.preventDefault(),i&&(n.dropEffect="copy"))}}e.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||e('<input type="file"/>').prop("disabled")),e.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),e.support.xhrFormDataFileUpload=!!window.FormData,e.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:void 0,fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(t,i){return t=this.messages[t]||t.toString(),i&&e.each(i,function(e,i){t=t.replace("{"+e+"}",i)}),t},formData:function(e){return e.serializeArray()},add:function(t,i){return!t.isDefaultPrevented()&&void((i.autoUpload||i.autoUpload!==!1&&e(this).fileupload("option","autoUpload"))&&i.process().done(function(){i.submit()}))},processData:!1,contentType:!1,cache:!1,timeout:0},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:e.support.blobSlice&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,i){var r=e-this.timestamp;return(!this.bitrate||!i||r>i)&&(this.bitrate=(t-this.loaded)*(1e3/r)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var i;return"function"===e.type(t.formData)?t.formData(t.form):e.isArray(t.formData)?t.formData:"object"===e.type(t.formData)?(i=[],e.each(t.formData,function(e,t){i.push({name:e,value:t})}),i):[]},_getTotal:function(t){var i=0;return e.each(t,function(e,t){i+=t.size||1}),i},_initProgressObject:function(t){var i={loaded:0,total:0,bitrate:0};t._progress?e.extend(t._progress,i):t._progress=i},_initResponseObject:function(e){var t;if(e._response)for(t in e._response)e._response.hasOwnProperty(t)&&delete e._response[t];else e._response={}},_onProgress:function(t,i){if(t.lengthComputable){var r,n=Date.now?Date.now():(new Date).getTime();if(i._time&&i.progressInterval&&n-i._time<i.progressInterval&&t.loaded!==t.total)return;i._time=n,r=Math.floor(t.loaded/t.total*(i.chunkSize||i._progress.total))+(i.uploadedBytes||0),this._progress.loaded+=r-i._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(n,this._progress.loaded,i.bitrateInterval),i._progress.loaded=i.loaded=r,i._progress.bitrate=i.bitrate=i._bitrateTimer.getBitrate(n,r,i.bitrateInterval),this._trigger("progress",e.Event("progress",{delegatedEvent:t}),i),this._trigger("progressall",e.Event("progressall",{delegatedEvent:t}),this._progress)}},_initProgressListener:function(t){var i=this,r=t.xhr?t.xhr():e.ajaxSettings.xhr();r.upload&&(e(r.upload).bind("progress",function(e){var r=e.originalEvent;e.lengthComputable=r.lengthComputable,e.loaded=r.loaded,e.total=r.total,i._onProgress(e,t)}),t.xhr=function(){return r})},_deinitProgressListener:function(t){var i=t.xhr?t.xhr():e.ajaxSettings.xhr();i.upload&&e(i.upload).unbind("progress")},_isInstanceOf:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},_initXHRData:function(t){var i,r=this,n=t.files[0],o=t.multipart||!e.support.xhrFileUpload,s="array"===e.type(t.paramName)?t.paramName[0]:t.paramName;t.headers=e.extend({},t.headers),t.contentRange&&(t.headers["Content-Range"]=t.contentRange),o&&!t.blob&&this._isInstanceOf("File",n)||(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(n.uploadName||n.name)+'"'),o?e.support.xhrFormDataFileUpload&&(t.postMessage?(i=this._getFormData(t),t.blob?i.push({name:s,value:t.blob}):e.each(t.files,function(r,n){i.push({name:"array"===e.type(t.paramName)&&t.paramName[r]||s,value:n})})):(r._isInstanceOf("FormData",t.formData)?i=t.formData:(i=new FormData,e.each(this._getFormData(t),function(e,t){i.append(t.name,t.value)})),t.blob?i.append(s,t.blob,n.uploadName||n.name):e.each(t.files,function(n,o){(r._isInstanceOf("File",o)||r._isInstanceOf("Blob",o))&&i.append("array"===e.type(t.paramName)&&t.paramName[n]||s,o,o.uploadName||o.name)})),t.data=i):(t.contentType=n.type||"application/octet-stream",t.data=t.blob||n),t.blob=null},_initIframeSettings:function(t){var i=e("<a></a>").prop("href",t.url).prop("host");t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&i&&i!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e)},_getParamName:function(t){var i=e(t.fileInput),r=t.paramName;return r?e.isArray(r)||(r=[r]):(r=[],i.each(function(){for(var t=e(this),i=t.prop("name")||"files[]",n=(t.prop("files")||[1]).length;n;)r.push(i),n-=1}),r.length||(r=[i.prop("name")||"files[]"])),r},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")))),t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||"string"===e.type(t.form.prop("method"))&&t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&"PATCH"!==t.type&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var i=e.extend({},this.options,t);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,i,r){var n=e.Deferred(),o=n.promise();return i=i||this.options.context||o,t===!0?n.resolveWith(i,r):t===!1&&n.rejectWith(i,r),o.abort=n.promise,this._enhancePromise(o)},_addConvenienceMethods:function(t,i){var r=this,n=function(t){return e.Deferred().resolveWith(r,t).promise()};i.process=function(t,o){return(t||o)&&(i._processQueue=this._processQueue=(this._processQueue||n([this])).then(function(){return i.errorThrown?e.Deferred().rejectWith(r,[i]).promise():n(arguments)}).then(t,o)),this._processQueue||n([this])},i.submit=function(){return"pending"!==this.state()&&(i.jqXHR=this.jqXHR=r._trigger("submit",e.Event("submit",{delegatedEvent:t}),this)!==!1&&r._onSend(t,this)),this.jqXHR||r._getXHRPromise()},i.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",r._trigger("fail",null,this),r._getXHRPromise(!1))},i.state=function(){return this.jqXHR?r._getDeferredState(this.jqXHR):this._processQueue?r._getDeferredState(this._processQueue):void 0},i.processing=function(){return!this.jqXHR&&this._processQueue&&"pending"===r._getDeferredState(this._processQueue)},i.progress=function(){return this._progress},i.response=function(){return this._response}},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),i=t&&t.split("-"),r=i&&i.length>1&&parseInt(i[1],10);return r&&r+1},_chunkedUpload:function(t,i){t.uploadedBytes=t.uploadedBytes||0;var r,n,o=this,s=t.files[0],a=s.size,l=t.uploadedBytes,p=t.maxChunkSize||a,u=this._blobSlice,d=e.Deferred(),h=d.promise();return!(!(this._isXHRUpload(t)&&u&&(l||("function"===e.type(p)?p(t):p)<a))||t.data)&&(!!i||(l>=a?(s.error=t.i18n("uploadedBytes"),this._getXHRPromise(!1,t.context,[null,"error",s.error])):(n=function(){var i=e.extend({},t),h=i._progress.loaded;i.blob=u.call(s,l,l+("function"===e.type(p)?p(i):p),s.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,o._trigger("chunkbeforesend",null,i),o._initXHRData(i),o._initProgressListener(i),r=(o._trigger("chunksend",null,i)!==!1&&e.ajax(i)||o._getXHRPromise(!1,i.context)).done(function(r,s,p){l=o._getUploadedBytes(p)||l+i.chunkSize,h+i.chunkSize-i._progress.loaded&&o._onProgress(e.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),t.uploadedBytes=i.uploadedBytes=l,i.result=r,i.textStatus=s,i.jqXHR=p,o._trigger("chunkdone",null,i),o._trigger("chunkalways",null,i),l<a?n():d.resolveWith(i.context,[r,s,p])}).fail(function(e,t,r){i.jqXHR=e,i.textStatus=t,i.errorThrown=r,o._trigger("chunkfail",null,i),o._trigger("chunkalways",null,i),d.rejectWith(i.context,[e,t,r])}).always(function(){o._deinitProgressListener(i)})},this._enhancePromise(h),h.abort=function(){return r.abort()},n(),h)))},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(t),this._initProgressObject(t),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(t,i,r,n){var o=n._progress.total,s=n._response;n._progress.loaded<o&&this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o,total:o}),n),s.result=n.result=t,s.textStatus=n.textStatus=i,s.jqXHR=n.jqXHR=r,this._trigger("done",null,n)},_onFail:function(e,t,i,r){var n=r._response;r.recalculateProgress&&(this._progress.loaded-=r._progress.loaded,this._progress.total-=r._progress.total),n.jqXHR=r.jqXHR=e,n.textStatus=r.textStatus=t,n.errorThrown=r.errorThrown=i,this._trigger("fail",null,r)},_onAlways:function(e,t,i,r){this._trigger("always",null,r)},_onSend:function(t,i){i.submit||this._addConvenienceMethods(t,i);var r,n,o,s,a=this,l=a._getAJAXSettings(i),p=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,r=r||((n||a._trigger("send",e.Event("send",{delegatedEvent:t}),l)===!1)&&a._getXHRPromise(!1,l.context,n)||a._chunkedUpload(l)||e.ajax(l)).done(function(e,t,i){a._onDone(e,t,i,l)}).fail(function(e,t,i){a._onFail(e,t,i,l)}).always(function(e,t,i){if(a._deinitProgressListener(l),a._onAlways(e,t,i,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var r=a._slots.shift();r;){if("pending"===a._getDeferredState(r)){r.resolve();break}r=a._slots.shift()}0===a._active&&a._trigger("stop")})};return this._beforeSend(t,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),s=o.then(p)):(this._sequence=this._sequence.then(p,p),s=this._sequence),s.abort=function(){return n=[void 0,"abort","abort"],r?r.abort():(o&&o.rejectWith(l.context,n),p())},this._enhancePromise(s)):p()},_onAdd:function(t,i){var r,n,o,s,a=this,l=!0,p=e.extend({},this.options,i),u=i.files,d=u.length,h=p.limitMultiFileUploads,c=p.limitMultiFileUploadSize,f=p.limitMultiFileUploadSizeOverhead,g=0,_=this._getParamName(p),m=0;if(!d)return!1;if(c&&void 0===u[0].size&&(c=void 0),(p.singleFileUploads||h||c)&&this._isXHRUpload(p))if(p.singleFileUploads||c||!h)if(!p.singleFileUploads&&c)for(o=[],r=[],s=0;s<d;s+=1)g+=u[s].size+f,(s+1===d||g+u[s+1].size+f>c||h&&s+1-m>=h)&&(o.push(u.slice(m,s+1)),n=_.slice(m,s+1),n.length||(n=_),r.push(n),m=s+1,g=0);else r=_;else for(o=[],r=[],s=0;s<d;s+=h)o.push(u.slice(s,s+h)),n=_.slice(s,s+h),n.length||(n=_),r.push(n);else o=[u],r=[_];return i.originalFiles=u,e.each(o||u,function(n,s){var p=e.extend({},i);return p.files=o?s:[s],p.paramName=r[n],a._initResponseObject(p),a._initProgressObject(p),a._addConvenienceMethods(t,p),l=a._trigger("add",e.Event("add",{delegatedEvent:t}),p)}),l},_replaceFileInput:function(t){var i=t.fileInput,r=i.clone(!0),n=i.is(document.activeElement);t.fileInputClone=r,e("<form></form>").append(r)[0].reset(),i.after(r).detach(),n&&r.focus(),e.cleanData(i.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(e,t){return t===i[0]?r[0]:t}),i[0]===this.element[0]&&(this.element=r)},_handleFileTreeEntry:function(t,i){var r,n=this,o=e.Deferred(),s=[],a=function(e){e&&!e.entry&&(e.entry=t),o.resolve([e])},l=function(e){n._handleFileTreeEntries(e,i+t.name+"/").done(function(e){o.resolve(e)}).fail(a)},p=function(){r.readEntries(function(e){e.length?(s=s.concat(e),p()):l(s)},a)};return i=i||"",t.isFile?t._file?(t._file.relativePath=i,o.resolve(t._file)):t.file(function(e){e.relativePath=i,o.resolve(e)},a):t.isDirectory?(r=t.createReader(),p()):o.resolve([]),o.promise()},_handleFileTreeEntries:function(t,i){var r=this;return e.when.apply(e,e.map(t,function(e){return r._handleFileTreeEntry(e,i)})).then(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(t){t=t||{};var i=t.items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(e.map(i,function(e){var t;return e.webkitGetAsEntry?(t=e.webkitGetAsEntry(),t&&(t._file=e.getAsFile()),t):e.getAsEntry()})):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){t=e(t);var i,r,n=t.prop("webkitEntries")||t.prop("entries");if(n&&n.length)return this._handleFileTreeEntries(n);if(i=e.makeArray(t.prop("files")),i.length)void 0===i[0].name&&i[0].fileName&&e.each(i,function(e,t){t.name=t.fileName,t.size=t.fileSize});else{if(r=t.prop("value"),!r)return e.Deferred().resolve([]).promise();i=[{name:r.replace(/^.*\\/,"")}]}return e.Deferred().resolve(i).promise()},_getFileInputFiles:function(t){return t instanceof e&&1!==t.length?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).then(function(){return Array.prototype.concat.apply([],arguments)}):this._getSingleFileInputFiles(t)},_onChange:function(t){var i=this,r={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(r.fileInput).always(function(n){r.files=n,i.options.replaceFileInput&&i._replaceFileInput(r),i._trigger("change",e.Event("change",{delegatedEvent:t}),r)!==!1&&i._onAdd(t,r)})},_onPaste:function(t){var i=t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.items,r={files:[]};i&&i.length&&(e.each(i,function(e,t){var i=t.getAsFile&&t.getAsFile();i&&r.files.push(i)}),this._trigger("paste",e.Event("paste",{delegatedEvent:t}),r)!==!1&&this._onAdd(t,r))},_onDrop:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=this,r=t.dataTransfer,n={};r&&r.files&&r.files.length&&(t.preventDefault(),this._getDroppedFiles(r).always(function(r){n.files=r,i._trigger("drop",e.Event("drop",{delegatedEvent:t}),n)!==!1&&i._onAdd(t,n)}))},_onDragOver:t("dragover"),_onDragEnter:t("dragenter"),_onDragLeave:t("dragleave"),_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop,dragenter:this._onDragEnter,dragleave:this._onDragLeave}),this._on(this.options.pasteZone,{paste:this._onPaste})),e.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragenter dragleave dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_destroy:function(){this._destroyEventHandlers()},_setOption:function(t,i){var r=e.inArray(t,this._specialOptions)!==-1;r&&this._destroyEventHandlers(),this._super(t,i),r&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_getRegExp:function(e){var t=e.split("/"),i=t.pop();return t.shift(),new RegExp(t.join("/"),i)},_isRegExpOption:function(t,i){return"url"!==t&&"string"===e.type(i)&&/^\/.*\/[igm]{0,3}$/.test(i)},_initDataAttributes:function(){var t=this,i=this.options,r=this.element.data();e.each(this.element[0].attributes,function(e,n){var o,s=n.name.toLowerCase();/^data-/.test(s)&&(s=s.slice(5).replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()}),o=r[s],t._isRegExpOption(s,o)&&(o=t._getRegExp(o)),i[s]=o)})},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(t){var i=this;t&&!this.options.disabled&&(t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always(function(e){t.files=e,i._onAdd(null,t)}):(t.files=e.makeArray(t.files),this._onAdd(null,t)))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var i,r,n=this,o=e.Deferred(),s=o.promise();return s.abort=function(){return r=!0,i?i.abort():(o.reject(null,"abort","abort"),s)},this._getFileInputFiles(t.fileInput).always(function(e){if(!r){if(!e.length)return void o.reject();t.files=e,i=n._onSend(null,t),i.then(function(e,t,i){o.resolve(e,t,i)},function(e,t,i){o.reject(e,t,i)})}}),this._enhancePromise(s)}if(t.files=e.makeArray(t.files),t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})});
!function(e,t){"use strict";function n(){return null===m&&(m=t.Mustache,void 0===m&&e.error("Failed to locate Mustache instance, are you sure it has been loaded?")),m}function r(e){return void 0!==d[e]}function a(t,n){return!h.allowOverwrite&&r(t)?void e.error("TemplateName: "+t+" is already mapped."):void(d[t]=e.trim(n))}function i(){var t;t=0===arguments.length?e('script[type="'+h.domTemplateType+'"]').map(function(){return this.id}):e.makeArray(arguments),e.each(t,function(){var t=document.getElementById(this);null===t?e.error("No such elementId: #"+this):a(this,e(t).html())})}function o(e){var t=d[e];return delete d[e],t}function u(){d={},n().clearCache()}function c(t,a){return r(t)?n().to_html(d[t],a,d):(h.warnOnMissingTemplates&&e.error("No template registered for: "+t),"")}function l(t,n){return e.ajax({url:t,dataType:h.externalTemplateDataType}).done(function(t){e(t).filter("script").each(function(t,n){a(n.id,e(n).html())}),e.isFunction(n)&&n()})}function s(){return e.map(d,function(e,t){return t})}var d={},m=null,h={warnOnMissingTemplates:!1,allowOverwrite:!0,domTemplateType:"text/html",externalTemplateDataType:"text"};e.Mustache={options:h,load:l,add:a,addFromDom:i,remove:o,clear:u,render:c,templates:s,instance:m},e.fn.mustache=function(t,n,r){var a=e.extend({method:"append"},r),i=function(n,r){e(n)[a.method](c(t,r))};return this.each(function(){var t=this;e.isArray(n)?e.each(n,function(){i(t,this)}):i(t,n)})}}(jQuery,window);
!function(e,t){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e.Mustache={},t(e.Mustache))}(this,function(e){function t(e){return"function"==typeof e}function n(e){return g(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"==typeof e&&t in e}function o(e,t){return v.call(e,t)}function s(e){return!o(w,e)}function a(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return y[e]})}function u(t,n){function i(){if(w&&!y)for(;v.length;)delete d[v.pop()];else v=[];w=!1,y=!1}function o(e){if("string"==typeof e&&(e=e.split(k,2)),!g(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),u=new RegExp("\\s*"+r(e[1])),h=new RegExp("\\s*"+r("}"+e[1]))}if(!t)return[];var a,u,h,f=[],d=[],v=[],w=!1,y=!1;o(n||e.tags);for(var U,T,j,S,V,C,A=new l(t);!A.eos();){if(U=A.pos,j=A.scanUntil(a))for(var I=0,R=j.length;I<R;++I)S=j.charAt(I),s(S)?v.push(d.length):y=!0,d.push(["text",S,U,U+1]),U+=1,"\n"===S&&i();if(!A.scan(a))break;if(w=!0,T=A.scan(E)||"name",A.scan(x),"="===T?(j=A.scanUntil(b),A.scan(b),A.scanUntil(u)):"{"===T?(j=A.scanUntil(h),A.scan(m),A.scanUntil(u),T="&"):j=A.scanUntil(u),!A.scan(u))throw new Error("Unclosed tag at "+A.pos);if(V=[T,j,U,A.pos],d.push(V),"#"===T||"^"===T)f.push(V);else if("/"===T){if(C=f.pop(),!C)throw new Error('Unopened section "'+j+'" at '+U);if(C[1]!==j)throw new Error('Unclosed section "'+C[1]+'" at '+U)}else"name"===T||"{"===T||"&"===T?y=!0:"="===T&&o(j)}if(C=f.pop())throw new Error('Unclosed section "'+C[1]+'" at '+A.pos);return p(c(d))}function c(e){for(var t,n,r=[],i=0,o=e.length;i<o;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function p(e){for(var t,n,r=[],i=r,o=[],s=0,a=e.length;s<a;++s)switch(t=e[s],t[0]){case"#":case"^":i.push(t),o.push(t),i=t[4]=[];break;case"/":n=o.pop(),n[5]=t[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(t)}return r}function l(e){this.string=e,this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function f(){this.cache={}}var d=Object.prototype.toString,g=Array.isArray||function(e){return"[object Array]"===d.call(e)},v=RegExp.prototype.test,w=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},x=/\s*/,k=/\s+/,b=/\s*=/,m=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;l.prototype.eos=function(){return""===this.tail},l.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},l.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){var n,r=this.cache;if(r.hasOwnProperty(e))n=r[e];else{for(var o,s,a=this,u=!1;a;){if(e.indexOf(".")>0)for(n=a.view,o=e.split("."),s=0;null!=n&&s<o.length;)s===o.length-1&&(u=i(n,o[s])),n=n[o[s++]];else n=a.view[e],u=i(a.view,e);if(u)break;a=a.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=u(e,t)),r},f.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof h?t:new h(t);return this.renderTokens(r,i,n,e)},f.prototype.renderTokens=function(e,t,n,r){for(var i,o,s,a="",u=0,c=e.length;u<c;++u)s=void 0,i=e[u],o=i[0],"#"===o?s=this.renderSection(i,t,n,r):"^"===o?s=this.renderInverted(i,t,n,r):">"===o?s=this.renderPartial(i,t,n,r):"&"===o?s=this.unescapedValue(i,t):"name"===o?s=this.escapedValue(i,t):"text"===o&&(s=this.rawValue(i)),void 0!==s&&(a+=s);return a},f.prototype.renderSection=function(e,n,r,i){function o(e){return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(g(u))for(var c=0,p=u.length;c<p;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,i);else if(t(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,i.slice(e[3],e[5]),o),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,i);return a}},f.prototype.renderInverted=function(e,t,n,r){var i=t.lookup(e[1]);if(!i||g(i)&&0===i.length)return this.renderTokens(e[4],t,n,r)},f.prototype.renderPartial=function(e,n,r){if(r){var i=t(r)?r(e[1]):r[e[1]];return null!=i?this.renderTokens(this.parse(i),n,r,i):void 0}},f.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},f.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);if(null!=r)return e.escape(r)},f.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.3.2",e.tags=["{{","}}"];var U=new f;return e.clearCache=function(){return U.clearCache()},e.parse=function(e,t){return U.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');return U.render(e,t,r)},e.to_html=function(n,r,i,o){var s=e.render(n,r,i);return t(o)?void o(s):s},e.escape=a,e.Scanner=l,e.Context=h,e.Writer=f,e});
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,e){"use strict";function r(e,r,n,a){for(var i=[],o=0;o<e.length;o++){var s=e[o];if(s){var l=tinycolor(s),c=l.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=tinycolor.equals(r,s)?" sp-thumb-active":"";var f=l.toString(a.preferredFormat||"rgb"),u=b?"background-color:"+l.toRgbString():"filter:"+l.toFilter();i.push('<span title="'+f+'" data-color="'+l.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+u+';" /></span>')}else{var h="sp-clear-display";i.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="'+h+'"></span>').attr("title",a.noColorSelectedText)).html())}}return"<div class='sp-cf "+n+"'>"+i.join("")+"</div>"}function n(){for(var t=0;t<p.length;t++)p[t]&&p[t].hide()}function a(e,r){var n=t.extend({},d,e);return n.callbacks={move:c(n.move,r),change:c(n.change,r),show:c(n.show,r),hide:c(n.hide,r),beforeShow:c(n.beforeShow,r)},n}function i(i,s){function c(){if(W.showPaletteOnly&&(W.showPalette=!0),Dt.text(W.showPaletteOnly?W.togglePaletteMoreText:W.togglePaletteLessText),W.palette){dt=W.palette.slice(0),pt=t.isArray(dt[0])?dt:[dt],gt={};for(var e=0;e<pt.length;e++)for(var r=0;r<pt[e].length;r++){var n=tinycolor(pt[e][r]).toRgbString();gt[n]=!0}}kt.toggleClass("sp-flat",X),kt.toggleClass("sp-input-disabled",!W.showInput),kt.toggleClass("sp-alpha-enabled",W.showAlpha),kt.toggleClass("sp-clear-enabled",Qt),kt.toggleClass("sp-buttons-disabled",!W.showButtons),kt.toggleClass("sp-palette-buttons-disabled",!W.togglePaletteOnly),kt.toggleClass("sp-palette-disabled",!W.showPalette),kt.toggleClass("sp-palette-only",W.showPaletteOnly),kt.toggleClass("sp-initial-disabled",!W.showInitial),kt.addClass(W.className).addClass(W.containerClassName),z()}function d(){function e(e){return e.data&&e.data.ignore?(O(t(e.target).closest(".sp-thumb-el").data("color")),j()):(O(t(e.target).closest(".sp-thumb-el").data("color")),j(),I(!0),W.hideAfterPaletteSelect&&F()),!1}if(g&&kt.find("*:not(input)").attr("unselectable","on"),c(),Bt&&_t.after(Lt).hide(),Qt||jt.hide(),X)_t.after(kt).hide();else{var r="parent"===W.appendTo?_t.parent():t(W.appendTo);1!==r.length&&(r=t("body")),r.append(kt)}y(),Kt.bind("click.spectrum touchstart.spectrum",function(e){xt||A(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(_t.is(":disabled")||W.disabled===!0)&&V(),kt.click(l),Tt.change(P),Tt.bind("paste",function(){setTimeout(P,1)}),Tt.keydown(function(t){13==t.keyCode&&P()}),Nt.text(W.cancelText),Nt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),T(),F()}),jt.attr("title",W.clearText),jt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),Gt=!0,j(),X&&I(!0)}),Et.text(W.chooseText),Et.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),g&&Tt.is(":focus")&&Tt.trigger("change"),N()&&(I(!0),F())}),Dt.text(W.showPaletteOnly?W.togglePaletteMoreText:W.togglePaletteLessText),Dt.bind("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),W.showPaletteOnly=!W.showPaletteOnly,W.showPaletteOnly||X||kt.css("left","-="+(St.outerWidth(!0)+5)),c()}),f(Ht,function(t,e,r){ht=t/ot,Gt=!1,r.shiftKey&&(ht=Math.round(10*ht)/10),j()},S,C),f(At,function(t,e){ct=parseFloat(e/at),Gt=!1,W.showAlpha||(ht=1),j()},S,C),f(Ct,function(t,e,r){if(r.shiftKey){if(!yt){var n=ft*et,a=rt-ut*rt,i=Math.abs(t-n)>Math.abs(e-a);yt=i?"x":"y"}}else yt=null;var o=!yt||"x"===yt,s=!yt||"y"===yt;o&&(ft=parseFloat(t/et)),s&&(ut=parseFloat((rt-e)/rt)),Gt=!1,W.showAlpha||(ht=1),j()},S,C),$t?(O($t),E(),Xt=W.preferredFormat||tinycolor($t).format,w($t)):E(),X&&M();var n=g?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Ot.delegate(".sp-thumb-el",n,e),qt.delegate(".sp-thumb-el:nth-child(1)",n,{ignore:!0},e)}function y(){if(G&&window.localStorage){try{var e=window.localStorage[G].split(",#");e.length>1&&(delete window.localStorage[G],t.each(e,function(t,e){w(e)}))}catch(r){}try{bt=window.localStorage[G].split(";")}catch(r){}}}function w(e){if(Y){var r=tinycolor(e).toRgbString();if(!gt[r]&&t.inArray(r,bt)===-1)for(bt.push(r);bt.length>vt;)bt.shift();if(G&&window.localStorage)try{window.localStorage[G]=bt.join(";")}catch(n){}}}function _(){var t=[];if(W.showPalette)for(var e=0;e<bt.length;e++){var r=tinycolor(bt[e]).toRgbString();gt[r]||t.push(bt[e])}return t.reverse().slice(0,W.maxSelectionSize)}function x(){var e=q(),n=t.map(pt,function(t,n){return r(t,e,"sp-palette-row sp-palette-row-"+n,W)});y(),bt&&n.push(r(_(),e,"sp-palette-row sp-palette-row-selection",W)),Ot.html(n.join(""))}function k(){if(W.showInitial){var t=Wt,e=q();qt.html(r([t,e],e,"sp-palette-row-initial",W))}}function S(){(rt<=0||et<=0||at<=0)&&z(),tt=!0,kt.addClass(mt),yt=null,_t.trigger("dragstart.spectrum",[q()])}function C(){tt=!1,kt.removeClass(mt),_t.trigger("dragstop.spectrum",[q()])}function P(){var t=Tt.val();if(null!==t&&""!==t||!Qt){var e=tinycolor(t);e.isValid()?(O(e),I(!0)):Tt.addClass("sp-validation-error")}else O(null),I(!0)}function A(){Z?F():M()}function M(){var e=t.Event("beforeShow.spectrum");return Z?void z():(_t.trigger(e,[q()]),void(J.beforeShow(q())===!1||e.isDefaultPrevented()||(n(),Z=!0,t(wt).bind("keydown.spectrum",R),t(wt).bind("click.spectrum",H),t(window).bind("resize.spectrum",U),Lt.addClass("sp-active"),kt.removeClass("sp-hidden"),z(),E(),Wt=q(),k(),J.show(Wt),_t.trigger("show.spectrum",[Wt]))))}function R(t){27===t.keyCode&&F()}function H(t){2!=t.button&&(tt||(Yt?I(!0):T(),F()))}function F(){Z&&!X&&(Z=!1,t(wt).unbind("keydown.spectrum",R),t(wt).unbind("click.spectrum",H),t(window).unbind("resize.spectrum",U),Lt.removeClass("sp-active"),kt.addClass("sp-hidden"),J.hide(q()),_t.trigger("hide.spectrum",[q()]))}function T(){O(Wt,!0)}function O(t,e){if(tinycolor.equals(t,q()))return void E();var r,n;!t&&Qt?Gt=!0:(Gt=!1,r=tinycolor(t),n=r.toHsv(),ct=n.h%360/360,ft=n.s,ut=n.v,ht=n.a),E(),r&&r.isValid()&&!e&&(Xt=W.preferredFormat||r.getFormat())}function q(t){return t=t||{},Qt&&Gt?null:tinycolor.fromRatio({h:ct,s:ft,v:ut,a:Math.round(100*ht)/100},{format:t.format||Xt})}function N(){return!Tt.hasClass("sp-validation-error")}function j(){E(),J.move(q()),_t.trigger("move.spectrum",[q()])}function E(){Tt.removeClass("sp-validation-error"),D();var t=tinycolor.fromRatio({h:ct,s:1,v:1});Ct.css("background-color",t.toHexString());var e=Xt;ht<1&&(0!==ht||"name"!==e)&&("hex"!==e&&"hex3"!==e&&"hex6"!==e&&"name"!==e||(e="rgb"));var r=q({format:e}),n="";if(Vt.removeClass("sp-clear-display"),Vt.css("background-color","transparent"),!r&&Qt)Vt.addClass("sp-clear-display");else{var a=r.toHexString(),i=r.toRgbString();if(b||1===r.alpha?Vt.css("background-color",i):(Vt.css("background-color","transparent"),Vt.css("filter",r.toFilter())),W.showAlpha){var o=r.toRgb();o.a=0;var s=tinycolor(o).toRgbString(),l="linear-gradient(left, "+s+", "+a+")";g?Rt.css("filter",tinycolor(s).toFilter({gradientType:1},a)):(Rt.css("background","-webkit-"+l),Rt.css("background","-moz-"+l),Rt.css("background","-ms-"+l),Rt.css("background","linear-gradient(to right, "+s+", "+a+")"))}n=r.toString(e)}W.showInput&&Tt.val(n),W.showPalette&&x(),k()}function D(){var t=ft,e=ut;if(Qt&&Gt)Ft.hide(),Mt.hide(),Pt.hide();else{Ft.show(),Mt.show(),Pt.show();var r=t*et,n=rt-e*rt;r=Math.max(-nt,Math.min(et-nt,r-nt)),n=Math.max(-nt,Math.min(rt-nt,n-nt)),Pt.css({top:n+"px",left:r+"px"});var a=ht*ot;Ft.css({left:a-st/2+"px"});var i=ct*at;Mt.css({top:i-lt+"px"})}}function I(t){var e=q(),r="",n=!tinycolor.equals(e,Wt);e&&(r=e.toString(Xt),w(e)),It&&_t.val(r),t&&n&&(J.change(e),_t.trigger("change",[e]))}function z(){Z&&(et=Ct.width(),rt=Ct.height(),nt=Pt.height(),it=At.width(),at=At.height(),lt=Mt.height(),ot=Ht.width(),st=Ft.width(),X||(kt.css("position","absolute"),W.offset?kt.offset(W.offset):kt.offset(o(kt,Kt))),D(),W.showPalette&&x(),_t.trigger("reflow.spectrum"))}function B(){_t.show(),Kt.unbind("click.spectrum touchstart.spectrum"),kt.remove(),Lt.remove(),p[Jt.id]=null}function L(r,n){return r===e?t.extend({},W):n===e?W[r]:(W[r]=n,"preferredFormat"===r&&(Xt=W.preferredFormat),void c())}function K(){xt=!1,_t.attr("disabled",!1),Kt.removeClass("sp-disabled")}function V(){F(),xt=!0,_t.attr("disabled",!0),Kt.addClass("sp-disabled")}function $(t){W.offset=t,z()}var W=a(s,i),X=W.flat,Y=W.showSelectionPalette,G=W.localStorageKey,Q=W.theme,J=W.callbacks,U=u(z,10),Z=!1,tt=!1,et=0,rt=0,nt=0,at=0,it=0,ot=0,st=0,lt=0,ct=0,ft=0,ut=0,ht=1,dt=[],pt=[],gt={},bt=W.selectionPalette.slice(0),vt=W.maxSelectionSize,mt="sp-dragging",yt=null,wt=i.ownerDocument,_t=(wt.body,t(i)),xt=!1,kt=t(m,wt).addClass(Q),St=kt.find(".sp-picker-container"),Ct=kt.find(".sp-color"),Pt=kt.find(".sp-dragger"),At=kt.find(".sp-hue"),Mt=kt.find(".sp-slider"),Rt=kt.find(".sp-alpha-inner"),Ht=kt.find(".sp-alpha"),Ft=kt.find(".sp-alpha-handle"),Tt=kt.find(".sp-input"),Ot=kt.find(".sp-palette"),qt=kt.find(".sp-initial"),Nt=kt.find(".sp-cancel"),jt=kt.find(".sp-clear"),Et=kt.find(".sp-choose"),Dt=kt.find(".sp-palette-toggle"),It=_t.is("input"),zt=It&&"color"===_t.attr("type")&&h(),Bt=It&&!X,Lt=Bt?t(v).addClass(Q).addClass(W.className).addClass(W.replacerClassName):t([]),Kt=Bt?Lt:_t,Vt=Lt.find(".sp-preview-inner"),$t=W.color||It&&_t.val(),Wt=!1,Xt=W.preferredFormat,Yt=!W.showButtons||W.clickoutFiresChange,Gt=!$t,Qt=W.allowEmpty&&!zt;d();var Jt={show:M,hide:F,toggle:A,reflow:z,option:L,enable:K,disable:V,offset:$,set:function(t){O(t),I()},get:q,destroy:B,container:kt};return Jt.id=p.push(Jt)-1,Jt}function o(e,r){var n=0,a=e.outerWidth(),i=e.outerHeight(),o=r.outerHeight(),s=e[0].ownerDocument,l=s.documentElement,c=l.clientWidth+t(s).scrollLeft(),f=l.clientHeight+t(s).scrollTop(),u=r.offset();return u.top+=o,u.left-=Math.min(u.left,u.left+a>c&&c>a?Math.abs(u.left+a-c):0),u.top-=Math.min(u.top,u.top+i>f&&f>i?Math.abs(i+o-n):n),u}function s(){}function l(t){t.stopPropagation()}function c(t,e){var r=Array.prototype.slice,n=r.call(arguments,2);return function(){return t.apply(e,n.concat(r.call(arguments)))}}function f(e,r,n,a){function i(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function o(t){if(f){if(g&&c.documentMode<9&&!t.button)return l();var n=t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches[0],a=n&&n.pageX||t.pageX,o=n&&n.pageY||t.pageY,s=Math.max(0,Math.min(a-u.left,d)),b=Math.max(0,Math.min(o-u.top,h));p&&i(t),r.apply(e,[s,b,t])}}function s(r){var a=r.which?3==r.which:2==r.button;a||f||n.apply(e,arguments)!==!1&&(f=!0,h=t(e).height(),d=t(e).width(),u=t(e).offset(),t(c).bind(b),t(c.body).addClass("sp-dragging"),o(r),i(r))}function l(){f&&(t(c).unbind(b),t(c.body).removeClass("sp-dragging"),setTimeout(function(){a.apply(e,arguments)},0)),f=!1}r=r||function(){},n=n||function(){},a=a||function(){};var c=document,f=!1,u={},h=0,d=0,p="ontouchstart"in window,b={};b.selectstart=i,b.dragstart=i,b["touchmove mousemove"]=o,b["touchend mouseup"]=l,t(e).bind("touchstart mousedown",s)}function u(t,e,r){var n;return function(){var a=this,i=arguments,o=function(){n=null,t.apply(a,i)};r&&clearTimeout(n),!r&&n||(n=setTimeout(o,e))}}function h(){return t.fn.spectrum.inputTypeColorSupport()}var d={beforeShow:s,move:s,change:s,show:s,hide:s,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},p=[],g=!!/msie/i.exec(window.navigator.userAgent),b=function(){function t(t,e){return!!~(""+t).indexOf(e)}var e=document.createElement("div"),r=e.style;return r.cssText="background-color:rgba(0,0,0,.5)",t(r.backgroundColor,"rgba")||t(r.backgroundColor,"hsla")}(),v=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),m=function(){var t="";if(g)for(var e=1;e<=6;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),y="spectrum.id";t.fn.spectrum=function(e,r){if("string"==typeof e){var n=this,a=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=p[t(this).data(y)];if(r){var i=r[e];if(!i)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?n=r.get():"container"==e?n=r.container:"option"==e?n=r.option.apply(r,a):"destroy"==e?(r.destroy(),t(this).removeData(y)):i.apply(r,a)}}),n}return this.spectrum("destroy").each(function(){var r=t.extend({},e,t(this).data()),n=i(this,r);t(this).data(y,n.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=f,t.fn.spectrum.defaults=d,t.fn.spectrum.inputTypeColorSupport=function w(){if("undefined"==typeof w._cachedResult){var e=t("<input type='color'/>")[0];w._cachedResult="color"===e.type&&""!==e.value}return w._cachedResult},t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("input[type=color]");e.length&&!h()&&e.spectrum({preferredFormat:"hex6"})},function(){function t(t){var r={r:0,g:0,b:0},a=1,o=!1,s=!1;return"string"==typeof t&&(t=T(t)),"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(r=e(t.r,t.g,t.b),o=!0,s="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=R(t.s),t.v=R(t.v),r=i(t.h,t.s,t.v),o=!0,s="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=R(t.s),t.l=R(t.l),r=n(t.h,t.s,t.l),o=!0,s="hsl"),t.hasOwnProperty("a")&&(a=t.a)),a=x(a),{ok:o,format:t.format||s,r:D(255,I(r.r,0)),g:D(255,I(r.g,0)),b:D(255,I(r.b,0)),a:a}}function e(t,e,r){return{r:255*k(t,255),g:255*k(e,255),b:255*k(r,255)}}function r(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var n,a,i=I(t,e,r),o=D(t,e,r),s=(i+o)/2;if(i==o)n=a=0;else{var l=i-o;switch(a=s>.5?l/(2-i-o):l/(i+o),i){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:a,l:s}}function n(t,e,r){function n(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var a,i,o;if(t=k(t,360),e=k(e,100),r=k(r,100),0===e)a=i=o=r;else{var s=r<.5?r*(1+e):r+e-r*e,l=2*r-s;a=n(l,s,t+1/3),i=n(l,s,t),o=n(l,s,t-1/3)}return{r:255*a,g:255*i,b:255*o}}function a(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var n,a,i=I(t,e,r),o=D(t,e,r),s=i,l=i-o;if(a=0===i?0:l/i,i==o)n=0;else{switch(i){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:a,v:s}}function i(t,e,r){t=6*k(t,360),e=k(e,100),r=k(r,100);var n=j.floor(t),a=t-n,i=r*(1-e),o=r*(1-a*e),s=r*(1-(1-a)*e),l=n%6,c=[r,o,i,i,s,r][l],f=[s,r,r,o,i,i][l],u=[i,i,s,r,r,o][l];return{r:255*c,g:255*f,b:255*u}}function o(t,e,r,n){var a=[M(E(t).toString(16)),M(E(e).toString(16)),M(E(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function s(t,e,r,n){var a=[M(H(n)),M(E(t).toString(16)),M(E(e).toString(16)),M(E(r).toString(16))];return a.join("")}function l(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s-=e/100,r.s=S(r.s),B(r)}function c(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s+=e/100,r.s=S(r.s),B(r)}function f(t){return B(t).desaturate(100)}function u(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l+=e/100,r.l=S(r.l),B(r)}function h(t,e){e=0===e?0:e||10;var r=B(t).toRgb();return r.r=I(0,D(255,r.r-E(255*-(e/100)))),r.g=I(0,D(255,r.g-E(255*-(e/100)))),r.b=I(0,D(255,r.b-E(255*-(e/100)))),B(r)}function d(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l-=e/100,r.l=S(r.l),B(r)}function p(t,e){var r=B(t).toHsl(),n=(E(r.h)+e)%360;return r.h=n<0?360+n:n,B(r)}function g(t){var e=B(t).toHsl();return e.h=(e.h+180)%360,B(e)}function b(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+120)%360,s:e.s,l:e.l}),B({h:(r+240)%360,s:e.s,l:e.l})]}function v(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+90)%360,s:e.s,l:e.l}),B({h:(r+180)%360,s:e.s,l:e.l}),B({h:(r+270)%360,s:e.s,l:e.l})]}function m(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+72)%360,s:e.s,l:e.l}),B({h:(r+216)%360,s:e.s,l:e.l})]}function y(t,e,r){e=e||6,r=r||30;var n=B(t).toHsl(),a=360/r,i=[B(t)];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(B(n));return i}function w(t,e){e=e||6;for(var r=B(t).toHsv(),n=r.h,a=r.s,i=r.v,o=[],s=1/e;e--;)o.push(B({h:n,s:a,v:i})),i=(i+s)%1;return o}function _(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function x(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function k(t,e){P(t)&&(t="100%");var r=A(t);return t=D(e,I(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),j.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function S(t){return D(1,I(0,t))}function C(t){return parseInt(t,16)}function P(t){return"string"==typeof t&&t.indexOf(".")!=-1&&1===parseFloat(t)}function A(t){return"string"==typeof t&&t.indexOf("%")!=-1}function M(t){return 1==t.length?"0"+t:""+t}function R(t){return t<=1&&(t=100*t+"%"),t}function H(t){return Math.round(255*parseFloat(t)).toString(16)}function F(t){return C(t)/255}function T(t){t=t.replace(O,"").replace(q,"").toLowerCase();var e=!1;if(L[t])t=L[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=V.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=V.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=V.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=V.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=V.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=V.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=V.hex8.exec(t))?{a:F(r[1]),r:C(r[2]),g:C(r[3]),b:C(r[4]),format:e?"name":"hex8"}:(r=V.hex6.exec(t))?{r:C(r[1]),g:C(r[2]),b:C(r[3]),format:e?"name":"hex"}:!!(r=V.hex3.exec(t))&&{r:C(r[1]+""+r[1]),g:C(r[2]+""+r[2]),b:C(r[3]+""+r[3]),format:e?"name":"hex"}}var O=/^[\s,#]+/,q=/\s+$/,N=0,j=Math,E=j.round,D=j.min,I=j.max,z=j.random,B=function(e,r){if(e=e?e:"",r=r||{},e instanceof B)return e;if(!(this instanceof B))return new B(e,r);var n=t(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=E(100*this._a)/100,this._format=r.format||n.format,this._gradientType=r.gradientType,this._r<1&&(this._r=E(this._r)),this._g<1&&(this._g=E(this._g)),this._b<1&&(this._b=E(this._b)),this._ok=n.ok,this._tc_id=N++};B.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=x(t),this._roundA=E(100*this._a)/100,this},toHsv:function(){var t=a(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=a(this._r,this._g,this._b),e=E(360*t.h),r=E(100*t.s),n=E(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=r(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=r(this._r,this._g,this._b),e=E(360*t.h),n=E(100*t.s),a=E(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+a+"%)":"hsla("+e+", "+n+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return o(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return s(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:E(this._r),g:E(this._g),b:E(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+E(this._r)+", "+E(this._g)+", "+E(this._b)+")":"rgba("+E(this._r)+", "+E(this._g)+", "+E(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:E(100*k(this._r,255))+"%",g:E(100*k(this._g,255))+"%",b:E(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+E(100*k(this._r,255))+"%, "+E(100*k(this._g,255))+"%, "+E(100*k(this._b,255))+"%)":"rgba("+E(100*k(this._r,255))+"%, "+E(100*k(this._g,255))+"%, "+E(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(K[o(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+s(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var a=B(t);r=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,a=!e&&n&&("hex"===t||"hex6"===t||"hex3"===t||"name"===t);return a?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(u,arguments)},brighten:function(){return this._applyModification(h,arguments)},darken:function(){return this._applyModification(d,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(f,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(g,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(m,arguments)},triad:function(){return this._applyCombination(b,arguments)},tetrad:function(){return this._applyCombination(v,arguments)}},B.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&("a"===n?r[n]=t[n]:r[n]=R(t[n]));t=r}return B(t,e)},B.equals=function(t,e){return!(!t||!e)&&B(t).toRgbString()==B(e).toRgbString()},B.random=function(){return B.fromRatio({r:z(),g:z(),b:z()})},B.mix=function(t,e,r){r=0===r?0:r||50;var n,a=B(t).toRgb(),i=B(e).toRgb(),o=r/100,s=2*o-1,l=i.a-a.a;n=s*l==-1?s:(s+l)/(1+s*l),n=(n+1)/2;var c=1-n,f={r:i.r*n+a.r*c,g:i.g*n+a.g*c,b:i.b*n+a.b*c,a:i.a*o+a.a*(1-o)};return B(f)},B.readability=function(t,e){var r=B(t),n=B(e),a=r.toRgb(),i=n.toRgb(),o=r.getBrightness(),s=n.getBrightness(),l=Math.max(a.r,i.r)-Math.min(a.r,i.r)+Math.max(a.g,i.g)-Math.min(a.g,i.g)+Math.max(a.b,i.b)-Math.min(a.b,i.b);return{brightness:Math.abs(o-s),color:l}},B.isReadable=function(t,e){var r=B.readability(t,e);return r.brightness>125&&r.color>500},B.mostReadable=function(t,e){for(var r=null,n=0,a=!1,i=0;i<e.length;i++){var o=B.readability(t,e[i]),s=o.brightness>125&&o.color>500,l=3*(o.brightness/125)+o.color/500;(s&&!a||s&&a&&l>n||!s&&!a&&l>n)&&(a=s,n=l,r=B(e[i]))}return r};var L=B.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=B.hexNames=_(L),V=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+a),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();window.tinycolor=B}(),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})});
var initSpectrumFields=function(t){t("input.spectrum-field").each(function(e,o){spectrumOptionsDefaults={preferredFormat:"hex",allowEmpty:!1,showInput:!0,showPalette:!1,showSelectionPalette:!1,palette:[],localStorageKey:"spectrum.palette"},spectrumOptions=t(this).data("spectrum-options"),spectrumOptions="undefined"==typeof spectrumOptions?{}:spectrumOptions,t(this).spectrum(t.extend({},spectrumOptionsDefaults,spectrumOptions)),t(this).on("dragstop.spectrum",function(e,o){t(this).val(t(this).spectrum("get")),t(this).trigger("change")}),"undefined"!=typeof spectrumOptions.follow&&(master=t("#"+spectrumOptions.follow),t(this).data("last-follow-color",tinycolor(master.val()).toHexString()),master.change(function(e){return function(o,s){t(e).data("last-follow-color")===tinycolor(t(e).spectrum("get")).toHexString()&&(t(e).data("last-follow-color",tinycolor(t(this).spectrum("get")).toHexString()),t(e).spectrum("set",t(this).spectrum("get")),t(e).trigger("change"))}}(this)),t(this).change(function(e){return function(o,s){null===s&&(t(this).data("last-follow-color",tinycolor(e.val()).toHexString()),t(this).spectrum("set",e.spectrum("get")),t(this).spectrum("hide"))}}(master)))})};document.docReady(function(){initSpectrumFields(jQuery)});
function FormDateRange(e,t){this.field=e,this.dateFormat=t,this.rangeSelect=$(e+"_range_field"),this.dateFrom=$(e+"_from_field"),this.dateTo=$(e+"_to_field"),this.rangeSelect.observe("change",this.rangeSelectChanged.bindAsEventListener(this));var a=this.dateChanged.bindAsEventListener(this);this.dateFrom.observe("change",a),this.dateTo.observe("change",a),this.rangeSelectChanged()}Date.fromISO||(Date.fromISO=function(e){var t=e.split("-");return new Date(t[0],t[1]-1,t[2])}),FormDateRange.prototype.rangeSelectChanged=function(){this.ignoreDateChanges=!0;var e=this.rangeSelect.getValue();switch(e){case"all":this.dateFrom.setValue(""),this.dateTo.setValue("");break;case"custom":break;default:var t=e.split(","),a=Date.fromISO(t[0]),s=Date.fromISO(t[1]);this.dateFrom.setValue(a.print(this.dateFormat)),this.dateTo.setValue(s.print(this.dateFormat))}this.ignoreDateChanges=!1},FormDateRange.prototype.dateChanged=function(){this.ignoreDateChanges||this.rangeSelect.setValue("custom")};
function $RF(e,r){if($(e).type&&"radio"==$(e).type.toLowerCase())var r=$(e).name,e=$(e).form;else if("form"!=$(e).tagName.toLowerCase())return!1;var t=$(e).getInputs("radio",r).find(function(e){return e.checked});return t?$F(t):null}
function sendAjaxMessage(e,s,t,n){message=new AjaxMessage(e,s,t,n),_AjaxMessageCenter.appendMessageToQueue(message),_areBundlingMessagesIntoOneRequest||_AjaxMessageCenter.sendQueuedMessages()}function beginAddingAjaxMessagesToQueue(){return _areBundlingMessagesIntoOneRequest?void alert("WARNING: Cannot nest begin/endSendingAjaxMessages()."):void(_areBundlingMessagesIntoOneRequest=!0)}function sendQueuedAjaxMessages(){return _areBundlingMessagesIntoOneRequest?(_areBundlingMessagesIntoOneRequest=!1,void _AjaxMessageCenter.sendQueuedMessages()):void alert("WARNING: endSendingAjaxMessages() called when we are not sending messages.")}function AjaxMessageCenter(){this.messageQueue=new Array,this.busyIndicatorRetainCount=0,this.appendMessageToQueue=function(e){this.messageQueue.push(e)},this.sendQueuedMessages=function(){for(var e=new Array,s=0;s<this.messageQueue.length;s++)e.push(this.messageQueue[s].buildMessageObj());req=this.buildXHR();var t=this,n=t.messageQueue;req.onreadystatechange=function(){t.processXHRStatusChange(req,n)},req.open("POST",this.postOfficeUrl),req.send("function"==typeof e.toJSON?e.toJSON():Object.toJSON(e)),this.messageQueue=new Array,this.showBusyIndicator()},this.buildXHR=function(){var e=!1;try{e=new XMLHttpRequest}catch(s){}if(!e)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(s){}if(!e)try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}return e?e:(alert("Error: Your browser does not support AJAX. Please upgrade your browser and try again."),null)},this.processXHRStatusChange=function(e,s){if(!(e.readyState<4)){if(200!=e.status)return void this.hideBusyIndicator();if(results=e.responseText.evalJSON(),results===!1){try{console.error("ajax server error, response: "+e.responseText)}catch(t){}return void this.hideBusyIndicator()}if(results.error)try{console.error("ajax error: "+results.errorMessage)}catch(t){}else for(var n=0;n<s.length;n++){var a=s[n],r=results[n];null!=a.callbackFunction&&a.callbackFunction(r)}this.hideBusyIndicator()}},this.showBusyIndicator=function(){this.busyIndicatorRetainCount++,busyEl=document.getElementById("ajaxmessage-busy"),null!=busyEl&&(busyEl.style.display=this.busyIndicatorRetainCount>0?"block":"none")},this.hideBusyIndicator=function(){this.busyIndicatorRetainCount--,busyEl=document.getElementById("ajaxmessage-busy"),null!=busyEl&&(busyEl.style.display=this.busyIndicatorRetainCount>0?"block":"none")},this.determinePostOfficeUrl=function(e){"undefined"==typeof e&&(document.getElementsByTagName&&(basehrefs=document.getElementsByTagName("base"))&&basehrefs.length&&basehrefs.length>0&&basehrefs[0].getAttribute&&(e=basehrefs[0].getAttribute("href"))||(e="/")),this.postOfficeUrl=e+"include/modules/custom/ajax/ajaxpostoffice"}}function AjaxMessage(e,s,t,n){this.targetClass=e,this.targetMethod=s,this.targetMethodArguments=t,this.callbackFunction=n,this.buildMessageObj=function(){var e={targetClass:this.targetClass,targetMethod:this.targetMethod};return null!=this.targetMethodArguments&&(e.targetMethodArguments=this.targetMethodArguments),null!=this.callbackFunction&&(e.callbackFunction=this.callbackFunction.toString()),e}}var _AjaxMessageCenter=new AjaxMessageCenter;_AjaxMessageCenter.determinePostOfficeUrl();var _areBundlingMessagesIntoOneRequest=!1;
var Auth={login:function(){var i=$F("login-username"),o=$F("login-password");0!=i.length&&0!=o.length&&(this.onLoginStart&&this.onLoginStart(),$("login-form").getAttribute("data-basehref")&&_AjaxMessageCenter.determinePostOfficeUrl($("login-form").getAttribute("data-basehref")),sendAjaxMessage("login","login",{username:i,password:o},this.loginCallback.bind(this)),_AjaxMessageCenter.determinePostOfficeUrl(),this.showAjaxLoading())},loginCallback:function(i){this.hideAjaxLoading(),$("login-failed").hide(),$("login-blocked").hide(),i.logged_in?this.loginSucceeded(i):i.login_blocked?this.loginBlocked(i):this.loginFailed()},loginSucceeded:function(i){i.login_form_replacement_html&&$("login-form").replace(i.login_form_replacement_html),this.onLoginSucceeded&&this.onLoginSucceeded(i),i.redirect_to&&(window.location.href=i.redirect_to)},loginBlocked:function(){$("login-blocked").show(),$("login-username").focus(),this.onLoginFailed&&this.onLoginFailed(results)},loginFailed:function(){$("login-failed").show(),$("login-username").focus(),this.onLoginFailed&&this.onLoginFailed(results)},showAjaxLoading:function(){$("login-buttons").hide(),$("login-ajax").show()},hideAjaxLoading:function(){$("login-ajax").hide(),$("login-buttons").show()}};
var _fileUploadItemFormItemHandler=function(e){fileUploadItemFormItemHandler=function(r){"use strict";r=e.extend({url:null,idPrefix:null,fieldName:null,beforeAdd:function(){return!0},notifyErrors:function(e){alert(e.join("\n"))},acceptFileTypes:/./,fileTypeErrorText:"Not an accepted file type",maxFileSize:null,maxFileSizeDisplay:null},r);var o=r.idPrefix,i=(r.fieldName,r.acceptFileTypes);e("#"+o+"-file").fileupload({url:r.url,dropZone:e("#"+o+"-file-dropzone"),dataType:"json",formData:function(){return[{name:"param_name",value:this.fileInput.attr("name")}]},add:function(s,a){var l=[];r.beforeAdd()&&(a.originalFiles[0].name&&!i.test(a.originalFiles[0].name)&&l.push(r.fileTypeErrorText),a.originalFiles[0].size&&a.originalFiles[0].size>r.maxFileSize&&l.push("Filesize exceeds the limit"+(r.maxFileSizeDisplay?" of "+r.maxFileSizeDisplay:"")),l.length>0?r.notifyErrors(l):(e("#"+o+"-progress .progress-upload-message").remove(),a.submit()))},fail:function(r,i){e("#"+o+"-progress .progress-bar").css("width","0%").attr("aria-valuenow",0).text(""),e("#"+o+"-progress .progress-upload-message").remove(),e('<div class="progress-upload-message">Upload Error</div>').addClass("highlight").prependTo("#"+o+"-progress"),setTimeout(function(){jQuery("#"+o+"-progress .progress-upload-message.highlight").removeClass("highlight")},1e3)},done:function(r,i){var s=i.fileInput.attr("name");e("#"+o+"-files .file").remove();var a=[];e.each(i.result[s],function(r,i){return"undefined"!=typeof i.error&&""!==i.error?void a.push(i.error):(e.Mustache.addFromDom(o+"-file-tpl"),void e("#"+o+"-files").mustache(o+"-file-tpl",i))}),e("#"+o+"-progress .progress-bar").css("width","0%").attr("aria-valuenow",0).text(""),e("#"+o+"-progress .progress-upload-message").remove(),e('<div class="progress-upload-message">Upload Complete</div>').addClass("highlight").prependTo("#"+o+"-progress"),setTimeout(function(){jQuery("#"+o+"-progress .progress-upload-message.highlight").removeClass("highlight")},1e3),a.length>0&&QRStuff&&QRStuff.notifyValidation(a),QRStuff&&QRStuff.scheduleRefreshPreview(),e("."+o+"-show-on-upload").show(),e("#"+o+"-file").trigger("fileuploadform:change")},progressall:function(r,i){var s=parseInt(i.loaded/i.total*100,10);e("#"+o+"-progress").show();var a="";s>10&&(a=s+"%"),100==s&&(a="Processing"),e("#"+o+"-progress .progress-bar").css("width",s+"%").attr("aria-valuenow",s).text(a)}}).prop("disabled",!e.support.fileInput).parent().addClass(e.support.fileInput?void 0:"disabled"),e(document).bind("dragover",function(r){var i=e("#"+o+"-file-dropzone"),s=window.dropZoneTimeout;s?clearTimeout(s):i.addClass("in");var a=!1,l=r.target;do{if(l===i[0]){a=!0;break}l=l.parentNode}while(null!==l);a?i.addClass("hover"):i.removeClass("hover"),window.dropZoneTimeout=setTimeout(function(){window.dropZoneTimeout=null,i.removeClass("in hover")},100)}),e(document).bind("drop dragover",function(e){e.preventDefault()})}};_fileUploadItemFormItemHandler(jQuery);
(function(g,f){"use strict";var h=function(e){if("object"!==typeof e.document)throw Error("Cookies.js requires a `window` with a `document` object");var b=function(a,d,c){return 1===arguments.length?b.get(a):b.set(a,d,c)};b._document=e.document;b._cacheKeyPrefix="cookey.";b._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC");b.defaults={path:"/",secure:!1};b.get=function(a){b._cachedDocumentCookie!==b._document.cookie&&b._renewCache();return b._cache[b._cacheKeyPrefix+a]};b.set=function(a,d,c){c=b._getExtendedOptions(c); c.expires=b._getExpiresDate(d===f?-1:c.expires);b._document.cookie=b._generateCookieString(a,d,c);return b};b.expire=function(a,d){return b.set(a,f,d)};b._getExtendedOptions=function(a){return{path:a&&a.path||b.defaults.path,domain:a&&a.domain||b.defaults.domain,expires:a&&a.expires||b.defaults.expires,secure:a&&a.secure!==f?a.secure:b.defaults.secure}};b._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())};b._getExpiresDate=function(a,d){d=d||new Date; "number"===typeof a?a=Infinity===a?b._maxExpireDate:new Date(d.getTime()+1E3*a):"string"===typeof a&&(a=new Date(a));if(a&&!b._isValidDate(a))throw Error("`expires` parameter cannot be converted to a valid Date instance");return a};b._generateCookieString=function(a,b,c){a=a.replace(/[^#$&+\^`|]/g,encodeURIComponent);a=a.replace(/\(/g,"%28").replace(/\)/g,"%29");b=(b+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};a=a+"="+b+(c.path?";path="+c.path:"");a+=c.domain?";domain="+c.domain: "";a+=c.expires?";expires="+c.expires.toUTCString():"";return a+=c.secure?";secure":""};b._getCacheFromString=function(a){var d={};a=a?a.split("; "):[];for(var c=0;c<a.length;c++){var e=b._getKeyValuePairFromCookieString(a[c]);d[b._cacheKeyPrefix+e.key]===f&&(d[b._cacheKeyPrefix+e.key]=e.value)}return d};b._getKeyValuePairFromCookieString=function(a){var b=a.indexOf("="),b=0>b?a.length:b;return{key:decodeURIComponent(a.substr(0,b)),value:decodeURIComponent(a.substr(b+1))}};b._renewCache=function(){b._cache= b._getCacheFromString(b._document.cookie);b._cachedDocumentCookie=b._document.cookie};b._areEnabled=function(){var a="1"===b.set("cookies.js",1).get("cookies.js");b.expire("cookies.js");return a};b.enabled=b._areEnabled();return b},e="object"===typeof g.document?h(g):h;"function"===typeof define&&define.amd?define(function(){return e}):"object"===typeof exports?("object"===typeof module&&"object"===typeof module.exports&&(exports=module.exports=e),exports.Cookies=e):g.Cookies=e})("undefined"===typeof window? this:window);
var IFrameBox=Class.create({id:"framebox",width:300,height:200,padding:0,opacity:.5,ui:{overlay:null,container:null,frame:null,loadingMask:null},initialize:function(){this.createElements(),IFrameBox.instance=this;var i=this.updateFramePosition.bind(this);Event.observe(window,"resize",i)},isVisible:function(){return this.ui.container&&"none"!=this.ui.container.style.display},show:function(i,e,t){this.ui.overlay.show(),this.ui.frame.src=i,this.updateFramePosition(e,t),this.ui.loadingMask.show(),this.ui.container.show()},hide:function(){this.ui.overlay.hide(),this.ui.container.hide()},createElements:function(){this.ui.overlay=new Element("div",{id:this.id+"-overlay","class":"iframebox-overlay",style:"display: none;"}),this.ui.overlay.observe("click",this.overlayClicked.bind(this)),this.ui.container=new Element("div",{id:this.id,"class":"iframebox-container",style:"display: none;"}),this.ui.frame=new Element("iframe",{id:this.id+"-frame","class":"iframebox-frame",allowtransparency:1,frameborder:0}),this.ui.frame.on("load",this.frameLoaded.bind(this)),this.ui.container.insert(this.ui.frame),this.ui.loadingMask=new Element("div",{id:this.id+"-loading-mask","class":"iframebox-loading-mask"}).update("<div>loading...</div>"),this.ui.container.insert(this.ui.loadingMask);var i=$$("body")[0];i.insert(this.ui.overlay),i.insert(this.ui.container)},overlayClicked:function(i){this.hide()},updateFramePosition:function(){var i=document.viewport.getWidth(),e=document.viewport.getHeight(),t=document.viewport.getScrollOffsets().top;this.ui.container.setStyle({left:Math.max(this.padding,(i-this.width)/2)+"px",top:t+Math.max(this.padding,(e-this.height)/2)+"px",width:this.width+"px",height:this.height+"px"})},frameLoaded:function(i){this.ui.loadingMask.hide()}});
jQuery.googleAutocomplete=function(e){var t=function(e){for(var t={street_number:{valProp:"short_name",name:"streetNumber"},route:{valProp:"long_name",name:"street"},locality:{valProp:"long_name",name:"locality"},administrative_area_level_1:{valProp:"short_name",name:"state"},country:{valProp:"short_name",name:"countryCode"},postal_code:{valProp:"short_name",name:"postalCode"}},o={},a=0;a<e.address_components.length;a++){var r=e.address_components[a].types[0];t[r]&&(o[t[r].name]=e.address_components[a][t[r].valProp])}return o.streetNumber&&o.street?o.streetAddress=o.streetNumber+" "+o.street:o.streetNumber?o.streetAddress=o.streetNumber:o.street&&(o.streetAddress=o.street),o},o=function(o,a){searchField=e(a);var r=o.getPlace();place=t(r),fields={streetAddress:".google-place-num-street",locality:".google-place-city",state:".google-place-state",postalCode:".google-place-postcode",countryCode:".google-place-country-code"};for(var s in fields)fields.hasOwnProperty(s)&&place[s]&&(e(fields[s]).val(place[s]),e(fields[s]).each(function(e){this.selectize&&this.selectize.setValue(place[s])}))},a=function(t){t||(t="google-place-autocomplete"),e(".google-place-autocomplete").each(function(t){autocomplete=new google.maps.places.Autocomplete(this,{types:["geocode"]}),autocomplete.addListener("place_changed",_.partial(o,autocomplete,this)),this.googlePlaceAutocomplete=autocomplete,e(this).on("keyup keypress",function(e){var t=e.keyCode||e.which;if(13===t)return e.preventDefault(),!1})})};return{init:a}}(jQuery);
GoogleMapPendingCallbacks="object"==typeof GoogleMapPendingCallbacks?GoogleMapPendingCallbacks:[],googleMapCallback=function(){for(var e=0;e<GoogleMapPendingCallbacks.length;e++)GoogleMapPendingCallbacks[e]();GoogleMapPendingCallbacks=[]};var GoogleMapController=Class.create({container:null,name:!1,map:!1,mark:!1,addressInputEl:!1,longitudeInputEl:!1,latitudeInputEl:!1,modeFirstRadioEl:!1,mode:null,initialize:function(e,t,s,i,a,n,o,d){if(this.container=s,this.owner=e,this.name=t,this.addressInputEl="undefined"!=typeof i?$(i):$("qrcode-data-"+this.name+"-address"),this.latitudeInputEl="undefined"!=typeof a?$(a):$("qrcode-data-"+this.name+"-latitude"),this.longitudeInputEl="undefined"!=typeof n?$(n):$("qrcode-data-"+this.name+"-longitude"),"undefined"!=typeof o&&(this.container.style.width=o+"px"),"undefined"!=typeof d&&(this.container.style.height=d+"px"),this.modeRadioEls=$$("input[type=radio][name=map_mode]"),this.modeFirstRadioEl=this.modeRadioEls.first(),"object"==typeof google&&"object"==typeof google.maps)return void this.initMap();GoogleMapPendingCallbacks.push(jQuery.googleAutocomplete.init),GoogleMapPendingCallbacks.push(this.initMap.bind(this));var l=document.createElement("script");l.src="https://maps.googleapis.com/maps/api/js?libraries=places&key="+googleApiServerKey+"&v="+googleMapsApiVersion+"&callback=googleMapCallback",document.head.appendChild(l)},initMap:function(){var e=new google.maps.LatLng(37.774785412131244,(-122.41962432861328)),t=14;if(this.map=new google.maps.Map(this.container,{zoom:t,mapTypeId:google.maps.MapTypeId.ROADMAP}),this.map.setCenter(e,t),this.geocoder=new google.maps.Geocoder,google.maps.event.addListener(this.map,"click",function(e){!this.mark&&e.latLng&&"latlng"==this.mode&&this.setPoint(e.latLng,!0)}.bind(this)),google.maps.event.addListener(this.map,"dblclick",function(e){e.latLng&&"latlng"==this.mode&&this.setPoint(e.latLng,!0)}.bind(this)),this.addressInputEl.observe("keypress",function(e){13==e.keyCode?(Event.stop(e),this.showAddress()):this.addressChanged()}.bind(this)),this.addressInputEl.googlePlaceAutocomplete&&this.addressInputEl.googlePlaceAutocomplete.addListener("place_changed",this.addressChanged.bind(this)),this.modeRadioEls.each(function(e){e.observe("change",function(e){this.modeChanged()}.bind(this))}.bind(this)),this.modeChanged(),this.parseLatitude(this.latitudeInputEl.value))this.longLatChanged();else{var s=this.addressInputEl.readAttribute("data-starting-point");s&&this.showAddress(!0,s)}},showAddress:function(e,t){return t||(t=this.addressInputEl.value),!(""===t||!this.geocoder)&&(e||"address"!=this.mode||this.mark&&this.mark.setMap(null),void this.geocoder.geocode({address:t},function(s){s.length<1?e!==!0&&alert(t+" not found"):this.setPoint(s[0].geometry.location,!0)}.bind(this)))},addressChanged:function(){this.addressChanged=_.debounce(function(){"address"==this.mode&&this.showAddress(!0)},2e3),this.addressChanged()},setPoint:function(e,t){this.mark&&this.mark.setMap(null),this.map.setCenter(e),this.mark=new google.maps.Marker({position:e,map:this.map,draggable:!0}),google.maps.event.addListener(this.mark,"dragend",function(t){return"address"==this.mode?void this.longLatChanged():(e=t.latLng,this.setLatLong(e.lat(),e.lng()),void this.owner.scheduleRefreshPreview())}.bind(this)),this.map.getCenter(e),t&&this.setLatLong(e.lat(),e.lng()),this.owner.scheduleRefreshPreview()},setLatLong:function(e,t){this.latitudeInputEl.value=e.toFixed(6),this.longitudeInputEl.value=t.toFixed(6)},longLatChanged:function(){var e=this.parseLongitude(this.longitudeInputEl.value),t=this.parseLatitude(this.latitudeInputEl.value);e!==!1&&t!==!1&&this.setPoint(new google.maps.LatLng(t,e),!1)},parseLongitude:function(e){var t=parseFloat(e);return t!=Number.NaN&&t>=-180&&t<=180&&t},parseLatitude:function(e){var t=parseFloat(e);return t!=Number.NaN&&t>-85&&t<85&&t},modeChanged:function(){this.mode=$RF(this.modeFirstRadioEl),$$(".map-lat-long-only").each(function(e){e.style.display="latlng"==this.mode?"":"none"}.bind(this)),$$(".map-address-only").each(function(e){e.style.display="address"==this.mode?"":"none"}.bind(this)),this.addressChanged()}});
svgImgReplacer=function(){jQuery("img.svg").each(function(){var e=jQuery(this),t=e.attr("id"),r=e.attr("class"),a=e.attr("src");jQuery.get(a,function(a){var c=jQuery(a).find("svg");"undefined"!=typeof t&&(c=c.attr("id",t)),"undefined"!=typeof r&&(c=c.attr("class",r+" replaced-svg")),c=c.removeAttr("xmlns:a"),e.replaceWith(c)},"xml")})},document.docReady(svgImgReplacer);
var colorPicker=Class.create({initialize:function(){var e=$A(arguments);this.el=$(e[0]),this.options=Object.extend({previewElement:!1,inputElement:!1,eventName:"click",onLoad:function(){return!0},onShow:function(){return!0},onBeforeShow:function(){return!0},onHide:function(){return!0},onChange:function(){return!0},onSubmit:function(){return!0},color:"000000",origColor:!1,livePreview:!0,hideOnSubmit:!0,updateOnChange:!0,flat:!1,hasExtraInfo:!1,extraInfo:function(){return!0}},e[1]),this.ids={},this.fields=[],this.current={},this.inAction=!1,this.charMin=65,this.visible=!1,this.time=(new Date).getTime(),this.id="colorpicker_"+this.time;var t='<div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_coloroptions"><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div><div class="colorpicker_extra" style="display:none;"></div><div class="colorpicker_extrafill" style="display:none;"></div></div>';if(this.cp=$(document.createElement("DIV")),this.cp.writeAttribute("id",this.id).addClassName("colorpicker").setStyle({display:"none"}).insert(t),"string"==typeof this.options.color)this.color=this.HexToHSB(this.options.color);else if(void 0!=this.color.r&&void 0!=this.options.color.g&&void 0!=this.options.color.b)this.color=this.RGBToHSB(this.options.color);else{if(void 0==this.options.color.h||void 0==this.options.color.s||void 0==this.options.color.b)return this;this.color=this.fixHSB(this.options.color)}return this.options.origColor=this.options.color,this.options.flat?(this.options.hideOnSubmit=!1,this.cp.setStyle({position:"relative",display:"block"}),this.el.insert({after:this.cp}),this.cp.show()):(document.body.appendChild(this.cp),$(this.el).observe(this.options.eventName,this.show.bind(this))),this.fields=$$("#"+this.id+" input"),this.fields.each(function(e){e.observe("keyup",this.keyUp.bind(this)),e.observe("change",function(e){this.change(e.element())}.bind(this)),e.observe("blur",this.blur.bind(this)),e.observe("focus",this.focus.bind(this))}.bind(this)),$$("#"+this.id+" span").each(function(e){e.observe("mousedown",this.downIncrement.bind(this))}.bind(this)),this.cp.down("div.colorpicker_current_color").observe("click",this.restoreOriginal.bind(this)),this.selector=this.cp.down("div.colorpicker_color"),this.selector.observe("mousedown",this.downSelector.bind(this)),this.selectorIndic=this.selector.down("div").down("div"),this.hue=this.cp.down("div.colorpicker_hue div"),this.cp.down("div.colorpicker_hue").observe("mousedown",this.downHue.bind(this)),this.newColor=this.cp.down("div.colorpicker_new_color"),this.currentColor=this.cp.down("div.colorpicker_current_color"),this.submit=this.cp.down("div.colorpicker_submit"),this.submit.observe("mouseenter",this.enterSubmit.bind(this)),this.submit.observe("mouseleave",this.leaveSubmit.bind(this)),this.submit.observe("click",this.clickSubmit.bind(this)),this.extra=this.cp.down("div.colorpicker_extra"),this.extraInfo=this.cp.down("div.colorpicker_extrafill"),1==this.options.hasExtraInfo&&(this.extra.show(),this.options.extraInfo(this),this.extra.observe("mouseenter",function(e){e.element().addClassName("colorpicker_focus")}),this.extra.observe("mouseleave",function(e){e.element().removeClassName("colorpicker_focus")}),this.extra.observe("click",function(e){var t=this.extraInfo;t.visible()?t.hide():t.show()}.bind(this))),this.fillRGBFields(this.color),this.fillHSBFields(this.color),this.fillHexFields(this.color),this.setHue(this.color),this.setSelector(this.color),this.setCurrentColor(this.options.origColor?this.options.origColor:this.color),this.setNewColor(this.color),$(this.options.previewElement)&&$(this.options.previewElement).setStyle({backgroundColor:"#"+this.HSBToHex(this.color)}),this.options.onLoad(this),this},fillRGBFields:function(e){var t=this.HSBToRGB(e);this.fields[1].value=t.r,this.fields[2].value=t.g,this.fields[3].value=t.b},fillHSBFields:function(e){this.fields[4].value=parseInt(e.h),this.fields[5].value=parseInt(e.s),this.fields[6].value=parseInt(e.b)},fillHexFields:function(e){this.fields[0].value=this.HSBToHex(e).toUpperCase()},setSelector:function(e){this.selector.setStyle({backgroundColor:"#"+this.HSBToHex({h:e.h,s:100,b:100})}),this.selectorIndic.setStyle({left:parseInt(150*e.s/100,10)+"px",top:parseInt(150*(100-e.b)/100,10)+"px"})},setHue:function(e){this.hue.setStyle({top:parseInt(150-150*e.h/360,10)+"px"})},setCurrentColor:function(e){this.currentColor.setStyle({backgroundColor:"#"+this.HSBToHex(e)}),this.options.origColor||(this.options.origColor=e)},setNewColor:function(e){this.newColor.setStyle({backgroundColor:"#"+this.HSBToHex(e)})},keyUp:function(e){var t=e.charCode||e.keyCode||-1;return!(t>this.charMin&&t<=90||32==t)&&void(this.options.livePreview===!0&&this.change(e.element()))},change:function(e){var t;e.up().className.indexOf("_hex")!=-1?this.color=t=this.HexToHSB(this.fixHex(e.value)):e.up().className.indexOf("_rgb")!=-1?this.color=t=this.RGBToHSB(this.fixRGB({r:parseInt(this.fields[1].value,10),g:parseInt(this.fields[2].value,10),b:parseInt(this.fields[3].value,10)})):this.color=t=this.fixHSB({h:parseInt(this.fields[4].value,10),s:parseInt(this.fields[5].value,10),b:parseInt(this.fields[6].value,10)}),this.setSelector(t),this.setHue(t),this.setNewColor(t),this.options.onChange(this),this.options.updateOnChange&&("INPUT"==this.el.nodeName&&(this.el.value=this.HSBToHex(t)),$(this.options.inputElement)&&($(this.options.inputElement).value=this.HSBToHex(t)),$(this.options.previewElement)&&$(this.options.previewElement).setStyle({backgroundColor:"#"+this.HSBToHex(t)}))},blur:function(e){e.element().up().removeClassName("colorpicker_focus")},focus:function(e){this.charMin=e.element().hasClassName("_hex")>0?70:65,e.element().addClassName("colorpicker_focus")},downIncrement:function(e){var t=e.element().up(),i=t.down("input");i.focus(),this.current={el:t.addClassName("colorpicker_slider"),max:t.className.indexOf("_hsb_h")!=-1?360:t.className.indexOf("_hsb")!=-1?100:255,y:e.pointerY(),field:i,val:parseInt(i.value,10),preview:this.options.livePreview},$(document).observe("mouseup",this.upIncrement.bind(this)),$(document).observe("mousemove",this.moveIncrement.bind(this))},moveIncrement:function(e){return this.current.field.value=Math.max(0,Math.min(this.current.max,parseInt(this.current.val+e.pointerY()-this.current.y,10))),this.current.preview&&this.change(this.current.field),!1},upIncrement:function(e){return this.change(e.element()),this.current.el.removeClassName("colorpicker_slider"),this.current.el.down("input").focus(),e.element().up().className.indexOf("_hsb")!=-1?this.fillRGBFields(this.color):this.fillHSBFields(this.color),this.fillHexFields(this.color),$(document).stopObserving("mouseup"),$(document).stopObserving("mousemove"),!1},downHue:function(e){this.current={y:e.element().cumulativeOffset().top,preview:this.options.livePreview},$(document).observe("mouseup",this.upHue.bind(this)),$(document).observe("mousemove",this.moveHue.bind(this))},moveHue:function(e){return this.fields[4].value=parseInt(360*(150-Math.max(0,Math.min(150,e.pointerY()-this.current.y)))/150,10),this.change(this.fields[4]),!1},upHue:function(e){return this.fillRGBFields(this.color),this.fillHexFields(this.color),this.fields[4].value=parseInt(360*(150-Math.max(0,Math.min(150,e.pointerY()-this.current.y)))/150,10),this.change(this.fields[4]),$(document).stopObserving("mouseup"),$(document).stopObserving("mousemove"),!1},downSelector:function(e){this.current={pos:e.element().cumulativeOffset(),preview:this.options.livePreview},$(document).observe("mouseup",this.upSelector.bind(this)),$(document).observe("mousemove",this.moveSelector.bind(this))},moveSelector:function(e){return this.fields[6].value=parseInt(100*(150-Math.max(0,Math.min(150,e.pointerY()-this.current.pos.top)))/150,10),this.fields[5].value=parseInt(100*Math.max(0,Math.min(150,e.pointerX()-this.current.pos.left))/150,10),this.change(e.element()),!1},upSelector:function(e){return this.moveSelector(e),this.fillRGBFields(this.color),this.fillHexFields(this.color),$(document).stopObserving("mouseup"),$(document).stopObserving("mousemove"),!1},enterSubmit:function(e){e.element().addClassName("colorpicker_focus")},leaveSubmit:function(e){e.element().removeClassName("colorpicker_focus")},clickSubmit:function(e){var t=this.color;this.origColor=t,this.setCurrentColor(t),"INPUT"==this.el.nodeName&&(this.el.value=this.HSBToHex(t)),$(this.options.inputElement)&&($(this.options.inputElement).value=this.HSBToHex(t)),$(this.options.previewElement)&&$(this.options.previewElement).setStyle({backgroundColor:"#"+this.HSBToHex(t)}),this.options.onSubmit(this),this.options.hideOnSubmit&&this.hidePicker()},show:function(e){return this.options.onBeforeShow(this),this.positionPicker(e),this.options.onShow(this)&&this.cp.setStyle({display:"block"}),$(document).observe("mousedown",this.hide.bind(this)),!1},hide:function(e){var t="object"==typeof e?e.element():$(document.body);this.isChildOf(this.cp,t)||(this.options.onHide(this)&&this.cp.setStyle({display:"none"}),$(document).stopObserving("mousedown"))},isChildOf:function(e,t){return e==t||$(t).descendantOf(e)},getViewport:function(){return{l:document.viewport.getScrollOffsets().left,t:document.viewport.getScrollOffsets().top,w:document.viewport.getWidth(),h:document.viewport.getHeight()}},positionPicker:function(e){var t=e.element().cumulativeOffset(),i=this.getViewport(),o=t.top+e.element().getHeight(),s=t.left;o+176>i.t+i.h&&(o-=e.element().getHeight()+176),s+356>i.l+i.w&&(s-=356-this.el.getWidth()),this.cp.setStyle({left:s+"px",top:o+"px"})},fixHSB:function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},fixRGB:function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},fixHex:function(e){var t=6-e.length;if(t>0){for(var i=[],o=0;o<t;o++)i.push("0");i.push(e),e=i.join("")}return e},HexToRGB:function(e){var e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:e>>16,g:(65280&e)>>8,b:255&e}},HexToHSB:function(e){return this.RGBToHSB(this.HexToRGB(e))},RGBToHSB:function(e){var t={h:0,s:0,b:0},i=Math.min(e.r,e.g,e.b),o=Math.max(e.r,e.g,e.b),s=o-i;return t.b=o,t.s=0!=o?255*s/o:0,0!=t.s?e.r==o?t.h=(e.g-e.b)/s:e.g==o?t.h=2+(e.b-e.r)/s:t.h=4+(e.r-e.g)/s:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t},HSBToRGB:function(e){var t={},i=Math.round(e.h),o=Math.round(255*e.s/100),s=Math.round(255*e.b/100);if(0==o)t.r=t.g=t.b=s;else{var n=s,r=(255-o)*s/255,h=(n-r)*(i%60)/60;360==i&&(i=0),i<60?(t.r=n,t.b=r,t.g=r+h):i<120?(t.g=n,t.b=r,t.r=n-h):i<180?(t.g=n,t.r=r,t.b=r+h):i<240?(t.b=n,t.r=r,t.g=n-h):i<300?(t.b=n,t.g=r,t.r=r+h):i<360?(t.r=n,t.g=r,t.b=n-h):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}},RGBToHex:function(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];return t.each(function(e,i){1==e.length&&(t[i]="0"+e)}),t.join("")},HSBToHex:function(e){return this.RGBToHex(this.HSBToRGB(e))},restoreOriginal:function(){var e=this.options.origColor;this.color=e,this.fillRGBFields(e),this.fillHexFields(e),this.fillHSBFields(e),this.setSelector(e),this.setHue(e),this.setNewColor(e)},showPicker:function(){this.cp.show()},hidePicker:function(){this.cp.hide()},setColor:function(e){if("string"==typeof e)e=this.HexToHSB(e);else if(void 0!=e.r&&void 0!=e.g&&void 0!=e.b)e=this.RGBToHSB(e);else{if(void 0==e.h||void 0==e.s||void 0==e.b)return this;e=fixHSB(e)}this.color=e,this.origColor=e,this.fillRGBFields(e),this.fillHSBFields(e),this.fillHexFields(e),this.setHue(e),this.setSelector(e),this.setCurrentColor(e),this.setNewColor(e),this.options.updateOnChange&&$(this.options.previewElement)&&$(this.options.previewElement).setStyle({backgroundColor:"#"+this.HSBToHex(e)})}});
(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function i(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function a(n,t){var r=null==n?0:n.length;return!!r&&b(n,t,0)>-1}function c(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function v(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function _(n){return n.split("")}function g(n){return n.match(Dt)||[]}function y(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function d(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function b(n,t,r){return t===t?K(n,t,r):d(n,m,r)}function w(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function m(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?I(n,t)/r:Ln}function j(n){return function(t){return null==t?X:t[n]}}function A(n){return function(t){return null==n?X:n[t]}}function k(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function O(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function I(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==X&&(r=r===X?i:r+i)}return r}function R(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function z(n,t){return l(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return l(t,function(t){return n[t]})}function W(n,t){return n.has(t)}function L(n,t){for(var r=-1,e=n.length;++r<e&&b(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length;r--&&b(t,n[r],0)>-1;);return r}function U(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function B(n){return"\\"+Yr[n]}function T(n,t){return null==n?X:n[t]}function $(n){return Nr.test(n)}function D(n){return Pr.test(n)}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function N(n,t){return function(r){return n(t(r))}}function P(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==fn||(n[r]=fn,i[u++]=r)}return i}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Z(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function K(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function V(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function G(n){return $(n)?J(n):ve(n)}function H(n){return $(n)?Y(n):_(n)}function J(n){for(var t=Mr.lastIndex=0;Mr.test(n);)++t;return t}function Y(n){return n.match(Mr)||[]}function Q(n){return n.match(Fr)||[]}var X,nn="4.17.4",tn=200,rn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",en="Expected a function",un="__lodash_hash_undefined__",on=500,fn="__lodash_placeholder__",an=1,cn=2,ln=4,sn=1,hn=2,pn=1,vn=2,_n=4,gn=8,yn=16,dn=32,bn=64,wn=128,mn=256,xn=512,jn=30,An="...",kn=800,On=16,In=1,Rn=2,zn=3,En=1/0,Sn=9007199254740991,Wn=1.7976931348623157e308,Ln=NaN,Cn=4294967295,Un=Cn-1,Bn=Cn>>>1,Tn=[["ary",wn],["bind",pn],["bindKey",vn],["curry",gn],["curryRight",yn],["flip",xn],["partial",dn],["partialRight",bn],["rearg",mn]],$n="[object Arguments]",Dn="[object Array]",Mn="[object AsyncFunction]",Fn="[object Boolean]",Nn="[object Date]",Pn="[object DOMException]",qn="[object Error]",Zn="[object Function]",Kn="[object GeneratorFunction]",Vn="[object Map]",Gn="[object Number]",Hn="[object Null]",Jn="[object Object]",Yn="[object Promise]",Qn="[object Proxy]",Xn="[object RegExp]",nt="[object Set]",tt="[object String]",rt="[object Symbol]",et="[object Undefined]",ut="[object WeakMap]",it="[object WeakSet]",ot="[object ArrayBuffer]",ft="[object DataView]",at="[object Float32Array]",ct="[object Float64Array]",lt="[object Int8Array]",st="[object Int16Array]",ht="[object Int32Array]",pt="[object Uint8Array]",vt="[object Uint8ClampedArray]",_t="[object Uint16Array]",gt="[object Uint32Array]",yt=/\b__p \+= '';/g,dt=/\b(__p \+=) '' \+/g,bt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/&(?:amp|lt|gt|quot|#39);/g,mt=/[&<>"']/g,xt=RegExp(wt.source),jt=RegExp(mt.source),At=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,It=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rt=/^\w*$/,zt=/^\./,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Wt=RegExp(St.source),Lt=/^\s+|\s+$/g,Ct=/^\s+/,Ut=/\s+$/,Bt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,Dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mt=/\\(\\)?/g,Ft=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Nt=/\w*$/,Pt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Zt=/^\[object .+?Constructor\]$/,Kt=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht=/($^)/,Jt=/['\n\r\u2028\u2029\\]/g,Yt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",nr="\\u20d0-\\u20ff",tr=Qt+Xt+nr,rr="\\u2700-\\u27bf",er="a-z\\xdf-\\xf6\\xf8-\\xff",ur="\\xac\\xb1\\xd7\\xf7",ir="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",or="\\u2000-\\u206f",fr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ar="A-Z\\xc0-\\xd6\\xd8-\\xde",cr="\\ufe0e\\ufe0f",lr=ur+ir+or+fr,sr="['’]",hr="["+Yt+"]",pr="["+lr+"]",vr="["+tr+"]",_r="\\d+",gr="["+rr+"]",yr="["+er+"]",dr="[^"+Yt+lr+_r+rr+er+ar+"]",br="\\ud83c[\\udffb-\\udfff]",wr="(?:"+vr+"|"+br+")",mr="[^"+Yt+"]",xr="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ar="["+ar+"]",kr="\\u200d",Or="(?:"+yr+"|"+dr+")",Ir="(?:"+Ar+"|"+dr+")",Rr="(?:"+sr+"(?:d|ll|m|re|s|t|ve))?",zr="(?:"+sr+"(?:D|LL|M|RE|S|T|VE))?",Er=wr+"?",Sr="["+cr+"]?",Wr="(?:"+kr+"(?:"+[mr,xr,jr].join("|")+")"+Sr+Er+")*",Lr="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",Cr="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",Ur=Sr+Er+Wr,Br="(?:"+[gr,xr,jr].join("|")+")"+Ur,Tr="(?:"+[mr+vr+"?",vr,xr,jr,hr].join("|")+")",$r=RegExp(sr,"g"),Dr=RegExp(vr,"g"),Mr=RegExp(br+"(?="+br+")|"+Tr+Ur,"g"),Fr=RegExp([Ar+"?"+yr+"+"+Rr+"(?="+[pr,Ar,"$"].join("|")+")",Ir+"+"+zr+"(?="+[pr,Ar+Or,"$"].join("|")+")",Ar+"?"+Or+"+"+Rr,Ar+"+"+zr,Cr,Lr,_r,Br].join("|"),"g"),Nr=RegExp("["+kr+Yt+tr+cr+"]"),Pr=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zr=-1,Kr={};Kr[at]=Kr[ct]=Kr[lt]=Kr[st]=Kr[ht]=Kr[pt]=Kr[vt]=Kr[_t]=Kr[gt]=!0,Kr[$n]=Kr[Dn]=Kr[ot]=Kr[Fn]=Kr[ft]=Kr[Nn]=Kr[qn]=Kr[Zn]=Kr[Vn]=Kr[Gn]=Kr[Jn]=Kr[Xn]=Kr[nt]=Kr[tt]=Kr[ut]=!1;var Vr={};Vr[$n]=Vr[Dn]=Vr[ot]=Vr[ft]=Vr[Fn]=Vr[Nn]=Vr[at]=Vr[ct]=Vr[lt]=Vr[st]=Vr[ht]=Vr[Vn]=Vr[Gn]=Vr[Jn]=Vr[Xn]=Vr[nt]=Vr[tt]=Vr[rt]=Vr[pt]=Vr[vt]=Vr[_t]=Vr[gt]=!0,Vr[qn]=Vr[Zn]=Vr[ut]=!1;var Gr={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Hr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Yr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qr=parseFloat,Xr=parseInt,ne="object"==typeof global&&global&&global.Object===Object&&global,te="object"==typeof self&&self&&self.Object===Object&&self,re=ne||te||Function("return this")(),ee="object"==typeof exports&&exports&&!exports.nodeType&&exports,ue=ee&&"object"==typeof module&&module&&!module.nodeType&&module,ie=ue&&ue.exports===ee,oe=ie&&ne.process,fe=function(){try{return oe&&oe.binding&&oe.binding("util")}catch(n){}}(),ae=fe&&fe.isArrayBuffer,ce=fe&&fe.isDate,le=fe&&fe.isMap,se=fe&&fe.isRegExp,he=fe&&fe.isSet,pe=fe&&fe.isTypedArray,ve=j("length"),_e=A(Gr),ge=A(Hr),ye=A(Jr),de=function we(_){function A(n){if(la(n)&&!mh(n)&&!(n instanceof Y)){if(n instanceof J)return n;if(ml.call(n,"__wrapped__"))return io(n)}return new J(n)}function K(){}function J(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=X}function Y(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Cn,this.__views__=[]}function Dt(){var n=new Y(this.__wrapped__);return n.__actions__=Mu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mu(this.__views__),n}function Yt(){if(this.__filtered__){var n=new Y(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Qt(){var n=this.__wrapped__.value(),t=this.__dir__,r=mh(n),e=t<0,u=r?n.length:0,i=zi(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Yl(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return mu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==Rn)g=w;else if(!w){if(b==In)continue n;break n}}v[h++]=g}return v}function Xt(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function nr(){this.__data__=fs?fs(null):{},this.size=0}function tr(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function rr(n){var t=this.__data__;if(fs){var r=t[n];return r===un?X:r}return ml.call(t,n)?t[n]:X}function er(n){var t=this.__data__;return fs?t[n]!==X:ml.call(t,n)}function ur(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=fs&&t===X?un:t,this}function ir(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function or(){this.__data__=[],this.size=0}function fr(n){var t=this.__data__,r=Wr(t,n);if(r<0)return!1;var e=t.length-1;return r==e?t.pop():Ul.call(t,r,1),--this.size,!0}function ar(n){var t=this.__data__,r=Wr(t,n);return r<0?X:t[r][1]}function cr(n){return Wr(this.__data__,n)>-1}function lr(n,t){var r=this.__data__,e=Wr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function sr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function hr(){this.size=0,this.__data__={hash:new Xt,map:new(es||ir),string:new Xt}}function pr(n){var t=ki(this,n)["delete"](n);return this.size-=t?1:0,t}function vr(n){return ki(this,n).get(n)}function _r(n){return ki(this,n).has(n)}function gr(n,t){var r=ki(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function yr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new sr;++t<r;)this.add(n[t])}function dr(n){return this.__data__.set(n,un),this}function br(n){return this.__data__.has(n)}function wr(n){var t=this.__data__=new ir(n);this.size=t.size}function mr(){this.__data__=new ir,this.size=0}function xr(n){var t=this.__data__,r=t["delete"](n);return this.size=t.size,r}function jr(n){return this.__data__.get(n)}function Ar(n){return this.__data__.has(n)}function kr(n,t){var r=this.__data__;if(r instanceof ir){var e=r.__data__;if(!es||e.length<tn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new sr(e)}return r.set(n,t),this.size=r.size,this}function Or(n,t){var r=mh(n),e=!r&&wh(n),u=!r&&!e&&jh(n),i=!r&&!e&&!u&&Rh(n),o=r||e||u||i,f=o?R(n.length,vl):[],a=f.length;for(var c in n)!t&&!ml.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ti(c,a))||f.push(c);return f}function Ir(n){var t=n.length;return t?n[ru(0,t-1)]:X}function Rr(n,t){return to(Mu(n),Mr(t,0,n.length))}function zr(n){return to(Mu(n))}function Er(n,t,r){(r===X||Jf(n[t],r))&&(r!==X||t in n)||Br(n,t,r)}function Sr(n,t,r){var e=n[t];ml.call(n,t)&&Jf(e,r)&&(r!==X||t in n)||Br(n,t,r)}function Wr(n,t){for(var r=n.length;r--;)if(Jf(n[r][0],t))return r;return-1}function Lr(n,t,r,e){return bs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Cr(n,t){return n&&Fu(t,Za(t),n)}function Ur(n,t){return n&&Fu(t,Ka(t),n)}function Br(n,t,r){"__proto__"==t&&Dl?Dl(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=fl(e),i=null==n;++r<e;)u[r]=i?X:Na(n,t[r]);return u}function Mr(n,t,r){return n===n&&(r!==X&&(n=n<=r?n:r),t!==X&&(n=n>=t?n:t)),n}function Fr(n,t,r,e,i,o){var f,a=t&an,c=t&cn,l=t&ln;if(r&&(f=i?r(n,e,i,o):r(n)),f!==X)return f;if(!ca(n))return n;var s=mh(n);if(s){if(f=Wi(n),!a)return Mu(n,f)}else{var h=Ss(n),p=h==Zn||h==Kn;if(jh(n))return Ru(n,a);if(h==Jn||h==$n||p&&!i){if(f=c||p?{}:Li(n),!a)return c?Pu(n,Ur(f,n)):Nu(n,Cr(f,n))}else{if(!Vr[h])return i?n:{};f=Ci(n,h,Fr,a)}}o||(o=new wr);var v=o.get(n);if(v)return v;o.set(n,f);var _=l?c?mi:wi:c?Ka:Za,g=s?X:_(n);return u(g||n,function(e,u){g&&(u=e,e=n[u]),Sr(f,u,Fr(e,t,r,u,n,o))}),f}function Nr(n){var t=Za(n);return function(r){return Pr(r,n,t)}}function Pr(n,t,r){var e=r.length;if(null==n)return!e;for(n=hl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===X&&!(u in n)||!i(o))return!1}return!0}function Gr(n,t,r){if("function"!=typeof n)throw new _l(en);return Cs(function(){n.apply(X,r)},t)}function Hr(n,t,r,e){var u=-1,i=a,o=!0,f=n.length,s=[],h=t.length;if(!f)return s;r&&(t=l(t,E(r))),e?(i=c,o=!1):t.length>=tn&&(i=W,o=!1,t=new yr(t));n:for(;++u<f;){var p=n[u],v=null==r?p:r(p);if(p=e||0!==p?p:0,o&&v===v){for(var _=h;_--;)if(t[_]===v)continue n;s.push(p)}else i(t,v,e)||s.push(p)}return s}function Jr(n,t){var r=!0;return bs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===X?o===o&&!ma(o):r(o,f)))var f=o,a=i}return a}function ne(n,t,r,e){var u=n.length;for(r=Ia(r),r<0&&(r=-r>u?0:u+r),e=e===X||e>u?u:Ia(e),e<0&&(e+=u),e=r>e?0:Ra(e);r<e;)n[r++]=t;return n}function te(n,t){var r=[];return bs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ee(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Bi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?ee(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function ue(n,t){return n&&ms(n,t,Za)}function oe(n,t){return n&&xs(n,t,Za)}function fe(n,t){return f(t,function(t){return oa(n[t])})}function ve(n,t){t=Ou(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[ro(t[r++])];return r&&r==e?n:X}function de(n,t,r){var e=t(n);return mh(n)?e:s(e,r(n))}function me(n){return null==n?n===X?et:Hn:$l&&$l in hl(n)?Ri(n):Hi(n)}function xe(n,t){return n>t}function je(n,t){return null!=n&&ml.call(n,t)}function Ae(n,t){return null!=n&&t in hl(n)}function ke(n,t,r){return n>=Yl(t,r)&&n<Jl(t,r)}function Oe(n,t,r){for(var e=r?c:a,u=n[0].length,i=n.length,o=i,f=fl(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,E(t))),s=Yl(p.length,s),f[o]=!r&&(t||u>=120&&p.length>=120)?new yr(o&&p):X}p=n[0];var v=-1,_=f[0];n:for(;++v<u&&h.length<s;){var g=p[v],y=t?t(g):g;if(g=r||0!==g?g:0,!(_?W(_,y):e(h,y,r))){for(o=i;--o;){var d=f[o];if(!(d?W(d,y):e(n[o],y,r)))continue n}_&&_.push(y),h.push(g)}}return h}function Ie(n,t,r,e){return ue(n,function(n,u,i){t(e,r(n),u,i)}),e}function Re(n,t,e){t=Ou(t,n),n=Yi(n,t);var u=null==n?n:n[ro(ko(t))];return null==u?X:r(u,n,e)}function ze(n){return la(n)&&me(n)==$n}function Ee(n){return la(n)&&me(n)==ot}function Se(n){return la(n)&&me(n)==Nn}function We(n,t,r,e,u){return n===t||(null==n||null==t||!la(n)&&!la(t)?n!==n&&t!==t:Le(n,t,r,e,We,u))}function Le(n,t,r,e,u,i){var o=mh(n),f=mh(t),a=o?Dn:Ss(n),c=f?Dn:Ss(t);a=a==$n?Jn:a,c=c==$n?Jn:c;var l=a==Jn,s=c==Jn,h=a==c;if(h&&jh(n)){if(!jh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new wr),o||Rh(n)?gi(n,t,r,e,u,i):yi(n,t,a,r,e,u,i);if(!(r&sn)){var p=l&&ml.call(n,"__wrapped__"),v=s&&ml.call(t,"__wrapped__");if(p||v){var _=p?n.value():n,g=v?t.value():t;return i||(i=new wr),u(_,g,r,e,i)}}return!!h&&(i||(i=new wr),di(n,t,r,e,u,i))}function Ce(n){return la(n)&&Ss(n)==Vn}function Ue(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=hl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var a=f[0],c=n[a],l=f[1];if(o&&f[2]){if(c===X&&!(a in n))return!1}else{var s=new wr;if(e)var h=e(c,l,a,n,t,s);if(!(h===X?We(l,c,sn|hn,e,s):h))return!1}}return!0}function Be(n){if(!ca(n)||Ni(n))return!1;var t=oa(n)?Il:Zt;return t.test(eo(n))}function Te(n){return la(n)&&me(n)==Xn}function $e(n){return la(n)&&Ss(n)==nt}function De(n){return la(n)&&aa(n.length)&&!!Kr[me(n)]}function Me(n){return"function"==typeof n?n:null==n?Uc:"object"==typeof n?mh(n)?Ke(n[0],n[1]):Ze(n):Pc(n)}function Fe(n){if(!Pi(n))return Hl(n);var t=[];for(var r in hl(n))ml.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Ne(n){if(!ca(n))return Gi(n);var t=Pi(n),r=[];for(var e in n)("constructor"!=e||!t&&ml.call(n,e))&&r.push(e);return r}function Pe(n,t){return n<t}function qe(n,t){var r=-1,e=Yf(n)?fl(n.length):[];return bs(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ze(n){var t=Oi(n);return 1==t.length&&t[0][2]?Zi(t[0][0],t[0][1]):function(r){return r===n||Ue(r,n,t)}}function Ke(n,t){return Di(n)&&qi(t)?Zi(ro(n),t):function(r){var e=Na(r,n);return e===X&&e===t?qa(r,n):We(t,e,sn|hn)}}function Ve(n,t,r,e,u){n!==t&&ms(t,function(i,o){if(ca(i))u||(u=new wr),Ge(n,t,o,r,Ve,e,u);else{var f=e?e(n[o],i,o+"",n,t,u):X;f===X&&(f=i),Er(n,o,f)}},Ka)}function Ge(n,t,r,e,u,i,o){var f=n[r],a=t[r],c=o.get(a);if(c)return void Er(n,r,c);var l=i?i(f,a,r+"",n,t,o):X,s=l===X;if(s){var h=mh(a),p=!h&&jh(a),v=!h&&!p&&Rh(a);l=a,h||p||v?mh(f)?l=f:Qf(f)?l=Mu(f):p?(s=!1,l=Ru(a,!0)):v?(s=!1,l=Uu(a,!0)):l=[]:da(a)||wh(a)?(l=f,wh(f)?l=Ea(f):(!ca(f)||e&&oa(f))&&(l=Li(a))):s=!1}s&&(o.set(a,l),u(l,a,e,i,o),o["delete"](a)),Er(n,r,l)}function He(n,t){var r=n.length;if(r)return t+=t<0?r:0,Ti(t,r)?n[t]:X}function Je(n,t,r){var e=-1;t=l(t.length?t:[Uc],E(Ai()));var u=qe(n,function(n,r,u){var i=l(t,function(t){return t(n)});return{criteria:i,index:++e,value:n}});return O(u,function(n,t){return Tu(n,t,r)})}function Ye(n,t){return Qe(n,t,function(t,r){return qa(n,r)})}function Qe(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=ve(n,o);r(f,o)&&au(i,Ou(o,n),f)}return i}function Xe(n){return function(t){return ve(t,n)}}function nu(n,t,r,e){var u=e?w:b,i=-1,o=t.length,f=n;for(n===t&&(t=Mu(t)),r&&(f=l(n,E(r)));++i<o;)for(var a=0,c=t[i],s=r?r(c):c;(a=u(f,s,a,e))>-1;)f!==n&&Ul.call(f,a,1),Ul.call(n,a,1);return n}function tu(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Ti(u)?Ul.call(n,u,1):du(n,u)}}return n}function ru(n,t){return n+ql(ns()*(t-n+1))}function eu(n,t,r,e){for(var u=-1,i=Jl(Pl((t-n)/(r||1)),0),o=fl(i);i--;)o[e?i:++u]=n,n+=r;return o}function uu(n,t){var r="";if(!n||t<1||t>Sn)return r;do t%2&&(r+=n),t=ql(t/2),t&&(n+=n);while(t);return r}function iu(n,t){return Us(Ji(n,t,Uc),n+"")}function ou(n){return Ir(uc(n))}function fu(n,t){var r=uc(n);return to(r,Mr(t,0,r.length))}function au(n,t,r,e){if(!ca(n))return n;t=Ou(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=ro(t[u]),c=r;if(u!=o){var l=f[a];c=e?e(l,a,f):X,c===X&&(c=ca(l)?l:Ti(t[u+1])?[]:{})}Sr(f,a,c),f=f[a]}return n}function cu(n){return to(uc(n))}function lu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=fl(u);++e<u;)i[e]=n[e+t];return i}function su(n,t){var r;return bs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function hu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Bn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!ma(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return pu(n,t,Uc,r)}function pu(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,a=ma(t),c=t===X;u<i;){var l=ql((u+i)/2),s=r(n[l]),h=s!==X,p=null===s,v=s===s,_=ma(s);if(o)var g=e||v;else g=c?v&&(e||h):f?v&&h&&(e||!p):a?v&&h&&!p&&(e||!_):!p&&!_&&(e?s<=t:s<t);g?u=l+1:i=l}return Yl(i,Un)}function vu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Jf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function _u(n){return"number"==typeof n?n:ma(n)?Ln:+n}function gu(n){if("string"==typeof n)return n;if(mh(n))return l(n,gu)+"";if(ma(n))return ys?ys.call(n):"";var t=n+"";return"0"==t&&1/n==-En?"-0":t}function yu(n,t,r){var e=-1,u=a,i=n.length,o=!0,f=[],l=f;if(r)o=!1,u=c;else if(i>=tn){var s=t?null:Is(n);if(s)return q(s);o=!1,u=W,l=new yr}else l=t?[]:f;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,o&&p===p){for(var v=l.length;v--;)if(l[v]===p)continue n;t&&l.push(p),f.push(h)}else u(l,p,r)||(l!==f&&l.push(p),f.push(h))}return f}function du(n,t){return t=Ou(t,n),n=Yi(n,t),null==n||delete n[ro(ko(t))]}function bu(n,t,r,e){return au(n,t,r(ve(n,t)),e)}function wu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?lu(n,e?0:i,e?i+1:u):lu(n,e?i+1:0,e?u:i)}function mu(n,t){var r=n;return r instanceof Y&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function xu(n,t,r){var e=n.length;if(e<2)return e?yu(n[0]):[];for(var u=-1,i=fl(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Hr(i[u]||o,n[f],t,r));return yu(ee(i,1),t,r)}function ju(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){var f=e<i?t[e]:X;r(o,n[e],f)}return o}function Au(n){return Qf(n)?n:[]}function ku(n){return"function"==typeof n?n:Uc}function Ou(n,t){return mh(n)?n:Di(n,t)?[n]:Bs(Wa(n))}function Iu(n,t,r){var e=n.length;return r=r===X?e:r,!t&&r>=e?n:lu(n,t,r)}function Ru(n,t){if(t)return n.slice();var r=n.length,e=Sl?Sl(r):new n.constructor(r);return n.copy(e),e}function zu(n){var t=new n.constructor(n.byteLength);return new El(t).set(new El(n)),t}function Eu(n,t){var r=t?zu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}function Su(t,r,e){var u=r?e(F(t),an):F(t);return h(u,n,new t.constructor)}function Wu(n){var t=new n.constructor(n.source,Nt.exec(n));return t.lastIndex=n.lastIndex,t}function Lu(n,r,e){var u=r?e(q(n),an):q(n);return h(u,t,new n.constructor)}function Cu(n){return gs?hl(gs.call(n)):{}}function Uu(n,t){var r=t?zu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Bu(n,t){if(n!==t){var r=n!==X,e=null===n,u=n===n,i=ma(n),o=t!==X,f=null===t,a=t===t,c=ma(t);if(!f&&!c&&!i&&n>t||i&&o&&a&&!f&&!c||e&&o&&a||!r&&a||!u)return 1;if(!e&&!i&&!c&&n<t||c&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!a)return-1}return 0}function Tu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Bu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}function $u(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=Jl(i-o,0),l=fl(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function Du(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=Jl(i-f,0),s=fl(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Mu(n,t){var r=-1,e=n.length;for(t||(t=fl(e));++r<e;)t[r]=n[r];return t}function Fu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],a=e?e(r[f],n[f],f,r,n):X;a===X&&(a=n[f]),u?Br(r,f,a):Sr(r,f,a)}return r}function Nu(n,t){return Fu(n,zs(n),t)}function Pu(n,t){return Fu(n,Es(n),t)}function qu(n,t){return function(r,u){var i=mh(r)?e:Lr,o=t?t():{};return i(r,n,Ai(u,2),o)}}function Zu(n){return iu(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:X,o=u>2?r[2]:X;for(i=n.length>3&&"function"==typeof i?(u--,i):X,o&&$i(r[0],r[1],o)&&(i=u<3?X:i,u=1),t=hl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Ku(n,t){return function(r,e){if(null==r)return r;if(!Yf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=hl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Vu(n){return function(t,r,e){for(var u=-1,i=hl(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(r(i[a],a,i)===!1)break}return t}}function Gu(n,t,r){function e(){var t=this&&this!==re&&this instanceof e?i:n;return t.apply(u?r:this,arguments)}var u=t&pn,i=Yu(n);return e}function Hu(n){return function(t){t=Wa(t);var r=$(t)?H(t):X,e=r?r[0]:t.charAt(0),u=r?Iu(r,1).join(""):t.slice(1);return e[n]()+u}}function Ju(n){return function(t){return h(Ec(lc(t).replace($r,"")),n,"")}}function Yu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ds(n.prototype),e=n.apply(r,t);return ca(e)?e:r}}function Qu(n,t,e){function u(){for(var o=arguments.length,f=fl(o),a=o,c=ji(u);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:P(f,c);if(o-=l.length,o<e)return ci(n,t,ti,u.placeholder,X,f,l,X,X,e-o);var s=this&&this!==re&&this instanceof u?i:n;return r(s,this,f)}var i=Yu(n);return u}function Xu(n){return function(t,r,e){var u=hl(t);if(!Yf(t)){var i=Ai(r,3);t=Za(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:X}}function ni(n){return bi(function(t){var r=t.length,e=r,u=J.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new _l(en);if(u&&!o&&"wrapper"==xi(i))var o=new J([],(!0))}for(e=o?e:r;++e<r;){i=t[e];var f=xi(i),a="wrapper"==f?Rs(i):X;o=a&&Fi(a[0])&&a[1]==(wn|gn|dn|mn)&&!a[4].length&&1==a[9]?o[xi(a[0])].apply(o,a[3]):1==i.length&&Fi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&mh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function ti(n,t,r,e,u,i,o,f,a,c){function l(){for(var y=arguments.length,d=fl(y),b=y;b--;)d[b]=arguments[b];if(v)var w=ji(l),m=U(d,w);if(e&&(d=$u(d,e,u,v)),i&&(d=Du(d,i,o,v)),y-=m,v&&y<c){var x=P(d,w);return ci(n,t,ti,l.placeholder,r,d,x,f,a,c-y)}var j=h?r:this,A=p?j[n]:n;return y=d.length,f?d=Qi(d,f):_&&y>1&&d.reverse(),s&&a<y&&(d.length=a),this&&this!==re&&this instanceof l&&(A=g||Yu(A)),A.apply(j,d)}var s=t&wn,h=t&pn,p=t&vn,v=t&(gn|yn),_=t&xn,g=p?X:Yu(n);return l}function ri(n,t){return function(r,e){return Ie(r,n,t(e),{})}}function ei(n,t){return function(r,e){var u;if(r===X&&e===X)return t;if(r!==X&&(u=r),e!==X){if(u===X)return e;"string"==typeof r||"string"==typeof e?(r=gu(r),e=gu(e)):(r=_u(r),e=_u(e)),u=n(r,e)}return u}}function ui(n){return bi(function(t){return t=l(t,E(Ai())),iu(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ii(n,t){t=t===X?" ":gu(t);var r=t.length;if(r<2)return r?uu(t,n):t;var e=uu(t,Pl(n/G(t)));return $(t)?Iu(H(e),0,n).join(""):e.slice(0,n)}function oi(n,t,e,u){function i(){for(var t=-1,a=arguments.length,c=-1,l=u.length,s=fl(l+a),h=this&&this!==re&&this instanceof i?f:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++t];return r(h,o?e:this,s)}var o=t&pn,f=Yu(n);return i}function fi(n){return function(t,r,e){return e&&"number"!=typeof e&&$i(t,r,e)&&(r=e=X),t=Oa(t),r===X?(r=t,t=0):r=Oa(r),e=e===X?t<r?1:-1:Oa(e),eu(t,r,e,n)}}function ai(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=za(t),r=za(r)),n(t,r)}}function ci(n,t,r,e,u,i,o,f,a,c){var l=t&gn,s=l?o:X,h=l?X:o,p=l?i:X,v=l?X:i;t|=l?dn:bn,t&=~(l?bn:dn),t&_n||(t&=~(pn|vn));var _=[n,t,u,p,s,v,h,f,a,c],g=r.apply(X,_);return Fi(n)&&Ls(g,_),g.placeholder=e,Xi(g,n,t)}function li(n){var t=sl[n];return function(n,r){if(n=za(n),r=null==r?0:Yl(Ia(r),292)){var e=(Wa(n)+"e").split("e"),u=t(e[0]+"e"+(+e[1]+r));return e=(Wa(u)+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function si(n){return function(t){var r=Ss(t);return r==Vn?F(t):r==nt?Z(t):z(t,n(t))}}function hi(n,t,r,e,u,i,o,f){var a=t&vn;if(!a&&"function"!=typeof n)throw new _l(en);var c=e?e.length:0;if(c||(t&=~(dn|bn),e=u=X),o=o===X?o:Jl(Ia(o),0),f=f===X?f:Ia(f),c-=u?u.length:0,t&bn){var l=e,s=u;e=u=X}var h=a?X:Rs(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Vi(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===X?a?0:n.length:Jl(p[9]-c,0),!f&&t&(gn|yn)&&(t&=~(gn|yn)),t&&t!=pn)v=t==gn||t==yn?Qu(n,t,f):t!=dn&&t!=(pn|dn)||u.length?ti.apply(X,p):oi(n,t,r,e);else var v=Gu(n,t,r);var _=h?js:Ls;return Xi(_(v,p),n,t)}function pi(n,t,r,e){return n===X||Jf(n,dl[r])&&!ml.call(e,r)?t:n}function vi(n,t,r,e,u,i){return ca(n)&&ca(t)&&(i.set(t,n),Ve(n,t,X,vi,i),i["delete"](t)),n}function _i(n){return da(n)?X:n}function gi(n,t,r,e,u,i){var o=r&sn,f=n.length,a=t.length;if(f!=a&&!(o&&a>f))return!1;var c=i.get(n);if(c&&i.get(t))return c==t;var l=-1,s=!0,h=r&hn?new yr:X;for(i.set(n,t),i.set(t,n);++l<f;){var p=n[l],_=t[l];if(e)var g=o?e(_,p,l,t,n,i):e(p,_,l,n,t,i);if(g!==X){if(g)continue;s=!1;break}if(h){if(!v(t,function(n,t){if(!W(h,t)&&(p===n||u(p,n,r,e,i)))return h.push(t)})){s=!1;break}}else if(p!==_&&!u(p,_,r,e,i)){s=!1;break}}return i["delete"](n),i["delete"](t),s}function yi(n,t,r,e,u,i,o){switch(r){case ft:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case ot:return!(n.byteLength!=t.byteLength||!i(new El(n),new El(t)));case Fn:case Nn:case Gn:return Jf(+n,+t);case qn:return n.name==t.name&&n.message==t.message;case Xn:case tt:return n==t+"";case Vn:var f=F;case nt:var a=e&sn;if(f||(f=q),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=hn,o.set(n,t);var l=gi(f(n),f(t),e,u,i,o);return o["delete"](n),l;case rt:if(gs)return gs.call(n)==gs.call(t)}return!1}function di(n,t,r,e,u,i){var o=r&sn,f=wi(n),a=f.length,c=wi(t),l=c.length;if(a!=l&&!o)return!1;for(var s=a;s--;){var h=f[s];if(!(o?h in t:ml.call(t,h)))return!1}var p=i.get(n);if(p&&i.get(t))return p==t;var v=!0;i.set(n,t),i.set(t,n);for(var _=o;++s<a;){h=f[s];var g=n[h],y=t[h];if(e)var d=o?e(y,g,h,t,n,i):e(g,y,h,n,t,i);if(!(d===X?g===y||u(g,y,r,e,i):d)){v=!1;break}_||(_="constructor"==h)}if(v&&!_){var b=n.constructor,w=t.constructor;
b!=w&&"constructor"in n&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(v=!1)}return i["delete"](n),i["delete"](t),v}function bi(n){return Us(Ji(n,X,go),n+"")}function wi(n){return de(n,Za,zs)}function mi(n){return de(n,Ka,Es)}function xi(n){for(var t=n.name+"",r=cs[t],e=ml.call(cs,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function ji(n){var t=ml.call(A,"placeholder")?A:n;return t.placeholder}function Ai(){var n=A.iteratee||Bc;return n=n===Bc?Me:n,arguments.length?n(arguments[0],arguments[1]):n}function ki(n,t){var r=n.__data__;return Mi(t)?r["string"==typeof t?"string":"hash"]:r.map}function Oi(n){for(var t=Za(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,qi(u)]}return t}function Ii(n,t){var r=T(n,t);return Be(r)?r:X}function Ri(n){var t=ml.call(n,$l),r=n[$l];try{n[$l]=X;var e=!0}catch(u){}var i=Al.call(n);return e&&(t?n[$l]=r:delete n[$l]),i}function zi(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Yl(t,n+o);break;case"takeRight":n=Jl(n,t-o)}}return{start:n,end:t}}function Ei(n){var t=n.match(Tt);return t?t[1].split($t):[]}function Si(n,t,r){t=Ou(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=ro(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&aa(u)&&Ti(o,u)&&(mh(n)||wh(n)))}function Wi(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ml.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Li(n){return"function"!=typeof n.constructor||Pi(n)?{}:ds(Wl(n))}function Ci(n,t,r,e){var u=n.constructor;switch(t){case ot:return zu(n);case Fn:case Nn:return new u((+n));case ft:return Eu(n,e);case at:case ct:case lt:case st:case ht:case pt:case vt:case _t:case gt:return Uu(n,e);case Vn:return Su(n,e,r);case Gn:case tt:return new u(n);case Xn:return Wu(n);case nt:return Lu(n,e,r);case rt:return Cu(n)}}function Ui(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Bt,"{\n/* [wrapped with "+t+"] */\n")}function Bi(n){return mh(n)||wh(n)||!!(Bl&&n&&n[Bl])}function Ti(n,t){return t=null==t?Sn:t,!!t&&("number"==typeof n||Vt.test(n))&&n>-1&&n%1==0&&n<t}function $i(n,t,r){if(!ca(r))return!1;var e=typeof t;return!!("number"==e?Yf(r)&&Ti(t,r.length):"string"==e&&t in r)&&Jf(r[t],n)}function Di(n,t){if(mh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!ma(n))||(Rt.test(n)||!It.test(n)||null!=t&&n in hl(t))}function Mi(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Fi(n){var t=xi(n),r=A[t];if("function"!=typeof r||!(t in Y.prototype))return!1;if(n===r)return!0;var e=Rs(r);return!!e&&n===e[0]}function Ni(n){return!!jl&&jl in n}function Pi(n){var t=n&&n.constructor,r="function"==typeof t&&t.prototype||dl;return n===r}function qi(n){return n===n&&!ca(n)}function Zi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==X||n in hl(r)))}}function Ki(n){var t=Bf(n,function(n){return r.size===on&&r.clear(),n}),r=t.cache;return t}function Vi(n,t){var r=n[1],e=t[1],u=r|e,i=u<(pn|vn|wn),o=e==wn&&r==gn||e==wn&&r==mn&&n[7].length<=t[8]||e==(wn|mn)&&t[7].length<=t[8]&&r==gn;if(!i&&!o)return n;e&pn&&(n[2]=t[2],u|=r&pn?0:_n);var f=t[3];if(f){var a=n[3];n[3]=a?$u(a,f,t[4]):f,n[4]=a?P(n[3],fn):t[4]}return f=t[5],f&&(a=n[5],n[5]=a?Du(a,f,t[6]):f,n[6]=a?P(n[5],fn):t[6]),f=t[7],f&&(n[7]=f),e&wn&&(n[8]=null==n[8]?t[8]:Yl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Gi(n){var t=[];if(null!=n)for(var r in hl(n))t.push(r);return t}function Hi(n){return Al.call(n)}function Ji(n,t,e){return t=Jl(t===X?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Jl(u.length-t,0),f=fl(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=fl(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),r(n,this,a)}}function Yi(n,t){return t.length<2?n:ve(n,lu(t,0,-1))}function Qi(n,t){for(var r=n.length,e=Yl(t.length,r),u=Mu(n);e--;){var i=t[e];n[e]=Ti(i,r)?u[i]:X}return n}function Xi(n,t,r){var e=t+"";return Us(n,Ui(e,uo(Ei(e),r)))}function no(n){var t=0,r=0;return function(){var e=Ql(),u=On-(e-r);if(r=e,u>0){if(++t>=kn)return arguments[0]}else t=0;return n.apply(X,arguments)}}function to(n,t){var r=-1,e=n.length,u=e-1;for(t=t===X?e:t;++r<t;){var i=ru(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function ro(n){if("string"==typeof n||ma(n))return n;var t=n+"";return"0"==t&&1/n==-En?"-0":t}function eo(n){if(null!=n){try{return wl.call(n)}catch(t){}try{return n+""}catch(t){}}return""}function uo(n,t){return u(Tn,function(r){var e="_."+r[0];t&r[1]&&!a(n,e)&&n.push(e)}),n.sort()}function io(n){if(n instanceof Y)return n.clone();var t=new J(n.__wrapped__,n.__chain__);return t.__actions__=Mu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function oo(n,t,r){t=(r?$i(n,t,r):t===X)?1:Jl(Ia(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=fl(Pl(e/t));u<e;)o[i++]=lu(n,u,u+=t);return o}function fo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function ao(){var n=arguments.length;if(!n)return[];for(var t=fl(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return s(mh(r)?Mu(r):[r],ee(t,1))}function co(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),lu(n,t<0?0:t,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),t=e-t,lu(n,0,t<0?0:t)):[]}function so(n,t){return n&&n.length?wu(n,Ai(t,3),!0,!0):[]}function ho(n,t){return n&&n.length?wu(n,Ai(t,3),!0):[]}function po(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&$i(n,t,r)&&(r=0,e=u),ne(n,t,r,e)):[]}function vo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Ia(r);return u<0&&(u=Jl(e+u,0)),d(n,Ai(t,3),u)}function _o(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==X&&(u=Ia(r),u=r<0?Jl(e+u,0):Yl(u,e-1)),d(n,Ai(t,3),u,!0)}function go(n){var t=null==n?0:n.length;return t?ee(n,1):[]}function yo(n){var t=null==n?0:n.length;return t?ee(n,En):[]}function bo(n,t){var r=null==n?0:n.length;return r?(t=t===X?1:Ia(t),ee(n,t)):[]}function wo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function mo(n){return n&&n.length?n[0]:X}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Ia(r);return u<0&&(u=Jl(e+u,0)),b(n,t,u)}function jo(n){var t=null==n?0:n.length;return t?lu(n,0,-1):[]}function Ao(n,t){return null==n?"":Gl.call(n,t)}function ko(n){var t=null==n?0:n.length;return t?n[t-1]:X}function Oo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==X&&(u=Ia(r),u=u<0?Jl(e+u,0):Yl(u,e-1)),t===t?V(n,t,u):d(n,m,u,!0)}function Io(n,t){return n&&n.length?He(n,Ia(t)):X}function Ro(n,t){return n&&n.length&&t&&t.length?nu(n,t):n}function zo(n,t,r){return n&&n.length&&t&&t.length?nu(n,t,Ai(r,2)):n}function Eo(n,t,r){return n&&n.length&&t&&t.length?nu(n,t,X,r):n}function So(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=Ai(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return tu(n,u),r}function Wo(n){return null==n?n:ts.call(n)}function Lo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&$i(n,t,r)?(t=0,r=e):(t=null==t?0:Ia(t),r=r===X?e:Ia(r)),lu(n,t,r)):[]}function Co(n,t){return hu(n,t)}function Uo(n,t,r){return pu(n,t,Ai(r,2))}function Bo(n,t){var r=null==n?0:n.length;if(r){var e=hu(n,t);if(e<r&&Jf(n[e],t))return e}return-1}function To(n,t){return hu(n,t,!0)}function $o(n,t,r){return pu(n,t,Ai(r,2),!0)}function Do(n,t){var r=null==n?0:n.length;if(r){var e=hu(n,t,!0)-1;if(Jf(n[e],t))return e}return-1}function Mo(n){return n&&n.length?vu(n):[]}function Fo(n,t){return n&&n.length?vu(n,Ai(t,2)):[]}function No(n){var t=null==n?0:n.length;return t?lu(n,1,t):[]}function Po(n,t,r){return n&&n.length?(t=r||t===X?1:Ia(t),lu(n,0,t<0?0:t)):[]}function qo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),t=e-t,lu(n,t<0?0:t,e)):[]}function Zo(n,t){return n&&n.length?wu(n,Ai(t,3),!1,!0):[]}function Ko(n,t){return n&&n.length?wu(n,Ai(t,3)):[]}function Vo(n){return n&&n.length?yu(n):[]}function Go(n,t){return n&&n.length?yu(n,Ai(t,2)):[]}function Ho(n,t){return t="function"==typeof t?t:X,n&&n.length?yu(n,X,t):[]}function Jo(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(Qf(n))return t=Jl(n.length,t),!0}),R(t,function(t){return l(n,j(t))})}function Yo(n,t){if(!n||!n.length)return[];var e=Jo(n);return null==t?e:l(e,function(n){return r(t,X,n)})}function Qo(n,t){return ju(n||[],t||[],Sr)}function Xo(n,t){return ju(n||[],t||[],au)}function nf(n){var t=A(n);return t.__chain__=!0,t}function tf(n,t){return t(n),n}function rf(n,t){return t(n)}function ef(){return nf(this)}function uf(){return new J(this.value(),this.__chain__)}function of(){this.__values__===X&&(this.__values__=ka(this.value()));var n=this.__index__>=this.__values__.length,t=n?X:this.__values__[this.__index__++];return{done:n,value:t}}function ff(){return this}function af(n){for(var t,r=this;r instanceof K;){var e=io(r);e.__index__=0,e.__values__=X,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function cf(){var n=this.__wrapped__;if(n instanceof Y){var t=n;return this.__actions__.length&&(t=new Y(this)),t=t.reverse(),t.__actions__.push({func:rf,args:[Wo],thisArg:X}),new J(t,this.__chain__)}return this.thru(Wo)}function lf(){return mu(this.__wrapped__,this.__actions__)}function sf(n,t,r){var e=mh(n)?o:Jr;return r&&$i(n,t,r)&&(t=X),e(n,Ai(t,3))}function hf(n,t){var r=mh(n)?f:te;return r(n,Ai(t,3))}function pf(n,t){return ee(bf(n,t),1)}function vf(n,t){return ee(bf(n,t),En)}function _f(n,t,r){return r=r===X?1:Ia(r),ee(bf(n,t),r)}function gf(n,t){var r=mh(n)?u:bs;return r(n,Ai(t,3))}function yf(n,t){var r=mh(n)?i:ws;return r(n,Ai(t,3))}function df(n,t,r,e){n=Yf(n)?n:uc(n),r=r&&!e?Ia(r):0;var u=n.length;return r<0&&(r=Jl(u+r,0)),wa(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&b(n,t,r)>-1}function bf(n,t){var r=mh(n)?l:qe;return r(n,Ai(t,3))}function wf(n,t,r,e){return null==n?[]:(mh(t)||(t=null==t?[]:[t]),r=e?X:r,mh(r)||(r=null==r?[]:[r]),Je(n,t,r))}function mf(n,t,r){var e=mh(n)?h:k,u=arguments.length<3;return e(n,Ai(t,4),r,u,bs)}function xf(n,t,r){var e=mh(n)?p:k,u=arguments.length<3;return e(n,Ai(t,4),r,u,ws)}function jf(n,t){var r=mh(n)?f:te;return r(n,Tf(Ai(t,3)))}function Af(n){var t=mh(n)?Ir:ou;return t(n)}function kf(n,t,r){t=(r?$i(n,t,r):t===X)?1:Ia(t);var e=mh(n)?Rr:fu;return e(n,t)}function Of(n){var t=mh(n)?zr:cu;return t(n)}function If(n){if(null==n)return 0;if(Yf(n))return wa(n)?G(n):n.length;var t=Ss(n);return t==Vn||t==nt?n.size:Fe(n).length}function Rf(n,t,r){var e=mh(n)?v:su;return r&&$i(n,t,r)&&(t=X),e(n,Ai(t,3))}function zf(n,t){if("function"!=typeof t)throw new _l(en);return n=Ia(n),function(){if(--n<1)return t.apply(this,arguments)}}function Ef(n,t,r){return t=r?X:t,t=n&&null==t?n.length:t,hi(n,wn,X,X,X,X,t)}function Sf(n,t){var r;if("function"!=typeof t)throw new _l(en);return n=Ia(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=X),r}}function Wf(n,t,r){t=r?X:t;var e=hi(n,gn,X,X,X,X,X,t);return e.placeholder=Wf.placeholder,e}function Lf(n,t,r){t=r?X:t;var e=hi(n,yn,X,X,X,X,X,t);return e.placeholder=Lf.placeholder,e}function Cf(n,t,r){function e(t){var r=h,e=p;return h=p=X,d=t,_=n.apply(e,r)}function u(n){return d=n,g=Cs(f,t),b?e(n):_}function i(n){var r=n-y,e=n-d,u=t-r;return w?Yl(u,v-e):u}function o(n){var r=n-y,e=n-d;return y===X||r>=t||r<0||w&&e>=v}function f(){var n=ch();return o(n)?a(n):void(g=Cs(f,i(n)))}function a(n){return g=X,m&&h?e(n):(h=p=X,_)}function c(){g!==X&&Os(g),d=0,h=y=p=g=X}function l(){return g===X?_:a(ch())}function s(){var n=ch(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===X)return u(y);if(w)return g=Cs(f,t),e(y)}return g===X&&(g=Cs(f,t)),_}var h,p,v,_,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new _l(en);return t=za(t)||0,ca(r)&&(b=!!r.leading,w="maxWait"in r,v=w?Jl(za(r.maxWait)||0,t):v,m="trailing"in r?!!r.trailing:m),s.cancel=c,s.flush=l,s}function Uf(n){return hi(n,xn)}function Bf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new _l(en);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Bf.Cache||sr),r}function Tf(n){if("function"!=typeof n)throw new _l(en);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function $f(n){return Sf(2,n)}function Df(n,t){if("function"!=typeof n)throw new _l(en);return t=t===X?t:Ia(t),iu(n,t)}function Mf(n,t){if("function"!=typeof n)throw new _l(en);return t=null==t?0:Jl(Ia(t),0),iu(function(e){var u=e[t],i=Iu(e,0,t);return u&&s(i,u),r(n,this,i)})}function Ff(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new _l(en);return ca(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Cf(n,t,{leading:e,maxWait:t,trailing:u})}function Nf(n){return Ef(n,1)}function Pf(n,t){return _h(ku(t),n)}function qf(){if(!arguments.length)return[];var n=arguments[0];return mh(n)?n:[n]}function Zf(n){return Fr(n,ln)}function Kf(n,t){return t="function"==typeof t?t:X,Fr(n,ln,t)}function Vf(n){return Fr(n,an|ln)}function Gf(n,t){return t="function"==typeof t?t:X,Fr(n,an|ln,t)}function Hf(n,t){return null==t||Pr(n,t,Za(t))}function Jf(n,t){return n===t||n!==n&&t!==t}function Yf(n){return null!=n&&aa(n.length)&&!oa(n)}function Qf(n){return la(n)&&Yf(n)}function Xf(n){return n===!0||n===!1||la(n)&&me(n)==Fn}function na(n){return la(n)&&1===n.nodeType&&!da(n)}function ta(n){if(null==n)return!0;if(Yf(n)&&(mh(n)||"string"==typeof n||"function"==typeof n.splice||jh(n)||Rh(n)||wh(n)))return!n.length;var t=Ss(n);if(t==Vn||t==nt)return!n.size;if(Pi(n))return!Fe(n).length;for(var r in n)if(ml.call(n,r))return!1;return!0}function ra(n,t){return We(n,t)}function ea(n,t,r){r="function"==typeof r?r:X;var e=r?r(n,t):X;return e===X?We(n,t,X,r):!!e}function ua(n){if(!la(n))return!1;var t=me(n);return t==qn||t==Pn||"string"==typeof n.message&&"string"==typeof n.name&&!da(n)}function ia(n){return"number"==typeof n&&Vl(n)}function oa(n){if(!ca(n))return!1;var t=me(n);return t==Zn||t==Kn||t==Mn||t==Qn}function fa(n){return"number"==typeof n&&n==Ia(n)}function aa(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Sn}function ca(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function la(n){return null!=n&&"object"==typeof n}function sa(n,t){return n===t||Ue(n,t,Oi(t))}function ha(n,t,r){return r="function"==typeof r?r:X,Ue(n,t,Oi(t),r)}function pa(n){return ya(n)&&n!=+n}function va(n){if(Ws(n))throw new cl(rn);return Be(n)}function _a(n){return null===n}function ga(n){return null==n}function ya(n){return"number"==typeof n||la(n)&&me(n)==Gn}function da(n){if(!la(n)||me(n)!=Jn)return!1;var t=Wl(n);if(null===t)return!0;var r=ml.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&wl.call(r)==kl}function ba(n){return fa(n)&&n>=-Sn&&n<=Sn}function wa(n){return"string"==typeof n||!mh(n)&&la(n)&&me(n)==tt}function ma(n){return"symbol"==typeof n||la(n)&&me(n)==rt}function xa(n){return n===X}function ja(n){return la(n)&&Ss(n)==ut}function Aa(n){return la(n)&&me(n)==it}function ka(n){if(!n)return[];if(Yf(n))return wa(n)?H(n):Mu(n);if(Tl&&n[Tl])return M(n[Tl]());var t=Ss(n),r=t==Vn?F:t==nt?q:uc;return r(n)}function Oa(n){if(!n)return 0===n?n:0;if(n=za(n),n===En||n===-En){var t=n<0?-1:1;return t*Wn}return n===n?n:0}function Ia(n){var t=Oa(n),r=t%1;return t===t?r?t-r:t:0}function Ra(n){return n?Mr(Ia(n),0,Cn):0}function za(n){if("number"==typeof n)return n;if(ma(n))return Ln;if(ca(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ca(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Lt,"");var r=qt.test(n);return r||Kt.test(n)?Xr(n.slice(2),r?2:8):Pt.test(n)?Ln:+n}function Ea(n){return Fu(n,Ka(n))}function Sa(n){return n?Mr(Ia(n),-Sn,Sn):0===n?n:0}function Wa(n){return null==n?"":gu(n)}function La(n,t){var r=ds(n);return null==t?r:Cr(r,t)}function Ca(n,t){return y(n,Ai(t,3),ue)}function Ua(n,t){return y(n,Ai(t,3),oe)}function Ba(n,t){return null==n?n:ms(n,Ai(t,3),Ka)}function Ta(n,t){return null==n?n:xs(n,Ai(t,3),Ka)}function $a(n,t){return n&&ue(n,Ai(t,3))}function Da(n,t){return n&&oe(n,Ai(t,3))}function Ma(n){return null==n?[]:fe(n,Za(n))}function Fa(n){return null==n?[]:fe(n,Ka(n))}function Na(n,t,r){var e=null==n?X:ve(n,t);return e===X?r:e}function Pa(n,t){return null!=n&&Si(n,t,je)}function qa(n,t){return null!=n&&Si(n,t,Ae)}function Za(n){return Yf(n)?Or(n):Fe(n)}function Ka(n){return Yf(n)?Or(n,!0):Ne(n)}function Va(n,t){var r={};return t=Ai(t,3),ue(n,function(n,e,u){Br(r,t(n,e,u),n)}),r}function Ga(n,t){var r={};return t=Ai(t,3),ue(n,function(n,e,u){Br(r,e,t(n,e,u))}),r}function Ha(n,t){return Ja(n,Tf(Ai(t)))}function Ja(n,t){if(null==n)return{};var r=l(mi(n),function(n){return[n]});return t=Ai(t),Qe(n,r,function(n,r){return t(n,r[0])})}function Ya(n,t,r){t=Ou(t,n);var e=-1,u=t.length;for(u||(u=1,n=X);++e<u;){var i=null==n?X:n[ro(t[e])];i===X&&(e=u,i=r),n=oa(i)?i.call(n):i}return n}function Qa(n,t,r){return null==n?n:au(n,t,r)}function Xa(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:au(n,t,r,e)}function nc(n,t,r){var e=mh(n),i=e||jh(n)||Rh(n);if(t=Ai(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:ca(n)&&oa(o)?ds(Wl(n)):{}}return(i?u:ue)(n,function(n,e,u){return t(r,n,e,u)}),r}function tc(n,t){return null==n||du(n,t)}function rc(n,t,r){return null==n?n:bu(n,t,ku(r))}function ec(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:bu(n,t,ku(r),e)}function uc(n){return null==n?[]:S(n,Za(n))}function ic(n){return null==n?[]:S(n,Ka(n))}function oc(n,t,r){return r===X&&(r=t,t=X),r!==X&&(r=za(r),r=r===r?r:0),t!==X&&(t=za(t),t=t===t?t:0),Mr(za(n),t,r)}function fc(n,t,r){return t=Oa(t),r===X?(r=t,t=0):r=Oa(r),n=za(n),ke(n,t,r)}function ac(n,t,r){if(r&&"boolean"!=typeof r&&$i(n,t,r)&&(t=r=X),r===X&&("boolean"==typeof t?(r=t,t=X):"boolean"==typeof n&&(r=n,n=X)),n===X&&t===X?(n=0,t=1):(n=Oa(n),t===X?(t=n,n=0):t=Oa(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=ns();return Yl(n+u*(t-n+Qr("1e-"+((u+"").length-1))),t)}return ru(n,t)}function cc(n){return np(Wa(n).toLowerCase())}function lc(n){return n=Wa(n),n&&n.replace(Gt,_e).replace(Dr,"")}function sc(n,t,r){n=Wa(n),t=gu(t);var e=n.length;r=r===X?e:Mr(Ia(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function hc(n){return n=Wa(n),n&&jt.test(n)?n.replace(mt,ge):n}function pc(n){return n=Wa(n),n&&Wt.test(n)?n.replace(St,"\\$&"):n}function vc(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ii(ql(u),r)+n+ii(Pl(u),r)}function _c(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;return t&&e<t?n+ii(t-e,r):n}function gc(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;return t&&e<t?ii(t-e,r)+n:n}function yc(n,t,r){return r||null==t?t=0:t&&(t=+t),Xl(Wa(n).replace(Ct,""),t||0)}function dc(n,t,r){return t=(r?$i(n,t,r):t===X)?1:Ia(t),uu(Wa(n),t)}function bc(){var n=arguments,t=Wa(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function wc(n,t,r){return r&&"number"!=typeof r&&$i(n,t,r)&&(t=r=X),(r=r===X?Cn:r>>>0)?(n=Wa(n),n&&("string"==typeof t||null!=t&&!Oh(t))&&(t=gu(t),!t&&$(n))?Iu(H(n),0,r):n.split(t,r)):[]}function mc(n,t,r){return n=Wa(n),r=null==r?0:Mr(Ia(r),0,n.length),t=gu(t),n.slice(r,r+t.length)==t}function xc(n,t,r){var e=A.templateSettings;r&&$i(n,t,r)&&(t=X),n=Wa(n),t=Lh({},t,e,pi);var u,i,o=Lh({},t.imports,e.imports,pi),f=Za(o),a=S(o,f),c=0,l=t.interpolate||Ht,s="__p += '",h=pl((t.escape||Ht).source+"|"+l.source+"|"+(l===Ot?Ft:Ht).source+"|"+(t.evaluate||Ht).source+"|$","g"),p="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Zr+"]")+"\n";n.replace(h,function(t,r,e,o,f,a){return e||(e=o),s+=n.slice(c,a).replace(Jt,B),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),c=a+t.length,t}),s+="';\n";var v=t.variable;v||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(yt,""):s).replace(dt,"$1").replace(bt,"$1;"),s="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var _=tp(function(){return ll(f,p+"return "+s).apply(X,a)});if(_.source=s,ua(_))throw _;return _}function jc(n){return Wa(n).toLowerCase()}function Ac(n){return Wa(n).toUpperCase()}function kc(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Lt,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=H(t),i=L(e,u),o=C(e,u)+1;return Iu(e,i,o).join("")}function Oc(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Ut,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=C(e,H(t))+1;return Iu(e,0,u).join("")}function Ic(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Ct,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=L(e,H(t));return Iu(e,u).join("")}function Rc(n,t){var r=jn,e=An;if(ca(t)){var u="separator"in t?t.separator:u;r="length"in t?Ia(t.length):r,e="omission"in t?gu(t.omission):e}n=Wa(n);var i=n.length;if($(n)){var o=H(n);i=o.length}if(r>=i)return n;var f=r-G(e);if(f<1)return e;var a=o?Iu(o,0,f).join(""):n.slice(0,f);if(u===X)return a+e;if(o&&(f+=a.length-f),Oh(u)){if(n.slice(f).search(u)){var c,l=a;for(u.global||(u=pl(u.source,Wa(Nt.exec(u))+"g")),u.lastIndex=0;c=u.exec(l);)var s=c.index;a=a.slice(0,s===X?f:s)}}else if(n.indexOf(gu(u),f)!=f){var h=a.lastIndexOf(u);h>-1&&(a=a.slice(0,h))}return a+e}function zc(n){return n=Wa(n),n&&xt.test(n)?n.replace(wt,ye):n}function Ec(n,t,r){return n=Wa(n),t=r?X:t,t===X?D(n)?Q(n):g(n):n.match(t)||[]}function Sc(n){var t=null==n?0:n.length,e=Ai();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new _l(en);return[e(n[0]),n[1]]}):[],iu(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})}function Wc(n){return Nr(Fr(n,an))}function Lc(n){return function(){return n}}function Cc(n,t){return null==n||n!==n?t:n}function Uc(n){return n}function Bc(n){return Me("function"==typeof n?n:Fr(n,an))}function Tc(n){return Ze(Fr(n,an))}function $c(n,t){return Ke(n,Fr(t,an))}function Dc(n,t,r){var e=Za(t),i=fe(t,e);null!=r||ca(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=fe(t,Za(t)));var o=!(ca(r)&&"chain"in r&&!r.chain),f=oa(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__),u=r.__actions__=Mu(this.__actions__);return u.push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function Mc(){return re._===this&&(re._=Ol),this}function Fc(){}function Nc(n){return n=Ia(n),iu(function(t){return He(t,n)})}function Pc(n){return Di(n)?j(ro(n)):Xe(n)}function qc(n){return function(t){return null==n?X:ve(n,t)}}function Zc(){return[]}function Kc(){return!1}function Vc(){return{}}function Gc(){return""}function Hc(){return!0}function Jc(n,t){if(n=Ia(n),n<1||n>Sn)return[];var r=Cn,e=Yl(n,Cn);t=Ai(t),n-=Cn;for(var u=R(e,t);++r<n;)t(r);return u}function Yc(n){return mh(n)?l(n,ro):ma(n)?[n]:Mu(Bs(Wa(n)))}function Qc(n){var t=++xl;return Wa(n)+t}function Xc(n){return n&&n.length?Yr(n,Uc,xe):X}function nl(n,t){return n&&n.length?Yr(n,Ai(t,2),xe):X}function tl(n){return x(n,Uc)}function rl(n,t){return x(n,Ai(t,2))}function el(n){return n&&n.length?Yr(n,Uc,Pe):X}function ul(n,t){return n&&n.length?Yr(n,Ai(t,2),Pe):X}function il(n){return n&&n.length?I(n,Uc):0}function ol(n,t){return n&&n.length?I(n,Ai(t,2)):0}_=null==_?re:be.defaults(re.Object(),_,be.pick(re,qr));var fl=_.Array,al=_.Date,cl=_.Error,ll=_.Function,sl=_.Math,hl=_.Object,pl=_.RegExp,vl=_.String,_l=_.TypeError,gl=fl.prototype,yl=ll.prototype,dl=hl.prototype,bl=_["__core-js_shared__"],wl=yl.toString,ml=dl.hasOwnProperty,xl=0,jl=function(){var n=/[^.]+$/.exec(bl&&bl.keys&&bl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Al=dl.toString,kl=wl.call(hl),Ol=re._,Il=pl("^"+wl.call(ml).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Rl=ie?_.Buffer:X,zl=_.Symbol,El=_.Uint8Array,Sl=Rl?Rl.allocUnsafe:X,Wl=N(hl.getPrototypeOf,hl),Ll=hl.create,Cl=dl.propertyIsEnumerable,Ul=gl.splice,Bl=zl?zl.isConcatSpreadable:X,Tl=zl?zl.iterator:X,$l=zl?zl.toStringTag:X,Dl=function(){try{var n=Ii(hl,"defineProperty");return n({},"",{}),n}catch(t){}}(),Ml=_.clearTimeout!==re.clearTimeout&&_.clearTimeout,Fl=al&&al.now!==re.Date.now&&al.now,Nl=_.setTimeout!==re.setTimeout&&_.setTimeout,Pl=sl.ceil,ql=sl.floor,Zl=hl.getOwnPropertySymbols,Kl=Rl?Rl.isBuffer:X,Vl=_.isFinite,Gl=gl.join,Hl=N(hl.keys,hl),Jl=sl.max,Yl=sl.min,Ql=al.now,Xl=_.parseInt,ns=sl.random,ts=gl.reverse,rs=Ii(_,"DataView"),es=Ii(_,"Map"),us=Ii(_,"Promise"),is=Ii(_,"Set"),os=Ii(_,"WeakMap"),fs=Ii(hl,"create"),as=os&&new os,cs={},ls=eo(rs),ss=eo(es),hs=eo(us),ps=eo(is),vs=eo(os),_s=zl?zl.prototype:X,gs=_s?_s.valueOf:X,ys=_s?_s.toString:X,ds=function(){function n(){}return function(t){if(!ca(t))return{};if(Ll)return Ll(t);n.prototype=t;var r=new n;return n.prototype=X,r}}();A.templateSettings={escape:At,evaluate:kt,interpolate:Ot,variable:"",imports:{_:A}},A.prototype=K.prototype,A.prototype.constructor=A,J.prototype=ds(K.prototype),J.prototype.constructor=J,Y.prototype=ds(K.prototype),Y.prototype.constructor=Y,Xt.prototype.clear=nr,Xt.prototype["delete"]=tr,Xt.prototype.get=rr,Xt.prototype.has=er,Xt.prototype.set=ur,ir.prototype.clear=or,ir.prototype["delete"]=fr,ir.prototype.get=ar,ir.prototype.has=cr,ir.prototype.set=lr,sr.prototype.clear=hr,sr.prototype["delete"]=pr,sr.prototype.get=vr,sr.prototype.has=_r,sr.prototype.set=gr,yr.prototype.add=yr.prototype.push=dr,yr.prototype.has=br,wr.prototype.clear=mr,wr.prototype["delete"]=xr,wr.prototype.get=jr,wr.prototype.has=Ar,wr.prototype.set=kr;var bs=Ku(ue),ws=Ku(oe,!0),ms=Vu(),xs=Vu(!0),js=as?function(n,t){return as.set(n,t),n}:Uc,As=Dl?function(n,t){return Dl(n,"toString",{configurable:!0,enumerable:!1,value:Lc(t),writable:!0})}:Uc,ks=iu,Os=Ml||function(n){return re.clearTimeout(n)},Is=is&&1/q(new is([,-0]))[1]==En?function(n){return new is(n)}:Fc,Rs=as?function(n){return as.get(n)}:Fc,zs=Zl?function(n){return null==n?[]:(n=hl(n),f(Zl(n),function(t){return Cl.call(n,t)}))}:Zc,Es=Zl?function(n){for(var t=[];n;)s(t,zs(n)),n=Wl(n);return t}:Zc,Ss=me;(rs&&Ss(new rs(new ArrayBuffer(1)))!=ft||es&&Ss(new es)!=Vn||us&&Ss(us.resolve())!=Yn||is&&Ss(new is)!=nt||os&&Ss(new os)!=ut)&&(Ss=function(n){var t=me(n),r=t==Jn?n.constructor:X,e=r?eo(r):"";if(e)switch(e){case ls:return ft;case ss:return Vn;case hs:return Yn;case ps:return nt;case vs:return ut}return t});var Ws=bl?oa:Kc,Ls=no(js),Cs=Nl||function(n,t){return re.setTimeout(n,t)},Us=no(As),Bs=Ki(function(n){var t=[];return zt.test(n)&&t.push(""),n.replace(Et,function(n,r,e,u){t.push(e?u.replace(Mt,"$1"):r||n)}),t}),Ts=iu(function(n,t){return Qf(n)?Hr(n,ee(t,1,Qf,!0)):[]}),$s=iu(function(n,t){var r=ko(t);return Qf(r)&&(r=X),Qf(n)?Hr(n,ee(t,1,Qf,!0),Ai(r,2)):[]}),Ds=iu(function(n,t){var r=ko(t);return Qf(r)&&(r=X),Qf(n)?Hr(n,ee(t,1,Qf,!0),X,r):[]}),Ms=iu(function(n){var t=l(n,Au);return t.length&&t[0]===n[0]?Oe(t):[]}),Fs=iu(function(n){var t=ko(n),r=l(n,Au);return t===ko(r)?t=X:r.pop(),r.length&&r[0]===n[0]?Oe(r,Ai(t,2)):[]}),Ns=iu(function(n){var t=ko(n),r=l(n,Au);return t="function"==typeof t?t:X,t&&r.pop(),r.length&&r[0]===n[0]?Oe(r,X,t):[]}),Ps=iu(Ro),qs=bi(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return tu(n,l(t,function(n){return Ti(n,r)?+n:n}).sort(Bu)),e}),Zs=iu(function(n){return yu(ee(n,1,Qf,!0))}),Ks=iu(function(n){var t=ko(n);return Qf(t)&&(t=X),yu(ee(n,1,Qf,!0),Ai(t,2))}),Vs=iu(function(n){var t=ko(n);return t="function"==typeof t?t:X,yu(ee(n,1,Qf,!0),X,t)}),Gs=iu(function(n,t){return Qf(n)?Hr(n,t):[]}),Hs=iu(function(n){return xu(f(n,Qf))}),Js=iu(function(n){var t=ko(n);return Qf(t)&&(t=X),xu(f(n,Qf),Ai(t,2))}),Ys=iu(function(n){var t=ko(n);return t="function"==typeof t?t:X,xu(f(n,Qf),X,t)}),Qs=iu(Jo),Xs=iu(function(n){var t=n.length,r=t>1?n[t-1]:X;return r="function"==typeof r?(n.pop(),r):X,Yo(n,r)}),nh=bi(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Y&&Ti(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:rf,args:[u],thisArg:X}),new J(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(X),n})):this.thru(u)}),th=qu(function(n,t,r){ml.call(n,r)?++n[r]:Br(n,r,1)}),rh=Xu(vo),eh=Xu(_o),uh=qu(function(n,t,r){ml.call(n,r)?n[r].push(t):Br(n,r,[t])}),ih=iu(function(n,t,e){var u=-1,i="function"==typeof t,o=Yf(n)?fl(n.length):[];return bs(n,function(n){o[++u]=i?r(t,n,e):Re(n,t,e)}),o}),oh=qu(function(n,t,r){Br(n,r,t)}),fh=qu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),ah=iu(function(n,t){if(null==n)return[];var r=t.length;return r>1&&$i(n,t[0],t[1])?t=[]:r>2&&$i(t[0],t[1],t[2])&&(t=[t[0]]),Je(n,ee(t,1),[])}),ch=Fl||function(){return re.Date.now()},lh=iu(function(n,t,r){var e=pn;if(r.length){var u=P(r,ji(lh));e|=dn}return hi(n,e,t,r,u)}),sh=iu(function(n,t,r){var e=pn|vn;if(r.length){var u=P(r,ji(sh));e|=dn}return hi(t,e,n,r,u)}),hh=iu(function(n,t){return Gr(n,1,t)}),ph=iu(function(n,t,r){return Gr(n,za(t)||0,r)});Bf.Cache=sr;var vh=ks(function(n,t){t=1==t.length&&mh(t[0])?l(t[0],E(Ai())):l(ee(t,1),E(Ai()));var e=t.length;return iu(function(u){for(var i=-1,o=Yl(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),_h=iu(function(n,t){var r=P(t,ji(_h));return hi(n,dn,X,t,r)}),gh=iu(function(n,t){var r=P(t,ji(gh));return hi(n,bn,X,t,r)}),yh=bi(function(n,t){return hi(n,mn,X,X,X,t)}),dh=ai(xe),bh=ai(function(n,t){return n>=t}),wh=ze(function(){return arguments}())?ze:function(n){return la(n)&&ml.call(n,"callee")&&!Cl.call(n,"callee")},mh=fl.isArray,xh=ae?E(ae):Ee,jh=Kl||Kc,Ah=ce?E(ce):Se,kh=le?E(le):Ce,Oh=se?E(se):Te,Ih=he?E(he):$e,Rh=pe?E(pe):De,zh=ai(Pe),Eh=ai(function(n,t){return n<=t}),Sh=Zu(function(n,t){if(Pi(t)||Yf(t))return void Fu(t,Za(t),n);for(var r in t)ml.call(t,r)&&Sr(n,r,t[r])}),Wh=Zu(function(n,t){Fu(t,Ka(t),n)}),Lh=Zu(function(n,t,r,e){Fu(t,Ka(t),n,e)}),Ch=Zu(function(n,t,r,e){Fu(t,Za(t),n,e)}),Uh=bi(Tr),Bh=iu(function(n){return n.push(X,pi),r(Lh,X,n)}),Th=iu(function(n){return n.push(X,vi),r(Nh,X,n)}),$h=ri(function(n,t,r){n[t]=r},Lc(Uc)),Dh=ri(function(n,t,r){ml.call(n,t)?n[t].push(r):n[t]=[r]},Ai),Mh=iu(Re),Fh=Zu(function(n,t,r){Ve(n,t,r)}),Nh=Zu(function(n,t,r,e){Ve(n,t,r,e)}),Ph=bi(function(n,t){var r={};if(null==n)return r;var e=!1;t=l(t,function(t){return t=Ou(t,n),e||(e=t.length>1),t}),Fu(n,mi(n),r),e&&(r=Fr(r,an|cn|ln,_i));for(var u=t.length;u--;)du(r,t[u]);return r}),qh=bi(function(n,t){return null==n?{}:Ye(n,t)}),Zh=si(Za),Kh=si(Ka),Vh=Ju(function(n,t,r){return t=t.toLowerCase(),n+(r?cc(t):t)}),Gh=Ju(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Hh=Ju(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Jh=Hu("toLowerCase"),Yh=Ju(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Qh=Ju(function(n,t,r){return n+(r?" ":"")+np(t)}),Xh=Ju(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),np=Hu("toUpperCase"),tp=iu(function(n,t){try{return r(n,X,t)}catch(e){return ua(e)?e:new cl(e)}}),rp=bi(function(n,t){return u(t,function(t){t=ro(t),Br(n,t,lh(n[t],n))}),n}),ep=ni(),up=ni(!0),ip=iu(function(n,t){return function(r){return Re(r,n,t)}}),op=iu(function(n,t){return function(r){return Re(n,r,t)}}),fp=ui(l),ap=ui(o),cp=ui(v),lp=fi(),sp=fi(!0),hp=ei(function(n,t){return n+t},0),pp=li("ceil"),vp=ei(function(n,t){return n/t},1),_p=li("floor"),gp=ei(function(n,t){return n*t},1),yp=li("round"),dp=ei(function(n,t){return n-t},0);return A.after=zf,A.ary=Ef,A.assign=Sh,A.assignIn=Wh,A.assignInWith=Lh,A.assignWith=Ch,A.at=Uh,A.before=Sf,A.bind=lh,A.bindAll=rp,A.bindKey=sh,A.castArray=qf,A.chain=nf,A.chunk=oo,A.compact=fo,A.concat=ao,A.cond=Sc,A.conforms=Wc,A.constant=Lc,A.countBy=th,A.create=La,A.curry=Wf,
A.curryRight=Lf,A.debounce=Cf,A.defaults=Bh,A.defaultsDeep=Th,A.defer=hh,A.delay=ph,A.difference=Ts,A.differenceBy=$s,A.differenceWith=Ds,A.drop=co,A.dropRight=lo,A.dropRightWhile=so,A.dropWhile=ho,A.fill=po,A.filter=hf,A.flatMap=pf,A.flatMapDeep=vf,A.flatMapDepth=_f,A.flatten=go,A.flattenDeep=yo,A.flattenDepth=bo,A.flip=Uf,A.flow=ep,A.flowRight=up,A.fromPairs=wo,A.functions=Ma,A.functionsIn=Fa,A.groupBy=uh,A.initial=jo,A.intersection=Ms,A.intersectionBy=Fs,A.intersectionWith=Ns,A.invert=$h,A.invertBy=Dh,A.invokeMap=ih,A.iteratee=Bc,A.keyBy=oh,A.keys=Za,A.keysIn=Ka,A.map=bf,A.mapKeys=Va,A.mapValues=Ga,A.matches=Tc,A.matchesProperty=$c,A.memoize=Bf,A.merge=Fh,A.mergeWith=Nh,A.method=ip,A.methodOf=op,A.mixin=Dc,A.negate=Tf,A.nthArg=Nc,A.omit=Ph,A.omitBy=Ha,A.once=$f,A.orderBy=wf,A.over=fp,A.overArgs=vh,A.overEvery=ap,A.overSome=cp,A.partial=_h,A.partialRight=gh,A.partition=fh,A.pick=qh,A.pickBy=Ja,A.property=Pc,A.propertyOf=qc,A.pull=Ps,A.pullAll=Ro,A.pullAllBy=zo,A.pullAllWith=Eo,A.pullAt=qs,A.range=lp,A.rangeRight=sp,A.rearg=yh,A.reject=jf,A.remove=So,A.rest=Df,A.reverse=Wo,A.sampleSize=kf,A.set=Qa,A.setWith=Xa,A.shuffle=Of,A.slice=Lo,A.sortBy=ah,A.sortedUniq=Mo,A.sortedUniqBy=Fo,A.split=wc,A.spread=Mf,A.tail=No,A.take=Po,A.takeRight=qo,A.takeRightWhile=Zo,A.takeWhile=Ko,A.tap=tf,A.throttle=Ff,A.thru=rf,A.toArray=ka,A.toPairs=Zh,A.toPairsIn=Kh,A.toPath=Yc,A.toPlainObject=Ea,A.transform=nc,A.unary=Nf,A.union=Zs,A.unionBy=Ks,A.unionWith=Vs,A.uniq=Vo,A.uniqBy=Go,A.uniqWith=Ho,A.unset=tc,A.unzip=Jo,A.unzipWith=Yo,A.update=rc,A.updateWith=ec,A.values=uc,A.valuesIn=ic,A.without=Gs,A.words=Ec,A.wrap=Pf,A.xor=Hs,A.xorBy=Js,A.xorWith=Ys,A.zip=Qs,A.zipObject=Qo,A.zipObjectDeep=Xo,A.zipWith=Xs,A.entries=Zh,A.entriesIn=Kh,A.extend=Wh,A.extendWith=Lh,Dc(A,A),A.add=hp,A.attempt=tp,A.camelCase=Vh,A.capitalize=cc,A.ceil=pp,A.clamp=oc,A.clone=Zf,A.cloneDeep=Vf,A.cloneDeepWith=Gf,A.cloneWith=Kf,A.conformsTo=Hf,A.deburr=lc,A.defaultTo=Cc,A.divide=vp,A.endsWith=sc,A.eq=Jf,A.escape=hc,A.escapeRegExp=pc,A.every=sf,A.find=rh,A.findIndex=vo,A.findKey=Ca,A.findLast=eh,A.findLastIndex=_o,A.findLastKey=Ua,A.floor=_p,A.forEach=gf,A.forEachRight=yf,A.forIn=Ba,A.forInRight=Ta,A.forOwn=$a,A.forOwnRight=Da,A.get=Na,A.gt=dh,A.gte=bh,A.has=Pa,A.hasIn=qa,A.head=mo,A.identity=Uc,A.includes=df,A.indexOf=xo,A.inRange=fc,A.invoke=Mh,A.isArguments=wh,A.isArray=mh,A.isArrayBuffer=xh,A.isArrayLike=Yf,A.isArrayLikeObject=Qf,A.isBoolean=Xf,A.isBuffer=jh,A.isDate=Ah,A.isElement=na,A.isEmpty=ta,A.isEqual=ra,A.isEqualWith=ea,A.isError=ua,A.isFinite=ia,A.isFunction=oa,A.isInteger=fa,A.isLength=aa,A.isMap=kh,A.isMatch=sa,A.isMatchWith=ha,A.isNaN=pa,A.isNative=va,A.isNil=ga,A.isNull=_a,A.isNumber=ya,A.isObject=ca,A.isObjectLike=la,A.isPlainObject=da,A.isRegExp=Oh,A.isSafeInteger=ba,A.isSet=Ih,A.isString=wa,A.isSymbol=ma,A.isTypedArray=Rh,A.isUndefined=xa,A.isWeakMap=ja,A.isWeakSet=Aa,A.join=Ao,A.kebabCase=Gh,A.last=ko,A.lastIndexOf=Oo,A.lowerCase=Hh,A.lowerFirst=Jh,A.lt=zh,A.lte=Eh,A.max=Xc,A.maxBy=nl,A.mean=tl,A.meanBy=rl,A.min=el,A.minBy=ul,A.stubArray=Zc,A.stubFalse=Kc,A.stubObject=Vc,A.stubString=Gc,A.stubTrue=Hc,A.multiply=gp,A.nth=Io,A.noConflict=Mc,A.noop=Fc,A.now=ch,A.pad=vc,A.padEnd=_c,A.padStart=gc,A.parseInt=yc,A.random=ac,A.reduce=mf,A.reduceRight=xf,A.repeat=dc,A.replace=bc,A.result=Ya,A.round=yp,A.runInContext=we,A.sample=Af,A.size=If,A.snakeCase=Yh,A.some=Rf,A.sortedIndex=Co,A.sortedIndexBy=Uo,A.sortedIndexOf=Bo,A.sortedLastIndex=To,A.sortedLastIndexBy=$o,A.sortedLastIndexOf=Do,A.startCase=Qh,A.startsWith=mc,A.subtract=dp,A.sum=il,A.sumBy=ol,A.template=xc,A.times=Jc,A.toFinite=Oa,A.toInteger=Ia,A.toLength=Ra,A.toLower=jc,A.toNumber=za,A.toSafeInteger=Sa,A.toString=Wa,A.toUpper=Ac,A.trim=kc,A.trimEnd=Oc,A.trimStart=Ic,A.truncate=Rc,A.unescape=zc,A.uniqueId=Qc,A.upperCase=Xh,A.upperFirst=np,A.each=gf,A.eachRight=yf,A.first=mo,Dc(A,function(){var n={};return ue(A,function(t,r){ml.call(A.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),A.VERSION=nn,u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),u(["drop","take"],function(n,t){Y.prototype[n]=function(r){r=r===X?1:Jl(Ia(r),0);var e=this.__filtered__&&!t?new Y(this):this.clone();return e.__filtered__?e.__takeCount__=Yl(r,e.__takeCount__):e.__views__.push({size:Yl(r,Cn),type:n+(e.__dir__<0?"Right":"")}),e},Y.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==In||r==zn;Y.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Ai(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Y.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Y.prototype[n]=function(){return this.__filtered__?new Y(this):this[r](1)}}),Y.prototype.compact=function(){return this.filter(Uc)},Y.prototype.find=function(n){return this.filter(n).head()},Y.prototype.findLast=function(n){return this.reverse().find(n)},Y.prototype.invokeMap=iu(function(n,t){return"function"==typeof n?new Y(this):this.map(function(r){return Re(r,n,t)})}),Y.prototype.reject=function(n){return this.filter(Tf(Ai(n)))},Y.prototype.slice=function(n,t){n=Ia(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Y(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==X&&(t=Ia(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Y.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Y.prototype.toArray=function(){return this.take(Cn)},ue(Y.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=A[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(A.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Y,a=o[0],c=f||mh(t),l=function(n){var t=u.apply(A,s([n],o));return e&&h?t[0]:t};c&&r&&"function"==typeof a&&1!=a.length&&(f=c=!1);var h=this.__chain__,p=!!this.__actions__.length,v=i&&!h,_=f&&!p;if(!i&&c){t=_?t:new Y(this);var g=n.apply(t,o);return g.__actions__.push({func:rf,args:[l],thisArg:X}),new J(g,h)}return v&&_?n.apply(this,o):(g=this.thru(l),v?e?g.value()[0]:g.value():g)})}),u(["pop","push","shift","sort","splice","unshift"],function(n){var t=gl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(mh(u)?u:[],n)}return this[r](function(r){return t.apply(mh(r)?r:[],n)})}}),ue(Y.prototype,function(n,t){var r=A[t];if(r){var e=r.name+"",u=cs[e]||(cs[e]=[]);u.push({name:t,func:r})}}),cs[ti(X,vn).name]=[{name:"wrapper",func:X}],Y.prototype.clone=Dt,Y.prototype.reverse=Yt,Y.prototype.value=Qt,A.prototype.at=nh,A.prototype.chain=ef,A.prototype.commit=uf,A.prototype.next=of,A.prototype.plant=af,A.prototype.reverse=cf,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=lf,A.prototype.first=A.prototype.head,Tl&&(A.prototype[Tl]=ff),A},be=de();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(re._=be,define(function(){return be})):ue?((ue.exports=be)._=be,ee._=be):re._=be}).call(this);
!function(e,t){"function"==typeof define&&define.amd?define("sifter",t):"object"==typeof exports?module.exports=t():e.Sifter=t()}(this,function(){var e=function(e,t){this.items=e,this.settings=t||{diacritics:!0}};e.prototype.tokenize=function(e){if(e=o(String(e||"").toLowerCase()),!e||!e.length)return[];var t,n,i,s,l=[],p=e.split(/ +/);for(t=0,n=p.length;t<n;t++){if(i=r(p[t]),this.settings.diacritics)for(s in a)a.hasOwnProperty(s)&&(i=i.replace(new RegExp(s,"g"),a[s]));l.push({string:p[t],regex:new RegExp(i,"i")})}return l},e.prototype.iterator=function(e,t){var n;n=s(e)?Array.prototype.forEach||function(e){for(var t=0,n=this.length;t<n;t++)e(this[t],t,this)}:function(e){for(var t in this)this.hasOwnProperty(t)&&e(this[t],t,this)},n.apply(e,[t])},e.prototype.getScoreFunction=function(e,t){var n,o,r,s,a;n=this,e=n.prepareSearch(e,t),r=e.tokens,o=e.options.fields,s=r.length,a=e.options.nesting;var l=function(e,t){var n,i;return e?(e=String(e||""),i=e.search(t.regex),i===-1?0:(n=t.string.length/e.length,0===i&&(n+=.5),n)):0},p=function(){var e=o.length;return e?1===e?function(e,t){return l(i(t,o[0],a),e)}:function(t,n){for(var r=0,s=0;r<e;r++)s+=l(i(n,o[r],a),t);return s/e}:function(){return 0}}();return s?1===s?function(e){return p(r[0],e)}:"and"===e.options.conjunction?function(e){for(var t,n=0,i=0;n<s;n++){if(t=p(r[n],e),t<=0)return 0;i+=t}return i/s}:function(e){for(var t=0,n=0;t<s;t++)n+=p(r[t],e);return n/s}:function(){return 0}},e.prototype.getSortFunction=function(e,n){var o,r,s,a,l,p,u,c,d,h,f;if(s=this,e=s.prepareSearch(e,n),f=!e.query&&n.sort_empty||n.sort,d=function(e,t){return"$score"===e?t.score:i(s.items[t.id],e,n.nesting)},l=[],f)for(o=0,r=f.length;o<r;o++)(e.query||"$score"!==f[o].field)&&l.push(f[o]);if(e.query){for(h=!0,o=0,r=l.length;o<r;o++)if("$score"===l[o].field){h=!1;break}h&&l.unshift({field:"$score",direction:"desc"})}else for(o=0,r=l.length;o<r;o++)if("$score"===l[o].field){l.splice(o,1);break}for(c=[],o=0,r=l.length;o<r;o++)c.push("desc"===l[o].direction?-1:1);return p=l.length,p?1===p?(a=l[0].field,u=c[0],function(e,n){return u*t(d(a,e),d(a,n))}):function(e,n){var i,o,r;for(i=0;i<p;i++)if(r=l[i].field,o=c[i]*t(d(r,e),d(r,n)))return o;return 0}:null},e.prototype.prepareSearch=function(e,t){if("object"==typeof e)return e;t=n({},t);var i=t.fields,o=t.sort,r=t.sort_empty;return i&&!s(i)&&(t.fields=[i]),o&&!s(o)&&(t.sort=[o]),r&&!s(r)&&(t.sort_empty=[r]),{options:t,query:String(e||"").toLowerCase(),tokens:this.tokenize(e),total:0,items:[]}},e.prototype.search=function(e,t){var n,i,o,r,s=this;return i=this.prepareSearch(e,t),t=i.options,e=i.query,r=t.score||s.getScoreFunction(i),e.length?s.iterator(s.items,function(e,o){n=r(e),(t.filter===!1||n>0)&&i.items.push({score:n,id:o})}):s.iterator(s.items,function(e,t){i.items.push({score:1,id:t})}),o=s.getSortFunction(i,t),o&&i.items.sort(o),i.total=i.items.length,"number"==typeof t.limit&&(i.items=i.items.slice(0,t.limit)),i};var t=function(e,t){return"number"==typeof e&&"number"==typeof t?e>t?1:e<t?-1:0:(e=l(String(e||"")),t=l(String(t||"")),e>t?1:t>e?-1:0)},n=function(e,t){var n,i,o,r;for(n=1,i=arguments.length;n<i;n++)if(r=arguments[n])for(o in r)r.hasOwnProperty(o)&&(e[o]=r[o]);return e},i=function(e,t,n){if(e&&t){if(!n)return e[t];for(var i=t.split(".");i.length&&(e=e[i.shift()]););return e}},o=function(e){return(e+"").replace(/^\s+|\s+$|/g,"")},r=function(e){return(e+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},s=Array.isArray||"undefined"!=typeof $&&$.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},l=function(){var e,t,n,i,o="",r={};for(n in a)if(a.hasOwnProperty(n))for(i=a[n].substring(2,a[n].length-1),o+=i,e=0,t=i.length;e<t;e++)r[i.charAt(e)]=n;var s=new RegExp("["+o+"]","g");return function(e){return e.replace(s,function(e){return r[e]}).toLowerCase()}}();return e}),function(e,t){"function"==typeof define&&define.amd?define("microplugin",t):"object"==typeof exports?module.exports=t():e.MicroPlugin=t()}(this,function(){var e={};e.mixin=function(e){e.plugins={},e.prototype.initializePlugins=function(e){var n,i,o,r=this,s=[];if(r.plugins={names:[],settings:{},requested:{},loaded:{}},t.isArray(e))for(n=0,i=e.length;n<i;n++)"string"==typeof e[n]?s.push(e[n]):(r.plugins.settings[e[n].name]=e[n].options,s.push(e[n].name));else if(e)for(o in e)e.hasOwnProperty(o)&&(r.plugins.settings[o]=e[o],s.push(o));for(;s.length;)r.require(s.shift())},e.prototype.loadPlugin=function(t){var n=this,i=n.plugins,o=e.plugins[t];if(!e.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin');i.requested[t]=!0,i.loaded[t]=o.fn.apply(n,[n.plugins.settings[t]||{}]),i.names.push(t)},e.prototype.require=function(e){var t=this,n=t.plugins;if(!t.plugins.loaded.hasOwnProperty(e)){if(n.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")');t.loadPlugin(e)}return n.loaded[e]},e.define=function(t,n){e.plugins[t]={name:t,fn:n}}};var t={isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}};return e}),function(e,t){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],t):"object"==typeof exports?module.exports=t(require("jquery"),require("sifter"),require("microplugin")):e.Selectize=t(e.jQuery,e.Sifter,e.MicroPlugin)}(this,function(e,t,n){"use strict";var i=function(e,t){if("string"!=typeof t||t.length){var n="string"==typeof t?new RegExp(t,"i"):t,i=function(e){var t=0;if(3===e.nodeType){var o=e.data.search(n);if(o>=0&&e.data.length>0){var r=e.data.match(n),s=document.createElement("span");s.className="highlight";var a=e.splitText(o),l=(a.splitText(r[0].length),a.cloneNode(!0));s.appendChild(l),a.parentNode.replaceChild(s,a),t=1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName))for(var p=0;p<e.childNodes.length;++p)p+=i(e.childNodes[p]);return t};return e.each(function(){i(this)})}};e.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()};var o=function(){};o.prototype={on:function(e,t){this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(t)},off:function(e,t){var n=arguments.length;return 0===n?delete this._events:1===n?delete this._events[e]:(this._events=this._events||{},void(e in this._events!=!1&&this._events[e].splice(this._events[e].indexOf(t),1)))},trigger:function(e){if(this._events=this._events||{},e in this._events!=!1)for(var t=0;t<this._events[e].length;t++)this._events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}},o.mixin=function(e){for(var t=["on","off","trigger"],n=0;n<t.length;n++)e.prototype[t[n]]=o.prototype[t[n]]};var r=/Mac/.test(navigator.userAgent),s=65,a=13,l=27,p=37,u=38,c=80,d=39,h=40,f=78,g=8,v=46,m=16,y=r?91:17,w=r?18:17,O=9,C=1,$=2,b=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,x=function(e){return"undefined"!=typeof e},S=function(e){return"undefined"==typeof e||null===e?null:"boolean"==typeof e?e?"1":"0":e+""},I=function(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},_={};_.before=function(e,t,n){var i=e[t];e[t]=function(){return n.apply(e,arguments),i.apply(e,arguments)}},_.after=function(e,t,n){var i=e[t];e[t]=function(){var t=i.apply(e,arguments);return n.apply(e,arguments),t}};var F=function(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}},D=function(e,t){var n;return function(){var i=this,o=arguments;window.clearTimeout(n),n=window.setTimeout(function(){e.apply(i,o)},t)}},k=function(e,t,n){var i,o=e.trigger,r={};e.trigger=function(){var n=arguments[0];return t.indexOf(n)===-1?o.apply(e,arguments):void(r[n]=arguments)},n.apply(e,[]),e.trigger=o;for(i in r)r.hasOwnProperty(i)&&o.apply(e,r[i])},A=function(e,t,n,i){e.on(t,n,function(t){for(var n=t.target;n&&n.parentNode!==e[0];)n=n.parentNode;return t.currentTarget=n,i.apply(this,[t])})},P=function(e){var t={};if("selectionStart"in e)t.start=e.selectionStart,t.length=e.selectionEnd-t.start;else if(document.selection){e.focus();var n=document.selection.createRange(),i=document.selection.createRange().text.length;n.moveStart("character",-e.value.length),t.start=n.text.length-i,t.length=i}return t},z=function(e,t,n){var i,o,r={};if(n)for(i=0,o=n.length;i<o;i++)r[n[i]]=e.css(n[i]);else r=e.css();t.css(r)},T=function(t,n){if(!t)return 0;var i=e("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(t).appendTo("body");z(n,i,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var o=i.width();return i.remove(),o},q=function(e){var t=null,n=function(n,i){var o,r,s,a,l,p,u,c;n=n||window.event||{},i=i||{},n.metaKey||n.altKey||(i.force||e.data("grow")!==!1)&&(o=e.val(),n.type&&"keydown"===n.type.toLowerCase()&&(r=n.keyCode,s=r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||32===r,r===v||r===g?(c=P(e[0]),c.length?o=o.substring(0,c.start)+o.substring(c.start+c.length):r===g&&c.start?o=o.substring(0,c.start-1)+o.substring(c.start+1):r===v&&"undefined"!=typeof c.start&&(o=o.substring(0,c.start)+o.substring(c.start+1))):s&&(p=n.shiftKey,u=String.fromCharCode(n.keyCode),u=p?u.toUpperCase():u.toLowerCase(),o+=u)),a=e.attr("placeholder"),!o&&a&&(o=a),l=T(o,e)+4,l!==t&&(t=l,e.width(l),e.triggerHandler("resize")))};e.on("keydown keyup update blur",n),n()},N=function(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML},j=function(e,t){t||(t={});var n="Selectize";console.error(n+": "+e),t.explanation&&(console.group&&console.group(),console.error(t.explanation),console.group&&console.groupEnd())},E=function(n,i){var o,r,s,a,l=this;a=n[0],a.selectize=l;var p=window.getComputedStyle&&window.getComputedStyle(a,null);if(s=p?p.getPropertyValue("direction"):a.currentStyle&&a.currentStyle.direction,s=s||n.parents("[dir]:first").attr("dir")||"",e.extend(l,{order:0,settings:i,$input:n,tabIndex:n.attr("tabindex")||"",tagType:"select"===a.tagName.toLowerCase()?C:$,rtl:/rtl/i.test(s),eventNS:".selectize"+ ++E.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:n.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===i.loadThrottle?l.onSearchChange:D(l.onSearchChange,i.loadThrottle)}),l.sifter=new t(this.options,{diacritics:i.diacritics}),l.settings.options){for(o=0,r=l.settings.options.length;o<r;o++)l.registerOption(l.settings.options[o]);delete l.settings.options}if(l.settings.optgroups){for(o=0,r=l.settings.optgroups.length;o<r;o++)l.registerOptionGroup(l.settings.optgroups[o]);delete l.settings.optgroups}l.settings.mode=l.settings.mode||(1===l.settings.maxItems?"single":"multi"),"boolean"!=typeof l.settings.hideSelected&&(l.settings.hideSelected="multi"===l.settings.mode),l.initializePlugins(l.settings.plugins),l.setupCallbacks(),l.setupTemplates(),l.setup()};return o.mixin(E),"undefined"!=typeof n?n.mixin(E):j("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),e.extend(E.prototype,{setup:function(){var t,n,i,o,s,a,l,p,u,c,d=this,h=d.settings,f=d.eventNS,g=e(window),v=e(document),O=d.$input;if(l=d.settings.mode,p=O.attr("class")||"",t=e("<div>").addClass(h.wrapperClass).addClass(p).addClass(l),n=e("<div>").addClass(h.inputClass).addClass("items").appendTo(t),i=e('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex",O.is(":disabled")?"-1":d.tabIndex),a=e(h.dropdownParent||t),o=e("<div>").addClass(h.dropdownClass).addClass(l).hide().appendTo(a),s=e("<div>").addClass(h.dropdownContentClass).appendTo(o),(c=O.attr("id"))&&(i.attr("id",c+"-selectized"),e("label[for='"+c+"']").attr("for",c+"-selectized")),d.settings.copyClassesToDropdown&&o.addClass(p),t.css({width:O[0].style.width}),d.plugins.names.length&&(u="plugin-"+d.plugins.names.join(" plugin-"),t.addClass(u),o.addClass(u)),(null===h.maxItems||h.maxItems>1)&&d.tagType===C&&O.attr("multiple","multiple"),d.settings.placeholder&&i.attr("placeholder",h.placeholder),!d.settings.splitOn&&d.settings.delimiter){var $=d.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");d.settings.splitOn=new RegExp("\\s*"+$+"+\\s*")}O.attr("autocorrect")&&i.attr("autocorrect",O.attr("autocorrect")),O.attr("autocapitalize")&&i.attr("autocapitalize",O.attr("autocapitalize")),d.$wrapper=t,d.$control=n,d.$control_input=i,d.$dropdown=o,d.$dropdown_content=s,o.on("mouseenter","[data-selectable]",function(){return d.onOptionHover.apply(d,arguments)}),o.on("mousedown click","[data-selectable]",function(){return d.onOptionSelect.apply(d,arguments)}),A(n,"mousedown","*:not(input)",function(){return d.onItemSelect.apply(d,arguments)}),q(i),n.on({mousedown:function(){return d.onMouseDown.apply(d,arguments)},click:function(){return d.onClick.apply(d,arguments)}}),i.on({mousedown:function(e){e.stopPropagation()},keydown:function(){return d.onKeyDown.apply(d,arguments)},keyup:function(){return d.onKeyUp.apply(d,arguments)},keypress:function(){return d.onKeyPress.apply(d,arguments)},resize:function(){d.positionDropdown.apply(d,[])},blur:function(){return d.onBlur.apply(d,arguments)},focus:function(){return d.ignoreBlur=!1,d.onFocus.apply(d,arguments)},paste:function(){return d.onPaste.apply(d,arguments)}}),v.on("keydown"+f,function(e){d.isCmdDown=e[r?"metaKey":"ctrlKey"],d.isCtrlDown=e[r?"altKey":"ctrlKey"],d.isShiftDown=e.shiftKey}),v.on("keyup"+f,function(e){e.keyCode===w&&(d.isCtrlDown=!1),e.keyCode===m&&(d.isShiftDown=!1),e.keyCode===y&&(d.isCmdDown=!1)}),v.on("mousedown"+f,function(e){if(d.isFocused){if(e.target===d.$dropdown[0]||e.target.parentNode===d.$dropdown[0])return!1;d.$control.has(e.target).length||e.target===d.$control[0]||d.blur(e.target)}}),g.on(["scroll"+f,"resize"+f].join(" "),function(){d.isOpen&&d.positionDropdown.apply(d,arguments)}),g.on("mousemove"+f,function(){d.ignoreHover=!1}),this.revertSettings={$children:O.children().detach(),tabindex:O.attr("tabindex")},O.attr("tabindex",-1).hide().after(d.$wrapper),e.isArray(h.items)&&(d.setValue(h.items),delete h.items),b&&O.on("invalid"+f,function(e){e.preventDefault(),d.isInvalid=!0,d.refreshState()}),d.updateOriginalInput(),d.refreshItems(),d.refreshState(),d.updatePlaceholder(),d.isSetup=!0,O.is(":disabled")&&d.disable(),d.on("change",this.onChange),O.data("selectize",d),O.addClass("selectized"),d.trigger("initialize"),h.preload===!0&&d.onSearchChange("")},setupTemplates:function(){var t=this,n=t.settings.labelField,i=t.settings.optgroupLabelField,o={optgroup:function(e){return'<div class="optgroup">'+e.html+"</div>"},optgroup_header:function(e,t){return'<div class="optgroup-header">'+t(e[i])+"</div>"},option:function(e,t){return'<div class="option">'+t(e[n])+"</div>"},item:function(e,t){return'<div class="item">'+t(e[n])+"</div>"},option_create:function(e,t){return'<div class="create">Add <strong>'+t(e.input)+"</strong>&hellip;</div>"}};t.settings.render=e.extend({},o,t.settings.render)},setupCallbacks:function(){var e,t,n={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(e in n)n.hasOwnProperty(e)&&(t=this.settings[n[e]],t&&this.on(e,t))},onClick:function(e){var t=this;t.isFocused||(t.focus(),e.preventDefault())},onMouseDown:function(t){var n=this,i=t.isDefaultPrevented();e(t.target);if(n.isFocused){if(t.target!==n.$control_input[0])return"single"===n.settings.mode?n.isOpen?n.close():n.open():i||n.setActiveItem(null),!1}else i||window.setTimeout(function(){n.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(t){var n=this;return n.isFull()||n.isInputHidden||n.isLocked?void t.preventDefault():void(n.settings.splitOn&&setTimeout(function(){var t=n.$control_input.val();if(t.match(n.settings.splitOn))for(var i=e.trim(t).split(n.settings.splitOn),o=0,r=i.length;o<r;o++)n.createItem(i[o])},0))},onKeyPress:function(e){if(this.isLocked)return e&&e.preventDefault();var t=String.fromCharCode(e.keyCode||e.which);return this.settings.create&&"multi"===this.settings.mode&&t===this.settings.delimiter?(this.createItem(),e.preventDefault(),!1):void 0},onKeyDown:function(e){var t=(e.target===this.$control_input[0],this);if(t.isLocked)return void(e.keyCode!==O&&e.preventDefault());switch(e.keyCode){case s:if(t.isCmdDown)return void t.selectAll();break;case l:return void(t.isOpen&&(e.preventDefault(),e.stopPropagation(),t.close()));case f:if(!e.ctrlKey||e.altKey)break;case h:if(!t.isOpen&&t.hasOptions)t.open();else if(t.$activeOption){t.ignoreHover=!0;var n=t.getAdjacentOption(t.$activeOption,1);n.length&&t.setActiveOption(n,!0,!0)}return void e.preventDefault();case c:if(!e.ctrlKey||e.altKey)break;case u:if(t.$activeOption){t.ignoreHover=!0;var i=t.getAdjacentOption(t.$activeOption,-1);i.length&&t.setActiveOption(i,!0,!0)}return void e.preventDefault();case a:return void(t.isOpen&&t.$activeOption&&(t.onOptionSelect({currentTarget:t.$activeOption}),e.preventDefault()));case p:return void t.advanceSelection(-1,e);case d:return void t.advanceSelection(1,e);case O:return t.settings.selectOnTab&&t.isOpen&&t.$activeOption&&(t.onOptionSelect({currentTarget:t.$activeOption}),t.isFull()||e.preventDefault()),void(t.settings.create&&t.createItem()&&e.preventDefault());case g:case v:return void t.deleteSelection(e)}return!t.isFull()&&!t.isInputHidden||(r?e.metaKey:e.ctrlKey)?void 0:void e.preventDefault()},onKeyUp:function(e){var t=this;if(t.isLocked)return e&&e.preventDefault();var n=t.$control_input.val()||"";t.lastValue!==n&&(t.lastValue=n,t.onSearchChange(n),t.refreshOptions(),t.trigger("type",n))},onSearchChange:function(e){var t=this,n=t.settings.load;n&&(t.loadedSearches.hasOwnProperty(e)||(t.loadedSearches[e]=!0,t.load(function(i){n.apply(t,[e,i])})))},onFocus:function(e){var t=this,n=t.isFocused;return t.isDisabled?(t.blur(),e&&e.preventDefault(),!1):void(t.ignoreFocus||(t.isFocused=!0,"focus"===t.settings.preload&&t.onSearchChange(""),n||t.trigger("focus"),t.$activeItems.length||(t.showInput(),t.setActiveItem(null),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState()))},onBlur:function(e,t){var n=this;if(n.isFocused&&(n.isFocused=!1,!n.ignoreFocus)){if(!n.ignoreBlur&&document.activeElement===n.$dropdown_content[0])return n.ignoreBlur=!0,void n.onFocus(e);var i=function(){n.close(),n.setTextboxValue(""),n.setActiveItem(null),n.setActiveOption(null),n.setCaret(n.items.length),n.refreshState(),t&&t.focus&&t.focus(),n.ignoreFocus=!1,n.trigger("blur")};n.ignoreFocus=!0,n.settings.create&&n.settings.createOnBlur?n.createItem(null,!1,i):i()}},onOptionHover:function(e){this.ignoreHover||this.setActiveOption(e.currentTarget,!1)},onOptionSelect:function(t){var n,i,o=this;t.preventDefault&&(t.preventDefault(),t.stopPropagation()),i=e(t.currentTarget),i.hasClass("create")?o.createItem(null,function(){o.settings.closeAfterSelect&&o.close()}):(n=i.attr("data-value"),"undefined"!=typeof n&&(o.lastQuery=null,o.setTextboxValue(""),o.addItem(n),o.settings.closeAfterSelect?o.close():!o.settings.hideSelected&&t.type&&/mouse/.test(t.type)&&o.setActiveOption(o.getOption(n))))},onItemSelect:function(e){var t=this;t.isLocked||"multi"===t.settings.mode&&(e.preventDefault(),t.setActiveItem(e.currentTarget,e))},load:function(e){var t=this,n=t.$wrapper.addClass(t.settings.loadingClass);t.loading++,e.apply(t,[function(e){t.loading=Math.max(t.loading-1,0),e&&e.length&&(t.addOption(e),t.refreshOptions(t.isFocused&&!t.isInputHidden)),t.loading||n.removeClass(t.settings.loadingClass),t.trigger("load",e)}])},setTextboxValue:function(e){var t=this.$control_input,n=t.val()!==e;n&&(t.val(e).triggerHandler("update"),this.lastValue=e)},getValue:function(){return this.tagType===C&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(e,t){var n=t?[]:["change"];k(this,n,function(){this.clear(t),this.addItems(e,t)})},setActiveItem:function(t,n){var i,o,r,s,a,l,p,u,c=this;if("single"!==c.settings.mode){if(t=e(t),!t.length)return e(c.$activeItems).removeClass("active"),c.$activeItems=[],void(c.isFocused&&c.showInput());if(i=n&&n.type.toLowerCase(),"mousedown"===i&&c.isShiftDown&&c.$activeItems.length){for(u=c.$control.children(".active:last"),s=Array.prototype.indexOf.apply(c.$control[0].childNodes,[u[0]]),a=Array.prototype.indexOf.apply(c.$control[0].childNodes,[t[0]]),s>a&&(p=s,s=a,a=p),o=s;o<=a;o++)l=c.$control[0].childNodes[o],c.$activeItems.indexOf(l)===-1&&(e(l).addClass("active"),c.$activeItems.push(l));n.preventDefault()}else"mousedown"===i&&c.isCtrlDown||"keydown"===i&&this.isShiftDown?t.hasClass("active")?(r=c.$activeItems.indexOf(t[0]),c.$activeItems.splice(r,1),t.removeClass("active")):c.$activeItems.push(t.addClass("active")[0]):(e(c.$activeItems).removeClass("active"),c.$activeItems=[t.addClass("active")[0]]);c.hideInput(),this.isFocused||c.focus()}},setActiveOption:function(t,n,i){var o,r,s,a,l,p=this;p.$activeOption&&p.$activeOption.removeClass("active"),p.$activeOption=null,t=e(t),t.length&&(p.$activeOption=t.addClass("active"),!n&&x(n)||(o=p.$dropdown_content.height(),r=p.$activeOption.outerHeight(!0),n=p.$dropdown_content.scrollTop()||0,s=p.$activeOption.offset().top-p.$dropdown_content.offset().top+n,a=s,l=s-o+r,s+r>o+n?p.$dropdown_content.stop().animate({scrollTop:l},i?p.settings.scrollDuration:0):s<n&&p.$dropdown_content.stop().animate({scrollTop:a},i?p.settings.scrollDuration:0)))},selectAll:function(){var e=this;"single"!==e.settings.mode&&(e.$activeItems=Array.prototype.slice.apply(e.$control.children(":not(input)").addClass("active")),e.$activeItems.length&&(e.hideInput(),e.close()),e.focus())},hideInput:function(){var e=this;e.setTextboxValue(""),e.$control_input.css({opacity:0,position:"absolute",left:e.rtl?1e4:-1e4}),e.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var e=this;e.isDisabled||(e.ignoreFocus=!0,e.$control_input[0].focus(),window.setTimeout(function(){e.ignoreFocus=!1,e.onFocus()},0))},blur:function(e){this.$control_input[0].blur(),this.onBlur(null,e)},getScoreFunction:function(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())},getSearchOptions:function(){var e=this.settings,t=e.sortField;return"string"==typeof t&&(t=[{field:t}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t}},search:function(t){var n,i,o,r=this,s=r.settings,a=this.getSearchOptions();if(s.score&&(o=r.settings.score.apply(this,[t]),"function"!=typeof o))throw new Error('Selectize "score" setting must be a function that returns a function');if(t!==r.lastQuery?(r.lastQuery=t,i=r.sifter.search(t,e.extend(a,{score:o})),r.currentResults=i):i=e.extend(!0,{},r.currentResults),s.hideSelected)for(n=i.items.length-1;n>=0;n--)r.items.indexOf(S(i.items[n].id))!==-1&&i.items.splice(n,1);return i},refreshOptions:function(t){var n,o,r,s,a,l,p,u,c,d,h,f,g,v,m,y;"undefined"==typeof t&&(t=!0);var w=this,O=e.trim(w.$control_input.val()),C=w.search(O),$=w.$dropdown_content,b=w.$activeOption&&S(w.$activeOption.attr("data-value"));for(s=C.items.length,"number"==typeof w.settings.maxOptions&&(s=Math.min(s,w.settings.maxOptions)),a={},l=[],n=0;n<s;n++)for(p=w.options[C.items[n].id],u=w.render("option",p),c=p[w.settings.optgroupField]||"",d=e.isArray(c)?c:[c],o=0,r=d&&d.length;o<r;o++)c=d[o],w.optgroups.hasOwnProperty(c)||(c=""),a.hasOwnProperty(c)||(a[c]=document.createDocumentFragment(),l.push(c)),a[c].appendChild(u);for(this.settings.lockOptgroupOrder&&l.sort(function(e,t){var n=w.optgroups[e].$order||0,i=w.optgroups[t].$order||0;return n-i}),h=document.createDocumentFragment(),n=0,s=l.length;n<s;n++)c=l[n],w.optgroups.hasOwnProperty(c)&&a[c].childNodes.length?(f=document.createDocumentFragment(),f.appendChild(w.render("optgroup_header",w.optgroups[c])),f.appendChild(a[c]),h.appendChild(w.render("optgroup",e.extend({},w.optgroups[c],{html:N(f),dom:f})))):h.appendChild(a[c]);if($.html(h),w.settings.highlight&&C.query.length&&C.tokens.length)for($.removeHighlight(),n=0,s=C.tokens.length;n<s;n++)i($,C.tokens[n].regex);if(!w.settings.hideSelected)for(n=0,s=w.items.length;n<s;n++)w.getOption(w.items[n]).addClass("selected");g=w.canCreate(O),g&&($.prepend(w.render("option_create",{input:O})),y=e($[0].childNodes[0])),w.hasOptions=C.items.length>0||g,w.hasOptions?(C.items.length>0?(m=b&&w.getOption(b),m&&m.length?v=m:"single"===w.settings.mode&&w.items.length&&(v=w.getOption(w.items[0])),v&&v.length||(v=y&&!w.settings.addPrecedence?w.getAdjacentOption(y,1):$.find("[data-selectable]:first"))):v=y,w.setActiveOption(v),t&&!w.isOpen&&w.open()):(w.setActiveOption(null),t&&w.isOpen&&w.close())},addOption:function(t){var n,i,o,r=this;if(e.isArray(t))for(n=0,i=t.length;n<i;n++)r.addOption(t[n]);else(o=r.registerOption(t))&&(r.userOptions[o]=!0,r.lastQuery=null,r.trigger("option_add",o,t))},registerOption:function(e){var t=S(e[this.settings.valueField]);return"undefined"!=typeof t&&null!==t&&!this.options.hasOwnProperty(t)&&(e.$order=e.$order||++this.order,this.options[t]=e,t)},registerOptionGroup:function(e){var t=S(e[this.settings.optgroupValueField]);return!!t&&(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)},addOptionGroup:function(e,t){t[this.settings.optgroupValueField]=e,(e=this.registerOptionGroup(t))&&this.trigger("optgroup_add",e,t)},removeOptionGroup:function(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.renderCache={},this.trigger("optgroup_remove",e))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(t,n){var i,o,r,s,a,l,p,u=this;if(t=S(t),r=S(n[u.settings.valueField]),null!==t&&u.options.hasOwnProperty(t)){if("string"!=typeof r)throw new Error("Value must be set in option data");p=u.options[t].$order,r!==t&&(delete u.options[t],s=u.items.indexOf(t),s!==-1&&u.items.splice(s,1,r)),n.$order=n.$order||p,u.options[r]=n,a=u.renderCache.item,l=u.renderCache.option,a&&(delete a[t],delete a[r]),l&&(delete l[t],delete l[r]),u.items.indexOf(r)!==-1&&(i=u.getItem(t),o=e(u.render("item",n)),i.hasClass("active")&&o.addClass("active"),i.replaceWith(o)),u.lastQuery=null,u.isOpen&&u.refreshOptions(!1)}},removeOption:function(e,t){var n=this;e=S(e);var i=n.renderCache.item,o=n.renderCache.option;i&&delete i[e],o&&delete o[e],delete n.userOptions[e],delete n.options[e],n.lastQuery=null,n.trigger("option_remove",e),n.removeItem(e,t)},clearOptions:function(){var e=this;e.loadedSearches={},e.userOptions={},e.renderCache={},e.options=e.sifter.items={},e.lastQuery=null,e.trigger("option_clear"),e.clear()},getOption:function(e){return this.getElementWithValue(e,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(t,n){var i=this.$dropdown.find("[data-selectable]"),o=i.index(t)+n;return o>=0&&o<i.length?i.eq(o):e()},getElementWithValue:function(t,n){if(t=S(t),"undefined"!=typeof t&&null!==t)for(var i=0,o=n.length;i<o;i++)if(n[i].getAttribute("data-value")===t)return e(n[i]);return e()},getItem:function(e){return this.getElementWithValue(e,this.$control.children())},addItems:function(t,n){for(var i=e.isArray(t)?t:[t],o=0,r=i.length;o<r;o++)this.isPending=o<r-1,this.addItem(i[o],n)},addItem:function(t,n){var i=n?[]:["change"];k(this,i,function(){var i,o,r,s,a,l=this,p=l.settings.mode;return t=S(t),l.items.indexOf(t)!==-1?void("single"===p&&l.close()):void(l.options.hasOwnProperty(t)&&("single"===p&&l.clear(n),"multi"===p&&l.isFull()||(i=e(l.render("item",l.options[t])),a=l.isFull(),l.items.splice(l.caretPos,0,t),l.insertAtCaret(i),(!l.isPending||!a&&l.isFull())&&l.refreshState(),l.isSetup&&(r=l.$dropdown_content.find("[data-selectable]"),l.isPending||(o=l.getOption(t),s=l.getAdjacentOption(o,1).attr("data-value"),l.refreshOptions(l.isFocused&&"single"!==p),s&&l.setActiveOption(l.getOption(s))),!r.length||l.isFull()?l.close():l.positionDropdown(),l.updatePlaceholder(),l.trigger("item_add",t,i),l.updateOriginalInput({silent:n})))))})},removeItem:function(t,n){var i,o,r,s=this;i=t instanceof e?t:s.getItem(t),t=S(i.attr("data-value")),o=s.items.indexOf(t),o!==-1&&(i.remove(),i.hasClass("active")&&(r=s.$activeItems.indexOf(i[0]),s.$activeItems.splice(r,1)),s.items.splice(o,1),s.lastQuery=null,!s.settings.persist&&s.userOptions.hasOwnProperty(t)&&s.removeOption(t,n),o<s.caretPos&&s.setCaret(s.caretPos-1),s.refreshState(),s.updatePlaceholder(),s.updateOriginalInput({silent:n}),s.positionDropdown(),s.trigger("item_remove",t,i))},createItem:function(t,n){var i=this,o=i.caretPos;t=t||e.trim(i.$control_input.val()||"");var r=arguments[arguments.length-1];if("function"!=typeof r&&(r=function(){}),"boolean"!=typeof n&&(n=!0),!i.canCreate(t))return r(),!1;i.lock();var s="function"==typeof i.settings.create?this.settings.create:function(e){var t={};return t[i.settings.labelField]=e,t[i.settings.valueField]=e,t},a=F(function(e){if(i.unlock(),!e||"object"!=typeof e)return r();var t=S(e[i.settings.valueField]);return"string"!=typeof t?r():(i.setTextboxValue(""),i.addOption(e),i.setCaret(o),i.addItem(t),i.refreshOptions(n&&"single"!==i.settings.mode),void r(e))}),l=s.apply(this,[t,a]);return"undefined"!=typeof l&&a(l),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){this.refreshValidityState(),this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var e=!this.items.length;this.isInvalid=e,this.$control_input.prop("required",e),this.$input.prop("required",!e)},refreshClasses:function(){var t=this,n=t.isFull(),i=t.isLocked;t.$wrapper.toggleClass("rtl",t.rtl),t.$control.toggleClass("focus",t.isFocused).toggleClass("disabled",t.isDisabled).toggleClass("required",t.isRequired).toggleClass("invalid",t.isInvalid).toggleClass("locked",i).toggleClass("full",n).toggleClass("not-full",!n).toggleClass("input-active",t.isFocused&&!t.isInputHidden).toggleClass("dropdown-active",t.isOpen).toggleClass("has-options",!e.isEmptyObject(t.options)).toggleClass("has-items",t.items.length>0),t.$control_input.data("grow",!n&&!i)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(e){var t,n,i,o,r=this;if(e=e||{},r.tagType===C){for(i=[],t=0,n=r.items.length;t<n;t++)o=r.options[r.items[t]][r.settings.labelField]||"",i.push('<option value="'+I(r.items[t])+'" selected="selected">'+I(o)+"</option>");i.length||this.$input.attr("multiple")||i.push('<option value="" selected="selected"></option>'),
r.$input.html(i.join(""))}else r.$input.val(r.getValue()),r.$input.attr("value",r.$input.val());r.isSetup&&(e.silent||r.trigger("change",r.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var e=this.$control_input;this.items.length?e.removeAttr("placeholder"):e.attr("placeholder",this.settings.placeholder),e.triggerHandler("update",{force:!0})}},open:function(){var e=this;e.isLocked||e.isOpen||"multi"===e.settings.mode&&e.isFull()||(e.focus(),e.isOpen=!0,e.refreshState(),e.$dropdown.css({visibility:"hidden",display:"block"}),e.positionDropdown(),e.$dropdown.css({visibility:"visible"}),e.trigger("dropdown_open",e.$dropdown))},close:function(){var e=this,t=e.isOpen;"single"===e.settings.mode&&e.items.length&&(e.hideInput(),e.$control_input.blur()),e.isOpen=!1,e.$dropdown.hide(),e.setActiveOption(null),e.refreshState(),t&&e.trigger("dropdown_close",e.$dropdown)},positionDropdown:function(){var e=this.$control,t="body"===this.settings.dropdownParent?e.offset():e.position();t.top+=e.outerHeight(!0),this.$dropdown.css({width:e.outerWidth(),top:t.top,left:t.left})},clear:function(e){var t=this;t.items.length&&(t.$control.children(":not(input)").remove(),t.items=[],t.lastQuery=null,t.setCaret(0),t.setActiveItem(null),t.updatePlaceholder(),t.updateOriginalInput({silent:e}),t.refreshState(),t.showInput(),t.trigger("clear"))},insertAtCaret:function(t){var n=Math.min(this.caretPos,this.items.length);0===n?this.$control.prepend(t):e(this.$control[0].childNodes[n]).before(t),this.setCaret(n+1)},deleteSelection:function(t){var n,i,o,r,s,a,l,p,u,c=this;if(o=t&&t.keyCode===g?-1:1,r=P(c.$control_input[0]),c.$activeOption&&!c.settings.hideSelected&&(l=c.getAdjacentOption(c.$activeOption,-1).attr("data-value")),s=[],c.$activeItems.length){for(u=c.$control.children(".active:"+(o>0?"last":"first")),a=c.$control.children(":not(input)").index(u),o>0&&a++,n=0,i=c.$activeItems.length;n<i;n++)s.push(e(c.$activeItems[n]).attr("data-value"));t&&(t.preventDefault(),t.stopPropagation())}else(c.isFocused||"single"===c.settings.mode)&&c.items.length&&(o<0&&0===r.start&&0===r.length?s.push(c.items[c.caretPos-1]):o>0&&r.start===c.$control_input.val().length&&s.push(c.items[c.caretPos]));if(!s.length||"function"==typeof c.settings.onDelete&&c.settings.onDelete.apply(c,[s])===!1)return!1;for("undefined"!=typeof a&&c.setCaret(a);s.length;)c.removeItem(s.pop());return c.showInput(),c.positionDropdown(),c.refreshOptions(!0),l&&(p=c.getOption(l),p.length&&c.setActiveOption(p)),!0},advanceSelection:function(e,t){var n,i,o,r,s,a,l=this;0!==e&&(l.rtl&&(e*=-1),n=e>0?"last":"first",i=P(l.$control_input[0]),l.isFocused&&!l.isInputHidden?(r=l.$control_input.val().length,s=e<0?0===i.start&&0===i.length:i.start===r,s&&!r&&l.advanceCaret(e,t)):(a=l.$control.children(".active:"+n),a.length&&(o=l.$control.children(":not(input)").index(a),l.setActiveItem(null),l.setCaret(e>0?o+1:o))))},advanceCaret:function(e,t){var n,i,o=this;0!==e&&(n=e>0?"next":"prev",o.isShiftDown?(i=o.$control_input[n](),i.length&&(o.hideInput(),o.setActiveItem(i),t&&t.preventDefault())):o.setCaret(o.caretPos+e))},setCaret:function(t){var n=this;if(t="single"===n.settings.mode?n.items.length:Math.max(0,Math.min(n.items.length,t)),!n.isPending){var i,o,r,s;for(r=n.$control.children(":not(input)"),i=0,o=r.length;i<o;i++)s=e(r[i]).detach(),i<t?n.$control_input.before(s):n.$control.append(s)}n.caretPos=t},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var e=this;e.$input.prop("disabled",!0),e.$control_input.prop("disabled",!0).prop("tabindex",-1),e.isDisabled=!0,e.lock()},enable:function(){var e=this;e.$input.prop("disabled",!1),e.$control_input.prop("disabled",!1).prop("tabindex",e.tabIndex),e.isDisabled=!1,e.unlock()},destroy:function(){var t=this,n=t.eventNS,i=t.revertSettings;t.trigger("destroy"),t.off(),t.$wrapper.remove(),t.$dropdown.remove(),t.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:i.tabindex}).show(),t.$control_input.removeData("grow"),t.$input.removeData("selectize"),e(window).off(n),e(document).off(n),e(document.body).off(n),delete t.$input[0].selectize},render:function(t,n){var i,o,r="",s=!1,a=this;return"option"!==t&&"item"!==t||(i=S(n[a.settings.valueField]),s=!!i),s&&(x(a.renderCache[t])||(a.renderCache[t]={}),a.renderCache[t].hasOwnProperty(i))?a.renderCache[t][i]:(r=e(a.settings.render[t].apply(this,[n,I])),"option"===t||"option_create"===t?r.attr("data-selectable",""):"optgroup"===t&&(o=n[a.settings.optgroupValueField]||"",r.attr("data-group",o)),"option"!==t&&"item"!==t||r.attr("data-value",i||""),s&&(a.renderCache[t][i]=r[0]),r[0])},clearCache:function(e){var t=this;"undefined"==typeof e?t.renderCache={}:delete t.renderCache[e]},canCreate:function(e){var t=this;if(!t.settings.create)return!1;var n=t.settings.createFilter;return e.length&&("function"!=typeof n||n.apply(t,[e]))&&("string"!=typeof n||new RegExp(n).test(e))&&(!(n instanceof RegExp)||n.test(e))}}),E.count=0,E.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},e.fn.selectize=function(t){var n=e.fn.selectize.defaults,i=e.extend({},n,t),o=i.dataAttr,r=i.labelField,s=i.valueField,a=i.optgroupField,l=i.optgroupLabelField,p=i.optgroupValueField,u=function(t,n){var a,l,p,u,c=t.attr(o);if(c)for(n.options=JSON.parse(c),a=0,l=n.options.length;a<l;a++)n.items.push(n.options[a][s]);else{var d=e.trim(t.val()||"");if(!i.allowEmptyOption&&!d.length)return;for(p=d.split(i.delimiter),a=0,l=p.length;a<l;a++)u={},u[r]=p[a],u[s]=p[a],n.options.push(u);n.items=p}},c=function(t,n){var u,c,d,h,f=n.options,g={},v=function(e){var t=o&&e.attr(o);return"string"==typeof t&&t.length?JSON.parse(t):null},m=function(t,o){t=e(t);var l=S(t.val());if(l||i.allowEmptyOption)if(g.hasOwnProperty(l)){if(o){var p=g[l][a];p?e.isArray(p)?p.push(o):g[l][a]=[p,o]:g[l][a]=o}}else{var u=v(t)||{};u[r]=u[r]||t.text(),u[s]=u[s]||l,u[a]=u[a]||o,g[l]=u,f.push(u),t.is(":selected")&&n.items.push(l)}},y=function(t){var i,o,r,s,a;for(t=e(t),r=t.attr("label"),r&&(s=v(t)||{},s[l]=r,s[p]=r,n.optgroups.push(s)),a=e("option",t),i=0,o=a.length;i<o;i++)m(a[i],r)};for(n.maxItems=t.attr("multiple")?null:1,h=t.children(),u=0,c=h.length;u<c;u++)d=h[u].tagName.toLowerCase(),"optgroup"===d?y(h[u]):"option"===d&&m(h[u])};return this.each(function(){if(!this.selectize){var o,r=e(this),s=this.tagName.toLowerCase(),a=r.attr("placeholder")||r.attr("data-placeholder");a||i.allowEmptyOption||(a=r.children('option[value=""]').text());var l={placeholder:a,options:[],optgroups:[],items:[]};"select"===s?c(r,l):u(r,l),o=new E(r,e.extend(!0,{},n,l,t))}})},e.fn.selectize.defaults=E.defaults,e.fn.selectize.support={validity:b},E.define("drag_drop",function(t){if(!e.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var n=this;n.lock=function(){var e=n.lock;return function(){var t=n.$control.data("sortable");return t&&t.disable(),e.apply(n,arguments)}}(),n.unlock=function(){var e=n.unlock;return function(){var t=n.$control.data("sortable");return t&&t.enable(),e.apply(n,arguments)}}(),n.setup=function(){var t=n.setup;return function(){t.apply(this,arguments);var i=n.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:n.isLocked,start:function(e,t){t.placeholder.css("width",t.helper.css("width")),i.css({overflow:"visible"})},stop:function(){i.css({overflow:"hidden"});var t=n.$activeItems?n.$activeItems.slice():null,o=[];i.children("[data-value]").each(function(){o.push(e(this).attr("data-value"))}),n.setValue(o),n.setActiveItem(t)}})}}()}}),E.define("dropdown_header",function(t){var n=this;t=e.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(e){return'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a href="javascript:void(0)" class="'+e.closeClass+'">&times;</a></div></div>'}},t),n.setup=function(){var i=n.setup;return function(){i.apply(n,arguments),n.$dropdown_header=e(t.html(t)),n.$dropdown.prepend(n.$dropdown_header)}}()}),E.define("optgroup_columns",function(t){var n=this;t=e.extend({equalizeWidth:!0,equalizeHeight:!0},t),this.getAdjacentOption=function(t,n){var i=t.closest("[data-group]").find("[data-selectable]"),o=i.index(t)+n;return o>=0&&o<i.length?i.eq(o):e()},this.onKeyDown=function(){var e=n.onKeyDown;return function(t){var i,o,r,s;return!this.isOpen||t.keyCode!==p&&t.keyCode!==d?e.apply(this,arguments):(n.ignoreHover=!0,s=this.$activeOption.closest("[data-group]"),i=s.find("[data-selectable]").index(this.$activeOption),s=t.keyCode===p?s.prev("[data-group]"):s.next("[data-group]"),r=s.find("[data-selectable]"),o=r.eq(Math.min(r.length-1,i)),void(o.length&&this.setActiveOption(o)))}}();var i=function(){var e,t=i.width,n=document;return"undefined"==typeof t&&(e=n.createElement("div"),e.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',e=e.firstChild,n.body.appendChild(e),t=i.width=e.offsetWidth-e.clientWidth,n.body.removeChild(e)),t},o=function(){var o,r,s,a,l,p,u;if(u=e("[data-group]",n.$dropdown_content),r=u.length,r&&n.$dropdown_content.width()){if(t.equalizeHeight){for(s=0,o=0;o<r;o++)s=Math.max(s,u.eq(o).height());u.css({height:s})}t.equalizeWidth&&(p=n.$dropdown_content.innerWidth()-i(),a=Math.round(p/r),u.css({width:a}),r>1&&(l=p-a*(r-1),u.eq(r-1).css({width:l})))}};(t.equalizeHeight||t.equalizeWidth)&&(_.after(this,"positionDropdown",o),_.after(this,"refreshOptions",o))}),E.define("remove_button",function(t){t=e.extend({label:"&times;",title:"Remove",className:"remove",append:!0},t);var n=function(t,n){n.className="remove-single";var i=t,o='<a href="javascript:void(0)" class="'+n.className+'" tabindex="-1" title="'+I(n.title)+'">'+n.label+"</a>",r=function(e,t){return e+t};t.setup=function(){var s=i.setup;return function(){if(n.append){var a=e(i.$input.context).attr("id"),l=(e("#"+a),i.settings.render.item);i.settings.render.item=function(e){return r(l.apply(t,arguments),o)}}s.apply(t,arguments),t.$control.on("click","."+n.className,function(e){e.preventDefault(),i.isLocked||i.clear()})}}()},i=function(t,n){var i=t,o='<a href="javascript:void(0)" class="'+n.className+'" tabindex="-1" title="'+I(n.title)+'">'+n.label+"</a>",r=function(e,t){var n=e.search(/(<\/[^>]+>\s*)$/);return e.substring(0,n)+t+e.substring(n)};t.setup=function(){var s=i.setup;return function(){if(n.append){var a=i.settings.render.item;i.settings.render.item=function(e){return r(a.apply(t,arguments),o)}}s.apply(t,arguments),t.$control.on("click","."+n.className,function(t){if(t.preventDefault(),!i.isLocked){var n=e(t.currentTarget).parent();i.setActiveItem(n),i.deleteSelection()&&i.setCaret(i.items.length)}})}}()};return"single"===this.settings.mode?void n(this,t):void i(this,t)}),E.define("restore_on_backspace",function(e){var t=this;e.text=e.text||function(e){return e[this.settings.labelField]},this.onKeyDown=function(){var n=t.onKeyDown;return function(t){var i,o;return t.keyCode===g&&""===this.$control_input.val()&&!this.$activeItems.length&&(i=this.caretPos-1,i>=0&&i<this.items.length)?(o=this.options[this.items[i]],this.deleteSelection(t)&&(this.setTextboxValue(e.text.apply(this,[o])),this.refreshOptions(!0)),void t.preventDefault()):n.apply(this,arguments)}}()}),E});
var QRStuffHistory=Class.create({saveViewStateTimeoutID:!1,box:null,idqrcode_batch:null,initialize:function(e){"object"!=typeof e&&(e={}),"undefined"!=typeof e.idqrcode_batch&&(this.idqrcode_batch=e.idqrcode_batch),this.box=new IFrameBox,this.box.width=422;var t=$("history-google-map");t&&(this.googleMap=new GoogleMapController(this,"map",t,"address_field","latitude_field","longitude_field",395,200)),$$(".addProjectButton").each(function(e){e.observe("click",function(e){this.addProject()}.bind(this))}.bind(this)),$$("th.project-header").each(function(e){var t=this.getDbIdFromEl(e);e.down(".showProjectButton").observe("click",function(e){this.showProjectCodes(t)}.bind(this)),e.down(".hideProjectButton").observe("click",function(e){this.hideProjectCodes(t)}.bind(this)),e.down(".renameProjectIcon").observe("click",function(e){this.renameStart(t)}.bind(this)),e.down(".renameDoneIcon").observe("click",function(e){this.renameFinish(t)}.bind(this));var o=e.down(".deleteProjectIcon");o&&o.observe("click",function(e){this.deleteProject(t)}.bind(this)),e.down(".renameProject input").observe("keypress",function(e){event.keyCode==Event.KEY_RETURN&&(this.renameFinish(t),Event.stop(event))}.bind(this))}.bind(this))},renameStart:function(e){headingEl=$("projectHeading"+e),headingEl.down(".renameProject").show(),headingEl.down(".renameProjectIcon").hide(),headingEl.down(".projectName").hide()},renameFinish:function(e){headingEl=$("projectHeading"+e),headingEl.down(".renameProject").hide(),headingEl.down(".renameProjectIcon").show(),headingEl.down(".projectName").show(),newProjectName=headingEl.down(".renameProject input").value,""!==newProjectName&&(headingEl.down(".projectName").update(newProjectName.escapeHTML()),targetUrl="history.update-project-name-ajax",parameters={idproject:e,name:newProjectName},new Ajax.Request(targetUrl,{method:"post",parameters:parameters}))},deleteProject:function(e){headingEl=$("projectHeading"+e),projectName=headingEl.down(".renameProject input").value,projectNumCodes=headingEl.down(".projectNumCodes").innerHTML;var t='Are you sure you want to delete the project "'+projectName+'"?';"0"!==projectNumCodes&&(t+="\nThe QR Codes in this project will be moved to your default project."),confirm(t)&&(document.location="history.delete-project?idproject="+e)},addProject:function(){this.showInBox("history.addProject",422,150)},scheduleRefreshPreview:function(){},getProjectIDs:function(){var e=[];return $$("table.history tbody").each(function(t){var o=this.getDbIdFromEl(t);o&&e.push(o)}.bind(this)),e},showProjectCodes:function(e){for(this.setProjectExpandedState(e,!0),this.updateProjectCodes(e),projectIDs=this.getProjectIDs(),i=0;i<projectIDs.length;i++)projectIDs[i]!=e&&this.getProjectExpandedState(projectIDs[i])&&(this.removeProjectCodes(projectIDs[i]),this.setProjectExpandedState(projectIDs[i],!1))},hideProjectCodes:function(e){this.removeProjectCodes(e),this.setProjectExpandedState(e,!1),targetUrl="history.update-project-expanded-ajax",parameters={idproject:e,expanded:0},new Ajax.Request(targetUrl,{method:"post",parameters:parameters})},setProjectExpandedState:function(e,t){headingCell=$("projectHeading"+e),columnHeadingsRow=$("projectBody"+e).down(".history-column-headers"),headingCell&&(t?(headingCell.down(".showProjectButton").hide(),headingCell.down(".hideProjectButton").show(),headingCell.down(".moveProjectControl").show(),columnHeadingsRow.show()):(headingCell.down(".showProjectButton").show(),headingCell.down(".hideProjectButton").hide(),headingCell.down(".moveProjectControl").hide(),columnHeadingsRow.down(".historyHeaderCheckCell input").checked=!1,columnHeadingsRow.hide()),headingCell.writeAttribute("qrsruff_project_expanded",t?"1":"0"))},getProjectExpandedState:function(e){return"1"==$("projectHeading"+e).readAttribute("qrsruff_project_expanded")},removeProjectCodes:function(e){$$("#projectBody"+e+" .history-qrcode, #projectBody"+e+" .history-details").each(function(e){e.remove()}),paginationRow=$("projectPaginationRow"+e),paginationRow&&paginationRow.remove()},getDbIdFromEl:function(e){if(!e.readAttribute("id"))return null;var t=/([0-9]+)$/.exec(e.readAttribute("id"));return t?t[0]:null},moveCodesToProject:function(e){idqrcodes=this.selectedQRCodeIDs(),idproject=$(e).value,params={idproject:idproject,idqrcodes:idqrcodes.join(",")},this.postViaForm("history.move-codes-to-project",params)},updateProjectCodes:function(e,t){arguments.length<2&&(t=1),targetUrl="history.fetch-project-codes-ajax",parameters={idproject:e,page:t},parameters.expanded=1,this.idqrcode_batch&&(targetUrl="batchhistory.fetch-project-codes-ajax",parameters.idqrcode_batch=this.idqrcode_batch),this.showAjaxLoader("Project"+e),new Ajax.Request(targetUrl,{method:"post",parameters:parameters,onSuccess:function(e,t){""!==t.responseText&&this.updateProjectCodesCallback(e,t.responseText.evalJSON(!0))}.bind(this,e)})},updateProjectCodesCallback:function(e,t){this.removeProjectCodes(e),columnHeadingsRow=$("projectBody"+e).down(".history-column-headers"),columnHeadingsRow?columnHeadingsRow.insert({after:t.html}):console&&console.log("Warning: column headings not found in QRStuffHistory.updateProjectCodesCallback"),headingCell=$("projectHeading"+e),headingCell&&(headingCell.down(".projectName").update(t.project.name.escapeHTML()),headingCell.down(".projectNumCodes").update(t.project.num_codes)),this.hideAjaxLoader("Project"+e)},insertAjaxLoader:function(e,t,o,r){"undefined"==typeof r&&(r=""),oldEl=$(o),oldEl&&(oldEl.purge(),oldEl.remove());var n=new Element("span",{id:o,style:r}).update(new Element("img",{src:"include/modules/custom/qrstuff/images/ajax-load-bar.gif"}));param={},param[e]=n,t.insert(param)},showAjaxLoader:function(e){arguments.length<1&&(e=""),indicator=$$(".ajaxLoadIndicator"+e).each(function(e){e.show()})},hideAjaxLoader:function(e){arguments.length<1&&(e=""),indicator=$$(".ajaxLoadIndicator"+e).each(function(e){e.hide()})},selectAllClicked:function(e){$$(".history-qrcode-select, .history-qrstuff-project-select").each(function(t){t.checked=e})},selectProjectClicked:function(e,t){$$("tbody#projectBody"+t+" .history-qrcode-select").each(function(t){t.checked=e})},selectedQRCodeIDs:function(){return ids=[],$$(".history-qrcode-select").each(function(e){e.checked&&ids.push(e.readAttribute("idqrcode"))}),ids},setQRCodesSelection:function(e,t){e.each(function(e){$("qrcode-"+e+"-select").checked=t})},detailsVisible:function(e){var t=$("qrcode-"+e+"-details");return t?t.visible():null},showDetails:function(e){$("button-manage-open-"+e).hide(),$("button-manage-close-"+e).show(),$("qrcode-"+e+"-details").show(),this.showPreview(e)},hideDetails:function(e){$("button-manage-open-"+e).show(),$("button-manage-close-"+e).hide(),$("qrcode-"+e+"-details").hide()},previewUpdate:0,showPreview:function(e){$("qrcode-"+e+"-preview")&&($("qrcode-"+e+"-preview").src="/history.preview."+e+"?n="+ ++this.previewUpdate)},beginModify:function(e){},editComplete:function(e){this.box.hide(),$("idqrcode_or_short_url_field")?window.location.reload():this.refreshItems(e)},refreshItems:function(e){targetUrl="history.fetch-codes-ajax",parameters={"idqrcodes[]":e},this.idqrcode_batch&&(targetUrl="batchhistory.fetch-codes-ajax",parameters.idqrcode_batch=this.idqrcode_batch);for(var t=0;t<e.length;t++){var o=e[t];editLink=$$("#qrcode-"+o+"-details .history-content .icon-button-edit").first(),editLink&&this.insertAjaxLoader("after",editLink,"qrcode-"+o+"-ajax-loader","padding-left: 12px; vertical-align: middle;"),$$("#qrcode-"+o+"-details .history-content .icon-button").each(function(e){e.hide()})}new Ajax.Request(targetUrl,{method:"post",parameters:parameters,onSuccess:function(e){""!==e.responseText&&this.refreshItemsCallback(e.responseText.evalJSON(!0))}.bind(this)})},refreshItemsCallback:function(e){for(var t=0;t<e.qrcodes.length;t++){qrcode=e.qrcodes[t];var o=this.detailsVisible(qrcode.idqrcode);oldEl=$("qrcode-"+qrcode.idqrcode),oldEl&&(oldEl.replace(qrcode.html),$("qrcode-"+qrcode.idqrcode+"-details").replace(qrcode.html_details),o&&this.showDetails(qrcode.idqrcode))}},showAjaxPopup:function(e,t){"undefined"==typeof t&&(t="ajax_popup"),new Ajax.Request(e,{method:"get",onSuccess:function(e,t){this.showAjaxPopupCallback(t.responseText,e)}.bind(this,t)})},showAjaxPopupCallback:function(e,t){"undefined"==typeof t&&(t="ajax_popup"),$(t)||$(document.body).insert({bottom:new Element("div",{id:t})}),$(t).update(e)},showInBox:function(e,t,o){this.box.width=t,this.box.height=o,this.box.show(e)},postViaForm:function(e,t,o){elementProperties={method:"post",action:e,enctype:"multipart/form-data"},o&&$H(o).each(function(e){elementProperties[e.key]=e.value});var r=new Element("form",elementProperties).setStyle({display:"none"});$(document.body).insert(r),$H(t).each(function(e){r.insert(new Element("input",{type:"hidden",name:e.key,value:e.value}))}),r.submit(),r.remove()},styleQrCodeInit:function(e){refreshPreview=function(){stylesForm=e("#qrcode-modify-style"),e.ajax({url:stylesForm.data("preview-url"),data:stylesForm.serialize(),method:"POST",dataType:"text"}).done(function(t){e(".qrcode-preview-image").attr("src",t)})},refreshPreviewTimerEventID=0,scheduleRefreshPreview=function(){0!==refreshPreviewTimerEventID&&clearTimeout(refreshPreviewTimerEventID),refreshPreviewTimerEventID=window.setTimeout(refreshPreview,200)},e("#generate-enter-data-logo").find("input, select").change(scheduleRefreshPreview),e(".continue-button").click(function(t){t.preventDefault(),stylesForm=e("#qrcode-modify-style"),e.ajax({url:stylesForm.attr("action"),data:stylesForm.serialize(),method:"POST"}).done(function(t){stylesForm=e("#qrcode-modify-style"),historyController.refreshItems([stylesForm.data("idqrcode")]),stylesForm.remove()})}),e("#generate-enter-data-logo-mask, #generate-enter-data-logo-container .dialog-close").not(".continue-button").click(function(t){t.preventDefault(),e("#qrcode-modify-style").remove()}),e("#qrcode-logo-file").on("fileuploadform:change",scheduleRefreshPreview),refreshPreview()}});document.observe("dom:loaded",function(){"undefined"!=typeof historyControllerOptions&&(historyController=new QRStuffHistory(historyControllerOptions))});
var QRStuff={clientLoggedIn:!1,client:null,googleAccessTokenAvailable:null,spreadsheetsUrl:"googlesheets",qrcodeTypeSet:!1,previewIsDefault:!0,previewQuery:!1,requestFields:null,googleMap:null,baseUrl:null,maxGetRequestLength:2e4,defaultImageUrl:null,generateUrl:"generate",marketTypes:["itunes","itunes-ipad","google-play-tablet","google-play-tablet-cn","google-play","google-play-cn","blackberry-app-world","blackberry-ten-app-world","windows-marketplace"],validationDefinitions:{},iFrameBox:null,btcValidationCache:{},dialogTemplate:null,maxTextLengthStatic:1e3,maxTextLengthDynamic:1e4,isGeneratePage:null,optionalShortUrlTypes:{DROPBOX:{state:!0},ITUNES_LINK:{state:!0},"LINKEDIN.LINKEDIN":{state:!0},"LINKEDIN.LINKEDIN_SHARE":{state:!0},MAILTO:{state:!0},MATMSG:{state:!0},PAYPAL_BUY:{state:!0},TEL:{state:!0},TEXT:{state:!0},"TWITTER.TWITTER_STATUS":{state:!0},URL:{state:!0},"VCARD.VCARD":{state:!0},YOUTUBE:{state:!0}},mandatoryShortUrlTypes:{ATTENDANCE:{},MAPS:{},INSTAGRAM:{},"FACEBOOK.FACEBOOK":{},"FACEBOOK.FACEBOOK_LIKE":{},FOURSQUARE:{},APP_DOWNLOAD:{},SKYPE:{},IMAGE:{},PDF:{},"TWITTER.TWITTER":{},DIGITAL_BUSINESS_CARD:{}},qrCodeTypes:["TEXT","URL","TEL","SKYPE","IMAGE","PDF","SMSTO","MAILTO","MATMSG","VCARD","DIGITAL_BUSINESS_CARD","MAPS","WIFI","TWITTER","FACEBOOK","LINKEDIN","INSTAGRAM","FOURSQUARE","PAYPAL_BUY","BITCOIN","ATTENDANCE","VCALENDAR","APP_DOWNLOAD","ITUNES_LINK","DROPBOX","YOUTUBE"],init:function(e){this.isGeneratePage=!!$("qrcode-data-form");var t=$("qrcode-preview");this.defaultImageUrl=t?t.src:null,this.baseUrl=$$("base").first().href,this.googleAccessTokenAvailable=$(document.body).hasClassName("google-access-token-available"),this.initValidationDefinitions(),this.clientLoggedIn=null!==e,this.client=e,Auth.onLoginSucceeded=this.loginSucceeded.bind(this),Auth.onFailedLogin=this.loginFailed.bind(this),this.setSubscriberCssState(),this.updateVCalendarDefaults(),Event.observe(document,"mousedown",function(e){e.isRightClick()&&$(e.target).hasClassName("qrcode-preview-image")&&this.previewRightClick(e)}.bind(this)),$$("#qrcode-shorturl-no, #qrcode-shorturl-yes").each(function(e){e.observe("click",function(e){e.blur(),e.focus()}.bind(this,e)),e.observe("change",this.shortUrlSettingChanged.bind(this)),e.observe("change",this.scheduleRefreshPreview.bind(this))}.bind(this));var i=$("qrcode-google-campaign-container");i&&i.select("input").each(function(e){"radio"===e.type?(e.observe("click",function(e){e.blur(),e.focus()}.bind(this,e)),e.observe("change",this.scheduleRefreshPreview.bind(this)),e.observe("change",function(){"1"===$RF("qrcode-google-campaign-yes")?$("qrcode-google-campaign-fields").show():$("qrcode-google-campaign-fields").hide()})):e.observe("keyup",this.scheduleRefreshPreview.bind(this))}.bind(this)),this.initUrlHint(),this.initAveryCodeSelector(),this.initTypeFromUrlParam(),this.initLogoDialog(),this.initQRCodeTemplateDialog(),this.initSignupOffer(),this.initGenerateColorPicker(),this.initJQueryFileUpload(),this.initGoogleSheetSelect(),this.initAttendanceTracking(),this.initTextField()},initGenerateColorPicker:function(){if($("qrcode-fgcolor-picker")){var e=new colorPicker("qrcode-fgcolor-picker",{color:"#{$data->foregroundColor}",flat:!0,hasExtraInfo:!1,inputElement:"qrcode-fgcolor",previewElement:"qrcode-fgcolor-preview",onChange:function(){QRStuff.scheduleRefreshPreview()}});$("qrcode-fgcolor").observe("keyup",function(t){var i=this.value;/[0-9a-fA-F]{6}/.match(i)&&(e.setColor(i),QRStuff.scheduleRefreshPreview())})}},initGoogleSheetSelect:function(){jQuery(".google-sheet-select").selectize({valueField:"idgoogle_sheet",labelField:"title",searchField:["title","spreadsheet_id"],tokens:[],options:[],render:{option:function(e,t){return'<div class="sheet"><span class="name">'+t(e.title)+'</span><span class="delete" data-id="'+e.idgoogle_sheet+'" title="Delete \''+t(e.title)+"'\"></span></div>"},option_create:function(e,t){return/^https?:\/\/docs.google.com\//.match(e.input)?'<div class="create">Attempt to re-link deleted spreadsheet &hellip;</div>':'<div class="create">Create Google Sheet: <strong>'+t(e.input)+"</strong>&hellip;</div>"}},create:function(e,t){return QRStuff.confirmRequestGoogleAccessToken()?void jQuery.ajax({url:QRStuff.spreadsheetsUrl+".create",type:"GET",dataType:"json",data:{title:e,type:"attendance"},error:function(){QRStuff.setGoogleAccessTokenAvailable(!1),t()},success:function(e){t(e)}}):void t()},load:function(e,t){jQuery.ajax({url:QRStuff.spreadsheetsUrl+".index",type:"GET",dataType:"json",data:{q:e,l:30},error:function(){t()},success:function(e){t(e)}})},onInitialize:function(){this.$dropdown_content.on("mousedown",".sheet .delete",function(e){var t=jQuery(e.target).siblings(".name").html(),i=jQuery(e.target).data("id");QRStuff.notify({dialogId:"delete-sheet",messageHtml:'<h2>Delete Sheet?</h2><p style="max-width: 535px;">Deleting the sheet \''+t+"' will remove it from the list of sheets on QRStuff and disable any codes using this sheet.<br><br> This action will not delete the sheet from google docs.</p>",buttons:[{id:"cancel",text:"Cancel","class":"dialog-close"},{id:"delete",text:"Delete","class":"primary dialog-close",onclick:function(e,t){this.deleteGoogleSheet(e)}.bind(QRStuff,i)}]})})},onFocus:function(){return QRStuff.confirmRequestGoogleAccessToken()},onChange:function(e){QRStuff.confirmRequestGoogleAccessToken(),QRStuff.scheduleRefreshPreview()}}),$$(".link-google-account").each(function(e){e.observe("click",function(e){this.popGoogleAccessTokenDialog(),Event.stop(e)}.bind(this))}.bind(this))},refreshGoogleSheetSelectDefaults:function(){jQuery(".google-sheet-select")[0].selectize.onSearchChange("")},deleteGoogleSheet:function(e){jQuery.ajax({url:QRStuff.spreadsheetsUrl+".delete",type:"POST",dataType:"json",data:{id:e},success:function(t){var i=jQuery(".google-sheet-select")[0].selectize;i.removeOption(e)}})},initAttendanceTracking:function(){jQuery("#qrcode-data-attendance-record-location").click(function(){var e=jQuery(this);e.is(":checked")&&!e.data("notification-shown")&&(e.data("notification-shown",!0),QRStuff.notify({messageHtml:"<p>Enabling location tracking will require the user scanning the Attendance Tracking<br>QR Code to agree to provide us their location.</p><p>If they do not agree to provide a location the attendance will not be recorded<br>in the Google Spreadsheet</p>",closeButtonText:"I Agree"}))}),jQuery("#qrcode-data-attendance-record-full-name").click(function(){var e=jQuery(this);e.is(":checked")?jQuery(".attendance-full-name-label-section").show():jQuery(".attendance-full-name-label-section").hide()})},confirmRequestGoogleAccessToken:function(){return this.googleAccessTokenAvailable||this.popGoogleAccessTokenDialogDebounced(),this.googleAccessTokenAvailable},popGoogleAccessTokenDialog:function(){if(this.confirmWarnSubscriber()){url=this.generateUrl+".google-api-token";this.popupWindow(url,"name",window,450,650)}},popGoogleAccessTokenDialogDebounced:function(){this.popGoogleAccessTokenDialogDebounced=_.debounce(this.popGoogleAccessTokenDialog,1e3,{leading:!0,trailing:!1}),this.popGoogleAccessTokenDialogDebounced()},setGoogleAccessTokenAvailable:function(e){this.googleAccessTokenAvailable=e;var t=$(document.body);e?t.addClassName("google-access-token-available"):t.removeClassName("google-access-token-available")},popupWindow:function(e,t,i,a,r){var o=i.top.outerHeight/2+i.top.screenY-r/2,n=i.top.outerWidth/2+i.top.screenX-a/2,d=i.open(e,t,"toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+a+", height="+r+", top="+o+", left="+n);return!d&&console&&console.warn("Could not create new window",d),i.focus&&d&&d.focus(),d},initLogoDialog:function(){if(fileUploadItemFormItemHandler({url:"upload.logoFile",idPrefix:"qrcode-logo",fieldName:"logo-file",beforeAdd:this.fileUploadConfirmWarnSubscriber.bind(this,"Only subscribers can add logos"),notifyErrors:this.notifyValidationSimplified.bind(this),acceptFileTypes:/\.(png|jpg|jpeg|gif)$/i,fileTypeErrorText:"Only png, jpg and gif images are supported",maxFileSize:6291456,maxFileSizeDisplay:"5Mb"}),this.isGeneratePage){var e=jQuery("input[name=transparent_bg]");e.on("click",function(t){var i=jQuery(this);e.not(i).prop("checked",i.prop("checked"))}),$$(".logo-open").each(function(e){e.observe("click",function(e){this.showLogoDialog(),this.refreshPreview(),Event.stop(e)}.bind(this))}.bind(this));var t=$("generate-enter-data-logo-container");t&&t.select("#generate-enter-data-logo-mask, .dialog-close").each(function(e){e.observe("click",function(e,i){t.hide(),t.select("input.spectrum-field").each(function(e){jQuery(e).spectrum("hide")}),e.hasClassName("continue-button")&&(this.validateAndAlertQRCodeForm(),this.refreshPreview(),"module_color=%23000000&module_shape=Normal&finder_color=%23000000&finder_eye_color=%23000000&finder_shape=Normal"!==Form.serialize(t.select(".style-qrcode-color-and-shape").first())&&this.fileUploadConfirmWarnSubscriber("Only subscribers can style QR codes")),Event.stop(i)}.bind(this,e))}.bind(this))}},showLogoDialog:function(){this.validateAndAlertQRCodeForm()&&(container=$("generate-enter-data-logo-container"),container.show(),container.writeAttribute("data-style-dialog-open","0"),this.centerElement($("generate-enter-data-logo"),{}))},styleDialogIsOpen:function(){return $("generate-enter-data-logo-container").visible()},initQRCodeTemplateDialog:function(){this.isGeneratePage&&!function(e){e(".select-qrcode-template").click(function(e){e.stopPropagation(),QRStuff.showQRCodeTemplateDialog()}),e("#generate-enter-data-qrcode-template-container .template").click(function(t){QRStuff.setQRCodeTemplate(e(this).data("template"))}),e("#generate-enter-data-qrcode-template-mask, #generate-enter-data-qrcode-template-container .dialog-close").click(function(t){e("#generate-enter-data-qrcode-template-container").hide()})}(jQuery)},showQRCodeTemplateDialog:function(){this.validateAndAlertQRCodeForm()&&(container=$("generate-enter-data-qrcode-template-container"),container.show(),this.centerElement($("generate-enter-data-qrcode-template"),{}))},setQRCodeTemplate:function(e){this.isGeneratePage&&!function(t){t.each({moduleColor:"module_color",moduleShape:"module_shape",finderColor:"finder_color",finderEyeColor:"finder_eye_color",finderShape:"finder_shape"},function(i,a){"undefined"!=typeof e.renderingOptions[i]&&(t("#"+a+"_field").val(e.renderingOptions[i]),t("#"+a+"_field.spectrum-field").spectrum("set",e.renderingOptions[i]))}),t("#transparent_bg_field").prop("checked",!!e.renderingOptions.transparent_bg),t("#transparent_bg_field_2").prop("checked",!!e.renderingOptions.transparent_bg),QRStuff.setUploadedFile("qrcode-logo",e.renderingOptions.logoImage),QRStuff.refreshPreview(),QRStuff.confirmWarnSubscriber("Only subscribers can use QR Code templates"),t("#generate-enter-data-qrcode-template-container").hide()}(jQuery)},setUploadedFile:function(e,t){!function(i){i("#"+e+"-files .file").remove(),i.Mustache.addFromDom(e+"-file-tpl"),i("#"+e+"-files").mustache(e+"-file-tpl",t)}(jQuery)},initSignupOffer:function(){signupOfferContainer=$("signup-offer-container"),signupOfferContainer&&signupOfferContainer.select("#signup-offer-mask, .actions a.btn").each(function(e){e.observe("click",function(t){$("signup-not-again-field")&&$("signup-not-again-field").checked&&Cookies.set("signupOfferNever","1",{expires:7776e3}),"signup-offer-mask"==e.id?($("signup-offer-container").hide(),Event.stop(t),dataLayer.push({event:"Analytics Legacy Event",eventCategory:"SignupOffer",eventAction:"Closed",eventLabel:"ClickOutside"})):e.hasClassName("no-btn")?($("signup-offer-container").hide(),Event.stop(t),dataLayer.push({event:"Analytics Legacy Event",eventCategory:"SignupOffer",eventAction:"Closed",eventLabel:"NoThanks"})):e.hasClassName("yes-btn")?dataLayer.push({event:"Analytics Legacy Event",eventCategory:"SignupOffer",eventAction:"Continue",eventLabel:"SignMeUp"}):e.hasClassName("more-info-btn")&&dataLayer.push({event:"Analytics Legacy Event",eventCategory:"SignupOffer",eventAction:"Continue",eventLabel:"MoreInfo"})}.bind(this))}.bind(this))},switchLogoButton:function(){!$("logo-main-button")},showSignupOfferIfAppropriate:function(){viewport=document.viewport.getDimensions(),viewport.width<550||viewport.height<500||Cookies.enabled&&"1"!==Cookies.get("hasClientAccount")&&"1"!==Cookies.get("signupOfferNever")&&"1"!==Cookies.get("signupOfferMade")&&($("signup-offer-container").show(),this.centerElement($("signup-offer"),{}),Cookies.set("signupOfferMade","1",{expires:86400}),dataLayer.push({event:"Analytics Legacy Event",eventCategory:"SignupOffer",eventAction:"Opened",eventLabel:this.selectedFullType()+"-Type"}))},initUrlHint:function(){var e=$("qrcode-data-url");e&&(e.observe("focus",this.urlHint.bind(this,!0)),e.observe("blur",this.urlHint.bind(this,!1)))},urlHint:function(e,t){var i="http://",a=Event.element(t);e&&a.value==i?a.value="":e||""!==a.value||(a.value=i)},updateTextMaxLength:function(){var e="1"===$RF("qrcode-shorturl-yes");$("qrcode-data-text-counter-max").innerText=this.formatNumber(e?this.maxTextLengthDynamic:this.maxTextLengthStatic)},initTextField:function(){if($("qrcode-data-text")){this.updateTextMaxLength();var e=function(){var e="1"===$RF("qrcode-shorturl-yes");this.updateTextMaxLength(),this.limitCharacters("qrcode-data-text",e?this.maxTextLengthDynamic:this.maxTextLengthStatic),this.scheduleRefreshPreview()}.bind(this);$("qrcode-shorturl-yes").observe("change",e),$("qrcode-shorturl-no").observe("change",e),$("qrcode-data-text").observe("keyup",e),$("qrcode-data-text").observe("change",e)}},initGoogleMapForType:function(e){switch(e){case"MAPS":null===this.googleMap&&(this.googleMap=new GoogleMapController(this,"map",$("google-map"),(void 0),(void 0),(void 0),302,240))}},initJQueryFileUpload:function(){fileUploadItemFormItemHandler({url:"upload.imageFile",idPrefix:"qrcode-data-image",fieldName:"image-file",beforeAdd:this.fileUploadConfirmWarnSubscriber.bind(this,"Only subscribers can use image uploads"),notifyErrors:this.notifyValidationSimplified.bind(this),acceptFileTypes:/\.(png|jpg|jpeg|gif)$/i,fileTypeErrorText:"Only png, jpg and gif images are supported",maxFileSize:11534336,maxFileSizeDisplay:"10Mb"}),fileUploadItemFormItemHandler({url:"upload.pdfFile",idPrefix:"qrcode-data-pdf",fieldName:"pdf-file",beforeAdd:this.fileUploadConfirmWarnSubscriber.bind(this,"Only subscribers can use PDF uploads"),notifyErrors:this.notifyValidationSimplified.bind(this),acceptFileTypes:/\.pdf$/i,fileTypeErrorText:"Only pdf files are supported",maxFileSize:6291456,maxFileSizeDisplay:"5Mb"})},fileUploadConfirmWarnSubscriber:function(e){return this.confirmWarnSubscriber(e)},confirmWarnSubscriber:function(e){return!(!QRStuff.clientLoggedIn||!QRStuff.client.isActive)||(this.notifynNonSubscriber(e),!1)},notifynNonSubscriber:function(e){"undefined"==typeof e&&(e="Only subscribers can use this feature"),QRStuff.notify({dialogId:"subscriber-only-notify",messageHtml:"<h2>"+e+"</h2><p>Subscribe today to try it out!</p>",offerSubscribe:!0})},initTypeFromUrlParam:function(){var e=document.URL.toQueryParams();if("undefined"!=typeof e.type){var t=e.type.toUpperCase().split(".");if($("qrcode-type-"+t[0])){if(this.setQRCodeType(t[0]),t.length>=2){var i=$("qrcode-data-"+t[0]+"-subtype-"+t[1]);i&&(i.checked=!0)}this.updateSubtype()}}},setSubscriberCssState:function(){var e=$(document.body);this.clientLoggedIn&&this.client.signupComplete?e.addClassName("subscriber-logged-in"):e.removeClassName("subscriber-logged-in"),this.clientLoggedIn&&this.client.isActive?e.addClassName("active-subscriber-logged-in"):e.removeClassName("active-subscriber-logged-in")},loginSucceeded:function(e){if(this.clientLoggedIn=!0,this.client=e.client,this.setSubscriberCssState(),["generate-img-specs-inputs","inputbutton3-subscribed"].each(function(e){var t=$(e);t&&t.show()}),["generate-img-specs-message","batch-subscribe-banner","inputbutton3-unsubscribed"].each(function(e){var t=$(e);t&&t.hide()}),$("generate-enter-data-output-type")&&e.generate_enter_data_output_types_html&&($("generate-enter-data-output-type").innerHTML=e.generate_enter_data_output_types_html),$("qrcode-type-code")){var t=$F("qrcode-type-code");"URL"!=t&&"SOCIAL_NETWORK"!=t||$("qrcode-shorturl-container")&&this.setShortUrlUIState("optional")}$("qrcode-disclaimer-container-ITUNES_LINK")&&($("qrcode-disclaimer-container-ITUNES_LINK").innerHTML=""),$("subscriberReminder")&&$("subscriberReminder").remove(),this.setGoogleAccessTokenAvailable(this.client.googleAccessTokenAvailable),this.refreshGoogleSheetSelectDefaults(),this.scheduleRefreshPreview()},loginFailed:function(){},onLoad:function(e){this.qrcodeTypeSet||this.setQRCodeType(e)},showDigitalBusinessCardPopup:function(e){if(this.iFrameBox||(this.iFrameBox=new IFrameBox),!this.iFrameBox.isVisible()){url=this.generateUrl+".dbc-request";var t="?";for(var i in e)e.hasOwnProperty(i)&&(url+=t+encodeURIComponent(i)+"="+encodeURIComponent(e[i]),t="&");this.iFrameBox.width=1e3,this.iFrameBox.height=694,this.iFrameBox.show(url)}},updateDigitalBusinessCard:function(){var e=$("qrcode-data-dbc-id").value;""!==e?this.showDigitalBusinessCardPopup({id:e}):this.addDigitalBusinessCard()},addDigitalBusinessCard:function(){this.showDigitalBusinessCardPopup({})},showSampleDigitalBusinessCard:function(){var e=$("dbc-result");e.visible()||(e.src=e.readAttribute("data-src-sample"),e.show())},digitalBusinessCardChanged:function(e){if($("qrcode-data-dbc-url")){var t=$("dbc-result");if(null===e||"OK"!==e.status)return void(null!==e&&"undefined"!=typeof e.errorMessage&&this.notifyValidation(e.errorMessage));var i=!1;e.hasOwnProperty("site")&&($("qrcode-data-dbc-url").value!==e.site.url&&(i=!0),$("qrcode-data-dbc-url").value=e.site.url,$("qrcode-data-dbc-id").value=e.site.id,$("qrcode-data-dbc-name").value=e.site.name,null===this.client?t.src=e.site.url:t.src=e.site.url+"?idclient="+this.client.idclient+"&qrs_cact="+this.client.isActive,$$(".dbc-before-create").each(function(e){e.hide()}),$$(".dbc-after-create").each(function(e){e.show()}),this.refreshPreview(i))}else if(null===e||"OK"!==e.status)return void(null!==e&&"undefined"!=typeof e.errorMessage&&alert(e.errorMessage))},shortUrlSettingChanged:function(){var e=this.selectedFullType();e&&this.optionalShortUrlTypes[e]&&(this.optionalShortUrlTypes[e].state="1"===$RF("qrcode-shorturl-yes"))},setQRCodeType:function(e){this.initGoogleMapForType(e),this.qrcodeTypeSet=!0,$("qrcode-data-form").writeAttribute("data-qrcode-type",e);for(var t=0;t<this.qrCodeTypes.length;t++)$("qrcode-data-container-"+this.qrCodeTypes[t]).hide();$("qrcode-info").hide(),$("qrcode-disclaimer-container-ITUNES_LINK").hide(),"DIGITAL_BUSINESS_CARD"==e&&this.showSampleDigitalBusinessCard(),$("qrcode-data-container-"+e).show(),$("qrcode-type-"+e).checked=!0;var i=$("qrcode-disclaimer-container-"+e);i&&i.show(),$("qrcode-type-code").value=e,"undefined"!=typeof this.mandatoryShortUrlTypes[e]?this.setShortUrlUIState("forced"):"undefined"!=typeof this.optionalShortUrlTypes[e]?($("qrcode-shorturl-"+(this.optionalShortUrlTypes[e].state?"yes":"no")).checked=!0,this.setShortUrlUIState("optional")):this.setShortUrlUIState(this.typeHasSubtype(e)?"none":"unavailable"),$$(" .data-type-dependent").each(function(e,t){t.childElements().each(function(e){e.hide()});var i=t.down(" .data-type-"+e);i||(i=t.down(" .data-type-default")),i&&i.show()}.bind(this,e)),"URL"==e?$("qrcode-google-campaign-container").show():$("qrcode-google-campaign-container").hide(),this.typeHasSubtype(e)?this.updateSubtype():this.showTypeBanner(e,null),QRStuff.scheduleRefreshPreview()},typeHasSubtype:function(e){return"TWITTER"===e||"FACEBOOK"===e||"LINKEDIN"===e||"VCARD"===e},refreshPreviewTimerEventID:0,scheduleRefreshPreview:function(){this.switchLogoButton(),0!==this.refreshPreviewTimerEventID&&clearTimeout(this.refreshPreviewTimerEventID),this.refreshPreviewTimerEventID=this.refreshPreview.bind(this).delay(.5)},updateVCalendarDefaults:function(){if($("qrcode-data-vcalendar-start-day")){var e=new Date;$("qrcode-data-vcalendar-start-day").setValue(e.getDate()),$("qrcode-data-vcalendar-start-month").setValue(e.getMonth()+1),$("qrcode-data-vcalendar-start-year").setValue(e.getFullYear()),$("qrcode-data-vcalendar-end-day").setValue(e.getDate()),$("qrcode-data-vcalendar-end-month").setValue(e.getMonth()+1),$("qrcode-data-vcalendar-end-year").setValue(e.getFullYear());var t=e.getTimezoneOffset(),i=(t>0?"-":"+")+(t/60).abs().floor().toPaddedString(2)+(t%60).toPaddedString(2);$("qrcode-data-vcalendar-timezone").setValue(i)}},buildQueryWithFields:function(e){query="";for(var t=0;t<e.length;t++){fieldID=e[t],0!==t&&(query+="&");var i=$(fieldID);if(i){var a="radio"==i.type?$RF(fieldID):i.getValue();query+=i.name+"="+encodeURIComponent(a)}else console&&console.warn("Field "+fieldID+" not found in buildQueryWithFields")}return query},getFormData:function(e){var t=e.serialize({hash:!0});return t.get=function(e,t){return arguments.length<2&&(t=null),this.hasOwnProperty(e)?this[e]:t},t},buildQRCodeQuery:function(){var e=this.selectedType(),t=this.selectedSubtype(),i=this.selectedFullType(),a="type="+e,r=$("qrcode-data-container-"+e),o=$("qrcode-data-form"),n=this.getFormData(o);if(!e)return!1;if("VCARD"==e&&this.updateVcardType(),!this.validateQRCodeForm())return!1;var d=$RF("qrcode-shorturl-yes");switch(e){case"TEXT":var s=$F("qrcode-data-text");a+="&text="+encodeURIComponent(s);break;case"URL":var l=$F("qrcode-data-url");a+="&url="+encodeURIComponent(l);break;case"TEL":var c=$F("qrcode-data-tel-number");a+="&tel-number="+encodeURIComponent(c);break;case"SKYPE":var u=$F("qrcode-data-skype-username");a+="&skype-username="+encodeURIComponent(u);break;case"IMAGE":a+="&"+this.buildQueryWithFields(["qrcode-data-image-idfs-file"]);break;case"PDF":a+="&"+this.buildQueryWithFields(["qrcode-data-pdf-idfs-file"]);break;case"SMSTO":var p=$F("qrcode-data-smsto-number"),h=$F("qrcode-data-smsto-message");a+="&smsto-number="+encodeURIComponent(p),a+="&smsto-message="+encodeURIComponent(h);break;case"MAILTO":var f=$F("qrcode-data-mailto-email-address");a+="&mailto-email-address="+encodeURIComponent(f);break;case"MATMSG":var f=$F("qrcode-data-matmsg-email-address"),m=$F("qrcode-data-matmsg-subject"),g=$F("qrcode-data-matmsg-body");a+="&matmsg-email-address="+encodeURIComponent(f),a+="&matmsg-subject="+encodeURIComponent(m),a+="&matmsg-body="+encodeURIComponent(g);break;case"VCARD":var v=$F("qrcode-data-vcard-first-name"),y=$F("qrcode-data-vcard-last-name"),b=$F("qrcode-data-vcard-honorific"),q=this.sanitizeTelephoneNumber($F("qrcode-data-vcard-tel-number")),T=this.sanitizeTelephoneNumber($F("qrcode-data-vcard-cell-number")),I=this.sanitizeTelephoneNumber($F("qrcode-data-vcard-fax-number")),S=$F("qrcode-data-vcard-email"),A=$F("qrcode-data-vcard-org"),R=$F("qrcode-data-vcard-street"),C=$F("qrcode-data-vcard-city"),w=$F("qrcode-data-vcard-state"),F=$F("qrcode-data-vcard-postcode"),x=$F("qrcode-data-vcard-country"),l=$F("qrcode-data-vcard-url"),U=$F("qrcode-data-vcard-note");a+="&vcard-first-name="+encodeURIComponent(v),a+="&vcard-last-name="+encodeURIComponent(y),a+="&vcard-honorific="+encodeURIComponent(b),a+="&vcard-type="+encodeURIComponent(t),a+="&vcard-tel-number="+encodeURIComponent(q),a+="&vcard-cell-number="+encodeURIComponent(T),a+="&vcard-fax-number="+encodeURIComponent(I),a+="&vcard-email="+encodeURIComponent(S),a+="&vcard-org="+encodeURIComponent(A),a+="&vcard-street="+encodeURIComponent(R),a+="&vcard-city="+encodeURIComponent(C),a+="&vcard-state="+encodeURIComponent(w),a+="&vcard-postcode="+encodeURIComponent(F),a+="&vcard-country="+encodeURIComponent(x),a+="&vcard-url="+encodeURIComponent(l),a+="&vcard-note="+encodeURIComponent(U);break;case"DIGITAL_BUSINESS_CARD":a+="&"+this.buildQueryWithFields(["qrcode-data-dbc-url","qrcode-data-dbc-id","qrcode-data-dbc-name"]);break;case"MAPS":a+="&"+this.buildQueryWithFields(["qrcode-data-map-mode-address","qrcode-data-map-latitude","qrcode-data-map-longitude","qrcode-data-map-address"]);break;case"WIFI":var k=$F("qrcode-data-wifi-ssid"),E=$F("qrcode-data-wifi-password"),_=$F("qrcode-data-wifi-network-type");a+="&wifi-ssid="+encodeURIComponent(k),a+="&wifi-password="+encodeURIComponent(E),a+="&wifi-network-type="+encodeURIComponent(_);break;case"TWITTER":if("TWITTER"==t){var u=$F("qrcode-data-"+t+"-username");a+="&twitter-subtype="+t,a+="&twitter-username="+encodeURIComponent(u)}else if("TWITTER_STATUS"==t){var D=$F("qrcode-data-"+t+"-tweet");a+="&twitter-subtype="+t,a+="&twitterstatus-tweet="+encodeURIComponent(D)}break;case"FACEBOOK":var l=$F("qrcode-data-"+t+"-url");if("FACEBOOK"==t)a+="&facebook-subtype="+t,a+="&facebook-url="+encodeURIComponent(l);else if("FACEBOOK_LIKE"==t){var L=$F("qrcode-data-FACEBOOK_LIKE-title");a+="&facebook-subtype="+t,a+="&facebooklike-url="+encodeURIComponent(l),a+="&facebooklike-title="+encodeURIComponent(L)}break;case"LINKEDIN":var l=$F("qrcode-data-"+t+"-url");"LINKEDIN"==t?(a+="&linkedin-subtype="+t,a+="&linkedin-url="+encodeURIComponent(l)):"LINKEDIN_SHARE"==t&&(a+="&linkedin-subtype="+t,a+="&linkedinshare-url="+encodeURIComponent(l));break;case"INSTAGRAM":a+="&"+this.buildQueryWithFields(["qrcode-data-instagram-username"]);break;case"FOURSQUARE":var l=$F("qrcode-data-"+e+"-url");a+="&foursquare-url="+encodeURIComponent(l);break;case"PAYPAL_BUY":var O=$F("qrcode-data-paypal-buy-account-email-address"),N=$F("qrcode-data-paypal-buy-item-description"),P=$F("qrcode-data-paypal-buy-item-product-code"),Q=$F("qrcode-data-paypal-buy-item-value"),B=$F("qrcode-data-paypal-buy-currency-code");a+="&paypal-buy-account-email-address="+encodeURIComponent(O),a+="&paypal-buy-item-description="+encodeURIComponent(N),a+="&paypal-buy-item-product-code="+encodeURIComponent(P),a+="&paypal-buy-item-value="+encodeURIComponent(Q),a+="&paypal-buy-currency-code="+encodeURIComponent(B);break;case"VCALENDAR":var M=$F("qrcode-data-vcalendar-event-name"),V=this.getDateTimeInput("qrcode-data-vcalendar-start"),K=this.getDateTimeInput("qrcode-data-vcalendar-end"),G=$F("qrcode-data-vcalendar-timezone"),W=$F("qrcode-data-vcalendar-location");a+="&vcalendar-event-name="+encodeURIComponent(M),a+="&vcalendar-start-date-time="+encodeURIComponent(V),a+="&vcalendar-end-date-time="+encodeURIComponent(K),a+="&vcalendar-timezone="+encodeURIComponent(G),a+="&vcalendar-location="+encodeURIComponent(W);break;case"ITUNES_LINK":var l=$F("qrcode-data-ITUNES_LINK");a+="&itunes_link_url="+encodeURIComponent(l);break;case"DROPBOX":var l=$F("qrcode-data-dropbox-url");a+="&dropbox-url="+encodeURIComponent(l);break;case"YOUTUBE":a+="&youtube-video-id="+encodeURIComponent($F("qrcode-data-youtube-video-id")),a+="&youtube-video-url="+encodeURIComponent($F("qrcode-data-youtube-video-url"));break;default:a+="&"+Form.serializeElements(r.getElementsBySelector("input, select, textarea"))}"undefined"!=typeof this.optionalShortUrlTypes[i]&&(a+="&shorturl="+d),"URL"==e&&(a+="&"+this.buildQueryWithFields(["qrcode-google-campaign-yes","qrcode-data-campaign-source","qrcode-data-campaign-medium","qrcode-data-campaign-content","qrcode-data-campaign-name"])),a+="&foreground_color="+$F("qrcode-fgcolor");var j=n.get("logo-file-idfs-file");return j?(a+="&logo-file-idfs-file="+encodeURIComponent(j),a+="&ecc_level=H",$("ecc-fixed").show(),$("ecc-select").hide()):(a+="&ecc_level="+$F("ecc_level_field"),$("ecc-fixed").hide(),$("ecc-select").show()),a+="&"+this.buildQueryWithFields(["width_pixels_field","dpi_field","file_type_field","module_shape_field","finder_shape_field","module_color_field","finder_color_field","finder_eye_color_field","transparent_bg_field"])},refreshPreview:function(e){if("undefined"==typeof e&&(e=!1),null!==this.selectedType()){var t=this.buildQRCodeQuery();if(t===!1||this.baseUrl.length+t.length>this.maxGetRequestLength)$$("img.qrcode-preview-image").each(function(e){e.src=this.defaultImageUrl}.bind(this)),this.previewIsDefault=!0;else{var i=this.generateUrl+(e?".previewForceSave?sendBase64=1":".generate?sendBase64=1&preview=1");i+="&style="+(this.styleDialogIsOpen()?"1":"0"),new Ajax.Request(i,{method:"post",parameters:t,onSuccess:function(e,t){var i=t.responseText||null;selector=e?"img.qrcode-preview-image.style":"img.qrcode-preview-image.generate",$$(selector).each(function(e){e.src=i,e.setStyle({opacity:1})})}.bind(this,this.styleDialogIsOpen()),onFailure:function(e){selector=e?"img.qrcode-preview-image.style":"img.qrcode-preview-image.generate",$$(selector).each(function(e){e.src=this.defaultImageUrl})}.bind(this,this.styleDialogIsOpen())}),this.previewQuery=t,this.previewIsDefault=!1}}},isIOS:function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)},isIEMobile:function(){return!!navigator.userAgent.match(/(IEMobile|WPDesktop)/g)},downloadPreview:function(){if(this.validateAndAlertQRCodeForm()){var e=this.buildQRCodeQuery();if(e=this.generateUrl+".download?"+e,this.validateAndAlertRequestLength(e)){if($F("transparent_bg_field")&&"png"!==$F("file_type_field")&&"svg"!==$F("file_type_field"))return void this.notifyValidation("Sorry, transparent background codes only support png and svg output");var t=new Element("form",{action:this.generateUrl+".download",method:"post"});(this.isIOS()||this.isIEMobile())&&(t.target="_blank");var i=e.toQueryParams();for(var a in i)i.hasOwnProperty(a)&&t.appendChild(new Element("input",{type:"hidden",name:a,value:i[a]}));document.body.appendChild(t),t.submit(),document.body.removeChild(t),QRStuff.refreshPreview.bind(this).delay(2),this.showSignupOfferIfAppropriate()}}},previewRightClick:function(t){t.shiftKey||"qrcode-preview"==$(e.target).id&&(this.previewIsDefault?alert("Please enter the required content, and then use the 'Download this image' link to download your QR code."):alert("Please use the 'Download this image' link beneath the preview to download your QR code."))},initAveryCodeSelector:function(){var e=$("avery-code");e&&this.highlightAveryCodeSelector(e.value,!0)},setAveryCode:function(e){var t=$("avery-code");this.highlightAveryCodeSelector(t.value,!1),this.highlightAveryCodeSelector(e,!0),t.value=e},highlightAveryCodeSelector:function(e,t){t?$("avery-code-"+e).addClassName("avery-code-selected"):$("avery-code-"+e).removeClassName("avery-code-selected")},validateAndAlertQRCodeForm:function(){return!!this.validateQRCodeForm()||(this.missingFieldsAlert(this.requestFields),!1)},validateAndAlertRequestLength:function(e){return!(this.baseUrl.length+e.length>this.maxGetRequestLength)||(this.notifyValidation("You have entered too much content, please shorten some fields."),!1)},missingFieldsAlert:function(e){var t=[];e.each(function(e){if("require_subscription"==e.key)throw this.notifynNonSubscriber(),$break;t.push(e.value)}.bind(this)),t.length&&this.notifyValidation(t)},notifyValidation:function(e){"string"==typeof e&&(e=[e]);for(var t=$("validation-alert-fields-list");t.lastChild;)t.removeChild(t.lastChild);for(var i=0;i<e.length;i++)t.appendChild(new Element("li",{}).update(e[i]));$("validation-alert-box").removeClassName("simplified"),$("validation-alert-box").show(),this.centerElement($("validation-alert-box"),{}),$("validation-alert-box-mask").show(),$("validation-alert-box-mask").setStyle({height:document.body.getHeight()+"px"})},notifyValidationSimplified:function(e){"string"==typeof e&&(e=[e]);for(var t=$("validation-alert-fields-list");t.lastChild;)t.removeChild(t.lastChild);for(var i=0;i<e.length;i++){t.appendChild(new Element("li",{}).update(e[i]));break}$("validation-alert-box").addClassName("simplified"),$("validation-alert-box").show(),this.centerElement($("validation-alert-box"),{}),$("validation-alert-box-mask").show(),$("validation-alert-box-mask").setStyle({height:document.body.getHeight()+"px"})},notify:function(e){e.dialogId&&$(e.dialogId)&&$(e.dialogId).remove(),"undefined"==typeof e.topClose&&(e.topClose=!0),null===this.dialogTemplate&&(this.dialogTemplate=$("dialog-template").innerHTML,Mustache.parse(this.dialogTemplate)),$(document.body).insert(Mustache.render(this.dialogTemplate,e)),
dialog=$$("body .dialog-contain").last(),"buttons"in e&&dialog.on("click",".btn.custom",function(e,t){t.stop();var i=$(t.target),a=i.readAttribute("data-id"),r=e.filter(function(e){return"id"in e&&e.id==a}).first();"onclick"in r&&r.onclick(t)}.bind(this,e.buttons)),dialog.on("click",".dialog-close",function(e){e.stop(),$(e.target).up(".dialog-contain").remove()}),this.centerElement(dialog.down(".dialog-box"),{}),$$(".dialog-box-mask").last().setStyle({height:document.body.getHeight()+"px"})},centerElement:function(e,t){limitX=void 0!=typeof t.limitX?t.limitX:0,limitY=void 0!=typeof t.limitY?t.limitY:0;var i=e.getDimensions(),a=document.viewport.getDimensions(),r=$(document.body).getDimensions(),o=document.viewport.getScrollOffsets(),n=a.width/2+o.left-i.width/2,d=Math.min(a.height,r.height)/2+o.top-i.height/2;limitX&&n<limitX&&(n=parseInt(limitX)),limitY&&d<limitY&&(d=parseInt(limitY)),e.setStyle({position:"absolute",top:Math.floor(d)+"px",left:Math.floor(n)+"px"})},closeMissingFieldsAlert:function(){$("validation-alert-box").hide(),$("validation-alert-box-mask").hide()},requireField:function(e,t){var i=$F(e);return i.length>0&&"http://"!=i||(alert("Please enter the "+t+"."),$(e).focus(),!1)},requireMapInput:function(){return""!=$F("qrcode-data-map-longitude")||(alert("Please click a position on the map."),!1)},requireOneField:function(e,t){for(var i=0;i<e.length;++i)if($F(e[i]).length>0)return!0;return alert("Please enter the "+t+"."),$(e[0]).focus(),!1},setMedia:function(e){$("qrcode-media").value=e},showTypeBanner:function(e,t){var i=null===e||this.typeHasSubtype(e)&&null===t?null:$("qrcode-data-banner-"+e);$$(".qrcode-data-banner").each(function(e){e===i?e.show():e.hide()})},updateSubtype:function(){var e=this.selectedType(),t=this.selectedSubtype();if(this.showTypeBanner(e,t),$("qrcode-data-TWITTER-subtype-TWITTER-info").hide(),$("qrcode-data-TWITTER-subtype-TWITTER_STATUS-info").hide(),$("qrcode-data-FACEBOOK-subtype-FACEBOOK-info").hide(),$("qrcode-data-FACEBOOK-subtype-FACEBOOK_LIKE-info").hide(),$("qrcode-data-LINKEDIN-subtype-LINKEDIN-info").hide(),$("qrcode-data-LINKEDIN-subtype-LINKEDIN_SHARE-info").hide(),$("qrcode-data-VCARD-subtype-VCARD-info").hide(),$("qrcode-data-VCARD-subtype-MECARD-info").hide(),null!=t){var i=e+"."+t,a=$("qrcode-data-container-"+e);a.down(".qrcode-data-subtype-seperator").show(),"undefined"!=typeof this.mandatoryShortUrlTypes[i]?this.setShortUrlUIState("forced"):"undefined"!=typeof this.optionalShortUrlTypes[i]?($("qrcode-shorturl-"+(this.optionalShortUrlTypes[i].state?"yes":"no")).checked=!0,this.setShortUrlUIState("optional")):this.setShortUrlUIState("unavailable"),$("qrcode-data-"+e+"-subtype-"+t+"-info").show(),allSubtypeBlock=$("qrcode-data-"+e+"-subtype-ALL-info"),allSubtypeBlock&&allSubtypeBlock.show()}},setShortUrlUIState:function(e){"optional"===e?($("qrcode-shorturl-container").show(),$("qrcode-mandatory-shorturl-container").hide(),$("qrcode-unavailable-shorturl-container").hide()):"forced"===e?($("qrcode-shorturl-container").hide(),$("qrcode-mandatory-shorturl-container").show(),$("qrcode-unavailable-shorturl-container").hide()):"unavailable"===e?($("qrcode-shorturl-container").hide(),$("qrcode-mandatory-shorturl-container").hide(),$("qrcode-unavailable-shorturl-container").show()):($("qrcode-shorturl-container").hide(),$("qrcode-mandatory-shorturl-container").hide(),$("qrcode-unavailable-shorturl-container").hide())},prependHttpIfMissing:function(e){var t=/^https?:\/\//i;return t.test(e)?e:"http://"+e},validateEmailAddress:function(e){return e.match(/^[^@]+@[^@]+$/)},validateEmailCodeForm:function(){if(!(QRStuff.requireField("sender_name_field","sender name")&&QRStuff.requireField("sender_email_address_field","sender email address")&&QRStuff.requireField("recipient_name_field","recipient name")&&QRStuff.requireField("recipient_email_address_field","recipient email address")&&QRStuff.requireField("subject_field","email subject")&&QRStuff.requireField("body_field","email body")))return!1;var e=$F("sender_name_field"),t=$F("sender_email_address_field");if(e==t)return alert("The sender name and email address should not be the same."),!1;if(!this.validateEmailAddress(t))return alert("Please enter a single valid email address of the form user@example.com."),!1;var i=$F("recipient_name_field"),a=$F("recipient_email_address_field");return i==a?(alert("The recipient name and email address should not be the same."),!1):!!this.validateEmailAddress(a)||(alert("Please enter a single valid email address of the form user@example.com."),!1)},updateVcardType:function(){var e=this.selectedSubtype();"MECARD"==e?($("qrcode-data-vcard-vcard-note-container").hide(),$("qrcode-data-vcard-honorific-container").hide(),$("qrcode-data-vcard-fax-number-container").hide(),$("qrcode-data-vcard-cell-number-container").hide(),$$(".mecard-only").each(function(e){e.show()}),$$(".vcard-only").each(function(e){e.hide()}),$$(".required-if-mecard").each(function(e){e.show()})):($("qrcode-data-vcard-vcard-note-container").show(),$("qrcode-data-vcard-honorific-container").show(),$("qrcode-data-vcard-fax-number-container").show(),$("qrcode-data-vcard-cell-number-container").show(),$$(".mecard-only").each(function(e){e.hide()}),$$(".vcard-only").each(function(e){e.show()}),$$(".required-if-mecard").each(function(e){e.hide()}))},getDateTimeInput:function(e){var t=$F(e+"-day"),i=$F(e+"-month"),a=$F(e+"-year"),r=$F(e+"-hour"),o=$F(e+"-minute");return a+"-"+i+"-"+t+"T"+r+":"+o+":00"},fixPaypalBuyItemValue:function(){$("qrcode-data-paypal-buy-item-value").value=this.fixCurrencyAmountString($F("qrcode-data-paypal-buy-item-value"))},updateAppDownloadChecked:function(){var e=/qrcode-data-app-download-checkbox-(.*)/;$("qrcode-data-container-APP_DOWNLOAD").select(".app-download-check").each(function(t){var i=e.exec(t.id)[1];t.checked?$("qrcode-data-app-download-div-"+i).show():$("qrcode-data-app-download-div-"+i).hide()}),this.scheduleRefreshPreview()},fixCurrencyAmountString:function(e){var t=e.match(/([0-9]+(\.[0-9]{2})?)$/);if(!t)return"";var i=t[1];return t[2]||(i+=".00"),i},submitAndRefer:function(e,t){return"string"==typeof e&&(e={eventAction:e}),$("qrcode-refer-to").value=e.eventAction,$("qrcode-refer-symbols").value="undefined"==typeof t?"":Object.toJSON(t),this.setMediaAndSubmit("refer",e,!0)},setMediaAndSubmit:function(e,t,i){return!!this.validateAndAlertQRCodeForm()&&("string"==typeof t&&(t={eventAction:t}),event={event:"Analytics Legacy Event",eventCategory:"Outbound"},t.eventAction&&(event.eventAction=t.eventAction),t.eventLabel&&(event.eventLabel=t.eventLabel),dataLayer.push(event),this.setMedia(e),i&&$("qrcode-data-form").setAttribute("target","_blank"),$("qrcode-data-form").submit(),$("qrcode-data-form").setAttribute("target","_self"),!0)},sanitizeTelephoneNumber:function(e){return e.replace(/[^0-9x*+]/g,"")},formatNumber:function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},limitCharacters:function(e,t){var i=$(e).value;i.length>t&&($(e).value=i.substring(0,t)),$(e+"-counter").update(this.formatNumber(Math.min(i.length,t)))},selectedType:function(){return el=$("qrcode-type-code"),el?el.getValue():null},selectedSubtype:function(e){switch(void 0===e&&(e=this.selectedType()),e){case"VCARD":case"TWITTER":case"FACEBOOK":case"LINKEDIN":return firstSubtypeRadio=$("qrcode-data-container-"+e).down("input[type=radio]"),$RF(firstSubtypeRadio);default:return null}},selectedFullType:function(){var e=this.selectedType(),t=e?this.selectedSubtype(e):null;return t?e+"."+t:e},validateQRCodeForm:function(){var e=this.selectedType(),t=this.selectedSubtype(),i=new Hash;if(null!==t&&"undefined"!=typeof this.validationDefinitions[e+":"+t])var a=this.validationDefinitions[e+":"+t];else{if("undefined"==typeof this.validationDefinitions[e])return"undefined"!=typeof console&&console.error("Unknown type "+e),!1;var a=this.validationDefinitions[e]}for(var r=a.rules.concat(this.validationDefinitions.ALL.rules),o=!0,n=0;n<r.length;n++){var d=Object.clone(r[n]);i.get(d.field)||this.validateRunRule(d)||(o=!1,i.set(d.field,d.requestText))}return this.requestFields=i,o},isValidUrlInput:function(e){return!/<.+>/.match(e)&&!(!/[^.]\.[^.]/.match(e)&&!/^[a-zA-Z]*:\/\//.match(e))},isValidBitcoinAddress:function(e){return!!/^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/.match(e)&&(this.btcValidationCache.hasOwnProperty(e)||(req=new Ajax.Request("generate.validate-bitcoin-address",{asynchronous:!1,method:"get",parameters:{address:e}}),this.btcValidationCache[e]="1"===req.transport.responseText),this.btcValidationCache[e])},validateRunRule:function(e){if("require_subscription"==e.type)return QRStuff.clientLoggedIn&&QRStuff.client.isActive;var t=$(e.field);if(!t)return!1;var i="radio"==t.type?$RF(t):t.value,a=this.trimString(i);if("undefined"!=typeof e.where&&(whereFieldEl=$(e.where.field),whereFieldVal="radio"==whereFieldEl.type?$RF(whereFieldEl):whereFieldEl.value,whereFieldVal!==e.where.equals))return!0;switch(e.type){case"required":if(""==i||null==i||"http://"==i)return!1;break;case"validate":if(!e.validate(e.field,i,e))return!1;break;case"required_url":return""!=a&&null!=a&&"http://"!=a&&this.isValidUrlInput(a);case"url":return""==a||null==a||"http://"==a||this.isValidUrlInput(a);case"required_phone":if(""==this.sanitizeTelephoneNumber(a)||null==a||"http://"==a)return!1;break;case"required_email":if(!this.validateEmailAddress(i))return!1;break;case"max_length":if(i.length>e.max_length)return!1}return!0},trimString:function(e){return null==e?null:e.replace(/^\s+|\s+$/,"")},initValidationDefinitions:function(){this.validationDefinitions={ALL:{rules:[{type:"required",field:"width_pixels_field",requestText:"Size"},{type:"validate",field:"width_pixels_field",requestText:"Size must be a number",validate:function(e,t){return!isNaN(parseInt(t))}},{type:"validate",field:"width_pixels_field",requestText:"Size must not be more than 3000 pixels",validate:function(e,t){return parseInt(t)<=3e3}}]},TEXT:{rules:[{type:"required",field:"qrcode-data-text",requestText:"Text content"},{type:"validate",field:"qrcode-data-text",requestText:"Text content for static codes must be shorter than "+this.formatNumber(this.maxTextLengthStatic)+" characters",validate:function(e,t){return"1"==$RF("qrcode-shorturl-yes")||t.length<=this.maxTextLengthStatic}.bind(this)},{type:"validate",field:"qrcode-data-text",requestText:"Text content must be shorter than "+this.formatNumber(this.maxTextLengthDynamic)+" characters",validate:function(e,t){return"1"!==$RF("qrcode-shorturl-yes")||t.length<=this.maxTextLengthDynamic}.bind(this)}]},URL:{rules:[{type:"required_url",field:"qrcode-data-url",requestText:"Website URL"},{type:"required",where:{field:"qrcode-google-campaign-yes",equals:"1"},field:"qrcode-data-campaign-source",requestText:"Google Campaign Source"},{type:"required",where:{field:"qrcode-google-campaign-yes",equals:"1"},field:"qrcode-data-campaign-medium",requestText:"Google Campaign Medium"},{type:"required",where:{field:"qrcode-google-campaign-yes",equals:"1"},field:"qrcode-data-campaign-name",requestText:"Google Campaign Name"}]},TEL:{rules:[{type:"required",field:"qrcode-data-tel-number",requestText:"Telephone number"},{type:"required_phone",field:"qrcode-data-tel-number",requestText:"A valid Telephone Number"}]},SKYPE:{rules:[{type:"required",field:"qrcode-data-skype-username",requestText:"Skype Username"}]},SMSTO:{rules:[{type:"required",field:"qrcode-data-smsto-number",requestText:"Telephone number"},{type:"required_phone",field:"qrcode-data-smsto-number",requestText:"A valid Telephone Number"}]},MAILTO:{rules:[{type:"required",field:"qrcode-data-mailto-email-address",requestText:"Email address"},{type:"required_email",field:"qrcode-data-mailto-email-address",requestText:"A valid Email address"}]},MATMSG:{rules:[{type:"required",field:"qrcode-data-matmsg-email-address",requestText:"Email address"},{type:"required_email",field:"qrcode-data-matmsg-email-address",requestText:"A valid Email address"},{type:"required",field:"qrcode-data-matmsg-subject",requestText:"Email message subject"},{type:"required",field:"qrcode-data-matmsg-body",requestText:"Email message contents"}]},VCARD:{rules:[{type:"required",field:"qrcode-data-VCARD-subtype-VCARD",requestText:"Select your Contact Details QR code type"}]},"VCARD:VCARD":{rules:[{type:"required",field:"qrcode-data-vcard-first-name",requestText:"First Name"},{type:"required",field:"qrcode-data-vcard-tel-number",requestText:"Telephone Number"},{type:"required_phone",field:"qrcode-data-vcard-tel-number",requestText:"A valid Telephone Number"}]},"VCARD:MECARD":{rules:[{type:"required",field:"qrcode-data-vcard-first-name",requestText:"First Name"},{type:"required",field:"qrcode-data-vcard-tel-number",requestText:"Telephone Number"},{type:"required_phone",field:"qrcode-data-vcard-tel-number",requestText:"A valid Telephone Number"}]},DIGITAL_BUSINESS_CARD:{rules:[{type:"required",field:"qrcode-data-dbc-url",requestText:"Create New Card first"},{type:"required",field:"qrcode-data-dbc-id",requestText:"Create New Card first"}]},MAPS:{rules:[{type:"required",field:"qrcode-data-map-latitude",requestText:"A valid location"},{type:"required",field:"qrcode-data-map-longitude",requestText:"A valid location"}]},WIFI:{rules:[{type:"required",field:"qrcode-data-wifi-ssid",requestText:"SSID"},{type:"validate",field:"qrcode-data-wifi-password",requestText:"Password",validate:function(e,t){var i=$("qrcode-data-wifi-network-type").value;return"nopass"==i||""!=t}.bind(this)}]},TWITTER:{rules:[{type:"required",field:"qrcode-data-TWITTER-subtype-TWITTER",requestText:"Select your Twitter QR code type"}]},"TWITTER:TWITTER":{rules:[{type:"required",field:"qrcode-data-TWITTER-username",requestText:"Twitter user name"}]},"TWITTER:TWITTER_STATUS":{rules:[{type:"required",field:"qrcode-data-TWITTER_STATUS-tweet",requestText:"Twitter message"}]},FACEBOOK:{rules:[{type:"required",field:"qrcode-data-FACEBOOK-subtype-FACEBOOK",requestText:"Select your Facebook QR code type"}]},"FACEBOOK:FACEBOOK":{rules:[{type:"required_url",field:"qrcode-data-FACEBOOK-url",requestText:"Facebook Page URL"},{type:"validate",field:"qrcode-data-FACEBOOK-url",requestText:"Valid Facebook URL",validate:function(e,t){if(""===t)return!0;if(!this.isValidUrlInput(t))return!1;var i=/^((https?:)?\/\/)?([a-zA-Z.]+)?[^\/]*(facebook.com|fb.me|fb.com)(\/|$)/;return i.match(t)}.bind(this)}]},"FACEBOOK:FACEBOOK_LIKE":{rules:[{type:"required_url",field:"qrcode-data-FACEBOOK_LIKE-url",requestText:"URL of page to be liked"},{type:"required",field:"qrcode-data-FACEBOOK_LIKE-title",requestText:"Page title"}]},LINKEDIN:{rules:[{type:"required",field:"qrcode-data-LINKEDIN-subtype-LINKEDIN",requestText:"Select your LinkedIn QR code type"}]},"LINKEDIN:LINKEDIN":{rules:[{type:"required_url",field:"qrcode-data-LINKEDIN-url",requestText:"Public profile URL"}]},"LINKEDIN:LINKEDIN_SHARE":{rules:[{type:"required_url",field:"qrcode-data-LINKEDIN_SHARE-url",requestText:"URL of page to be shared"}]},INSTAGRAM:{rules:[{type:"required",field:"qrcode-data-instagram-username",requestText:"Instagram User Name"}]},FOURSQUARE:{rules:[{type:"required_url",field:"qrcode-data-FOURSQUARE-url",requestText:"FourSquare venue URL"},{type:"validate",field:"qrcode-data-FOURSQUARE-url",requestText:"FourSquare venue URL ending with a venue ID",validate:function(e,t){var i=/\/([a-z0-9]+)$/;return i.match(t)}.bind(this)}]},PAYPAL_BUY:{rules:[{type:"required",field:"qrcode-data-paypal-buy-account-email-address",requestText:"Paypal account email address"},{type:"required_email",field:"qrcode-data-paypal-buy-account-email-address",requestText:"Valid paypal account email address"},{type:"required",field:"qrcode-data-paypal-buy-item-description",requestText:"Item description"},{type:"required",field:"qrcode-data-paypal-buy-item-value",requestText:"Item value"}]},PDF:{rules:[{type:"required",field:"qrcode-data-pdf-idfs-file",requestText:"PDF File Upload"}]},IMAGE:{rules:[{type:"required",field:"qrcode-data-image-idfs-file",requestText:"Image File Upload"}]},BITCOIN:{rules:[{type:"required",field:"qrcode-data-bitcoin-address",requestText:"Bitcoin Address"},{type:"validate",field:"qrcode-data-bitcoin-address",requestText:"Valid Bitcoin Address",validate:function(e,t){return this.isValidBitcoinAddress(t)}.bind(this)},{type:"validate",field:"qrcode-data-bitcoin-amount",requestText:"Valid Amount",validate:function(e,t){return!/[^0-9., ]/.match(t)}.bind(this)}]},ATTENDANCE:{rules:[{type:"require_subscription",field:"require_subscription",requestText:"Only subscribers can use this feature"},{type:"required",field:"qrcode-data-attendance-idgoogle-sheet",requestText:"Please select a spreadsheet"},{type:"validate",field:"qrcode-data-attendance-idgoogle-sheet",requestText:"Please allow us access to sheets in your google account",validate:function(e,t){return this.confirmRequestGoogleAccessToken()}.bind(this)}]},VCALENDAR:{rules:[{type:"required",field:"qrcode-data-vcalendar-event-name",requestText:"Event name"}]},APP_DOWNLOAD:{rules:[{type:"validate",field:"qrcode-data-app-download-checkbox-itunes",requestText:"Please select an app store",validate:function(e,t){var i=!1;return QRStuff.marketTypes.each(function(e){if($("qrcode-data-app-download-checkbox-"+e).checked)throw i=!0,$break}),i}.bind(this)},{type:"validate",field:"qrcode-data-app-download-url-itunes",requestText:"iTunes App Store Link",validate:function(e,t){return!$("qrcode-data-app-download-checkbox-itunes").checked||(t=this.trimString(t),!!this.isValidUrlInput(t)&&(""!==t&&"http://"!=t))}.bind(this)},{type:"validate",field:"qrcode-data-app-download-url-itunes-ipad",requestText:"iTunes App Store Link (iPad Version)",validate:function(e,t){return!$("qrcode-data-app-download-checkbox-itunes-ipad").checked||(t=this.trimString(t),!!this.isValidUrlInput(t)&&(""!==t&&"http://"!=t))}.bind(this)},{type:"validate",field:"qrcode-data-app-download-url-google-play",requestText:" Google Play App Link",validate:function(e,t){return!$("qrcode-data-app-download-checkbox-google-play").checked||(t=this.trimString(t),!!this.isValidUrlInput(t)&&(""!==t&&"http://"!=t))}.bind(this)},{type:"validate",field:"qrcode-data-app-download-url-blackberry-app-world",requestText:"BlackBerry App World Link (Legacy App)",validate:function(e,t){return!$("qrcode-data-app-download-checkbox-blackberry-app-world").checked||(t=this.trimString(t),!!this.isValidUrlInput(t)&&(""!==t&&"http://"!=t))}.bind(this)},{type:"validate",field:"qrcode-data-app-download-url-blackberry-ten-app-world",requestText:"BlackBerry App World Link (BB10 App)",validate:function(e,t){return!$("qrcode-data-app-download-checkbox-blackberry-ten-app-world").checked||(t=this.trimString(t),!!this.isValidUrlInput(t)&&(""!==t&&"http://"!=t))}.bind(this)},{type:"validate",field:"qrcode-data-app-download-url-windows-marketplace",requestText:"Windows Marketplace App Link",validate:function(e,t){return!$("qrcode-data-app-download-checkbox-windows-marketplace").checked||(t=this.trimString(t),!!this.isValidUrlInput(t)&&(""!==t&&"http://"!=t))}.bind(this)},{type:"required_url",field:"qrcode-data-app-download-url-fallback",requestText:"Fallback URL"}]},ITUNES_LINK:{rules:[{type:"required_url",field:"qrcode-data-ITUNES_LINK",requestText:"iTunes link URL"}]},DROPBOX:{rules:[{type:"required_url",field:"qrcode-data-dropbox-url",requestText:"Dropbox Link"}]},YOUTUBE:{rules:[{type:"validate",field:"qrcode-data-youtube-video-url",requestText:"Valid Youtube Video URL",validate:function(e,t){if(""==t)return!0;if(!this.isValidUrlInput(t))return!1;var i=/^((https?:)?\/\/)?([a-zA-Z.]+)?youtu.*\.[^.]/;return i.match(t)}.bind(this)},{type:"validate",field:"qrcode-data-youtube-video-id",requestText:"Put YouTube URLs in the Video URL field, not the Video ID field",validate:function(e,t){var i=/:\/\//;return!i.match(t)}.bind(this)},{type:"validate",field:"qrcode-data-youtube-video-id",requestText:"Video ID or video URL",validate:function(e,t){var i=this.trimString($("qrcode-data-youtube-video-url").value);return""!=t||""!=i&&"http://"!=i}.bind(this)}]}}}};document.observe("dom:loaded",function(){"undefined"!=typeof qrstuffAppData&&QRStuff.init(qrstuffAppData)});