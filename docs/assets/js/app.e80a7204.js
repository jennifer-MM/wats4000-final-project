(function(e){function t(t){for(var a,o,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("a026"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/BreakingBad"}},[e._v("Learn about Breaking Bad characters")]),e._v(" | "),r("router-link",{attrs:{to:"/BreakingRandom"}},[e._v("Random Quote")]),e._v(" | ")],1),r("router-view")],1)},s=[],o={name:"app"},i=o,u=(r("034f"),r("2877")),c=Object(u["a"])(i,n,s,!1,null,null,null),l=c.exports,p=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"breakingBad"},[r("h1",[e._v("Breaking Bad: Learn about the characters")]),r("div",{staticClass:"displayCharacter"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.findName(t)}}},[r("p",[e._v(" Search the characters by first name "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e.results&&e.results.length>0?r("ul",{staticClass:"results"},e._l(e.results,(function(t){return r("li",{key:t.name},[r("p",[r("strong",[e._v("Name: "+e._s(t.name))])]),r("img",{staticClass:"image",attrs:{src:t.img,alt:t.alt}}),r("ul",{staticClass:"occupation-list"},e._l(t.occupations,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0),r("p",[e._v("Alive or dead: "+e._s(t.status))]),r("p",[e._v("Nickname: "+e._s(t.nickname))]),r("p",[e._v("Portrayed by: "+e._s(t.portrayed))]),r("p",[e._v("Show series: "+e._s(t.category))])])})),0):e.results&&0==e.results.length?r("div",{staticClass:"no-results"},[r("h2",[e._v("A character does not have that name")]),r("p",[e._v('Please try "Walter", "Saul" or "Jesse"')])]):e._e(),e.errors&&e.errors.length<0?r("ul",{staticClass:"errors"},e._l(e.errors,(function(t){return r("li",{key:t},[e._v(e._s(t.message))])})),0):e._e()])])},f=[],h=(r("b0c0"),r("bc3a")),m=r.n(h),v={name:"breakingBad",data:function(){return{results:null,errors:[],phrase:"",name:"",occupation:"",img:"",status:"",nickname:"",protrayed:"",category:""}},methods:{findName:function(){var e=this;m.a.get("https://www.breakingbadapi.com/api/characters",{params:{name:this.name}}).then((function(t){e.results=t.data})).catch((function(t){e.errors.push(t)}))},getCharacter:function(){var e=this;this.results=null,this.showLoading=!0;var t="findName_"+this.result,r=9e5;this.$ls.get(t)?(console.log("Cached query detected."),this.results=this.$ls.get(t),this.showLoading=!1):(console.log("No cache available. Making API request."),API.get("find",{params:{q:this.query}}).then((function(a){e.$ls.set(t,a.data,r),console.log("New query has been cached as: "+t),e.results=a.data,e.showLoading=!1})))}}},_=v,g=(r("e937"),Object(u["a"])(_,d,f,!1,null,"57aa2521",null)),b=g.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quote"},[r("h1",{staticStyle:{color:"dark blue"}},[e._v("Breaking Bad Quotes")]),r("form",{on:{click:e.findQuote}},[e._m(0)]),e.results&&e.results.length>0?r("ul",{staticClass:"results"},e._l(e.results,(function(t){return r("li",{key:t},[r("p",{staticClass:"styles"},[e._v(e._s(t.quote))]),r("p",[e._v(e._s(t.author))]),r("p",[e._v(e._s(t.series))])])})),0):e._e()])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("button",{attrs:{type:"submit"}},[e._v("Get a random quote")])])}],w={name:"Quote",data:function(){return{results:null,errors:[],quote:"",author:"",series:""}},methods:{findQuote:function(){var e=this;m.a.get("https://www.breakingbadapi.com/api/quote/random",{params:{}}).then((function(t){e.results=t.data})).catch((function(t){e.errors.push(t)}))}}},B=w,O=(r("c97d"),Object(u["a"])(B,y,k,!1,null,"3062c915",null)),C=O.exports;a["a"].use(p["a"]);var j=[{path:"/BreakingBad",name:"BreakingBad",component:b},{path:"/BreakingRandom",name:"BreakingRandom",component:C}],P=new p["a"]({routes:j}),x=P,q=r("c16e"),S=r.n(q),N={namespace:"BreakingBad __"};a["a"].use(S.a,N),a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:x,template:"<App/>",components:{App:l},render:function(e){return e(l)}}).$mount("#app")},"66f4":function(e,t,r){},"85ec":function(e,t,r){},a252:function(e,t,r){},c97d:function(e,t,r){"use strict";var a=r("66f4"),n=r.n(a);n.a},e937:function(e,t,r){"use strict";var a=r("a252"),n=r.n(a);n.a}});
//# sourceMappingURL=app.e80a7204.js.map