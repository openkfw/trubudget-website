"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35054],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(i),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return i?n.createElement(g,a(a({ref:t},c),{},{components:i})):n.createElement(g,a({ref:t},c))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},13346:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const r={},a="Confirmation",s={unversionedId:"user-guide/confirmation",id:"user-guide/confirmation",title:"Confirmation",description:"If an intent is requested a confirmation should be required for every action in Trubudget avoiding mistakes made by acting too quickly. Since version 1.5.0 some intents require a confirmation before they are executed.",source:"@site/docs/user-guide/confirmation.md",sourceDirName:"user-guide",slug:"/user-guide/confirmation",permalink:"/docs/user-guide/confirmation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/confirmation.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1697196098,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/docs/user-guide/backup"},next:{title:"Excel Export",permalink:"/docs/user-guide/excel-export"}},l={},u=[{value:"Supported intents",id:"supported-intents",level:3},{value:"Automatically grant view permissions",id:"automatically-grant-view-permissions",level:3},{value:"Confirmation Dialog",id:"confirmation-dialog",level:3},{value:"Dialog without actions",id:"dialog-without-actions",level:4},{value:"Dialog with actions list",id:"dialog-with-actions-list",level:4},{value:"Dialog without view permissions",id:"dialog-without-view-permissions",level:4},{value:"Dialog without grant permissions",id:"dialog-without-grant-permissions",level:4}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confirmation"},"Confirmation"),(0,o.kt)("p",null,"If an intent is requested a confirmation should be required for every action in Trubudget avoiding mistakes made by acting too quickly. Since version 1.5.0 some intents require a confirmation before they are executed."),(0,o.kt)("h3",{id:"supported-intents"},"Supported intents"),(0,o.kt)("p",null,"Following intents needs confirmation before they can be executed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"project.assign"),(0,o.kt)("li",{parentName:"ul"},"project.intent.grant"),(0,o.kt)("li",{parentName:"ul"},"project.intent.revoke"),(0,o.kt)("li",{parentName:"ul"},"subproject.assign"),(0,o.kt)("li",{parentName:"ul"},"subproject.intent.grant"),(0,o.kt)("li",{parentName:"ul"},"subproject.intent.revoke"),(0,o.kt)("li",{parentName:"ul"},"workflowitem.assign"),(0,o.kt)("li",{parentName:"ul"},"workflowitem.intent.revoke"),(0,o.kt)("li",{parentName:"ul"},"workflowitem.intent.grant")),(0,o.kt)("h3",{id:"automatically-grant-view-permissions"},"Automatically grant view permissions"),(0,o.kt)("p",null,"Trubudget has a complex permission system which often leads to misunderstandings when things are disabled because of missing permissions. The confirmation dialog shall help avoiding misunderstandings by granting required permissions automatically. If a confirmation is required, view permission checks are made to find out if the user involved needs additional permissions to view the item. In case of assigning a user it only make sense to assign a user if he/she can see the item he/she is assigned to.\nNote that revoking permissions never grant/revoke additional permissions."),(0,o.kt)("h3",{id:"confirmation-dialog"},"Confirmation Dialog"),(0,o.kt)("p",null,"A confirmation dialog can look differently depending on the permissions of users included in the process. These section describes all possible confirmation dialogs."),(0,o.kt)("h4",{id:"dialog-without-actions"},"Dialog without actions"),(0,o.kt)("p",null,"If the user has all required permissions and no additional actions have to be executed following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation dialog without actions",src:i(70153).Z,width:"2878",height:"1234"})),(0,o.kt)("h4",{id:"dialog-with-actions-list"},"Dialog with actions list"),(0,o.kt)("p",null,"If the user has all required permissions and additional actions have to be executed following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation dialog with actions",src:i(5456).Z,width:"830",height:"958"})),(0,o.kt)("h4",{id:"dialog-without-view-permissions"},"Dialog without view permissions"),(0,o.kt)("p",null,"If the user misses view permissions on any resource involved following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation without view permissions",src:i(65029).Z,width:"2878",height:"1234"})),(0,o.kt)("h4",{id:"dialog-without-grant-permissions"},"Dialog without grant permissions"),(0,o.kt)("p",null,"If the user misses grant permissions on any resource involved in all viewed additional actions following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation without grant permissions",src:i(28230).Z,width:"2878",height:"1234"})))}p.isMDXComponent=!0},5456:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/additional_actions_confirmation-c43a42589807535d82eaf84604ed54ab.jpg"},70153:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/assign_confirmation-89f1dfbd61035364e09f146411d5264b.jpg"},28230:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/assign_confirmation_grant_permission_required-01fa246d1dd83aa291de4bc6c2c84e15.jpg"},65029:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/assign_confirmation_list_permission_required-57b687065aff9aa5aea3ef0b96f4a4b9.jpg"}}]);