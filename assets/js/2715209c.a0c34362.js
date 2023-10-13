"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),k=a,h=p["".concat(c,".").concat(k)]||p[k]||d[k]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Backup",l={unversionedId:"user-guide/backup",id:"user-guide/backup",title:"Backup",description:"Only the admin user (root) is allowed to create and restore backups of blockchain states.",source:"@site/docs/user-guide/backup.md",sourceDirName:"user-guide",slug:"/user-guide/backup",permalink:"/docs/user-guide/backup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/backup.md",tags:[],version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1697196969,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service-Status",permalink:"/docs/user-guide/status/"},next:{title:"Confirmation",permalink:"/docs/user-guide/confirmation"}},c={},u=[{value:"Create a Backup",id:"create-a-backup",level:3},{value:"Restore a Backup",id:"restore-a-backup",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"backup"},"Backup"),(0,a.kt)("p",null,"Only the admin user (root) is allowed to create and restore backups of blockchain states."),(0,a.kt)("p",null,"While creating or restoring a backup the blockchain needs to be stopped. ",(0,a.kt)("strong",{parentName:"p"},"During that time errors might pop up in the frontend"),". Furthermore the MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use, that should be the case using the default configuration."),(0,a.kt)("h3",{id:"create-a-backup"},"Create a Backup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,"These section describes how to create a gzip file which contains the current blockchain state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login into the frontend using the ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user"),(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Download")," Button to create a backup of the current blockchain state"),(0,a.kt)("li",{parentName:"ol"},"Once the backup.gz file is downloaded you can rename it to whatever name you want")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create backup",src:r(69643).Z,width:"2184",height:"1232"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Only the ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user is allowed to restore backups of blockchain states."),(0,a.kt)("li",{parentName:"ul"},"The MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use."))),(0,a.kt)("h3",{id:"restore-a-backup"},"Restore a Backup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,"These section describes how to restore a blockchain state with an backup file created/downloaded before."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login into the frontend using the ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user"),(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner to open the side-navigation-bar"),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Restore")," Button"),(0,a.kt)("li",{parentName:"ol"},"Select the backup that you want to restore"),(0,a.kt)("li",{parentName:"ol"},"When the backup is successfully restored you will be logged out\nYou are now able to login with whatever user you want and should see the projects & subprojects from your backup.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"restore backup",src:r(73631).Z,width:"2250",height:"1266"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Only the ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user is allowed to restore backups of blockchain states."),(0,a.kt)("li",{parentName:"ul"},"The MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use."),(0,a.kt)("li",{parentName:"ul"},"During restoring errors might pop up in the frontend of other users connected"),(0,a.kt)("li",{parentName:"ul"},"After successfully restored the blockchain state, the user is logged out."))))}d.isMDXComponent=!0},69643:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_backup-313d20874f80d32458a991889af30198.jpg"},73631:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/restore_backup-e016b944071472bacccb0c5320f64f68.jpg"}}]);