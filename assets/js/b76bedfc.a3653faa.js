"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[95616],{96036:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"developer/api-docs/modules/service_workflowitem_document_download","title":"service/workflowitem\\\\_document\\\\_download","description":"Api Code Documentation / Exports / service/workflowitem\\\\document\\\\download","source":"@site/docs/developer/api-docs/modules/service_workflowitem_document_download.md","sourceDirName":"developer/api-docs/modules","slug":"/developer/api-docs/modules/service_workflowitem_document_download","permalink":"/docs/developer/api-docs/modules/service_workflowitem_document_download","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_workflowitem_document_download.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"service/workflowitem\\\\_document\\\\_delete","permalink":"/docs/developer/api-docs/modules/service_workflowitem_document_delete"},"next":{"title":"service/workflowitem\\\\_get","permalink":"/docs/developer/api-docs/modules/service_workflowitem_get"}}');var o=d(74848),r=d(28453);const s={},c="service/workflowitem_document_download",l={},i=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getDocument",id:"getdocument",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"serviceworkflowitem_document_download",children:"service/workflowitem_document_download"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,o.jsx)(t.a,{href:"../modules",children:"Exports"})," / service/workflowitem_document_download"]}),"\n",(0,o.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,o.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_workflowitem_document_download#getdocument",children:"getDocument"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,o.jsx)(t.h3,{id:"getdocument",children:"getDocument"}),"\n",(0,o.jsxs)(t.p,{children:["\u25b8 ",(0,o.jsx)(t.strong,{children:"getDocument"}),"(",(0,o.jsx)(t.code,{children:"conn"}),", ",(0,o.jsx)(t.code,{children:"storageServiceClient"}),", ",(0,o.jsx)(t.code,{children:"ctx"}),", ",(0,o.jsx)(t.code,{children:"serviceUser"}),", ",(0,o.jsx)(t.code,{children:"projectId"}),", ",(0,o.jsx)(t.code,{children:"subprojectId"}),", ",(0,o.jsx)(t.code,{children:"workflowitemId"}),", ",(0,o.jsx)(t.code,{children:"documentId"}),"): ",(0,o.jsx)(t.code,{children:"Promise"}),"<",(0,o.jsx)(t.a,{href:"result#type",children:(0,o.jsx)(t.code,{children:"Type"})}),"<",(0,o.jsx)(t.a,{href:"../interfaces/service_domain_document_document.UploadedDocument",children:(0,o.jsx)(t.code,{children:"UploadedDocument"})}),">>"]}),"\n",(0,o.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"conn"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,o.jsx)(t.code,{children:"ConnToken"})})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"storageServiceClient"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"../interfaces/service_Client_storage_service_h.StorageServiceClientI",children:(0,o.jsx)(t.code,{children:"StorageServiceClientI"})})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"ctx"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,o.jsx)(t.code,{children:"Ctx"})})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"serviceUser"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,o.jsx)(t.code,{children:"ServiceUser"})})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"projectId"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"string"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"subprojectId"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"string"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"workflowitemId"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"string"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"documentId"})}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:(0,o.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Promise"}),"<",(0,o.jsx)(t.a,{href:"result#type",children:(0,o.jsx)(t.code,{children:"Type"})}),"<",(0,o.jsx)(t.a,{href:"../interfaces/service_domain_document_document.UploadedDocument",children:(0,o.jsx)(t.code,{children:"UploadedDocument"})}),">>"]}),"\n",(0,o.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/workflowitem_document_download.ts#L26",children:"src/service/workflowitem_document_download.ts:26"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>c});var n=d(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);