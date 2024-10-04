"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[23190],{70176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(85893),i=t(11151);const o={sidebar_position:10},r="Multi node setup and user management",s={id:"developer/architecture/multi-node-setup-and-user-management",title:"Multi node setup and user management",description:"Date: 2018-12-12",source:"@site/docs/developer/architecture/0010-multi-node-setup-and-user-management.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/multi-node-setup-and-user-management",permalink:"/docs/developer/architecture/multi-node-setup-and-user-management",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0010-multi-node-setup-and-user-management.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1728052387,formattedLastUpdatedAt:"Oct 4, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Migration Model",permalink:"/docs/developer/architecture/migration-model"},next:{title:"Decline Node Request",permalink:"/docs/developer/architecture/decline-node"}},d={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Distributing secret keys",id:"distributing-secret-keys",level:3},{value:"Creating a network",id:"creating-a-network",level:3},{value:"Joining the network",id:"joining-the-network",level:3},{value:"Joining as new organization",id:"joining-as-new-organization",level:4},{value:"Joining as new node of an existing organization",id:"joining-as-new-node-of-an-existing-organization",level:4},{value:"Consequences",id:"consequences",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"multi-node-setup-and-user-management",children:"Multi node setup and user management"}),"\n",(0,a.jsx)(n.p,{children:"Date: 2018-12-12"}),"\n",(0,a.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,a.jsx)(n.p,{children:"Draft"}),"\n",(0,a.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,a.jsx)(n.p,{children:"Even though Multichain (like Bitcoin) has to be bootstrapped from a single node, we're aiming at a system design that doesn't rely on a single node being involved in most administrative tasks, such as adding additional nodes to an existing deployment."}),"\n",(0,a.jsx)(n.p,{children:"This ADR discusses terminology and setup of the TruBudget network."}),"\n",(0,a.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,a.jsx)(n.h3,{id:"terminology",children:"Terminology"}),"\n",(0,a.jsxs)(n.p,{children:["Each ",(0,a.jsx)(n.strong,{children:"node"})," is associated to a single ",(0,a.jsx)(n.em,{children:"organization"})," (e.g. ACMECorp, UmbrellaCorp).\nThe ",(0,a.jsx)(n.strong,{children:"origin node"})," refers to the one node, which mines the first block in the whole network. Nodes that belong to the same organization are called ",(0,a.jsx)(n.em,{children:"internal peers"}),", nodes that belong to other organizations are called ",(0,a.jsx)(n.em,{children:"external peers"}),".\nThe ",(0,a.jsx)(n.strong,{children:"organization's address"})," is used to identify the organization in the network.\nThe ",(0,a.jsx)(n.strong,{children:"private key"})," is used to authenticate members of the organization, it is encrypted using the ORGANIZATION",(0,a.jsxs)(n.em,{children:["VAULT_SECRET.\nThe ",(0,a.jsx)(n.strong,{children:"ORGANIZATION_VAULT_SECRET"})," is a shared key between internal peers used to en-/decrypt the private key. It is saved in an environment variable on the API host of a node.\nA ",(0,a.jsx)(n.strong,{children:"user"})," is a member of an organization. To access the Trubudget API, the user is given a username and password. When performing actions (which are described by their _intent"]}),', e.g. "project.create" or "global.addUser") the API writes this action in form of an ',(0,a.jsx)(n.em,{children:"event"})," to the blockchain.\nAn ",(0,a.jsx)(n.strong,{children:"event"}),' describes a performed action like creating a project or adding users and holds meta data like timestamp or creator.\nExample for creating a group "MyGroup" with users "user1" and "user2":']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "key": "123",\n  "intent": "global.createGroup",\n  "createdBy": "root",\n  "createdAt": "2018-12-17T14:52:11.511Z",\n  "dataVersion": 1,\n  "data": {\n    "group": {\n      "groupId": "123",\n      "displayName": "MyGroup",\n      "users": ["user1", "user2"]\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The first data added to the blockchain is the organization's address and (encrypted) private key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "publishers": ["1bNueyVy4j7V6yRSa6SDyHhkfVBHyFJ4QoAiD4"],\n  "keys": ["address"],\n  "offchain": false,\n  "available": true,\n  "data": {\n    "json": {\n      "address": "1bNueyVy4j7V6yRSa6SDyHhkfVBHyFJ4QoAiD4",\n      "privkey": "151fca5bbb689321a410c5646cc81a582c7bdade7365a806c994b530b9f28689e67b29af306996f0e95ea47a0ec66fc0bca9c78b7ce7510f71e95111a476d0cb6799b431b249d5a632ddc45aa1984f8fe8c2bcbd903bc6d9c6b8ba8458efb5b5"\n    }\n  },\n  "confirmations": 8,\n  "blocktime": 1545054793,\n  "txid": "c3ce3a37669d7ce005c7813a1e9a97152fac873cc9149ad81eadea5f78c6718e"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"distributing-secret-keys",children:"Distributing secret keys"}),"\n",(0,a.jsxs)(n.p,{children:["In order to prevent other organizations from using the private key, it is encrypted.\nThe encryption key is a shared secret known to all internal peers, called the ",(0,a.jsx)(n.strong,{children:"organization vault secret"})," (OVS).\nEach internal peer uses the address and private key of the first node of its organization after ",(0,a.jsx)(n.a,{href:"#joining-as-new-node-of-an-existing-organization",children:"joining the network"}),".\nEach action of any user is published to the multichain using the corresponding organization's private key ,no matter through which internal peer he/she is connected."]}),"\n",(0,a.jsxs)(n.p,{children:["Sidenote:\nEach user has their own pair of address and private key which is held by a streamitem on the ",(0,a.jsx)(n.em,{children:"users"})," stream, which currently is not in use.\n(",(0,a.jsx)(n.em,{children:"In the future"})," whenever a user logs in, the user's address should be read from the ",(0,a.jsx)(n.em,{children:"users"})," stream. Then this keypair is used to publish any data using command ",(0,a.jsx)(n.em,{children:"publishfrom"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-network",children:"Creating a network"}),"\n",(0,a.jsxs)(n.p,{children:["To create a new network the origin node creates the genesis block (i.e. the first block of a blockchain) and the multichain creates the organization's address and private key. The new organization creates its own stream (e.g. org",":ACMECorp",") and writes its address and encrypted private key to the first streamitem ([see above](# Terminology))."]}),"\n",(0,a.jsx)(n.h3,{id:"joining-the-network",children:"Joining the network"}),"\n",(0,a.jsx)(n.h4,{id:"joining-as-new-organization",children:"Joining as new organization"}),"\n",(0,a.jsx)(n.p,{children:"In this case, a new organization wants to join an already existing network. Example: ACMECorp already has one note in the network and UmbrellaCorp wants to join."}),"\n",(0,a.jsx)(n.p,{children:"A = Orga A (e.g. ACMECorp)\nB = Orga B (new organization, e.g. UmbrellaCorp)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mermaid",children:"sequenceDiagram\nparticipant A as Orga A\nparticipant B as Orga B\nB->>A:connect\nA->>A:Multichain: B has no connect permission\nA->>A:Add connection attempt to dashboard\nA--\x3e>B:connection denied!\nA->>A:Admin validates the address. If more than 50% of all organizations in the network validates the address, the new organization is approved.\nB->>A:connect\nA->>A:Multichain: B has connect permission\nA--\x3e>B:connection established!\nB->>B:Initialize own organization stream\nB->>B:Encrypt own private key with *organization vault secret* and save it to its organization stream\n"})}),"\n",(0,a.jsx)(n.h4,{id:"joining-as-new-node-of-an-existing-organization",children:"Joining as new node of an existing organization"}),"\n",(0,a.jsx)(n.p,{children:"In this case a new node from an organization that already has a node in the network wants to join. Example: ACMECorp has one node in the network and a new ACMECorp node wants to join the network.\nThe main difference here is, that you only need the approval of one admin user from another node in the network."}),"\n",(0,a.jsx)(n.p,{children:"Important: Even though the new node of the organization has its own address, only the address and private key of the already existing node is used for future transactions. It is therefore absolutely necessary that both nodes have the same ORGANIZATION_VAULT_SECRET."}),"\n",(0,a.jsx)(n.p,{children:"Node A = first node of Orga A (e.g. ACMECorp)\nNode A2 = second node of Orga A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mermaid",children:"sequenceDiagram\nparticipant A as Node A\nparticipant B as Node A2\nA->>A: creates organization stream with organization key-pair\nB->>A: connect with A2 node address\nA->>A: Multichain: A2 has no connect permission\nA->>A: Add connection attempt to dashboard\nA--\x3e>B: connection denied!\nA->>A: *One* admin of any organization in the network approves the new node.\nB->>A: connect\nB->>B: read organization key-pair from stream and import into local wallet\n"})}),"\n",(0,a.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"for each type of streamitem (e.g. project, users) a specific data-version can be set."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);