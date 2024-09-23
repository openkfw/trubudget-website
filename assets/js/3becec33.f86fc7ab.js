"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35054],{33873:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(85893),t=n(11151);const o={},a="Confirmation",r={id:"user-guide/confirmation",title:"Confirmation",description:"If an intent is requested a confirmation should be required for every action in Trubudget avoiding mistakes made by acting too quickly. Since version 1.5.0 some intents require a confirmation before they are executed.",source:"@site/docs/user-guide/confirmation.md",sourceDirName:"user-guide",slug:"/user-guide/confirmation",permalink:"/docs/user-guide/confirmation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/confirmation.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1727099391,formattedLastUpdatedAt:"Sep 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/docs/user-guide/backup"},next:{title:"Excel Export",permalink:"/docs/user-guide/excel-export"}},d={},l=[{value:"Supported intents",id:"supported-intents",level:3},{value:"Automatically grant view permissions",id:"automatically-grant-view-permissions",level:3},{value:"Confirmation Dialog",id:"confirmation-dialog",level:3},{value:"Dialog without actions",id:"dialog-without-actions",level:4},{value:"Dialog with actions list",id:"dialog-with-actions-list",level:4},{value:"Dialog without view permissions",id:"dialog-without-view-permissions",level:4},{value:"Dialog without grant permissions",id:"dialog-without-grant-permissions",level:4}];function c(i){const e={h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"confirmation",children:"Confirmation"}),"\n",(0,s.jsx)(e.p,{children:"If an intent is requested a confirmation should be required for every action in Trubudget avoiding mistakes made by acting too quickly. Since version 1.5.0 some intents require a confirmation before they are executed."}),"\n",(0,s.jsx)(e.h3,{id:"supported-intents",children:"Supported intents"}),"\n",(0,s.jsx)(e.p,{children:"Following intents needs confirmation before they can be executed:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"project.assign"}),"\n",(0,s.jsx)(e.li,{children:"project.intent.grant"}),"\n",(0,s.jsx)(e.li,{children:"project.intent.revoke"}),"\n",(0,s.jsx)(e.li,{children:"subproject.assign"}),"\n",(0,s.jsx)(e.li,{children:"subproject.intent.grant"}),"\n",(0,s.jsx)(e.li,{children:"subproject.intent.revoke"}),"\n",(0,s.jsx)(e.li,{children:"workflowitem.assign"}),"\n",(0,s.jsx)(e.li,{children:"workflowitem.intent.revoke"}),"\n",(0,s.jsx)(e.li,{children:"workflowitem.intent.grant"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"automatically-grant-view-permissions",children:"Automatically grant view permissions"}),"\n",(0,s.jsx)(e.p,{children:"Trubudget has a complex permission system which often leads to misunderstandings when things are disabled because of missing permissions. The confirmation dialog shall help avoiding misunderstandings by granting required permissions automatically. If a confirmation is required, view permission checks are made to find out if the user involved needs additional permissions to view the item. In case of assigning a user it only make sense to assign a user if he/she can see the item he/she is assigned to.\r\nNote that revoking permissions never grant/revoke additional permissions."}),"\n",(0,s.jsx)(e.h3,{id:"confirmation-dialog",children:"Confirmation Dialog"}),"\n",(0,s.jsx)(e.p,{children:"A confirmation dialog can look differently depending on the permissions of users included in the process. These section describes all possible confirmation dialogs."}),"\n",(0,s.jsx)(e.h4,{id:"dialog-without-actions",children:"Dialog without actions"}),"\n",(0,s.jsx)(e.p,{children:"If the user has all required permissions and no additional actions have to be executed following dialog appears."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"confirmation dialog without actions",src:n(49983).Z+"",width:"1835",height:"941"})}),"\n",(0,s.jsx)(e.h4,{id:"dialog-with-actions-list",children:"Dialog with actions list"}),"\n",(0,s.jsx)(e.p,{children:"If the user has all required permissions and additional actions have to be executed following dialog appears."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"confirmation dialog with actions",src:n(31202).Z+"",width:"1837",height:"865"})}),"\n",(0,s.jsx)(e.h4,{id:"dialog-without-view-permissions",children:"Dialog without view permissions"}),"\n",(0,s.jsx)(e.p,{children:"If the user misses view permissions on any resource involved following dialog appears."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"confirmation without view permissions",src:n(65029).Z+"",width:"770",height:"146"})}),"\n",(0,s.jsx)(e.h4,{id:"dialog-without-grant-permissions",children:"Dialog without grant permissions"}),"\n",(0,s.jsx)(e.p,{children:"If the user misses grant permissions on any resource involved in all viewed additional actions following dialog appears."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"confirmation without grant permissions",src:n(28230).Z+"",width:"770",height:"320"})})]})}function u(i={}){const{wrapper:e}={...(0,t.a)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(c,{...i})}):c(i)}},31202:(i,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/additional_actions_confirmation-3c5b521c2d6ab965580ca52cb14db6b7.png"},49983:(i,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/assign_confirmation-afa8c8640b7cf7c85d619a0ff0bddf19.png"},28230:(i,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/assign_confirmation_grant_permission_required-b5f74af0c5db4d94b43382265a485d60.jpg"},65029:(i,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/assign_confirmation_list_permission_required-359da20e6a92c46e02638e3b9f600b21.jpg"},11151:(i,e,n)=>{n.d(e,{Z:()=>r,a:()=>a});var s=n(67294);const t={},o=s.createContext(t);function a(i){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:a(i.components),s.createElement(o.Provider,{value:e},i.children)}}}]);