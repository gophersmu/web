(function(t){function e(e){for(var a,o,i=e[0],l=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0da0":function(t,e,n){},"35c0":function(t,e,n){t.exports=n.p+"img/gophersmu.b434a67d.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen font-sans",attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("034f"),n("2877")),i={},l=Object(o["a"])(i,s,r,!1,null,null,null),u=l.exports,c=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-home"},[n("HomeHero"),n("HomeIntro"),n("HomeGallery")],1)},p=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-hero h-screen flex"},[a("div",{staticClass:"backgrounds"}),a("div",{staticClass:"backgrounds backgrounds-alternate"}),a("div",{staticClass:"info-section flex flex-col justify-center px-10 text-white"},[a("div",{staticClass:"background-holder"}),a("div",{staticClass:"relative text-6xl m-auto my-0 md:ml-auto md:mr-0 md:text-right font-bold"},[a("img",{staticClass:"relative w-32 md:w-64 ml-auto",attrs:{src:n("35c0"),alt:""}})]),a("p",{staticClass:"relative text-xl md:text-2xl text-center md:text-right py-5"},[t._v(" Join us our community "),a("br"),a("strong",[t._v("on telegram!")])]),a("a",{staticClass:"relative bg-red-500 px-4 py-2 text-white w-32 text-center rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer uppercase",attrs:{href:"https://t.me/gophersmu"}},[t._v("more info")])])])}],f=(n("eeab"),{}),v=Object(o["a"])(f,h,m,!1,null,null,null),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.upcoming?n("div",{staticClass:"py-10 px-10 text-xl text-gray-800 text-left"},[n("div",[n("h1",{staticClass:"text-4xl font-black font-sans py-4 text-center",attrs:{id:"upcoming-event"}},[t._v("Upcoming event")]),n("event",t._b({},"event",t.events.upcoming,!1))],1)]):t._e(),t._m(0),t.events.past.length?n("div",{staticClass:"py-10 px-10 text-xl text-gray-800 text-left"},[n("div",[n("h1",{staticClass:"text-4xl font-black font-sans py-4 text-center"},[t._v("Past events")]),t._l(t.events.past,(function(e,a){return n("div",{key:a,class:{"bottom-line":a<t.events.past.length-1}},[n("event",t._b({},"event",e,!1))],1)}))],2)]):t._e()])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blue-gradient text-white py-10 text-xl text-justify flex flex-col content-center"},[a("div",{staticClass:"home-intro"},[a("h1",{staticClass:"text-4xl font-black font-sans py-4 text-center",attrs:{id:"about-us"}},[t._v("About Us")]),a("p",[t._v("Go is an open source programming language supported by Google.")]),a("p",[t._v("The language makes it easy to build simple, reliable, and efficient software.")]),a("p",[t._v("We are gophers (Go developers) from the paradise island of Mauritius. A tiny island in the Indian Ocean with loads of sunshine and equally bright minds.")]),a("p",[t._v("Our fellowship is a new one, initiated with developers who fell in love with Go and have used it professionally. We look forward to sharing our experience with more people; hoping we can make friends to learn and laugh along the way.")])]),a("div",{staticClass:"w-3.5 text-center mt-4"},[a("a",{staticClass:"border-b-4 border-red-500 bg-blue-300 hover:bg-blue-400 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center",attrs:{href:"https://t.me/gophersmu",target:"_blank",rel:"external noopener"}},[a("img",{staticClass:"mx-2",staticStyle:{width:"32px",height:"auto"},attrs:{src:n("7dd3"),alt:"telegram gophersmu group"}}),a("span",[t._v("Join Us!")])])])])}],x="past",y={url:"https://www.meetup.com/GDG-Mauritius/events/266919961/",date:"2019-12-21",title:"Go: All you ever wanted to know but didn't dare to ask",status:x,description:"\nOur agenda is as follows:\n\n- Keynote (Intro to Go - short presentation)\n- First steps with Go\n- Building web APIs\n- Format: Talk and Code trial; bring your own laptop.\n    \n**Special Guest:** [Natalie Pistunovich](https://twitter.com/nataliepis), GDE for Go\n    ",host:"GDG Mauritius",hostURL:"https://www.meetup.com/GDG-Mauritius",venue:"Flying Dodo, Bagatelle",venueCode:"QFGW+84"},_={url:null,date:"2020-03-28",status:"cancelled",title:"Hands on Golang",description:"\nMini workshop with hands-on Go development.\n\nWe will tackle the following exercises together:\n\n- Hello World with Golang\n- Introduction to Golang routines\n- Writing a proxy using Golang\n\n**Attendees are requested to bring their own laptops.**\n\n\n---\n\n**Note**\n\nThank you very much for your interest. \n\nHowever due to unfortunate circumstances, it would be ill-advised to maintain gatherings, in light of the COVID-19 pandemic.\n\nTherefore the event has been cancelled; to be rescheduled in the future, when times are better.\n\nOur friends are also advised to take all necessary precautions to stay safe during these trying times.\n\n    ",host:"MCB Digital Factory",hostURL:"https://digitalfactory.mu/",venue:"MCB Digital Factory",venueCode:"RGQ2+9C Port Louis"},C={url:"https://www.meetup.com/frontendcodersmauritius/events/270040148",date:"2020-04-21",title:"Front-end Coders x Gophermu April Online Meetup",status:x,description:"\nWe are teaming up with front-end coders for this online meetup!\n\nWill be presenting:\n- [Sandeep Ramgolam](https://twitter.com/__Sun__)\n- [Cedric Poilly](https://twitter.com/cedpoilly)\n- Jules Michael\n- [Muhammad Yusuf Abdool Satar](https://fluxy.net)\n\nGolang topics to be covered:\n- Go Routines\n- Getting started with telegram bots\n\n**Format:** Short and Sweet\n    ",host:"Front End Coders",hostURL:"https://www.meetup.com/frontendcodersmauritius",venue:"Online",venueCode:null},G={url:"https://www.meetup.com/gophersmu/events/275630430/",date:"2021-02-06",title:"Golang Meetup",status:x,description:"\nBite-sized Golang talks to ease in the new year.\n\nEveryone is welcome!\n\n__Agenda:__\n1. WTF is Go?\n2. Golang GraphQL challenge to a frontend\n3. Server Sent Events, the forgotten protocol\n4. Table Driven Testing\n\n<small>\nPresenters:\n\n[Jules Michael](http://github.com/JulesMike)\n\n[Sandeep Ramgolam](https://twitter.com/__Sun__)\n\n[Muhammad Yusuf Abdool Satar](https://fluxy.net)\n\n[Jeshta Bhoyedhur](https://twitter.com/jjeshta)\n\n</small>\n    ",host:"Bocasay Mauritius",hostURL:"https://www.bocasay.com/",venue:"Bocasay, Ebène",venueCode:"QF3R+J3 Quatre Bornes"},k={url:"https://frontend.mu/meetup/37",date:"2022-07-23",title:"Front-end Coders July Meetup",status:x,description:"\nGophers.mu is happy to collaborate with Front-End Coders Mauritius in their monthly meetup.\n\nWe will be presenting « How to structure a Go project » by [Muhammad Yusuf Abdool Satar](https://fluxy.net)\n\nBe sure to book your seat on the frontend website.\n    ",host:"XEFI",hostURL:"https://www.bocasay.com/",venue:"Ebene Cyber Village",venueCode:"QF5Q+XCM Quatre Bornes"},S={url:"https://conference.mscc.mu/agenda/303280",date:"2022-10-22",title:"Go: from scratch to prod",status:x,description:"Gophers.mu participating in Developers Conference 2022 with a Crash course to get acquainted with Golang development.\n\tTogether we will build, test and deploy a web application using Golang.",host:"MSCC",hostURL:"https://www.mscc.mu/",venue:"Caudan Arts Center, Port Louis",venueCode:"RFQX+68 Port Louis"},M={upcoming:null,past:[S,k,G,C,_,y]},O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:flex"},[n("div",{staticClass:"lg:w-1/2 flex-col flex justify-center text-center px-10"},[n("p",{staticClass:"text-3xl "},[n("span",{staticClass:"uppercase text-xl"},[t._v(" "+t._s(t.hostingText))]),n("br"),t.url?n("a",{staticClass:"font-bold",attrs:{target:"_blank",href:t.url}},[t._v('"'+t._s(t.title)+'"')]):n("span",{staticClass:"font-bold"},[t._v('"'+t._s(t.title)+'"')]),n("br"),n("strong",{staticClass:"text-xl uppercase"},[t._v(t._s(t.formattedDate))]),n("br")]),t.host?n("p",{staticClass:"text-gray-600 text-sm"},[t._v(" ❤️ Thanks to "),n("a",{attrs:{href:t.hostURL,target:"_blank",rel:"external nofollow noopener"}},[t._v(t._s(t.host))]),t._v(" for hosting this event. ")]):t._e(),n("p")]),n("div",{staticClass:"lg:w-1/2 py-10"},[n("span",{staticClass:"event-description",domProps:{innerHTML:t._s(t.marked(t.description))}}),n("br"),"active"===t.status&&t.url?n("a",{staticClass:"relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer",attrs:{target:"_blank",href:t.url}},[t._v(" Get your seat ")]):t._e(),"cancelled"===t.status?n("span",{staticClass:"relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer",attrs:{target:"_blank",href:t.url}},[t._v(" Cancelled ")]):t._e()])])},j=[],P=(n("0d03"),n("2cf3")),E=n("b166"),F=n("e0c1"),T=n.n(F),R="active",D="past",H="soon",L="cancelled",W={props:{status:String,url:String,date:String,title:String,subtitle:String,description:String,host:String,hostURL:String},data:function(){var t,e;if(this.date){var n=Object(P["a"])(this.date,"yyyy-MM-dd",new Date);t=Object(E["a"])(n,"PPPP")}else t="";switch(this.status){case R:e="We are having an event";break;case D:e="We had an event";break;case H:e="We are working on an event",t+=" Coming Soon";break;case L:e="Our event has been cancelled",t+=" Cancelled";break}return{formattedDate:t,hostingText:e}},methods:{marked:T.a}},A=W,B=(n("8e8a"),Object(o["a"])(A,O,j,!1,null,"6ce45003",null)),U=B.exports,J={components:{event:U},data:function(){return{events:M}}},Q=J,$=(n("9343"),Object(o["a"])(Q,b,w,!1,null,null,null)),I=$.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},X=[],Y={},N=Object(o["a"])(Y,q,X,!1,null,null,null),V=N.exports,z={name:"home",components:{HomeHero:g,HomeIntro:I,HomeGallery:V}},K=z,Z=Object(o["a"])(K,d,p,!1,null,null,null),tt=Z.exports;a["a"].use(c["a"]);var et=[{path:"/",name:"home",component:tt}],nt=new c["a"]({routes:et}),at=nt,st=n("2f62");a["a"].use(st["a"]);var rt=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("ba8c");a["a"].config.productionTip=!1,new a["a"]({router:at,store:rt,render:function(t){return t(u)}}).$mount("#app")},"62a0":function(t,e,n){},"7bfc":function(t,e,n){},"7dd3":function(t,e,n){t.exports=n.p+"img/telegram.ef85f69c.svg"},"85ec":function(t,e,n){},"8e8a":function(t,e,n){"use strict";n("62a0")},9343:function(t,e,n){"use strict";n("0da0")},ba8c:function(t,e,n){},eeab:function(t,e,n){"use strict";n("7bfc")}});
//# sourceMappingURL=app.714e4bff.js.map