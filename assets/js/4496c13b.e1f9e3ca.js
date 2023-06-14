"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[75855],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53412:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c="Service-Status",l={unversionedId:"user-guide/status/status",id:"user-guide/status/status",isDocsHomePage:!1,title:"Service-Status",description:'The "Service-Status" section is used to show all connected Trubudget services, their versions and connection quality. The Status page shows every service which is meant to be connected. The check what services shall be connected is done on login. So note if a service shall be connected but isn\'t, the status page shows the servicec as "not connected", but if a service is not meant to be connected, the status page is never going to show this service.',source:"@site/docs/user-guide/status/status.md",sourceDirName:"user-guide/status",slug:"/user-guide/status/status",permalink:"/docs/user-guide/status/status",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/status/status.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1686746303,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/docs/user-guide/network/nodes"},next:{title:"Backup",permalink:"/docs/user-guide/backup"}},u=[{value:"Service-Status and Versions",id:"service-status-and-versions",children:[{value:"View all Status and Version Info",id:"view-all-status-and-version-info",children:[]},{value:"Ping Evaluation",id:"ping-evaluation",children:[]}]}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-status"},"Service-Status"),(0,i.kt)("p",null,'The "Service-Status" section is used to show all connected Trubudget services, their versions and connection quality. The Status page shows every service which is meant to be connected. The check what services shall be connected is done on login. So note if a service shall be connected but isn\'t, the status page shows the servicec as "not connected", but if a service is not meant to be connected, the status page is never going to show this service.'),(0,i.kt)("h2",{id:"service-status-and-versions"},"Service-Status and Versions"),(0,i.kt)("p",null,"The core/mandatory Trubudget set consists of 4 different components (Frontend, API, Blockchain, Multichain). Trubudget also offers a set of optional services (e.g. Email-notification, excel-export). All of these services have their own version which can be viewed on the status page in the frontend."),(0,i.kt)("h3",{id:"view-all-status-and-version-info"},"View all Status and Version Info"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")),(0,i.kt)("p",null,"These section describes how to view the status of all components of Trubudget."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Every component has its own version"),(0,i.kt)("li",{parentName:"ul"},"The api version shows the version of the api where the frontend is connected to."),(0,i.kt)("li",{parentName:"ul"},"The blockchain version shows the version of the blockchain where the alpha api is connected to.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instructions:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login into the frontend"),(0,i.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,i.kt)("li",{parentName:"ol"},'Click "Service-Status"-button to open the status page')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"show status page",src:n(69390).Z})),(0,i.kt)("h3",{id:"ping-evaluation"},"Ping Evaluation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")),(0,i.kt)("p",null,"This section describes how the different pings are calculated:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service/Component"),(0,i.kt)("th",{parentName:"tr",align:null},"Ping Calculation Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"frontend"),(0,i.kt)("td",{parentName:"tr",align:null},"The ping to the frontend would be a normal internet speed test and is not shown in Trubudget")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"api"),(0,i.kt)("td",{parentName:"tr",align:null},"The ping is calculated from frontend to api")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"blockchain"),(0,i.kt)("td",{parentName:"tr",align:null},"The ping is calculated from api to blockchain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"multichain"),(0,i.kt)("td",{parentName:"tr",align:null},"The ping is calculated from api to multichain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email-service ","[optional]"),(0,i.kt)("td",{parentName:"tr",align:null},"The ping is calculated from frontend to email-service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"export-service ","[optional]"),(0,i.kt)("td",{parentName:"tr",align:null},"The ping is calculated from frontend to export-service")))))}d.isMDXComponent=!0},69390:function(e,t,n){t.Z=n.p+"assets/images/status_page-384dd2b2b8b21f7569c92f26dbc5a99e.jpg"}}]);