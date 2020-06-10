(function(t){function e(e){for(var n,o,u=e[0],i=e[1],c=e[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"13cb":function(t,e,r){"use strict";var n=r("f374"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/BreakingBad"}},[t._v("Learn about Breaking Bad characters")]),t._v(" | "),r("router-link",{attrs:{to:"/BreakingRandom"}},[t._v("Random Quote")]),t._v(" | ")],1),r("router-view")],1)},s=[],o={name:"app"},u=o,i=(r("034f"),r("2877")),c=Object(i["a"])(u,a,s,!1,null,null,null),l=c.exports,p=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breakingBad"},[r("h1",[t._v("Breaking Bad: Learn about the characters")]),r("div",{staticClass:"displayCharacter"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.findName(e)}}},[r("p",[t._v(" Search the characters by first name "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Search")])])]),t.results&&t.results.length>0?r("ul",{staticClass:"results"},t._l(t.results,(function(e){return r("li",{key:e.name},[r("p",[r("strong",[t._v(t._s(e.name))])]),r("p",[t._v(t._s(e.occupation))]),r("p",[t._v(t._s(e.status))]),r("p",[t._v(t._s(e.nickname))]),r("p",[t._v(t._s(e.portrayed))]),r("p",[t._v(t._s(e.category))])])})),0):t.results&&0==t.results.length?r("div",{staticClass:"no-results"},[r("h2",[t._v("A character does not have that name")]),r("p",[t._v('Please try "Walter", "Saul" or "Jesse"')])]):t._e(),t.errors&&t.errors.length>0?r("ul",{staticClass:"errors"},t._l(t.errors,(function(e){return r("li",{key:e},[t._v(t._s(e.message))])})),0):t._e()])])},d=[],v=(r("b0c0"),r("bc3a")),m=r.n(v),h={name:"breakingBad",data:function(){return{results:null,errors:[],phrase:"",name:"",occupation:"",img:"",status:"",nickname:"",protrayed:"",category:""}},methods:{findName:function(){var t=this;m.a.get("https://www.breakingbadapi.com/api/characters",{params:{name:this.name}}).then((function(e){t.results=e.data})).catch((function(e){t.errors.push(e)}))}}},_=h,b=(r("a54d"),Object(i["a"])(_,f,d,!1,null,"decd2376",null)),g=b.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quote"},[r("h1",[t._v("Breaking Bad Quotes")]),r("form",{on:{click:t.findQuote}},[t._m(0)]),t.results&&t.results.length>0?r("ul",{staticClass:"results"},t._l(t.results,(function(e){return r("li",{key:e},[r("p",[r("strong",[t._v(t._s(e.quote))])]),r("p",[t._v(t._s(e.author))]),r("p",[t._v(t._s(e.series))])])})),0):t._e()])},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("button",{attrs:{type:"submit"}},[t._v("Get a random quote")])])}],w={name:"Quote",data:function(){return{results:null,errors:[],quote:"",author:"",series:""}},methods:{findQuote:function(){var t=this;m.a.get("https://www.breakingbadapi.com/api/quote/random",{params:{}}).then((function(e){t.results=e.data})).catch((function(e){t.errors.push(e)}))}}},B=w,O=(r("13cb"),Object(i["a"])(B,y,k,!1,null,"00057f24",null)),j=O.exports;n["a"].use(p["a"]);var x=[{path:"/",name:"BreakingBad",component:g},{path:"/BreakingRandom",name:"BreakingRandom",component:j}],P=new p["a"]({routes:x}),C=P;n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,r){},a54d:function(t,e,r){"use strict";var n=r("cb2f"),a=r.n(n);a.a},cb2f:function(t,e,r){},f374:function(t,e,r){}});
//# sourceMappingURL=app.29906036.js.map