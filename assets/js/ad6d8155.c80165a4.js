"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[64895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:1},i="User",o={unversionedId:"user-guide/users-and-groups/user",id:"user-guide/users-and-groups/user",title:"User",description:"With Users an organization can grant an entity access to the Trubudget-application. New users only have access to the Trubudget-application without permissions to see any project. All permissions (e.g. view a project, view a subproject,...) have to be granted separately by the administrator. More details about the permission model can be found in the Permissions section",source:"@site/docs/user-guide/users-and-groups/user.md",sourceDirName:"user-guide/users-and-groups",slug:"/user-guide/users-and-groups/user",permalink:"/docs/user-guide/users-and-groups/user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/users-and-groups/user.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1697196098,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/user-guide/"},next:{title:"Group",permalink:"/docs/user-guide/users-and-groups/group"}},l={},p=[{value:"View Users",id:"view-users",level:2},{value:"Create User",id:"create-user",level:2},{value:"Change a user&#39;s password",id:"change-a-users-password",level:2},{value:"Enable User",id:"enable-user",level:2},{value:"Disable User",id:"disable-user",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user"},"User"),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"Users")," an organization can grant an entity access to the Trubudget-application. New users only have access to the Trubudget-application without permissions to see any project. All permissions (e.g. view a project, view a subproject,...) have to be granted separately by the administrator. More details about the permission model can be found in the ",(0,a.kt)("a",{parentName:"p",href:"./permissions"},"Permissions section")),(0,a.kt)("p",null,'Users and Groups can be viewed and created in the "Users" section which can be found in the sidebar navigation.'),(0,a.kt)("h2",{id:"view-users"},"View Users"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,"View all users."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner (hamburger menu) to open the side-navigation-bar"),(0,a.kt)("li",{parentName:"ol"},'Click "Users" Selection')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Show Users",src:n(12429).Z,width:"2642",height:"1360"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Users can only be viewed or created by an administrator.")),(0,a.kt)("h2",{id:"create-user"},"Create User"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,"Create a new User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner (hamburger menu) to open the side-navigation-bar"),(0,a.kt)("li",{parentName:"ol"},'Click "Users" Selection'),(0,a.kt)("li",{parentName:"ol"},'Click the blue "+" button on the right to open the "Add User" dialog')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create User",src:n(24041).Z,width:"2642",height:"1262"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the required fields:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"Full Name": Name displayed to other users'),(0,a.kt)("li",{parentName:"ul"},'"Username": ID of the user e.g. for login'),(0,a.kt)("li",{parentName:"ul"},'"Password": Password of user'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Submit"-button to create and save the new user.'))),(0,a.kt)("p",null,"Once a user is created you can grant and revoke administrator permissions for the user, more details can be found at ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/users-and-groups/permissions#admin-permissions"},"admin-permissions"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Only an administrator can create users of his/her organization!"),(0,a.kt)("li",{parentName:"ul"},"Users can be neither edited nor deleted."))),(0,a.kt)("h2",{id:"change-a-users-password"},"Change a user's password"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:"),"\nA user's password can be changed by anyone who has the permission ",(0,a.kt)("inlineCode",{parentName:"p"},"user.changePassword")," for a given user. Starting with version ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1.0")," every user is granted the permission to change his/her own password upon creation . If another user should be able to change a user's password (like an administrator), this permission needs to be granted via the ",(0,a.kt)("inlineCode",{parentName:"p"},"/users.intent.grantPermission")," endpoint. The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," user can always change passwords and grant the necessary permissions."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User ",(0,a.kt)("inlineCode",{parentName:"li"},"mstein")," wants to change his own password, but does not have the permission to do so. The ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user needs to grant ",(0,a.kt)("inlineCode",{parentName:"li"},"mstein")," the permission ",(0,a.kt)("inlineCode",{parentName:"li"},"user.changePassword"),". Once this is done, ",(0,a.kt)("inlineCode",{parentName:"li"},"mstein")," can change his own password."),(0,a.kt)("li",{parentName:"ul"},"User ",(0,a.kt)("inlineCode",{parentName:"li"},"mstein")," is an administrator and should be able to change the password of ",(0,a.kt)("inlineCode",{parentName:"li"},"dviolin"),". The ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user needs to grant the ",(0,a.kt)("inlineCode",{parentName:"li"},"user.changePassword")," permission to ",(0,a.kt)("inlineCode",{parentName:"li"},"mstein")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"dviolin"),". After that, ",(0,a.kt)("inlineCode",{parentName:"li"},"mstein")," is able to change the password of ",(0,a.kt)("inlineCode",{parentName:"li"},"dviolin"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner (hamburger menu) to open the side-navigation-bar"),(0,a.kt)("li",{parentName:"ol"},'Click "Users" Selection'),(0,a.kt)("li",{parentName:"ol"},'Click the "Edit" button (looks like a pen) next to the user you want to change the password for'),(0,a.kt)("li",{parentName:"ol"},"Type in ",(0,a.kt)("em",{parentName:"li"},"your")," password"),(0,a.kt)("li",{parentName:"ol"},"Type in the new password for the selected user"),(0,a.kt)("li",{parentName:"ol"},"Re-type the new password to confirm it"),(0,a.kt)("li",{parentName:"ol"},'Click "Submit" to save the new password')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To change a user's password, you must type in ",(0,a.kt)("em",{parentName:"p"},"your")," password first")),(0,a.kt)("h2",{id:"enable-user"},"Enable User"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,"Enable disabled User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner (hamburger menu) to open the side-navigation-bar."),(0,a.kt)("li",{parentName:"ol"},'Click "Users" Selection.'),(0,a.kt)("li",{parentName:"ol"},'Click "Disabled users" tab'),(0,a.kt)("li",{parentName:"ol"},'Click the "Restore user" button (looks like a white check mark symbol) next to the user you want to enable.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Restore User",src:n(76349).Z,width:"3360",height:"1882"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},'A confirmation dialog will be show. Click "Disable user" to confirm the activation.')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only a user with the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.enable"),"-permission can enable users of his/her organization!")),(0,a.kt)("h2",{id:"disable-user"},"Disable User"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("p",null,"Disable an User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the button in the upper left corner (hamburger menu) to open the side-navigation-bar."),(0,a.kt)("li",{parentName:"ol"},'Click "Users" Selection.'),(0,a.kt)("li",{parentName:"ol"},'Click the "Disable user" button (looks like a white minus symbol) next to the user you want to disable.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Disable User",src:n(34684).Z,width:"3332",height:"1880"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'A confirmation dialog will be shown. Click "Disable user" to confirm the deactivation.')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only a user with the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.disable"),'-permission can disable users of his/her organization!\nWhen disabled user tried to log in a "Login ID is disabled" message will pop up.')))}c.isMDXComponent=!0},24041:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create_User-9f0a0e235019bd70bd13345e5938e87e.jpg"},34684:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/disable_user-db5336ba611e1ad0558815a9d205caf3.png"},76349:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/restore_user-d8c65b24644e73a19cead8fc3ea19c58.png"},12429:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/show_Users-2e4c8812bbd2bf5af6a2a9f90039d8b8.jpg"}}]);