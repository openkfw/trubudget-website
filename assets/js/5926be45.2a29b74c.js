"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[58095],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54162:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s="service/domain/ResourceMap",p={unversionedId:"developer/api-docs/modules/service_domain_ResourceMap",id:"developer/api-docs/modules/service_domain_ResourceMap",isDocsHomePage:!1,title:"service/domain/ResourceMap",description:"Api Code Documentation / Exports / service/domain/ResourceMap",source:"@site/docs/developer/api-docs/modules/service_domain_ResourceMap.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_ResourceMap",permalink:"/docs/developer/api-docs/modules/service_domain_ResourceMap",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_ResourceMap.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/document\\_validation",permalink:"/docs/developer/api-docs/modules/service_document_validation"},next:{title:"service/domain/additional\\_data",permalink:"/docs/developer/api-docs/modules/service_domain_additional_data"}},u=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type Aliases",id:"type-aliases",children:[]}]},{value:"Type Aliases",id:"type-aliases-1",children:[{value:"Resource",id:"resource",children:[]},{value:"ResourceMap",id:"resourcemap",children:[]}]}],d={toc:u},l="wrapper";function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(l,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servicedomainresourcemap"},"service/domain/ResourceMap"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/ResourceMap"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../interfaces/service_domain_ResourceMap.Document"},"Document"))),(0,a.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_ResourceMap#resource"},"Resource")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_ResourceMap#resourcemap"},"ResourceMap"))),(0,a.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,a.kt)("h3",{id:"resource"},"Resource"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"Resource"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"project"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"subproject"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"workflowitem"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/ResourceMap.ts#L1"},"src/service/domain/ResourceMap.ts:1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resourcemap"},"ResourceMap"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"ResourceMap"),": { ","[key in Resource]","?: Object }"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/ResourceMap.ts#L8"},"src/service/domain/ResourceMap.ts:8")))}m.isMDXComponent=!0}}]);