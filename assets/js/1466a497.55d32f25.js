"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[89543],{87915:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"developer/architecture/ressource-level-lifetime","title":"Resource-level lifetime","description":"Date: 23/04/2018","source":"@site/docs/developer/architecture/0004-ressource-level-lifetime.md","sourceDirName":"developer/architecture","slug":"/developer/architecture/ressource-level-lifetime","permalink":"/docs/developer/architecture/ressource-level-lifetime","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0004-ressource-level-lifetime.md","tags":[],"version":"current","lastUpdatedBy":"SamuelPull","lastUpdatedAt":1730990936000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Resource-level lifetime","permalink":"/docs/developer/architecture/resource-level-lifetime"},"next":{"title":"Workflowitem-ordering","permalink":"/docs/developer/architecture/workflowitem-ordering"}}');var i=s(74848),r=s(28453);const o={sidebar_position:4},l="Resource-level lifetime",c={},a=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Lifetime of a single resource",id:"lifetime-of-a-single-resource",level:3},{value:"Example: 4-Eyes Principle",id:"example-4-eyes-principle",level:4},{value:"Impact to child resources",id:"impact-to-child-resources",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Consequences",id:"consequences",level:2}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"resource-level-lifetime",children:"Resource-level lifetime"})}),"\n",(0,i.jsx)(t.p,{children:"Date: 23/04/2018"}),"\n",(0,i.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(t.p,{children:"Draft"}),"\n",(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(t.p,{children:"Resources have semantically a certain lifetime. That means, after a resources is created it will experience state-transition until it reaches the end of its lifetime (e.g. archival). The lifetimes and state-transitions need to be defined in an abstract way, in order to allow the platform to excel for different use-cases."}),"\n",(0,i.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsx)(t.h3,{id:"lifetime-of-a-single-resource",children:"Lifetime of a single resource"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-mermaid",children:"graph TD\nA[Create resource] --\x3e|Auto-assign to creator| B\nB[State: Open] --\x3e |Do work|B\nB --\x3e |Assign to somebody who can close| C\nC[State: Open & Ready to close] --\x3e |Close| D\nD[Resource closed]\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Re-Opening is not supported; it could be discussed as long as the parent is still open (hierarchy must hold). Different usage-scenarios are acommodated via ",(0,i.jsx)(t.em,{children:"manual"})," steps."]}),"\n",(0,i.jsx)(t.h4,{id:"example-4-eyes-principle",children:"Example: 4-Eyes Principle"}),"\n",(0,i.jsx)(t.p,{children:"Scenario: A subproject must only be closed when 2 people A & B (e.g. different departments) checked it."}),"\n",(0,i.jsx)(t.p,{children:"Prereqs: Closing right is given to an administrative person and not to the people signing off"}),"\n",(0,i.jsx)(t.p,{children:"Approach:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Subproject is executed as usual, then for sign-off is assigned to Person A"}),"\n",(0,i.jsx)(t.li,{children:"Sign-Off Person A enters a Workflow-Item validating the state and assigns Person B"}),"\n",(0,i.jsx)(t.li,{children:"Sign-Off Person B enters a Workflow-Item validating the state and assigns to administrative personell that has the close-rights"}),"\n",(0,i.jsx)(t.li,{children:"Administrative person checks whether all required sign-offs are there and then finally closes; otherwise assigns back"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"impact-to-child-resources",children:"Impact to child resources"}),"\n",(0,i.jsx)(t.p,{children:"A resource hierarchically describes a node in a tree-like structure. Therefore we need to look at impact of a closed resource to other nodes in the tree."}),"\n",(0,i.jsx)(t.p,{children:"If a resource has no children, there is no impact on other resources."}),"\n",(0,i.jsxs)(t.p,{children:["If a resource has children (e.g. subprojects / workflowitems), ",(0,i.jsx)(t.strong,{children:"the resource cannot be closed"}),". All children need to be in state closed before a parent can be closed."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-mermaid",children:"graph TD;\n    Project--\x3eSubproject_A;\n    Project--\x3eSubproject_B;\n    Subproject_A--\x3eWorkflowitem_A;\n    Subproject_A--\x3eWorkflowitem_B;\n    Subproject_B--\x3eWorkflowitem_C;\n    Subproject_B--\x3eWorkflowitem_D;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.p,{children:"This ADR is desigend to enable a MVP implementation. Implementation consists of a check before closing a project whether all subprojects have already been closed."}),"\n",(0,i.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Re-opening is not supported"}),"\n",(0,i.jsx)(t.li,{children:"No automatic closing in hierarchy for now"}),"\n",(0,i.jsx)(t.li,{children:"System blocks closing if there are open children"}),"\n",(0,i.jsx)(t.li,{children:"No system-support for specific usage patterns"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This approach is on-purpose very lightweight and agnostic to usage pattern. Once needs are understood better system support for scenarios like 4-eyes-principle can be established through a new / updated ADR and formally manifested in the ledger in machine-readable format."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);