(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)r=o[u],s[r]&&h.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b5b7387e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=s[t]=[e,i]});e.push(n[2]=i);var a,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t),a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}s[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,c.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("c21b"),s=n.n(i);s.a},"2b07":function(t,e,n){},"3a62":function(t,e,n){},"3a9d":function(t,e,n){"use strict";var i=n("938d"),s=n.n(i);s.a},"5b1a":function(t,e,n){"use strict";var i=n("d5f6"),s=n.n(i);s.a},"938d":function(t,e,n){},a854:function(t,e,n){"use strict";var i=n("c32d"),s=n.n(i);s.a},b491:function(t,e,n){"use strict";var i=n("2b07"),s=n.n(i);s.a},c21b:function(t,e,n){},c32d:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=n("ce5b"),a=n.n(s),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"mdrawer",attrs:{temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-toolbar",{staticClass:"transparent",attrs:{prominent:"",flat:""}},[n("v-toolbar-title",[t._v("ORBAT Chart Builder")])],1)],1)],1),n("v-content",[n("v-container",{staticClass:"py-0 px-0 mx-0 my-0",attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{staticClass:"sidebar",staticStyle:{"z-index":"4"}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),n("v-flex",[n("router-view")],1)],1)],1)],1)],1)},o=[],c={components:{},data:()=>({drawer:null})},l=c,u=(n("034f"),n("2877")),d=Object(u["a"])(l,r,o,!1,null,null,null);d.options.__file="App.vue";var h=d.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"3"}},[n("SlidePanel",{attrs:{"header-title":"ORBAT"},on:{onSlide:t.onSlide},model:{value:t.orbatPanel,callback:function(e){t.orbatPanel=e},expression:"orbatPanel"}},[n("OrbatTree",{attrs:{rootUnits:t.tree},on:{selectunit:t.onSelectUnit}})],1)],1),n("v-flex",[n("OrbatChart",{staticClass:"px-0 py-0 home",attrs:{unit:t.currentUnit},on:{unitclick:t.onUnitClick}})],1)],1)},m=[],v=n("9ab4"),b=n("60a3"),y=(n("0dc2"),n("d61f")),g=n.n(y),x=n("4308");function w(t,e){let n=0;function i(t,s){if(e(t,n,s),t.subUnits){n+=1;for(const e of t.subUnits)i(e,t);n-=1}}i(t,null)}const C="\n.o-line {\n  stroke: black;\n  stroke-width: 1pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n",O={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5};function S(t,e){const n=new y["Symbol"](t.sidc,{size:e.symbolSize}),i=n.getSize(),s=n.getAnchor(),a=n.getOctagonAnchor();return{size:i,anchor:s,octagonAnchor:a,symb:n,x:null,y:null,parent:null,node:t}}function _(t,e,n,i){const s=n-e.octagonAnchor.x,a=i-e.octagonAnchor.y;return t.attr("transform",`translate(${s}, ${a})`)}function U(t,e,n){const i=t.append("g").attr("class","o-unit");let s=i.append("rect").classed("o-rect",!0);i.append("g").html(e.symb.asSVG());i.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.size.height).attr("class","o-label").text(e.node.name);const a=i.node().getBBox();return n.debug&&(s=s.attr("x",a.x).attr("y",a.y).attr("width",a.width).attr("height",a.height).style("fill","#ccc").style("fill-opacity",".3").style("stroke","#666").style("stroke-width","1.5px")),i}class k{constructor(t,e={}){this.rootNode=t,this.levels=[],this.options=Object.assign({},O,e),t&&this._computeOrbatInfo(t)}cleanup(){if(this.svg){let t=this.svg.selectAll("g.o-unit");t.on("click",null)}}toSVG(t,e){this.width=t.width||600,this.height=t.height||600,e.innerHTML="";const n=Object(x["a"])(e),i=n.append("svg");this.svg=i;let s=this.options;i.attr("viewBox",`0 0 ${this.width} ${this.height}`),i.append("style").text(C),i.attr("width","100%"),i.attr("height","100%");i.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height);const a=this.levels.length;return this.levels.forEach((t,e)=>{if(s.maxLevels&&e>=s.maxLevels)return;let n=t.reduce((t,e)=>t.concat(e),[]);const r=n.length;let o=0;t.forEach((t,n)=>{t.forEach(t=>{const n=(o+1)*this.width/(r+1),c=this.height*((e+1)/(a+1));t.x=n,t.y=c;const l=U(i,t,this.options);s.onClick&&l.on("click",e=>{s.onClick(t)});const u=l.node().getBBox();if(t.ly=c+(u.height-t.octagonAnchor.y),_(l,t,n,c),t.parent){t.parent.x;const e=c-(c-t.parent.y)/2,a=`M ${n}, ${c-t.octagonAnchor.y-s.connectorOffset} V ${e}`;i.append("path").attr("d",a).classed("o-line",!0)}o+=1});let c=t[0];if(!c.parent)return;let l=c.parent,u=t[t.length-1];const d=c.y-(c.y-l.y)/2,h=`M ${l.x}, ${l.ly+s.connectorOffset} V ${d}`;i.append("path").attr("d",h).classed("o-line",!0);const p=`M ${c.x}, ${d} H ${u.x}`;i.append("path").attr("d",p).classed("o-line",!0)})}),i.node()}_computeOrbatInfo(t){let e=[];const n={};w(t,(t,i,s)=>{const a=S(t,this.options),r=e[i]||[];s&&(a.parent=n[s.id]),n[t.id]=a,r.push(a),e[i]=r}),e.forEach((t,n)=>{let i=t.reduce((t,e,n,i)=>{return 0===n?(t.push([e]),t):i[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);e[n]=i}),this.levels=e}}var A,N,j=k,B=i["default"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},levels:{type:Number,default:3},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32}},data:()=>({resizeTimeout:null,width:600,height:600,isMounted:!1}),created(){},mounted(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{},200)},onClick(t){this.$emit("unitclick",t)}},render(t){this.orbchart&&this.orbchart.cleanup();let e=new j(this.unit,{maxLevels:this.levels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick});if(this.orbchart=e,this.isMounted){e.toSVG({width:1920,height:1080},this.$el)}return t("div",{attrs:{class:"orbat-chart"}})}}),M=B,P=(n("b491"),Object(u["a"])(M,A,N,!1,null,null,null));P.options.__file="OrbatChart.vue";var z=P.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spanel",class:{large:t.large}},[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"slide"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[t._t("header",[n("v-toolbar-title",[t._v(t._s(t.headerTitle))])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.isActive=!1}}},[n("v-icon",[t._v("chevron_left")])],1)],2),n("div",{staticClass:"slide-content"},[t._t("default")],2)],1)])],1)},G=[],$={name:"slide-panel",data:()=>({isActive:!1}),beforeMount(){this.isActive=this.value},props:{value:{required:!1},headerTitle:String,large:Boolean},watch:{isActive(t){this.$emit("input",t)},value(t){this.isActive=t}},methods:{afterLeave(){this.$emit("onSlide")}}},E=$,L=(n("3a9d"),Object(u["a"])(E,T,G,!1,null,"09c2b352",null));L.options.__file="SlidePanel.vue";var V,q,I=L.exports,Y=i["default"].extend({name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},render(t){let e=new g.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return t("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:e.asSVG()}})}}),D=Y,X=Object(u["a"])(D,V,q,!1,null,null,null);X.options.__file="MilSymbol.vue";var Z=X.exports,J=n("cf68"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-treeview",{attrs:{items:t.rootUnits,activatable:"","item-children":"subUnits"},on:{"update:active":t.onUnitClick},scopedSlots:t._u([{key:"prepend",fn:function(t){var e=t.item;t.open,t.leaf;return[n("MilSymbol",{attrs:{sidc:e.sidc}})]}},{key:"append",fn:function(e){var i=e.item;return[i.id==t.currentUnitKey?n("v-icon",{staticClass:"pr-1"},[t._v("\n      my_location\n    ")]):t._e()]}}])})},R=[],W=(n("ac6a"),n("65d9")),Q=n.n(W);let K=class extends i["default"]{constructor(){super(...arguments),this.currentUnitKey=null}created(){this.unitMap=new Map,this.buildUnitMap(this.rootUnits),this.currentUnitKey=this.rootUnits[0].id}onUnitClick(t){t.length&&(this.currentUnitKey=t[0],this.$emit("selectunit",this.unitMap.get(t[0])))}buildUnitMap(t){for(const e of t)this.unitMap.set(e.id,e),e.subUnits&&e.subUnits.length&&this.buildUnitMap(e.subUnits)}};v["a"]([Object(b["b"])()],K.prototype,"rootUnits",void 0),K=v["a"]([Q()({components:{MilSymbol:Z}})],K);var F=K,tt=F,et=(n("5b1a"),Object(u["a"])(tt,H,R,!1,null,"152035f5",null));et.options.__file="OrbatTree.vue";var nt=et.exports;const it=J;let st=class extends b["c"]{constructor(){super(...arguments),this.orbat=it,this.tree=[it],this.currentUnit=null,this.orbatPanel=!0}created(){this.currentUnit=this.tree[0]}onSlide(){}onUnitClick(t){console.log("Clicked",t.node.name)}onSelectUnit(t){this.currentUnit=t}};st=v["a"]([Object(b["a"])({components:{OrbatTree:nt,OrbatChart:z,SlidePanel:I,MilSymbol:Z}})],st);var at=st,rt=at,ot=(n("a854"),Object(u["a"])(rt,f,m,!1,null,"0831a8fe",null));ot.options.__file="MainView.vue";var ct=ot.exports;i["default"].use(p["a"]);var lt=new p["a"]({routes:[{path:"/",name:"mainView",component:ct},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),ut=n("2f62");i["default"].use(ut["a"]);var dt=new ut["a"].Store({state:{},mutations:{},actions:{}});n("bf40"),n("3a62");i["default"].config.productionTip=!1,i["default"].use(a.a),new i["default"]({router:lt,store:dt,render:t=>t(h)}).$mount("#app")},cf68:function(t){t.exports={name:"TG 317.1 LG",sidc:"10031004001211000000",subUnits:[{name:"3 Cdo Bde",sidc:"10031000181211004600",subUnits:[{name:"40 Cdo",sidc:"10031000161211004600",state:[],id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~",state:[]},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c",state:[]},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1",state:[]}]},{name:"42 Cdo",sidc:"10031000161211004600",state:[],id:"xcEG3htG0iZEuisD9IhGY",subUnits:[{name:"J",sidc:"10031000151211004600",id:"Yfj4qs4nUyG3DOLwzG8hY",state:[]},{name:"K",sidc:"10031000151211004600",id:"Od6fwg9FD5upCkXDIBalQ",state:[]},{name:"L",sidc:"10031000151211004600",id:"jdXcqNaLkNJxH97rVmUP_",state:[]}]},{name:"45 Cdo",sidc:"10031000161211004600",state:[],id:"0fm4O5tSvrVwjnv9~6ECy",subUnits:[{name:"X",sidc:"10031000151211004600",id:"7yI8rtwPIXI07Ag1Qyuem",state:[]},{name:"Y",sidc:"10031000151211004600",id:"QrSxdjL5eV~w1mJkRhUzH",state:[]},{name:"Z",sidc:"10031000151211004600",id:"~WAhIuR0DjOs6vxdNmTcn",state:[]}]},{name:"29 Cdo RA",sidc:"10031000161303000000",state:[],id:"qF9mX0pKVgtu7cVHjsXy5"},{name:"2 Para",sidc:"10031000161211000001",subUnits:[{name:"29 FB",sidc:"10031000151303000000",state:[],id:"vydX8pjg7sB1t37a5pBN1"},{name:"43 AD",sidc:"10031000141301020000",state:[],id:"peqkxwOqZXYkpSsx4KRCj"},{name:"A COY",sidc:"10031000151211000001",id:"wbPe8yifmaTgAxT2oD1Ff",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"rVxn2~0XEf8E7WeuPxUe6",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151213000001",id:"vu2TRMUpnGI2klzs19BgZ",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151211000001",id:"~78NfpA426AitI60JeWSa",state:[],shortName:"D"}],state:[],id:"QyZAnvqo5EXsjcNis_GSE"},{name:"3 Para",sidc:"10031000161211000001",subUnits:[{name:"A COY",sidc:"10031000151211000001",id:"INGH8mxuQMnN7LBZhXV_y",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"~8cVJd3hQNPr8exESXML9",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151211000001",id:"bsMEfBAVOxvYu86qvP0Wq",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151213000001",id:"uUlcvH2~mvagZr1QGoZcP",state:[],shortName:"D"}],state:[],id:"UlbrqVz6kysuUCzz7hSTu"}],state:[],id:"yeyNm2QTCh_yivrfpnv0N"},{name:"5 Inf Bde",sidc:"10031000181211000000",state:[],id:"LurqqM75Avg1_t0AjxUgi",subUnits:[{name:"2nd Bn Scots Guards",sidc:"10031000161211000000",id:"ZZhPAmDQzAT6JWhesPzQ2",state:[],shortName:"SG"},{name:"1st Bn Welsh Guards",sidc:"10031000161211000000",id:"gkcIswEB_vLPW_a3NCJzx",state:[],shortName:"WG"},{name:"1st Bn 7th Gurkha Rifles",sidc:"10031000161211000000",id:"ugu_gHIyde1iuwHYC34_k",state:[],shortName:"7 GR"},{name:"36 Engineer Regiment",sidc:"10031000161407000000",id:"kkfnLWpc2cK1uw2qX6XwB",state:[],shortName:"36 Eng"},{name:"63 AD Squadron",sidc:"10031000151301020000",id:"qhZBaHDgQYOvP4fCSqMXZ",state:[],shortName:"63 AD"},{name:"97 Field Battery",sidc:"10031000151303000000",id:"5yU8AvSZGcNDLjGpCZJJC",state:[],shortName:"97 FB"}]}],state:[],id:"Apc~4XNmoJDViPTPdcoJS"}},d5f6:function(t,e,n){}});
//# sourceMappingURL=app.91c80908.js.map