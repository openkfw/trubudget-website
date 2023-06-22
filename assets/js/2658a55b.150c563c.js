"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[68821],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(l,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60926:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],d={},l="service/domain/document/document_validate",m={unversionedId:"developer/api-docs/modules/service_domain_document_document_validate",id:"developer/api-docs/modules/service_domain_document_document_validate",isDocsHomePage:!1,title:"service/domain/document/document\\_validate",description:"Api Code Documentation / Exports / service/domain/document/document\\_validate",source:"@site/docs/developer/api-docs/modules/service_domain_document_document_validate.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_document_document_validate",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_validate",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_document_document_validate.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/document/document\\_uploaded",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_uploaded"},next:{title:"service/domain/document/document\\_validate.spec",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_validate_spec"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"documentValidate",id:"documentvalidate",children:[]}]}],c={toc:p},u="wrapper";function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"servicedomaindocumentdocument_validate"},"service/domain/document/document","_","validate"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/document/document","_","validate"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_document_document_validate#documentvalidate"},"documentValidate"))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"documentvalidate"},"documentValidate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"documentValidate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isDocumentValid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"documentId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issuer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"projectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subprojectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"workflowitemId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"newEvents"),": ",(0,i.kt)("a",{parentName:"p",href:"service_domain_business_event#businessevent"},(0,i.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"workflowitem"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem"},(0,i.kt)("inlineCode",{parentName:"a"},"Workflowitem")),"  }",">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isDocumentValid")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"documentId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,i.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issuer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subprojectId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"workflowitemId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"repository")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<{ ",(0,i.kt)("inlineCode",{parentName:"p"},"newEvents"),": ",(0,i.kt)("a",{parentName:"p",href:"service_domain_business_event#businessevent"},(0,i.kt)("inlineCode",{parentName:"a"},"BusinessEvent")),"[] ; ",(0,i.kt)("inlineCode",{parentName:"p"},"workflowitem"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem"},(0,i.kt)("inlineCode",{parentName:"a"},"Workflowitem")),"  }",">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/document/document_validate.ts#L33"},"src/service/domain/document/document_validate.ts:33")))}s.isMDXComponent=!0}}]);