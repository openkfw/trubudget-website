"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[92097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(d,".").concat(u)]||c[u]||h[u]||l;return n?i.createElement(f,a(a({ref:t},o),{},{components:n})):i.createElement(f,a({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const l={},a="PeerInfo",s={unversionedId:"developer/api-docs/interfaces/service_Client_h.PeerInfo",id:"developer/api-docs/interfaces/service_Client_h.PeerInfo",title:"PeerInfo",description:"Api Code Documentation / Exports / service/Client.h / PeerInfo",source:"@site/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo.md",sourceDirName:"developer/api-docs/interfaces",slug:"/developer/api-docs/interfaces/service_Client_h.PeerInfo",permalink:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultichainClient",permalink:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient"},next:{title:"Resource",permalink:"/docs/developer/api-docs/interfaces/service_Client_h.Resource"}},d={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"addr",id:"addr",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"addrlocal",id:"addrlocal",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"banscore",id:"banscore",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"bytesrecv",id:"bytesrecv",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"bytessent",id:"bytessent",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"conntime",id:"conntime",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"handshake",id:"handshake",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"handshakelocal",id:"handshakelocal",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"inbound",id:"inbound",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"inflight",id:"inflight",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"lastrecv",id:"lastrecv",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"lastsend",id:"lastsend",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"pingtime",id:"pingtime",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"services",id:"services",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"startingheight",id:"startingheight",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"subver",id:"subver",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"synced_blocks",id:"synced_blocks",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"synced_headers",id:"synced_headers",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"version",id:"version",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"whitelisted",id:"whitelisted",level:3},{value:"Defined in",id:"defined-in-20",level:4}],o={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"peerinfo"},"PeerInfo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules/service_Client_h"},"service/Client.h")," / PeerInfo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/service_Client_h"},"service/Client.h"),".PeerInfo"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#addr"},"addr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#addrlocal"},"addrlocal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#banscore"},"banscore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#bytesrecv"},"bytesrecv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#bytessent"},"bytessent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#conntime"},"conntime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#handshake"},"handshake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#handshakelocal"},"handshakelocal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#id"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#inbound"},"inbound")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#inflight"},"inflight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#lastrecv"},"lastrecv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#lastsend"},"lastsend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#pingtime"},"pingtime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#services"},"services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#startingheight"},"startingheight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#subver"},"subver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#synced_blocks"},"synced","_","blocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#synced_headers"},"synced","_","headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#version"},"version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo#whitelisted"},"whitelisted"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"addr"},"addr"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"addr"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L42"},"src/service/Client.h.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addrlocal"},"addrlocal"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"addrlocal"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L43"},"src/service/Client.h.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"banscore"},"banscore"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"banscore"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L57"},"src/service/Client.h.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bytesrecv"},"bytesrecv"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"bytesrecv"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L48"},"src/service/Client.h.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bytessent"},"bytessent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"bytessent"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L47"},"src/service/Client.h.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"conntime"},"conntime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"conntime"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L49"},"src/service/Client.h.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handshake"},"handshake"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handshake"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L54"},"src/service/Client.h.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handshakelocal"},"handshakelocal"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handshakelocal"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L53"},"src/service/Client.h.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L41"},"src/service/Client.h.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inbound"},"inbound"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"inbound"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L55"},"src/service/Client.h.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inflight"},"inflight"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"inflight"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L60"},"src/service/Client.h.ts:60")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lastrecv"},"lastrecv"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lastrecv"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L46"},"src/service/Client.h.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lastsend"},"lastsend"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lastsend"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L45"},"src/service/Client.h.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pingtime"},"pingtime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"pingtime"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L50"},"src/service/Client.h.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"services"},"services"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"services"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L44"},"src/service/Client.h.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"startingheight"},"startingheight"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"startingheight"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L56"},"src/service/Client.h.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subver"},"subver"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"subver"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L52"},"src/service/Client.h.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"synced_blocks"},"synced","_","blocks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"synced","_","blocks"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L59"},"src/service/Client.h.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"synced_headers"},"synced","_","headers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"synced","_","headers"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L58"},"src/service/Client.h.ts:58")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"version"},"version"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"version"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L51"},"src/service/Client.h.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"whitelisted"},"whitelisted"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"whitelisted"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/Client.h.ts#L61"},"src/service/Client.h.ts:61")))}h.isMDXComponent=!0}}]);