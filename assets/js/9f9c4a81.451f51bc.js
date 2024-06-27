"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[85290],{27692:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var t=i(85893),r=i(11151);const n={},c="service/subproject_permissions_list",o={id:"developer/api-docs/modules/service_subproject_permissions_list",title:"service/subproject\\_permissions\\_list",description:"Api Code Documentation / Exports / service/subproject\\permissions\\list",source:"@site/docs/developer/api-docs/modules/service_subproject_permissions_list.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_subproject_permissions_list",permalink:"/docs/developer/api-docs/modules/service_subproject_permissions_list",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_subproject_permissions_list.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/subproject\\_permission\\_revoke",permalink:"/docs/developer/api-docs/modules/service_subproject_permission_revoke"},next:{title:"service/subproject\\_projected\\_budget\\_delete",permalink:"/docs/developer/api-docs/modules/service_subproject_projected_budget_delete"}},d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"listSubprojectPermissions",id:"listsubprojectpermissions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"servicesubproject_permissions_list",children:"service/subproject_permissions_list"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,t.jsx)(s.a,{href:"../modules",children:"Exports"})," / service/subproject_permissions_list"]}),"\n",(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,t.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_subproject_permissions_list#listsubprojectpermissions",children:"listSubprojectPermissions"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"listsubprojectpermissions",children:"listSubprojectPermissions"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"listSubprojectPermissions"}),"(",(0,t.jsx)(s.code,{children:"conn"}),", ",(0,t.jsx)(s.code,{children:"ctx"}),", ",(0,t.jsx)(s.code,{children:"serviceUser"}),", ",(0,t.jsx)(s.code,{children:"projectId"}),", ",(0,t.jsx)(s.code,{children:"subprojectId"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"service_domain_permissions.md#permissions",children:(0,t.jsx)(s.code,{children:"Permissions"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"conn"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,t.jsx)(s.code,{children:"ConnToken"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"ctx"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,t.jsx)(s.code,{children:"Ctx"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"serviceUser"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,t.jsx)(s.code,{children:"ServiceUser"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"projectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"subprojectId"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,t.jsx)(s.code,{children:"Type"})}),"<",(0,t.jsx)(s.a,{href:"service_domain_permissions.md#permissions",children:(0,t.jsx)(s.code,{children:"Permissions"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/subproject_permissions_list.ts#L13",children:"src/service/subproject_permissions_list.ts:13"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>c});var t=i(67294);const r={},n=t.createContext(r);function c(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);