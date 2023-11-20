"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[49713],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),f=o,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57796:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const i={},a="PreconditionError",p={unversionedId:"developer/api-docs/interfaces/error.PreconditionError",id:"developer/api-docs/interfaces/error.PreconditionError",title:"PreconditionError",description:"Api Code Documentation / Exports / error / PreconditionError",source:"@site/docs/developer/api-docs/interfaces/error.PreconditionError.md",sourceDirName:"developer/api-docs/interfaces",slug:"/developer/api-docs/interfaces/error.PreconditionError",permalink:"/docs/developer/api-docs/interfaces/error.PreconditionError",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/interfaces/error.PreconditionError.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700469268,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ParseError",permalink:"/docs/developer/api-docs/interfaces/error.ParseError"},next:{title:"ProjectIdAlreadyExistsError",permalink:"/docs/developer/api-docs/interfaces/error.ProjectIdAlreadyExistsError"}},c={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"kind",id:"kind",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:d},s="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preconditionerror"},"PreconditionError"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules/error"},"error")," / PreconditionError"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/error"},"error"),".PreconditionError"),(0,o.kt)("p",null,"Error type thrown when a precondition is not met"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/error.PreconditionError#kind"},"kind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/error.PreconditionError#message"},"message"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"kind"},"kind"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"kind"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"PreconditionError"')),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/error.ts#L73"},"src/error.ts:73")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/error.ts#L74"},"src/error.ts:74")))}u.isMDXComponent=!0}}]);