"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var c=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=c.createContext({}),d=function(e){var t=c.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return c.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},p=c.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?c.createElement(f,i(i({ref:t},l),{},{components:r})):c.createElement(f,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var d=2;d<o;d++)i[d]=r[d];return c.createElement.apply(null,i)}return c.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5976:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>a,toc:()=>s,default:()=>l});var c=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Record architecture decisions",a={unversionedId:"developer/architecture/record-architecture-decisions",id:"developer/architecture/record-architecture-decisions",isDocsHomePage:!1,title:"Record architecture decisions",description:"Date: 03/04/2018",source:"@site/docs/developer/architecture/0001-record-architecture-decisions.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/record-architecture-decisions",permalink:"/docs/developer/architecture/record-architecture-decisions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0001-record-architecture-decisions.md",version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1625740150,formattedLastUpdatedAt:"7/8/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture Decision Records",permalink:"/docs/developer/architecture/intro"},next:{title:"Access Control Model",permalink:"/docs/developer/architecture/access-control-model"}},s=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],d={toc:s};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,c.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"record-architecture-decisions"},"Record architecture decisions"),(0,n.kt)("p",null,"Date: 03/04/2018"),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Accepted"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"We need to record the architectural decisions made on this project."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"We will use Architecture Decision Records, as described by Michael Nygard in this article: ",(0,n.kt)("a",{parentName:"p",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions")),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("p",null,"See Michael Nygard's article, linked above."))}l.isMDXComponent=!0}}]);