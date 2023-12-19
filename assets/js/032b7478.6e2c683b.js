"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[12814],{93285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(85893),s=t(11151);const a={sidebar_position:6},o="Multi-node setup",r={id:"developer/architecture/multi-node-setup",title:"Multi-node setup",description:"Date: 05/07/2018",source:"@site/docs/developer/architecture/0006-multi-node-setup.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/multi-node-setup",permalink:"/docs/developer/architecture/multi-node-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0006-multi-node-setup.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1702996314,formattedLastUpdatedAt:"Dec 19, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Workflowitem-ordering",permalink:"/docs/developer/architecture/workflowitem-ordering"},next:{title:"Basic architecture overview",permalink:"/docs/developer/architecture/execution-architecture-overview"}},d={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Blockchain Addresses",id:"blockchain-addresses",level:3},{value:"Distributing secret keys",id:"distributing-secret-keys",level:3},{value:"Joining the network",id:"joining-the-network",level:3},{value:"Trusted vs. managed access",id:"trusted-vs-managed-access",level:4},{value:"User Management",id:"user-management",level:3},{value:"Consequences",id:"consequences",level:2}];function c(e){const n={a:"a",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"multi-node-setup",children:"Multi-node setup"}),"\n",(0,i.jsx)(n.p,{children:"Date: 05/07/2018"}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsxs)(n.p,{children:["Superceded by ",(0,i.jsx)(n.a,{href:"./0010-multi-node-setup-and-user-management",children:"multi node setup"})]}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"Even though Multichain (like Bitcoin) has to be bootstrapped from a single node, we're aiming at a system design that doesn't rely on a single party being involved in most administrative tasks, such as adding additional nodes to an existing deployment."}),"\n",(0,i.jsx)(n.p,{children:"This ADR discusses terminology and setup of the TruBudget network."}),"\n",(0,i.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsx)(n.h3,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.em,{children:"node"})," is associated to a single ",(0,i.jsx)(n.em,{children:"organization"})," (e.g. ACMECorp, UmbrellaCorp), including the special ",(0,i.jsx)(n.em,{children:"origin node"}),", which mines the first block in the network. Nodes that belong to the same organization are called ",(0,i.jsx)(n.em,{children:"internal peers"}),"; nodes that belong to other organizations are called ",(0,i.jsx)(n.em,{children:"external peers"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"blockchain-addresses",children:"Blockchain Addresses"}),"\n",(0,i.jsx)(n.p,{children:"User authenticate themselves using username and password, but internally every user is assigned a blockchain address, along with a public and a secret key. On the chain, each action is then associated with the user's key and the associated permissions, which makes operations secure and auditing reliable."}),"\n",(0,i.jsx)(n.p,{children:"With Multichain, each node owns a unique address, generated when started the first time (its wallet address). In day-to-day operations, those addresses are not used and only the address of the first node of an organization is put on the chain (and thus propagated among nodes)."}),"\n",(0,i.jsxs)(n.p,{children:["By mining the genesis block (that is, the first block in the network), the origin node gets ",(0,i.jsx)(n.em,{children:"full"})," permissions on ",(0,i.jsx)(n.em,{children:"everything"}),", which includes exclusive access to the ",(0,i.jsx)(n.code,{children:"root"})," stream. The permissions are bound to the origin-node's address; we call the associated key ",(0,i.jsx)(n.em,{children:"origin root key"})," (ORK). The ORK is not put on the chain and should be backed up by the administrator; it is also not used in day-to-day operations. Instead, the ORK is used to create another node address that holds necessary permissions; that key is called ",(0,i.jsx)(n.em,{children:"organization key"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"distributing-secret-keys",children:"Distributing secret keys"}),"\n",(0,i.jsxs)(n.p,{children:["The organization key is put on the chain, into a stream-item on the organization's stream, called the ",(0,i.jsx)(n.em,{children:"vault"}),". The vault holds the private keys of all (technical and non-technical) users of the organization. In order to prevent other organizations from using them, the vault needs to be encrypted. The encryption key is a shared secret known to all internal peers, called the ",(0,i.jsx)(n.em,{children:"organization vault secret"})," (OVS). Whenever ",(0,i.jsx)(n.del,{children:"the vault is updated, all internal peers import new keys into their wallet (using a walletnotify script)"})," a user logs in, the user's private key is read from the vault and imported into the node's wallet, which allows users to move freely between their organization's nodes."]}),"\n",(0,i.jsx)(n.h3,{id:"joining-the-network",children:"Joining the network"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways an organization can join the network:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The organization maintains the origin node, in which case the ORK is used to create the organization key (see above)."}),"\n",(0,i.jsxs)(n.li,{children:["For all other organizations, the first node needs to connect to any node of an organization that has ",(0,i.jsx)(n.em,{children:"trusted access"})," (see below)."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"trusted-vs-managed-access",children:"Trusted vs. managed access"}),"\n",(0,i.jsxs)(n.p,{children:["In the TruBudget network, there are two types of organizational access to the network: ",(0,i.jsx)(n.em,{children:"admin"})," and ",(0,i.jsx)(n.em,{children:"basic"}),". The main difference is that with admin the node can also ",(0,i.jsx)(n.em,{children:"mine"}),' and write to so-called "admin" streams. In TruBudget, each organization should have exactly one address (the ',(0,i.jsx)(n.em,{children:"organization address"}),") with admin permissions; all other node addresses should have basic access only. This ensures that a single organization cannot manipulate the network without other organizations noticing."]}),"\n",(0,i.jsxs)(n.p,{children:["In other words, connecting as a new organization ",(0,i.jsx)(n.strong,{children:"B"})," to an existing TruBudget network of organization ",(0,i.jsx)(n.strong,{children:"A"})," works as follows:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"A"})," gives ",(0,i.jsx)(n.strong,{children:"B"})," the API URL of any one of their nodes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"B"})," runs TruBudget for the first time, pointing it to the given URL. Since the instance address is unknown to ",(0,i.jsx)(n.strong,{children:"A"}),"'s node, the connection fails; instead, the administrator of ",(0,i.jsx)(n.strong,{children:"A"})," will see the connection request in TruBudget's connection dashboard. Meanwhile, the node of ",(0,i.jsx)(n.strong,{children:"B"})," continues its connection attempts."]}),"\n",(0,i.jsxs)(n.li,{children:["The administrator of ",(0,i.jsx)(n.strong,{children:"A"})," verifies the address by calling ",(0,i.jsx)(n.strong,{children:"B"}),', asking them for confirmation. The administrator then chooses "trusted access" for the connection request. The address of the node of ',(0,i.jsx)(n.strong,{children:"B"})," is now ",(0,i.jsx)(n.strong,{children:"B"}),"'s organization key."]}),"\n",(0,i.jsxs)(n.li,{children:["Now that the ",(0,i.jsx)(n.code,{children:"connect"})," permission has been granted, ",(0,i.jsx)(n.strong,{children:"B"}),"'s node is finally able to establish a connection, joining the network and fetching all existing data in the process. Since the organization stream for ",(0,i.jsx)(n.strong,{children:"B"})," is not yet present, the node infers it's ",(0,i.jsx)(n.strong,{children:"B"}),'\'s first node; consequently, the node creates the organization stream and initializes the "vault" stream-item with its encrypted private key (= organization key).']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With managed access, the connecting organization cannot execute the last step itself."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mermaid",children:'sequenceDiagram\nparticipant A as Orga A (trusted access)\nparticipant B as Orga B, node 1\nparticipant B2 as Orga B, node 2\nB->>A:connect\nA->>A:Multichain: B has no connect permission\nA->>A:Add connection attempt to dashboard\nA--\x3e>B:connection denied!\nA->>A:Admin validates the address, approves "trusted access"\nB->>A:connect\nA->>A:Multichain: B has connect permission\nA--\x3e>B:connection established!\nB->>B:Initialize own organization stream\nB->>B:Encrypt own private key with vault key and set as vault\nB2->>B:connect\nnote over B,B2:same procedure, except node 2 uses existing organization stream and doesn\'t add own private key to vault (it imports the existing one instead).\n'})}),"\n",(0,i.jsx)(n.h3,{id:"user-management",children:"User Management"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"N Users <-> 1 Organization"})}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned above, each organization's users have their addresses and private keys stored in the organization's vault, which is encrypted using the organization vault secret (OVS). The OVS is initialized using the ",(0,i.jsx)(n.code,{children:"VAULT_SECRET"})," environment variable."]}),"\n",(0,i.jsx)(n.p,{children:"Consequently, all client-related operations are only possible on nodes that have the right OVS set in their environment (typically equal to the nodes that belong to the same organization as the requesting user):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"user creation, as it directly modifies the vault"}),"\n",(0,i.jsx)(n.li,{children:"authentication, since it causes the user's private key to be imported in the node's wallet, which in turn requires read access to the vault"}),"\n",(0,i.jsx)(n.li,{children:"all other API calls, as the token is always augmented with the user's private key, which requires read access to the vault"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To ease testing (and because it doesn't affect production), a node always tries to decrypt the vault that belongs to the user's organization, without checking first whether it belongs to that organization itself. A node always belongs to a single organization, but using the same OVSs for all organizations enables a node to cater all API requests (not to be done in production, because then all nodes have all keys of all users of all organizations in their wallet, basically circumventing all other security mechanisms)."}),"\n",(0,i.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(n.p,{children:"This ADR describes the general idea behind the setup."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);