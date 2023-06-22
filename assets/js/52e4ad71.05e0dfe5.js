"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[23655],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return t?o.createElement(f,r(r({ref:n},d),{},{components:t})):o.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},87714:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],s={},c="Connection Process",l={unversionedId:"operation-administration/installation/connect-to-an-existing-network/connection-process",id:"operation-administration/installation/connect-to-an-existing-network/connection-process",isDocsHomePage:!1,title:"Connection Process",description:"This section describes how the process of joining a new TruBudget network works in detail.",source:"@site/docs/operation-administration/installation/connect-to-an-existing-network/connection-process.md",sourceDirName:"operation-administration/installation/connect-to-an-existing-network",slug:"/operation-administration/installation/connect-to-an-existing-network/connection-process",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/connection-process",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/installation/connect-to-an-existing-network/connection-process.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect to an existing Blockchain network on Machine",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/bare-metal"},next:{title:"Connect to an existing Blockchain network using docker",permalink:"/docs/operation-administration/installation/connect-to-an-existing-network/docker"}},d=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Alpha vs Beta Node",id:"alpha-vs-beta-node",children:[{value:"Alpha node configuration",id:"alpha-node-configuration",children:[]},{value:"Beta node configuration",id:"beta-node-configuration",children:[]}]},{value:"Connect as new organization",id:"connect-as-new-organization",children:[]},{value:"Connect as new node of an existing organization",id:"connect-as-new-node-of-an-existing-organization",children:[]},{value:"API network endpoints",id:"api-network-endpoints",children:[{value:"Connection process via REST API",id:"connection-process-via-rest-api",children:[]}]}],p={toc:d},u="wrapper";function h(e){var n=e.components,s=(0,a.Z)(e,r);return(0,i.kt)(u,(0,o.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connection-process"},"Connection Process"),(0,i.kt)("p",null,"This section describes how the process of joining a new TruBudget network works in detail."),(0,i.kt)("p",null,"The minimum components needed are an alpha node connected to an API and a beta node which wants to join the network of the alpha node."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#connection-process"},"Connection Process"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alpha-vs-beta-node"},"Alpha vs Beta Node"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alpha-node-configuration"},"Alpha node configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#beta-node-configuration"},"Beta node configuration")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#connect-as-new-organization"},"Connect as new organization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#connect-as-new-node-of-an-existing-organization"},"Connect as new node of an existing organization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api-network-endpoints"},"API network endpoints"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#connection-process-via-rest-api"},"Connection process via REST API"))))))),(0,i.kt)("h2",{id:"alpha-vs-beta-node"},"Alpha vs Beta Node"),(0,i.kt)("p",null,"The first node of a TruBudget network is called ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha node"),". Every node after the first one is called ",(0,i.kt)("inlineCode",{parentName:"p"},"beta node"),"\nA blockchain node defines itself as ",(0,i.kt)("inlineCode",{parentName:"p"},"beta node")," if the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"P2P_HOST")," is set."),(0,i.kt)("h3",{id:"alpha-node-configuration"},"Alpha node configuration"),(0,i.kt)("p",null,"If a TruBudget alpha node is setup and beta nodes should connect to it in the future additional configurations must be made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The node must be accessible to beta nodes via ",(0,i.kt)("inlineCode",{parentName:"li"},"[EXTERNAL_IP]:[P2P_PORT]"),"."),(0,i.kt)("li",{parentName:"ul"},"The API connected to the node must be accessible to beta nodes.")),(0,i.kt)("p",null,":::hint\nAfter setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTERNAL_IP")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"P2P_PORT")," (default: 7447) and after starting the node check if the port is open with a TCP check tool of your choice\n:::"),(0,i.kt)("h3",{id:"beta-node-configuration"},"Beta node configuration"),(0,i.kt)("p",null,"If a TruBudget beta node is setup additional configurations must be made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The P2P_HOST must be set to the EXTERNAL_IP of the alpha node"),(0,i.kt)("li",{parentName:"ul"},"The P2P_PORT must be the same of the alpha node"),(0,i.kt)("li",{parentName:"ul"},"The API_HOST and API_PORT must be set to the API of the alpha node"),(0,i.kt)("li",{parentName:"ul"},"The MULTICHAIN_RPC_PASSWORD must be the one of the TruBudget network")),(0,i.kt)("p",null,":::hint\nIt is also possible to connect a beta node to a beta node, just make sure the additional configurations of the ",(0,i.kt)("a",{parentName:"p",href:"#alpha-node-configuration"},"alpha node configuration section")," are set\n:::"),(0,i.kt)("h2",{id:"connect-as-new-organization"},"Connect as new organization"),(0,i.kt)("p",null,"In this case, a new organization wants to join an already existing network. Example: Orga A already has one node in the network and Orga B wants to join."),(0,i.kt)("p",null,"A = Orga A\nB = Orga B (new organization)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connection-process-new-orga-sequence-diagram",src:t(10598).Z})),(0,i.kt)("h2",{id:"connect-as-new-node-of-an-existing-organization"},"Connect as new node of an existing organization"),(0,i.kt)("p",null,"In this case a new node from an organization that already has a node in the network wants to join. Example: Orga A has one node in the network and a new Orga A node wants to join the network.\nThe main difference here is, that you only need the approval of one admin user from another node in the network."),(0,i.kt)("p",null,"Important: Even though the new node of the organization has its own address, only the address and private key of the already existing node is used for future transactions. It is therefore absolutely necessary that both nodes have the same ORGANIZATION_VAULT_SECRET."),(0,i.kt)("p",null,"Node A = first node of Orga A\nNode A2 = second node of Orga A"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connection-process-existing-orga-sequence-diagram",src:t(90077).Z})),(0,i.kt)("h2",{id:"api-network-endpoints"},"API network endpoints"),(0,i.kt)("p",null,"The connection process is done using the REST API network endpoints of TruBudget.\nThe description of all ",(0,i.kt)("inlineCode",{parentName:"p"},"network")," requests can be found in the Swagger documentation in every TruBudget API. If you setup the API locally, you can visit the Swagger documentation here:\nhttp://localhost:8080/api/documentation/static/index.html#/network"),(0,i.kt)("h3",{id:"connection-process-via-rest-api"},"Connection process via REST API"),(0,i.kt)("p",null,"A beta node sends a registration request (",(0,i.kt)("inlineCode",{parentName:"p"},"network.registerNode"),") to the alpha API automatically on startup.\nThe network must now vote for the new organization (",(0,i.kt)("inlineCode",{parentName:"p"},"network.voteForPermission"),").\nIf enough votes exists an organization can approve the beta node (",(0,i.kt)("inlineCode",{parentName:"p"},"network.approveNewOrganization"),").\nAfter successful approval the beta node can connect to the alpha note via Peer to Peer and synchronize its data."))}h.isMDXComponent=!0},90077:function(e,n,t){n.Z=t.p+"assets/images/connection-process-existing-orga-sequence-diagram-a43cda3f032e10172a1a32a3837f9528.png"},10598:function(e,n,t){n.Z=t.p+"assets/images/connection-process-new-orga-sequence-diagram-18b8c215d154bff44d5cde713258e45d.png"}}]);