// cal-heatmap@4.2.4 downloaded from https://ga.jspm.io/npm:cal-heatmap@4.2.4/dist/cal-heatmap.esm.js

import{select as e}from"d3-selection";import{hcl as r}from"d3-color";import{ascending as n,timeSecond as c,timeMinute as v,timeHour as f,timeDay as p,timeWeek as g,timeMonth as b,timeYear as w,timeMonday as _,timeTuesday as x,timeWednesday as k,timeThursday as C,timeFriday as P,timeSaturday as j,timeSunday as E,utcSecond as T,utcMinute as A,utcHour as L,utcDay as I,utcWeek as R,utcMonth as N,utcYear as W,utcMonday as G,utcTuesday as H,utcWednesday as z,utcThursday as Y,utcFriday as U,utcSaturday as q,utcSunday as B,range as V,descending as K,symbolAsterisk as Q,symbolCircle as Z,symbolCross as J,symbolDiamond as X,symbolDiamond2 as tt,symbolPlus as et,symbolSquare as rt,symbolSquare2 as nt,symbolStar as it,symbolTimes as ot,symbolTriangle as st,symbolTriangle2 as ut,symbolWye as ct,schemeAccent as lt,schemeCategory10 as vt,schemeDark2 as ft,schemePaired as ht,schemePastel1 as dt,schemePastel2 as pt,schemeSet1 as mt,schemeSet2 as yt,schemeSet3 as gt,schemeTableau10 as bt,schemeBrBG as wt,interpolateBrBG as _t,schemePRGn as xt,interpolatePRGn as St,schemePiYG as Ot,interpolatePiYG as kt,schemePuOr as Ct,interpolatePuOr as Pt,schemeRdBu as Dt,interpolateRdBu as jt,schemeRdGy as Mt,interpolateRdGy as Et,schemeRdYlBu as Tt,interpolateRdYlBu as At,schemeRdYlGn as Lt,interpolateRdYlGn as $t,schemeSpectral as Ft,interpolateSpectral as It,schemeBlues as Rt,interpolateBlues as Nt,schemeGreens as Wt,interpolateGreens as Gt,schemeGreys as Ht,interpolateGreys as zt,schemeOranges as Yt,interpolateOranges as Ut,schemePurples as qt,interpolatePurples as Bt,schemeReds as Vt,interpolateReds as Kt,interpolateTurbo as Qt,interpolateViridis as Zt,interpolateMagma as Jt,interpolateInferno as Xt,interpolatePlasma as te,interpolateCividis as ee,interpolateCubehelixDefault as re,interpolateWarm as ne,interpolateCool as ae,schemeBuGn as ie,interpolateBuGn as oe,schemeBuPu as se,interpolateBuPu as ue,schemeGnBu as ce,interpolateGnBu as le,schemeOrRd as ve,interpolateOrRd as fe,schemePuBu as he,interpolatePuBu as de,schemePuBuGn as pe,interpolatePuBuGn as me,schemePuRd as ye,interpolatePuRd as ge,schemeRdPu as be,interpolateRdPu as we,schemeYlGn as _e,interpolateYlGn as xe,schemeYlGnBu as Se,interpolateYlGnBu as Oe,schemeYlOrBr as ke,interpolateYlOrBr as Ce,schemeYlOrRd as Pe,interpolateYlOrRd as De,interpolateRainbow as je,interpolateSinebow as Me,quantize as Ee,interpolateNumber as Te,interpolateRgb as Ae,interpolateHsl as Le,interpolateHcl as $e,interpolateLab as Fe,extent as Ie,reverse as Re,interpolateRound as Ne,scaleLinear as We,scalePow as Ge,scaleLog as He,scaleSymlog as ze,scaleQuantile as Ye,ticks as Ue,scaleThreshold as qe,scaleIdentity as Be,min as Ve,max as Ke,quantile as Qe,median as Ze,piecewise as Je,scaleDiverging as Xe,scaleDivergingPow as tr,scaleDivergingLog as er,scaleDivergingSymlog as rr,scaleTime as nr,scaleUtc as ar,scaleImplicit as ir,scaleOrdinal as or,scalePoint as sr,scaleBand as ur,InternSet as cr,sort as lr,symbolsStroke as vr,symbolsFill as fr}from"d3";import{text as hr,dsv as dr,csv as pr,json as mr}from"d3-fetch";function _iterableToArrayLimit(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var c,v,f,p,g=[],b=!0,w=!1;try{if(f=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;b=!1}else for(;!(b=(c=f.call(n)).done)&&(g.push(c.value),g.length!==r);b=!0);}catch(e){w=!0,v=e}finally{try{if(!b&&null!=n.return&&(p=n.return(),Object(p)!==p))return}finally{if(w)throw v}}return g}}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,c=Object.defineProperty||function(e,r,n){e[r]=n.value},v="function"==typeof Symbol?Symbol:{},f=v.iterator||"@@iterator",p=v.asyncIterator||"@@asyncIterator",g=v.toStringTag||"@@toStringTag";function define(e,r,n){return Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{define({},"")}catch(e){define=function(e,r,n){return e[r]=n}}function wrap(e,r,n,v){var f=r&&r.prototype instanceof Generator?r:Generator,p=Object.create(f.prototype),g=new Context(v||[]);return c(p,"_invoke",{value:makeInvokeMethod(e,n,g)}),p}function tryCatch(e,r,n){try{return{type:"normal",arg:e.call(r,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap;var b={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var w={};define(w,f,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(values([])));x&&x!==r&&n.call(x,f)&&(w=x);var k=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(w);function defineIteratorMethods(e){["next","throw","return"].forEach((function(r){define(e,r,(function(e){return this._invoke(r,e)}))}))}function AsyncIterator(e,r){function invoke(c,v,f,p){var g=tryCatch(e[c],e,v);if("throw"!==g.type){var b=g.arg,w=b.value;return w&&"object"==typeof w&&n.call(w,"__await")?r.resolve(w.__await).then((function(e){invoke("next",e,f,p)}),(function(e){invoke("throw",e,f,p)})):r.resolve(w).then((function(e){b.value=e,f(b)}),(function(e){return invoke("throw",e,f,p)}))}p(g.arg)}var v;c(this,"_invoke",{value:function(e,n){function callInvokeWithMethodAndArg(){return new r((function(r,c){invoke(e,n,r,c)}))}return v=v?v.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var c="suspendedStart";return function(v,f){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===v)throw f;return doneResult()}for(n.method=v,n.arg=f;;){var p=n.delegate;if(p){var g=maybeInvokeDelegate(p,n);if(g){if(g===b)continue;return g}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===c)throw c="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);c="executing";var w=tryCatch(e,r,n);if("normal"===w.type){if(c=n.done?"completed":"suspendedYield",w.arg===b)continue;return{value:w.arg,done:n.done}}"throw"===w.type&&(c="completed",n.method="throw",n.arg=w.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,c=e.iterator[n];if(void 0===c)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var v=tryCatch(c,e.iterator,r.arg);if("throw"===v.type)return r.method="throw",r.arg=v.arg,r.delegate=null,b;var f=v.arg;return f?f.done?(r[e.resultName]=f.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,b):f:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function pushTryEntry(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function resetTryEntry(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var r=e[f];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var c=-1,v=function next(){for(;++c<e.length;)if(n.call(e,c))return next.value=e[c],next.done=!1,next;return next.value=void 0,next.done=!0,next};return v.next=v}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,c(k,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),c(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,g,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===GeneratorFunction||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,g,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,p,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(r,n,c,v,f){void 0===f&&(f=Promise);var p=new AsyncIterator(wrap(r,n,c,v),f);return e.isGeneratorFunction(n)?p:p.next().then((function(e){return e.done?e.value:p.next()}))},defineIteratorMethods(k),define(k,g,"Generator"),define(k,f,(function(){return this})),define(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=Object(e),n=[];for(var c in r)n.push(c);return n.reverse(),function next(){for(;n.length;){var e=n.pop();if(e in r)return next.value=e,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function handle(n,c){return f.type="throw",f.arg=e,r.next=n,c&&(r.method="next",r.arg=void 0),!!c}for(var c=this.tryEntries.length-1;c>=0;--c){var v=this.tryEntries[c],f=v.completion;if("root"===v.tryLoc)return handle("end");if(v.tryLoc<=this.prev){var p=n.call(v,"catchLoc"),g=n.call(v,"finallyLoc");if(p&&g){if(this.prev<v.catchLoc)return handle(v.catchLoc,!0);if(this.prev<v.finallyLoc)return handle(v.finallyLoc)}else if(p){if(this.prev<v.catchLoc)return handle(v.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<v.finallyLoc)return handle(v.finallyLoc)}}}},abrupt:function(e,r){for(var c=this.tryEntries.length-1;c>=0;--c){var v=this.tryEntries[c];if(v.tryLoc<=this.prev&&n.call(v,"finallyLoc")&&this.prev<v.finallyLoc){var f=v;break}}f&&("break"===e||"continue"===e)&&f.tryLoc<=r&&r<=f.finallyLoc&&(f=null);var p=f?f.completion:{};return p.type=e,p.arg=r,f?(this.method="next",this.next=f.finallyLoc,b):this.complete(p)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),b},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),resetTryEntry(n),b}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===e){var c=n.completion;if("throw"===c.type){var v=c.arg;resetTryEntry(n)}return v}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),b}},e}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var c=r[n];c.enumerable=c.enumerable||false;c.configurable=true;"value"in c&&(c.writable=true);Object.defineProperty(e,_toPropertyKey(c.key),c)}}function _createClass(e,r,n){r&&_defineProperties(e.prototype,r);n&&_defineProperties(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function _defineProperty(e,r,n){r=_toPropertyKey(r);r in e?Object.defineProperty(e,r,{value:n,enumerable:true,configurable:true,writable:true}):e[r]=n;return e}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _unsupportedIterableToArray(e,r){if(e){if(typeof e==="string")return _arrayLikeToArray(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);n==="Object"&&e.constructor&&(n=e.constructor.name);return n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,c=new Array(r);n<r;n++)c[n]=e[n];return c}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toPrimitive(e,r){if(typeof e!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var c=n.call(e,r||"default");if(typeof c!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function _toPropertyKey(e){var r=_toPrimitive(e,"string");return typeof r==="symbol"?r:String(r)}var yr=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var check=function(e){return e&&e.Math===Math&&e};var gr=check(typeof globalThis=="object"&&globalThis)||check(typeof window=="object"&&window)||check(typeof self=="object"&&self)||check(typeof yr=="object"&&yr)||check(typeof yr=="object"&&yr)||function(){return this}()||Function("return this")();var br={exports:{}};var wr=gr;var _r=Object.defineProperty;var defineGlobalProperty$3=function(e,r){try{_r(wr,e,{value:r,configurable:true,writable:true})}catch(n){wr[e]=r}return r};var xr=gr;var Sr=defineGlobalProperty$3;var Or="__core-js_shared__";var kr=xr[Or]||Sr(Or,{});var Cr=kr;var Pr=Cr;(br.exports=function(e,r){return Pr[e]||(Pr[e]=r!==void 0?r:{})})("versions",[]).push({version:"3.34.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Dr=br.exports;var fails$u=function(e){try{return!!e()}catch(e){return true}};var jr=fails$u;var Mr=!jr((function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")}));var Er=Mr;var Tr=Function.prototype;var Ar=Tr.call;var Lr=Er&&Tr.bind.bind(Ar,Ar);var $r=Er?Lr:function(e){return function(){return Ar.apply(e,arguments)}};var isNullOrUndefined$8=function(e){return e===null||e===void 0};var Fr=isNullOrUndefined$8;var Ir=TypeError;var requireObjectCoercible$7=function(e){if(Fr(e))throw new Ir("Can't call method on "+e);return e};var Rr=requireObjectCoercible$7;var Nr=Object;var toObject$a=function(e){return Nr(Rr(e))};var Wr=$r;var Gr=toObject$a;var Hr=Wr({}.hasOwnProperty);var zr=Object.hasOwn||function hasOwn(e,r){return Hr(Gr(e),r)};var Yr=$r;var Ur=0;var qr=Math.random();var Br=Yr(1..toString);var uid$3=function(e){return"Symbol("+(e===void 0?"":e)+")_"+Br(++Ur+qr,36)};var Vr=typeof navigator!="undefined"&&String(navigator.userAgent)||"";var Kr=gr;var Qr=Vr;var Zr=Kr.process;var Jr=Kr.Deno;var Xr=Zr&&Zr.versions||Jr&&Jr.version;var tn=Xr&&Xr.v8;var en,rn;if(tn){en=tn.split(".");rn=en[0]>0&&en[0]<4?1:+(en[0]+en[1])}if(!rn&&Qr){en=Qr.match(/Edge\/(\d+)/);if(!en||en[1]>=74){en=Qr.match(/Chrome\/(\d+)/);en&&(rn=+en[1])}}var nn=rn;var an=nn;var sn=fails$u;var un=gr;var cn=un.String;var ln=!!Object.getOwnPropertySymbols&&!sn((function(){var e=Symbol("symbol detection");return!cn(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&an&&an<41}));var vn=ln;var fn=vn&&!Symbol.sham&&typeof Symbol.iterator=="symbol";var hn=gr;var dn=Dr;var pn=zr;var mn=uid$3;var yn=ln;var gn=fn;var bn=hn.Symbol;var wn=dn("wks");var _n=gn?bn.for||bn:bn&&bn.withoutSetter||mn;var wellKnownSymbol$m=function(e){pn(wn,e)||(wn[e]=yn&&pn(bn,e)?bn[e]:_n("Symbol."+e));return wn[e]};var xn=wellKnownSymbol$m;var Sn=xn("toStringTag");var On={};On[Sn]="z";var kn=String(On)==="[object z]";var Cn=typeof document=="object"&&document.all;var Pn=typeof Cn=="undefined"&&Cn!==void 0;var Dn={all:Cn,IS_HTMLDDA:Pn};var jn=Dn;var Mn=jn.all;var En=jn.IS_HTMLDDA?function(e){return typeof e=="function"||e===Mn}:function(e){return typeof e=="function"};var Tn={};var An=fails$u;var Ln=!An((function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}));var $n=En;var Fn=Dn;var In=Fn.all;var Rn=Fn.IS_HTMLDDA?function(e){return typeof e=="object"?e!==null:$n(e)||e===In}:function(e){return typeof e=="object"?e!==null:$n(e)};var Nn=gr;var Wn=Rn;var Gn=Nn.document;var Hn=Wn(Gn)&&Wn(Gn.createElement);var documentCreateElement$2=function(e){return Hn?Gn.createElement(e):{}};var zn=Ln;var Yn=fails$u;var Un=documentCreateElement$2;var qn=!zn&&!Yn((function(){return Object.defineProperty(Un("div"),"a",{get:function(){return 7}}).a!==7}));var Bn=Ln;var Vn=fails$u;var Kn=Bn&&Vn((function(){return Object.defineProperty((function(){}),"prototype",{value:42,writable:false}).prototype!==42}));var Qn=Rn;var Zn=String;var Jn=TypeError;var anObject$f=function(e){if(Qn(e))return e;throw new Jn(Zn(e)+" is not an object")};var Xn=Mr;var ta=Function.prototype.call;var ea=Xn?ta.bind(ta):function(){return ta.apply(ta,arguments)};var ra=gr;var na=En;var aFunction=function(e){return na(e)?e:void 0};var getBuiltIn$7=function(e,r){return arguments.length<2?aFunction(ra[e]):ra[e]&&ra[e][r]};var aa=$r;var ia=aa({}.isPrototypeOf);var oa=getBuiltIn$7;var sa=En;var ua=ia;var ca=fn;var la=Object;var va=ca?function(e){return typeof e=="symbol"}:function(e){var r=oa("Symbol");return sa(r)&&ua(r.prototype,la(e))};var fa=String;var tryToString$5=function(e){try{return fa(e)}catch(e){return"Object"}};var ha=En;var da=tryToString$5;var pa=TypeError;var aCallable$a=function(e){if(ha(e))return e;throw new pa(da(e)+" is not a function")};var ma=aCallable$a;var ya=isNullOrUndefined$8;var getMethod$4=function(e,r){var n=e[r];return ya(n)?void 0:ma(n)};var ga=ea;var ba=En;var wa=Rn;var _a=TypeError;var ordinaryToPrimitive$1=function(e,r){var n,c;if(r==="string"&&ba(n=e.toString)&&!wa(c=ga(n,e)))return c;if(ba(n=e.valueOf)&&!wa(c=ga(n,e)))return c;if(r!=="string"&&ba(n=e.toString)&&!wa(c=ga(n,e)))return c;throw new _a("Can't convert object to primitive value")};var xa=ea;var Sa=Rn;var Oa=va;var ka=getMethod$4;var Ca=ordinaryToPrimitive$1;var Pa=wellKnownSymbol$m;var Da=TypeError;var ja=Pa("toPrimitive");var toPrimitive$1=function(e,r){if(!Sa(e)||Oa(e))return e;var n=ka(e,ja);var c;if(n){r===void 0&&(r="default");c=xa(n,e,r);if(!Sa(c)||Oa(c))return c;throw new Da("Can't convert object to primitive value")}r===void 0&&(r="number");return Ca(e,r)};var Ma=toPrimitive$1;var Ea=va;var toPropertyKey$3=function(e){var r=Ma(e,"string");return Ea(r)?r:r+""};var Ta=Ln;var Aa=qn;var La=Kn;var $a=anObject$f;var Fa=toPropertyKey$3;var Ia=TypeError;var Ra=Object.defineProperty;var Na=Object.getOwnPropertyDescriptor;var Wa="enumerable";var Ga="configurable";var Ha="writable";Tn.f=Ta?La?function defineProperty(e,r,n){$a(e);r=Fa(r);$a(n);if(typeof e==="function"&&r==="prototype"&&"value"in n&&Ha in n&&!n[Ha]){var c=Na(e,r);if(c&&c[Ha]){e[r]=n.value;n={configurable:Ga in n?n[Ga]:c[Ga],enumerable:Wa in n?n[Wa]:c[Wa],writable:false}}}return Ra(e,r,n)}:Ra:function defineProperty(e,r,n){$a(e);r=Fa(r);$a(n);if(Aa)try{return Ra(e,r,n)}catch(e){}if("get"in n||"set"in n)throw new Ia("Accessors not supported");"value"in n&&(e[r]=n.value);return e};var za={exports:{}};var Ya=Ln;var Ua=zr;var qa=Function.prototype;var Ba=Ya&&Object.getOwnPropertyDescriptor;var Va=Ua(qa,"name");var Ka=Va&&function something(){}.name==="something";var Qa=Va&&(!Ya||Ya&&Ba(qa,"name").configurable);var Za={EXISTS:Va,PROPER:Ka,CONFIGURABLE:Qa};var Ja=$r;var Xa=En;var ti=Cr;var ei=Ja(Function.toString);Xa(ti.inspectSource)||(ti.inspectSource=function(e){return ei(e)});var ri=ti.inspectSource;var ni=gr;var ai=En;var ii=ni.WeakMap;var oi=ai(ii)&&/native code/.test(String(ii));var createPropertyDescriptor$4=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}};var si=Ln;var ui=Tn;var ci=createPropertyDescriptor$4;var li=si?function(e,r,n){return ui.f(e,r,ci(1,n))}:function(e,r,n){e[r]=n;return e};var vi=Dr;var fi=uid$3;var hi=vi("keys");var sharedKey$3=function(e){return hi[e]||(hi[e]=fi(e))};var di={};var pi=oi;var mi=gr;var yi=Rn;var gi=li;var bi=zr;var wi=Cr;var _i=sharedKey$3;var xi=di;var Si="Object already initialized";var Oi=mi.TypeError;var ki=mi.WeakMap;var Ci,Pi,Di;var enforce=function(e){return Di(e)?Pi(e):Ci(e,{})};var getterFor=function(e){return function(r){var n;if(!yi(r)||(n=Pi(r)).type!==e)throw new Oi("Incompatible receiver, "+e+" required");return n}};if(pi||wi.state){var ji=wi.state||(wi.state=new ki);ji.get=ji.get;ji.has=ji.has;ji.set=ji.set;Ci=function(e,r){if(ji.has(e))throw new Oi(Si);r.facade=e;ji.set(e,r);return r};Pi=function(e){return ji.get(e)||{}};Di=function(e){return ji.has(e)}}else{var Mi=_i("state");xi[Mi]=true;Ci=function(e,r){if(bi(e,Mi))throw new Oi(Si);r.facade=e;gi(e,Mi,r);return r};Pi=function(e){return bi(e,Mi)?e[Mi]:{}};Di=function(e){return bi(e,Mi)}}var Ei={set:Ci,get:Pi,has:Di,enforce:enforce,getterFor:getterFor};var Ti=$r;var Ai=fails$u;var Li=En;var $i=zr;var Fi=Ln;var Ii=Za.CONFIGURABLE;var Ri=ri;var Ni=Ei;var Wi=Ni.enforce;var Gi=Ni.get;var Hi=String;var zi=Object.defineProperty;var Yi=Ti("".slice);var Ui=Ti("".replace);var qi=Ti([].join);var Bi=Fi&&!Ai((function(){return zi((function(){}),"length",{value:8}).length!==8}));var Vi=String(String).split("String");var Ki=za.exports=function(e,r,n){Yi(Hi(r),0,7)==="Symbol("&&(r="["+Ui(Hi(r),/^Symbol\(([^)]*)\)/,"$1")+"]");n&&n.getter&&(r="get "+r);n&&n.setter&&(r="set "+r);(!$i(e,"name")||Ii&&e.name!==r)&&(Fi?zi(e,"name",{value:r,configurable:true}):e.name=r);Bi&&n&&$i(n,"arity")&&e.length!==n.arity&&zi(e,"length",{value:n.arity});try{n&&$i(n,"constructor")&&n.constructor?Fi&&zi(e,"prototype",{writable:false}):e.prototype&&(e.prototype=void 0)}catch(e){}var c=Wi(e);$i(c,"source")||(c.source=qi(Vi,typeof r=="string"?r:""));return e};Function.prototype.toString=Ki((function toString(){return Li(this)&&Gi(this).source||Ri(this)}),"toString");var Qi=za.exports;var Zi=En;var Ji=Tn;var Xi=Qi;var to=defineGlobalProperty$3;var defineBuiltIn$9=function(e,r,n,c){c||(c={});var v=c.enumerable;var f=c.name!==void 0?c.name:r;Zi(n)&&Xi(n,f,c);if(c.global)v?e[r]=n:to(r,n);else{try{c.unsafe?e[r]&&(v=true):delete e[r]}catch(e){}v?e[r]=n:Ji.f(e,r,{value:n,enumerable:false,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e};var eo=$r;var ro=eo({}.toString);var no=eo("".slice);var classofRaw$2=function(e){return no(ro(e),8,-1)};var ao=kn;var io=En;var oo=classofRaw$2;var so=wellKnownSymbol$m;var uo=so("toStringTag");var co=Object;var lo=oo(function(){return arguments}())==="Arguments";var tryGet=function(e,r){try{return e[r]}catch(e){}};var vo=ao?oo:function(e){var r,n,c;return e===void 0?"Undefined":e===null?"Null":typeof(n=tryGet(r=co(e),uo))=="string"?n:lo?oo(r):(c=oo(r))==="Object"&&io(r.callee)?"Arguments":c};var fo=kn;var ho=vo;var po=fo?{}.toString:function toString(){return"[object "+ho(this)+"]"};var mo=kn;var yo=defineBuiltIn$9;var go=po;mo||yo(Object.prototype,"toString",go,{unsafe:true});var bo={};var wo={};var _o={}.propertyIsEnumerable;var xo=Object.getOwnPropertyDescriptor;var So=xo&&!_o.call({1:2},1);wo.f=So?function propertyIsEnumerable(e){var r=xo(this,e);return!!r&&r.enumerable}:_o;var Oo=$r;var ko=fails$u;var Co=classofRaw$2;var Po=Object;var Do=Oo("".split);var jo=ko((function(){return!Po("z").propertyIsEnumerable(0)}))?function(e){return Co(e)==="String"?Do(e,""):Po(e)}:Po;var Mo=jo;var Eo=requireObjectCoercible$7;var toIndexedObject$9=function(e){return Mo(Eo(e))};var To=Ln;var Ao=ea;var Lo=wo;var $o=createPropertyDescriptor$4;var Fo=toIndexedObject$9;var Io=toPropertyKey$3;var Ro=zr;var No=qn;var Wo=Object.getOwnPropertyDescriptor;bo.f=To?Wo:function getOwnPropertyDescriptor(e,r){e=Fo(e);r=Io(r);if(No)try{return Wo(e,r)}catch(e){}if(Ro(e,r))return $o(!Ao(Lo.f,e,r),e[r])};var Go={};var Ho=Math.ceil;var zo=Math.floor;var Yo=Math.trunc||function trunc(e){var r=+e;return(r>0?zo:Ho)(r)};var Uo=Yo;var toIntegerOrInfinity$4=function(e){var r=+e;return r!==r||r===0?0:Uo(r)};var qo=toIntegerOrInfinity$4;var Bo=Math.max;var Vo=Math.min;var toAbsoluteIndex$4=function(e,r){var n=qo(e);return n<0?Bo(n+r,0):Vo(n,r)};var Ko=toIntegerOrInfinity$4;var Qo=Math.min;var toLength$3=function(e){return e>0?Qo(Ko(e),9007199254740991):0};var Zo=toLength$3;var lengthOfArrayLike$9=function(e){return Zo(e.length)};var Jo=toIndexedObject$9;var Xo=toAbsoluteIndex$4;var ts=lengthOfArrayLike$9;var createMethod$4=function(e){return function(r,n,c){var v=Jo(r);var f=ts(v);var p=Xo(c,f);var g;if(e&&n!==n)while(f>p){g=v[p++];if(g!==g)return true}else for(;f>p;p++)if((e||p in v)&&v[p]===n)return e||p||0;return!e&&-1}};var es={includes:createMethod$4(true),indexOf:createMethod$4(false)};var rs=$r;var ns=zr;var as=toIndexedObject$9;var is=es.indexOf;var os=di;var ss=rs([].push);var objectKeysInternal=function(e,r){var n=as(e);var c=0;var v=[];var f;for(f in n)!ns(os,f)&&ns(n,f)&&ss(v,f);while(r.length>c)ns(n,f=r[c++])&&(~is(v,f)||ss(v,f));return v};var us=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];var cs=objectKeysInternal;var ls=us;var vs=ls.concat("length","prototype");Go.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return cs(e,vs)};var fs={};fs.f=Object.getOwnPropertySymbols;var hs=getBuiltIn$7;var ds=$r;var ps=Go;var ms=fs;var ys=anObject$f;var gs=ds([].concat);var bs=hs("Reflect","ownKeys")||function ownKeys(e){var r=ps.f(ys(e));var n=ms.f;return n?gs(r,n(e)):r};var ws=zr;var _s=bs;var xs=bo;var Ss=Tn;var copyConstructorProperties$1=function(e,r,n){var c=_s(r);var v=Ss.f;var f=xs.f;for(var p=0;p<c.length;p++){var g=c[p];ws(e,g)||n&&ws(n,g)||v(e,g,f(r,g))}};var Os=fails$u;var ks=En;var Cs=/#|\.prototype\./;var isForced$3=function(e,r){var n=Ds[Ps(e)];return n===Ms||n!==js&&(ks(r)?Os(r):!!r)};var Ps=isForced$3.normalize=function(e){return String(e).replace(Cs,".").toLowerCase()};var Ds=isForced$3.data={};var js=isForced$3.NATIVE="N";var Ms=isForced$3.POLYFILL="P";var Es=isForced$3;var Ts=gr;var As=bo.f;var Ls=li;var $s=defineBuiltIn$9;var Fs=defineGlobalProperty$3;var Is=copyConstructorProperties$1;var Rs=Es;var _export=function(e,r){var n=e.target;var c=e.global;var v=e.stat;var f,p,g,b,w,_;p=c?Ts:v?Ts[n]||Fs(n,{}):(Ts[n]||{}).prototype;if(p)for(g in r){w=r[g];if(e.dontCallGetSet){_=As(p,g);b=_&&_.value}else b=p[g];f=Rs(c?g:n+(v?".":"#")+g,e.forced);if(!f&&b!==void 0){if(typeof w==typeof b)continue;Is(w,b)}(e.sham||b&&b.sham)&&Ls(w,"sham",true);$s(p,g,w,e)}};var Ns=gr;var Ws=classofRaw$2;var Gs=Ws(Ns.process)==="process";var Hs=$r;var zs=aCallable$a;var functionUncurryThisAccessor=function(e,r,n){try{return Hs(zs(Object.getOwnPropertyDescriptor(e,r)[n]))}catch(e){}};var Ys=En;var Us=String;var qs=TypeError;var aPossiblePrototype$1=function(e){if(typeof e=="object"||Ys(e))return e;throw new qs("Can't set "+Us(e)+" as a prototype")};var Bs=functionUncurryThisAccessor;var Vs=anObject$f;var Ks=aPossiblePrototype$1;var Qs=Object.setPrototypeOf||("__proto__"in{}?function(){var e=false;var r={};var n;try{n=Bs(Object.prototype,"__proto__","set");n(r,[]);e=r instanceof Array}catch(e){}return function setPrototypeOf(r,c){Vs(r);Ks(c);e?n(r,c):r.__proto__=c;return r}}():void 0);var Zs=Tn.f;var Js=zr;var Xs=wellKnownSymbol$m;var tu=Xs("toStringTag");var setToStringTag$5=function(e,r,n){e&&!n&&(e=e.prototype);e&&!Js(e,tu)&&Zs(e,tu,{configurable:true,value:r})};var eu=Qi;var ru=Tn;var defineBuiltInAccessor$3=function(e,r,n){n.get&&eu(n.get,r,{getter:true});n.set&&eu(n.set,r,{setter:true});return ru.f(e,r,n)};var nu=getBuiltIn$7;var au=defineBuiltInAccessor$3;var iu=wellKnownSymbol$m;var ou=Ln;var su=iu("species");var setSpecies$2=function(e){var r=nu(e);ou&&r&&!r[su]&&au(r,su,{configurable:true,get:function(){return this}})};var uu=ia;var cu=TypeError;var anInstance$4=function(e,r){if(uu(r,e))return e;throw new cu("Incorrect invocation")};var lu=$r;var vu=fails$u;var fu=En;var hu=vo;var du=getBuiltIn$7;var pu=ri;var noop=function(){};var mu=[];var yu=du("Reflect","construct");var gu=/^\s*(?:class|function)\b/;var bu=lu(gu.exec);var wu=!gu.test(noop);var _u=function isConstructor(e){if(!fu(e))return false;try{yu(noop,mu,e);return true}catch(e){return false}};var xu=function isConstructor(e){if(!fu(e))return false;switch(hu(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return false}try{return wu||!!bu(gu,pu(e))}catch(e){return true}};xu.sham=true;var Su=!yu||vu((function(){var e;return _u(_u.call)||!_u(Object)||!_u((function(){e=true}))||e}))?xu:_u;var Ou=Su;var ku=tryToString$5;var Cu=TypeError;var aConstructor$1=function(e){if(Ou(e))return e;throw new Cu(ku(e)+" is not a constructor")};var Pu=anObject$f;var Du=aConstructor$1;var ju=isNullOrUndefined$8;var Mu=wellKnownSymbol$m;var Eu=Mu("species");var speciesConstructor$1=function(e,r){var n=Pu(e).constructor;var c;return n===void 0||ju(c=Pu(n)[Eu])?r:Du(c)};var Tu=Mr;var Au=Function.prototype;var Lu=Au.apply;var $u=Au.call;var Fu=typeof Reflect=="object"&&Reflect.apply||(Tu?$u.bind(Lu):function(){return $u.apply(Lu,arguments)});var Iu=classofRaw$2;var Ru=$r;var functionUncurryThisClause=function(e){if(Iu(e)==="Function")return Ru(e)};var Nu=functionUncurryThisClause;var Wu=aCallable$a;var Gu=Mr;var Hu=Nu(Nu.bind);var functionBindContext=function(e,r){Wu(e);return r===void 0?e:Gu?Hu(e,r):function(){return e.apply(r,arguments)}};var zu=getBuiltIn$7;var Yu=zu("document","documentElement");var Uu=$r;var qu=Uu([].slice);var Bu=TypeError;var validateArgumentsLength$1=function(e,r){if(e<r)throw new Bu("Not enough arguments");return e};var Vu=Vr;var Ku=/(?:ipad|iphone|ipod).*applewebkit/i.test(Vu);var Qu=gr;var Zu=Fu;var Ju=functionBindContext;var Xu=En;var tc=zr;var ec=fails$u;var rc=Yu;var nc=qu;var ac=documentCreateElement$2;var ic=validateArgumentsLength$1;var oc=Ku;var sc=Gs;var uc=Qu.setImmediate;var cc=Qu.clearImmediate;var lc=Qu.process;var vc=Qu.Dispatch;var fc=Qu.Function;var hc=Qu.MessageChannel;var dc=Qu.String;var pc=0;var mc={};var yc="onreadystatechange";var gc,bc,wc,_c;ec((function(){gc=Qu.location}));var run=function(e){if(tc(mc,e)){var r=mc[e];delete mc[e];r()}};var runner=function(e){return function(){run(e)}};var eventListener=function(e){run(e.data)};var globalPostMessageDefer=function(e){Qu.postMessage(dc(e),gc.protocol+"//"+gc.host)};if(!uc||!cc){uc=function setImmediate(e){ic(arguments.length,1);var r=Xu(e)?e:fc(e);var n=nc(arguments,1);mc[++pc]=function(){Zu(r,void 0,n)};bc(pc);return pc};cc=function clearImmediate(e){delete mc[e]};if(sc)bc=function(e){lc.nextTick(runner(e))};else if(vc&&vc.now)bc=function(e){vc.now(runner(e))};else if(hc&&!oc){wc=new hc;_c=wc.port2;wc.port1.onmessage=eventListener;bc=Ju(_c.postMessage,_c)}else if(Qu.addEventListener&&Xu(Qu.postMessage)&&!Qu.importScripts&&gc&&gc.protocol!=="file:"&&!ec(globalPostMessageDefer)){bc=globalPostMessageDefer;Qu.addEventListener("message",eventListener,false)}else bc=yc in ac("script")?function(e){rc.appendChild(ac("script"))[yc]=function(){rc.removeChild(this);run(e)}}:function(e){setTimeout(runner(e),0)}}var xc={set:uc,clear:cc};var Queue$2=function(){this.head=null;this.tail=null};Queue$2.prototype={add:function(e){var r={item:e,next:null};var n=this.tail;n?n.next=r:this.head=r;this.tail=r},get:function(){var e=this.head;if(e){var r=this.head=e.next;r===null&&(this.tail=null);return e.item}}};var Sc=Queue$2;var Oc=Vr;var kc=/ipad|iphone|ipod/i.test(Oc)&&typeof Pebble!="undefined";var Cc=Vr;var Pc=/web0s(?!.*chrome)/i.test(Cc);var Dc=gr;var jc=functionBindContext;var Mc=bo.f;var Ec=xc.set;var Tc=Sc;var Ac=Ku;var Lc=kc;var $c=Pc;var Fc=Gs;var Ic=Dc.MutationObserver||Dc.WebKitMutationObserver;var Rc=Dc.document;var Nc=Dc.process;var Wc=Dc.Promise;var Gc=Mc(Dc,"queueMicrotask");var Hc=Gc&&Gc.value;var zc,Yc,Uc,qc,Bc;if(!Hc){var Vc=new Tc;var flush=function(){var e,r;Fc&&(e=Nc.domain)&&e.exit();while(r=Vc.get())try{r()}catch(e){Vc.head&&zc();throw e}e&&e.enter()};if(Ac||Fc||$c||!Ic||!Rc)if(!Lc&&Wc&&Wc.resolve){qc=Wc.resolve(void 0);qc.constructor=Wc;Bc=jc(qc.then,qc);zc=function(){Bc(flush)}}else if(Fc)zc=function(){Nc.nextTick(flush)};else{Ec=jc(Ec,Dc);zc=function(){Ec(flush)}}else{Yc=true;Uc=Rc.createTextNode("");new Ic(flush).observe(Uc,{characterData:true});zc=function(){Uc.data=Yc=!Yc}}Hc=function(e){Vc.head||zc();Vc.add(e)}}var Kc=Hc;var hostReportErrors$1=function(e,r){try{arguments.length===1?console.error(e):console.error(e,r)}catch(e){}};var perform$4=function(e){try{return{error:false,value:e()}}catch(e){return{error:true,value:e}}};var Qc=gr;var Zc=Qc.Promise;var Jc=typeof Deno=="object"&&Deno&&typeof Deno.version=="object";var Xc=Jc;var tl=Gs;var el=!Xc&&!tl&&typeof window=="object"&&typeof document=="object";var rl=gr;var nl=Zc;var al=En;var il=Es;var ol=ri;var sl=wellKnownSymbol$m;var ul=el;var cl=Jc;var ll=nn;nl&&nl.prototype;var vl=sl("species");var fl=false;var hl=al(rl.PromiseRejectionEvent);var dl=il("Promise",(function(){var e=ol(nl);var r=e!==String(nl);if(!r&&ll===66)return true;if(!ll||ll<51||!/native code/.test(e)){var n=new nl((function(e){e(1)}));var FakePromise=function(e){e((function(){}),(function(){}))};var c=n.constructor={};c[vl]=FakePromise;fl=n.then((function(){}))instanceof FakePromise;if(!fl)return true}return!r&&(ul||cl)&&!hl}));var pl={CONSTRUCTOR:dl,REJECTION_EVENT:hl,SUBCLASSING:fl};var ml={};var yl=aCallable$a;var gl=TypeError;var PromiseCapability=function(e){var r,n;this.promise=new e((function(e,c){if(r!==void 0||n!==void 0)throw new gl("Bad Promise constructor");r=e;n=c}));this.resolve=yl(r);this.reject=yl(n)};ml.f=function(e){return new PromiseCapability(e)};var bl=_export;var wl=Gs;var _l=gr;var xl=ea;var Sl=defineBuiltIn$9;var Ol=Qs;var kl=setToStringTag$5;var Cl=setSpecies$2;var Pl=aCallable$a;var Dl=En;var jl=Rn;var Ml=anInstance$4;var El=speciesConstructor$1;var Tl=xc.set;var Al=Kc;var Ll=hostReportErrors$1;var $l=perform$4;var Fl=Sc;var Il=Ei;var Rl=Zc;var Nl=pl;var Wl=ml;var Gl="Promise";var Hl=Nl.CONSTRUCTOR;var zl=Nl.REJECTION_EVENT;var Yl=Nl.SUBCLASSING;var Ul=Il.getterFor(Gl);var ql=Il.set;var Bl=Rl&&Rl.prototype;var Vl=Rl;var Kl=Bl;var Ql=_l.TypeError;var Zl=_l.document;var Jl=_l.process;var Xl=Wl.f;var tv=Xl;var ev=!!(Zl&&Zl.createEvent&&_l.dispatchEvent);var rv="unhandledrejection";var nv="rejectionhandled";var av=0;var iv=1;var ov=2;var sv=1;var uv=2;var cv,lv,vv,fv;var isThenable=function(e){var r;return!(!jl(e)||!Dl(r=e.then))&&r};var callReaction=function(e,r){var n=r.value;var c=r.state===iv;var v=c?e.ok:e.fail;var f=e.resolve;var p=e.reject;var g=e.domain;var b,w,_;try{if(v){if(!c){r.rejection===uv&&onHandleUnhandled(r);r.rejection=sv}if(v===true)b=n;else{g&&g.enter();b=v(n);if(g){g.exit();_=true}}b===e.promise?p(new Ql("Promise-chain cycle")):(w=isThenable(b))?xl(w,b,f,p):f(b)}else p(n)}catch(e){g&&!_&&g.exit();p(e)}};var notify=function(e,r){if(!e.notified){e.notified=true;Al((function(){var n=e.reactions;var c;while(c=n.get())callReaction(c,e);e.notified=false;r&&!e.rejection&&onUnhandled(e)}))}};var dispatchEvent=function(e,r,n){var c,v;if(ev){c=Zl.createEvent("Event");c.promise=r;c.reason=n;c.initEvent(e,false,true);_l.dispatchEvent(c)}else c={promise:r,reason:n};!zl&&(v=_l["on"+e])?v(c):e===rv&&Ll("Unhandled promise rejection",n)};var onUnhandled=function(e){xl(Tl,_l,(function(){var r=e.facade;var n=e.value;var c=isUnhandled(e);var v;if(c){v=$l((function(){wl?Jl.emit("unhandledRejection",n,r):dispatchEvent(rv,r,n)}));e.rejection=wl||isUnhandled(e)?uv:sv;if(v.error)throw v.value}}))};var isUnhandled=function(e){return e.rejection!==sv&&!e.parent};var onHandleUnhandled=function(e){xl(Tl,_l,(function(){var r=e.facade;wl?Jl.emit("rejectionHandled",r):dispatchEvent(nv,r,e.value)}))};var bind$4=function(e,r,n){return function(c){e(r,c,n)}};var internalReject=function(e,r,n){if(!e.done){e.done=true;n&&(e=n);e.value=r;e.state=ov;notify(e,true)}};var internalResolve=function(e,r,n){if(!e.done){e.done=true;n&&(e=n);try{if(e.facade===r)throw new Ql("Promise can't be resolved itself");var c=isThenable(r);if(c)Al((function(){var n={done:false};try{xl(c,r,bind$4(internalResolve,n,e),bind$4(internalReject,n,e))}catch(r){internalReject(n,r,e)}}));else{e.value=r;e.state=iv;notify(e,false)}}catch(r){internalReject({done:false},r,e)}}};if(Hl){Vl=function Promise(e){Ml(this,Kl);Pl(e);xl(cv,this);var r=Ul(this);try{e(bind$4(internalResolve,r),bind$4(internalReject,r))}catch(e){internalReject(r,e)}};Kl=Vl.prototype;cv=function Promise(e){ql(this,{type:Gl,done:false,notified:false,parent:false,reactions:new Fl,rejection:false,state:av,value:void 0})};cv.prototype=Sl(Kl,"then",(function then(e,r){var n=Ul(this);var c=Xl(El(this,Vl));n.parent=true;c.ok=!Dl(e)||e;c.fail=Dl(r)&&r;c.domain=wl?Jl.domain:void 0;n.state===av?n.reactions.add(c):Al((function(){callReaction(c,n)}));return c.promise}));lv=function(){var e=new cv;var r=Ul(e);this.promise=e;this.resolve=bind$4(internalResolve,r);this.reject=bind$4(internalReject,r)};Wl.f=Xl=function(e){return e===Vl||e===vv?new lv(e):tv(e)};if(Dl(Rl)&&Bl!==Object.prototype){fv=Bl.then;Yl||Sl(Bl,"then",(function then(e,r){var n=this;return new Vl((function(e,r){xl(fv,n,e,r)})).then(e,r)}),{unsafe:true});try{delete Bl.constructor}catch(e){}Ol&&Ol(Bl,Kl)}}bl({global:true,constructor:true,wrap:true,forced:Hl},{Promise:Vl});kl(Vl,Gl,false);Cl(Gl);var hv={};var dv=wellKnownSymbol$m;var pv=hv;var mv=dv("iterator");var yv=Array.prototype;var isArrayIteratorMethod$2=function(e){return e!==void 0&&(pv.Array===e||yv[mv]===e)};var gv=vo;var bv=getMethod$4;var wv=isNullOrUndefined$8;var _v=hv;var xv=wellKnownSymbol$m;var Sv=xv("iterator");var getIteratorMethod$3=function(e){if(!wv(e))return bv(e,Sv)||bv(e,"@@iterator")||_v[gv(e)]};var Ov=ea;var kv=aCallable$a;var Cv=anObject$f;var Pv=tryToString$5;var Dv=getIteratorMethod$3;var jv=TypeError;var getIterator$2=function(e,r){var n=arguments.length<2?Dv(e):r;if(kv(n))return Cv(Ov(n,e));throw new jv(Pv(e)+" is not iterable")};var Mv=ea;var Ev=anObject$f;var Tv=getMethod$4;var iteratorClose$2=function(e,r,n){var c,v;Ev(e);try{c=Tv(e,"return");if(!c){if(r==="throw")throw n;return n}c=Mv(c,e)}catch(e){v=true;c=e}if(r==="throw")throw n;if(v)throw c;Ev(c);return n};var Av=functionBindContext;var Lv=ea;var $v=anObject$f;var Fv=tryToString$5;var Iv=isArrayIteratorMethod$2;var Rv=lengthOfArrayLike$9;var Nv=ia;var Wv=getIterator$2;var Gv=getIteratorMethod$3;var Hv=iteratorClose$2;var zv=TypeError;var Result=function(e,r){this.stopped=e;this.result=r};var Yv=Result.prototype;var iterate$6=function(e,r,n){var c=n&&n.that;var v=!!(n&&n.AS_ENTRIES);var f=!!(n&&n.IS_RECORD);var p=!!(n&&n.IS_ITERATOR);var g=!!(n&&n.INTERRUPTED);var b=Av(r,c);var w,_,x,k,C,P,j;var stop=function(e){w&&Hv(w,"normal",e);return new Result(true,e)};var callFn=function(e){if(v){$v(e);return g?b(e[0],e[1],stop):b(e[0],e[1])}return g?b(e,stop):b(e)};if(f)w=e.iterator;else if(p)w=e;else{_=Gv(e);if(!_)throw new zv(Fv(e)+" is not iterable");if(Iv(_)){for(x=0,k=Rv(e);k>x;x++){C=callFn(e[x]);if(C&&Nv(Yv,C))return C}return new Result(false)}w=Wv(e,_)}P=f?e.next:w.next;while(!(j=Lv(P,w)).done){try{C=callFn(j.value)}catch(e){Hv(w,"throw",e)}if(typeof C=="object"&&C&&Nv(Yv,C))return C}return new Result(false)};var Uv=wellKnownSymbol$m;var qv=Uv("iterator");var Bv=false;try{var Vv=0;var Kv={next:function(){return{done:!!Vv++}},return:function(){Bv=true}};Kv[qv]=function(){return this};Array.from(Kv,(function(){throw 2}))}catch(e){}var checkCorrectnessOfIteration$3=function(e,r){try{if(!r&&!Bv)return false}catch(e){return false}var n=false;try{var c={};c[qv]=function(){return{next:function(){return{done:n=true}}}};e(c)}catch(e){}return n};var Qv=Zc;var Zv=checkCorrectnessOfIteration$3;var Jv=pl.CONSTRUCTOR;var Xv=Jv||!Zv((function(e){Qv.all(e).then(void 0,(function(){}))}));var tf=_export;var ef=ea;var rf=aCallable$a;var nf=ml;var af=perform$4;var of=iterate$6;var sf=Xv;tf({target:"Promise",stat:true,forced:sf},{all:function all(e){var r=this;var n=nf.f(r);var c=n.resolve;var v=n.reject;var f=af((function(){var n=rf(r.resolve);var f=[];var p=0;var g=1;of(e,(function(e){var b=p++;var w=false;g++;ef(n,r,e).then((function(e){if(!w){w=true;f[b]=e;--g||c(f)}}),v)}));--g||c(f)}));f.error&&v(f.value);return n.promise}});var uf=_export;var cf=pl.CONSTRUCTOR;var lf=Zc;var vf=getBuiltIn$7;var ff=En;var hf=defineBuiltIn$9;var df=lf&&lf.prototype;uf({target:"Promise",proto:true,forced:cf,real:true},{catch:function(e){return this.then(void 0,e)}});if(ff(lf)){var pf=vf("Promise").prototype.catch;df.catch!==pf&&hf(df,"catch",pf,{unsafe:true})}var mf=_export;var yf=ea;var gf=aCallable$a;var bf=ml;var wf=perform$4;var _f=iterate$6;var xf=Xv;mf({target:"Promise",stat:true,forced:xf},{race:function race(e){var r=this;var n=bf.f(r);var c=n.reject;var v=wf((function(){var v=gf(r.resolve);_f(e,(function(e){yf(v,r,e).then(n.resolve,c)}))}));v.error&&c(v.value);return n.promise}});var Sf=_export;var Of=ea;var kf=ml;var Cf=pl.CONSTRUCTOR;Sf({target:"Promise",stat:true,forced:Cf},{reject:function reject(e){var r=kf.f(this);Of(r.reject,void 0,e);return r.promise}});var Pf=anObject$f;var Df=Rn;var jf=ml;var promiseResolve$1=function(e,r){Pf(e);if(Df(r)&&r.constructor===e)return r;var n=jf.f(e);var c=n.resolve;c(r);return n.promise};var Mf=_export;var Ef=getBuiltIn$7;var Tf=pl.CONSTRUCTOR;var Af=promiseResolve$1;Ef("Promise");Mf({target:"Promise",stat:true,forced:Tf},{resolve:function resolve(e){return Af(this,e)}});var Lf={};var $f=objectKeysInternal;var Ff=us;var If=Object.keys||function keys(e){return $f(e,Ff)};var Rf=Ln;var Nf=Kn;var Wf=Tn;var Gf=anObject$f;var Hf=toIndexedObject$9;var zf=If;Lf.f=Rf&&!Nf?Object.defineProperties:function defineProperties(e,r){Gf(e);var n=Hf(r);var c=zf(r);var v=c.length;var f=0;var p;while(v>f)Wf.f(e,p=c[f++],n[p]);return e};var Yf=anObject$f;var Uf=Lf;var qf=us;var Bf=di;var Vf=Yu;var Kf=documentCreateElement$2;var Qf=sharedKey$3;var Zf=">";var Jf="<";var Xf="prototype";var th="script";var eh=Qf("IE_PROTO");var EmptyConstructor=function(){};var scriptTag=function(e){return Jf+th+Zf+e+Jf+"/"+th+Zf};var NullProtoObjectViaActiveX=function(e){e.write(scriptTag(""));e.close();var r=e.parentWindow.Object;e=null;return r};var NullProtoObjectViaIFrame=function(){var e=Kf("iframe");var r="java"+th+":";var n;e.style.display="none";Vf.appendChild(e);e.src=String(r);n=e.contentWindow.document;n.open();n.write(scriptTag("document.F=Object"));n.close();return n.F};var rh;var NullProtoObject=function(){try{rh=new ActiveXObject("htmlfile")}catch(e){}NullProtoObject=typeof document!="undefined"?document.domain&&rh?NullProtoObjectViaActiveX(rh):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(rh);var e=qf.length;while(e--)delete NullProtoObject[Xf][qf[e]];return NullProtoObject()};Bf[eh]=true;var nh=Object.create||function create(e,r){var n;if(e!==null){EmptyConstructor[Xf]=Yf(e);n=new EmptyConstructor;EmptyConstructor[Xf]=null;n[eh]=e}else n=NullProtoObject();return r===void 0?n:Uf.f(n,r)};var ah=wellKnownSymbol$m;var ih=nh;var oh=Tn.f;var sh=ah("unscopables");var uh=Array.prototype;uh[sh]===void 0&&oh(uh,sh,{configurable:true,value:ih(null)});var addToUnscopables$3=function(e){uh[sh][e]=true};var ch=fails$u;var lh=!ch((function(){function F(){}F.prototype.constructor=null;return Object.getPrototypeOf(new F)!==F.prototype}));var vh=zr;var fh=En;var hh=toObject$a;var dh=sharedKey$3;var ph=lh;var mh=dh("IE_PROTO");var yh=Object;var gh=yh.prototype;var bh=ph?yh.getPrototypeOf:function(e){var r=hh(e);if(vh(r,mh))return r[mh];var n=r.constructor;return fh(n)&&r instanceof n?n.prototype:r instanceof yh?gh:null};var wh=fails$u;var _h=En;var xh=Rn;var Sh=bh;var Oh=defineBuiltIn$9;var kh=wellKnownSymbol$m;var Ch=kh("iterator");var Ph=false;var Dh,jh,Mh;if([].keys){Mh=[].keys();if("next"in Mh){jh=Sh(Sh(Mh));jh!==Object.prototype&&(Dh=jh)}else Ph=true}var Eh=!xh(Dh)||wh((function(){var e={};return Dh[Ch].call(e)!==e}));Eh&&(Dh={});_h(Dh[Ch])||Oh(Dh,Ch,(function(){return this}));var Th={IteratorPrototype:Dh,BUGGY_SAFARI_ITERATORS:Ph};var Ah=Th.IteratorPrototype;var Lh=nh;var $h=createPropertyDescriptor$4;var Fh=setToStringTag$5;var Ih=hv;var returnThis$1=function(){return this};var iteratorCreateConstructor=function(e,r,n,c){var v=r+" Iterator";e.prototype=Lh(Ah,{next:$h(+!c,n)});Fh(e,v,false);Ih[v]=returnThis$1;return e};var Rh=_export;var Nh=ea;var Wh=Za;var Gh=En;var Hh=iteratorCreateConstructor;var zh=bh;var Yh=Qs;var Uh=setToStringTag$5;var qh=li;var Bh=defineBuiltIn$9;var Vh=wellKnownSymbol$m;var Kh=hv;var Qh=Th;var Zh=Wh.PROPER;var Jh=Wh.CONFIGURABLE;var Xh=Qh.IteratorPrototype;var td=Qh.BUGGY_SAFARI_ITERATORS;var ed=Vh("iterator");var rd="keys";var nd="values";var ad="entries";var returnThis=function(){return this};var iteratorDefine=function(e,r,n,c,v,f,p){Hh(n,r,c);var getIterationMethod=function(e){if(e===v&&x)return x;if(!td&&e&&e in w)return w[e];switch(e){case rd:return function keys(){return new n(this,e)};case nd:return function values(){return new n(this,e)};case ad:return function entries(){return new n(this,e)}}return function(){return new n(this)}};var g=r+" Iterator";var b=false;var w=e.prototype;var _=w[ed]||w["@@iterator"]||v&&w[v];var x=!td&&_||getIterationMethod(v);var k=r==="Array"&&w.entries||_;var C,P,j;if(k){C=zh(k.call(new e));if(C!==Object.prototype&&C.next){zh(C)!==Xh&&(Yh?Yh(C,Xh):Gh(C[ed])||Bh(C,ed,returnThis));Uh(C,g,true)}}if(Zh&&v===nd&&_&&_.name!==nd)if(Jh)qh(w,"name",nd);else{b=true;x=function values(){return Nh(_,this)}}if(v){P={values:getIterationMethod(nd),keys:f?x:getIterationMethod(rd),entries:getIterationMethod(ad)};if(p)for(j in P)(td||b||!(j in w))&&Bh(w,j,P[j]);else Rh({target:r,proto:true,forced:td||b},P)}w[ed]!==x&&Bh(w,ed,x,{name:v});Kh[r]=x;return P};var createIterResultObject$3=function(e,r){return{value:e,done:r}};var id=toIndexedObject$9;var od=addToUnscopables$3;var sd=hv;var ud=Ei;var cd=Tn.f;var ld=iteratorDefine;var vd=createIterResultObject$3;var fd=Ln;var hd="Array Iterator";var dd=ud.set;var pd=ud.getterFor(hd);var md=ld(Array,"Array",(function(e,r){dd(this,{type:hd,target:id(e),index:0,kind:r})}),(function(){var e=pd(this);var r=e.target;var n=e.index++;if(!r||n>=r.length){e.target=void 0;return vd(void 0,true)}switch(e.kind){case"keys":return vd(n,false);case"values":return vd(r[n],false)}return vd([n,r[n]],false)}),"values");var yd=sd.Arguments=sd.Array;od("keys");od("values");od("entries");if(fd&&yd.name!=="values")try{cd(yd,"name",{value:"values"})}catch(e){}var gd=_export;var bd=ea;var wd=aCallable$a;var _d=ml;var xd=perform$4;var Sd=iterate$6;var Od=Xv;gd({target:"Promise",stat:true,forced:Od},{allSettled:function allSettled(e){var r=this;var n=_d.f(r);var c=n.resolve;var v=n.reject;var f=xd((function(){var n=wd(r.resolve);var v=[];var f=0;var p=1;Sd(e,(function(e){var g=f++;var b=false;p++;bd(n,r,e).then((function(e){if(!b){b=true;v[g]={status:"fulfilled",value:e};--p||c(v)}}),(function(e){if(!b){b=true;v[g]={status:"rejected",reason:e};--p||c(v)}}))}));--p||c(v)}));f.error&&v(f.value);return n.promise}});var kd=vo;var Cd=String;var toString$9=function(e){if(kd(e)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Cd(e)};var Pd=$r;var Dd=toIntegerOrInfinity$4;var jd=toString$9;var Md=requireObjectCoercible$7;var Ed=Pd("".charAt);var Td=Pd("".charCodeAt);var Ad=Pd("".slice);var createMethod$3=function(e){return function(r,n){var c=jd(Md(r));var v=Dd(n);var f=c.length;var p,g;if(v<0||v>=f)return e?"":void 0;p=Td(c,v);return p<55296||p>56319||v+1===f||(g=Td(c,v+1))<56320||g>57343?e?Ed(c,v):p:e?Ad(c,v,v+2):g-56320+(p-55296<<10)+65536}};var Ld={codeAt:createMethod$3(false),charAt:createMethod$3(true)};var $d=Ld.charAt;var Fd=toString$9;var Id=Ei;var Rd=iteratorDefine;var Nd=createIterResultObject$3;var Wd="String Iterator";var Gd=Id.set;var Hd=Id.getterFor(Wd);Rd(String,"String",(function(e){Gd(this,{type:Wd,string:Fd(e),index:0})}),(function next(){var e=Hd(this);var r=e.string;var n=e.index;var c;if(n>=r.length)return Nd(void 0,true);c=$d(r,n);e.index+=c.length;return Nd(c,false)}));var zd={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var Yd=documentCreateElement$2;var Ud=Yd("span").classList;var qd=Ud&&Ud.constructor&&Ud.constructor.prototype;var Bd=qd===Object.prototype?void 0:qd;var Vd=gr;var Kd=zd;var Qd=Bd;var Zd=md;var Jd=li;var Xd=setToStringTag$5;var tp=wellKnownSymbol$m;var ep=tp("iterator");var rp=Zd.values;var handlePrototype$1=function(e,r){if(e){if(e[ep]!==rp)try{Jd(e,ep,rp)}catch(r){e[ep]=rp}Xd(e,r,true);if(Kd[r])for(var n in Zd)if(e[n]!==Zd[n])try{Jd(e,n,Zd[n])}catch(r){e[n]=Zd[n]}}};for(var np in Kd)handlePrototype$1(Vd[np]&&Vd[np].prototype,np);handlePrototype$1(Qd,"DOMTokenList");var ap=toObject$a;var ip=toAbsoluteIndex$4;var op=lengthOfArrayLike$9;var sp=function fill(e){var r=ap(this);var n=op(r);var c=arguments.length;var v=ip(c>1?arguments[1]:void 0,n);var f=c>2?arguments[2]:void 0;var p=f===void 0?n:ip(f,n);while(p>v)r[v++]=e;return r};var up=_export;var cp=sp;var lp=addToUnscopables$3;up({target:"Array",proto:true},{fill:cp});lp("fill");var vp=classofRaw$2;var fp=Array.isArray||function isArray(e){return vp(e)==="Array"};var hp=toPropertyKey$3;var dp=Tn;var pp=createPropertyDescriptor$4;var createProperty$4=function(e,r,n){var c=hp(r);c in e?dp.f(e,c,pp(0,n)):e[c]=n};var mp=fails$u;var yp=wellKnownSymbol$m;var gp=nn;var bp=yp("species");var arrayMethodHasSpeciesSupport$4=function(e){return gp>=51||!mp((function(){var r=[];var n=r.constructor={};n[bp]=function(){return{foo:1}};return r[e](Boolean).foo!==1}))};var wp=_export;var _p=fp;var xp=Su;var Sp=Rn;var Op=toAbsoluteIndex$4;var kp=lengthOfArrayLike$9;var Cp=toIndexedObject$9;var Pp=createProperty$4;var Dp=wellKnownSymbol$m;var jp=arrayMethodHasSpeciesSupport$4;var Mp=qu;var Ep=jp("slice");var Tp=Dp("species");var Ap=Array;var Lp=Math.max;wp({target:"Array",proto:true,forced:!Ep},{slice:function slice(e,r){var n=Cp(this);var c=kp(n);var v=Op(e,c);var f=Op(r===void 0?c:r,c);var p,g,b;if(_p(n)){p=n.constructor;if(xp(p)&&(p===Ap||_p(p.prototype)))p=void 0;else if(Sp(p)){p=p[Tp];p===null&&(p=void 0)}if(p===Ap||p===void 0)return Mp(n,v,f)}g=new(p===void 0?Ap:p)(Lp(f-v,0));for(b=0;v<f;v++,b++)v in n&&Pp(g,b,n[v]);g.length=b;return g}});function __awaiter(e,r,n,c){function adopt(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,v){function fulfilled(e){try{step(c.next(e))}catch(e){v(e)}}function rejected(e){try{step(c.throw(e))}catch(e){v(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((c=c.apply(e,r||[])).next())}))}function __classPrivateFieldGet(e,r,n,c){if(n==="a"&&!c)throw new TypeError("Private accessor was defined without a getter");if(typeof r==="function"?e!==r||!c:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?c:n==="a"?c.call(e):c?c.value:r.get(e)}var $p={exports:{}};(function(e){var r=Object.prototype.hasOwnProperty,n="~";function Events(){}if(Object.create){Events.prototype=Object.create(null);(new Events).__proto__||(n=false)}
/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */function EE(e,r,n){this.fn=e;this.context=r;this.once=n||false}
/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */function addListener(e,r,c,v,f){if(typeof c!=="function")throw new TypeError("The listener must be a function");var p=new EE(c,v||e,f),g=n?n+r:r;e._events[g]?e._events[g].fn?e._events[g]=[e._events[g],p]:e._events[g].push(p):(e._events[g]=p,e._eventsCount++);return e}
/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */function clearEvent(e,r){--e._eventsCount===0?e._events=new Events:delete e._events[r]}function EventEmitter(){this._events=new Events;this._eventsCount=0}
/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */EventEmitter.prototype.eventNames=function eventNames(){var e,c,v=[];if(this._eventsCount===0)return v;for(c in e=this._events)r.call(e,c)&&v.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?v.concat(Object.getOwnPropertySymbols(e)):v};
/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */EventEmitter.prototype.listeners=function listeners(e){var r=n?n+e:e,c=this._events[r];if(!c)return[];if(c.fn)return[c.fn];for(var v=0,f=c.length,p=new Array(f);v<f;v++)p[v]=c[v].fn;return p};
/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */EventEmitter.prototype.listenerCount=function listenerCount(e){var r=n?n+e:e,c=this._events[r];return c?c.fn?1:c.length:0};
/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */EventEmitter.prototype.emit=function emit(e,r,c,v,f,p){var g=n?n+e:e;if(!this._events[g])return false;var b,w,_=this._events[g],x=arguments.length;if(_.fn){_.once&&this.removeListener(e,_.fn,void 0,true);switch(x){case 1:return _.fn.call(_.context),true;case 2:return _.fn.call(_.context,r),true;case 3:return _.fn.call(_.context,r,c),true;case 4:return _.fn.call(_.context,r,c,v),true;case 5:return _.fn.call(_.context,r,c,v,f),true;case 6:return _.fn.call(_.context,r,c,v,f,p),true}for(w=1,b=new Array(x-1);w<x;w++)b[w-1]=arguments[w];_.fn.apply(_.context,b)}else{var k,C=_.length;for(w=0;w<C;w++){_[w].once&&this.removeListener(e,_[w].fn,void 0,true);switch(x){case 1:_[w].fn.call(_[w].context);break;case 2:_[w].fn.call(_[w].context,r);break;case 3:_[w].fn.call(_[w].context,r,c);break;case 4:_[w].fn.call(_[w].context,r,c,v);break;default:if(!b)for(k=1,b=new Array(x-1);k<x;k++)b[k-1]=arguments[k];_[w].fn.apply(_[w].context,b)}}}return true};
/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */EventEmitter.prototype.on=function on(e,r,n){return addListener(this,e,r,n,false)};
/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */EventEmitter.prototype.once=function once(e,r,n){return addListener(this,e,r,n,true)};
/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */EventEmitter.prototype.removeListener=function removeListener(e,r,c,v){var f=n?n+e:e;if(!this._events[f])return this;if(!r){clearEvent(this,f);return this}var p=this._events[f];if(p.fn)p.fn!==r||v&&!p.once||c&&p.context!==c||clearEvent(this,f);else{for(var g=0,b=[],w=p.length;g<w;g++)(p[g].fn!==r||v&&!p[g].once||c&&p[g].context!==c)&&b.push(p[g]);b.length?this._events[f]=b.length===1?b[0]:b:clearEvent(this,f)}return this};
/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var r;if(e){r=n?n+e:e;this._events[r]&&clearEvent(this,r)}else{this._events=new Events;this._eventsCount=0}return this};EventEmitter.prototype.off=EventEmitter.prototype.removeListener;EventEmitter.prototype.addListener=EventEmitter.prototype.on;EventEmitter.prefixed=n;EventEmitter.EventEmitter=EventEmitter;e.exports=EventEmitter})($p);var Fp=$p.exports;var Ip=getDefaultExportFromCjs(Fp);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var Rp=Array.isArray;var Np=Rp;
/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */function castArray(){if(!arguments.length)return[];var e=arguments[0];return Np(e)?e:[e]}var Wp=fp;var Gp=Su;var Hp=Rn;var zp=wellKnownSymbol$m;var Yp=zp("species");var Up=Array;var arraySpeciesConstructor$1=function(e){var r;if(Wp(e)){r=e.constructor;if(Gp(r)&&(r===Up||Wp(r.prototype)))r=void 0;else if(Hp(r)){r=r[Yp];r===null&&(r=void 0)}}return r===void 0?Up:r};var qp=arraySpeciesConstructor$1;var arraySpeciesCreate$2=function(e,r){return new(qp(e))(r===0?0:r)};var Bp=functionBindContext;var Vp=$r;var Kp=jo;var Qp=toObject$a;var Zp=lengthOfArrayLike$9;var Jp=arraySpeciesCreate$2;var Xp=Vp([].push);var createMethod$2=function(e){var r=e===1;var n=e===2;var c=e===3;var v=e===4;var f=e===6;var p=e===7;var g=e===5||f;return function(b,w,_,x){var k=Qp(b);var C=Kp(k);var P=Zp(C);var j=Bp(w,_);var E=0;var T=x||Jp;var A=r?T(b,P):n||p?T(b,0):void 0;var L,I;for(;P>E;E++)if(g||E in C){L=C[E];I=j(L,E,k);if(e)if(r)A[E]=I;else if(I)switch(e){case 3:return true;case 5:return L;case 6:return E;case 2:Xp(A,L)}else switch(e){case 4:return false;case 7:Xp(A,L)}}return f?-1:c||v?v:A}};var tm={forEach:createMethod$2(0),map:createMethod$2(1),filter:createMethod$2(2),some:createMethod$2(3),every:createMethod$2(4),find:createMethod$2(5),findIndex:createMethod$2(6),filterReject:createMethod$2(7)};var em=_export;var rm=tm.map;var nm=arrayMethodHasSpeciesSupport$4;var am=nm("map");em({target:"Array",proto:true,forced:!am},{map:function map(e){return rm(this,e,arguments.length>1?arguments[1]:void 0)}});var im=Ln;var om=$r;var sm=ea;var um=fails$u;var cm=If;var lm=fs;var vm=wo;var fm=toObject$a;var hm=jo;var dm=Object.assign;var pm=Object.defineProperty;var mm=om([].concat);var ym=!dm||um((function(){if(im&&dm({b:1},dm(pm({},"a",{enumerable:true,get:function(){pm(this,"b",{value:3,enumerable:false})}}),{b:2})).b!==1)return true;var e={};var r={};var n=Symbol("assign detection");var c="abcdefghijklmnopqrst";e[n]=7;c.split("").forEach((function(e){r[e]=e}));return dm({},e)[n]!==7||cm(dm({},r)).join("")!==c}))?function assign(e,r){var n=fm(e);var c=arguments.length;var v=1;var f=lm.f;var p=vm.f;while(c>v){var g=hm(arguments[v++]);var b=f?mm(cm(g),f(g)):cm(g);var w=b.length;var _=0;var x;while(w>_){x=b[_++];im&&!sm(p,g,x)||(n[x]=g[x])}}return n}:dm;var gm=_export;var bm=ym;gm({target:"Object",stat:true,arity:2,forced:Object.assign!==bm},{assign:bm});var wm={exports:{}};var _m={};var xm=toAbsoluteIndex$4;var Sm=lengthOfArrayLike$9;var Om=createProperty$4;var km=Array;var Cm=Math.max;var arraySliceSimple=function(e,r,n){var c=Sm(e);var v=xm(r,c);var f=xm(n===void 0?c:n,c);var p=km(Cm(f-v,0));var g=0;for(;v<f;v++,g++)Om(p,g,e[v]);p.length=g;return p};var Pm=classofRaw$2;var Dm=toIndexedObject$9;var jm=Go.f;var Mm=arraySliceSimple;var Em=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function(e){try{return jm(e)}catch(e){return Mm(Em)}};_m.f=function getOwnPropertyNames(e){return Em&&Pm(e)==="Window"?getWindowNames(e):jm(Dm(e))};var Tm=fails$u;var Am=Tm((function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}));var Lm=fails$u;var $m=Rn;var Fm=classofRaw$2;var Im=Am;var Rm=Object.isExtensible;var Nm=Lm((function(){Rm(1)}));var Wm=Nm||Im?function isExtensible(e){return!!$m(e)&&((!Im||Fm(e)!=="ArrayBuffer")&&(!Rm||Rm(e)))}:Rm;var Gm=fails$u;var Hm=!Gm((function(){return Object.isExtensible(Object.preventExtensions({}))}));var zm=_export;var Ym=$r;var Um=di;var qm=Rn;var Bm=zr;var Vm=Tn.f;var Km=Go;var Qm=_m;var Zm=Wm;var Jm=uid$3;var Xm=Hm;var ty=false;var ey=Jm("meta");var ry=0;var setMetadata=function(e){Vm(e,ey,{value:{objectID:"O"+ry++,weakData:{}}})};var fastKey$1=function(e,r){if(!qm(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!Bm(e,ey)){if(!Zm(e))return"F";if(!r)return"E";setMetadata(e)}return e[ey].objectID};var getWeakData$1=function(e,r){if(!Bm(e,ey)){if(!Zm(e))return true;if(!r)return false;setMetadata(e)}return e[ey].weakData};var onFreeze=function(e){Xm&&ty&&Zm(e)&&!Bm(e,ey)&&setMetadata(e);return e};var enable=function(){ny.enable=function(){};ty=true;var e=Km.f;var r=Ym([].splice);var n={};n[ey]=1;if(e(n).length){Km.f=function(n){var c=e(n);for(var v=0,f=c.length;v<f;v++)if(c[v]===ey){r(c,v,1);break}return c};zm({target:"Object",stat:true,forced:true},{getOwnPropertyNames:Qm.f})}};var ny=wm.exports={enable:enable,fastKey:fastKey$1,getWeakData:getWeakData$1,onFreeze:onFreeze};Um[ey]=true;var ay=wm.exports;var iy=En;var oy=Rn;var sy=Qs;var inheritIfRequired$1=function(e,r,n){var c,v;sy&&iy(c=r.constructor)&&c!==n&&oy(v=c.prototype)&&v!==n.prototype&&sy(e,v);return e};var uy=_export;var cy=gr;var ly=$r;var vy=Es;var fy=defineBuiltIn$9;var hy=ay;var dy=iterate$6;var py=anInstance$4;var my=En;var yy=isNullOrUndefined$8;var gy=Rn;var by=fails$u;var wy=checkCorrectnessOfIteration$3;var _y=setToStringTag$5;var xy=inheritIfRequired$1;var collection$3=function(e,r,n){var c=e.indexOf("Map")!==-1;var v=e.indexOf("Weak")!==-1;var f=c?"set":"add";var p=cy[e];var g=p&&p.prototype;var b=p;var w={};var fixMethod=function(e){var r=ly(g[e]);fy(g,e,e==="add"?function add(e){r(this,e===0?0:e);return this}:e==="delete"?function(e){return!(v&&!gy(e))&&r(this,e===0?0:e)}:e==="get"?function get(e){return v&&!gy(e)?void 0:r(this,e===0?0:e)}:e==="has"?function has(e){return!(v&&!gy(e))&&r(this,e===0?0:e)}:function set(e,n){r(this,e===0?0:e,n);return this})};var _=vy(e,!my(p)||!(v||g.forEach&&!by((function(){(new p).entries().next()}))));if(_){b=n.getConstructor(r,e,c,f);hy.enable()}else if(vy(e,true)){var x=new b;var k=x[f](v?{}:-0,1)!==x;var C=by((function(){x.has(1)}));var P=wy((function(e){new p(e)}));var j=!v&&by((function(){var e=new p;var r=5;while(r--)e[f](r,r);return!e.has(-0)}));if(!P){b=r((function(e,r){py(e,g);var n=xy(new p,e,b);yy(r)||dy(r,n[f],{that:n,AS_ENTRIES:c});return n}));b.prototype=g;g.constructor=b}if(C||j){fixMethod("delete");fixMethod("has");c&&fixMethod("get")}(j||k)&&fixMethod(f);v&&g.clear&&delete g.clear}w[e]=b;uy({global:true,constructor:true,forced:b!==p},w);_y(b,e);v||n.setStrong(b,e,c);return b};var Sy=defineBuiltIn$9;var defineBuiltIns$2=function(e,r,n){for(var c in r)Sy(e,c,r[c],n);return e};var Oy=$r;var ky=defineBuiltIns$2;var Cy=ay.getWeakData;var Py=anInstance$4;var Dy=anObject$f;var jy=isNullOrUndefined$8;var My=Rn;var Ey=iterate$6;var Ty=tm;var Ay=zr;var Ly=Ei;var $y=Ly.set;var Fy=Ly.getterFor;var Iy=Ty.find;var Ry=Ty.findIndex;var Ny=Oy([].splice);var Wy=0;var uncaughtFrozenStore=function(e){return e.frozen||(e.frozen=new UncaughtFrozenStore)};var UncaughtFrozenStore=function(){this.entries=[]};var findUncaughtFrozen=function(e,r){return Iy(e.entries,(function(e){return e[0]===r}))};UncaughtFrozenStore.prototype={get:function(e){var r=findUncaughtFrozen(this,e);if(r)return r[1]},has:function(e){return!!findUncaughtFrozen(this,e)},set:function(e,r){var n=findUncaughtFrozen(this,e);n?n[1]=r:this.entries.push([e,r])},delete:function(e){var r=Ry(this.entries,(function(r){return r[0]===e}));~r&&Ny(this.entries,r,1);return!!~r}};var Gy={getConstructor:function(e,r,n,c){var v=e((function(e,v){Py(e,f);$y(e,{type:r,id:Wy++,frozen:void 0});jy(v)||Ey(v,e[c],{that:e,AS_ENTRIES:n})}));var f=v.prototype;var p=Fy(r);var define=function(e,r,n){var c=p(e);var v=Cy(Dy(r),true);v===true?uncaughtFrozenStore(c).set(r,n):v[c.id]=n;return e};ky(f,{delete:function(e){var r=p(this);if(!My(e))return false;var n=Cy(e);return n===true?uncaughtFrozenStore(r).delete(e):n&&Ay(n,r.id)&&delete n[r.id]},has:function has(e){var r=p(this);if(!My(e))return false;var n=Cy(e);return n===true?uncaughtFrozenStore(r).has(e):n&&Ay(n,r.id)}});ky(f,n?{get:function get(e){var r=p(this);if(My(e)){var n=Cy(e);return n===true?uncaughtFrozenStore(r).get(e):n?n[r.id]:void 0}},set:function set(e,r){return define(this,e,r)}}:{add:function add(e){return define(this,e,true)}});return v}};var Hy=collection$3;var zy=Gy;Hy("WeakSet",(function(e){return function WeakSet(){return e(this,arguments.length?arguments[0]:void 0)}}),zy);var Yy;(function(e){e[e.SCROLL_NONE=0]="SCROLL_NONE";e[e.SCROLL_BACKWARD=1]="SCROLL_BACKWARD";e[e.SCROLL_FORWARD=2]="SCROLL_FORWARD"})(Yy||(Yy={}));var Uy;(function(e){e[e.TOP=0]="TOP";e[e.RIGHT=1]="RIGHT";e[e.BOTTOM=2]="BOTTOM";e[e.LEFT=3]="LEFT"})(Uy||(Uy={}));var qy="hour";var By="minute";var Vy=10;var Ky=10;var Qy=2;var Zy=0;var Jy=200;var Xy=12;var tg="#cal-heatmap";var eg="light";var rg="en";var ng="red";var ag="YlOrBr";var ig="quantize";var og=[0,100];var sg,ug,cg;var lg=function(){function Navigator(e){_classCallCheck(this,Navigator);sg.add(this);this.calendar=e;this.maxDomainReached=false;this.minDomainReached=false}_createClass(Navigator,[{key:"loadNewDomains",value:function loadNewDomains(e){var r=this;var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yy.SCROLL_NONE;var c=this.calendar.options.options;var v=this.calendar.templateCollection;var f=c.date.min?v.get(c.domain.type).extractUnit(+c.date.min):void 0;var p=c.date.max?v.get(c.domain.type).extractUnit(+c.date.max):void 0;var g=this.calendar.domainCollection;if(__classPrivateFieldGet(this,sg,"m",ug).call(this,e,f,p,n))return Yy.SCROLL_NONE;n!==Yy.SCROLL_NONE&&e.clamp(f,p).slice(c.range,n===Yy.SCROLL_FORWARD);g.merge(e,c.range,(function(n,f){var p=null;p=e.at(f+1)?e.at(f+1):r.calendar.dateHelper.intervals(c.domain.type,n,2).pop();return v.get(c.subDomain.type).mapping(n,p).map((function(e){return Object.assign(Object.assign({},e),{v:c.data.defaultValue})}))}));__classPrivateFieldGet(this,sg,"m",cg).call(this,g.min,g.max,f,p);n===Yy.SCROLL_BACKWARD?this.calendar.eventEmitter.emit("domainsLoaded",[g.min]):n===Yy.SCROLL_FORWARD&&this.calendar.eventEmitter.emit("domainsLoaded",[g.max]);return n}},{key:"jumpTo",value:function jumpTo(e,r){var n=this.calendar,c=n.domainCollection,v=n.options;var f=new Date(c.min);var p=new Date(c.max);return e<f?this.loadNewDomains(this.calendar.createDomainCollection(e,f,false),Yy.SCROLL_BACKWARD):r?this.loadNewDomains(this.calendar.createDomainCollection(e,v.options.range),f<e?Yy.SCROLL_FORWARD:Yy.SCROLL_BACKWARD):e>p?this.loadNewDomains(this.calendar.createDomainCollection(p,e,false),Yy.SCROLL_FORWARD):Yy.SCROLL_NONE}}]);return Navigator}();sg=new WeakSet,ug=function _Navigator_isDomainBoundaryReached(e,r,n,c){return!!(n&&e.max>=n&&this.maxDomainReached&&c===Yy.SCROLL_FORWARD)||!!(r&&e.min<=r&&this.minDomainReached&&c===Yy.SCROLL_BACKWARD)},cg=function _Navigator_setDomainsBoundaryReached(e,r,n,c){if(n){var v=e<=n;this.calendar.eventEmitter.emit(v?"minDateReached":"minDateNotReached");this.minDomainReached=v}if(c){var f=r>=c;this.calendar.eventEmitter.emit(f?"maxDateReached":"maxDateNotReached");this.maxDomainReached=f}};var vg=TypeError;var fg=9007199254740991;var doesNotExceedSafeInteger$1=function(e){if(e>fg)throw vg("Maximum allowed index exceeded");return e};var hg=_export;var dg=fails$u;var pg=fp;var mg=Rn;var yg=toObject$a;var gg=lengthOfArrayLike$9;var bg=doesNotExceedSafeInteger$1;var wg=createProperty$4;var _g=arraySpeciesCreate$2;var xg=arrayMethodHasSpeciesSupport$4;var Sg=wellKnownSymbol$m;var Og=nn;var kg=Sg("isConcatSpreadable");var Cg=Og>=51||!dg((function(){var e=[];e[kg]=false;return e.concat()[0]!==e}));var isConcatSpreadable=function(e){if(!mg(e))return false;var r=e[kg];return r!==void 0?!!r:pg(e)};var Pg=!Cg||!xg("concat");hg({target:"Array",proto:true,arity:1,forced:Pg},{concat:function concat(e){var r=yg(this);var n=_g(r,0);var c=0;var v,f,p,g,b;for(v=-1,p=arguments.length;v<p;v++){b=v===-1?r:arguments[v];if(isConcatSpreadable(b)){g=gg(b);bg(c+g);for(f=0;f<g;f++,c++)f in b&&wg(n,c,b[f])}else{bg(c+1);wg(n,c++,b)}}n.length=c;return n}});var Dg=fails$u;var arrayMethodIsStrict$3=function(e,r){var n=[][e];return!!n&&Dg((function(){n.call(null,r||function(){return 1},1)}))};var jg=_export;var Mg=$r;var Eg=jo;var Tg=toIndexedObject$9;var Ag=arrayMethodIsStrict$3;var Lg=Mg([].join);var $g=Eg!==Object;var Fg=$g||!Ag("join",",");jg({target:"Array",proto:true,forced:Fg},{join:function join(e){return Lg(Tg(this),e===void 0?",":e)}});var Ig=nh;var Rg=defineBuiltInAccessor$3;var Ng=defineBuiltIns$2;var Wg=functionBindContext;var Gg=anInstance$4;var Hg=isNullOrUndefined$8;var zg=iterate$6;var Yg=iteratorDefine;var Ug=createIterResultObject$3;var qg=setSpecies$2;var Bg=Ln;var Vg=ay.fastKey;var Kg=Ei;var Qg=Kg.set;var Zg=Kg.getterFor;var Jg={getConstructor:function(e,r,n,c){var v=e((function(e,v){Gg(e,f);Qg(e,{type:r,index:Ig(null),first:void 0,last:void 0,size:0});Bg||(e.size=0);Hg(v)||zg(v,e[c],{that:e,AS_ENTRIES:n})}));var f=v.prototype;var p=Zg(r);var define=function(e,r,n){var c=p(e);var v=getEntry(e,r);var f,g;if(v)v.value=n;else{c.last=v={index:g=Vg(r,true),key:r,value:n,previous:f=c.last,next:void 0,removed:false};c.first||(c.first=v);f&&(f.next=v);Bg?c.size++:e.size++;g!=="F"&&(c.index[g]=v)}return e};var getEntry=function(e,r){var n=p(e);var c=Vg(r);var v;if(c!=="F")return n.index[c];for(v=n.first;v;v=v.next)if(v.key===r)return v};Ng(f,{clear:function clear(){var e=this;var r=p(e);var n=r.index;var c=r.first;while(c){c.removed=true;c.previous&&(c.previous=c.previous.next=void 0);delete n[c.index];c=c.next}r.first=r.last=void 0;Bg?r.size=0:e.size=0},delete:function(e){var r=this;var n=p(r);var c=getEntry(r,e);if(c){var v=c.next;var f=c.previous;delete n.index[c.index];c.removed=true;f&&(f.next=v);v&&(v.previous=f);n.first===c&&(n.first=v);n.last===c&&(n.last=f);Bg?n.size--:r.size--}return!!c},forEach:function forEach(e){var r=p(this);var n=Wg(e,arguments.length>1?arguments[1]:void 0);var c;while(c=c?c.next:r.first){n(c.value,c.key,this);while(c&&c.removed)c=c.previous}},has:function has(e){return!!getEntry(this,e)}});Ng(f,n?{get:function get(e){var r=getEntry(this,e);return r&&r.value},set:function set(e,r){return define(this,e===0?0:e,r)}}:{add:function add(e){return define(this,e=e===0?0:e,e)}});Bg&&Rg(f,"size",{configurable:true,get:function(){return p(this).size}});return v},setStrong:function(e,r,n){var c=r+" Iterator";var v=Zg(r);var f=Zg(c);Yg(e,r,(function(e,r){Qg(this,{type:c,target:e,state:v(e),kind:r,last:void 0})}),(function(){var e=f(this);var r=e.kind;var n=e.last;while(n&&n.removed)n=n.previous;if(!e.target||!(e.last=n=n?n.next:e.state.first)){e.target=void 0;return Ug(void 0,true)}return Ug(r==="keys"?n.key:r==="values"?n.value:[n.key,n.value],false)}),n?"entries":"values",!n,true);qg(r)}};var Xg=collection$3;var tb=Jg;Xg("Map",(function(e){return function Map(){return e(this,arguments.length?arguments[0]:void 0)}}),tb);var eb=tryToString$5;var rb=TypeError;var deletePropertyOrThrow$1=function(e,r){if(!delete e[r])throw new rb("Cannot delete property "+eb(r)+" of "+eb(e))};var nb=arraySliceSimple;var ab=Math.floor;var mergeSort=function(e,r){var n=e.length;var c=ab(n/2);return n<8?insertionSort(e,r):merge(e,mergeSort(nb(e,0,c),r),mergeSort(nb(e,c),r),r)};var insertionSort=function(e,r){var n=e.length;var c=1;var v,f;while(c<n){f=c;v=e[c];while(f&&r(e[f-1],v)>0)e[f]=e[--f];f!==c++&&(e[f]=v)}return e};var merge=function(e,r,n,c){var v=r.length;var f=n.length;var p=0;var g=0;while(p<v||g<f)e[p+g]=p<v&&g<f?c(r[p],n[g])<=0?r[p++]:n[g++]:p<v?r[p++]:n[g++];return e};var ib=mergeSort;var ob=Vr;var sb=ob.match(/firefox\/(\d+)/i);var ub=!!sb&&+sb[1];var cb=Vr;var lb=/MSIE|Trident/.test(cb);var vb=Vr;var fb=vb.match(/AppleWebKit\/(\d+)\./);var hb=!!fb&&+fb[1];var db=_export;var pb=$r;var mb=aCallable$a;var yb=toObject$a;var gb=lengthOfArrayLike$9;var bb=deletePropertyOrThrow$1;var wb=toString$9;var _b=fails$u;var xb=ib;var Sb=arrayMethodIsStrict$3;var Ob=ub;var kb=lb;var Cb=nn;var Pb=hb;var Db=[];var jb=pb(Db.sort);var Mb=pb(Db.push);var Eb=_b((function(){Db.sort(void 0)}));var Tb=_b((function(){Db.sort(null)}));var Ab=Sb("sort");var Lb=!_b((function(){if(Cb)return Cb<70;if(!(Ob&&Ob>3)){if(kb)return true;if(Pb)return Pb<603;var e="";var r,n,c,v;for(r=65;r<76;r++){n=String.fromCharCode(r);switch(r){case 66:case 69:case 70:case 72:c=3;break;case 68:case 71:c=4;break;default:c=2}for(v=0;v<47;v++)Db.push({k:n+v,v:c})}Db.sort((function(e,r){return r.v-e.v}));for(v=0;v<Db.length;v++){n=Db[v].k.charAt(0);e.charAt(e.length-1)!==n&&(e+=n)}return e!=="DGBEFHACIJK"}}));var $b=Eb||!Tb||!Ab||!Lb;var getSortCompare=function(e){return function(r,n){return n===void 0?-1:r===void 0?1:e!==void 0?+e(r,n)||0:wb(r)>wb(n)?1:-1}};db({target:"Array",proto:true,forced:$b},{sort:function sort(e){e!==void 0&&mb(e);var r=yb(this);if(Lb)return e===void 0?jb(r):jb(r,e);var n=[];var c=gb(r);var v,f;for(f=0;f<c;f++)f in r&&Mb(n,r[f]);xb(n,getSortCompare(e));v=gb(n);f=0;while(f<v)r[f]=n[f++];while(f<c)bb(r,f++);return r}});var Fb=tm.forEach;var Ib=arrayMethodIsStrict$3;var Rb=Ib("forEach");var Nb=Rb?[].forEach:function forEach(e){return Fb(this,e,arguments.length>1?arguments[1]:void 0)};var Wb=gr;var Gb=zd;var Hb=Bd;var zb=Nb;var Yb=li;var handlePrototype=function(e){if(e&&e.forEach!==zb)try{Yb(e,"forEach",zb)}catch(r){e.forEach=zb}};for(var Ub in Gb)Gb[Ub]&&handlePrototype(Wb[Ub]&&Wb[Ub].prototype);handlePrototype(Hb);function isVertical(e){return e==="top"||e==="bottom"}function horizontalPadding(e){return e[Uy.LEFT]+e[Uy.RIGHT]}function verticalPadding(e){return e[Uy.TOP]+e[Uy.BOTTOM]}var qb,Bb,Vb;var Kb=function(){function DomainCoordinates(e,r){_classCallCheck(this,DomainCoordinates);qb.add(this);this.calendar=e;this.domainPainter=r;this.collection=new Map;this.scrollDirection=Yy.SCROLL_FORWARD}_createClass(DomainCoordinates,[{key:"get",value:function get(e){return this.collection.get(e)}},{key:"update",value:function update(e,r){var n=this;var c=this.calendar.options.options,v=c.verticalOrientation,f=c.domain;this.scrollDirection=r;var p={width:0,height:0};var g=0;var b=r===Yy.SCROLL_FORWARD?-1:1;var w=e.keys;if(this.calendar.options.options.domain.sort==="desc"){w.reverse();b*=-1}e.yankedDomains.forEach((function(e){g+=n.collection.get(e)[v?"height":"width"]}));e.yankedDomains.forEach((function(e){var r=n.collection.get(e);n.collection.set(e,Object.assign(Object.assign({},r),{x:v?r.x:r.x+g*b,y:v?r.y+g*b:r.y}))}));w.forEach((function(e){var r=__classPrivateFieldGet(n,qb,"m",Bb).call(n,e);var c=__classPrivateFieldGet(n,qb,"m",Vb).call(n,e);if(v){p.height+=c;p.width=Math.max(r,p.width)}else{p.width+=r;p.height=Math.max(c,p.height)}var w=p.width-r;var _=p.height-c;n.collection.set(e,Object.assign(Object.assign({},n.collection.get(e)),{x:v?0:w,y:v?_:0,pre_x:v?w:w-g*b,pre_y:v?_-g*b:_,width:r,height:c,inner_width:r-(v?0:f.gutter),inner_height:c-(v?f.gutter:0)}))}));return p}}]);return DomainCoordinates}();qb=new WeakSet,Bb=function _DomainCoordinates_getWidth(e){var r=this.calendar.options.options,n=r.domain,c=r.subDomain,v=r.x,f=r.verticalOrientation;var p=this.calendar.templateCollection.get(c.type).columnsCount(e);var g=(c.width+c.gutter)*p-c.gutter;return horizontalPadding(n.padding)+v.domainHorizontalLabelWidth+(f?0:n.gutter)+g},Vb=function _DomainCoordinates_getHeight(e){var r=this.calendar.options.options,n=r.domain,c=r.subDomain,v=r.x,f=r.verticalOrientation;var p=this.calendar.templateCollection.get(c.type).rowsCount(e);var g=(c.height+c.gutter)*p-c.gutter;return verticalPadding(n.padding)+g+(f?n.gutter:0)+v.domainVerticalLabelHeight};var Qb,Zb;var Jb=".ch-domain";var Xb=function(){function DomainPainter(e){_classCallCheck(this,DomainPainter);Qb.add(this);this.calendar=e;this.coordinates=new Kb(e,this);this.root=null;this.dimensions={width:0,height:0}}_createClass(DomainPainter,[{key:"paint",value:function paint(e,r){var n=this;var c=this.calendar.options.options.animationDuration;var v=r.transition().duration(c);var f=this.coordinates;this.dimensions=f.update(this.calendar.domainCollection,e);var p=[];this.root=r.selectAll(Jb).data(this.calendar.domainCollection.keys,(function(e){return e})).join((function(e){return e.append("svg").attr("x",(function(e){return f.get(e).pre_x})).attr("y",(function(e){return f.get(e).pre_y})).attr("width",(function(e){return f.get(e).inner_width})).attr("height",(function(e){return f.get(e).inner_height})).attr("class",(function(e){return __classPrivateFieldGet(n,Qb,"m",Zb).call(n,e)})).call((function(e){return e.append("rect").attr("width",(function(e){return f.get(e).inner_width})).attr("height",(function(e){return f.get(e).inner_height})).attr("class","".concat(Jb.slice(1),"-bg"))})).call((function(e){return p.push(e.transition(v).attr("x",(function(e){return f.get(e).x})).attr("y",(function(e){return f.get(e).y})).end())}))}),(function(e){return e.call((function(e){return p.push(e.transition(v).attr("x",(function(e){return f.get(e).x})).attr("y",(function(e){return f.get(e).y})).attr("width",(function(e){return f.get(e).inner_width})).attr("height",(function(e){return f.get(e).inner_height})).end())})).call((function(e){return p.push(e.selectAll("".concat(Jb,"-bg")).transition(v).attr("width",(function(e){return f.get(e).inner_width})).attr("height",(function(e){return f.get(e).inner_height})).end())}))}),(function(e){return e.call((function(e){return p.push(e.transition(v).attr("x",(function(e){return f.get(e).x})).attr("y",(function(e){return f.get(e).y})).remove().end())}))}));return p}}]);return DomainPainter}();Qb=new WeakSet,Zb=function _DomainPainter_getClassName(e){var r=Jb.slice(1);var n=this.calendar.dateHelper.date(e);switch(this.calendar.options.options.domain.type){case"hour":r+=" h_".concat(n.hour());break;case"day":r+=" d_".concat(n.date()," dy_").concat(n.format("d")+1);break;case"week":r+=" w_".concat(n.week());break;case"month":r+=" m_".concat(n.month()+1);break;case"year":r+=" y_".concat(n.year());break}return r};var tw=_export;var ew=es.includes;var rw=fails$u;var nw=addToUnscopables$3;var aw=rw((function(){return!Array(1).includes()}));tw({target:"Array",proto:true,forced:aw},{includes:function includes(e){return ew(this,e,arguments.length>1?arguments[1]:void 0)}});nw("includes");var iw=_export;var ow=tm.filter;var sw=arrayMethodHasSpeciesSupport$4;var uw=sw("filter");iw({target:"Array",proto:true,forced:!uw},{filter:function filter(e){return ow(this,e,arguments.length>1?arguments[1]:void 0)}});var cw=anObject$f;var lw=iteratorClose$2;var callWithSafeIterationClosing$1=function(e,r,n,c){try{return c?r(cw(n)[0],n[1]):r(n)}catch(r){lw(e,"throw",r)}};var vw=functionBindContext;var fw=ea;var hw=toObject$a;var dw=callWithSafeIterationClosing$1;var pw=isArrayIteratorMethod$2;var mw=Su;var yw=lengthOfArrayLike$9;var gw=createProperty$4;var bw=getIterator$2;var ww=getIteratorMethod$3;var _w=Array;var xw=function from(e){var r=hw(e);var n=mw(this);var c=arguments.length;var v=c>1?arguments[1]:void 0;var f=v!==void 0;f&&(v=vw(v,c>2?arguments[2]:void 0));var p=ww(r);var g=0;var b,w,_,x,k,C;if(!p||this===_w&&pw(p)){b=yw(r);w=n?new this(b):_w(b);for(;b>g;g++){C=f?v(r[g],g):r[g];gw(w,g,C)}}else{x=bw(r,p);k=x.next;w=n?new this:[];for(;!(_=fw(k,x)).done;g++){C=f?dw(x,v,[_.value,g],true):_.value;gw(w,g,C)}}w.length=g;return w};var Sw=_export;var Ow=xw;var kw=checkCorrectnessOfIteration$3;var Cw=!kw((function(e){Array.from(e)}));Sw({target:"Array",stat:true,forced:Cw},{from:Ow});var Pw,Dw,jw,Mw;var Ew={year:"YYYY",month:"MMMM",week:"wo [week] YYYY",xDay:"Do MMM",ghDay:"Do MMM",day:"Do MMM",hour:"HH:00",minute:"HH:mm"};var Tw=function(){function DomainCollection(e,r,n,c){var v=arguments.length>4&&arguments[4]!==void 0&&arguments[4];_classCallCheck(this,DomainCollection);Pw.add(this);this.collection=new Map;this.dateHelper=e;if(r&&n&&c){var f=this.dateHelper.intervals(r,n,c,v).map((function(e){return castArray(e)}));this.collection=new Map(f)}this.min=0;this.max=0;this.keys=[];this.yankedDomains=[];this.collection.size>0&&__classPrivateFieldGet(this,Pw,"m",Mw).call(this)}_createClass(DomainCollection,[{key:"has",value:function has(e){return this.collection.has(e)}},{key:"get",value:function get(e){return this.collection.get(e)}},{key:"forEach",value:function forEach(e){return this.collection.forEach(e)}},{key:"at",value:function at(e){return this.keys[e]}},{key:"clamp",value:function clamp(e,r){var n=this;e&&this.min<e&&this.keys.filter((function(r){return r<e})).forEach((function(e){return n.collection.delete(e)}));r&&this.max>r&&this.keys.filter((function(e){return e>r})).forEach((function(e){return n.collection.delete(e)}));__classPrivateFieldGet(this,Pw,"m",Mw).call(this);return this}},{key:"merge",value:function merge(e,r,n){var c=this;this.yankedDomains=[];e.keys.forEach((function(e,v){if(!c.has(e)){if(c.collection.size>=r){var f=c.max;e>c.max&&(f=c.min);f&&c.collection.delete(f)&&c.yankedDomains.push(f)}c.collection.set(e,n(e,v));__classPrivateFieldGet(c,Pw,"m",Mw).call(c)}}));this.yankedDomains=this.yankedDomains.sort((function(e,r){return e-r}))}},{key:"slice",value:function slice(){var e=this;var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;var n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];if(this.keys.length>r){var c=n?this.keys.slice(0,-r):this.keys.slice(r);c.forEach((function(r){e.collection.delete(r)}));__classPrivateFieldGet(this,Pw,"m",Mw).call(this)}return this}},{key:"fill",value:function fill(e,r,n){var c=this;var v=r.x,f=r.y,p=r.groupY,g=r.defaultValue;var b=this.groupRecords(e,v,n);this.keys.forEach((function(e){var r=b.get(e)||{};__classPrivateFieldGet(c,Pw,"m",Dw).call(c,e,r,f,p,g)}))}},{key:"groupRecords",value:function groupRecords(e,r,n){var c=this;var v=new Map;var f=new Map;this.keys.forEach((function(e){c.get(e).forEach((function(r){f.set(r.t,e)}))}));e.forEach((function(e){var p=c.extractTimestamp(e,r,n);if(f.has(p)){var g=f.get(p);var b=v.get(g)||{};b[p]||(b[p]=[]);b[p].push(e);v.set(g,b)}}));return v}},{key:"groupValues",value:function groupValues(e,r){var n=e.filter((function(e){return e!==null}));if(typeof r==="string"){if(n.every((function(e){return typeof e==="number"})))switch(r){case"sum":return n.reduce((function(e,r){return e+r}),0);case"count":return n.length;case"min":return Math.min.apply(Math,_toConsumableArray(n))||null;case"max":return Math.max.apply(Math,_toConsumableArray(n))||null;case"average":return n.length>0?n.reduce((function(e,r){return e+r}),0)/n.length:null;default:return null}switch(r){case"count":return n.length;default:return null}}else if(typeof r==="function")return r(n);return null}},{key:"extractTimestamp",value:function extractTimestamp(e,r,n){var c=typeof r==="function"?r(e):e[r];typeof c==="string"&&(c=+new Date(c));return n(c)}}]);return DomainCollection}();Pw=new WeakSet,Dw=function _DomainCollection_setSubDomainValues(e,r,n,c,v){var f=this;this.get(e).forEach((function(p,g){var b=v;r.hasOwnProperty(p.t)&&(b=f.groupValues(__classPrivateFieldGet(f,Pw,"m",jw).call(f,r[p.t],n),c));f.get(e)[g].v=b}))},jw=function _DomainCollection_extractValues(e,r){return e.map((function(e){return typeof r==="function"?r(e):e[r]}))},Mw=function _DomainCollection_refreshKeys(){this.keys=Array.from(this.collection.keys()).map((function(e){return parseInt(e,10)})).sort((function(e,r){return e-r}));var e=this.keys;this.min=e[0];this.max=e[e.length-1];return this.keys};var Aw,Lw,$w,Fw,Iw,Rw,Nw;var Ww=".ch-domain-text";var Gw=function(){function DomainLabelPainter(e){_classCallCheck(this,DomainLabelPainter);Aw.add(this);this.calendar=e}_createClass(DomainLabelPainter,[{key:"paint",value:function paint(e){var r=this;var n=this.calendar.options.options.domain,c=n.label,v=n.type;var f=this.calendar.dateHelper;var p=c.text;if(p!==null&&p!==""){typeof p==="undefined"&&(p=Ew[v]);e.selectAll(Ww).data((function(e){return[e]}),(function(e){return e})).join((function(e){return e.append("text").attr("class",Ww.slice(1)).attr("x",(function(e){return __classPrivateFieldGet(r,Aw,"m",$w).call(r,e)})).attr("y",(function(e){return __classPrivateFieldGet(r,Aw,"m",Fw).call(r,e)})).attr("text-anchor",c.textAlign).attr("dominant-baseline",(function(){return __classPrivateFieldGet(r,Aw,"m",Lw).call(r)})).text((function(e,r,n){return f.format(e,p,n[r])})).call((function(e){return __classPrivateFieldGet(r,Aw,"m",Nw).call(r,e)}))}),(function(e){e.attr("x",(function(e){return __classPrivateFieldGet(r,Aw,"m",$w).call(r,e)})).attr("y",(function(e){return __classPrivateFieldGet(r,Aw,"m",Fw).call(r,e)})).attr("text-anchor",c.textAlign).attr("dominant-baseline",(function(){return __classPrivateFieldGet(r,Aw,"m",Lw).call(r)})).text((function(e,r,n){return f.format(e,p,n[r])})).call((function(e){return __classPrivateFieldGet(r,Aw,"m",Nw).call(r,e)}))}))}}}]);return DomainLabelPainter}();Aw=new WeakSet,Lw=function _DomainLabelPainter_textVerticalAlign(){var e=this.calendar.options.options.domain.label,r=e.position,n=e.rotate;return isVertical(r)?"middle":n==="left"&&r==="left"||n==="right"&&r==="right"?"bottom":"hanging"},$w=function _DomainLabelPainter_getX(e){var r=this.calendar.options.options.domain,n=r.padding,c=r.label,v=c.position,f=c.textAlign,p=c.offset;var g=this.calendar.options.options.x.domainHorizontalLabelWidth;var b=n[Uy.LEFT];v==="right"&&(b+=__classPrivateFieldGet(this,Aw,"m",Iw).call(this,e));f==="middle"&&(["top","bottom"].includes(v)?b+=__classPrivateFieldGet(this,Aw,"m",Iw).call(this,e)/2:b+=g/2);f==="end"&&(isVertical(v)?b+=__classPrivateFieldGet(this,Aw,"m",Iw).call(this,e):b+=g);return b+p.x},Fw=function _DomainLabelPainter_getY(e){var r=this.calendar.options.options,n=r.domain,c=n.label,v=c.position,f=c.offset,p=n.padding,g=r.x;var b=p[Uy.TOP]+g.domainVerticalLabelHeight/2;v==="bottom"&&(b+=__classPrivateFieldGet(this,Aw,"m",Rw).call(this,e));return b+f.y},Iw=function _DomainLabelPainter_getDomainInsideWidth(e){var r=this.calendar.options.options,n=r.domain.padding,c=r.x.domainHorizontalLabelWidth;var v=this.calendar.calendarPainter.domainsContainerPainter.domainPainter.coordinates;return v.get(e).inner_width-c-horizontalPadding(n)},Rw=function _DomainLabelPainter_getDomainInsideHeight(e){var r=this.calendar.options.options,n=r.x.domainVerticalLabelHeight,c=r.domain.padding;var v=this.calendar.calendarPainter.domainsContainerPainter.domainPainter.coordinates;return v.get(e).inner_height-n-verticalPadding(c)},Nw=function _DomainLabelPainter_domainRotate(e){var r=this;var n=this.calendar.options.options,c=n.domain.label,v=c.rotate,f=c.textAlign,p=c.position,g=n.x;var b=g.domainHorizontalLabelWidth;switch(v){case"right":e.attr("transform",(function(e){var n=__classPrivateFieldGet(r,Aw,"m",Iw).call(r,e);var c=__classPrivateFieldGet(r,Aw,"m",Rw).call(r,e);var v=["rotate(90, ".concat(p==="right"?n:b,", 0)")];switch(p){case"right":f==="middle"?v.push("translate(".concat(c/2-b/2,")")):f==="end"&&v.push("translate(".concat(c-b,")"));break;case"left":f==="start"?v.push("translate(".concat(b,")")):f==="middle"?v.push("translate(".concat(b/2+c/2,")")):f==="end"&&v.push("translate(".concat(c,")"));break}return v.join(",")}));break;case"left":e.attr("transform",(function(e){var n=__classPrivateFieldGet(r,Aw,"m",Iw).call(r,e);var c=__classPrivateFieldGet(r,Aw,"m",Rw).call(r,e);var v=["rotate(270, ".concat(p==="right"?n:b,", 0)")];switch(p){case"right":f==="start"?v.push("translate(-".concat(c,")")):f==="middle"?v.push("translate(-".concat(c/2+b/2,")")):f==="end"&&v.push("translate(-".concat(b,")"));break;case"left":f==="start"?v.push("translate(".concat(b-c,")")):f==="middle"&&v.push("translate(".concat(b/2-c/2,")"));break}return v.join(",")}));break}};var Hw="\t\n\v\f\r                　\u2028\u2029\ufeff";var zw=$r;var Yw=requireObjectCoercible$7;var Uw=toString$9;var qw=Hw;var Bw=zw("".replace);var Vw=RegExp("^["+qw+"]+");var Kw=RegExp("(^|[^"+qw+"])["+qw+"]+$");var createMethod$1=function(e){return function(r){var n=Uw(Yw(r));e&1&&(n=Bw(n,Vw,""));e&2&&(n=Bw(n,Kw,"$1"));return n}};var Qw={start:createMethod$1(1),end:createMethod$1(2),trim:createMethod$1(3)};var Zw=Za.PROPER;var Jw=fails$u;var Xw=Hw;var t_="​᠎";var stringTrimForced=function(e){return Jw((function(){return!!Xw[e]()||t_[e]()!==t_||Zw&&Xw[e].name!==e}))};var e_=_export;var r_=Qw.trim;var n_=stringTrimForced;e_({target:"String",proto:true,forced:n_("trim")},{trim:function trim(){return r_(this)}});var a_,i_,o_,s_,u_,c_,l_;var v_=".ch-subdomain";var f_="highlight";var h_=function(){function SubDomainPainter(e){_classCallCheck(this,SubDomainPainter);a_.add(this);this.calendar=e;this.root=null}_createClass(SubDomainPainter,[{key:"paint",value:function paint(e){var r=this;this.root=e||this.root;var n="".concat(v_,"-container");var c=this.root.selectAll(n).data((function(e){return[e]}),(function(e){return e})).join((function(e){return e.append("svg").call((function(e){return __classPrivateFieldGet(r,a_,"m",i_).call(r,e)})).attr("class",n.slice(1))}),(function(e){return e.call((function(e){return __classPrivateFieldGet(r,a_,"m",i_).call(r,e)}))}));var v=this.calendar.options.options.subDomain,f=v.radius,p=v.width,g=v.height,b=v.sort;var w=this.calendar.eventEmitter;c.selectAll("g").data((function(e){var n=r.calendar.domainCollection.get(e);if(b==="desc"){var c=Math.max.apply(Math,_toConsumableArray(n.map((function(e){return e.x}))));n.forEach((function(e,r){n[r].x=Math.abs(e.x-c)}))}return n})).join((function(e){return e.append("g").call((function(e){return e.insert("rect").attr("class",(function(e){return __classPrivateFieldGet(r,a_,"m",o_).call(r,e.t,"".concat(v_.slice(1),"-bg"))})).attr("width",p).attr("height",g).attr("x",(function(e){return __classPrivateFieldGet(r,a_,"m",c_).call(r,e)})).attr("y",(function(e){return __classPrivateFieldGet(r,a_,"m",l_).call(r,e)})).on("click",(function(e,r){return w.emit("click",e,r.t,r.v)})).on("mouseover",(function(e,r){return w.emit("mouseover",e,r.t,r.v)})).on("mouseout",(function(e,r){return w.emit("mouseout",e,r.t,r.v)})).attr("rx",f>0?f:null).attr("ry",f>0?f:null)})).call((function(e){return __classPrivateFieldGet(r,a_,"m",s_).call(r,e)}))}),(function(e){return e.selectAll("rect").attr("class",(function(e){return __classPrivateFieldGet(r,a_,"m",o_).call(r,e.t,"".concat(v_.slice(1),"-bg"))})).attr("width",p).attr("height",g).attr("x",(function(e){return __classPrivateFieldGet(r,a_,"m",c_).call(r,e)})).attr("y",(function(e){return __classPrivateFieldGet(r,a_,"m",l_).call(r,e)})).attr("rx",f).attr("ry",f)}))}}]);return SubDomainPainter}();a_=new WeakSet,i_=function _SubDomainPainter_setPositions(e){var r=this.calendar.options.options;var n=r.domain,c=n.padding,v=n.label.position;e.attr("x",(function(){var e=c[Uy.LEFT];v==="left"&&(e+=r.x.domainHorizontalLabelWidth);return e})).attr("y",(function(){var e=c[Uy.TOP];v==="top"&&(e+=r.x.domainVerticalLabelHeight);return e}))},o_=function _SubDomainPainter_classname(e){var r=this;var n=this.calendar.options.options,c=n.date.highlight,v=n.subDomain.type;var f="";c.length>0&&c.forEach((function(n){var c=r.calendar.templateCollection.get(v).extractUnit;c(+n)===c(e)&&(f=f_)}));for(var p=arguments.length,g=new Array(p>1?p-1:0),b=1;b<p;b++)g[b-1]=arguments[b];return[f].concat(g).join(" ").trim()},s_=function _SubDomainPainter_appendText(e){var r=this;var n=this.calendar.options.options.subDomain,c=n.width,v=n.height,f=n.label;return f?e.append("text").attr("class",(function(e){return __classPrivateFieldGet(r,a_,"m",o_).call(r,e.t,"".concat(v_.slice(1),"-text"))})).attr("x",(function(e){return __classPrivateFieldGet(r,a_,"m",c_).call(r,e)+c/2})).attr("y",(function(e){return __classPrivateFieldGet(r,a_,"m",l_).call(r,e)+v/2})).attr("text-anchor","middle").attr("dominant-baseline","central").text((function(e,n,c){return r.calendar.dateHelper.format(e.t,f,e.v,c[n])})):null},u_=function _SubDomainPainter_getCoordinates(e,r){var n=this.calendar.options.options.subDomain;return r[e]*(n[e==="x"?"width":"height"]+n.gutter)},c_=function _SubDomainPainter_getX(e){return __classPrivateFieldGet(this,a_,"m",u_).call(this,"x",e)},l_=function _SubDomainPainter_getY(e){return __classPrivateFieldGet(this,a_,"m",u_).call(this,"y",e)};var d_,p_,m_,y_;var g_=".ch-domain-container";var b_="in-transition";var w_=function(){function DomainsContainerPainter(e){_classCallCheck(this,DomainsContainerPainter);d_.add(this);this.calendar=e;this.domainPainter=new Xb(e);this.subDomainPainter=new h_(e);this.domainLabelPainter=new Gw(e);this.dimensions={width:0,height:0};this.transitionsQueueCount=0}_createClass(DomainsContainerPainter,[{key:"setup",value:function setup(){this.root=this.calendar.calendarPainter.root.attr("x",0).attr("y",0).append("svg").attr("class",g_.slice(1)).append("svg").attr("class","".concat(g_.slice(1),"-animation-wrapper"))}},{key:"paint",value:function paint(e){var r=this;__classPrivateFieldGet(this,d_,"m",p_).call(this);var n=this.domainPainter.paint(e,this.root);this.subDomainPainter.paint(this.domainPainter.root);this.domainLabelPainter.paint(this.domainPainter.root);__classPrivateFieldGet(this,d_,"m",y_).call(this);Promise.allSettled(n).then((function(){__classPrivateFieldGet(r,d_,"m",m_).call(r)}));return n}},{key:"updatePosition",value:function updatePosition(){var r;if(!((r=this.root)===null||r===void 0?void 0:r.node()))return Promise.resolve();var n=this.calendar.options.options.animationDuration;var c=this.calendar.pluginManager.getHeightFromPosition("top");var v=this.calendar.pluginManager.getWidthFromPosition("left");return[e(this.root.node().parentNode).transition().duration(n).call((function(e){e.attr("x",v).attr("y",c)})).end()]}},{key:"width",value:function width(){return this.dimensions.width}},{key:"height",value:function height(){return this.dimensions.height}},{key:"destroy",value:function destroy(){__classPrivateFieldGet(this,d_,"m",p_).call(this);return Promise.resolve()}}]);return DomainsContainerPainter}();d_=new WeakSet,p_=function _DomainsContainerPainter_startAnimation(){var r;if((r=this.root)===null||r===void 0?void 0:r.node()){this.transitionsQueueCount+=1;e(this.root.node().parentNode).classed(b_,true)}},m_=function _DomainsContainerPainter_endAnimation(){var r;if((r=this.root)===null||r===void 0?void 0:r.node()){this.transitionsQueueCount-=1;this.transitionsQueueCount===0&&e(this.root.node().parentNode).classed(b_,false)}},y_=function _DomainsContainerPainter_recomputeDimensions(){var e=this.calendar.options.options,r=e.animationDuration,n=e.verticalOrientation,c=e.domain.gutter;var v=this.domainPainter.dimensions;this.dimensions={width:v.width-(n?0:c),height:v.height-(n?c:0)};this.root.transition().duration(r).attr("width",this.dimensions.width).attr("height",this.dimensions.height)};var __=function(){function PluginPainter(e){_classCallCheck(this,PluginPainter);this.calendar=e}_createClass(PluginPainter,[{key:"paint",value:function paint(){var e=[];e=e.concat(this.calendar.pluginManager.paintAll());e=e.concat(this.setPluginsPosition());return e}},{key:"setPluginsPosition",value:function setPluginsPosition(){var e=this.calendar.pluginManager;var r=this.calendar.options.options.animationDuration;var n=this.calendar.calendarPainter.domainsContainerPainter;var c=e.getFromPosition("top");var v=e.getFromPosition("right");var f=e.getFromPosition("bottom");var p=e.getFromPosition("left");var g=e.getHeightFromPosition("top");var b=e.getWidthFromPosition("left");var w=[];var _=0;c.forEach((function(e){w.push(e.root.transition().duration(r).attr("y",_).attr("x",b).end());_+=e.options.dimensions.height}));var x=0;p.forEach((function(e){w.push(e.root.transition().duration(r).attr("x",x).attr("y",g).end());x+=e.options.dimensions.width}));f.forEach((function(e){w.push(e.root.transition().duration(r).attr("x",b).attr("y",g+n.height()).end())}));x+=n.width();v.forEach((function(e){w.push(e.root.transition().duration(r).attr("x",x).attr("y",g).end());x+=e.options.dimensions.width}));return w}},{key:"insideWidth",value:function insideWidth(){return this.calendar.pluginManager.getWidthFromPosition("left")+this.calendar.pluginManager.getWidthFromPosition("right")}},{key:"insideHeight",value:function insideHeight(){return this.calendar.pluginManager.getHeightFromPosition("top")+this.calendar.pluginManager.getHeightFromPosition("bottom")}}]);return PluginPainter}();var x_,S_,O_,k_;var C_=".ch-container";var P_=function(){function CalendarPainter(e){_classCallCheck(this,CalendarPainter);x_.add(this);this.calendar=e;this.dimensions={width:0,height:0};this.root=null;this.domainsContainerPainter=new w_(e);this.pluginPainter=new __(e)}_createClass(CalendarPainter,[{key:"setup",value:function setup(){var r=this.calendar.options.options,n=r.itemSelector,c=r.theme;if(!this.root){this.root=e(n).append("svg").attr("data-theme",c).attr("class",C_.slice(1));this.domainsContainerPainter.setup()}this.calendar.pluginManager.setupAll();return true}},{key:"paint",value:function paint(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yy.SCROLL_NONE;var r=this.domainsContainerPainter.paint(e).concat(this.pluginPainter.paint()).concat(this.domainsContainerPainter.updatePosition());__classPrivateFieldGet(this,x_,"m",k_).call(this);return Promise.allSettled(r)}},{key:"destroy",value:function destroy(){var e=this.calendar.pluginManager.destroyAll().concat(this.domainsContainerPainter.destroy());if(!this.root)return Promise.allSettled(e);e.push(this.root.transition().duration(this.calendar.options.options.animationDuration).attr("width",0).attr("height",0).remove().end());return Promise.allSettled(e)}}]);return CalendarPainter}();x_=new WeakSet,S_=function _CalendarPainter_getHeight(){return this.domainsContainerPainter.height()+this.pluginPainter.insideHeight()},O_=function _CalendarPainter_getWidth(){return this.domainsContainerPainter.width()+this.pluginPainter.insideWidth()},k_=function _CalendarPainter_resize(){var e=this.calendar.options.options;var r=__classPrivateFieldGet(this,x_,"m",O_).call(this);var n=__classPrivateFieldGet(this,x_,"m",S_).call(this);this.root.transition().duration(e.animationDuration).attr("width",r).attr("height",n);r===this.dimensions.width&&n===this.dimensions.height||this.calendar.eventEmitter.emit("resize",r,n,this.dimensions.width,this.dimensions.height);this.dimensions={width:r,height:n}};var D_=typeof global=="object"&&global&&global.Object===Object&&global;var j_=D_;var M_=typeof self=="object"&&self&&self.Object===Object&&self;var E_=j_||M_||Function("return this")();var T_=E_;var A_=T_.Symbol;var L_=A_;var $_=Object.prototype;var F_=$_.hasOwnProperty;var I_=$_.toString;var R_=L_?L_.toStringTag:void 0;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(e){var r=F_.call(e,R_),n=e[R_];try{e[R_]=void 0;var c=true}catch(e){}var v=I_.call(e);c&&(r?e[R_]=n:delete e[R_]);return v}var N_=Object.prototype;var W_=N_.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString$1(e){return W_.call(e)}var G_="[object Null]",H_="[object Undefined]";var z_=L_?L_.toStringTag:void 0;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(e){return e==null?e===void 0?H_:G_:z_&&z_ in Object(e)?getRawTag(e):objectToString$1(e)}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject$2(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Y_="[object AsyncFunction]",U_="[object Function]",q_="[object GeneratorFunction]",B_="[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(e){if(!isObject$2(e))return false;var r=baseGetTag(e);return r==U_||r==q_||r==Y_||r==B_}var V_=_export;var K_=toObject$a;var Q_=If;var Z_=fails$u;var J_=Z_((function(){Q_(1)}));V_({target:"Object",stat:true,forced:J_},{keys:function keys(e){return Q_(K_(e))}});var X_=Rn;var tx=classofRaw$2;var ex=wellKnownSymbol$m;var rx=ex("match");var isRegexp=function(e){var r;return X_(e)&&((r=e[rx])!==void 0?!!r:tx(e)==="RegExp")};var nx=isRegexp;var ax=TypeError;var notARegexp=function(e){if(nx(e))throw new ax("The method doesn't accept regular expressions");return e};var ix=wellKnownSymbol$m;var ox=ix("match");var correctIsRegexpLogic=function(e){var r=/./;try{"/./"[e](r)}catch(n){try{r[ox]=false;return"/./"[e](r)}catch(e){}}return false};var sx=_export;var ux=functionUncurryThisClause;var cx=bo.f;var lx=toLength$3;var vx=toString$9;var fx=notARegexp;var hx=requireObjectCoercible$7;var dx=correctIsRegexpLogic;var px=ux("".startsWith);var mx=ux("".slice);var yx=Math.min;var gx=dx("startsWith");var bx=!gx&&!!function(){var e=cx(String.prototype,"startsWith");return e&&!e.writable}();sx({target:"String",proto:true,forced:!bx&&!gx},{startsWith:function startsWith(e){var r=vx(hx(this));fx(e);var n=lx(yx(arguments.length>1?arguments[1]:void 0,r.length));var c=vx(e);return px?px(r,c,n):mx(r,n,n+c.length)===c}});var wx=Ln;var _x=fails$u;var xx=$r;var Sx=bh;var Ox=If;var kx=toIndexedObject$9;var Cx=wo.f;var Px=xx(Cx);var Dx=xx([].push);var jx=wx&&_x((function(){var e=Object.create(null);e[2]=2;return!Px(e,2)}));var createMethod=function(e){return function(r){var n=kx(r);var c=Ox(n);var v=jx&&Sx(n)===null;var f=c.length;var p=0;var g=[];var b;while(f>p){b=c[p++];wx&&!(v?b in n:Px(n,b))||Dx(g,e?[b,n[b]]:n[b])}return g}};var Mx={entries:createMethod(true),values:createMethod(false)};var Ex=_export;var Tx=Mx.entries;Ex({target:"Object",stat:true},{entries:function entries(e){return Tx(e)}});function defined(e){return e!=null&&!Number.isNaN(e)}function ascendingDefined(e,r){return+defined(r)-+defined(e)||n(e,r)}function finite(e){return isFinite(e)?e:NaN}function positive(e){return e>0&&isFinite(e)?e:NaN}function negative(e){return e<0&&isFinite(e)?e:NaN}const Ax=/^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;function parse(e,r){return Ax.test(e+="")?new Date(e):typeof r==="function"?r(e):r}const Lx=new Map([["second",c],["minute",v],["hour",f],["day",p],["week",g],["month",b],["quarter",b.every(3)],["half",b.every(6)],["year",w],["monday",_],["tuesday",x],["wednesday",k],["thursday",C],["friday",P],["saturday",j],["sunday",E]]);const $x=new Map([["second",T],["minute",A],["hour",L],["day",I],["week",R],["month",N],["quarter",N.every(3)],["half",N.every(6)],["year",W],["monday",G],["tuesday",H],["wednesday",z],["thursday",Y],["friday",U],["saturday",q],["sunday",B]]);function maybeTimeInterval(e){const r=Lx.get(`${e}`.toLowerCase());if(!r)throw new Error(`unknown interval: ${e}`);return r}function maybeUtcInterval(e){const r=$x.get(`${e}`.toLowerCase());if(!r)throw new Error(`unknown interval: ${e}`);return r}const Fx=Object.getPrototypeOf(Uint8Array);const Ix=Object.prototype.toString;const constant$1=e=>()=>e;function coerceNumbers(e){return e instanceof Fx?e:map(e,coerceNumber,Float64Array)}function coerceNumber(e){return e==null?NaN:Number(e)}function coerceDates(e){return map(e,coerceDate)}function coerceDate(e){return e instanceof Date&&!isNaN(e)?e:typeof e==="string"?parse(e):e==null||isNaN(e=+e)?void 0:new Date(e)}function arrayify(e){return e==null||e instanceof Array||e instanceof Fx?e:Array.from(e)}function map(e,r,n=Array){return e==null?e:e instanceof n?e.map(r):n.from(e,r)}function slice(e,r=Array){return e instanceof r?e.slice():r.from(e)}function isObject(e){return e?.toString===Ix}function isScaleOptions(e){return isObject(e)&&(e.type!==void 0||e.domain!==void 0)}function maybeInterval(e,r){if(e!=null){if(typeof e==="number"){0<e&&e<1&&Number.isInteger(1/e)&&(e=-1/e);const r=Math.abs(e);return e<0?{floor:e=>Math.floor(e*r)/r,offset:e=>(e*r+1)/r,range:(e,n)=>V(Math.ceil(e*r),n*r).map((e=>e/r))}:{floor:e=>Math.floor(e/r)*r,offset:e=>e+r,range:(e,n)=>V(Math.ceil(e/r),n/r).map((e=>e*r))}}if(typeof e==="string")return(r==="time"?maybeTimeInterval:maybeUtcInterval)(e);if(typeof e.floor!=="function")throw new Error("invalid interval; missing floor method");if(typeof e.offset!=="function")throw new Error("invalid interval; missing offset method");return e}}function maybeRangeInterval(e,r){e=maybeInterval(e,r);if(e&&typeof e.range!=="function")throw new Error("invalid interval: missing range method");return e}function maybeNiceInterval(e,r){e=maybeRangeInterval(e,r);if(e&&typeof e.ceil!=="function")throw new Error("invalid interval: missing ceil method");return e}function isOrdinal(e){for(const r of e){if(r==null)continue;const e=typeof r;return e==="string"||e==="boolean"}}function isTemporal(e){for(const r of e)if(r!=null)return r instanceof Date}function isTemporalString(e){for(const r of e)if(r!=null)return typeof r==="string"&&isNaN(r)&&parse(r)}function isNumericString(e){for(const r of e)if(r!=null){if(typeof r!=="string")return false;if(r.trim())return!isNaN(r)}}function isNoneish(e){return e==null||isNone(e)}function isNone(e){return/^\s*none\s*$/i.test(e)}function orderof(e){if(e==null)return;const r=e[0];const n=e[e.length-1];return K(r,n)}const Rx=Symbol("position");const Nx=Symbol("color");const Wx=Symbol("radius");const Gx=Symbol("length");const Hx=Symbol("opacity");const zx=Symbol("symbol");const Yx=new Map([["x",Rx],["y",Rx],["fx",Rx],["fy",Rx],["r",Wx],["color",Nx],["opacity",Hx],["symbol",zx],["length",Gx]]);const Ux=Math.sqrt(3);const qx=2/Ux;const Bx={draw(e,r){const n=Math.sqrt(r/Math.PI),c=n*qx,v=c/2;e.moveTo(0,c);e.lineTo(n,v);e.lineTo(n,-v);e.lineTo(0,-c);e.lineTo(-n,-v);e.lineTo(-n,v);e.closePath()}};const Vx=new Map([["asterisk",Q],["circle",Z],["cross",J],["diamond",X],["diamond2",tt],["hexagon",Bx],["plus",et],["square",rt],["square2",nt],["star",it],["times",ot],["triangle",st],["triangle2",ut],["wye",ct]]);function isSymbolObject(e){return e&&typeof e.draw==="function"}function maybeSymbol(e){if(e==null||isSymbolObject(e))return e;const r=Vx.get(`${e}`.toLowerCase());if(r)return r;throw new Error(`invalid symbol: ${e}`)}function warn(e){console.warn(e)}const Kx=new Map([["accent",lt],["category10",vt],["dark2",ft],["paired",ht],["pastel1",dt],["pastel2",pt],["set1",mt],["set2",yt],["set3",gt],["tableau10",bt],["brbg",scheme11(wt,_t)],["prgn",scheme11(xt,St)],["piyg",scheme11(Ot,kt)],["puor",scheme11(Ct,Pt)],["rdbu",scheme11(Dt,jt)],["rdgy",scheme11(Mt,Et)],["rdylbu",scheme11(Tt,At)],["rdylgn",scheme11(Lt,$t)],["spectral",scheme11(Ft,It)],["burd",scheme11r(Dt,jt)],["buylrd",scheme11r(Tt,At)],["blues",scheme9(Rt,Nt)],["greens",scheme9(Wt,Gt)],["greys",scheme9(Ht,zt)],["oranges",scheme9(Yt,Ut)],["purples",scheme9(qt,Bt)],["reds",scheme9(Vt,Kt)],["turbo",schemei(Qt)],["viridis",schemei(Zt)],["magma",schemei(Jt)],["inferno",schemei(Xt)],["plasma",schemei(te)],["cividis",schemei(ee)],["cubehelix",schemei(re)],["warm",schemei(ne)],["cool",schemei(ae)],["bugn",scheme9(ie,oe)],["bupu",scheme9(se,ue)],["gnbu",scheme9(ce,le)],["orrd",scheme9(ve,fe)],["pubu",scheme9(he,de)],["pubugn",scheme9(pe,me)],["purd",scheme9(ye,ge)],["rdpu",scheme9(be,we)],["ylgn",scheme9(_e,xe)],["ylgnbu",scheme9(Se,Oe)],["ylorbr",scheme9(ke,Ce)],["ylorrd",scheme9(Pe,De)],["rainbow",schemeicyclical(je)],["sinebow",schemeicyclical(Me)]]);function scheme9(e,r){return({length:n})=>{if(n===1)return[e[3][1]];if(n===2)return[e[3][1],e[3][2]];n=Math.max(3,Math.floor(n));return n>9?Ee(r,n):e[n]}}function scheme11(e,r){return({length:n})=>{if(n===2)return[e[3][0],e[3][2]];n=Math.max(3,Math.floor(n));return n>11?Ee(r,n):e[n]}}function scheme11r(e,r){return({length:n})=>{if(n===2)return[e[3][2],e[3][0]];n=Math.max(3,Math.floor(n));return n>11?Ee((e=>r(1-e)),n):e[n].slice().reverse()}}function schemei(e){return({length:r})=>Ee(e,Math.max(2,Math.floor(r)))}function schemeicyclical(e){return({length:r})=>Ee(e,Math.floor(r)+1).slice(0,-1)}function ordinalScheme(e){const r=`${e}`.toLowerCase();if(!Kx.has(r))throw new Error(`unknown ordinal scheme: ${r}`);return Kx.get(r)}function ordinalRange(e,r){const n=ordinalScheme(e);const c=typeof n==="function"?n({length:r}):n;return c.length!==r?c.slice(0,r):c}function maybeBooleanRange(e,r="greys"){const n=new Set;const[c,v]=ordinalRange(r,2);for(const r of e)if(r!=null)if(r===true)n.add(v);else{if(r!==false)return;n.add(c)}return[...n]}const Qx=new Map([["brbg",_t],["prgn",St],["piyg",kt],["puor",Pt],["rdbu",jt],["rdgy",Et],["rdylbu",At],["rdylgn",$t],["spectral",It],["burd",e=>jt(1-e)],["buylrd",e=>At(1-e)],["blues",Nt],["greens",Gt],["greys",zt],["purples",Bt],["reds",Kt],["oranges",Ut],["turbo",Qt],["viridis",Zt],["magma",Jt],["inferno",Xt],["plasma",te],["cividis",ee],["cubehelix",re],["warm",ne],["cool",ae],["bugn",oe],["bupu",ue],["gnbu",le],["orrd",fe],["pubugn",me],["pubu",de],["purd",ge],["rdpu",we],["ylgnbu",Oe],["ylgn",xe],["ylorbr",Ce],["ylorrd",De],["rainbow",je],["sinebow",Me]]);function quantitativeScheme(e){const r=`${e}`.toLowerCase();if(!Qx.has(r))throw new Error(`unknown quantitative scheme: ${r}`);return Qx.get(r)}const Zx=new Set(["brbg","prgn","piyg","puor","rdbu","rdgy","rdylbu","rdylgn","spectral","burd","buylrd"]);function isDivergingScheme(e){return e!=null&&Zx.has(`${e}`.toLowerCase())}const flip=e=>r=>e(1-r);const Jx=[0,1];const Xx=new Map([["number",Te],["rgb",Ae],["hsl",Le],["hcl",$e],["lab",Fe]]);function maybeInterpolator(e){const r=`${e}`.toLowerCase();if(!Xx.has(r))throw new Error(`unknown interpolator: ${r}`);return Xx.get(r)}function createScaleQ(e,r,n,{type:c,nice:v,clamp:f,zero:p,domain:g=inferAutoDomain(e,n),unknown:b,round:w,scheme:_,interval:x,range:k=(Yx.get(e)===Wx?inferRadialRange(n,g):Yx.get(e)===Gx?inferLengthRange(n,g):Yx.get(e)===Hx?Jx:void 0),interpolate:C=(Yx.get(e)===Nx?_==null&&k!==void 0?Ae:quantitativeScheme(_!==void 0?_:c==="cyclical"?"rainbow":"turbo"):w?Ne:Te),reverse:P}){x=maybeRangeInterval(x,c);c!=="cyclical"&&c!=="sequential"||(c="linear");P=!!P;typeof C!=="function"&&(C=maybeInterpolator(C));if(C.length===1){if(P){C=flip(C);P=false}if(k===void 0){k=Float64Array.from(g,((e,r)=>r/(g.length-1)));k.length===2&&(k=Jx)}r.interpolate((k===Jx?constant$1:interpolatePiecewise)(C))}else r.interpolate(C);if(p){const[e,r]=Ie(g);if(e>0||r<0){g=slice(g);orderof(g)!==Math.sign(e)?g[g.length-1]=0:g[0]=0}}P&&(g=Re(g));r.domain(g).unknown(b);v&&(r.nice(maybeNice(v,c)),g=r.domain());k!==void 0&&r.range(k);f&&r.clamp(f);return{type:c,domain:g,range:k,scale:r,interpolate:C,interval:x}}function maybeNice(e,r){return e===true?void 0:typeof e==="number"?e:maybeNiceInterval(e,r)}function createScaleLinear(e,r,n){return createScaleQ(e,We(),r,n)}function createScaleSqrt(e,r,n){return createScalePow(e,r,{...n,exponent:.5})}function createScalePow(e,r,{exponent:n=1,...c}){return createScaleQ(e,Ge().exponent(n),r,{...c,type:"pow"})}function createScaleLog(e,r,{base:n=10,domain:c=inferLogDomain(r),...v}){return createScaleQ(e,He().base(n),r,{...v,domain:c})}function createScaleSymlog(e,r,{constant:n=1,...c}){return createScaleQ(e,ze().constant(n),r,c)}function createScaleQuantile(e,r,{range:n,quantiles:c=(n===void 0?5:(n=[...n]).length),n:v=c,scheme:f="rdylbu",domain:p=inferQuantileDomain(r),unknown:g,interpolate:b,reverse:w}){n===void 0&&(n=b!==void 0?Ee(b,v):Yx.get(e)===Nx?ordinalRange(f,v):void 0);p.length>0&&(p=Ye(p,n===void 0?{length:v}:n).quantiles());return createScaleThreshold(e,r,{domain:p,range:n,reverse:w,unknown:g})}function createScaleQuantize(e,r,{range:n,n:c=(n===void 0?5:(n=[...n]).length),scheme:v="rdylbu",domain:f=inferAutoDomain(e,r),unknown:p,interpolate:g,reverse:b}){const[w,_]=Ie(f);let x;if(n===void 0){x=Ue(w,_,c);x[0]<=w&&x.splice(0,1);x[x.length-1]>=_&&x.pop();c=x.length+1;n=g!==void 0?Ee(g,c):Yx.get(e)===Nx?ordinalRange(v,c):void 0}else{x=Ee(Te(w,_),c+1).slice(1,-1);w instanceof Date&&(x=x.map((e=>new Date(e))))}orderof(arrayify(f))<0&&x.reverse();return createScaleThreshold(e,r,{domain:x,range:n,reverse:b,unknown:p})}function createScaleThreshold(e,r,{domain:n=[0],unknown:c,scheme:v="rdylbu",interpolate:f,range:p=(f!==void 0?Ee(f,n.length+1):Yx.get(e)===Nx?ordinalRange(v,n.length+1):void 0),reverse:g}){n=arrayify(n);const b=orderof(n);if(!isNaN(b)&&!isOrdered(n,b))throw new Error(`the ${e} scale has a non-monotonic domain`);g&&(p=Re(p));return{type:"threshold",scale:qe(b<0?Re(n):n,p===void 0?[]:p).unknown(c),domain:n,range:p}}function isOrdered(e,r){for(let n=1,c=e.length,v=e[0];n<c;++n){const c=K(v,v=e[n]);if(c!==0&&c!==r)return false}return true}function createScaleIdentity(){return{type:"identity",scale:Be()}}function inferDomain$1(e,r=finite){return e.length?[Ve(e,(({value:e})=>e===void 0?e:Ve(e,r))),Ke(e,(({value:e})=>e===void 0?e:Ke(e,r)))]:[0,1]}function inferAutoDomain(e,r){const n=Yx.get(e);return(n===Wx||n===Hx||n===Gx?inferZeroDomain:inferDomain$1)(r)}function inferZeroDomain(e){return[0,e.length?Ke(e,(({value:e})=>e===void 0?e:Ke(e,finite))):1]}function inferRadialRange(e,r){const n=e.find((({radius:e})=>e!==void 0));if(n!==void 0)return[0,n.radius];const c=Qe(e,.5,(({value:e})=>e===void 0?NaN:Qe(e,.25,positive)));const v=r.map((e=>3*Math.sqrt(e/c)));const f=30/Ke(v);return f<1?v.map((e=>e*f)):v}function inferLengthRange(e,r){const n=Ze(e,(({value:e})=>e===void 0?NaN:Ze(e,Math.abs)));const c=r.map((e=>12*e/n));const v=60/Ke(c);return v<1?c.map((e=>e*v)):c}function inferLogDomain(e){for(const{value:r}of e)if(r!==void 0)for(let n of r){if(n>0)return inferDomain$1(e,positive);if(n<0)return inferDomain$1(e,negative)}return[1,10]}function inferQuantileDomain(e){const r=[];for(const{value:n}of e)if(n!==void 0)for(const e of n)r.push(e);return r}function interpolatePiecewise(e){return(r,n)=>c=>e(r+c*(n-r))}function createScaleD(e,r,n,c,{type:v,nice:f,clamp:p,domain:g=inferDomain$1(c),unknown:b,pivot:w=0,scheme:_,range:x,symmetric:k=true,interpolate:C=(Yx.get(e)===Nx?_==null&&x!==void 0?Ae:quantitativeScheme(_!==void 0?_:"rdbu"):Te),reverse:P}){w=+w;let[j,E]=g;K(j,E)<0&&([j,E]=[E,j],P=!P);j=Math.min(j,w);E=Math.max(E,w);typeof C!=="function"&&(C=maybeInterpolator(C));x!==void 0&&(C=C.length===1?interpolatePiecewise(C)(...x):Je(C,x));P&&(C=flip(C));if(k){const e=n.apply(w);const r=e-n.apply(j);const c=n.apply(E)-e;r<c?j=n.invert(e-c):r>c&&(E=n.invert(e+r))}r.domain([j,w,E]).unknown(b).interpolator(C);p&&r.clamp(p);f&&r.nice(f);return{type:v,domain:[j,E],pivot:w,interpolate:C,scale:r}}function createScaleDiverging(e,r,n){return createScaleD(e,Xe(),tS,r,n)}function createScaleDivergingSqrt(e,r,n){return createScaleDivergingPow(e,r,{...n,exponent:.5})}function createScaleDivergingPow(e,r,{exponent:n=1,...c}){return createScaleD(e,tr().exponent(n=+n),transformPow(n),r,{...c,type:"diverging-pow"})}function createScaleDivergingLog(e,r,{base:n=10,pivot:c=1,domain:v=inferDomain$1(r,c<0?negative:positive),...f}){return createScaleD(e,er().base(n=+n),eS,r,{domain:v,pivot:c,...f})}function createScaleDivergingSymlog(e,r,{constant:n=1,...c}){return createScaleD(e,rr().constant(n=+n),transformSymlog(n),r,c)}const tS={apply(e){return e},invert(e){return e}};const eS={apply:Math.log,invert:Math.exp};const rS={apply(e){return Math.sign(e)*Math.sqrt(Math.abs(e))},invert(e){return Math.sign(e)*(e*e)}};function transformPow(e){return e===.5?rS:{apply(r){return Math.sign(r)*Math.pow(Math.abs(r),e)},invert(r){return Math.sign(r)*Math.pow(Math.abs(r),1/e)}}}function transformSymlog(e){return{apply(r){return Math.sign(r)*Math.log1p(Math.abs(r/e))},invert(r){return Math.sign(r)*Math.expm1(Math.abs(r))*e}}}function createScaleT(e,r,n,c){return createScaleQ(e,r,n,c)}function createScaleTime(e,r,n){return createScaleT(e,nr(),r,n)}function createScaleUtc(e,r,n){return createScaleT(e,ar(),r,n)}const nS=Symbol("ordinal");function createScaleO(e,r,n,{type:c,interval:v,domain:f,range:p,reverse:g,hint:b}){v=maybeRangeInterval(v,c);f===void 0&&(f=inferDomain(n,v,e));c!=="categorical"&&c!==nS||(c="ordinal");g&&(f=Re(f));r.domain(f);if(p!==void 0){typeof p==="function"&&(p=p(f));r.range(p)}return{type:c,domain:f,range:p,scale:r,hint:b,interval:v}}function createScaleOrdinal(e,r,{type:n,interval:c,domain:v,range:f,scheme:p,unknown:g,...b}){c=maybeRangeInterval(c,n);v===void 0&&(v=inferDomain(r,c,e));let w;if(Yx.get(e)===zx){w=inferSymbolHint(r);f=f===void 0?inferSymbolRange(w):map(f,maybeSymbol)}else if(Yx.get(e)===Nx){if(f===void 0&&(n==="ordinal"||n===nS)){f=maybeBooleanRange(v,p);f!==void 0&&(p=void 0)}p===void 0&&f===void 0&&(p=n==="ordinal"?"turbo":"tableau10");if(p!==void 0)if(f!==void 0){const e=quantitativeScheme(p);const r=f[0],n=f[1]-f[0];f=({length:c})=>Ee((c=>e(r+n*c)),c)}else f=ordinalScheme(p)}if(g===ir)throw new Error(`implicit unknown on ${e} scale is not supported`);return createScaleO(e,or().unknown(g),r,{...b,type:n,domain:v,range:f,hint:w})}function createScalePoint(e,r,{align:n=.5,padding:c=.5,...v}){return maybeRound(sr().align(n).padding(c),r,v,e)}function createScaleBand(e,r,{align:n=.5,padding:c=.1,paddingInner:v=c,paddingOuter:f=(e==="fx"||e==="fy"?0:c),...p}){return maybeRound(ur().align(n).paddingInner(v).paddingOuter(f),r,p,e)}function maybeRound(e,r,n,c){let{round:v}=n;v!==void 0&&e.round(v=!!v);e=createScaleO(c,e,r,n);e.round=v;return e}function inferDomain(e,r,n){const c=new cr;for(const{value:r,domain:n}of e){if(n!==void 0)return n();if(r!==void 0)for(const e of r)c.add(e)}if(r!==void 0){const[e,n]=Ie(c).map(r.floor,r);return r.range(e,r.offset(n))}if(c.size>1e4&&Yx.get(n)===Rx)throw new Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);return lr(c,ascendingDefined)}function inferHint(e,r){let n;for(const{hint:c}of e){const e=c?.[r];if(e!==void 0)if(n===void 0)n=e;else if(n!==e)return}return n}function inferSymbolHint(e){return{fill:inferHint(e,"fill"),stroke:inferHint(e,"stroke")}}function inferSymbolRange(e){return isNoneish(e.fill)?vr:fr}function normalizeScale(e,r,n){return createScale(e,n===void 0?void 0:[{hint:n}],{...r})}function createScale(e,r=[],n={}){const c=inferScaleType(e,r,n);if(n.type===void 0&&n.domain===void 0&&n.range===void 0&&n.interval==null&&e!=="fx"&&e!=="fy"&&isOrdinalScale({type:c})){const n=r.map((({value:e})=>e)).filter((e=>e!==void 0));n.some(isTemporal)?warn(`Warning: some data associated with the ${e} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(c)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e} scale to "${formatScaleType(c)}".`):n.some(isTemporalString)?warn(`Warning: some data associated with the ${e} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(c)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e} scale to "${formatScaleType(c)}".`):n.some(isNumericString)&&warn(`Warning: some data associated with the ${e} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${formatScaleType(c)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e} scale to "${formatScaleType(c)}".`)}n.type=c;switch(c){case"diverging":case"diverging-sqrt":case"diverging-pow":case"diverging-log":case"diverging-symlog":case"cyclical":case"sequential":case"linear":case"sqrt":case"threshold":case"quantile":case"pow":case"log":case"symlog":n=coerceType(r,n,coerceNumbers);break;case"identity":switch(Yx.get(e)){case Rx:n=coerceType(r,n,coerceNumbers);break;case zx:n=coerceType(r,n,coerceSymbols);break}break;case"utc":case"time":n=coerceType(r,n,coerceDates);break}switch(c){case"diverging":return createScaleDiverging(e,r,n);case"diverging-sqrt":return createScaleDivergingSqrt(e,r,n);case"diverging-pow":return createScaleDivergingPow(e,r,n);case"diverging-log":return createScaleDivergingLog(e,r,n);case"diverging-symlog":return createScaleDivergingSymlog(e,r,n);case"categorical":case"ordinal":case nS:return createScaleOrdinal(e,r,n);case"cyclical":case"sequential":case"linear":return createScaleLinear(e,r,n);case"sqrt":return createScaleSqrt(e,r,n);case"threshold":return createScaleThreshold(e,r,n);case"quantile":return createScaleQuantile(e,r,n);case"quantize":return createScaleQuantize(e,r,n);case"pow":return createScalePow(e,r,n);case"log":return createScaleLog(e,r,n);case"symlog":return createScaleSymlog(e,r,n);case"utc":return createScaleUtc(e,r,n);case"time":return createScaleTime(e,r,n);case"point":return createScalePoint(e,r,n);case"band":return createScaleBand(e,r,n);case"identity":return Yx.get(e)===Rx?createScaleIdentity():{type:"identity"};case void 0:return;default:throw new Error(`unknown scale type: ${c}`)}}function formatScaleType(e){return typeof e==="symbol"?e.description:e}const aS={toString:()=>"projection"};function inferScaleType(e,r,{type:n,domain:c,range:v,scheme:f,pivot:p,projection:g}){if(e==="fx"||e==="fy")return"band";e!=="x"&&e!=="y"||g==null||(n=aS);for(const{type:e}of r)if(e!==void 0)if(n===void 0)n=e;else if(n!==e)throw new Error(`scale incompatible with channel: ${n} !== ${e}`);if(n===aS)return;if(n!==void 0)return n;if(c===void 0&&!r.some((({value:e})=>e!==void 0)))return;const b=Yx.get(e);if(b===Wx)return"sqrt";if(b===Hx||b===Gx)return"linear";if(b===zx)return"ordinal";if((c||v||[]).length>2)return asOrdinalType(b);if(c!==void 0)return isOrdinal(c)?asOrdinalType(b):isTemporal(c)?"utc":b!==Nx||p==null&&!isDivergingScheme(f)?"linear":"diverging";const w=r.map((({value:e})=>e)).filter((e=>e!==void 0));return w.some(isOrdinal)?asOrdinalType(b):w.some(isTemporal)?"utc":b!==Nx||p==null&&!isDivergingScheme(f)?"linear":"diverging"}function asOrdinalType(e){switch(e){case Rx:return"point";case Nx:return nS;default:return"ordinal"}}function isOrdinalScale({type:e}){return e==="ordinal"||e==="point"||e==="band"||e===nS}function coerceType(e,{domain:r,...n},c){for(const r of e)r.value!==void 0&&(r.value=c(r.value));return{domain:r===void 0?r:c(r),...n}}function coerceSymbols(e){return map(e,maybeSymbol)}function scale(e={}){let r;for(const n in e)if(Yx.has(n)&&isScaleOptions(e[n])){if(r!==void 0)throw new Error("ambiguous scale definition; multiple scales found");r=exposeScale(normalizeScale(n,e[n]))}if(r===void 0)throw new Error("invalid scale definition; no scale found");return r}function exposeScale({scale:e,type:r,domain:n,range:c,interpolate:v,interval:f,transform:p,percent:g,pivot:b}){if(r==="identity")return{type:"identity",apply:e=>e,invert:e=>e};const w=e.unknown?e.unknown():void 0;return{type:r,domain:slice(n),...c!==void 0&&{range:slice(c)},...p!==void 0&&{transform:p},...g&&{percent:g},...w!==void 0&&{unknown:w},...f!==void 0&&{interval:f},...v!==void 0&&{interpolate:v},...e.clamp&&{clamp:e.clamp()},...b!==void 0&&{pivot:b,symmetric:false},...e.base&&{base:e.base()},...e.exponent&&{exponent:e.exponent()},...e.constant&&{constant:e.constant()},...e.align&&{align:e.align(),round:e.round()},...e.padding&&(e.paddingInner?{paddingInner:e.paddingInner(),paddingOuter:e.paddingOuter()}:{padding:e.padding()}),...e.bandwidth&&{bandwidth:e.bandwidth(),step:e.step()},apply:r=>e(r),...e.invert&&{invert:r=>e.invert(r)}}}function normalizedScale(e){try{var r=Object.keys(e)[0];return scale(_defineProperty({},r,Object.assign(Object.assign({},e[r]),{clamp:true})))}catch(e){return null}}function scaleStyle(e,r){var n={};if(r.hasOwnProperty("opacity")){n.fill=function(){return r.opacity.baseColor||ng};n["fill-opacity"]=function(r){return e===null||e===void 0?void 0:e.apply(r)}}else n.fill=function(r){return typeof r==="string"&&(r===null||r===void 0?void 0:r.startsWith("#"))?r:e===null||e===void 0?void 0:e.apply(r)};return n}function applyScaleStyle(e,r,n,c){Object.entries(scaleStyle(r,n)).forEach((function(r){var n=_slicedToArray(r,2),v=n[0],f=n[1];return e.style(v,(function(e){return f(c?e[c]:e)}))}))}var iS=function(){function Populator(e){_classCallCheck(this,Populator);this.calendar=e}_createClass(Populator,[{key:"populate",value:function populate(){var e=this.calendar;var n=e.options.options,c=n.scale,v=n.subDomain;var f=normalizedScale(c);e.calendarPainter.root.selectAll(".ch-domain").selectAll("svg").selectAll("g").data((function(r){return e.domainCollection.get(r)||[]})).call((function(e){applyScaleStyle(e.select("rect"),f,c,"v")})).call((function(n){n.select("text").attr("style",(function(e){var n=r(f===null||f===void 0?void 0:f.apply(e.v)).l>60?"#000":"#fff";var c=v.color||(e.v?n:null);isFunction(c)&&(c=c(e.t,e.v,f===null||f===void 0?void 0:f.apply(e.v)));return c?"fill: ".concat(c,";"):null})).text((function(r,n,c){return e.dateHelper.format(r.t,v.label,r.v,c[n])}))})).call((function(){e.eventEmitter.emit("fill")}))}}]);return Populator}();function listCacheClear(){this.__data__=[];this.size=0}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(e,r){return e===r||e!==e&&r!==r}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(e,r){var n=e.length;while(n--)if(eq(e[n][0],r))return n;return-1}var oS=Array.prototype;var sS=oS.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(e){var r=this.__data__,n=assocIndexOf(r,e);if(n<0)return false;var c=r.length-1;n==c?r.pop():sS.call(r,n,1);--this.size;return true}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(e){var r=this.__data__,n=assocIndexOf(r,e);return n<0?void 0:r[n][1]}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(e,r){var n=this.__data__,c=assocIndexOf(n,e);if(c<0){++this.size;n.push([e,r])}else n[c][1]=r;return this}
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(e){var r=-1,n=e==null?0:e.length;this.clear();while(++r<n){var c=e[r];this.set(c[0],c[1])}}ListCache.prototype.clear=listCacheClear;ListCache.prototype.delete=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;function stackClear(){this.__data__=new ListCache;this.size=0}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(e){var r=this.__data__,n=r.delete(e);this.size=r.size;return n}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(e){return this.__data__.get(e)}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(e){return this.__data__.has(e)}var uS=T_["__core-js_shared__"];var cS=uS;var lS=function(){var e=/[^.]+$/.exec(cS&&cS.keys&&cS.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(e){return!!lS&&lS in e}var vS=Function.prototype;var fS=vS.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(e){if(e!=null){try{return fS.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var hS=/[\\^$.*+?()[\]{}|]/g;var dS=/^\[object .+?Constructor\]$/;var pS=Function.prototype,mS=Object.prototype;var yS=pS.toString;var gS=mS.hasOwnProperty;var bS=RegExp("^"+yS.call(gS).replace(hS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(e){if(!isObject$2(e)||isMasked(e))return false;var r=isFunction(e)?bS:dS;return r.test(toSource(e))}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(e,r){return e==null?void 0:e[r]}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(e,r){var n=getValue(e,r);return baseIsNative(n)?n:void 0}var wS=getNative(T_,"Map");var _S=wS;var xS=getNative(Object,"create");var SS=xS;function hashClear(){this.__data__=SS?SS(null):{};this.size=0}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(e){var r=this.has(e)&&delete this.__data__[e];this.size-=r?1:0;return r}var OS="__lodash_hash_undefined__";var kS=Object.prototype;var CS=kS.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(e){var r=this.__data__;if(SS){var n=r[e];return n===OS?void 0:n}return CS.call(r,e)?r[e]:void 0}var PS=Object.prototype;var DS=PS.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(e){var r=this.__data__;return SS?r[e]!==void 0:DS.call(r,e)}var jS="__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(e,r){var n=this.__data__;this.size+=this.has(e)?0:1;n[e]=SS&&r===void 0?jS:r;return this}
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(e){var r=-1,n=e==null?0:e.length;this.clear();while(++r<n){var c=e[r];this.set(c[0],c[1])}}Hash.prototype.clear=hashClear;Hash.prototype.delete=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function mapCacheClear(){this.size=0;this.__data__={hash:new Hash,map:new(_S||ListCache),string:new Hash}}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(e,r){var n=e.__data__;return isKeyable(r)?n[typeof r=="string"?"string":"hash"]:n.map}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(e){var r=getMapData(this,e).delete(e);this.size-=r?1:0;return r}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(e){return getMapData(this,e).get(e)}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(e){return getMapData(this,e).has(e)}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(e,r){var n=getMapData(this,e),c=n.size;n.set(e,r);this.size+=n.size==c?0:1;return this}
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(e){var r=-1,n=e==null?0:e.length;this.clear();while(++r<n){var c=e[r];this.set(c[0],c[1])}}MapCache.prototype.clear=mapCacheClear;MapCache.prototype.delete=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;var MS=200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(e,r){var n=this.__data__;if(n instanceof ListCache){var c=n.__data__;if(!_S||c.length<MS-1){c.push([e,r]);this.size=++n.size;return this}n=this.__data__=new MapCache(c)}n.set(e,r);this.size=n.size;return this}
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(e){var r=this.__data__=new ListCache(e);this.size=r.size}Stack.prototype.clear=stackClear;Stack.prototype.delete=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;var ES=function(){try{var e=getNative(Object,"defineProperty");e({},"",{});return e}catch(e){}}();var TS=ES;
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(e,r,n){r=="__proto__"&&TS?TS(e,r,{configurable:true,enumerable:true,value:n,writable:true}):e[r]=n}
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(e,r,n){(n!==void 0&&!eq(e[r],n)||n===void 0&&!(r in e))&&baseAssignValue(e,r,n)}
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(e){return function(r,n,c){var v=-1,f=Object(r),p=c(r),g=p.length;while(g--){var b=p[e?g:++v];if(n(f[b],b,f)===false)break}return r}}
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var AS=createBaseFor();var LS=AS;var $S=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var FS=$S&&typeof module=="object"&&module&&!module.nodeType&&module;var IS=FS&&FS.exports===$S;var RS=IS?T_.Buffer:void 0,NS=RS?RS.allocUnsafe:void 0;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(e,r){if(r)return e.slice();var n=e.length,c=NS?NS(n):new e.constructor(n);e.copy(c);return c}var WS=T_.Uint8Array;var GS=WS;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(e){var r=new e.constructor(e.byteLength);new GS(r).set(new GS(e));return r}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(e,r){var n=r?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(e,r){var n=-1,c=e.length;r||(r=Array(c));while(++n<c)r[n]=e[n];return r}var HS=Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var zS=function(){function object(){}return function(e){if(!isObject$2(e))return{};if(HS)return HS(e);object.prototype=e;var r=new object;object.prototype=void 0;return r}}();var YS=zS;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(e,r){return function(n){return e(r(n))}}var US=overArg(Object.getPrototypeOf,Object);var qS=US;var BS=Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(e){var r=e&&e.constructor,n=typeof r=="function"&&r.prototype||BS;return e===n}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(e){return typeof e.constructor!="function"||isPrototype(e)?{}:YS(qS(e))}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(e){return e!=null&&typeof e=="object"}var VS="[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==VS}var KS=Object.prototype;var QS=KS.hasOwnProperty;var ZS=KS.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var JS=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&QS.call(e,"callee")&&!ZS.call(e,"callee")};var XS=JS;var tO=9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=tO}
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(e){return e!=null&&isLength(e.length)&&!isFunction(e)}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false}var eO=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var rO=eO&&typeof module=="object"&&module&&!module.nodeType&&module;var nO=rO&&rO.exports===eO;var aO=nO?T_.Buffer:void 0;var iO=aO?aO.isBuffer:void 0;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var oO=iO||stubFalse;var sO=oO;var uO="[object Object]";var cO=Function.prototype,lO=Object.prototype;var vO=cO.toString;var fO=lO.hasOwnProperty;var hO=vO.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(e){if(!isObjectLike(e)||baseGetTag(e)!=uO)return false;var r=qS(e);if(r===null)return true;var n=fO.call(r,"constructor")&&r.constructor;return typeof n=="function"&&n instanceof n&&vO.call(n)==hO}var dO="[object Arguments]",pO="[object Array]",mO="[object Boolean]",yO="[object Date]",gO="[object Error]",bO="[object Function]",wO="[object Map]",_O="[object Number]",xO="[object Object]",SO="[object RegExp]",OO="[object Set]",kO="[object String]",CO="[object WeakMap]";var PO="[object ArrayBuffer]",DO="[object DataView]",jO="[object Float32Array]",MO="[object Float64Array]",EO="[object Int8Array]",TO="[object Int16Array]",AO="[object Int32Array]",LO="[object Uint8Array]",$O="[object Uint8ClampedArray]",FO="[object Uint16Array]",IO="[object Uint32Array]";var RO={};RO[jO]=RO[MO]=RO[EO]=RO[TO]=RO[AO]=RO[LO]=RO[$O]=RO[FO]=RO[IO]=true;RO[dO]=RO[pO]=RO[PO]=RO[mO]=RO[DO]=RO[yO]=RO[gO]=RO[bO]=RO[wO]=RO[_O]=RO[xO]=RO[SO]=RO[OO]=RO[kO]=RO[CO]=false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!RO[baseGetTag(e)]}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(e){return function(r){return e(r)}}var NO=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var WO=NO&&typeof module=="object"&&module&&!module.nodeType&&module;var GO=WO&&WO.exports===NO;var HO=GO&&j_.process;var zO=function(){try{var e=WO&&WO.require&&WO.require("util").types;return e||HO&&HO.binding&&HO.binding("util")}catch(e){}}();var YO=zO;var UO=YO&&YO.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var qO=UO?baseUnary(UO):baseIsTypedArray;var BO=qO;
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function safeGet(e,r){if((r!=="constructor"||typeof e[r]!=="function")&&r!="__proto__")return e[r]}var VO=Object.prototype;var KO=VO.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(e,r,n){var c=e[r];KO.call(e,r)&&eq(c,n)&&(n!==void 0||r in e)||baseAssignValue(e,r,n)}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(e,r,n,c){var v=!n;n||(n={});var f=-1,p=r.length;while(++f<p){var g=r[f];var b=c?c(n[g],e[g],g,n,e):void 0;b===void 0&&(b=e[g]);v?baseAssignValue(n,g,b):assignValue(n,g,b)}return n}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(e,r){var n=-1,c=Array(e);while(++n<e)c[n]=r(n);return c}var QO=9007199254740991;var ZO=/^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(e,r){var n=typeof e;r=r==null?QO:r;return!!r&&(n=="number"||n!="symbol"&&ZO.test(e))&&e>-1&&e%1==0&&e<r}var JO=Object.prototype;var XO=JO.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(e,r){var n=Np(e),c=!n&&XS(e),v=!n&&!c&&sO(e),f=!n&&!c&&!v&&BO(e),p=n||c||v||f,g=p?baseTimes(e.length,String):[],b=g.length;for(var w in e)!r&&!XO.call(e,w)||p&&(w=="length"||v&&(w=="offset"||w=="parent")||f&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||isIndex(w,b))||g.push(w);return g}
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(e){var r=[];if(e!=null)for(var n in Object(e))r.push(n);return r}var tk=Object.prototype;var ek=tk.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(e){if(!isObject$2(e))return nativeKeysIn(e);var r=isPrototype(e),n=[];for(var c in e)c=="constructor"&&(r||!ek.call(e,c))||n.push(c);return n}
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,true):baseKeysIn(e)}
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */function toPlainObject(e){return copyObject(e,keysIn(e))}
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMergeDeep(e,r,n,c,v,f,p){var g=safeGet(e,n),b=safeGet(r,n),w=p.get(b);if(w)assignMergeValue(e,n,w);else{var _=f?f(g,b,n+"",e,r,p):void 0;var x=_===void 0;if(x){var k=Np(b),C=!k&&sO(b),P=!k&&!C&&BO(b);_=b;if(k||C||P)if(Np(g))_=g;else if(isArrayLikeObject(g))_=copyArray(g);else if(C){x=false;_=cloneBuffer(b,true)}else if(P){x=false;_=cloneTypedArray(b,true)}else _=[];else if(isPlainObject(b)||XS(b)){_=g;XS(g)?_=toPlainObject(g):isObject$2(g)&&!isFunction(g)||(_=initCloneObject(b))}else x=false}if(x){p.set(b,_);v(_,b,c,f,p);p.delete(b)}assignMergeValue(e,n,_)}}
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMerge(e,r,n,c,v){e!==r&&LS(r,(function(f,p){v||(v=new Stack);if(isObject$2(f))baseMergeDeep(e,r,p,n,baseMerge,c,v);else{var g=c?c(safeGet(e,p),f,p+"",e,r,v):void 0;g===void 0&&(g=f);assignMergeValue(e,p,g)}}),keysIn)}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(e){return e}
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply$1(e,r,n){switch(n.length){case 0:return e.call(r);case 1:return e.call(r,n[0]);case 2:return e.call(r,n[0],n[1]);case 3:return e.call(r,n[0],n[1],n[2])}return e.apply(r,n)}var rk=Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(e,r,n){r=rk(r===void 0?e.length-1:r,0);return function(){var c=arguments,v=-1,f=rk(c.length-r,0),p=Array(f);while(++v<f)p[v]=c[r+v];v=-1;var g=Array(r+1);while(++v<r)g[v]=c[v];g[r]=n(p);return apply$1(e,this,g)}}
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(e){return function(){return e}}
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var nk=TS?function(e,r){return TS(e,"toString",{configurable:true,enumerable:false,value:constant(r),writable:true})}:identity;var ak=nk;var ik=800,ok=16;var sk=Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(e){var r=0,n=0;return function(){var c=sk(),v=ok-(c-n);n=c;if(v>0){if(++r>=ik)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var uk=shortOut(ak);var ck=uk;
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(e,r){return ck(overRest(e,r,identity),e+"")}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(e,r,n){if(!isObject$2(n))return false;var c=typeof r;return!!(c=="number"?isArrayLike(n)&&isIndex(r,n.length):c=="string"&&r in n)&&eq(n[r],e)}
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(e){return baseRest((function(r,n){var c=-1,v=n.length,f=v>1?n[v-1]:void 0,p=v>2?n[2]:void 0;f=e.length>3&&typeof f=="function"?(v--,f):void 0;if(p&&isIterateeCall(n[0],n[1],p)){f=v<3?void 0:f;v=1}r=Object(r);while(++c<v){var g=n[c];g&&e(r,g,c,f)}return r}))}
/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */var lk=createAssigner((function(e,r,n,c){baseMerge(e,r,n,c)}));var vk=lk;var fk="__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(e){this.__data__.set(e,fk);return this}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(e){return this.__data__.has(e)}
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(e){var r=-1,n=e==null?0:e.length;this.__data__=new MapCache;while(++r<n)this.add(e[r])}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(e,r){var n=-1,c=e==null?0:e.length;while(++n<c)if(r(e[n],n,e))return true;return false}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(e,r){return e.has(r)}var hk=1,dk=2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(e,r,n,c,v,f){var p=n&hk,g=e.length,b=r.length;if(g!=b&&!(p&&b>g))return false;var w=f.get(e);var _=f.get(r);if(w&&_)return w==r&&_==e;var x=-1,k=true,C=n&dk?new SetCache:void 0;f.set(e,r);f.set(r,e);while(++x<g){var P=e[x],j=r[x];if(c)var E=p?c(j,P,x,r,e,f):c(P,j,x,e,r,f);if(E!==void 0){if(E)continue;k=false;break}if(C){if(!arraySome(r,(function(e,r){if(!cacheHas(C,r)&&(P===e||v(P,e,n,c,f)))return C.push(r)}))){k=false;break}}else if(!(P===j||v(P,j,n,c,f))){k=false;break}}f.delete(e);f.delete(r);return k}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(e){var r=-1,n=Array(e.size);e.forEach((function(e,c){n[++r]=[c,e]}));return n}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(e){var r=-1,n=Array(e.size);e.forEach((function(e){n[++r]=e}));return n}var pk=1,mk=2;var yk="[object Boolean]",gk="[object Date]",bk="[object Error]",wk="[object Map]",_k="[object Number]",xk="[object RegExp]",Sk="[object Set]",Ok="[object String]",kk="[object Symbol]";var Ck="[object ArrayBuffer]",Pk="[object DataView]";var Dk=L_?L_.prototype:void 0,jk=Dk?Dk.valueOf:void 0;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(e,r,n,c,v,f,p){switch(n){case Pk:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return false;e=e.buffer;r=r.buffer;case Ck:return!(e.byteLength!=r.byteLength||!f(new GS(e),new GS(r)));case yk:case gk:case _k:return eq(+e,+r);case bk:return e.name==r.name&&e.message==r.message;case xk:case Ok:return e==r+"";case wk:var g=mapToArray;case Sk:var b=c&pk;g||(g=setToArray);if(e.size!=r.size&&!b)return false;var w=p.get(e);if(w)return w==r;c|=mk;p.set(e,r);var _=equalArrays(g(e),g(r),c,v,f,p);p.delete(e);return _;case kk:if(jk)return jk.call(e)==jk.call(r)}return false}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(e,r){var n=-1,c=r.length,v=e.length;while(++n<c)e[v+n]=r[n];return e}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(e,r,n){var c=r(e);return Np(e)?c:arrayPush(c,n(e))}
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(e,r){var n=-1,c=e==null?0:e.length,v=0,f=[];while(++n<c){var p=e[n];r(p,n,e)&&(f[v++]=p)}return f}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[]}var Mk=Object.prototype;var Ek=Mk.propertyIsEnumerable;var Tk=Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var Ak=Tk?function(e){if(e==null)return[];e=Object(e);return arrayFilter(Tk(e),(function(r){return Ek.call(e,r)}))}:stubArray;var Lk=Ak;var $k=overArg(Object.keys,Object);var Fk=$k;var Ik=Object.prototype;var Rk=Ik.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(e){if(!isPrototype(e))return Fk(e);var r=[];for(var n in Object(e))Rk.call(e,n)&&n!="constructor"&&r.push(n);return r}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(e){return baseGetAllKeys(e,keys,Lk)}var Nk=1;var Wk=Object.prototype;var Gk=Wk.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(e,r,n,c,v,f){var p=n&Nk,g=getAllKeys(e),b=g.length,w=getAllKeys(r),_=w.length;if(b!=_&&!p)return false;var x=b;while(x--){var k=g[x];if(!(p?k in r:Gk.call(r,k)))return false}var C=f.get(e);var P=f.get(r);if(C&&P)return C==r&&P==e;var j=true;f.set(e,r);f.set(r,e);var E=p;while(++x<b){k=g[x];var T=e[k],A=r[k];if(c)var L=p?c(A,T,k,r,e,f):c(T,A,k,e,r,f);if(!(L===void 0?T===A||v(T,A,n,c,f):L)){j=false;break}E||(E=k=="constructor")}if(j&&!E){var I=e.constructor,R=r.constructor;I==R||!("constructor"in e)||!("constructor"in r)||typeof I=="function"&&I instanceof I&&typeof R=="function"&&R instanceof R||(j=false)}f.delete(e);f.delete(r);return j}var Hk=getNative(T_,"DataView");var zk=Hk;var Yk=getNative(T_,"Promise");var Uk=Yk;var qk=getNative(T_,"Set");var Bk=qk;var Vk=getNative(T_,"WeakMap");var Kk=Vk;var Qk="[object Map]",Zk="[object Object]",Jk="[object Promise]",Xk="[object Set]",tC="[object WeakMap]";var eC="[object DataView]";var rC=toSource(zk),nC=toSource(_S),aC=toSource(Uk),iC=toSource(Bk),oC=toSource(Kk);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var sC=baseGetTag;(zk&&sC(new zk(new ArrayBuffer(1)))!=eC||_S&&sC(new _S)!=Qk||Uk&&sC(Uk.resolve())!=Jk||Bk&&sC(new Bk)!=Xk||Kk&&sC(new Kk)!=tC)&&(sC=function(e){var r=baseGetTag(e),n=r==Zk?e.constructor:void 0,c=n?toSource(n):"";if(c)switch(c){case rC:return eC;case nC:return Qk;case aC:return Jk;case iC:return Xk;case oC:return tC}return r});var uC=sC;var cC=1;var lC="[object Arguments]",vC="[object Array]",fC="[object Object]";var hC=Object.prototype;var dC=hC.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(e,r,n,c,v,f){var p=Np(e),g=Np(r),b=p?vC:uC(e),w=g?vC:uC(r);b=b==lC?fC:b;w=w==lC?fC:w;var _=b==fC,x=w==fC,k=b==w;if(k&&sO(e)){if(!sO(r))return false;p=true;_=false}if(k&&!_){f||(f=new Stack);return p||BO(e)?equalArrays(e,r,n,c,v,f):equalByTag(e,r,b,n,c,v,f)}if(!(n&cC)){var C=_&&dC.call(e,"__wrapped__"),P=x&&dC.call(r,"__wrapped__");if(C||P){var j=C?e.value():e,E=P?r.value():r;f||(f=new Stack);return v(j,E,n,c,f)}}if(!k)return false;f||(f=new Stack);return equalObjects(e,r,n,c,v,f)}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(e,r,n,c,v){return e===r||(e==null||r==null||!isObjectLike(e)&&!isObjectLike(r)?e!==e&&r!==r:baseIsEqualDeep(e,r,n,c,baseIsEqual,v))}
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function isEqual(e,r){return baseIsEqual(e,r)}var pC=Object.prototype;var mC=pC.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHas(e,r){return e!=null&&mC.call(e,r)}var yC="[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(e){return typeof e=="symbol"||isObjectLike(e)&&baseGetTag(e)==yC}var gC=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bC=/^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(e,r){if(Np(e))return false;var n=typeof e;return!(n!="number"&&n!="symbol"&&n!="boolean"&&e!=null&&!isSymbol(e))||(bC.test(e)||!gC.test(e)||r!=null&&e in Object(r))}var wC="Expected a function";
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(wC);var memoized=function(){var n=arguments,c=r?r.apply(this,n):n[0],v=memoized.cache;if(v.has(c))return v.get(c);var f=e.apply(this,n);memoized.cache=v.set(c,f)||v;return f};memoized.cache=new(memoize.Cache||MapCache);return memoized}memoize.Cache=MapCache;var _C=500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(e){var r=memoize(e,(function(e){n.size===_C&&n.clear();return e}));var n=r.cache;return r}var xC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var SC=/\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var OC=memoizeCapped((function(e){var r=[];e.charCodeAt(0)===46&&r.push("");e.replace(xC,(function(e,n,c,v){r.push(c?v.replace(SC,"$1"):n||e)}));return r}));var kC=OC;
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(e,r){var n=-1,c=e==null?0:e.length,v=Array(c);while(++n<c)v[n]=r(e[n],n,e);return v}var CC=1/0;var PC=L_?L_.prototype:void 0,DC=PC?PC.toString:void 0;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(e){if(typeof e=="string")return e;if(Np(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return DC?DC.call(e):"";var r=e+"";return r=="0"&&1/e==-CC?"-0":r}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString$3(e){return e==null?"":baseToString(e)}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(e,r){return Np(e)?e:isKey(e,r)?[e]:kC(toString$3(e))}var jC=1/0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(e){if(typeof e=="string"||isSymbol(e))return e;var r=e+"";return r=="0"&&1/e==-jC?"-0":r}
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(e,r,n){r=castPath(r,e);var c=-1,v=r.length,f=false;while(++c<v){var p=toKey(r[c]);if(!(f=e!=null&&n(e,p)))break;e=e[p]}if(f||++c!=v)return f;v=e==null?0:e.length;return!!v&&isLength(v)&&isIndex(p,v)&&(Np(e)||XS(e))}
/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */function has(e,r){return e!=null&&hasPath(e,r,baseHas)}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(e,r){r=castPath(r,e);var n=0,c=r.length;while(e!=null&&n<c)e=e[toKey(r[n++])];return n&&n==c?e:void 0}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(e,r,n){var c=e==null?void 0:baseGet(e,r);return c===void 0?n:c}
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */function baseSet(e,r,n,c){if(!isObject$2(e))return e;r=castPath(r,e);var v=-1,f=r.length,p=f-1,g=e;while(g!=null&&++v<f){var b=toKey(r[v]),w=n;if(b==="__proto__"||b==="constructor"||b==="prototype")return e;if(v!=p){var _=g[b];w=c?c(_,b,g):void 0;w===void 0&&(w=isObject$2(_)?_:isIndex(r[v+1])?[]:{})}assignValue(g,b,w);g=g[b]}return e}
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */function set(e,r,n){return e==null?e:baseSet(e,r,n)}var MC="[object String]";
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(e){return typeof e=="string"||!Np(e)&&isObjectLike(e)&&baseGetTag(e)==MC}var EC={range:function range(e){return Math.max(+e,1)},"date.highlight":function dateHighlight(e){return castArray(e)},"subDomain.label":function subDomainLabel(e){return isString(e)&&e!==""||isFunction(e)?e:null}};var TC=function(){function Options(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:EC;_classCallCheck(this,Options);this.preProcessors=e;this.options={itemSelector:tg,range:Xy,domain:{type:qy,gutter:4,padding:[0,0,0,0],dynamicDimension:true,sort:"asc",label:{text:void 0,position:"bottom",textAlign:"middle",offset:{x:0,y:0},rotate:null,width:100,height:25}},subDomain:{type:By,width:Vy,height:Ky,gutter:Qy,radius:Zy,label:null,color:void 0,sort:"asc"},date:{start:new Date,min:void 0,max:void 0,highlight:[],locale:rg,timezone:void 0},verticalOrientation:false,data:{source:"",type:"json",requestInit:{},x:"",y:"",groupY:"sum",defaultValue:null},scale:void 0,animationDuration:Jy,theme:eg,x:{domainHorizontalLabelWidth:0,domainVerticalLabelHeight:0}}}
/**
   * Set a new value for an option, only if unchanged
   * @param {string} key   Name of the option
   * @param {any} value Value of the option
   * @return {boolean} Whether the option have been changed
   */_createClass(Options,[{key:"set",value:function set$1(e,r){if(!has(this.options,e)||isEqual(get(this.options,e),r))return false;set(this.options,e,has(this.preProcessors,e)?get(this.preProcessors,e)(r):r);return true}},{key:"init",value:function init(e){var r=this;this.options=Object.assign({},vk(this.options,e,(function(e,r){return Array.isArray(r)?r:void 0})));var n=this.options;Object.keys(this.preProcessors).forEach((function(e){set(n,e,get(r.preProcessors,e)(get(n,e)))}));typeof n.scale==="undefined"&&this.initScale();n.x.domainVerticalLabelHeight=n.domain.label.height;if(n.domain.label.position==="top"||n.domain.label.position==="bottom")n.x.domainHorizontalLabelWidth=0;else{n.x.domainVerticalLabelHeight=0;n.x.domainHorizontalLabelWidth=n.domain.label.width}if(n.domain.label.text===null||n.domain.label.text===""){n.x.domainVerticalLabelHeight=0;n.x.domainHorizontalLabelWidth=0}}},{key:"initScale",value:function initScale(){this.options.scale={color:{scheme:ag,type:ig,domain:og}}}}]);return Options}();var AC=anObject$f;var regexpFlags$1=function(){var e=AC(this);var r="";e.hasIndices&&(r+="d");e.global&&(r+="g");e.ignoreCase&&(r+="i");e.multiline&&(r+="m");e.dotAll&&(r+="s");e.unicode&&(r+="u");e.unicodeSets&&(r+="v");e.sticky&&(r+="y");return r};var LC=fails$u;var $C=gr;var FC=$C.RegExp;var IC=LC((function(){var e=FC("a","y");e.lastIndex=2;return e.exec("abcd")!==null}));var RC=IC||LC((function(){return!FC("a","y").sticky}));var NC=IC||LC((function(){var e=FC("^r","gy");e.lastIndex=2;return e.exec("str")!==null}));var WC={BROKEN_CARET:NC,MISSED_STICKY:RC,UNSUPPORTED_Y:IC};var GC=fails$u;var HC=gr;var zC=HC.RegExp;var YC=GC((function(){var e=zC(".","s");return!(e.dotAll&&e.test("\n")&&e.flags==="s")}));var UC=fails$u;var qC=gr;var BC=qC.RegExp;var VC=UC((function(){var e=BC("(?<a>b)","g");return e.exec("b").groups.a!=="b"||"b".replace(e,"$<a>c")!=="bc"}));var KC=ea;var QC=$r;var ZC=toString$9;var JC=regexpFlags$1;var XC=WC;var tP=Dr;var eP=nh;var rP=Ei.get;var nP=YC;var aP=VC;var iP=tP("native-string-replace",String.prototype.replace);var oP=RegExp.prototype.exec;var sP=oP;var uP=QC("".charAt);var cP=QC("".indexOf);var lP=QC("".replace);var vP=QC("".slice);var fP=function(){var e=/a/;var r=/b*/g;KC(oP,e,"a");KC(oP,r,"a");return e.lastIndex!==0||r.lastIndex!==0}();var hP=XC.BROKEN_CARET;var dP=/()??/.exec("")[1]!==void 0;var pP=fP||dP||hP||nP||aP;pP&&(sP=function exec(e){var r=this;var n=rP(r);var c=ZC(e);var v=n.raw;var f,p,g,b,w,_,x;if(v){v.lastIndex=r.lastIndex;f=KC(sP,v,c);r.lastIndex=v.lastIndex;return f}var k=n.groups;var C=hP&&r.sticky;var P=KC(JC,r);var j=r.source;var E=0;var T=c;if(C){P=lP(P,"y","");cP(P,"g")===-1&&(P+="g");T=vP(c,r.lastIndex);if(r.lastIndex>0&&(!r.multiline||r.multiline&&uP(c,r.lastIndex-1)!=="\n")){j="(?: "+j+")";T=" "+T;E++}p=new RegExp("^(?:"+j+")",P)}dP&&(p=new RegExp("^"+j+"$(?!\\s)",P));fP&&(g=r.lastIndex);b=KC(oP,C?p:r,T);if(C)if(b){b.input=vP(b.input,E);b[0]=vP(b[0],E);b.index=r.lastIndex;r.lastIndex+=b[0].length}else r.lastIndex=0;else fP&&b&&(r.lastIndex=r.global?b.index+b[0].length:g);dP&&b&&b.length>1&&KC(iP,b[0],p,(function(){for(w=1;w<arguments.length-2;w++)arguments[w]===void 0&&(b[w]=void 0)}));if(b&&k){b.groups=_=eP(null);for(w=0;w<k.length;w++){x=k[w];_[x[0]]=b[x[1]]}}return b});var mP=sP;var yP=_export;var gP=mP;yP({target:"RegExp",proto:true,forced:/./.exec!==gP},{exec:gP});var bP=functionUncurryThisClause;var wP=defineBuiltIn$9;var _P=mP;var xP=fails$u;var SP=wellKnownSymbol$m;var OP=li;var kP=SP("species");var CP=RegExp.prototype;var fixRegexpWellKnownSymbolLogic=function(e,r,n,c){var v=SP(e);var f=!xP((function(){var r={};r[v]=function(){return 7};return""[e](r)!==7}));var p=f&&!xP((function(){var r=false;var n=/a/;if(e==="split"){n={};n.constructor={};n.constructor[kP]=function(){return n};n.flags="";n[v]=/./[v]}n.exec=function(){r=true;return null};n[v]("");return!r}));if(!f||!p||n){var g=bP(/./[v]);var b=r(v,""[e],(function(e,r,n,c,v){var p=bP(e);var b=r.exec;return b===_P||b===CP.exec?f&&!v?{done:true,value:g(r,n,c)}:{done:true,value:p(n,r,c)}:{done:false}}));wP(String.prototype,e,b[0]);wP(CP,v,b[1])}c&&OP(CP[v],"sham",true)};var PP=Ld.charAt;var advanceStringIndex$1=function(e,r,n){return r+(n?PP(e,r).length:1)};var DP=$r;var jP=toObject$a;var MP=Math.floor;var EP=DP("".charAt);var TP=DP("".replace);var AP=DP("".slice);var LP=/\$([$&'`]|\d{1,2}|<[^>]*>)/g;var $P=/\$([$&'`]|\d{1,2})/g;var getSubstitution$1=function(e,r,n,c,v,f){var p=n+e.length;var g=c.length;var b=$P;if(v!==void 0){v=jP(v);b=LP}return TP(f,b,(function(f,b){var w;switch(EP(b,0)){case"$":return"$";case"&":return e;case"`":return AP(r,0,n);case"'":return AP(r,p);case"<":w=v[AP(b,1,-1)];break;default:var _=+b;if(_===0)return f;if(_>g){var x=MP(_/10);return x===0?f:x<=g?c[x-1]===void 0?EP(b,1):c[x-1]+EP(b,1):f}w=c[_-1]}return w===void 0?"":w}))};var FP=ea;var IP=anObject$f;var RP=En;var NP=classofRaw$2;var WP=mP;var GP=TypeError;var regexpExecAbstract=function(e,r){var n=e.exec;if(RP(n)){var c=FP(n,e,r);c!==null&&IP(c);return c}if(NP(e)==="RegExp")return FP(WP,e,r);throw new GP("RegExp#exec called on incompatible receiver")};var HP=Fu;var zP=ea;var YP=$r;var UP=fixRegexpWellKnownSymbolLogic;var qP=fails$u;var BP=anObject$f;var VP=En;var KP=isNullOrUndefined$8;var QP=toIntegerOrInfinity$4;var ZP=toLength$3;var JP=toString$9;var XP=requireObjectCoercible$7;var tD=advanceStringIndex$1;var eD=getMethod$4;var rD=getSubstitution$1;var nD=regexpExecAbstract;var aD=wellKnownSymbol$m;var iD=aD("replace");var oD=Math.max;var sD=Math.min;var uD=YP([].concat);var cD=YP([].push);var lD=YP("".indexOf);var vD=YP("".slice);var maybeToString=function(e){return e===void 0?e:String(e)};var fD=function(){return"a".replace(/./,"$0")==="$0"}();var hD=function(){return!!/./[iD]&&/./[iD]("a","$0")===""}();var dD=!qP((function(){var e=/./;e.exec=function(){var e=[];e.groups={a:"7"};return e};return"".replace(e,"$<a>")!=="7"}));UP("replace",(function(e,r,n){var c=hD?"$":"$0";return[function replace(e,n){var c=XP(this);var v=KP(e)?void 0:eD(e,iD);return v?zP(v,e,c,n):zP(r,JP(c),e,n)},function(e,v){var f=BP(this);var p=JP(e);if(typeof v=="string"&&lD(v,c)===-1&&lD(v,"$<")===-1){var g=n(r,f,p,v);if(g.done)return g.value}var b=VP(v);b||(v=JP(v));var w=f.global;var _;if(w){_=f.unicode;f.lastIndex=0}var x=[];var k;while(true){k=nD(f,p);if(k===null)break;cD(x,k);if(!w)break;var C=JP(k[0]);C===""&&(f.lastIndex=tD(p,ZP(f.lastIndex),_))}var P="";var j=0;for(var E=0;E<x.length;E++){k=x[E];var T=JP(k[0]);var A=oD(sD(QP(k.index),p.length),0);var L=[];var I;for(var R=1;R<k.length;R++)cD(L,maybeToString(k[R]));var N=k.groups;if(b){var W=uD([T],L,A,p);N!==void 0&&cD(W,N);I=JP(HP(v,void 0,W))}else I=rD(T,p,A,L,N,v);if(A>=j){P+=vD(p,j,A)+I;j=A+T.length}}return P+vD(p,j)}]}),!dD||!fD||hD);var pD,mD;var yD=function(){function DataFetcher(e){_classCallCheck(this,DataFetcher);pD.add(this);this.calendar=e}
/**
   * Fetch and interpret data from the datasource
   *
   * @param {string|object} source
   * @param {number} startTimestamp
   * @param {number} endTimestamp
   *
   * @return {Promize} A promise, that will return the final data when resolved
   */_createClass(DataFetcher,[{key:"getDatas",value:function getDatas(e,r,n){return __awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function _callee(){var c;return _regeneratorRuntime().wrap((function _callee$(v){while(1)switch(v.prev=v.next){case 0:if(!(typeof e==="string"&&e.length>0)){v.next=2;break}return v.abrupt("return",__classPrivateFieldGet(this,pD,"m",mD).call(this,e,r,n));case 2:c=[];Array.isArray(e)&&(c=e);return v.abrupt("return",new Promise((function(e){e(c)})));case 5:case"end":return v.stop()}}),_callee,this)})))}},{key:"parseURI",value:function parseURI(e,r,n){var c=this;var v=e.replace(/\{\{start=(.*?)\}\}/g,(function(e,n){return c.calendar.dateHelper.date(r).format(n)}));v=v.replace(/\{\{end=(.*?)\}\}/g,(function(e,r){return c.calendar.dateHelper.date(n).format(r)}));return v}}]);return DataFetcher}();pD=new WeakSet,mD=function _DataFetcher_fetch(e,r,n){var c=this.calendar.options.options.data,v=c.type,f=c.requestInit;var p=this.parseURI(e,r,n);switch(v){case"json":return mr(p,f);case"csv":return pr(p,f);case"tsv":return dr("\t",p,f);case"txt":return hr(p,f);default:return new Promise((function(e){e([])}))}};var gD=Ln;var bD=Za.EXISTS;var wD=$r;var _D=defineBuiltInAccessor$3;var xD=Function.prototype;var SD=wD(xD.toString);var OD=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;var kD=wD(OD.exec);var CD="name";gD&&!bD&&_D(xD,CD,{configurable:true,get:function(){try{return kD(OD,SD(this))[1]}catch(e){return""}}});var PD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){var e=1e3,r=6e4,n=36e5,c="millisecond",v="second",f="minute",p="hour",g="day",b="week",w="month",_="quarter",x="year",k="date",C="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},m=function(e,r,n){var c=String(e);return!c||c.length>=r?e:""+Array(r+1-c.length).join(n)+e},T={s:m,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),c=Math.floor(n/60),v=n%60;return(r<=0?"+":"-")+m(c,2,"0")+":"+m(v,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),c=e.clone().add(n,w),v=r-c<0,f=e.clone().add(n+(v?-1:1),w);return+(-(n+(r-c)/(v?c-f:f-c))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:w,y:x,w:b,d:g,D:k,h:p,m:f,s:v,ms:c,Q:_}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},A="en",L={};L[A]=E;var I="$isDayjsObject",S=function(e){return e instanceof W||!(!e||!e[I])},R=function t(e,r,n){var c;if(!e)return A;if("string"==typeof e){var v=e.toLowerCase();L[v]&&(c=v),r&&(L[v]=r,c=v);var f=e.split("-");if(!c&&f.length>1)return t(f[0])}else{var p=e.name;L[p]=e,c=p}return!n&&c&&(A=c),c||!n&&A},O=function(e,r){if(S(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new W(n)},N=T;N.l=R,N.i=S,N.w=function(e,r){return O(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var W=function(){function M(e){this.$L=R(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[I]=!0}var E=M.prototype;return E.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(N.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var c=r.match(P);if(c){var v=c[2]-1||0,f=(c[7]||"0").substring(0,3);return n?new Date(Date.UTC(c[1],v,c[3]||1,c[4]||0,c[5]||0,c[6]||0,f)):new Date(c[1],v,c[3]||1,c[4]||0,c[5]||0,c[6]||0,f)}}return new Date(r)}(e),this.init()},E.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},E.$utils=function(){return N},E.isValid=function(){return!(this.$d.toString()===C)},E.isSame=function(e,r){var n=O(e);return this.startOf(r)<=n&&n<=this.endOf(r)},E.isAfter=function(e,r){return O(e)<this.startOf(r)},E.isBefore=function(e,r){return this.endOf(r)<O(e)},E.$g=function(e,r,n){return N.u(e)?this[r]:this.set(n,e)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(e,r){var n=this,c=!!N.u(r)||r,_=N.p(e),l=function(e,r){var v=N.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return c?v:v.endOf(g)},$=function(e,r){return N.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},C=this.$W,P=this.$M,j=this.$D,E="set"+(this.$u?"UTC":"");switch(_){case x:return c?l(1,0):l(31,11);case w:return c?l(1,P):l(0,P+1);case b:var T=this.$locale().weekStart||0,A=(C<T?C+7:C)-T;return l(c?j-A:j+(6-A),P);case g:case k:return $(E+"Hours",0);case p:return $(E+"Minutes",1);case f:return $(E+"Seconds",2);case v:return $(E+"Milliseconds",3);default:return this.clone()}},E.endOf=function(e){return this.startOf(e,!1)},E.$set=function(e,r){var n,b=N.p(e),_="set"+(this.$u?"UTC":""),C=(n={},n[g]=_+"Date",n[k]=_+"Date",n[w]=_+"Month",n[x]=_+"FullYear",n[p]=_+"Hours",n[f]=_+"Minutes",n[v]=_+"Seconds",n[c]=_+"Milliseconds",n)[b],P=b===g?this.$D+(r-this.$W):r;if(b===w||b===x){var j=this.clone().set(k,1);j.$d[C](P),j.init(),this.$d=j.set(k,Math.min(this.$D,j.daysInMonth())).$d}else C&&this.$d[C](P);return this.init(),this},E.set=function(e,r){return this.clone().$set(e,r)},E.get=function(e){return this[N.p(e)]()},E.add=function(c,_){var k,C=this;c=Number(c);var P=N.p(_),y=function(e){var r=O(C);return N.w(r.date(r.date()+Math.round(e*c)),C)};if(P===w)return this.set(w,this.$M+c);if(P===x)return this.set(x,this.$y+c);if(P===g)return y(1);if(P===b)return y(7);var j=(k={},k[f]=r,k[p]=n,k[v]=e,k)[P]||1,E=this.$d.getTime()+c*j;return N.w(E,this)},E.subtract=function(e,r){return this.add(-1*e,r)},E.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||C;var c=e||"YYYY-MM-DDTHH:mm:ssZ",v=N.z(this),f=this.$H,p=this.$m,g=this.$M,b=n.weekdays,w=n.months,_=n.meridiem,h=function(e,n,v,f){return e&&(e[n]||e(r,c))||v[n].slice(0,f)},d=function(e){return N.s(f%12||12,e,"0")},x=_||function(e,r,n){var c=e<12?"AM":"PM";return n?c.toLowerCase():c};return c.replace(j,(function(e,c){return c||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return N.s(r.$y,4,"0");case"M":return g+1;case"MM":return N.s(g+1,2,"0");case"MMM":return h(n.monthsShort,g,w,3);case"MMMM":return h(w,g);case"D":return r.$D;case"DD":return N.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return h(n.weekdaysMin,r.$W,b,2);case"ddd":return h(n.weekdaysShort,r.$W,b,3);case"dddd":return b[r.$W];case"H":return String(f);case"HH":return N.s(f,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return x(f,p,!0);case"A":return x(f,p,!1);case"m":return String(p);case"mm":return N.s(p,2,"0");case"s":return String(r.$s);case"ss":return N.s(r.$s,2,"0");case"SSS":return N.s(r.$ms,3,"0");case"Z":return v}return null}(e)||v.replace(":","")}))},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(c,k,C){var P,j=this,E=N.p(k),T=O(c),A=(T.utcOffset()-this.utcOffset())*r,L=this-T,D=function(){return N.m(j,T)};switch(E){case x:P=D()/12;break;case w:P=D();break;case _:P=D()/3;break;case b:P=(L-A)/6048e5;break;case g:P=(L-A)/864e5;break;case p:P=L/n;break;case f:P=L/r;break;case v:P=L/e;break;default:P=L}return C?P:N.a(P)},E.daysInMonth=function(){return this.endOf(w).$D},E.$locale=function(){return L[this.$L]},E.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),c=R(e,r,!0);return c&&(n.$L=c),n},E.clone=function(){return N.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},M}(),G=W.prototype;return O.prototype=G,[["$ms",c],["$s",v],["$m",f],["$H",p],["$W",g],["$M",w],["$y",x],["$D",k]].forEach((function(e){G[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),O.extend=function(e,r){return e.$i||(e(r,W,O),e.$i=!0),O},O.locale=R,O.isDayjs=S,O.unix=function(e){return O(1e3*e)},O.en=L[A],O.Ls=L,O.p={},O}))})(PD);var DD=PD.exports;var jD=getDefaultExportFromCjs(DD);var MD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){var e="week",r="year";return function(n,c,v){var f=c.prototype;f.week=function(n){if(void 0===n&&(n=null),null!==n)return this.add(7*(n-this.week()),"day");var c=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=v(this).startOf(r).add(1,r).date(c),p=v(this).endOf(e);if(f.isBefore(p))return 1}var g=v(this).startOf(r).date(c).startOf(e).subtract(1,"millisecond"),b=this.diff(g,e,!0);return b<0?v(this).startOf("week").week():Math.ceil(b)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}))})(MD);var ED=MD.exports;var TD=getDefaultExportFromCjs(ED);var AD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r,n){r.prototype.dayOfYear=function(e){var r=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return null==e?r:this.add(e-r,"day")}}}))})(AD);var LD=AD.exports;var $D=getDefaultExportFromCjs(LD);var FD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r){r.prototype.weekday=function(e){var r=this.$locale().weekStart||0,n=this.$W,c=(n<r?n+7:n)-r;return this.$utils().u(e)?c:this.subtract(c,"day").add(e,"day")}}}))})(FD);var ID=FD.exports;var RD=getDefaultExportFromCjs(ID);var ND={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r,n){var i=function(e,r){if(!r||!r.length||1===r.length&&!r[0]||1===r.length&&Array.isArray(r[0])&&!r[0].length)return null;var n;1===r.length&&r[0].length>0&&(r=r[0]);n=(r=r.filter((function(e){return e})))[0];for(var c=1;c<r.length;c+=1)r[c].isValid()&&!r[c][e](n)||(n=r[c]);return n};n.max=function(){var e=[].slice.call(arguments,0);return i("isAfter",e)},n.min=function(){var e=[].slice.call(arguments,0);return i("isBefore",e)}}}))})(ND);var WD=ND.exports;var GD=getDefaultExportFromCjs(WD);var HD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r){r.prototype.isoWeeksInYear=function(){var e=this.isLeapYear(),r=this.endOf("y").day();return 4===r||e&&5===r?53:52}}}))})(HD);var zD=HD.exports;var YD=getDefaultExportFromCjs(zD);var UD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){var e="day";return function(r,n,c){var a=function(r){return r.add(4-r.isoWeekday(),e)},v=n.prototype;v.isoWeekYear=function(){return a(this).year()},v.isoWeek=function(r){if(!this.$utils().u(r))return this.add(7*(r-this.isoWeek()),e);var n,v,f,p,g=a(this),b=(n=this.isoWeekYear(),v=this.$u,f=(v?c.utc:c)().year(n).startOf("year"),p=4-f.isoWeekday(),f.isoWeekday()>4&&(p+=7),f.add(p,e));return g.diff(b,"week")+1},v.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var f=v.startOf;v.startOf=function(e,r){var n=this.$utils(),c=!!n.u(r)||r;return"isoweek"===n.p(e)?c?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(e,r)}}}))})(UD);var qD=UD.exports;var BD=getDefaultExportFromCjs(qD);var VD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r){r.prototype.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}}}))})(VD);var KD=VD.exports;var QD=getDefaultExportFromCjs(KD);var ZD={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r){var n=r.prototype,c=n.format;n.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return c.bind(this)(e);var v=this.$utils(),f=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((r.$M+1)/3);case"Do":return n.ordinal(r.$D);case"gggg":return r.weekYear();case"GGGG":return r.isoWeekYear();case"wo":return n.ordinal(r.week(),"W");case"w":case"ww":return v.s(r.week(),"w"===e?1:2,"0");case"W":case"WW":return v.s(r.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return v.s(String(0===r.$H?24:r.$H),"k"===e?1:2,"0");case"X":return Math.floor(r.$d.getTime()/1e3);case"x":return r.$d.getTime();case"z":return"["+r.offsetName()+"]";case"zzz":return"["+r.offsetName("long")+"]";default:return e}}));return c.bind(this)(f)}}}))})(ZD);var JD=ZD.exports;var XD=getDefaultExportFromCjs(JD);var tj={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){var e="minute",r=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(c,v,f){var p=v.prototype;f.utc=function(e){var r={date:e,utc:!0,args:arguments};return new v(r)},p.utc=function(r){var n=f(this.toDate(),{locale:this.$L,utc:!0});return r?n.add(this.utcOffset(),e):n},p.local=function(){return f(this.toDate(),{locale:this.$L,utc:!1})};var g=p.parse;p.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),g.call(this,e)};var b=p.init;p.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else b.call(this)};var w=p.utcOffset;p.utcOffset=function(c,v){var f=this.$utils().u;if(f(c))return this.$u?0:f(this.$offset)?w.call(this):this.$offset;if("string"==typeof c&&(c=function(e){void 0===e&&(e="");var c=e.match(r);if(!c)return null;var v=(""+c[0]).match(n)||["-",0,0],f=v[0],p=60*+v[1]+ +v[2];return 0===p?0:"+"===f?p:-p}(c),null===c))return this;var p=Math.abs(c)<=16?60*c:c,g=this;if(v)return g.$offset=p,g.$u=0===c,g;if(0!==c){var b=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(g=this.local().add(p+b,e)).$offset=p,g.$x.$localOffset=b}else g=this.utc();return g};var _=p.format;p.format=function(e){var r=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,r)},p.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},p.isUTC=function(){return!!this.$u},p.toISOString=function(){return this.toDate().toISOString()},p.toString=function(){return this.toDate().toUTCString()};var x=p.toDate;p.toDate=function(e){return"s"===e&&this.$offset?f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():x.call(this)};var k=p.diff;p.diff=function(e,r,n){if(e&&this.$u===e.$u)return k.call(this,e,r,n);var c=this.local(),v=f(e).local();return k.call(c,v,r,n)}}}))})(tj);var ej=tj.exports;var rj=getDefaultExportFromCjs(ej);var nj={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},r={};return function(n,c,v){var f,a=function(e,n,c){void 0===c&&(c={});var v=new Date(e),f=function(e,n){void 0===n&&(n={});var c=n.timeZoneName||"short",v=e+"|"+c,f=r[v];return f||(f=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:c}),r[v]=f),f}(n,c);return f.formatToParts(v)},u=function(r,n){for(var c=a(r,n),f=[],p=0;p<c.length;p+=1){var g=c[p],b=g.type,w=g.value,_=e[b];_>=0&&(f[_]=parseInt(w,10))}var x=f[3],k=24===x?0:x,C=f[0]+"-"+f[1]+"-"+f[2]+" "+k+":"+f[4]+":"+f[5]+":000",P=+r;return(v.utc(C).valueOf()-(P-=P%1e3))/6e4},p=c.prototype;p.tz=function(e,r){void 0===e&&(e=f);var n=this.utcOffset(),c=this.toDate(),p=c.toLocaleString("en-US",{timeZone:e}),g=Math.round((c-new Date(p))/1e3/60),b=v(p,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(c.getTimezoneOffset()/15)-g,!0);if(r){var w=b.utcOffset();b=b.add(n-w,"minute")}return b.$x.$timezone=e,b},p.offsetName=function(e){var r=this.$x.$timezone||v.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var g=p.startOf;p.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return g.call(this,e,r);var n=v(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return g.call(n,e,r).tz(this.$x.$timezone,!0)},v.tz=function(e,r,n){var c=n&&r,p=n||r||f,g=u(+v(),p);if("string"!=typeof e)return v(e).tz(p);var b=function(e,r,n){var c=e-60*r*1e3,v=u(c,n);if(r===v)return[c,r];var f=u(c-=60*(v-r)*1e3,n);return v===f?[c,v]:[e-60*Math.min(v,f)*1e3,Math.max(v,f)]}(v.utc(e,c).valueOf(),g,p),w=b[0],_=b[1],x=v(w).utcOffset(_);return x.$x.$timezone=p,x},v.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},v.tz.setDefault=function(e){f=e}}}))})(nj);var aj=nj.exports;var ij=getDefaultExportFromCjs(aj);var oj={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r,n){var c=r.prototype,o=function(e){return e&&(e.indexOf?e:e.s)},u=function(e,r,n,c,v){var f=e.name?e:e.$locale(),p=o(f[r]),g=o(f[n]),b=p||g.map((function(e){return e.slice(0,c)}));if(!v)return b;var w=f.weekStart;return b.map((function(e,r){return b[(r+(w||0))%7]}))},i=function(){return n.Ls[n.locale()]},a=function(e,r){return e.formats[r]||function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}(e.formats[r.toUpperCase()])},s=function(){var e=this;return{months:function(r){return r?r.format("MMMM"):u(e,"months")},monthsShort:function(r){return r?r.format("MMM"):u(e,"monthsShort","months",3)},firstDayOfWeek:function(){return e.$locale().weekStart||0},weekdays:function(r){return r?r.format("dddd"):u(e,"weekdays")},weekdaysMin:function(r){return r?r.format("dd"):u(e,"weekdaysMin","weekdays",2)},weekdaysShort:function(r){return r?r.format("ddd"):u(e,"weekdaysShort","weekdays",3)},longDateFormat:function(r){return a(e.$locale(),r)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};c.localeData=function(){return s.bind(this)()},n.localeData=function(){var e=i();return{firstDayOfWeek:function(){return e.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(r){return a(e,r)},meridiem:e.meridiem,ordinal:e.ordinal}},n.months=function(){return u(i(),"months")},n.monthsShort=function(){return u(i(),"monthsShort","months",3)},n.weekdays=function(e){return u(i(),"weekdays",null,null,e)},n.weekdaysShort=function(e){return u(i(),"weekdaysShort","weekdays",3,e)},n.weekdaysMin=function(e){return u(i(),"weekdaysMin","weekdays",2,e)}}}))})(oj);var sj=oj.exports;var uj=getDefaultExportFromCjs(sj);var cj={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(r,n,c){var v=n.prototype,f=v.format;c.en.formats=e,v.format=function(r){void 0===r&&(r="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,c=function(r,n){return r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,c,v){var f=v&&v.toUpperCase();return c||n[v]||e[v]||n[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))}(r,void 0===n?{}:n);return f.call(this,c)}}}))})(cj);var lj=cj.exports;var vj=getDefaultExportFromCjs(lj);var fj={exports:{}};(function(e,r){!function(r,n){e.exports=n()}(0,(function(){return function(e,r,n){n.updateLocale=function(e,r){var c=n.Ls[e];if(c)return(r?Object.keys(r):[]).forEach((function(e){c[e]=r[e]})),c}}}))})(fj);var hj=fj.exports;var dj=getDefaultExportFromCjs(hj);jD.extend(TD);jD.extend(YD);jD.extend(BD);jD.extend(QD);jD.extend($D);jD.extend(RD);jD.extend(GD);jD.extend(XD);jD.extend(rj);jD.extend(ij);jD.extend(uj);jD.extend(vj);jD.extend(dj);var pj="en";var mj=function(){function DateHelper(){_classCallCheck(this,DateHelper);var e;this.locale=pj;this.timezone=jD.tz.guess();(typeof window==="undefined"?"undefined":_typeof(window))==="object"&&((e=window).dayjs||(e.dayjs=jD))}_createClass(DateHelper,[{key:"setup",value:function setup(e){var r=e.options;return __awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function _callee(){var e,n;return _regeneratorRuntime().wrap((function _callee$(c){while(1)switch(c.prev=c.next){case 0:this.timezone=r.date.timezone||jD.tz.guess();e=r.date.locale;if(!(typeof e==="string"&&e!==pj)){c.next=17;break}if(!((typeof window==="undefined"?"undefined":_typeof(window))==="object")){c.next=12;break}c.t0=window["dayjs_locale_".concat(e)];if(c.t0){c.next=9;break}c.next=8;return this.loadBrowserLocale(e);case 8:c.t0=c.sent;case 9:n=c.t0;c.next=15;break;case 12:c.next=14;return this.loadNodeLocale(e);case 14:n=c.sent;case 15:jD.locale(e);this.locale=n;case 17:if(_typeof(e)==="object")if(e.hasOwnProperty("name")){jD.locale(e.name,e);this.locale=e}else this.locale=jD.updateLocale(pj,e);case 18:case"end":return c.stop()}}),_callee,this)})))}},{key:"extend",value:function extend(e){return jD.extend(e)}
/**
     * Return the week number, relative to its month
     *
     * @param  {number|Date} d Date or timestamp in milliseconds
     * @returns {number} The week number, relative to the month [0-5]
     */},{key:"getMonthWeekNumber",value:function getMonthWeekNumber(e){var r=this.date(e);var n=r.startOf("day");var c=r.startOf("month").endOf("week");return n<=c?1:Math.ceil(n.diff(c,"weeks",true))+1}
/**
     * Return the number of weeks in the given month
     *
     * As there is no fixed standard to specify which month a partial week should
     * belongs to, the ISO week date standard is used, where:
     * - the first week of the month should have at least 4 days
     *
     *  @see https://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param  {Timestamp | dayjs.Dayjs} d Datejs object or timestamp
     * @return {number}         The number of weeks
     */},{key:"getWeeksCountInMonth",value:function getWeeksCountInMonth(e){var r=this.date(e);return this.getLastWeekOfMonth(r).diff(this.getFirstWeekOfMonth(r),"week")+1}},{key:"getFirstWeekOfMonth",value:function getFirstWeekOfMonth(e){var r=this.date(e).startOf("month");var n=r.startOf("week");r.weekday()>4&&(n=n.add(1,"week"));return n}},{key:"getLastWeekOfMonth",value:function getLastWeekOfMonth(e){var r=this.date(e).endOf("month");var n=r.endOf("week");r.weekday()<4&&(n=n.subtract(1,"week"));return n}},{key:"date",value:function date(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Date;return jD.isDayjs(e)?e:jD(e).tz(this.timezone).utcOffset(0).locale(this.locale)}},{key:"format",value:function format(e,r){if(typeof r==="function"){for(var n=arguments.length,c=new Array(n>2?n-2:0),v=2;v<n;v++)c[v-2]=arguments[v];return r.apply(void 0,[e].concat(c))}return typeof r==="string"?this.date(e).format(r):null}
/**
     * Return an array of time interval
     *
     * @param  {number|Date} date A random date included in the wanted interval
     * @param  {number|Date} range Length of the wanted interval, or a stop date.
     * @param  {boolean} range Whether the end date should be excluded
     *                         from the result
     * @returns {Array<number>} Array of unix timestamp, in milliseconds
     */},{key:"intervals",value:function intervals(e,r,n){var c=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3];var v=this.date(r);var f;f=typeof n==="number"?v.add(n,e):jD.isDayjs(n)?n:this.date(n);v=v.startOf(e);f=f.startOf(e);var p=jD.min(v,f);f=jD.max(v,f);var g=[];c||(f=f.add(1,"second"));do{g.push(+p);p=p.add(1,e)}while(p<f);return g}},{key:"loadBrowserLocale",value:function loadBrowserLocale(e){return new Promise((function(r,n){var c=document.createElement("script");c.type="text/javascript";c.async=true;c.src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/".concat(e,".js");c.onerror=function(e){n(e)};c.onload=function(){r(window["dayjs_locale_".concat(e)])};document.head.appendChild(c)}))}},{key:"loadNodeLocale",value:function loadNodeLocale(e){return import("dayjs/locale/".concat(e,".js"))}}]);return DateHelper}();var yj=_export;var gj=$r;var bj=notARegexp;var wj=requireObjectCoercible$7;var _j=toString$9;var xj=correctIsRegexpLogic;var Sj=gj("".indexOf);yj({target:"String",proto:true,forced:!xj("includes")},{includes:function includes(e){return!!~Sj(_j(wj(this)),_j(bj(e)),arguments.length>1?arguments[1]:void 0)}});var Oj=["json","csv","tsv","txt"];function validate(e,r){var n=r.domain,c=r.subDomain,v=r.data;var f=n.type;var p=c.type;if(!e.has(f))throw new Error("'".concat(f,"' is not a valid domain type'"));if(!e.has(p))throw new Error("'".concat(p,"' is not a valid subDomain type'"));if(v.type&&!Oj.includes(v.type))throw new Error("The data type '".concat(v.type,"' is not valid data type"));if(!(e.get(p).allowedDomainType||[]).includes(f))throw new Error("The subDomain.type '".concat(p,"' can not be used together ")+"with the domain type ".concat(f));return true}var kj=collection$3;var Cj=Jg;kj("Set",(function(e){return function Set(){return e(this,arguments.length?arguments[0]:void 0)}}),Cj);function createPlugin(e,r){return new e(r)}function extractPluginName(e,r){return"".concat((new e).name).concat((r===null||r===void 0?void 0:r.key)||"")}var Pj=function(){function PluginManager(e){_classCallCheck(this,PluginManager);this.calendar=e;this.settings=new Map;this.plugins=new Map;this.pendingPaint=new Set}_createClass(PluginManager,[{key:"add",value:function add(e){var r=this;e.forEach((function(e){var n=_slicedToArray(e,2),c=n[0],v=n[1];var f=extractPluginName(c,v);var p=r.plugins.get(f);if(!(p&&r.settings.get(f)&&isEqual(r.settings.get(f).options,v))){r.settings.set(f,{options:v,dirty:true});r.plugins.has(f)||r.plugins.set(f,createPlugin(c,r.calendar));r.pendingPaint.add(r.plugins.get(f))}}))}},{key:"setupAll",value:function setupAll(){var e=this;this.plugins.forEach((function(r,n){var c=e.settings.get(n);if(typeof c!=="undefined"&&c.dirty){r.setup(c.options);c.dirty=false;e.settings.set(n,c)}}))}},{key:"paintAll",value:function paintAll(){return Array.from(this.pendingPaint.values()).map((function(e){return e.paint()}))}},{key:"destroyAll",value:function destroyAll(){return this.allPlugins().map((function(e){return e.destroy()}))}},{key:"getFromPosition",value:function getFromPosition(e){return this.allPlugins().filter((function(r){var n;return((n=r.options)===null||n===void 0?void 0:n.position)===e}))}},{key:"getHeightFromPosition",value:function getHeightFromPosition(e){return this.getFromPosition(e).map((function(e){return e.options.dimensions.height})).reduce((function(e,r){return e+r}),0)}},{key:"getWidthFromPosition",value:function getWidthFromPosition(e){return this.getFromPosition(e).map((function(e){return e.options.dimensions.width})).reduce((function(e,r){return e+r}),0)}},{key:"allPlugins",value:function allPlugins(){return Array.from(this.plugins.values())}}]);return PluginManager}();var Dj="4.2.4";var jj=function minuteTemplate(e){var r=10;var n=6;var c=["day","hour"];return{name:"minute",allowedDomainType:c,rowsCount:function rowsCount(){return r},columnsCount:function columnsCount(){return n},mapping:function mapping(n,c){return e.intervals("minute",n,e.date(c)).map((function(e,n){return{t:e,x:Math.floor(n/r),y:n%r}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("minute").valueOf()}}};var Mj=function hourTemplate(e,r){var n=r.domain;var c=24;var v=6;var f=["month","week","day"];return{name:"hour",allowedDomainType:f,rowsCount:function rowsCount(){return v},columnsCount:function columnsCount(r){switch(n.type){case"week":return c/v*7;case"month":return c/v*(n.dynamicDimension?e.date(r).daysInMonth():31);case"day":default:return c/v}},mapping:function mapping(r,f){return e.intervals("hour",r,e.date(f)).map((function(r){var f=e.date(r);var p=f.hour();var g=f.date();var b=Math.floor(p/v);var w=c/v;n.type==="month"&&(b+=(g-1)*w);n.type==="week"&&(b+=+f.format("d")*w);return{t:r,x:b,y:Math.floor(p%v)}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("hour").valueOf()}}};var Ej=function dayTemplate(e,r){var n=r.domain,c=r.verticalOrientation;var v=7;var f=["year","month","week"];return{name:"day",allowedDomainType:f,rowsCount:function rowsCount(){return n.type==="week"?1:v},columnsCount:function columnsCount(r){switch(n.type){case"month":return Math.ceil(n.dynamicDimension&&!c?e.getMonthWeekNumber(e.date(r).endOf("month")):6);case"year":return Math.ceil(n.dynamicDimension?e.date(r).endOf("year").dayOfYear()/v:54);case"week":default:return v}},mapping:function mapping(r,c){var v=0;var f=-1;return e.intervals("day",r,e.date(c)).map((function(r){var c=e.date(r);switch(n.type){case"month":f=e.getMonthWeekNumber(r)-1;break;case"year":if(v!==c.week()){v=c.week();f+=1}break;case"week":f=c.weekday();break}return{t:r,x:f,y:n.type==="week"?0:c.weekday()}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("day").valueOf()}}};var Tj=function dayTemplate(e,r){var n=r.domain,c=r.verticalOrientation;var v=7;var f=["year","month","week"];return{name:"xDay",allowedDomainType:f,rowsCount:function rowsCount(r){switch(n.type){case"month":return Math.ceil(n.dynamicDimension&&!c?e.getMonthWeekNumber(e.date(r).endOf("month")):6);case"year":return Math.ceil(n.dynamicDimension?e.date(r).endOf("year").dayOfYear()/v:54);case"week":default:return v}},columnsCount:function columnsCount(){return n.type==="week"?1:v},mapping:function mapping(r,c){return e.intervals("day",r,e.date(c)).map((function(r){var c=e.date(r);var v=c.endOf("year").week();var f=0;switch(n.type){case"month":f=e.getMonthWeekNumber(r)-1;break;case"year":v===1&&c.week()===v&&(f=c.subtract(1,"week").week()+1);f=c.week()-1;break;case"week":f=c.weekday();break}return{t:r,y:f,x:n.type==="week"?0:c.weekday()}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("day").valueOf()}}};var Aj=function dayTemplate(e){var r=7;var n=["month"];return{name:"ghDay",allowedDomainType:n,rowsCount:function rowsCount(){return r},columnsCount:function columnsCount(r){return e.getWeeksCountInMonth(r)},mapping:function mapping(r,n){var c=e.getFirstWeekOfMonth(r);var v=e.getFirstWeekOfMonth(n);var f=-1;var p=c.weekday();return e.intervals("day",c,v).map((function(r){var n=e.date(r).weekday();n===p&&(f+=1);return{t:r,x:f,y:n}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("day").valueOf()}}};var Lj=function weekTemplate(e,r){var n=r.domain;var c=["year","month"];return{name:"week",allowedDomainType:c,rowsCount:function rowsCount(){return 1},columnsCount:function columnsCount(r){switch(n.type){case"year":return n.dynamicDimension?e.date(r).endOf("year").isoWeeksInYear():53;case"month":return n.dynamicDimension?e.getWeeksCountInMonth(r):5;default:return 1}},mapping:function mapping(r,n){var c=e.getFirstWeekOfMonth(r);var v=e.getFirstWeekOfMonth(n);return e.intervals("week",c,v).map((function(e,r){return{t:e,x:r,y:0}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("week").valueOf()}}};var $j=function monthTemplate(e){var r=["year"];return{name:"month",allowedDomainType:r,rowsCount:function rowsCount(){return 1},columnsCount:function columnsCount(){return 12},mapping:function mapping(r,n){return e.intervals("month",r,e.date(n)).map((function(r){return{t:r,x:e.date(r).month(),y:0}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("month").valueOf()}}};var Fj=function yearTemplate(e){var r=[];return{name:"year",allowedDomainType:r,rowsCount:function rowsCount(){return 1},columnsCount:function columnsCount(){return 1},mapping:function mapping(r,n){return e.intervals("year",r,e.date(n)).map((function(e,r){return{t:e,x:r,y:0}}))},extractUnit:function extractUnit(r){return e.date(r).startOf("year").valueOf()}}};var Ij=[jj,Mj,Ej,Tj,Aj,Lj,$j,Fj];var Rj=function(){function TemplateCollection(e,r){_classCallCheck(this,TemplateCollection);this.settings=new Map;this.dateHelper=e;this.options=r;this.initiated=false}_createClass(TemplateCollection,[{key:"get",value:function get(e){return this.settings.get(e)}},{key:"has",value:function has(e){return this.settings.has(e)}},{key:"init",value:function init(){if(!this.initiated){this.initiated=true;this.add(Ij)}}},{key:"add",value:function add(e){var r=this;this.init();var n=[];castArray(e).forEach((function(e){var c=e(r.dateHelper,r.options.options);r.settings.set(c.name,c);c.hasOwnProperty("parent")&&n.push(c.name)}));n.forEach((function(e){var n=r.settings.get(r.settings.get(e).parent);n&&r.settings.set(e,Object.assign(Object.assign({},n),r.settings.get(e)))}))}}]);return TemplateCollection}();var Nj=function(){function CalHeatmap(){_classCallCheck(this,CalHeatmap);this.options=new TC;this.dateHelper=new mj;this.templateCollection=new Rj(this.dateHelper,this.options);this.dataFetcher=new yD(this);this.navigator=new lg(this);this.populator=new iS(this);this.calendarPainter=new P_(this);this.eventEmitter=new Ip;this.pluginManager=new Pj(this)}_createClass(CalHeatmap,[{key:"createDomainCollection",value:function createDomainCollection(e,r){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];return new Tw(this.dateHelper,this.options.options.domain.type,e,r,n)}
/**
     * Setup and paint the calendar with the given options
     *
     * @param  {Object} options The Options object
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */},{key:"paint",value:function paint(e,r){return __awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(n){while(1)switch(n.prev=n.next){case 0:this.options.init(e);n.next=3;return this.dateHelper.setup(this.options);case 3:this.templateCollection.init();n.prev=4;validate(this.templateCollection,this.options.options);n.next=11;break;case 8:n.prev=8;n.t0=n.catch(4);return n.abrupt("return",Promise.reject(n.t0));case 11:r&&this.pluginManager.add(castArray(r));this.calendarPainter.setup();this.domainCollection=new Tw(this.dateHelper);this.navigator.loadNewDomains(this.createDomainCollection(this.options.options.date.start,this.options.options.range));return n.abrupt("return",Promise.allSettled([this.calendarPainter.paint(),this.fill()]));case 16:case"end":return n.stop()}}),_callee,this,[[4,8]])})))}
/**
     * Add a new subDomainTemplate
     *
     * @since 4.0.0
     * @param  {SubDomainTemplate[] | SubDomainTemplate} templates
     * A single, or an array of SubDomainTemplate object
     * @return void
     */},{key:"addTemplates",value:function addTemplates(e){this.templateCollection.add(e)}
/**
     * Shift the calendar by n domains forward
     *
     * @param {number} n Number of domain intervals to shift forward
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */},{key:"next",value:function next(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;var r=this.navigator.loadNewDomains(this.createDomainCollection(this.domainCollection.max,e+1).slice(e),Yy.SCROLL_FORWARD);return Promise.allSettled([this.calendarPainter.paint(r),this.fill()])}
/**
     * Shift the calendar by n domains backward
     *
     * @param {number} n Number of domain intervals to shift backward
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */},{key:"previous",value:function previous(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;var r=this.navigator.loadNewDomains(this.createDomainCollection(this.domainCollection.min,-e),Yy.SCROLL_BACKWARD);return Promise.allSettled([this.calendarPainter.paint(r),this.fill()])}
/**
     * Jump directly to a specific date
     *
     * JumpTo will scroll the calendar until the wanted domain with the specified
     * date is visible. Unless you set reset to true, the wanted domain
     * will not necessarily be the first domain of the calendar.
     *
     * @param {Date} date Jump to the domain containing that date
     * @param {boolean} reset Whether the wanted domain
     * should be the first domain of the calendar
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */},{key:"jumpTo",value:function jumpTo(e){var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return Promise.allSettled([this.calendarPainter.paint(this.navigator.jumpTo(e,r)),this.fill()])}
/**
     * Fill the calendar with the given data
     *
     * @param  {Object|string}    dataSource    The calendar's datasource,
     * same type as `options.data.source`
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */},{key:"fill",value:function fill(){var e=this;var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.options.data.source;var n=this.options.options;var c=this.templateCollection;var v=this.dateHelper.intervals(n.domain.type,this.domainCollection.max,2)[1];var f=this.dataFetcher.getDatas(r,this.domainCollection.min,v);return new Promise((function(r,v){f.then((function(v){e.domainCollection.fill(v,n.data,c.get(n.subDomain.type).extractUnit);e.populator.populate();r(null)}),(function(e){v(e)}))}))}
/**
     * Listener for all events
     *
     * @since 4.0.0
     * @param  {string}  eventName  Name of the event to listen to
     * @param  {function} Callback function to execute on event trigger
     * @return void
     */},{key:"on",value:function on(e,r){this.eventEmitter.on(e,r)}},{key:"dimensions",value:function dimensions(){return this.calendarPainter.dimensions}},{key:"destroy",value:function destroy(){return this.calendarPainter.destroy()}},{key:"extendDayjs",value:function extendDayjs(e){return this.dateHelper.extend(e)}}]);return CalHeatmap}();Nj.VERSION=Dj;export{Nj as default};

