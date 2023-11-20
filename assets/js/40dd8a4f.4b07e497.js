"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Nodes",s={unversionedId:"user-guide/network/nodes",id:"user-guide/network/nodes",title:"Nodes",description:'The "Nodes" section is used to approve other organizations and nodes. An organization can have many nodes. If a new organization wants to join the network all organizations in the network may vote for this organization. After 50% voted for the organization to join the network an organization can approve it.',source:"@site/docs/user-guide/network/nodes.md",sourceDirName:"user-guide/network",slug:"/user-guide/network/nodes",permalink:"/docs/user-guide/network/nodes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/network/nodes.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1700467479,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workflowitems",permalink:"/docs/user-guide/projects/workflowitem"},next:{title:"Service-Status",permalink:"/docs/user-guide/status/"}},d={},l=[{value:"View Nodes",id:"view-nodes",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,'The "Nodes" section is used to approve other organizations and nodes. An organization can have many nodes. If a new organization wants to join the network all organizations in the network may vote for this organization. After 50% voted for the organization to join the network an organization can approve it.'),(0,r.kt)("h2",{id:"view-nodes"},"View Nodes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")),(0,r.kt)("p",null,'In the top cards "New Organizations" and "New nodes for existing organizations" organizations or nodes waiting for approval are shown. If a request is not going to be approved it can be declined and will disappear from the list.'),(0,r.kt)("p",null,'The main table shows all organizations and nodes of the current network.\nIn the "Approved" tab a list of nodes that were approved and added to the network is displayed. Each organization has one entry in the list, showing the number of nodes the organization has and which access the nodes have. Each table entry can be expanded in order to view more information regarding each node in the organization. Each node has a specific address, a connection status that shows if the node is still connected to the network and a timestamp that is updated every 24h specifying when the node was last seen.'),(0,r.kt)("p",null,"The second tab shows the nodes that were declined by the current organization while also mentioning what organizations declined the node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,r.kt)("li",{parentName:"ol"},'Click the "Nodes" menu point')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"view nodes",src:n(24173).Z,width:"2400",height:"1106"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click the buttons to "approve" or "decline" requests\n',(0,r.kt)("img",{alt:"approve decline nodes",src:n(13600).Z,width:"1493",height:"413"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On the "Approved" tab, click the arrow icon to expand the row and see more details about the organization\'s nodes'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"view approved nodes",src:n(32188).Z,width:"1468",height:"776"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'On the "Declined" tab, see the nodes declined by your organization. It is also visible what other organizations also declined the nodes.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"view declined nodes",src:n(87109).Z,width:"1480",height:"686"})))}u.isMDXComponent=!0},13600:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/approve_decline_nodes-d9af832eebb38e48b13d00dcc3f02c3b.jpg"},32188:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/view_approved_nodes-787c23c83a46f61e902a5d64e93b5c42.jpg"},87109:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/view_declined_nodes-2a8e3434af7928369bf64bd81a7cf46b.jpg"},24173:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/view_nodes-8b37a3a8bd1883371270462c21c19b92.jpg"}}]);