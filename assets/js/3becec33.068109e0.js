(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5054],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return m}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(i),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return i?n.createElement(f,a(a({ref:t},c),{},{components:i})):n.createElement(f,a({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},6817:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=i(2122),r=i(9756),o=(i(7294),i(3905)),a=["components"],s={},u="Confirmation",l={unversionedId:"user-guide/confirmation",id:"user-guide/confirmation",isDocsHomePage:!1,title:"Confirmation",description:"If an intent is requested a confirmation should be required for every action in Trubudget avoiding mistakes made by acting too quickly. Since version 1.5.0 some intents require a confirmation before they are executed.",source:"@site/docs/user-guide/confirmation.md",sourceDirName:"user-guide",slug:"/user-guide/confirmation",permalink:"/trubudget-website/docs/user-guide/confirmation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/confirmation.md",version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1639662135,formattedLastUpdatedAt:"12/16/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/trubudget-website/docs/user-guide/backup"},next:{title:"Excel Export",permalink:"/trubudget-website/docs/user-guide/excel-export"}},c=[{value:"Supported intents",id:"supported-intents",children:[]},{value:"Automatically grant view permissions",id:"automatically-grant-view-permissions",children:[]},{value:"Confirmation Dialog",id:"confirmation-dialog",children:[]}],d={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confirmation"},"Confirmation"),(0,o.kt)("p",null,"If an intent is requested a confirmation should be required for every action in Trubudget avoiding mistakes made by acting too quickly. Since version 1.5.0 some intents require a confirmation before they are executed."),(0,o.kt)("h3",{id:"supported-intents"},"Supported intents"),(0,o.kt)("p",null,"Following intents needs confirmation before they can be executed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"project.assign"),(0,o.kt)("li",{parentName:"ul"},"project.intent.grant"),(0,o.kt)("li",{parentName:"ul"},"project.intent.revoke"),(0,o.kt)("li",{parentName:"ul"},"subproject.assign"),(0,o.kt)("li",{parentName:"ul"},"subproject.intent.grant"),(0,o.kt)("li",{parentName:"ul"},"subproject.intent.revoke"),(0,o.kt)("li",{parentName:"ul"},"workflowitem.assign"),(0,o.kt)("li",{parentName:"ul"},"workflowitem.intent.revoke"),(0,o.kt)("li",{parentName:"ul"},"workflowitem.intent.grant")),(0,o.kt)("h3",{id:"automatically-grant-view-permissions"},"Automatically grant view permissions"),(0,o.kt)("p",null,"Trubudget has a complex permission system which often leads to misunderstandings when things are disabled because of missing permissions. The confirmation dialog shall help avoiding misunderstandings by granting required permissions automatically. If a confirmation is required, view permission checks are made to find out if the user involved needs additional permissions to view the item. In case of assigning a user it only make sense to assign a user if he/she can see the item he/she is assigned to.\nNote that revoking permissions never grant/revoke additional permissions."),(0,o.kt)("h3",{id:"confirmation-dialog"},"Confirmation Dialog"),(0,o.kt)("p",null,"A confirmation dialog can look differently depending on the permissions of users included in the process. These section describes all possible confirmation dialogs."),(0,o.kt)("h4",{id:"dialog-without-actions"},"Dialog without actions"),(0,o.kt)("p",null,"If the user has all required permissions and no additional actions have to be executed following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation dialog without actions",src:i(7858).Z})),(0,o.kt)("h4",{id:"dialog-with-actions-list"},"Dialog with actions list"),(0,o.kt)("p",null,"If the user has all required permissions and additional actions have to be executed following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation dialog with actions",src:i(9725).Z})),(0,o.kt)("h4",{id:"dialog-without-view-permissions"},"Dialog without view permissions"),(0,o.kt)("p",null,"If the user misses view permissions on any resource involved following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation without view permissions",src:i(3353).Z})),(0,o.kt)("h4",{id:"dialog-without-grant-permissions"},"Dialog without grant permissions"),(0,o.kt)("p",null,"If the user misses grant permissions on any resource involved in all viewed additional actions following dialog appears."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirmation without grant permissions",src:i(9637).Z})))}p.isMDXComponent=!0},9725:function(e,t,i){"use strict";t.Z=i.p+"assets/images/additional_actions_confirmation-c43a42589807535d82eaf84604ed54ab.jpg"},7858:function(e,t,i){"use strict";t.Z=i.p+"assets/images/assign_confirmation-89f1dfbd61035364e09f146411d5264b.jpg"},9637:function(e,t,i){"use strict";t.Z=i.p+"assets/images/assign_confirmation_grant_permission_required-01fa246d1dd83aa291de4bc6c2c84e15.jpg"},3353:function(e,t,i){"use strict";t.Z=i.p+"assets/images/assign_confirmation_list_permission_required-57b687065aff9aa5aea3ef0b96f4a4b9.jpg"}}]);