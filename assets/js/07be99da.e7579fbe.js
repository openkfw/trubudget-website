"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7636],{45637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer/architecture/access-control-model","title":"Access Control Model","description":"Date: 03/04/2018","source":"@site/docs/developer/architecture/0002-access-control-model.md","sourceDirName":"developer/architecture","slug":"/developer/architecture/access-control-model","permalink":"/docs/developer/architecture/access-control-model","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0002-access-control-model.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Record architecture decisions","permalink":"/docs/developer/architecture/record-architecture-decisions"},"next":{"title":"Data model for projects","permalink":"/docs/developer/architecture/project-data-model"}}');var o=n(74848),r=n(28453);const i={sidebar_position:2},c="Access Control Model",a={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Intents",id:"intents",level:3},{value:"User Groups",id:"user-groups",level:3},{value:"Implementation Pattern",id:"implementation-pattern",level:3},{value:"Resource-specific Access Control Lists (ACLs)",id:"resource-specific-access-control-lists-acls",level:3},{value:"Consequences",id:"consequences",level:2}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"access-control-model",children:"Access Control Model"})}),"\n",(0,o.jsx)(t.p,{children:"Date: 03/04/2018"}),"\n",(0,o.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,o.jsx)(t.p,{children:"Accepted"}),"\n",(0,o.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,o.jsx)(t.p,{children:"We need to define our approach to access-control/authorization."}),"\n",(0,o.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,o.jsxs)(t.p,{children:["Since our users' organizations differ a lot in terms of structures and policies, we\nneed to have a very versatile access control mechanism in place. In the industry, the\nmost used technique employed is role-based access control (RBAC). We base our\nmandatory access control (MAC) mechanism on RBAC, but use the notion of ",(0,o.jsx)(t.em,{children:"intent"}),"\ninstead of role (an intent can be executed by exactly one role, thus effectively\nreplacing the role concept)."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Intent + Resource = Permission",src:n(92112).A+"",width:"1200",height:"859"})}),"\n",(0,o.jsx)(t.h3,{id:"intents",children:"Intents"}),"\n",(0,o.jsx)(t.p,{children:'An intent is what the user is trying to achieve, for example, "add a workflow to a\nsubproject". By using intents rather than roles, we side-step the problem found in\nmany projects, where over time developers create similar roles on-the-fly, as from\ntheir point of view the implications of re-using a role are not always clear.\nConversely, intents are always specific to a use case (examples: "create project" or\n"list a project\'s subprojects" rather than "admin" or "user").'}),"\n",(0,o.jsxs)(t.p,{children:["While roles ",(0,o.jsx)(t.em,{children:"could"}),' be used to bundle intent-execution rights (e.g. have one role\nthat is allowed to execute all "view" intents), we think that those roles would have\nto be managed by organizations themselves (as it will depend on their structure).\nSince in most cases this would mean a 1:1 mapping from role to user group, we skip\nroles altogether.']}),"\n",(0,o.jsx)(t.h3,{id:"user-groups",children:"User Groups"}),"\n",(0,o.jsxs)(t.p,{children:["Organizations group their users into ",(0,o.jsx)(t.em,{children:"user groups"}),". For any given projects, each\n(resource-specific) intent has a list of user groups assigned to it; all users in the\nassigned groups are then allowed to execute the respective intent."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-plain",children:"+-------+               +---------------------+                +---------------+\n| User: | is member of  | Group:              | is allowed to  | Intent:       |\n| Alice +--------------\x3e+ Project Maintainers +---------------\x3e+ Add workflow  |\n|       |               |                     |                | to subproject |\n+-------+               +---------------------+                +---------------+\n"})}),"\n",(0,o.jsx)(t.h3,{id:"implementation-pattern",children:"Implementation Pattern"}),"\n",(0,o.jsx)(t.p,{children:"The goal is to enable us to follow a clear pattern for our access control needs:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"HTTP controllers call the domain modules and the authorization module (perhaps using a\nmiddleware), but do not deal with intents or groups."}),"\n",(0,o.jsx)(t.li,{children:"Domain modules may interact with the chain to fetch domain objects, and/or prepare\nclosures to be authorized and executed later on. They deal with intents, but not with\nusers or groups."}),"\n",(0,o.jsxs)(t.li,{children:["Finally, the authorization module ensures that the ",(0,o.jsx)(t.em,{children:"user"})," executing the ",(0,o.jsx)(t.em,{children:"intent"}),"\nbelongs to a ",(0,o.jsx)(t.em,{children:"group"})," that is allowed to do that. In order to decide that, the module\nhas to fetch resource-specific ACLs from the chain."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:['Modifying ACLs is done in the same way: each resource\'s ACL specifies the groups that\nmay execute the "change this ACL" intent (to be renamed). This hints at the necessity\nto provide ',(0,o.jsx)(t.em,{children:"defaults"})," for ACLs when creating resources."]}),"\n",(0,o.jsx)(t.h3,{id:"resource-specific-access-control-lists-acls",children:"Resource-specific Access Control Lists (ACLs)"}),"\n",(0,o.jsx)(t.p,{children:"With each resource/stream on the chain, an ACL stream-item is stored that lists for\neach intent the groups allowed to execute that intent:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "acl": {\n    "view project": ["all users"],\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,o.jsx)(t.p,{children:"With the proposed changes in place, our users will be able to impose their respective\norganizational structures onto TruBudget's resources in a way that should be flexible\nenough and straight-forward to integrate with their existing directory servers."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},92112:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/0002-access-control-model-c8d551ba4f02bb8e71a2b2ed58b43de7.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);