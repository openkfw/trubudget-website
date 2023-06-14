"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[79429],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?i.createElement(m,a(a({ref:t},l),{},{components:r})):i.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88978:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var i=r(87462),n=r(63366),o=(r(67294),r(3905)),a=["components"],d={},p="Modification",c={unversionedId:"developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification",id:"developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification",isDocsHomePage:!1,title:"Modification",description:"Api Code Documentation / Exports / service/domain/workflow/project\\updated / Modification",source:"@site/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification.md",sourceDirName:"developer/api-docs/interfaces",slug:"/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification",permalink:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1686746303,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event:",permalink:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Event"},next:{title:"ProjectedBudget",permalink:"/docs/developer/api-docs/interfaces/service_domain_workflow_projected_budget.ProjectedBudget"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"additionalData",id:"additionaldata",children:[]},{value:"description",id:"description",children:[]},{value:"displayName",id:"displayname",children:[]},{value:"tags",id:"tags",children:[]},{value:"thumbnail",id:"thumbnail",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modification"},"Modification"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules/service_domain_workflow_project_updated"},"service/domain/workflow/project","_","updated")," / Modification"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/service_domain_workflow_project_updated"},"service/domain/workflow/project_updated"),".Modification"),(0,o.kt)("p",null,"We only support updating very few fields with this command. For example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"projectedBudgets")," is not included here, because the semantics of updating it this\nway are not quite clear, plus we want such a change to be explicit by causing a\ndedicated event."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification#additionaldata"},"additionalData")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification#description"},"description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification#displayname"},"displayName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification#tags"},"tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_domain_workflow_project_updated.Modification#thumbnail"},"thumbnail"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"additionaldata"},"additionalData"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"additionalData"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_updated.ts#L21"},"src/service/domain/workflow/project_updated.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"description"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_updated.ts#L19"},"src/service/domain/workflow/project_updated.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"displayname"},"displayName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"displayName"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_updated.ts#L18"},"src/service/domain/workflow/project_updated.ts:18")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tags"},"tags"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"tags"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_updated.ts#L22"},"src/service/domain/workflow/project_updated.ts:22")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"thumbnail"},"thumbnail"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"thumbnail"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_updated.ts#L20"},"src/service/domain/workflow/project_updated.ts:20")))}u.isMDXComponent=!0}}]);