"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35642],{20893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=n(85893),s=n(11151);const i={sidebar_position:12},d="Node Status",c={id:"developer/architecture/node-connection-info",title:"Node Status",description:"Date: 11/03/2021",source:"@site/docs/developer/architecture/0012-node-connection-info.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/node-connection-info",permalink:"/docs/developer/architecture/node-connection-info",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0012-node-connection-info.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1723038437,formattedLastUpdatedAt:"Aug 7, 2024",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Decline Node Request",permalink:"/docs/developer/architecture/decline-node"},next:{title:"Snapshots of aggregable items in Blockchain",permalink:"/docs/developer/architecture/snapshot-logic"}},a={},r=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"node-status",children:"Node Status"}),"\n",(0,o.jsx)(t.p,{children:"Date: 11/03/2021"}),"\n",(0,o.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,o.jsx)(t.p,{children:"Accepted"}),"\n",(0,o.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,o.jsx)(t.p,{children:'We want to be able to display more info regarding the status of the nodes connected to the network. A useful feature would be to display if a node is still connected or not and also to see a "last seen" timestamp of the nodes.'}),"\n",(0,o.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,o.jsxs)(t.p,{children:["In order for the connection status to be displayed, an endpoint checking the multichain's ",(0,o.jsx)(t.a,{href:"https://www.multichain.com/developers/json-rpc-api/",children:"getpeerinfo"})," function would be called. This returns the nodes connected at the moment. However, since MultiChain doesn't provide information about when a node was last seen we want to implement this feature in the api. A new stream should be created called ",(0,o.jsx)(t.code,{children:"network_log"})," and every 24h an event would be saved on the stream displaying the addresses of the nodes connected at that moment. All nodes in the network perform the check but only saves it on the stream if there is no event saved for that day. This way, the check is being recorded even if one of the nodes is disconnected but it is also prevents duplicate entries."]}),"\n",(0,o.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"network.list"})," endpoint also need to be adapted to display the information mentioned above. When nodes are listed, the field ",(0,o.jsx)(t.code,{children:"isConnected"})," should also show the connection status and the ",(0,o.jsx)(t.code,{children:"lastSeen"}),", which shows on what date the node was last connected."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var o=n(67294);const s={},i=o.createContext(s);function d(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);