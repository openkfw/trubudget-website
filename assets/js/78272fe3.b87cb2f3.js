"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[30683],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72914:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],d={},l="notification_mark_read",p={unversionedId:"developer/api-docs/modules/notification_mark_read",id:"developer/api-docs/modules/notification_mark_read",isDocsHomePage:!1,title:"notification\\_mark\\_read",description:"Api Code Documentation / Exports / notification\\mark\\read",source:"@site/docs/developer/api-docs/modules/notification_mark_read.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/notification_mark_read",permalink:"/docs/developer/api-docs/modules/notification_mark_read",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/notification_mark_read.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"notification\\_list",permalink:"/docs/developer/api-docs/modules/notification_list"},next:{title:"organization/organization",permalink:"/docs/developer/api-docs/modules/organization_organization"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"addHttpHandler",id:"addhttphandler",children:[]}]}],s={toc:c},u="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notification_mark_read"},"notification","_","mark","_","read"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / notification","_","mark","_","read"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/notification_mark_read#addhttphandler"},"addHttpHandler"))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"addhttphandler"},"addHttpHandler"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addHttpHandler"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"server"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"urlPrefix"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Creates an http handler that handles incoming http requests for the ",(0,i.kt)("inlineCode",{parentName:"p"},"/notification.markRead")," route"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"server")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/types.AugmentedFastifyInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"AugmentedFastifyInstance"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"the current fastify server instance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"urlPrefix")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the prefix of the http url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"service")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Service")),(0,i.kt)("td",{parentName:"tr",align:"left"},"the service Service object used to offer an interface to the domain logic")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/notification_mark_read.ts#L111"},"src/notification_mark_read.ts:111")))}f.isMDXComponent=!0}}]);