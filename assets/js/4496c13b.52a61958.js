"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[75855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Service-Status",s={unversionedId:"user-guide/status/status",id:"user-guide/status/status",title:"Service-Status",description:'The "Service-Status" section is used to show all connected Trubudget services, their versions and connection quality. The Status page shows every service which is meant to be connected. The check what services shall be connected is done on login. So note if a service shall be connected but isn\'t, the status page shows the servicec as "not connected", but if a service is not meant to be connected, the status page is never going to show this service.',source:"@site/docs/user-guide/status/status.md",sourceDirName:"user-guide/status",slug:"/user-guide/status/",permalink:"/docs/user-guide/status/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/status/status.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1697196098,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/docs/user-guide/network/nodes"},next:{title:"Backup",permalink:"/docs/user-guide/backup"}},l={},c=[{value:"Service-Status and Versions",id:"service-status-and-versions",level:2},{value:"View all Status and Version Info",id:"view-all-status-and-version-info",level:3},{value:"Ping Evaluation",id:"ping-evaluation",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"service-status"},"Service-Status"),(0,r.kt)("p",null,'The "Service-Status" section is used to show all connected Trubudget services, their versions and connection quality. The Status page shows every service which is meant to be connected. The check what services shall be connected is done on login. So note if a service shall be connected but isn\'t, the status page shows the servicec as "not connected", but if a service is not meant to be connected, the status page is never going to show this service.'),(0,r.kt)("h2",{id:"service-status-and-versions"},"Service-Status and Versions"),(0,r.kt)("p",null,"The core/mandatory Trubudget set consists of 4 different components (Frontend, API, Blockchain, Multichain). Trubudget also offers a set of optional services (e.g. Email-notification, excel-export). All of these services have their own version which can be viewed on the status page in the frontend."),(0,r.kt)("h3",{id:"view-all-status-and-version-info"},"View all Status and Version Info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")),(0,r.kt)("p",null,"These section describes how to view the status of all components of Trubudget."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Every component has its own version"),(0,r.kt)("li",{parentName:"ul"},"The api version shows the version of the api where the frontend is connected to."),(0,r.kt)("li",{parentName:"ul"},"The blockchain version shows the version of the blockchain where the alpha api is connected to."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login into the frontend"),(0,r.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,r.kt)("li",{parentName:"ol"},'Click "Service-Status"-button to open the status page')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"show status page",src:n(36163).Z,width:"2594",height:"1556"})),(0,r.kt)("h3",{id:"ping-evaluation"},"Ping Evaluation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")),(0,r.kt)("p",null,"This section describes how the different pings are calculated:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service/Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Ping Calculation Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frontend"),(0,r.kt)("td",{parentName:"tr",align:null},"The ping to the frontend would be a normal internet speed test and is not shown in Trubudget")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"The ping is calculated from frontend to api")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"The ping is calculated from api to blockchain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multichain"),(0,r.kt)("td",{parentName:"tr",align:null},"The ping is calculated from api to multichain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email-service ","[optional]"),(0,r.kt)("td",{parentName:"tr",align:null},"The ping is calculated from frontend to email-service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export-service ","[optional]"),(0,r.kt)("td",{parentName:"tr",align:null},"The ping is calculated from frontend to export-service")))))}d.isMDXComponent=!0},36163:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/status_page-384dd2b2b8b21f7569c92f26dbc5a99e.jpg"}}]);