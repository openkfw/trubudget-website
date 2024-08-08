"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[13748],{42172:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var s=n(85893),i=n(11151);const d={},t="service/domain/organization/group_query",c={id:"developer/api-docs/modules/service_domain_organization_group_query",title:"service/domain/organization/group\\_query",description:"Api Code Documentation / Exports / service/domain/organization/group\\_query",source:"@site/docs/developer/api-docs/modules/service_domain_organization_group_query.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_organization_group_query",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_query",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_organization_group_query.md",tags:[],version:"current",lastUpdatedBy:"Peter Baus",lastUpdatedAt:1723127886,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/organization/group\\_permissions\\_revoked",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_permissions_revoked"},next:{title:"service/domain/organization/group\\_query.spec",permalink:"/docs/developer/api-docs/modules/service_domain_organization_group_query_spec"}},l={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getGroup",id:"getgroup",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getGroups",id:"getgroups",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getGroupsForUser",id:"getgroupsforuser",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"groupExists",id:"groupexists",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"resolveUsers",id:"resolveusers",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"servicedomainorganizationgroup_query",children:"service/domain/organization/group_query"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../README",children:"Api Code Documentation"})," / ",(0,s.jsx)(r.a,{href:"../modules",children:"Exports"})," / service/domain/organization/group_query"]}),"\n",(0,s.jsx)(r.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,s.jsx)(r.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#getgroup",children:"getGroup"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#getgroups",children:"getGroups"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#getgroupsforuser",children:"getGroupsForUser"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#groupexists",children:"groupExists"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_domain_organization_group_query#resolveusers",children:"resolveUsers"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"functions-1",children:"Functions"}),"\n",(0,s.jsx)(r.h3,{id:"getgroup",children:"getGroup"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"getGroup"}),"(",(0,s.jsx)(r.code,{children:"conn"}),", ",(0,s.jsx)(r.code,{children:"ctx"}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),", ",(0,s.jsx)(r.code,{children:"groupId"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),">>"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"conn"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"ctx"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"serviceUser"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"groupId"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),">>"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_query.ts#L36",children:"src/service/domain/organization/group_query.ts:36"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"getgroups",children:"getGroups"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"getGroups"}),"(",(0,s.jsx)(r.code,{children:"conn"}),", ",(0,s.jsx)(r.code,{children:"ctx"}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"conn"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"ctx"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"serviceUser"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_query.ts#L15",children:"src/service/domain/organization/group_query.ts:15"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"getgroupsforuser",children:"getGroupsForUser"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"getGroupsForUser"}),"(",(0,s.jsx)(r.code,{children:"conn"}),", ",(0,s.jsx)(r.code,{children:"ctx"}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),", ",(0,s.jsx)(r.code,{children:"targetUserId"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"conn"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"ctx"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"serviceUser"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"targetUserId"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_query.ts#L58",children:"src/service/domain/organization/group_query.ts:58"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"groupexists",children:"groupExists"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"groupExists"}),"(",(0,s.jsx)(r.code,{children:"conn"}),", ",(0,s.jsx)(r.code,{children:"ctx"}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),", ",(0,s.jsx)(r.code,{children:"groupId"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.code,{children:"boolean"}),">>"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"conn"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"ctx"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"serviceUser"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"groupId"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"string"})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.code,{children:"boolean"}),">>"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_query.ts#L75",children:"src/service/domain/organization/group_query.ts:75"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"resolveusers",children:"resolveUsers"}),"\n",(0,s.jsxs)(r.p,{children:["\u25b8 ",(0,s.jsx)(r.strong,{children:"resolveUsers"}),"(",(0,s.jsx)(r.code,{children:"conn"}),", ",(0,s.jsx)(r.code,{children:"ctx"}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),", ",(0,s.jsx)(r.code,{children:"identity"}),", ",(0,s.jsx)(r.code,{children:"getGroupFn?"}),", ",(0,s.jsx)(r.code,{children:"getUserFn?"}),", ",(0,s.jsx)(r.code,{children:"groupSet?"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"service_domain_organization_user_record.md#id",children:(0,s.jsx)(r.code,{children:"Id"})}),"[]>>"]}),"\n",(0,s.jsx)(r.p,{children:"returns all users for given identity\nif identity is an user return it,\nelse if identity is group resolve identities of the group"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"Default value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"conn"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"undefined"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"ctx"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"undefined"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"serviceUser"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"undefined"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"identity"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"undefined"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"getGroupFn"})}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(r.code,{children:"conn"}),": ",(0,s.jsx)(r.a,{href:"service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})}),", ",(0,s.jsx)(r.code,{children:"ctx"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})}),", ",(0,s.jsx)(r.code,{children:"groupId"}),": ",(0,s.jsx)(r.code,{children:"string"}),") => ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_group.Group",children:(0,s.jsx)(r.code,{children:"Group"})}),">>"]}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"getGroup"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"getUserFn"})}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(r.code,{children:"conn"}),": ",(0,s.jsx)(r.a,{href:"service_conn#conntoken",children:(0,s.jsx)(r.code,{children:"ConnToken"})}),", ",(0,s.jsx)(r.code,{children:"ctx"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/lib_ctx.Ctx",children:(0,s.jsx)(r.code,{children:"Ctx"})}),", ",(0,s.jsx)(r.code,{children:"serviceUser"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_service_user.ServiceUser",children:(0,s.jsx)(r.code,{children:"ServiceUser"})}),", ",(0,s.jsx)(r.code,{children:"userId"}),": ",(0,s.jsx)(r.code,{children:"string"}),") => ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"../interfaces/service_domain_organization_user_record.UserRecord",children:(0,s.jsx)(r.code,{children:"UserRecord"})}),">>"]}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"getUser"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"groupSet"})}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,s.jsx)(r.code,{children:"Set"}),"<",(0,s.jsx)(r.code,{children:"string"}),">"]}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:(0,s.jsx)(r.code,{children:"undefined"})})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/docs/developer/api-docs/modules/result#type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.a,{href:"service_domain_organization_user_record.md#id",children:(0,s.jsx)(r.code,{children:"Id"})}),"[]>>"]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_query.ts#L95",children:"src/service/domain/organization/group_query.ts:95"})})]})}function x(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var s=n(67294);const i={},d=s.createContext(i);function t(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);