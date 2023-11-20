"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[97616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},l="authz/intents",o={unversionedId:"developer/api-docs/modules/authz_intents",id:"developer/api-docs/modules/authz_intents",title:"authz/intents",description:"Api Code Documentation / Exports / authz/intents",source:"@site/docs/developer/api-docs/modules/authz_intents.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/authz_intents",permalink:"/docs/developer/api-docs/modules/authz_intents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/authz_intents.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"authz/history",permalink:"/docs/developer/api-docs/modules/authz_history"},next:{title:"authz/token",permalink:"/docs/developer/api-docs/modules/authz_token"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Variables",id:"variables",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"ExposableIntent",id:"exposableintent",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"default",id:"default",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Variables",id:"variables-1",level:2},{value:"allIntents",id:"allintents",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"globalIntents",id:"globalintents",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"groupIntents",id:"groupintents",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"projectIntents",id:"projectintents",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"subprojectIntents",id:"subprojectintents",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"userAssignableIntents",id:"userassignableintents",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"userDefaultIntents",id:"userdefaultintents",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"userIntents",id:"userintents",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"workflowitemIntents",id:"workflowitemintents",level:3},{value:"Defined in",id:"defined-in-10",level:4}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authzintents"},"authz/intents"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / authz/intents"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#exposableintent"},"ExposableIntent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#default"},"default"))),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#allintents"},"allIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#globalintents"},"globalIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#groupintents"},"groupIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#projectintents"},"projectIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#subprojectintents"},"subprojectIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#userassignableintents"},"userAssignableIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#userdefaultintents"},"userDefaultIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#userintents"},"userIntents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/authz_intents#workflowitemintents"},"workflowitemIntents"))),(0,i.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,i.kt)("h3",{id:"exposableintent"},"ExposableIntent"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ExposableIntent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Exclude"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.close"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.close"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.close"'),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L1"},"src/authz/intents.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.listPermissions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.grantPermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.grantAllPermissions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.revokePermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.createProject"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.createUser"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.enableUser"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.disableUser"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.listAssignments"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"global.createGroup"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"user.authenticate"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"user.changePassword"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"user.list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"user.intent.listPermissions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"user.intent.grantPermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"user.intent.revokePermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"group.addUser"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"group.removeUser"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.intent.listPermissions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.intent.grantPermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.intent.revokePermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.viewDetails"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.viewHistory"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.assign"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.update"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.close"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.createSubproject"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.budget.updateProjected"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"project.budget.deleteProjected"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.intent.listPermissions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.intent.grantPermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.intent.revokePermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.viewDetails"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.viewHistory"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.assign"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.update"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.close"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.createWorkflowitem"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.reorderWorkflowitems"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.budget.updateProjected"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"subproject.budget.deleteProjected"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.intent.listPermissions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.intent.grantPermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.intent.revokePermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.viewHistory"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.assign"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.update"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"workflowitem.close"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"notification.create"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.registerNode"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.listActive"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.voteForPermission"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.approveNewOrganization"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.approveNewNodeForExistingOrganization"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"network.declineNode"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"provisioning.start"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"provisioning.end"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"provisioning.get"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L6"},"src/authz/intents.ts:6")),(0,i.kt)("h2",{id:"variables-1"},"Variables"),(0,i.kt)("h3",{id:"allintents"},"allIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"allIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L169"},"src/authz/intents.ts:169")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"globalintents"},"globalIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"globalIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L70"},"src/authz/intents.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"groupintents"},"groupIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"groupIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L125"},"src/authz/intents.ts:125")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"projectintents"},"projectIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"projectIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L127"},"src/authz/intents.ts:127")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subprojectintents"},"subprojectIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"subprojectIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L142"},"src/authz/intents.ts:142")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userassignableintents"},"userAssignableIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"userAssignableIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L93"},"src/authz/intents.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userdefaultintents"},"userDefaultIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"userDefaultIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L114"},"src/authz/intents.ts:114")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userintents"},"userIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"userIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L116"},"src/authz/intents.ts:116")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"workflowitemintents"},"workflowitemIntents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"workflowitemIntents"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/authz_intents#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default")),"[]"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/intents.ts#L158"},"src/authz/intents.ts:158")))}m.isMDXComponent=!0}}]);