(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5933],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9106:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={},d="Nodes",c={unversionedId:"user-guide/network/nodes",id:"user-guide/network/nodes",isDocsHomePage:!1,title:"Nodes",description:'The "Nodes" section is used to approve other organizations and nodes. An organization can have many nodes. If a new organization wants to join the network all organizations in the network may vote for this organization. After 50% voted for the organization to join the network an organization can approve it.',source:"@site/docs/user-guide/network/nodes.md",sourceDirName:"user-guide/network",slug:"/user-guide/network/nodes",permalink:"/docs/user-guide/network/nodes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/network/nodes.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1644338492,formattedLastUpdatedAt:"2/8/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workflowitems",permalink:"/docs/user-guide/projects/workflowitem"},next:{title:"Service-Status",permalink:"/docs/user-guide/status/status"}},l=[{value:"View Nodes",id:"view-nodes",children:[]}],p={toc:l};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodes"},"Nodes"),(0,a.kt)("p",null,'The "Nodes" section is used to approve other organizations and nodes. An organization can have many nodes. If a new organization wants to join the network all organizations in the network may vote for this organization. After 50% voted for the organization to join the network an organization can approve it.'),(0,a.kt)("h2",{id:"view-nodes"},"View Nodes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,'In the top cards "New Organizations" and "New nodes for existing organizations" organizations or nodes waiting for approval are shown. If a request is not going to be approved it can be declined and will disappear from the list.'),(0,a.kt)("p",null,'The main table shows all organizations and nodes of the current network.\nIn the "Approved" tab a list of nodes that were approved and added to the network is displayed. Each organization has one entry in the list, showing the number of nodes the organization has and which access the nodes have. Each table entry can be expanded in order to view more information regarding each node in the organization. Each node has a specific address, a connection status that shows if the node is still connected to the network and a timestamp that is updated every 24h specifying when the node was last seen.'),(0,a.kt)("p",null,"The second tab shows the nodes that were declined by the current organization while also mentioning what organizations declined the node."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,a.kt)("li",{parentName:"ol"},'Click the "Nodes" menu point')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view nodes",src:n(9003).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the buttons to "approve" or "decline" requests\n',(0,a.kt)("img",{alt:"approve decline nodes",src:n(228).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'On the "Approved" tab, click the arrow icon to expand the row and see more details about the organization\'s nodes'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view approved nodes",src:n(7744).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the "Declined" tab, see the nodes declined by your organization. It is also visible what other organizations also declined the nodes.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view declined nodes",src:n(7133).Z})))}u.isMDXComponent=!0},228:function(e,t,n){"use strict";t.Z=n.p+"assets/images/approve_decline_nodes-d9af832eebb38e48b13d00dcc3f02c3b.jpg"},7744:function(e,t,n){"use strict";t.Z=n.p+"assets/images/view_approved_nodes-787c23c83a46f61e902a5d64e93b5c42.jpg"},7133:function(e,t,n){"use strict";t.Z=n.p+"assets/images/view_declined_nodes-2a8e3434af7928369bf64bd81a7cf46b.jpg"},9003:function(e,t,n){"use strict";t.Z=n.p+"assets/images/view_nodes-8b37a3a8bd1883371270462c21c19b92.jpg"}}]);