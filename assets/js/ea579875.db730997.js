"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[70191],{7831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(85893),r=n(11151);const o={},s="First checklist for IT infrastructure",a={id:"operation-administration/first-steps-checklist",title:"First checklist for IT infrastructure",description:"To engage in the discussion with a typical IT team for the installation of TruBudget, the following questions are relevant:",source:"@site/docs/operation-administration/first-steps-checklist.md",sourceDirName:"operation-administration",slug:"/operation-administration/first-steps-checklist",permalink:"/docs/operation-administration/first-steps-checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/first-steps-checklist.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Securing communication between nodes",permalink:"/docs/operation-administration/encryption"},next:{title:"Logging and Monitoring in TruBudget",permalink:"/docs/operation-administration/logging-monitoring"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"first-checklist-for-it-infrastructure",children:"First checklist for IT infrastructure"}),"\n",(0,i.jsx)(t.p,{children:"To engage in the discussion with a typical IT team for the installation of TruBudget, the following questions are relevant:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Which infrastructure is preferred in the existing IT landscape? Is it an installation on bare metal servers, on virtual machines or is there a container runtime (e.g. via docker) available?"}),"\n",(0,i.jsx)(t.li,{children:"Are there any specific networking requirements to host an application that is available to the users and connects through the internet (e.g. DMZ)"}),"\n",(0,i.jsx)(t.li,{children:"Would TruBudget be run in a cloud environment and if so which one (e.g. Amazon Web Services, Microsoft Azure or Google cloud platform)"}),"\n",(0,i.jsxs)(t.li,{children:["How are SSL certificate provisioned to ensure an ",(0,i.jsx)(t.code,{children:"https"})," connection"]}),"\n",(0,i.jsx)(t.li,{children:"What are existing firewalls to connect TruBudget to other nodes and what is the effort to update them?"}),"\n",(0,i.jsx)(t.li,{children:"TruBudget provides pre-cooked operations scripts to start the environment, would these be used or are there existing standards to run software?"}),"\n",(0,i.jsxs)(t.li,{children:["Which of the services would be used in addition to the core TruBudget service for the user interface, the API and the blockchain/data? In particular there are optional services like:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Excel export service to download data in Excel format"}),"\n",(0,i.jsx)(t.li,{children:"eMail notification service to send out email notification via SMTP"}),"\n",(0,i.jsx)(t.li,{children:"User directory integration service to connect existing user directories"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Is an integration of TruBudget with existing systems planned via API?"}),"\n",(0,i.jsxs)(t.li,{children:["How many environments are the standard for new software, e.g. ",(0,i.jsx)(t.code,{children:"test"})," and ",(0,i.jsx)(t.code,{children:"production"})," environments are separated?"]}),"\n",(0,i.jsx)(t.li,{children:"How are updates to TruBudget managed, e.g. what are the release cycles and the effort to update?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Using this list, a first high level view on the effort from the IT department for the installation can be derived."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);