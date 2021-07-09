(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6985],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},l),{},{components:n})):i.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7466:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a=["components"],s={},c="Securing communication between nodes",u={unversionedId:"operation-administration/encryption",id:"operation-administration/encryption",isDocsHomePage:!1,title:"Securing communication between nodes",description:"Please take it with a grain of salt, and a healthy dose of scpeticism. I am not an expert in any of the topics discussed below. It's always possible that I configured something incorrectly.",source:"@site/docs/operation-administration/encryption.md",sourceDirName:"operation-administration",slug:"/operation-administration/encryption",permalink:"/trubudget-website/docs/operation-administration/encryption",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/encryption.md",version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1625822852,formattedLastUpdatedAt:"7/9/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a New Network with Docker-Compose",permalink:"/trubudget-website/docs/operation-administration/installation/create-new-network/create-new-docker-compose"},next:{title:"Logging",permalink:"/trubudget-website/docs/operation-administration/logging"}},l=[{value:"SOCKS proxy",id:"socks-proxy",children:[]},{value:"SSH tunnel",id:"ssh-tunnel",children:[]},{value:"Openssh server",id:"openssh-server",children:[]},{value:"SSHUTLE",id:"sshutle",children:[]},{value:"Ghostunnel",id:"ghostunnel",children:[]},{value:"IPTABLES + NFQUEUE",id:"iptables--nfqueue",children:[]},{value:"Modifying Multichain source code?",id:"modifying-multichain-source-code",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"securing-communication-between-nodes"},"Securing communication between nodes"),(0,r.kt)("p",null,"Please take it with a grain of salt, and a healthy dose of scpeticism. I am not an expert in any of the topics discussed below. It's always possible that I configured something incorrectly."),(0,r.kt)("h2",{id:"socks-proxy"},"SOCKS proxy"),(0,r.kt)("p",null,"MultiChain daemon has an option to connect node via proxy, which is probably SOCKS proxy.\nBitcoin, from which Multichain is forked, uses SOCKS proxy.\nUsage is  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"multichaind [chain]@[ip-address]:[port] - daemon -proxy:[user]:[pass]@[myproxy]:[myproxyport]\n")),(0,r.kt)("p",null,"The most common usage scenarios are probably to give a node running on a computer with no Internet access connectivity via proxy connected to the Internet, or to connect Bitcoin node to TOR (The Onion Router)."),(0,r.kt)("p",null,"SOCKS protocol in itself does not provide encryption. Dynamic port forwarding with SSH creates a local SOCKS proxy server. When client connects to a port associated with the SOCKS proxy, its connection is forwarded to the configured ",(0,r.kt)("em",{parentName:"p"},"ssh server"),". It is this part of connection that is encrypted, namely from ssh client to ssh server, and back. Traffic from server to destination is, and should be, the same as before it entered proxy, which in our case is unencrypted."),(0,r.kt)("p",null,"Problem which arises if SOCKS proxy would be used as a solution for adding encryption on top of unsecured HTTP without VPN is the need to create a ",(0,r.kt)("em",{parentName:"p"},"complete digraph"),", in which every multichain node is connected to every other multichain node by a bidirectional encrypted communication channel. "),(0,r.kt)("p",null,"If it was possible to automate creation of tunnels, it might be a viable option."),(0,r.kt)("h2",{id:"ssh-tunnel"},"SSH tunnel"),(0,r.kt)("p",null,"Idea behind this is to encrypt communication by using HTTPS with digital certificates.\nWith one tunnel, secure connection is estabilished between two machines. For multiple machines to communicate as peers, there needs to be a tunnel between every two machines. Number of connections is thus equal to number of edges inside a complete graph. "),(0,r.kt)("p",null,"This is not very scalable approach, and needs to be setup by users."),(0,r.kt)("h2",{id:"openssh-server"},"Openssh server"),(0,r.kt)("p",null,'Reason this was investigated is, because according to Docker documentation, "running sshd inside a container is discouraged, however, it might be still useful for certain use cases such as port forwarding. See ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/linuxserver/docker-openssh-server"},"https://github.com/linuxserver/docker-openssh-server"),' for an example of Dockerized SSH service."\n(',(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/examples/running_ssh_service/"},"https://docs.docker.com/engine/examples/running_ssh_service/"),")"),(0,r.kt)("h2",{id:"sshutle"},"SSHUTLE"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sshuttle/sshuttle"},"sshuttle")),(0,r.kt)("p",null,'This was checked mainly because a description of their project states "Transparent proxy server that works as a poor man\'s VPN."\n',(0,r.kt)("inlineCode",{parentName:"p"},"sshuttle"),' might work for connecting a client machine to a remote network, but our use case was to create a "vpn" with several peer machines.'),(0,r.kt)("h2",{id:"ghostunnel"},"Ghostunnel"),(0,r.kt)("p",null,"(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ghostunnel/ghostunnel"},"https://github.com/ghostunnel/ghostunnel"),")\nGhostunnel is a simple TLS proxy with mutual authentication support for securing non-TLS backend applications. Sounded promising, but when trying to proxy communication between two multichain nodes, server hung up instantly. "),(0,r.kt)("p",null,"Ultimately, creating separate secure connections between nodes and proxying traffic through them might be able to fully encrypt multichain P2P communication, but this solution is flawed\nby a need to open them, separately on each machine."),(0,r.kt)("h2",{id:"iptables--nfqueue"},"IPTABLES + NFQUEUE"),(0,r.kt)("p",null,"Idea here is to filter the TCP traffic going to and from a multichain node using custom ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables")," rules, intercept and modify (encrypt/decrypt) payload  using ",(0,r.kt)("inlineCode",{parentName:"p"},"nfqueue")," library and reinject modified packets."),(0,r.kt)("p",null,"Manipulation of individual TCP packets requires low-level manipulation, and then it falls to programmer's shoulders to ensure packets are well formed, headers are correct, including, but not limited to, checksum, sequence numbers."),(0,r.kt)("p",null,"Upside of this approach is, that encrypted communication goes over HTTP with no need to configure the connection itself, users don't need to do anything besides turning it on/off."),(0,r.kt)("p",null,"Packet handling is OS dependent, but since Multichain node runs inside Docker container, this is not a problem."),(0,r.kt)("h2",{id:"modifying-multichain-source-code"},"Modifying Multichain source code?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C++"),(0,r.kt)("li",{parentName:"ul"},"complexity unknown - might be less complex than packet manipulation"),(0,r.kt)("li",{parentName:"ul"},"setup of development, test and build environment"),(0,r.kt)("li",{parentName:"ul"},"does multichain license permit it?"),(0,r.kt)("li",{parentName:"ul"},"need to keep maintained/updated")))}d.isMDXComponent=!0}}]);