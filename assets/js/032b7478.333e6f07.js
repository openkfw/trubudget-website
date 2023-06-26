"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[12814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:6},r="Multi-node setup",s={unversionedId:"developer/architecture/multi-node-setup",id:"developer/architecture/multi-node-setup",title:"Multi-node setup",description:"Date: 05/07/2018",source:"@site/docs/developer/architecture/0006-multi-node-setup.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/multi-node-setup",permalink:"/docs/developer/architecture/multi-node-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0006-multi-node-setup.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Workflowitem-ordering",permalink:"/docs/developer/architecture/workflowitem-ordering"},next:{title:"Basic architecture overview",permalink:"/docs/developer/architecture/execution-architecture-overview"}},l={},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Blockchain Addresses",id:"blockchain-addresses",level:3},{value:"Distributing secret keys",id:"distributing-secret-keys",level:3},{value:"Joining the network",id:"joining-the-network",level:3},{value:"Trusted vs. managed access",id:"trusted-vs-managed-access",level:4},{value:"User Management",id:"user-management",level:3},{value:"Consequences",id:"consequences",level:2}],c={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multi-node-setup"},"Multi-node setup"),(0,i.kt)("p",null,"Date: 05/07/2018"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Superceded by ",(0,i.kt)("a",{parentName:"p",href:"./0010-multi-node-setup-and-user-management"},"multi node setup")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Even though Multichain (like Bitcoin) has to be bootstrapped from a single node, we're aiming at a system design that doesn't rely on a single party being involved in most administrative tasks, such as adding additional nodes to an existing deployment."),(0,i.kt)("p",null,"This ADR discusses terminology and setup of the TruBudget network."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("h3",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"Each ",(0,i.kt)("em",{parentName:"p"},"node")," is associated to a single ",(0,i.kt)("em",{parentName:"p"},"organization")," (e.g. ACMECorp, UmbrellaCorp), including the special ",(0,i.kt)("em",{parentName:"p"},"origin node"),", which mines the first block in the network. Nodes that belong to the same organization are called ",(0,i.kt)("em",{parentName:"p"},"internal peers"),"; nodes that belong to other organizations are called ",(0,i.kt)("em",{parentName:"p"},"external peers"),"."),(0,i.kt)("h3",{id:"blockchain-addresses"},"Blockchain Addresses"),(0,i.kt)("p",null,"User authenticate themselves using username and password, but internally every user is assigned a blockchain address, along with a public and a secret key. On the chain, each action is then associated with the user's key and the associated permissions, which makes operations secure and auditing reliable."),(0,i.kt)("p",null,"With Multichain, each node owns a unique address, generated when started the first time (its wallet address). In day-to-day operations, those addresses are not used and only the address of the first node of an organization is put on the chain (and thus propagated among nodes)."),(0,i.kt)("p",null,"By mining the genesis block (that is, the first block in the network), the origin node gets ",(0,i.kt)("em",{parentName:"p"},"full")," permissions on ",(0,i.kt)("em",{parentName:"p"},"everything"),", which includes exclusive access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," stream. The permissions are bound to the origin-node's address; we call the associated key ",(0,i.kt)("em",{parentName:"p"},"origin root key")," (ORK). The ORK is not put on the chain and should be backed up by the administrator; it is also not used in day-to-day operations. Instead, the ORK is used to create another node address that holds necessary permissions; that key is called ",(0,i.kt)("em",{parentName:"p"},"organization key"),"."),(0,i.kt)("h3",{id:"distributing-secret-keys"},"Distributing secret keys"),(0,i.kt)("p",null,"The organization key is put on the chain, into a stream-item on the organization's stream, called the ",(0,i.kt)("em",{parentName:"p"},"vault"),". The vault holds the private keys of all (technical and non-technical) users of the organization. In order to prevent other organizations from using them, the vault needs to be encrypted. The encryption key is a shared secret known to all internal peers, called the ",(0,i.kt)("em",{parentName:"p"},"organization vault secret")," (OVS). Whenever ",(0,i.kt)("del",{parentName:"p"},"the vault is updated, all internal peers import new keys into their wallet (using a walletnotify script)")," a user logs in, the user's private key is read from the vault and imported into the node's wallet, which allows users to move freely between their organization's nodes."),(0,i.kt)("h3",{id:"joining-the-network"},"Joining the network"),(0,i.kt)("p",null,"There are two ways an organization can join the network:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The organization maintains the origin node, in which case the ORK is used to create the organization key (see above)."),(0,i.kt)("li",{parentName:"ol"},"For all other organizations, the first node needs to connect to any node of an organization that has ",(0,i.kt)("em",{parentName:"li"},"trusted access")," (see below).")),(0,i.kt)("h4",{id:"trusted-vs-managed-access"},"Trusted vs. managed access"),(0,i.kt)("p",null,"In the TruBudget network, there are two types of organizational access to the network: ",(0,i.kt)("em",{parentName:"p"},"admin")," and ",(0,i.kt)("em",{parentName:"p"},"basic"),". The main difference is that with admin the node can also ",(0,i.kt)("em",{parentName:"p"},"mine"),' and write to so-called "admin" streams. In TruBudget, each organization should have exactly one address (the ',(0,i.kt)("em",{parentName:"p"},"organization address"),") with admin permissions; all other node addresses should have basic access only. This ensures that a single organization cannot manipulate the network without other organizations noticing."),(0,i.kt)("p",null,"In other words, connecting as a new organization ",(0,i.kt)("strong",{parentName:"p"},"B")," to an existing TruBudget network of organization ",(0,i.kt)("strong",{parentName:"p"},"A")," works as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"A")," gives ",(0,i.kt)("strong",{parentName:"li"},"B")," the API URL of any one of their nodes."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"B")," runs TruBudget for the first time, pointing it to the given URL. Since the instance address is unknown to ",(0,i.kt)("strong",{parentName:"li"},"A"),"'s node, the connection fails; instead, the administrator of ",(0,i.kt)("strong",{parentName:"li"},"A")," will see the connection request in TruBudget's connection dashboard. Meanwhile, the node of ",(0,i.kt)("strong",{parentName:"li"},"B")," continues its connection attempts."),(0,i.kt)("li",{parentName:"ol"},"The administrator of ",(0,i.kt)("strong",{parentName:"li"},"A")," verifies the address by calling ",(0,i.kt)("strong",{parentName:"li"},"B"),', asking them for confirmation. The administrator then chooses "trusted access" for the connection request. The address of the node of ',(0,i.kt)("strong",{parentName:"li"},"B")," is now ",(0,i.kt)("strong",{parentName:"li"},"B"),"'s organization key."),(0,i.kt)("li",{parentName:"ol"},"Now that the ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," permission has been granted, ",(0,i.kt)("strong",{parentName:"li"},"B"),"'s node is finally able to establish a connection, joining the network and fetching all existing data in the process. Since the organization stream for ",(0,i.kt)("strong",{parentName:"li"},"B")," is not yet present, the node infers it's ",(0,i.kt)("strong",{parentName:"li"},"B"),'\'s first node; consequently, the node creates the organization stream and initializes the "vault" stream-item with its encrypted private key (= organization key).')),(0,i.kt)("p",null,"With managed access, the connecting organization cannot execute the last step itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},'sequenceDiagram\nparticipant A as Orga A (trusted access)\nparticipant B as Orga B, node 1\nparticipant B2 as Orga B, node 2\nB->>A:connect\nA->>A:Multichain: B has no connect permission\nA->>A:Add connection attempt to dashboard\nA--\x3e>B:connection denied!\nA->>A:Admin validates the address, approves "trusted access"\nB->>A:connect\nA->>A:Multichain: B has connect permission\nA--\x3e>B:connection established!\nB->>B:Initialize own organization stream\nB->>B:Encrypt own private key with vault key and set as vault\nB2->>B:connect\nnote over B,B2:same procedure, except node 2 uses existing organization stream and doesn\'t add own private key to vault (it imports the existing one instead).\n')),(0,i.kt)("h3",{id:"user-management"},"User Management"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"N Users <-> 1 Organization")),(0,i.kt)("p",null,"As mentioned above, each organization's users have their addresses and private keys stored in the organization's vault, which is encrypted using the organization vault secret (OVS). The OVS is initialized using the ",(0,i.kt)("inlineCode",{parentName:"p"},"VAULT_SECRET")," environment variable."),(0,i.kt)("p",null,"Consequently, all client-related operations are only possible on nodes that have the right OVS set in their environment (typically equal to the nodes that belong to the same organization as the requesting user):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"user creation, as it directly modifies the vault"),(0,i.kt)("li",{parentName:"ul"},"authentication, since it causes the user's private key to be imported in the node's wallet, which in turn requires read access to the vault"),(0,i.kt)("li",{parentName:"ul"},"all other API calls, as the token is always augmented with the user's private key, which requires read access to the vault")),(0,i.kt)("p",null,"To ease testing (and because it doesn't affect production), a node always tries to decrypt the vault that belongs to the user's organization, without checking first whether it belongs to that organization itself. A node always belongs to a single organization, but using the same OVSs for all organizations enables a node to cater all API requests (not to be done in production, because then all nodes have all keys of all users of all organizations in their wallet, basically circumventing all other security mechanisms)."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"This ADR describes the general idea behind the setup."))}h.isMDXComponent=!0}}]);