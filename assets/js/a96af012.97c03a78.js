"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[16323],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(a),m=n,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30482:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],d={},p="service/domain/workflow/project_update",l={unversionedId:"developer/api-docs/modules/service_domain_workflow_project_update",id:"developer/api-docs/modules/service_domain_workflow_project_update",isDocsHomePage:!1,title:"service/domain/workflow/project\\_update",description:"Api Code Documentation / Exports / service/domain/workflow/project\\_update",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_project_update.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_project_update",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_update",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_project_update.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687769460,formattedLastUpdatedAt:"6/26/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/project\\_trace\\_event",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_trace_event"},next:{title:"service/domain/workflow/project\\_update.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_project_update_spec"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Type Aliases",id:"type-aliases",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type Aliases",id:"type-aliases-1",children:[{value:"RequestData",id:"requestdata",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"requestDataSchema",id:"requestdataschema",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"updateProject",id:"updateproject",children:[]},{value:"validate",id:"validate",children:[]}]}],c={toc:s},u="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"servicedomainworkflowproject_update"},"service/domain/workflow/project","_","update"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/workflow/project","_","update"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_update#requestdata"},"RequestData"))),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_update#requestdataschema"},"requestDataSchema"))),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_update#updateproject"},"updateProject")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_update#validate"},"validate"))),(0,o.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,o.kt)("h3",{id:"requestdata"},"RequestData"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"RequestData"),": ",(0,o.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_project_updated.Modification"},(0,o.kt)("inlineCode",{parentName:"a"},"Modification"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_update.ts#L19"},"src/service/domain/workflow/project_update.ts:19")),(0,o.kt)("h2",{id:"variables-1"},"Variables"),(0,o.kt)("h3",{id:"requestdataschema"},"requestDataSchema"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"requestDataSchema"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectSchema"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"," = ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectUpdated.modificationSchema")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_update.ts#L20"},"src/service/domain/workflow/project_update.ts:20")),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"updateproject"},"updateProject"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"updateProject"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,o.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[]",">",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,o.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"issuer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"projectId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/service_domain_workflow_project_updated.Modification"},(0,o.kt)("inlineCode",{parentName:"a"},"Modification")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"repository")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_business_event#businessevent"},(0,o.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[]",">",">"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_update.ts#L32"},"src/service/domain/workflow/project_update.ts:32")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"validate"},"validate"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"validate"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_update#requestdata"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestData")),">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"input")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_workflow_project_update#requestdata"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestData")),">"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_update.ts#L22"},"src/service/domain/workflow/project_update.ts:22")))}m.isMDXComponent=!0}}]);