"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[97429],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91986:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},p="service/domain/workflow/project_close",l={unversionedId:"developer/api-docs/modules/service_domain_workflow_project_close",id:"developer/api-docs/modules/service_domain_workflow_project_close",isDocsHomePage:!1,title:"service/domain/workflow/project\\_close",description:"Api Code Documentation / Exports / service/domain/workflow/project\\_close",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_project_close.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_project_close",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_close",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_close.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687426708,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/project\\_assigned",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_assigned"},next:{title:"service/domain/workflow/project\\_close.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_close_spec"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"closeProject",id:"closeproject",children:[]}]}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servicedomainworkflowproject_close"},"service/domain/workflow/project","_","close"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/workflow/project","_","close"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_close#closeproject"},"closeProject"))),(0,a.kt)("h2",{id:"functions-1"},"Functions"),(0,a.kt)("h3",{id:"closeproject"},"closeProject"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"closeProject"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"result#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"newEvents"),": ",(0,a.kt)("a",{parentName:"p",href:"service_domain_business_event#businessevent"},(0,a.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"project"),": ",(0,a.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_project.Project"},(0,a.kt)("inlineCode",{parentName:"a"},"Project")),"  }",">",">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,a.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"issuer")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,a.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"projectId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"repository")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"result#type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"newEvents"),": ",(0,a.kt)("a",{parentName:"p",href:"service_domain_business_event#businessevent"},(0,a.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"project"),": ",(0,a.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_project.Project"},(0,a.kt)("inlineCode",{parentName:"a"},"Project")),"  }",">",">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_close.ts#L25"},"src/service/domain/workflow/project_close.ts:25")))}m.isMDXComponent=!0}}]);