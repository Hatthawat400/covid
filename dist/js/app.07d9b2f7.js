(function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"1af6":function(e,t,n){e.exports=n.p+"img/covid1.f8ba8906.png"},"1c92":function(e,t,n){},"3a2c":function(e,t,n){"use strict";var r=n("1c92"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"logo",src:n("1af6")}}),r("HelloWorld",{attrs:{msg:""}}),r("covid")],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},l=[],s={name:"HelloWorld",props:{msg:String}},u=s,d=(n("3a2c"),n("2877")),f=Object(d["a"])(u,c,l,!1,null,"e918ac78",null),p=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.textSearch,expression:"textSearch"}],attrs:{type:"text"},domProps:{value:e.textSearch},on:{input:function(t){t.target.composing||(e.textSearch=t.target.value)}}}),n("button",{on:{click:function(t){return e.getitem()}}},[e._v("Search")]),n("b-container",{staticClass:"vb-row"},[n("b-row",{attrs:{"align-h":"around"}},[n("b-card",{attrs:{id:"cov"}},[n("div",{staticClass:"mb-4"},[n("img",{attrs:{src:e.flag,alt:""}}),n("br")]),e._v(" ประชากร :"+e._s(e.population)+"คน ทวีป:"+e._s(e.continent)+" กรณีผู้ติดเชื่อ :"+e._s(e.cases)+"ราย กรณีผู้ติดเชื่อในวันนี้:"+e._s(e.todayCases)+"ราย ผู้เสียชีวิต:"+e._s(e.deaths)+"ราย"),n("br"),e._v(" หายเป็นปกติแล้ว:"+e._s(e.recovered)+"ราย อาการวิกฤต:"+e._s(e.critical)+"ราย กรณีผู้ติดเชื่อต่อหนึ่งล้าน:"+e._s(e.casesPerOneMillion)+" ผู้เสียชีวิตต่อหนึ่งล้าน:"+e._s(e.deathsPerOneMillion)+" กู้ชีวิตคืนต่อล้าน:"+e._s(e.recoveredPerOneMillion)+"% "),n("br"),e._v(" อาการวิกฤตต่อล้าน:"+e._s(e.criticalPerOneMillion)+"% "),n("br"),n("br")])],1)],1)],1)},h=[],b=n("bc3a"),g=n.n(b),m={data:function(){return{textSearch:null,cases:"",todayCases:"",deaths:"",recovered:"",critical:"",casesPerOneMillion:"",deathsPerOneMillion:"",population:"",continent:"",recoveredPerOneMillion:"",criticalPerOneMillion:"",countryInfo:"",flag:""}},methods:{getitem:function(){var e=this;g.a,g.a.get("https://corona.lmao.ninja/v2/countries/"+this.textSearch).then((function(t){e.resultData=t.data.results,e.cases=t.data.cases,e.todayCases=t.data.todayCases,e.deaths=t.data.deaths,e.recovered=t.data.recovered,e.critical=t.data.critical,e.casesPerOneMillion=t.data.casesPerOneMillion,e.deathsPerOneMillion=t.data.deathsPerOneMillion,e.population=t.data.population,e.continent=t.data.continent,e.recoveredPerOneMillion=t.data.recoveredPerOneMillion,e.criticalPerOneMillion=t.data.criticalPerOneMillion,e.countryInfo=t.data.countryInfo,e.flag=t.data.countryInfo.flag})).catch((function(e){console.error(e)}))}}},O=m,_=(n("b3bf"),Object(d["a"])(O,v,h,!1,null,null,null)),y=_.exports,P={name:"App",components:{HelloWorld:p,covid:y}},M=P,x=(n("034f"),Object(d["a"])(M,o,i,!1,null,null,null)),w=x.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){},"876d":function(e,t,n){},b3bf:function(e,t,n){"use strict";var r=n("876d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.07d9b2f7.js.map