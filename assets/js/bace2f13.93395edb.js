(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7187],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},816:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="Introduction and Basics",d={unversionedId:"operation-administration/introduction",id:"operation-administration/introduction",isDocsHomePage:!1,title:"Introduction and Basics",description:"Architecture",source:"@site/docs/operation-administration/introduction.md",sourceDirName:"operation-administration",slug:"/operation-administration/introduction",permalink:"/docs/operation-administration/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/introduction.md",version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1644328379,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to write documentation for TruBudget",permalink:"/docs/developer/documentation"},next:{title:"Security @ TruBudget",permalink:"/docs/operation-administration/security"}},u=[{value:"Architecture",id:"architecture",children:[]},{value:"Environment variables",id:"environment-variables",children:[{value:"Setting environment variables",id:"setting-environment-variables",children:[]},{value:"Environment Variables in TruBudget",id:"environment-variables-in-trubudget",children:[]}]},{value:"Organizations and Nodes in TruBudget",id:"organizations-and-nodes-in-trubudget",children:[{value:"Let&#39;s look at this using some examples.",id:"lets-look-at-this-using-some-examples",children:[]}]},{value:"Further reading",id:"further-reading",children:[]}],c={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-and-basics"},"Introduction and Basics"),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Following architecture diagram shows a Trubudget network with 3 standard nodes from 3 different Organizations.\nA standard node is a Trubudget node with minimal components to function.\nOrganizations can decide which additional Trubudget features they want to add or if they want to connect their own system via Trubudget's api."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"trubudget-architecture",src:n(4885).Z})),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"All installation and user guides have one thing in common: They all use environment variables to customize the setup of TruBudget. To get started, you should know about the environment variables, their purpose and how to set them."),(0,o.kt)("h3",{id:"setting-environment-variables"},"Setting environment variables"),(0,o.kt)("p",null,"Environment variables need to be set via the command line. Usually, they are only valid for the active session, i.e. if you close the terminal window in which you have set the environment variable and then open a new command line window, the value of the environment variable is lost."),(0,o.kt)("p",null,"Setting an environment variable requires different commands in Linux/OS X and Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export VARIABLE="value" (Linux / OS X)\nset VARIABLE="value" (Windows)\n')),(0,o.kt)("p",null,"To check the value of a given variable, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo $VARIABLE (Linux / OS X)\necho %VARIABLE% (Windows)\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this case we assume you use the standard command line tool for Linux/OS X (which is Bash) and Windows (which is CMD)."))),(0,o.kt)("p",null,"Another option to set environment variables is to use a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the directory where the start command is executed.\nTrubudget provides a default example ",(0,o.kt)("inlineCode",{parentName:"p"},".env_example")," file which has to be renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," if it should be used."),(0,o.kt)("h3",{id:"environment-variables-in-trubudget"},"Environment Variables in TruBudget"),(0,o.kt)("p",null,"You can find the documentation of all environmental variables in ",(0,o.kt)("a",{parentName:"p",href:"../environment-variables"},"environment-variables"),"."),(0,o.kt)("p",null,"If you need a ",(0,o.kt)("inlineCode",{parentName:"p"},".env_example")," file as a template, use the ",(0,o.kt)("inlineCode",{parentName:"p"},".env_example")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/scripts/operation"),". This file has all values pre-filled."),(0,o.kt)("h4",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Env Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Used by"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EXPOSE_MC"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"bc"),(0,o.kt)("td",{parentName:"tr",align:null},"If set to true Trubudget tries to expose it's multichain via kubernetes' ingress. First a kubernetes config file is searched in ",(0,o.kt)("inlineCode",{parentName:"td"},"/.kube/config"),". If not found and the MC is deployed in a cluster, it is searching for the service account to get the information. After configuration the ",(0,o.kt)("inlineCode",{parentName:"td"},"externalip")," arg is set to the ip of the service' ingress of the configured clusterSERVICE_NAME and NAMESPACE are required to access the ingress of the service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SERVICE_NAME"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"bc"),(0,o.kt)("td",{parentName:"tr",align:null},"This variable is only required if EXPOSE_MC is set to true. It defines which service the kubernetes client should search for in the configured kubernetes cluster")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NAMESPACE"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"bc"),(0,o.kt)("td",{parentName:"tr",align:null},"This variable is only required if EXPOSE_MC is set to true. It defines in which namespace the kubernetes client should search for the given service")))),(0,o.kt)("h2",{id:"organizations-and-nodes-in-trubudget"},"Organizations and Nodes in TruBudget"),(0,o.kt)("p",null,"One of the terms used most in TruBudget is ",(0,o.kt)("em",{parentName:"p"},"organization"),". This section describes what organizations are in the context of TruBudget and how they interact with each other."),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"organization")," is a stakeholder in the funding process (e.g. Ministry of X). TruBudget is designed to connect multiple organizations together. Each organization creates their own users. Each user is associated to exactly one organization and can only login to nodes of that organization."),(0,o.kt)("p",null,"An organization can run one or more nodes. Each organization has exactly one wallet that can be used to vote when granting or revoking permissions to other wallet addresses, which is key to preventing a 51%-attack against the network. This means that even if one organization has multiple nodes, it gets only ",(0,o.kt)("em",{parentName:"p"},"one")," vote for adding new organizations to the network."),(0,o.kt)("p",null,"Each organization has one shared key to en-/decrypt the user data, which is set in via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET"),". Every node of one organization needs to use the same key. If one node of an organization uses the same organization name, but a different organization vault secret, users created on other nodes cannot login on this faulty node, even though the name of the organization is the same."),(0,o.kt)("h3",{id:"lets-look-at-this-using-some-examples"},"Let's look at this using some examples."),(0,o.kt)("h4",{id:"two-organizations-orgaa-origin-node-orgab-connecting-to-organization-a-each-with-one-node"},"Two organizations: OrgaA (origin node), OrgaB (connecting to Organization A), Each with one Node"),(0,o.kt)("p",null,"OrgaA starts a new origin node (i.e. a new, empty blockchain) and creates a new user called Alice. At this point, OrgaA has 100% voting power in the network since it is the only node. OrgaB then connects to OrgaA's node. After OrgaA approves the addition of a new node, OrgaB synchronizes the data and creates a new user called Bob. Alice and Bob can now both see the complete user list of the network (i.e. Alice and Bob), but Alice cannot login on OrgaB's node and Bob cannot login on OrgaA's node since they don't have the same ",(0,o.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET"),". Each of the organizations now holds 50% of the voting power in the network."),(0,o.kt)("h4",{id:"two-organizations-additional-node"},"Two organizations: Additional Node"),(0,o.kt)("p",null,"OrgaA has employees in another location and decides to add another node on a server on this location. OrgaA then creates a new node with the same name and ",(0,o.kt)("inlineCode",{parentName:"p"},"ORGANIZATION_VAULT_SECRET"),". The request for a new node of an existing organization pops up in the frontend for both organizations. The addition of a new node for one organization does not create a new wallet address and therefore also does not need more than 50% approval. OrgaA approves the addition of a new node and creates a user account for Ava. Both OrgaA and OrgaB still hold 50% of the voting power."),(0,o.kt)("p",null,"Ava visits the other work location to work together with Alice. She can log in on the same node as Alice, since they share the same organization vault secret."),(0,o.kt)("h4",{id:"three-organizations-orgac-decides-to-join"},"Three organizations: OrgaC decides to join"),(0,o.kt)("p",null,"OrgaC wants to join the network and connects to OrgaA. The request for approval is visible on the frontends of OrgaA and OrgaB. Since both of them hold 50% of the voting power, ",(0,o.kt)("em",{parentName:"p"},"both")," organizations need to approve OrgaC before it can join the network. After both organizations approve OrgaC, the data is synchronized and OrgaC creates a new user called Charlie. Like for the other organizations, Charlie can only login on the node of OrgaC. All three organizations now hold 33.33% of the voting power in the network."),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"If you want to read more about the concept of organizations, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"../developer/architecture/0010-multi-node-setup-and-user-management"},"Multi Node Setup ADR"),"."))}h.isMDXComponent=!0},4885:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Trubudget-architecture-diagram-1ee82ac63639f503a9fe8d3ceb0dcf20.PNG"}}]);