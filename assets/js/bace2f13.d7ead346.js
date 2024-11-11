"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[28840],{40095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operation-administration/introduction","title":"Introduction and Basics","description":"Welcome to the TruBudget operation and administration documentation! This guide offers key information relevant to operating and administrating a TruBudget network.","source":"@site/docs/operation-administration/introduction.md","sourceDirName":"operation-administration","slug":"/operation-administration/introduction","permalink":"/docs/operation-administration/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/introduction.md","tags":[],"version":"current","lastUpdatedBy":"MartinJurcoGlina","lastUpdatedAt":1731328844000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Logging in TruBudget","permalink":"/docs/developer/logging"},"next":{"title":"Security @ TruBudget","permalink":"/docs/operation-administration/security"}}');var o=i(74848),a=i(28453);const r={sidebar_position:1},s="Introduction and Basics",d={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction to Organizations and Nodes in TruBudget",id:"introduction-to-organizations-and-nodes-in-trubudget",level:2},{value:"Let&#39;s look at this using some examples.",id:"lets-look-at-this-using-some-examples",level:3},{value:"Two organizations: Orga1 (origin node), Orga2 (connecting to Organization 1), Each with one Node",id:"two-organizations-orga1-origin-node-orga2-connecting-to-organization-1-each-with-one-node",level:4},{value:"Two organizations: Additional Node",id:"two-organizations-additional-node",level:4},{value:"Three organizations: Orga3 decides to join",id:"three-organizations-orga3-decides-to-join",level:4},{value:"Further reading",id:"further-reading",level:2},{value:"Configuring TruBudget",id:"configuring-trubudget",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Setting environment variables",id:"setting-environment-variables",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"introduction-and-basics",children:"Introduction and Basics"})}),"\n",(0,o.jsx)(n.p,{children:"Welcome to the TruBudget operation and administration documentation! This guide offers key information relevant to operating and administrating a TruBudget network."}),"\n",(0,o.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"#introduction-and-basics",children:"Introduction and Basics"})," - Basic information and a table of contents to get you started"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#introduction-to-organizations-and-nodes-in-trubudget",children:"Introduction to Organizations and Nodes in TruBudget"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#configuring-trubudget",children:"Configuring TruBudget"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#environment-variables",children:"Environment variables"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/operation-administration/architecture#architecture-in-trubudget",children:"Architecture in TruBudget"}),"  - Information on the TruBudget Architecture"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/operation-administration/debugging#debugging-trubudget",children:"Debugging TruBudget"})," - Information on how to debug the issues within TruBudget"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/operation-administration/encryption#securing-communication-between-nodes",children:"Encryption"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./installation/README",children:"Installing TruBudget"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/operation-administration/multichain-cli#multichain-cli",children:"Multichain-CLI"})," - Information on how to use the Multichain-CLI to interact with the blockchain"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/operation-administration/resource-requirements#running-trubudget",children:"Resource Requirements"})," - Information on minimum resource requirements for running TruBudget"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/operation-administration/security#security--trubudget",children:"Security"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./telemetry",children:"Telemetry"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/operation-administration/update-trubudget#updating-trubudget",children:"Updating TruBudget"})," - Information on how to update and upgrade TruBudget to newer versions as well as create backups"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"introduction-to-organizations-and-nodes-in-trubudget",children:"Introduction to Organizations and Nodes in TruBudget"}),"\n",(0,o.jsxs)(n.p,{children:["One of the terms used most in TruBudget is ",(0,o.jsx)(n.em,{children:"organization"}),". This section describes what organizations are in the context of TruBudget and how they interact with each other."]}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.em,{children:"organization"})," is a stakeholder in the funding process (e.g. Ministry of X). TruBudget is designed to connect multiple organizations together. Each organization creates their own users. Each user is associated to exactly one organization and can only login to nodes of that organization."]}),"\n",(0,o.jsxs)(n.p,{children:["An organization can run one or more nodes. Each organization has exactly one wallet that can be used to vote when granting or revoking permissions to other wallet addresses, which is key to preventing a 51%-attack against the network. This means that even if one organization has multiple nodes, it gets only ",(0,o.jsx)(n.em,{children:"one"})," vote for adding new organizations to the network."]}),"\n",(0,o.jsxs)(n.p,{children:["Each organization has one shared key to en-/decrypt the user data, which is set in via the ",(0,o.jsx)(n.code,{children:"ORGANIZATION_VAULT_SECRET"}),". Every node of one organization needs to use the same key. If one node of an organization uses the same organization name, but a different organization vault secret, users created on other nodes cannot login on this faulty node, even though the name of the organization is the same."]}),"\n",(0,o.jsx)(n.h3,{id:"lets-look-at-this-using-some-examples",children:"Let's look at this using some examples."}),"\n",(0,o.jsx)(n.h4,{id:"two-organizations-orga1-origin-node-orga2-connecting-to-organization-1-each-with-one-node",children:"Two organizations: Orga1 (origin node), Orga2 (connecting to Organization 1), Each with one Node"}),"\n",(0,o.jsxs)(n.p,{children:["Orga1 starts a new origin node (i.e. a new, empty blockchain) and creates a new user called Alice. At this point, Orga1 has 100% voting power in the network since it is the only node. Orga2 then connects to Orga1's node. After Orga1 approves the addition of a new node, Orga2 synchronizes the data and creates a new user called Bob. Alice and Bob can now both see the complete user list of the network (i.e. Alice and Bob), but Alice cannot login on Orga2's node and Bob cannot login on Orga1's node since they don't have the same ",(0,o.jsx)(n.code,{children:"ORGANIZATION_VAULT_SECRET"}),". Each of the organizations now holds 50% of the voting power in the network."]}),"\n",(0,o.jsx)(n.h4,{id:"two-organizations-additional-node",children:"Two organizations: Additional Node"}),"\n",(0,o.jsxs)(n.p,{children:["Orga1 has employees in another location and decides to add another node on a server on this location. Orga1 then creates a new node with the same name and ",(0,o.jsx)(n.code,{children:"ORGANIZATION_VAULT_SECRET"}),". The request for a new node of an existing organization pops up in the frontend for both organizations. The addition of a new node for one organization does not create a new wallet address and therefore also does not need more than 50% approval. Orga1 approves the addition of a new node and creates a user account for Ava. Both Orga1 and Orga2 still hold 50% of the voting power."]}),"\n",(0,o.jsx)(n.p,{children:"Ava visits the other work location to work together with Alice. She can log in on the same node as Alice, since they share the same organization vault secret."}),"\n",(0,o.jsx)(n.h4,{id:"three-organizations-orga3-decides-to-join",children:"Three organizations: Orga3 decides to join"}),"\n",(0,o.jsxs)(n.p,{children:["Orga3 wants to join the network and connects to Orga1. The request for approval is visible on the frontends of Orga1 and Orga2. Since both of them hold 50% of the voting power, ",(0,o.jsx)(n.em,{children:"both"})," organizations need to approve Orga3 before it can join the network. After both organizations approve Orga3, the data is synchronized and Orga3 creates a new user called Charlie. Like for the other organizations, Charlie can only login on the node of Orga3. All three organizations now hold 33.33% of the voting power in the network."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"trubudget-orga-diagramm",src:i(392).A+"",width:"552",height:"501"})}),"\n",(0,o.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to read more about the concept of organizations, have a look at the ",(0,o.jsx)(n.a,{href:"../developer/architecture/0010-multi-node-setup-and-user-management",children:"Multi Node Setup ADR"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-trubudget",children:"Configuring TruBudget"}),"\n",(0,o.jsx)(n.p,{children:"Configuration in TruBudget is individual for each service. Every service as seen below uses environment variables for its configuration."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../environment-variables/blockchain-environment-variables",children:"Blockchain"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../environment-variables/api-environment-variables",children:"API"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../environment-variables/frontend-environment-variables",children:"Frontend"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/openkfw/TruBudget/blob/main/provisioning/README.md",children:"Provisioning (Optional)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../environment-variables/excel-export-service-environment-variables",children:"Excel-Export (Optional)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../environment-variables/email-notification-service-environment-variables",children:"Email-Notification (Optional)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../environment-variables/storage-service-environment-variables",children:"Storage-Service (Optional)"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["While configuring TruBudget, pay attention to environment variables used for communication between services, such as ",(0,o.jsx)(n.strong,{children:"_PORT"})," variables or ",(0,o.jsx)(n.strong,{children:"_IP"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Such an example is the environment variable for setting the port of the API. While the variable is called ",(0,o.jsx)(n.strong,{children:"PORT"})," in the API, in another service it is called ",(0,o.jsx)(n.strong,{children:"API_PORT"})," and has to have the same value as the PORT variable from the API, otherwise the service won't be able to communicate with the API."]}),"\n",(0,o.jsx)(n.p,{children:"More info on setting environment variables is given below."}),"\n",(0,o.jsx)(n.p,{children:"There are also multiple environment variables for security purposes. These are passwords/secrets for authenticating or authorizing certain services, root user (ROOT_SECRET) and organizations (ORGANIZATION_VAULT_SECRET). Make sure to double check the values when setting these variables!"}),"\n",(0,o.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,o.jsx)(n.p,{children:"All installation and user guides have one thing in common: They all use environment variables to customize the setup of TruBudget. To get started, you should know about the environment variables, their purpose and how to set them."}),"\n",(0,o.jsxs)(n.p,{children:["You can find the documentation of all environmental variables in ",(0,o.jsx)(n.a,{href:"../environment-variables",children:"environment-variables"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need a ",(0,o.jsx)(n.code,{children:".env.example"})," file as a template, use the ",(0,o.jsx)(n.code,{children:".env.example"})," file in ",(0,o.jsx)(n.code,{children:"/scripts/operation"}),". This file has all values pre-filled."]}),"\n",(0,o.jsx)(n.h3,{id:"setting-environment-variables",children:"Setting environment variables"}),"\n",(0,o.jsx)(n.p,{children:"Environment variables need to be set via the command line. Usually, they are only valid for the active session, i.e. if you close the terminal window in which you have set the environment variable and then open a new command line window, the value of the environment variable is lost."}),"\n",(0,o.jsx)(n.p,{children:"Setting an environment variable requires different commands in Linux/OS X and Windows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export VARIABLE="value" (Linux / OS X)\nset VARIABLE="value" (Windows)\n'})}),"\n",(0,o.jsx)(n.p,{children:"To check the value of a given variable, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"echo $VARIABLE (Linux / OS X)\necho %VARIABLE% (Windows)\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"In this case we assume you use the standard command line tool for Linux/OS X (which is Bash) and Windows (which is CMD)."})}),"\n",(0,o.jsxs)(n.p,{children:["Another option to set environment variables is to use a ",(0,o.jsx)(n.code,{children:".env"})," file in the directory where the start command is executed.\nTrubudget provides a default example ",(0,o.jsx)(n.code,{children:".env.example"})," file which has to be renamed to ",(0,o.jsx)(n.code,{children:".env"})," if it should be used."]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},392:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/trubudget-orga-diagramm-5ef557a891ad5dac405d4f2e42216038.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(96540);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);