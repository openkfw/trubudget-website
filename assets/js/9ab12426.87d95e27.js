"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[91984],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46054:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={sidebar_position:11},c="Decline Node Request",d={unversionedId:"developer/architecture/decline-node",id:"developer/architecture/decline-node",isDocsHomePage:!1,title:"Decline Node Request",description:"Date: 11/03/2021",source:"@site/docs/developer/architecture/0011-decline-node.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/decline-node",permalink:"/docs/developer/architecture/decline-node",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0011-decline-node.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1686746303,formattedLastUpdatedAt:"6/14/2023",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Multi node setup and user management",permalink:"/docs/developer/architecture/multi-node-setup-and-user-management"},next:{title:"Node Status",permalink:"/docs/developer/architecture/node-connection-info"}},l=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decline-node-request"},"Decline Node Request"),(0,i.kt)("p",null,"Date: 11/03/2021"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"We want to be able to decline node requests. The current api logic saves an event on the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," stream for all nodes registered on the network. These nodes appear in the ui's nodes table as requests. So far, the requests that were not accepted would pile up and could not be deleted. When accepted, the nodes receive permissions from the MultiChain and can successfully connect to the system. Basic nodes receive the connect, send, receive, issue and create permissions, and admin nodes also have the mine, activate and admin permissions. For more details on these permissions check out the ",(0,i.kt)("a",{parentName:"p",href:"https://www.multichain.com/developers/permissions-management/"},"Multichain permissions management")," documentation. The opposite of the approval of nodes (which is actually a granting of permissions) would be to revoke these permissions. However, this would not lead to the desired outcome because the nodes would again appear in the list of requests as trying to connect to the network."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"As MultiChain doesn't offer a possibility to decline nodes, we want to save an event on the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," stream that mentions that a node was declined and by what organization. This way, when listing the nodes, the ones that appear in the stream as declined will be hidden from all nodes belonging to the decliner organization."),(0,i.kt)("p",null,"In order to promote transparency, every node in the network should see if a node has been declined by another orga."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"A new endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/network.declineNode")," will be created that sends the request to decline a node. Apart from the ",(0,i.kt)("inlineCode",{parentName:"p"},"node.registered")," event a new type of event can now be saved on the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," stream ",(0,i.kt)("inlineCode",{parentName:"p"},"node.declined"),". When calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"/network.list"),"endpoint, an additional field ",(0,i.kt)("inlineCode",{parentName:"p"},"decliners")," should be used to list the decliners of each node."))}p.isMDXComponent=!0}}]);