"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[49099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var c=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=c.createContext({}),l=function(e){var t=c.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return c.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},h=c.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?c.createElement(f,i(i({ref:t},d),{},{components:r})):c.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return c.createElement.apply(null,i)}return c.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var c=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1},i="Record architecture decisions",a={unversionedId:"developer/architecture/record-architecture-decisions",id:"developer/architecture/record-architecture-decisions",title:"Record architecture decisions",description:"Date: 03/04/2018",source:"@site/docs/developer/architecture/0001-record-architecture-decisions.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/record-architecture-decisions",permalink:"/docs/developer/architecture/record-architecture-decisions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0001-record-architecture-decisions.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture Decision Records",permalink:"/docs/developer/architecture/intro"},next:{title:"Access Control Model",permalink:"/docs/developer/architecture/access-control-model"}},s={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,c.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"record-architecture-decisions"},"Record architecture decisions"),(0,n.kt)("p",null,"Date: 03/04/2018"),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Accepted"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"We need to record the architectural decisions made on this project."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"We will use Architecture Decision Records, as described by Michael Nygard in this article: ",(0,n.kt)("a",{parentName:"p",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions")),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("p",null,"See Michael Nygard's article, linked above."))}p.isMDXComponent=!0}}]);