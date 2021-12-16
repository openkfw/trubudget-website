(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3190],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=r,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5696:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:10},d="Multi node setup and user management",c={unversionedId:"developer/architecture/multi-node-setup-and-user-management",id:"developer/architecture/multi-node-setup-and-user-management",isDocsHomePage:!1,title:"Multi node setup and user management",description:"Date: 2018-12-12",source:"@site/docs/developer/architecture/0010-multi-node-setup-and-user-management.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/multi-node-setup-and-user-management",permalink:"/trubudget-website/docs/developer/architecture/multi-node-setup-and-user-management",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0010-multi-node-setup-and-user-management.md",version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1639662135,formattedLastUpdatedAt:"12/16/2021",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Migration Model",permalink:"/trubudget-website/docs/developer/architecture/migration-model"},next:{title:"Decline Node Request",permalink:"/trubudget-website/docs/developer/architecture/decline-node"}},l=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[{value:"Terminology",id:"terminology",children:[]},{value:"Distributing secret keys",id:"distributing-secret-keys",children:[]},{value:"Creating a network",id:"creating-a-network",children:[]},{value:"Joining the network",id:"joining-the-network",children:[]}]},{value:"Consequences",id:"consequences",children:[]}],u={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-node-setup-and-user-management"},"Multi node setup and user management"),(0,o.kt)("p",null,"Date: 2018-12-12"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Draft"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Even though Multichain (like Bitcoin) has to be bootstrapped from a single node, we're aiming at a system design that doesn't rely on a single node being involved in most administrative tasks, such as adding additional nodes to an existing deployment."),(0,o.kt)("p",null,"This ADR discusses terminology and setup of the TruBudget network."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"Each ",(0,o.kt)("strong",{parentName:"p"},"node")," is associated to a single ",(0,o.kt)("em",{parentName:"p"},"organization")," (e.g. ACMECorp, UmbrellaCorp).\nThe ",(0,o.kt)("strong",{parentName:"p"},"origin node")," refers to the one node, which mines the first block in the whole network. Nodes that belong to the same organization are called ",(0,o.kt)("em",{parentName:"p"},"internal peers"),", nodes that belong to other organizations are called ",(0,o.kt)("em",{parentName:"p"},"external peers"),".\nThe ",(0,o.kt)("strong",{parentName:"p"},"organization's address")," is used to identify the organization in the network.\nThe ",(0,o.kt)("strong",{parentName:"p"},"private key")," is used to authenticate members of the organization, it is encrypted using the ORGANIZATION",(0,o.kt)("em",{parentName:"p"},"VAULT_SECRET.\nThe ",(0,o.kt)("strong",{parentName:"em"},"ORGANIZATION_VAULT_SECRET")," is a shared key between internal peers used to en-/decrypt the private key. It is saved in an environment variable on the API host of a node.\nA ",(0,o.kt)("strong",{parentName:"em"},"user")," is a member of an organization. To access the Trubudget API, the user is given a username and password. When performing actions (which are described by their ","_","intent"),', e.g. "project.create" or "global.addUser") the API writes this action in form of an ',(0,o.kt)("em",{parentName:"p"},"event")," to the blockchain.\nAn ",(0,o.kt)("strong",{parentName:"p"},"event"),' describes a performed action like creating a project or adding users and holds meta data like timestamp or creator.\nExample for creating a group "MyGroup" with users "user1" and "user2":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "123",\n  "intent": "global.createGroup",\n  "createdBy": "root",\n  "createdAt": "2018-12-17T14:52:11.511Z",\n  "dataVersion": 1,\n  "data": {\n    "group": {\n      "groupId": "123",\n      "displayName": "MyGroup",\n      "users": ["user1", "user2"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The first data added to the blockchain is the organization's address and (encrypted) private key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishers": ["1bNueyVy4j7V6yRSa6SDyHhkfVBHyFJ4QoAiD4"],\n  "keys": ["address"],\n  "offchain": false,\n  "available": true,\n  "data": {\n    "json": {\n      "address": "1bNueyVy4j7V6yRSa6SDyHhkfVBHyFJ4QoAiD4",\n      "privkey": "151fca5bbb689321a410c5646cc81a582c7bdade7365a806c994b530b9f28689e67b29af306996f0e95ea47a0ec66fc0bca9c78b7ce7510f71e95111a476d0cb6799b431b249d5a632ddc45aa1984f8fe8c2bcbd903bc6d9c6b8ba8458efb5b5"\n    }\n  },\n  "confirmations": 8,\n  "blocktime": 1545054793,\n  "txid": "c3ce3a37669d7ce005c7813a1e9a97152fac873cc9149ad81eadea5f78c6718e"\n}\n')),(0,o.kt)("h3",{id:"distributing-secret-keys"},"Distributing secret keys"),(0,o.kt)("p",null,"In order to prevent other organizations from using the private key, it is encrypted.\nThe encryption key is a shared secret known to all internal peers, called the ",(0,o.kt)("strong",{parentName:"p"},"organization vault secret")," (OVS).\nEach internal peer uses the address and private key of the first node of its organization after ",(0,o.kt)("a",{parentName:"p",href:"#joining-as-new-node-of-an-existing-organization"},"joining the network"),".\nEach action of any user is published to the multichain using the corresponding organization's private key ,no matter through which internal peer he/she is connected."),(0,o.kt)("p",null,"Sidenote:\nEach user has their own pair of address and private key which is held by a streamitem on the ",(0,o.kt)("em",{parentName:"p"},"users")," stream, which currently is not in use.\n(",(0,o.kt)("em",{parentName:"p"},"In the future")," whenever a user logs in, the user's address should be read from the ",(0,o.kt)("em",{parentName:"p"},"users")," stream. Then this keypair is used to publish any data using command ",(0,o.kt)("em",{parentName:"p"},"publishfrom"),")"),(0,o.kt)("h3",{id:"creating-a-network"},"Creating a network"),(0,o.kt)("p",null,"To create a new network the origin node creates the genesis block (i.e. the first block of a blockchain) and the multichain creates the organization's address and private key. The new organization creates its own stream (e.g. org:ACMECorp) and writes its address and encrypted private key to the first streamitem (","[see above]","(# Terminology))."),(0,o.kt)("h3",{id:"joining-the-network"},"Joining the network"),(0,o.kt)("h4",{id:"joining-as-new-organization"},"Joining as new organization"),(0,o.kt)("p",null,"In this case, a new organization wants to join an already existing network. Example: ACMECorp already has one note in the network and UmbrellaCorp wants to join."),(0,o.kt)("p",null,"A = Orga A (e.g. ACMECorp)\nB = Orga B (new organization, e.g. UmbrellaCorp)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"sequenceDiagram\nparticipant A as Orga A\nparticipant B as Orga B\nB->>A:connect\nA->>A:Multichain: B has no connect permission\nA->>A:Add connection attempt to dashboard\nA--\x3e>B:connection denied!\nA->>A:Admin validates the address. If more than 50% of all organizations in the network validates the address, the new organization is approved.\nB->>A:connect\nA->>A:Multichain: B has connect permission\nA--\x3e>B:connection established!\nB->>B:Initialize own organization stream\nB->>B:Encrypt own private key with *organization vault secret* and save it to its organization stream\n")),(0,o.kt)("h4",{id:"joining-as-new-node-of-an-existing-organization"},"Joining as new node of an existing organization"),(0,o.kt)("p",null,"In this case a new node from an organization that already has a node in the network wants to join. Example: ACMECorp has one node in the network and a new ACMECorp node wants to join the network.\nThe main difference here is, that you only need the approval of one admin user from another node in the network."),(0,o.kt)("p",null,"Important: Even though the new node of the organization has its own address, only the address and private key of the already existing node is used for future transactions. It is therefore absolutely necessary that both nodes have the same ORGANIZATION_VAULT_SECRET."),(0,o.kt)("p",null,"Node A = first node of Orga A (e.g. ACMECorp)\nNode A2 = second node of Orga A"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"sequenceDiagram\nparticipant A as Node A\nparticipant B as Node A2\nA->>A: creates organization stream with organization key-pair\nB->>A: connect with A2 node address\nA->>A: Multichain: A2 has no connect permission\nA->>A: Add connection attempt to dashboard\nA--\x3e>B: connection denied!\nA->>A: *One* admin of any organization in the network approves the new node.\nB->>A: connect\nB->>B: read organization key-pair from stream and import into local wallet\n")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for each type of streamitem (e.g. project, users) a specific data-version can be set.")))}p.isMDXComponent=!0}}]);