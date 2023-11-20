"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,g=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},r="Introduction and Basics",s={unversionedId:"operation-administration/introduction",id:"operation-administration/introduction",title:"Introduction and Basics",description:"Welcome to the TruBudget operation and administration documentation! This guide offers key information relevant to operating and administrating a TruBudget network.",source:"@site/docs/operation-administration/introduction.md",sourceDirName:"operation-administration",slug:"/operation-administration/introduction",permalink:"/docs/operation-administration/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/introduction.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Logging in TruBudget",permalink:"/docs/developer/logging"},next:{title:"Security @ TruBudget",permalink:"/docs/operation-administration/security"}},l={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction to Organizations and Nodes in TruBudget",id:"introduction-to-organizations-and-nodes-in-trubudget",level:2},{value:"Let&#39;s look at this using some examples.",id:"lets-look-at-this-using-some-examples",level:3},{value:"Two organizations: Orga1 (origin node), Orga2 (connecting to Organization 1), Each with one Node",id:"two-organizations-orga1-origin-node-orga2-connecting-to-organization-1-each-with-one-node",level:4},{value:"Two organizations: Additional Node",id:"two-organizations-additional-node",level:4},{value:"Three organizations: Orga3 decides to join",id:"three-organizations-orga3-decides-to-join",level:4},{value:"Further reading",id:"further-reading",level:2},{value:"Configuring TruBudget",id:"configuring-trubudget",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Setting environment variables",id:"setting-environment-variables",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-and-basics"},"Introduction and Basics"),(0,o.kt)("p",null,"Welcome to the TruBudget operation and administration documentation! This guide offers key information relevant to operating and administrating a TruBudget network. "),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#introduction-and-basics"},"Introduction and Basics")," - Basic information and a table of contents to get you started"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction-to-organizations-and-nodes-in-trubudget"},"Introduction to Organizations and Nodes in TruBudget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuring-trubudget"},"Configuring TruBudget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#environment-variables"},"Environment variables")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/architecture#architecture-in-trubudget"},"Architecture in TruBudget"),"  - Information on the TruBudget Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/debugging#debugging-trubudget"},"Debugging TruBudget")," - Information on how to debug the issues within TruBudget ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/encryption#securing-communication-between-nodes"},"Encryption"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"./installation/README"},"Installing TruBudget"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/multichain-cli#multichain-cli"},"Multichain-CLI")," - Information on how to use the Multichain-CLI to interact with the blockchain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/resource-requirements#running-trubudget"},"Resource Requirements")," - Information on minimum resource requirements for running TruBudget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/security#security--trubudget"},"Security"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/operation-administration/update-trubudget#updating-trubudget"},"Updating TruBudget")," - Information on how to update and upgrade TruBudget to newer versions as well as create backups"))),(0,o.kt)("h2",{id:"introduction-to-organizations-and-nodes-in-trubudget"},"Introduction to Organizations and Nodes in TruBudget"),(0,o.kt)("p",null,"One of the terms used most in TruBudget is ",(0,o.kt)("em",{parentName:"p"},"organization"),". This section describes what organizations are in the context of TruBudget and how they interact with each other."),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"organization")," is a stakeholder in the funding process (e.g. Ministry of X). TruBudget is designed to connect multiple organizations together. Each organization creates their own users. Each user is associated to exactly one organization and can only login to nodes of that organization."),(0,o.kt)("p",null,"An organization can run one or more nodes. Each organization has exactly one wallet that can be used to vote when granting or revoking permissions to other wallet addresses, which is key to preventing a 51%-attack against the network. This means that even if one organization has multiple nodes, it gets only ",(0,o.kt)("em",{parentName:"p"},"one")," vote for adding new organizations to the network."),(0,o.kt)("p",null,"Each organization has one shared key to en-/decrypt the user data, which is set in via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET"),". Every node of one organization needs to use the same key. If one node of an organization uses the same organization name, but a different organization vault secret, users created on other nodes cannot login on this faulty node, even though the name of the organization is the same."),(0,o.kt)("h3",{id:"lets-look-at-this-using-some-examples"},"Let's look at this using some examples."),(0,o.kt)("h4",{id:"two-organizations-orga1-origin-node-orga2-connecting-to-organization-1-each-with-one-node"},"Two organizations: Orga1 (origin node), Orga2 (connecting to Organization 1), Each with one Node"),(0,o.kt)("p",null,"Orga1 starts a new origin node (i.e. a new, empty blockchain) and creates a new user called Alice. At this point, Orga1 has 100% voting power in the network since it is the only node. Orga2 then connects to Orga1's node. After Orga1 approves the addition of a new node, Orga2 synchronizes the data and creates a new user called Bob. Alice and Bob can now both see the complete user list of the network (i.e. Alice and Bob), but Alice cannot login on Orga2's node and Bob cannot login on Orga1's node since they don't have the same ",(0,o.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET"),". Each of the organizations now holds 50% of the voting power in the network."),(0,o.kt)("h4",{id:"two-organizations-additional-node"},"Two organizations: Additional Node"),(0,o.kt)("p",null,"Orga1 has employees in another location and decides to add another node on a server on this location. Orga1 then creates a new node with the same name and ",(0,o.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET"),". The request for a new node of an existing organization pops up in the frontend for both organizations. The addition of a new node for one organization does not create a new wallet address and therefore also does not need more than 50% approval. Orga1 approves the addition of a new node and creates a user account for Ava. Both Orga1 and Orga2 still hold 50% of the voting power."),(0,o.kt)("p",null,"Ava visits the other work location to work together with Alice. She can log in on the same node as Alice, since they share the same organization vault secret."),(0,o.kt)("h4",{id:"three-organizations-orga3-decides-to-join"},"Three organizations: Orga3 decides to join"),(0,o.kt)("p",null,"Orga3 wants to join the network and connects to Orga1. The request for approval is visible on the frontends of Orga1 and Orga2. Since both of them hold 50% of the voting power, ",(0,o.kt)("em",{parentName:"p"},"both")," organizations need to approve Orga3 before it can join the network. After both organizations approve Orga3, the data is synchronized and Orga3 creates a new user called Charlie. Like for the other organizations, Charlie can only login on the node of Orga3. All three organizations now hold 33.33% of the voting power in the network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"trubudget-orga-diagramm",src:n(85069).Z,width:"552",height:"501"})),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"If you want to read more about the concept of organizations, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"../developer/architecture/0010-multi-node-setup-and-user-management"},"Multi Node Setup ADR"),"."),(0,o.kt)("h2",{id:"configuring-trubudget"},"Configuring TruBudget"),(0,o.kt)("p",null,"Configuration in TruBudget is individual for each service. Every service as seen below uses environment variables for its configuration."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../blockchain/environment-variables"},"Blockchain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../api/environment-variables"},"API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../frontend/environment-variables"},"Frontend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../provisioning/README"},"Provisioning (Optional)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../excel-export-service/environment-variables"},"Excel-Export (Optional)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../email-notification-service/environment-variables"},"Email-Notification (Optional)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../storage-service/environment-variables"},"Storage-Service (Optional)"))),(0,o.kt)("p",null,"While configuring TruBudget, pay attention to environment variables used for communication between services, such as ",(0,o.kt)("strong",{parentName:"p"},"_PORT")," variables or ",(0,o.kt)("strong",{parentName:"p"},"_IP"),"."),(0,o.kt)("p",null,"Such an example is the environment variable for setting the port of the API. While the variable is called ",(0,o.kt)("strong",{parentName:"p"},"PORT")," in the API, in another service it is called ",(0,o.kt)("strong",{parentName:"p"},"API_PORT")," and has to have the same value as the PORT variable from the API, otherwise the service won't be able to communicate with the API."),(0,o.kt)("p",null,"More info on setting environment variables is given below."),(0,o.kt)("p",null,"There are also multiple environment variables for security purposes. These are passwords/secrets for authenticating or authorizing certain services, root user (ROOT_SECRET) and organizations (ORGANIZATION_VAULT_SECRET). Make sure to double check the values when setting these variables!"),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"All installation and user guides have one thing in common: They all use environment variables to customize the setup of TruBudget. To get started, you should know about the environment variables, their purpose and how to set them."),(0,o.kt)("p",null,"You can find the documentation of all environmental variables in ",(0,o.kt)("a",{parentName:"p",href:"../environment-variables"},"environment-variables"),"."),(0,o.kt)("p",null,"If you need a ",(0,o.kt)("inlineCode",{parentName:"p"},".env_example")," file as a template, use the ",(0,o.kt)("inlineCode",{parentName:"p"},".env_example")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/scripts/operation"),". This file has all values pre-filled."),(0,o.kt)("h3",{id:"setting-environment-variables"},"Setting environment variables"),(0,o.kt)("p",null,"Environment variables need to be set via the command line. Usually, they are only valid for the active session, i.e. if you close the terminal window in which you have set the environment variable and then open a new command line window, the value of the environment variable is lost."),(0,o.kt)("p",null,"Setting an environment variable requires different commands in Linux/OS X and Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export VARIABLE="value" (Linux / OS X)\nset VARIABLE="value" (Windows)\n')),(0,o.kt)("p",null,"To check the value of a given variable, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo $VARIABLE (Linux / OS X)\necho %VARIABLE% (Windows)\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In this case we assume you use the standard command line tool for Linux/OS X (which is Bash) and Windows (which is CMD).")),(0,o.kt)("p",null,"Another option to set environment variables is to use a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the directory where the start command is executed.\nTrubudget provides a default example ",(0,o.kt)("inlineCode",{parentName:"p"},".env_example")," file which has to be renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," if it should be used."))}p.isMDXComponent=!0},85069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/trubudget-orga-diagramm-5ef557a891ad5dac405d4f2e42216038.png"}}]);