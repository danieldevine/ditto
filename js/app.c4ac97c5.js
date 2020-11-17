(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e9359377"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ditto/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2334:function(t,e,r){},5387:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app",attrs:{id:"app"}},[r("div",{staticClass:"app__inner"},[r("router-view")],1)])},a=[],i=(r("5c0b"),r("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=r("9483");Object(l["a"])("".concat("/ditto/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var p=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"sidebar"},[r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[t._v("Ditto")])],1),r("div",{staticClass:"sidebar__categories"},[t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"sidebar__category"},[r("a",{staticClass:"button",on:{click:function(r){return r.preventDefault(),t.updateCategory(e)}}},[t._v(t._s(e)+" Ideas")])])})),r("div",{staticClass:"sidebar__category"},[r("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.updateCategory("Random")}}},[t._v("Random Ideas")])])],2),t._m(0)]),t.prompt?r("div",{staticClass:"prompt"},[r("h6",{staticClass:"prompt__category"},[t._v(t._s(t.prompt.category))]),r("h2",{staticClass:"prompt__prompt"},[t._v(t._s(t.prompt.prompt))]),r("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPrompt(t.currentCategory)}}},[t._v("New "+t._s(t.currentCategory)+" Idea")])]):t._e()])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[t._v(" Ditto is a writing-prompt generator. It generates prompts to get you writing. To get a new prompt, click on a category (journal, poem, story or speech) if you’d prefer a particular genre, or click ‘random’ if you have no preference. "),r("br"),r("span",[t._v("Prompts By "),r("strong",[t._v(" Ellen Dillon")])]),r("span",[t._v("Built By "),r("strong",[t._v(" Dan Devine")])])])}],g=(r("4de4"),r("4160"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("bc3a")),v=r.n(g),m={name:"Home",data:function(){return{prompt:null,categories:null,currentCategory:"Random"}},mounted:function(){this.getPrompt(this.currentCategory),this.getCategories()},methods:{getPrompt:function(t){var e=this,r="".concat(window.location,"/data/prompts.json");v.a.get(r).then((function(r){if("Random"!=t){var n=r.data.prompts.filter((function(e){return e.category==t}));e.prompt=n[Math.floor(Math.random()*n.length)]}else{var o=r.data.prompts;e.prompt=o[Math.floor(Math.random()*o.length)]}}))},getCategories:function(){var t=this,e="".concat(window.location,"/data/prompts.json");v.a.get(e).then((function(e){var r=e.data.prompts,n=new Set;r.forEach((function(t){n.add(t.category)})),t.categories=n}))},updateCategory:function(t){this.currentCategory=t,this.getPrompt(this.currentCategory)}}},h=m,b=(r("da2a"),Object(i["a"])(h,f,d,!1,null,"aef851ec",null)),y=b.exports;n["default"].use(p["a"]);var _=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],w=new p["a"]({mode:"history",base:"/ditto/",routes:_}),C=w,j=r("2f62");n["default"].use(j["a"]);var k=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=r("5299");n["default"].use(O),n["default"].config.productionTip=!1,new n["default"]({router:C,store:k,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5387"),o=r.n(n);o.a},da2a:function(t,e,r){"use strict";var n=r("2334"),o=r.n(n);o.a}});
//# sourceMappingURL=app.c4ac97c5.js.map