(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"173f":function(t,e,n){},"3a7d":function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"left"}},[t.navBtn?n("div",{attrs:{id:"navShowBtnDiv"}},[n("button",{attrs:{id:"navShowBtn"},on:{click:t.toggleNav}},[t._v(">>")])]):t._e(),n("Nav",{attrs:{tableRow:t.tableItems,navRow:t.finTableItems},on:{hide:t.toggleNav}})],1),n("div",{attrs:{id:"right"}},[n("Header"),n("Main",{on:{connect:t.connectTable2Nav,finish:t.connectFinishedItem}})],1)])},r=[],i=n("2909"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("p",[t._v("김기민 목차관리")]),n("chart")],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"myChart",height:"50vh"}})},d=[],u=n("30ef"),f=n.n(u),b={name:"ddd",mounted:function(){var t=document.getElementById("myChart"),e=new f.a(t,{type:"line",data:{labels:["2021-01-01","2021-01-02","2021-01-03","2021-01-04","2021-01-05","2021-01-06","2021-01-07","2021-01-08","2021-01-09","2021-01-10","2021-01-11","2021-01-12","2021-01-13","2021-01-14","2021-01-15","2021-01-16","2021-01-17","2021-01-18","2021-01-19","2021-01-20","Yellow","Green","Purple","Orange"],datasets:[{label:"# of regist",data:[5,4,3,2,2,1,3,6,2,3,1,3],backgroundColor:["green"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:3},{label:"# of finish",data:[3,1,6,7,5,4,2,4,2,3,3,3],backgroundColor:["yellow"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:3}]},options:{scales:{y:{beginAtZero:!0}}}});console.log(e)}},h=b,v=(n("b7d9"),n("2877")),m=Object(v["a"])(h,c,d,!1,null,null,null),g=m.exports,j={name:"Header",components:{chart:g}},p=j,y=(n("8baf"),Object(v["a"])(p,o,l,!1,null,null,null)),w=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{attrs:{id:"hideButtonDiv"}},[n("button",{attrs:{id:"hideButton"},on:{click:t.hideBtnHandler}},[t._v(" << ")])]),n("div",{attrs:{id:"tableNav"}},[n("ul",t._l(t.convertedRow,(function(e){return n("li",{key:e,domProps:{innerHTML:t._s(e)}})})),0)]),n("div",{attrs:{id:"finTableNav"}},[n("ul",t._l(t.convertedFinishedRow,(function(e){return n("li",{key:e},[t._v(" "+t._s(e))])})),0)])])},C=[],R=(n("d81d"),n("ac1f"),n("466d"),n("38cf"),n("99af"),{name:"Nav",data:function(){return{}},props:["tableRow","navRow"],computed:{convertedRow:function(){var t=this.tableRow.map((function(t){var e,n=String(t.no),a=n.match(/./g).length-1,s="&nbsp;";s=s.repeat(a);var r=null!==(e=t.title)&&void 0!==e?e:"";return r.length>10&&(r=/.{10}/.exec(r)+"..."),"".concat(s).concat(n,".").concat(r)}));return t},convertedFinishedRow:function(){var t=this.navRow.map((function(t){var e,n=String(t.finNo),a=n.match(/./g).length-1,s=" ";s=s.repeat(a);var r=null!==(e=t.title)&&void 0!==e?e:"";return r.length>10&&(r=/.{10}/.exec(r)+"..."),"".concat(s).concat(n,".").concat(r)}));return t}},methods:{hideBtnHandler:function(){this.$emit("hide")}}}),_=R,S=(n("5b49"),Object(v["a"])(_,x,C,!1,null,null,null)),k=S.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.customOn?n("div",{attrs:{id:"customBoard"}},[n("div",{staticClass:"closeBtnWrapper"},[n("button",{staticClass:"closeBtn",on:{click:t.deleteBox}},[t._v("x")])]),n("div",{on:{click:t.colorPicker}},[n("input",{attrs:{type:"radio",id:"red",value:"rgba(255,0,0,1)"}}),n("label",{staticStyle:{color:"red"},attrs:{for:"red"}},[t._v("■")]),n("input",{attrs:{type:"radio",id:"green",value:"rgba(0,255,0,1)"}}),n("label",{staticStyle:{color:"green"},attrs:{for:"green"}},[t._v("■")]),n("input",{attrs:{type:"radio",id:"yellow",value:"rgba(255,255,0,1)"}}),n("label",{staticStyle:{color:"yellow"},attrs:{for:"yellow"}},[t._v("■")])])]):t._e(),n("form",{attrs:{oninput:"result.value=parseInt(a.value)"}},[n("input",{attrs:{type:"range",id:"a",name:"a",min:"0",max:"5",step:"1"},on:{input:t.controlLevelView}}),n("output",{attrs:{name:"result",for:"a"}})]),n("div",{attrs:{id:"tableDiv"}},[n("table",[t._m(0),n("button",{attrs:{id:"tableRowAddBtn"},on:{click:t.addNewRow}},[t._v("+")]),n("tbody",t._l(t.tableRow,(function(e){return n("tr",{key:e.id,class:e.levelClass,style:{backgroundColor:e.color},attrs:{id:e.id}},[n("td",{staticClass:"level"},[t._v(t._s(e.targetLevel))]),n("td",{staticClass:"motherNumber"},[t._v(t._s(e.motherNumber))]),n("td",{staticClass:"numberTD"},[n("div",{staticClass:"number",style:{backgroundColor:e.color}},[t._v(t._s(e.no))]),n("div",{staticClass:"control"},[n("svg",{staticClass:"dragHandle",staticStyle:{width:"15px",height:"20px",display:"block",fill:"inherit","flex-shrink":"0","backface-visibility":"hidden"},attrs:{viewBox:"-1 -2 12 12"},on:{click:t.tableRowStyler}},[n("path",{attrs:{d:"M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"}})]),n("svg",{staticClass:"plus",staticStyle:{width:"16px",height:"85%",display:"block",fill:"inherit","flex-shrink":"0","backface-visibility":"hidden"},attrs:{viewBox:"-2 -2 20 20"}},[n("path",{attrs:{d:"M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"}})])])]),n("td",{staticClass:"resgistDate"},[t._v(t._s(e.convertedRegistDate))]),n("td",{staticClass:"content"},[n("div",{staticClass:"contentWrapper"},[n("div",{staticClass:"title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"row.title"}],domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}})]),n("div",{staticClass:"contents"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contents,expression:"row.contents"}],domProps:{value:e.contents},on:{input:function(n){n.target.composing||t.$set(e,"contents",n.target.value)}}})])]),n("div",{staticClass:"extension hoverHidden"},[n("button",{staticClass:"extensionBtn",on:{click:t.controlExtensionBtn}},[t._v("∨")])])]),n("td",{staticClass:"finDate"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.convertedFinDate,expression:"row.convertedFinDate"}],domProps:{value:e.convertedFinDate},on:{input:function(n){n.target.composing||t.$set(e,"convertedFinDate",n.target.value)}}})]),n("td",{staticClass:"manage"},[n("div",{staticClass:"hoverHidden"},[n("button",{staticClass:"saveBtn",on:{click:t.finishBtnHandler}},[t._v("완료")]),n("button",{staticClass:"remove",staticStyle:{color:"red"},on:{click:t.removeRow}},[t._v("삭제")]),n("button",{staticClass:"makeSub",on:{click:t.makeSub}},[t._v("추가")])])])])})),0)])]),n("div",{attrs:{id:"finTableDiv"}},[t.finTableRow[0]?n("table",{attrs:{id:"finTable"}},[t._m(1),n("tbody",t._l(t.finTableRow,(function(e){return n("tr",{key:e.id,attrs:{id:e.id}},[n("td",{staticClass:"level"},[t._v(t._s(e.level))]),n("td",{staticClass:"motherNumber"},[t._v(t._s(e.motherNumber))]),n("td",{staticClass:"numberTD"},[n("div",{staticClass:"number"},[t._v(t._s(e.finNo))])]),n("td",{staticClass:"resgistDate"},[t._v(t._s(e.convertedRegistDate))]),n("td",{staticClass:"content"},[n("div",{staticClass:"contentWrapper"},[n("div",{staticClass:"title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"row.title"}],domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}})]),n("div",{staticClass:"contents"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.contents,expression:"row.contents"}],attrs:{type:"textarea"},domProps:{value:e.contents},on:{input:function(n){n.target.composing||t.$set(e,"contents",n.target.value)}}})])]),n("div",{staticClass:"extension hoverHidden"},[n("button",{staticClass:"extensionBtn",on:{click:t.controlExtensionBtn}},[t._v("∨")])])]),n("td",{staticClass:"finDate"},[t._v(t._s(e.convertedFinDate))]),n("td",{staticClass:"manage"},[n("div",{staticClass:"hoverHidden"},[n("button",{staticClass:"saveBtn",on:{click:t.recoverBtnHandler}},[t._v("복귀")]),n("button",{staticClass:"remove",staticStyle:{color:"red"},on:{click:t.removeRow}},[t._v("삭제")])])])])})),0)]):t._e()])])},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("순번")]),n("th",[t._v("날짜")]),n("th",[t._v("내용")]),n("th",[t._v("완료")]),n("th",[t._v("관리")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("순번")]),n("th",[t._v("날짜")]),n("th",[t._v("내용")]),n("th",[t._v("완료")]),n("th",[t._v("관리")])])])}],T=n("b85c"),I=(n("e9c4"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("5319"),n("25f0"),n("a9e3"),n("fb6a"),n("0481"),n("4069"),n("4d90"),n("a434"),n("4e82"),n("1276"),n("b680"),{name:"Main",data:function(){return{tableRow:[],finTableRow:[],hideItems:[],customOn:!1,tempData:[]}},mounted:function(){this.reCallData()},updated:function(){localStorage.setItem("toc",JSON.stringify(this.tableRow)),localStorage.setItem("tocFin",JSON.stringify(this.finTableRow)),this.$emit("connect",this.tableRow),this.$emit("finish",this.finTableRow)},computed:{totalPeriod:function(){var t,e=[].concat(Object(i["a"])(this.tableRow),Object(i["a"])(this.finTableRow)),n=[],a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;n.push(s.registDate,s.finDate)}}catch(c){a.e(c)}finally{a.f()}var r=n.map((function(t){return 36e5*parseInt(t/36e5)})),o=r.reduce((function(t,e){return t.includes(e)?t:[].concat(Object(i["a"])(t),[e])}),[]).filter(Boolean);if(o[0]||o.push(36e5*parseInt(Date.now(new Date)/36e5)),o.length<10)for(var l=0;l<10-o.length;l++)o.push(o[l]+36e5);return o}},methods:{issueID:function(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return"a"+n.toString(16)}))},controlLevelView:function(t){for(var e=Number(t.currentTarget.value),n=this.tableRow.length-1;n>-1;n--)console.log("inputValue는".concat(e,"level은").concat(this.tableRow[n].level)),console.log("길이는".concat(this.tableRow.length)),this.tableRow[n].level>e?(this.tableRow[n].status=!1,console.log("".concat(this.tableRow[n].no,"는 숨겨졌다"))):(this.tableRow[n].status=!0,console.log("".concat(this.tableRow[n].no,"를 다시보여주자")))},deleteBox:function(){this.customOn=!this.customOn},findMyChildren:function(t,e){var n,a=[],s=this.findItsObj(t,e),r=Object(T["a"])(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.motherNumber==s.no&&(a.push(i),a.push(this.findMyChildren(i,e)))}}catch(l){r.e(l)}finally{r.f()}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e>0?t.reduce((function(t,n){return t.concat(Array.isArray(n)?o(n,e-1):n)}),[]):t.slice()}return o(a,1/0)},colorPicker:function(t){var e=t.target.value,n=document.querySelector("#"+this.tempData),a=Object(i["a"])(n.querySelectorAll("td"));a.push(n.querySelector(".number"));var s,r=Object(T["a"])(a);try{for(r.s();!(s=r.n()).done;){var o=s.value;o.style.backgroundColor=e}}catch(h){r.e(h)}finally{r.f()}var l=this.tableRow[this.findItsObjIndex(n,this.tableRow)];l.color=e;var c,d=this.findMyChildren(n,this.tableRow),u=Object(T["a"])(d);try{for(u.s();!(c=u.n()).done;){var f=c.value,b=this.tableRow[this.findItsObjIndex(f,this.tableRow)];b.color=this.findMyColor(f)}}catch(h){u.e(h)}finally{u.f()}},tableRowStyler:function(t){this.customOn=!this.customOn;var e=t.currentTarget.closest("tr");this.tempData=e.id},itemClass:function(t,e,n,a,s,r,i,o,l){var c={level:t,motherNumber:e,no:n,levelClass:o,order:a,finDate:s,title:r,contents:i,color:l,registDate:this.getTime(),convertedRegistDate:this.convertTime(this.getTime()),status:!0,id:this.issueID()};return c},findItsObj:function(t,e){if(Array.isArray(t)){var n,a=[],s=Object(T["a"])(t);try{for(s.s();!(n=s.n()).done;){var r=n.value,i=e[this.findItsObjIndex(r,e)];a.push(i)}}catch(l){s.e(l)}finally{s.f()}return a}var o=e[this.findItsObjIndex(t,e)];return o},findChildrenRow:function(t,e){for(var n=Object(i["a"])(document.querySelector(e).querySelector("tbody").querySelectorAll("tr")),a=[],s=t.querySelector(".number").textContent,r=0;r<n.length;r++)n[r].querySelector(".motherNumber").textContent==s&&(a.push(n[r]),a.push(this.findChildrenRow(n[r],e)));return a.flat(1)},finishBtnHandler:function(t){var e=t.currentTarget.closest("tr"),n=this.findItsObj(e,this.tableRow),a=this.findChildrenRow(e,"#tableDiv"),s=[e].concat(Object(i["a"])(a)),r=this.findItsObj(s,this.tableRow);if(1!==n.level)if(e.classList.contains("finish")){var o,l=Object(T["a"])(s);try{for(l.s();!(o=l.n()).done;){var c=o.value;c.classList.remove("finish"),c.querySelector(".number").classList.remove("finish")}}catch(x){l.e(x)}finally{l.f()}var d,u=Object(T["a"])(r);try{for(u.s();!(d=u.n()).done;){var f=d.value;f.status="",f.finDate="",f.convertedFinDate=""}}catch(x){u.e(x)}finally{u.f()}}else{var b,h=Object(T["a"])(s);try{for(h.s();!(b=h.n()).done;){var v=b.value;v.classList.add("finish"),v.querySelector(".number").classList.add("finish")}}catch(x){h.e(x)}finally{h.f()}var m,g=Object(T["a"])(r);try{for(g.s();!(m=g.n()).done;){var j=m.value;j.status="finish",j.finDate=this.getTime(),j.convertedFinDate=this.convertTime(this.getTime())}}catch(x){g.e(x)}finally{g.f()}}else if(1==n.level){for(var p=0;p<r.length;p++){var y=this.finTableRow.length+1,w=String((new Date).getFullYear()).slice(2,4)+String((new Date).getMonth()+1).padStart(2,"0")+"-"+String(y).padStart(2,"0");r[p].finNo=w,r[p].finDate=this.getTime(),r[p].convertedFinDate=this.convertTime(this.getTime()),r[p].status="finish",this.finTableRow.push(r[p]),this.tableRow.splice(this.findItsObjIndex(s[p],this.tableRow),1)}this.$emit("finish",this.finTableRow)}},findItsObjIndex:function(t,e){if(Array.isArray(t)){for(var n=[],a=0;a<t.length;a++)for(var s=0;s<e.length;a++)if(t[a].id==e[a].id){n.push(a);break}return n}for(var r=0;r<e.length;r++)if(e[r].id==t.id)return r},sortItemGroups:function(){this.tableRow.sort((function(t,e){return t["order"]-e["order"]}));for(var t=0;t<this.tableRow.length;t++)this.tableRow[t].order=t+1},findMyOrder:function(t){for(var e,n=Number(t.order)+.1,a=0;a<this.tableRow.length;a++)this.tableRow[a].motherNumber==t.no&&(e=this.tableRow[a],n=Number(e.order)+.1);return e&&(n=this.findMyOrder(e)),n},findMyColor:function(t){var e,n,a=Object(T["a"])(this.tableRow);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(s.no==t.motherNumber){e=s;break}}}catch(u){a.e(u)}finally{a.f()}var r=e.color.replace("rgba(","").replace(")","").split(","),i=Number(r[0]),o=Number(r[1]),l=Number(r[2]),c=Number(r[3]),d="rgba(".concat(i+55,",").concat(o+55,",").concat(l+55,",").concat((c-.25).toFixed(1),")");return d},makeSub:function(t){for(var e=t.currentTarget.closest("tr"),n=this.findItsObjIndex(e,this.tableRow),a=this.tableRow[n],s=1,r=0;r<this.tableRow.length;r++)this.tableRow[r].motherNumber==a.no&&s++;var i=a.no+"."+s,o=this.findMyOrder(a),l={1:"firstLevel",2:"secondLevel",3:"thirdLevel",4:"fourthLevel"},c=a.level+1,d=l[c+""],u=this.itemClass(c,a.no,i,o,"","","",d),f=this.findMyColor(u);u.color=f,this.tableRow.splice(o-.1,0,u),this.sortItemGroups()},addNewRow:function(){var t=0;if(0!==this.tableRow.length)for(var e=0;e<this.tableRow.length;e++)1==this.tableRow[e].level&&t++;var n=t+1,a=this.itemClass(1,"",n,this.tableRow.length,"","","","firstLevel","rgba(0,255,0,1)");this.tableRow.push(a)},reCallData:function(){var t=JSON.parse(localStorage.getItem("toc")),e=JSON.parse(localStorage.getItem("tocFin"));if(t)for(var n=0;n<t.length;n++)this.tableRow.push(t[n]);if(e)for(var a=0;a<e.length;a++)this.finTableRow.push(e[a])},controlExtensionBtn:function(t){var e=t.currentTarget,n=e.closest("tr"),a=n.querySelector(".contents"),s=Number(window.getComputedStyle(n).height.replace("px",""));"∨"==e.textContent?(e.textContent="∧",a.style.height="28px",console.log(s),n.querySelector(".number").style.height=s+15+"px",a.querySelector("textarea").style.display="block"):(e.textContent="∨",a.style.height="0",n.querySelector(".number").style.height="2vh",a.querySelector("textarea").style.display="none")},removeRow:function(t){var e,n=t.currentTarget.closest("tr");e="tableDiv"==n.closest("div").id?this.tableRow:this.finTableRow;var a=this.findMyChildren(n,e),s=[n].concat(Object(i["a"])(a)),r=n.closest("div");if("tableDiv"==r.id)for(var o=s.length-1;o>-1;o--){var l=this.findItsObjIndex(s[o],this.tableRow);this.tableRow.splice(l,1)}else for(var c=s.length-1;c>-1;c--){var d=this.findItsObjIndex(s[c],this.finTableRow);this.finTableRow.splice(d,1)}},recoverBtnHandler:function(t){var e=t.currentTarget.closest("tr"),n=this.findItsObjIndex(e,this.finTableRow),a=this.finTableRow[n];a.finDate="",a.convertedFinDate="",this.tableRow.push(a),this.finTableRow.splice(n,1)},clockSet:function(){var t=new Date,e=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"/").concat(n," ").concat(a,":").concat(s)},getTime:function(){var t=Date.now(new Date);return t},convertTime:function(t){var e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return"".concat(n,"/").concat(a," ").concat(s,":").concat(r)}}}),N=I,B=(n("c266"),Object(v["a"])(N,O,D,!1,null,null,null)),M=B.exports,z={name:"App",data:function(){return{tableItems:[],finTableItems:[],navBtn:!1}},components:{Header:w,Nav:k,Main:M},methods:{connectTable2Nav:function(t){this.tableItems=Object(i["a"])(t)},connectFinishedItem:function(t){this.finTableItems=Object(i["a"])(t)},toggleNav:function(){var t=this,e=document.querySelector("Nav"),n=document.querySelector("#left"),a=document.querySelector("#right");0==this.navBtn?(e.style.width=0,e.style.margin=0,e.style.padding=0,n.style.width="3vw",a.style.width="95vw",setTimeout((function(){t.navBtn=!0}),400)):(e.style.width="12vw",e.style.margin="0.5vw",e.style.padding="0 0 0 0.5vw",n.style.width="13vw",a.style.width="86vw",this.navBtn=!1)}}},q=z,F=(n("034f"),Object(v["a"])(q,s,r,!1,null,null,null)),H=F.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(H)}}).$mount("#app")},"58de":function(t,e,n){},"5b49":function(t,e,n){"use strict";n("58de")},6860:function(t,e,n){},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";n("6860")},b7d9:function(t,e,n){"use strict";n("173f")},c266:function(t,e,n){"use strict";n("3a7d")}});
//# sourceMappingURL=app.ae70937c.js.map