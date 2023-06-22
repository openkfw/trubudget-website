"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[19425],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47399:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],d={},p="provisioning_end",l={unversionedId:"developer/api-docs/modules/provisioning_end",id:"developer/api-docs/modules/provisioning_end",isDocsHomePage:!1,title:"provisioning\\_end",description:"Api Code Documentation / Exports / provisioning\\_end",source:"@site/docs/developer/api-docs/modules/provisioning_end.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/provisioning_end",permalink:"/docs/developer/api-docs/modules/provisioning_end",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/provisioning_end.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"project\\_view\\_history",permalink:"/docs/developer/api-docs/modules/project_view_history"},next:{title:"provisioning\\_get",permalink:"/docs/developer/api-docs/modules/provisioning_get"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"addHttpHandler",id:"addhttphandler",children:[]}]}],c={toc:s},u="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"provisioning_end"},"provisioning","_","end"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / provisioning","_","end"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/provisioning_end#addhttphandler"},"addHttpHandler"))),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"addhttphandler"},"addHttpHandler"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"addHttpHandler"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"urlPrefix"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"service"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Creates an http handler that handles incoming http requests for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/provisioning.end")," route"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"server")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/types.AugmentedFastifyInstance"},(0,o.kt)("inlineCode",{parentName:"a"},"AugmentedFastifyInstance"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"the current fastify server instance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"urlPrefix")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the prefix of the http url")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"service")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Service")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the service Service object used to offer an interface to the domain logic")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/provisioning_end.ts#L98"},"src/provisioning_end.ts:98")))}m.isMDXComponent=!0}}]);