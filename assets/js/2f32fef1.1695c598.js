"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[18121],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,d(d({ref:t},l),{},{components:r})):n.createElement(f,d({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,d=new Array(o);d[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,d[1]=p;for(var c=2;c<o;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},40622:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),d=["components"],p={},i="service/project_projected_budget_update",c={unversionedId:"developer/api-docs/modules/service_project_projected_budget_update",id:"developer/api-docs/modules/service_project_projected_budget_update",isDocsHomePage:!1,title:"service/project\\_projected\\_budget\\_update",description:"Api Code Documentation / Exports / service/project\\projected\\budget\\_update",source:"@site/docs/developer/api-docs/modules/service_project_projected_budget_update.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_project_projected_budget_update",permalink:"/docs/developer/api-docs/modules/service_project_projected_budget_update",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_project_projected_budget_update.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687426708,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/project\\_projected\\_budget\\_delete",permalink:"/docs/developer/api-docs/modules/service_project_projected_budget_delete"},next:{title:"service/project\\_update",permalink:"/docs/developer/api-docs/modules/service_project_update"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"updateProjectedBudget",id:"updateprojectedbudget",children:[]}]}],u={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serviceproject_projected_budget_update"},"service/project","_","projected","_","budget","_","update"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/project","_","projected","_","budget","_","update"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_project_projected_budget_update#updateprojectedbudget"},"updateProjectedBudget"))),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"updateprojectedbudget"},"updateProjectedBudget"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"updateProjectedBudget"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceUser"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"organization"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"currencyCode"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_projected_budget.ProjectedBudget"},(0,o.kt)("inlineCode",{parentName:"a"},"ProjectedBudget")),"[]",">",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"conn")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,o.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"projectId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"organization")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"currencyCode")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"result#type"},(0,o.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,o.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_projected_budget.ProjectedBudget"},(0,o.kt)("inlineCode",{parentName:"a"},"ProjectedBudget")),"[]",">",">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/project_projected_budget_update.ts#L15"},"src/service/project_projected_budget_update.ts:15")))}s.isMDXComponent=!0}}]);