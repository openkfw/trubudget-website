"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1978],{63932:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=t(85893),i=t(11151);const s={},l="service/domain/document/document_validated",c={id:"developer/api-docs/modules/service_domain_document_document_validated",title:"service/domain/document/document\\_validated",description:"Api Code Documentation / Exports / service/domain/document/document\\_validated",source:"@site/docs/developer/api-docs/modules/service_domain_document_document_validated.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_document_document_validated",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_validated",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_document_document_validated.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1700572368,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/document/document\\_validate.spec",permalink:"/docs/developer/api-docs/modules/service_domain_document_document_validate_spec"},next:{title:"service/domain/document/secret\\_get",permalink:"/docs/developer/api-docs/modules/service_domain_document_secret_get"}},r={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"schema",id:"schema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"createEvent",id:"createevent",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"mutate",id:"mutate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"validate",id:"validate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"servicedomaindocumentdocument_validated",children:"service/domain/document/document_validated"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,n.jsx)(d.a,{href:"../modules",children:"Exports"})," / service/domain/document/document_validated"]}),"\n",(0,n.jsx)(d.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"../interfaces/service_domain_document_document_validated.Event",children:"Event"})}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_validated#schema",children:"schema"})}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_validated#createevent",children:"createEvent"})}),"\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_validated#mutate",children:"mutate"})}),"\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_document_document_validated#validate",children:"validate"})}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"variables-1",children:"Variables"}),"\n",(0,n.jsx)(d.h3,{id:"schema",children:"schema"}),"\n",(0,n.jsxs)(d.p,{children:["\u2022 ",(0,n.jsx)(d.code,{children:"Const"})," ",(0,n.jsx)(d.strong,{children:"schema"}),": ",(0,n.jsx)(d.code,{children:"ObjectSchema"}),"<",(0,n.jsx)(d.code,{children:"any"}),">"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_validated.ts#L26",children:"src/service/domain/document/document_validated.ts:26"})}),"\n",(0,n.jsx)(d.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(d.h3,{id:"createevent",children:"createEvent"}),"\n",(0,n.jsxs)(d.p,{children:["\u25b8 ",(0,n.jsx)(d.strong,{children:"createEvent"}),"(",(0,n.jsx)(d.code,{children:"isDocumentValid"}),", ",(0,n.jsx)(d.code,{children:"documentId"}),", ",(0,n.jsx)(d.code,{children:"source"}),", ",(0,n.jsx)(d.code,{children:"publisher"}),", ",(0,n.jsx)(d.code,{children:"projectId"}),", ",(0,n.jsx)(d.code,{children:"subprojectId"}),", ",(0,n.jsx)(d.code,{children:"workflowitemId"}),", ",(0,n.jsx)(d.code,{children:"time?"}),", ",(0,n.jsx)(d.code,{children:"metadata?"}),"): ",(0,n.jsx)(d.a,{href:"result#type",children:(0,n.jsx)(d.code,{children:"Type"})}),"<",(0,n.jsx)(d.a,{href:"../interfaces/service_domain_document_document_validated.Event",children:(0,n.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,n.jsx)(d.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"isDocumentValid"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"boolean"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"documentId"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"source"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"publisher"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"projectId"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"subprojectId"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"workflowitemId"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"time"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"string"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"metadata?"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/service_domain_metadata#usermetadata",children:(0,n.jsx)(d.code,{children:"UserMetadata"})})})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"result#type",children:(0,n.jsx)(d.code,{children:"Type"})}),"<",(0,n.jsx)(d.a,{href:"../interfaces/service_domain_document_document_validated.Event",children:(0,n.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_validated.ts#L39",children:"src/service/domain/document/document_validated.ts:39"})}),"\n",(0,n.jsx)(d.hr,{}),"\n",(0,n.jsx)(d.h3,{id:"mutate",children:"mutate"}),"\n",(0,n.jsxs)(d.p,{children:["\u25b8 ",(0,n.jsx)(d.strong,{children:"mutate"}),"(",(0,n.jsx)(d.code,{children:"_workflowitem"}),", ",(0,n.jsx)(d.code,{children:"event"}),"): ",(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(d.code,{children:"Type"})}),"<",(0,n.jsx)(d.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(d.p,{children:"Applies the event to the given workflowitem, or returns an error."}),"\n",(0,n.jsx)(d.p,{children:"When an error is returned (or thrown), any already applied modifications are\ndiscarded."}),"\n",(0,n.jsxs)(d.p,{children:["This function is not expected to validate its changes; instead, the modified\nworkflowitem is automatically validated when obtained using\n",(0,n.jsx)(d.code,{children:"workflowitem_eventsourcing.ts"}),":",(0,n.jsx)(d.code,{children:"newWorkflowitemFromEvent"}),"."]}),"\n",(0,n.jsx)(d.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"_workflowitem"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.a,{href:"../interfaces/service_domain_workflow_workflowitem.Workflowitem",children:(0,n.jsx)(d.code,{children:"Workflowitem"})})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"event"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.a,{href:"../interfaces/service_domain_document_document_validated.Event",children:(0,n.jsx)(d.code,{children:"Event"})})})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,n.jsx)(d.code,{children:"Type"})}),"<",(0,n.jsx)(d.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_validated.ts#L84",children:"src/service/domain/document/document_validated.ts:84"})}),"\n",(0,n.jsx)(d.hr,{}),"\n",(0,n.jsx)(d.h3,{id:"validate",children:"validate"}),"\n",(0,n.jsxs)(d.p,{children:["\u25b8 ",(0,n.jsx)(d.strong,{children:"validate"}),"(",(0,n.jsx)(d.code,{children:"input"}),"): ",(0,n.jsx)(d.a,{href:"result#type",children:(0,n.jsx)(d.code,{children:"Type"})}),"<",(0,n.jsx)(d.a,{href:"../interfaces/service_domain_document_document_validated.Event",children:(0,n.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,n.jsx)(d.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(d.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"input"})}),(0,n.jsx)(d.td,{style:{textAlign:"left"},children:(0,n.jsx)(d.code,{children:"any"})})]})})]}),"\n",(0,n.jsx)(d.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"result#type",children:(0,n.jsx)(d.code,{children:"Type"})}),"<",(0,n.jsx)(d.a,{href:"../interfaces/service_domain_document_document_validated.Event",children:(0,n.jsx)(d.code,{children:"Event"})}),">"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/document_validated.ts#L69",children:"src/service/domain/document/document_validated.ts:69"})})]})}function h(e={}){const{wrapper:d}={...(0,i.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,d,t)=>{t.d(d,{Z:()=>c,a:()=>l});var n=t(67294);const i={},s=n.createContext(i);function l(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);