(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],d=0,v=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"218d":function(t,e,a){t.exports=a.p+"img/flask.d036469e.png"},"281a":function(t,e,a){"use strict";var n=a("dd41"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("PortFolio")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("v-parallax",{attrs:{src:a("ae49"),height:"600"}},[n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("h1",{staticClass:"mb-4 display-1 text-center"},[t._v("Hi!")]),n("div",{staticClass:"subheading mb-2 text-center"},[t._v(" 항상 새로움을 찾는 개발자지망생 양동권입니다. ")]),n("div",{staticClass:"text-center"},[t._v(" 해보지 못한 기술들을 새롭게 배우며 다양한 결과물을 만들어보고 있습니다. "),n("br"),t._v(" 정체되지 않고 꾸준히 발전하는 개발자가 되기위해 공부하는 중입니다. ")])])],1)],1),n("section",{staticClass:"section_margin"},[n("v-flex",{staticClass:"my-4"},[n("h1",{staticClass:"display-1 text-center my-5"},[t._v(" ABOUT ")]),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("hr",{staticClass:"title_line"})])],1),n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"",content_width:"",margin_auto:""}},[t._l(t.about,(function(e,a){return n("v-flex",{key:a.id,attrs:{sm8:"",xs12:""}},[n("h3",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.birth))]),n("h3",{staticClass:"font_gray"},[t._v("education")]),t._l(e.education,(function(e,a){return n("div",{key:a.id},[t._v(" "+t._s(e.date)+" "+t._s(e.desc)+" ")])})),n("br"),n("h3",{staticClass:"font_gray"},[t._v("awards")]),t._l(e.award,(function(e,a){return n("div",{key:a.id},[t._v(" "+t._s(e.date)+" "+t._s(e.desc)+" ")])}))],2)})),n("v-layout",{attrs:{sm4:"",xs12:"","my-12":"",row:"",wrap:"","justify-center":""}},t._l(t.skill,(function(e,a){return n("v-flex",{key:a.id,attrs:{xs4:""}},t._l(e.language,(function(a,s){return n("v-layout",{key:s.id,attrs:{"align-center":"","justify-center":"",column:""}},[n("div",{staticClass:"my-2"},[t._v(t._s(a.name))]),n("v-progress-circular",{attrs:{value:a.value,color:e.skill_color,size:50,rotate:-90,width:10}},[t._v(" "+t._s(a.value)+" ")])],1)})),1)})),1)],2)],1),n("section",{staticClass:"background_color section_margin"},[n("div",{attrs:{id:"repository"}},[n("div",{staticClass:"my-4"},[n("h1",{staticClass:"display-1 text-center my-5"},[t._v(" PROJECTS ")]),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("hr",{staticClass:"title_line"})])],1),t._l(t.project,(function(e,a){return n("v-layout",{key:a.id,attrs:{row:"",wrap:"",project_padding:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","my-2":""}},[n("v-layout",{attrs:{column:"","justify-center":"","fill-height":""}},[n("div",[n("h1",{staticClass:"display-2 font-weight-bold font_title"},[t._v(" "+t._s(e.title)+" ")]),n("div",{staticClass:"title mb-2 font_gray font-weight-thin"},[t._v(" "+t._s(e.subtitle)+" ")]),n("hr",{staticClass:"project_line mb-2",style:e.styleObject}),t._v(" "+t._s(e.date)+" "),n("br"),t._v(" "+t._s(e.role)+" "),n("div",{domProps:{innerHTML:t._s(e.descript)}}),n("div",{staticClass:"my-4"},t._l(e.skills,(function(t,e){return n("v-img",{key:e.id,staticClass:"skill_logo",attrs:{src:t.src,"max-width":"50"}})})),1),n("v-btn",{style:e.buttonStyle,attrs:{text:"",small:"",href:e.pdf}},[t._v(" pdf ")]),null!=e.link?n("v-btn",{staticClass:"project_page_button mx-2",attrs:{text:"",small:"",href:e.link}},[t._v(" page ")]):t._e()],1)])],1),n("v-flex",{attrs:{xs12:"",sm6:"","my-2":""}},[n("v-layout",{attrs:{"align-center":"","justify-end":"","fill-height":"","data-aos":"fade-right","data-aos-anchor-placement":"top-center"}},[n("v-img",{attrs:{src:e.image}})],1)],1)],1)}))],2)]),n("section",{staticClass:"section_margin"},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm3:""}},[n("v-card",{staticClass:"transparent",attrs:{flat:""}},[n("div",[n("h1",{staticClass:"display-1 text-center my-5"},[t._v(" CONTECT ")]),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("hr",{staticClass:"title_line"})])],1),n("br"),n("v-list",{staticClass:"transparent"},[n("v-list-item",[n("v-list-item-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v(" mdi-github-circle ")])],1),n("v-list-item-content",[n("v-list-item-title",[n("a",{attrs:{href:"https://www.github.com/ydk7819"}},[t._v("www.github.com/ydk7819")])])],1)],1),n("v-list-item",[n("v-list-item-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v(" mdi-map-marker ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Gwangju, KR")])],1)],1),n("v-list-item",[n("v-list-item-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v(" mdi-email ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("ydk9557819@naver.com")])],1)],1)],1)],1)],1)],1)],1)])},l=[],o={data:function(){return{about:[{name:"양동권",birth:"93.02.08",education:[{date:"2012.03 ~ 2018.02",desc:"전남대학교 소프트웨어공학"},{date:"2017.06 ~ 2017.09",desc:"빅데이터 청년인재 - 빅데이터 엔지니어 양성"},{date:"2018.12 ~ 2019.12",desc:"삼성 청년 SW 아카데미"}],award:[{date:"2019.05.17",desc:"SSAFY 1학기 성적우수상 광주3반 2등"},{date:"2019.08.16",desc:"SSAFY 웹/모바일 프로젝트 광주 2등"},{date:"2019.10.11",desc:"SSAFY 인공지능 특화 프로젝트 광주 1등"}]}],skill:[{language:[{name:"java",value:75},{name:"python",value:50},{name:"mysql",value:60}],skill_color:"#09A5FE"},{language:[{name:"HTML",value:70},{name:"JQuery",value:40},{name:"Vue",value:60}],skill_color:"#FACC2E"},{language:[{name:"SpringBoot",value:40},{name:"flask",value:40}],skill_color:"#05D1B9"}],project:[{title:"사피일보",subtitle:"기사 댓글 감정 분석 웹페이지",date:"19.08.19 ~ 19.10.11",role:"front-end / 학습모델구현",descript:"크롤링한 기사와 댓글을 분석하여 긍/부정을 알려줍니다. <br /> 댓글을 형태소로 나누어 logistic regression으로 분석합니다.",skills:[{name:"python",src:a("5c93")},{name:"mysql",src:a("808d")},{name:"vue",src:a("c6eb")},{name:"tensorflow",src:a("d217")},{name:"flask",src:a("218d")}],image:a("6985"),pdf:"https://drive.google.com/file/d/1LcYJDvQiPs1ERVHdRKDoe3nmhBOPVD-D/view?usp=sharing",link:"http://13.125.116.42/",styleObject:{width:"100px",border:"1px solid #09A5FE"},buttonStyle:{background:"#09A5FE"}},{title:"10TRILLION",subtitle:"팀 포트폴리오 웹/앱",date:"19.07.01 ~ 19.08.16",role:"front-end / 관리자 / DB설계",descript:"팀 소개, 게시글 등록 및 관리가 가능한 반응형 웹입니다. <br /> 로그인, gitlab, 날씨 등의 API를 활용하였습니다.",skills:[{name:"python",src:a("5c93")},{name:"mysql",src:a("808d")},{name:"vue",src:a("c6eb")},{name:"flask",src:a("218d")}],image:a("b7e6"),pdf:"https://drive.google.com/file/d/1LcYJDvQiPs1ERVHdRKDoe3nmhBOPVD-D/view?usp=sharing",styleObject:{width:"100px",border:"1px solid #05D1B9"},buttonStyle:{background:"#05D1B9"}}]}}},c=o,u=(a("281a"),a("2877")),d=a("6544"),v=a.n(d),p=a("8336"),f=a("b0af"),m=a("0e8f"),g=a("132d"),y=a("adda"),_=a("a722"),b=a("8860"),h=a("da13"),x=a("1800"),w=a("5d23"),k=a("8b9c"),C=a("490a"),j=Object(u["a"])(c,i,l,!1,null,null,null),O=j.exports;v()(j,{VBtn:p["a"],VCard:f["a"],VFlex:m["a"],VIcon:g["a"],VImg:y["a"],VLayout:_["a"],VList:b["a"],VListItem:h["a"],VListItemAction:x["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VParallax:k["a"],VProgressCircular:C["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{absolute:"","elevate-on-scroll":"","hide-on-scroll":""}},[a("v-toolbar-title",[t._v(" dongkwon portfolio ")]),a("v-spacer"),a("v-toolbar-item",[a("v-btn",{attrs:{text:"",href:"https://ydk7819.github.io"}},[t._v("blog")])],1)],1)},P=[],S=a("40dc"),A=a("2fa4"),T=a("2a7f"),D={},L=Object(u["a"])(D,V,P,!1,null,null,null),B=L.exports;v()(L,{VAppBar:S["a"],VBtn:p["a"],VSpacer:A["a"],VToolbarTitle:T["a"]});var E=a("f5af"),F=a.n(E),I={name:"App",components:{PortFolio:O,Header:B},data:function(){return{}},created:function(){F.a.init()}},H=I,R=a("7496"),J=Object(u["a"])(H,s,r,!1,null,null,null),M=J.exports;v()(J,{VApp:R["a"]});var Y=a("f309");n["a"].use(Y["a"]);var q=new Y["a"]({icons:{iconfont:"mdi"}});a("e829");n["a"].config.productionTip=!1,new n["a"]({vuetify:q,render:function(t){return t(M)}}).$mount("#app")},"5c93":function(t,e,a){t.exports=a.p+"img/python.9ae7d0c2.png"},6985:function(t,e,a){t.exports=a.p+"img/ssafyilbo.463e7583.png"},"808d":function(t,e,a){t.exports=a.p+"img/mysql.07c28adf.png"},ae49:function(t,e,a){t.exports=a.p+"img/main.1ee00f52.jpg"},b7e6:function(t,e,a){t.exports=a.p+"img/webmoblie.61fdc00c.png"},c6eb:function(t,e,a){t.exports=a.p+"img/vue.c5439280.png"},d217:function(t,e,a){t.exports=a.p+"img/tensorflow.0dfae328.png"},dd41:function(t,e,a){}});
//# sourceMappingURL=app.816213bf.js.map