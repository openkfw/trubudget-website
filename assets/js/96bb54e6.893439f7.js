"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[89095],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,k=m["".concat(d,".").concat(f)]||m[f]||c[f]||i;return r?o.createElement(k,a(a({ref:t},p),{},{components:r})):o.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7968:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],l={},d="service/domain/workflow/workflowitem_ordering",s={unversionedId:"developer/api-docs/modules/service_domain_workflow_workflowitem_ordering",id:"developer/api-docs/modules/service_domain_workflow_workflowitem_ordering",isDocsHomePage:!1,title:"service/domain/workflow/workflowitem\\_ordering",description:"Api Code Documentation / Exports / service/domain/workflow/workflowitem\\_ordering",source:"@site/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/workflow/workflowitem\\_list.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_list_spec"},next:{title:"service/domain/workflow/workflowitem\\_ordering.spec",permalink:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering_spec"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Type Aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type Aliases",id:"type-aliases-1",children:[{value:"WorkflowitemOrdering",id:"workflowitemordering",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"sortWorkflowitems",id:"sortworkflowitems",children:[]}]}],m={toc:p},c="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)(c,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"servicedomainworkflowworkflowitem_ordering"},"service/domain/workflow/workflowitem","_","ordering"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/workflow/workflowitem","_","ordering"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering#workflowitemordering"},"WorkflowitemOrdering"))),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem_ordering#sortworkflowitems"},"sortWorkflowitems"))),(0,i.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,i.kt)("h3",{id:"workflowitemordering"},"WorkflowitemOrdering"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"WorkflowitemOrdering"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem#id"},(0,i.kt)("inlineCode",{parentName:"a"},"Id")),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/workflowitem_ordering.ts#L4"},"src/service/domain/workflow/workflowitem_ordering.ts:4")),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"sortworkflowitems"},"sortWorkflowitems"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sortWorkflowitems"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"workflowitems"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ordering"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_domain_workflow_workflowitem#scrubbedworkflowitem"},(0,i.kt)("inlineCode",{parentName:"a"},"ScrubbedWorkflowitem")))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"workflowitems")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ordering")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/workflowitem_ordering.ts#L11"},"src/service/domain/workflow/workflowitem_ordering.ts:11")))}f.isMDXComponent=!0}}]);