"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53290],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var d=2;d<a;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54766:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),p=["components"],i={},l="http_errors",d={unversionedId:"developer/api-docs/modules/http_errors",id:"developer/api-docs/modules/http_errors",isDocsHomePage:!1,title:"http\\_errors",description:"Api Code Documentation / Exports / http\\_errors",source:"@site/docs/developer/api-docs/modules/http_errors.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/http_errors",permalink:"/docs/developer/api-docs/modules/http_errors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/http_errors.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687769460,formattedLastUpdatedAt:"6/26/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"group\\_permissions\\_list",permalink:"/docs/developer/api-docs/modules/group_permissions_list"},next:{title:"http\\_errors/bad\\_request",permalink:"/docs/developer/api-docs/modules/http_errors_bad_request"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"toHttpError",id:"tohttperror",children:[]}]}],c={toc:s},u="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http_errors"},"http","_","errors"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / http","_","errors"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/http_errors#tohttperror"},"toHttpError"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"tohttperror"},"toHttpError"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toHttpError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"Converts an error object to an appropriate http error"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"error")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"an error object containing appropriate status code and an ErrorBody"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"body")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ErrorBody"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"code")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/http_errors.ts#L21"},"src/http_errors.ts:21")))}m.isMDXComponent=!0}}]);