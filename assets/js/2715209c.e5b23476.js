"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),k=r,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55443:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s="Backup",l={unversionedId:"user-guide/backup",id:"user-guide/backup",isDocsHomePage:!1,title:"Backup",description:"Only the admin user (root) is allowed to create and restore backups of blockchain states.",source:"@site/docs/user-guide/backup.md",sourceDirName:"user-guide",slug:"/user-guide/backup",permalink:"/docs/user-guide/backup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/backup.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687433129,formattedLastUpdatedAt:"6/22/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service-Status",permalink:"/docs/user-guide/status/status"},next:{title:"Confirmation",permalink:"/docs/user-guide/confirmation"}},u=[{value:"Create a Backup",id:"create-a-backup",children:[]},{value:"Restore a Backup",id:"restore-a-backup",children:[]}],p={toc:u},d="wrapper";function k(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backup"},"Backup"),(0,o.kt)("p",null,"Only the admin user (root) is allowed to create and restore backups of blockchain states."),(0,o.kt)("p",null,"While creating or restoring a backup the blockchain needs to be stopped. ",(0,o.kt)("strong",{parentName:"p"},"During that time errors might pop up in the frontend"),". Furthermore the MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use, that should be the case using the default configuration."),(0,o.kt)("h3",{id:"create-a-backup"},"Create a Backup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"These section describes how to create a gzip file which contains the current blockchain state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instructions:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login into the frontend using the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user"),(0,o.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Download")," Button to create a backup of the current blockchain state"),(0,o.kt)("li",{parentName:"ol"},"Once the backup.gz file is downloaded you can rename it to whatever name you want")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create backup",src:n(42060).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Only the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user is allowed to restore backups of blockchain states."),(0,o.kt)("li",{parentName:"ul"},"The MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use.")))),(0,o.kt)("h3",{id:"restore-a-backup"},"Restore a Backup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"These section describes how to restore a blockchain state with an backup file created/downloaded before."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instructions:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login into the frontend using the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user"),(0,o.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Restore")," Button"),(0,o.kt)("li",{parentName:"ol"},"Select the backup that you want to restore"),(0,o.kt)("li",{parentName:"ol"},"When the backup is successfully restored you will be logged out\nYou are now able to login with whatever user you want and should see the projects & subprojects from your backup.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"restore backup",src:n(42300).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Only the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user is allowed to restore backups of blockchain states."),(0,o.kt)("li",{parentName:"ul"},"The MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use."),(0,o.kt)("li",{parentName:"ul"},"During restoring errors might pop up in the frontend of other users connected"),(0,o.kt)("li",{parentName:"ul"},"After successfully restored the blockchain state, the user is logged out.")))))}k.isMDXComponent=!0},42060:function(e,t,n){t.Z=n.p+"assets/images/create_backup-313d20874f80d32458a991889af30198.jpg"},42300:function(e,t,n){t.Z=n.p+"assets/images/restore_backup-e016b944071472bacccb0c5320f64f68.jpg"}}]);