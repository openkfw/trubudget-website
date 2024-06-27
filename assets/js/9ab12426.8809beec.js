"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[91984],{56365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(85893),s=t(11151);const i={sidebar_position:11},d="Decline Node Request",r={id:"developer/architecture/decline-node",title:"Decline Node Request",description:"Date: 11/03/2021",source:"@site/docs/developer/architecture/0011-decline-node.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/decline-node",permalink:"/docs/developer/architecture/decline-node",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0011-decline-node.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1719490378,formattedLastUpdatedAt:"Jun 27, 2024",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Multi node setup and user management",permalink:"/docs/developer/architecture/multi-node-setup-and-user-management"},next:{title:"Node Status",permalink:"/docs/developer/architecture/node-connection-info"}},a={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"decline-node-request",children:"Decline Node Request"}),"\n",(0,o.jsx)(n.p,{children:"Date: 11/03/2021"}),"\n",(0,o.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,o.jsx)(n.p,{children:"Accepted"}),"\n",(0,o.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,o.jsxs)(n.p,{children:["We want to be able to decline node requests. The current api logic saves an event on the ",(0,o.jsx)(n.code,{children:"nodes"})," stream for all nodes registered on the network. These nodes appear in the ui's nodes table as requests. So far, the requests that were not accepted would pile up and could not be deleted. When accepted, the nodes receive permissions from the MultiChain and can successfully connect to the system. Basic nodes receive the connect, send, receive, issue and create permissions, and admin nodes also have the mine, activate and admin permissions. For more details on these permissions check out the ",(0,o.jsx)(n.a,{href:"https://www.multichain.com/developers/permissions-management/",children:"Multichain permissions management"})," documentation. The opposite of the approval of nodes (which is actually a granting of permissions) would be to revoke these permissions. However, this would not lead to the desired outcome because the nodes would again appear in the list of requests as trying to connect to the network."]}),"\n",(0,o.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,o.jsxs)(n.p,{children:["As MultiChain doesn't offer a possibility to decline nodes, we want to save an event on the ",(0,o.jsx)(n.code,{children:"nodes"})," stream that mentions that a node was declined and by what organization. This way, when listing the nodes, the ones that appear in the stream as declined will be hidden from all nodes belonging to the decliner organization."]}),"\n",(0,o.jsx)(n.p,{children:"In order to promote transparency, every node in the network should see if a node has been declined by another orga."}),"\n",(0,o.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,o.jsxs)(n.p,{children:["A new endpoint ",(0,o.jsx)(n.code,{children:"/network.declineNode"})," will be created that sends the request to decline a node. Apart from the ",(0,o.jsx)(n.code,{children:"node.registered"})," event a new type of event can now be saved on the ",(0,o.jsx)(n.code,{children:"nodes"})," stream ",(0,o.jsx)(n.code,{children:"node.declined"}),". When calling the ",(0,o.jsx)(n.code,{children:"/network.list"}),"endpoint, an additional field ",(0,o.jsx)(n.code,{children:"decliners"})," should be used to list the decliners of each node."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var o=t(67294);const s={},i=o.createContext(s);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);