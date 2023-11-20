"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[81602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},o="Multichain-Cli",l={unversionedId:"operation-administration/multichain-cli",id:"operation-administration/multichain-cli",title:"Multichain-Cli",description:"Besides the JSON-RPC API, multichain has a command line tool multichain-cli, which can be accessed inside the container in which multichain node is running.",source:"@site/docs/operation-administration/multichain-cli.md",sourceDirName:"operation-administration",slug:"/operation-administration/multichain-cli",permalink:"/docs/operation-administration/multichain-cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/multichain-cli.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging and Monitoring in TruBudget",permalink:"/docs/operation-administration/logging-monitoring"},next:{title:"Running TruBudget",permalink:"/docs/operation-administration/resource-requirements"}},s={},c=[{value:"Querying TruBudget multichain",id:"querying-trubudget-multichain",level:2},{value:"Network, nodes, status",id:"network-nodes-status",level:2},{value:"Further info",id:"further-info",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multichain-cli"},"Multichain-Cli"),(0,a.kt)("p",null,"Besides the JSON-RPC API, multichain has a command line tool ",(0,a.kt)("inlineCode",{parentName:"p"},"multichain-cli"),", which can be accessed inside the container in which multichain node is running.\nIt can be used to issue single commands or as an interactive prompt."),(0,a.kt)("p",null,"Go ahead and connect to a multichain container:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker exec -it *your_container_id* bash")),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec -it b68341770e68ef4be2f7ed008de35910b246bcb68a9913e85d28a6a640ebf98e bash")),(0,a.kt)("p",null,"Once you're in, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"multichain-cli TrubudgetChain"),", which starts an interactive session."),(0,a.kt)("h2",{id:"querying-trubudget-multichain"},"Querying TruBudget multichain"),(0,a.kt)("p",null,"Multichain streams are used as a general purpose append only database, retrievable by transaction ID (txid), name (often ID used in application) or ref. Data is stored in TruBudget as a set of defined events in the stream, retrievable by ",(0,a.kt)("inlineCode",{parentName:"p"},"stream")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," . No items in blockchain can be deleted or overwritten. It is up to the application to interpret the data it fetches from the chain. All items/transactions are timestamped, which makes the order of operations on a piece of data clear."),(0,a.kt)("p",null,"There are separate streams for groups, users, organizations, projects etc. You can notice that names of project streams are the IDs visible on frontend.\nYou can pass these to parameters of other multichain-cli commands."),(0,a.kt)("p",null,"For example, when the workflowitem is created, that event is stored in TruBudget stream with project ID, and subproject ID and workflowitem ID are used as keys."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to list streams")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"liststreams")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to list projects")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"liststreamitems")," with key ",(0,a.kt)("inlineCode",{parentName:"p"},'details: { kind: "project" }')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to see information about stream")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getstreaminfo")," ID/ref/creation txid"),(0,a.kt)("p",null,"Example to get info about project stream with project ID passed as argument: ",(0,a.kt)("inlineCode",{parentName:"p"},"getstreaminfo fe29bc903d155f4214e50ab7189dbec9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to see project details")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"liststreamitems projectId")," e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"liststreamitems fe29bc903d155f4214e50ab7189dbec9")),(0,a.kt)("p",null,"Observe, that we do not get complete details of a project with all subprojects and workflowitems."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to see subproject details")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'liststreamkeyitems "projectId" "subprojectId"')," (with double quotes) e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},'liststreamkeyitems "fe29bc903d155f4214e50ab7189dbec9" "190d7bd8409d3ca905c727b48fb28bd8"')),(0,a.kt)("h2",{id:"network-nodes-status"},"Network, nodes, status"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to get general information about the node and blockchain")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getinfo")," return, among other, name of blockchain, description, node address, protocol, p2p port, number of connected peer nodes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to gen network multichain node is connected to")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getnetworkinfo")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to get infromation about connected nodes")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getpeerinfo")," returns an array of objects representing peer connected nodes, including IP address and ping"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to get information about all nodes in the network")),(0,a.kt)("p",null,"This is two step-process. First list all nodes from the TruBudget ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," stream: ",(0,a.kt)("inlineCode",{parentName:"p"},'liststreamkeyitems "nodes" "*"'),".\nEvery node has an address. We can list permissions of a particular node with ",(0,a.kt)("inlineCode",{parentName:"p"},'listpermissions all "1E2XKauFRbK6vhGv3iSEyobpSY7EKvK14MAyLc"'),".\nAlternatively, we can list all permissions of all nodes:\n",(0,a.kt)("inlineCode",{parentName:"p"},"listpermissions"),".\nNodes that have been granted no permission to connect to the chain do not have ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," permission. Either it has not yet been granted, or has been revoked."),(0,a.kt)("h2",{id:"further-info"},"Further info"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.multichain.com/blog/2016/09/introducing-multichain-streams/"},"Read more about MultiChain Streams")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.multichain.com/developers/json-rpc-api/"}," MultiChain API documentation"))))}d.isMDXComponent=!0}}]);