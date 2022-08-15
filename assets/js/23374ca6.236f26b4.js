"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8421],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={sidebar_position:1},l="Getting Started",s={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to the TruBudget documentation! This guide aims to provide you with information about the different parts of TruBudget.",source:"@site/docs/README.md",sourceDirName:".",slug:"/README",permalink:"/docs/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/README.md",version:"current",lastUpdatedBy:"jzakotnik",lastUpdatedAt:1660562677,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Example Use Cases",permalink:"/docs/usecases"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Welcome to the TruBudget documentation! This guide aims to provide you with information about the different parts of TruBudget."),(0,o.kt)("p",null,"\ud83d\udca1 If you want to know more about TrueBudged visit click ",(0,o.kt)("a",{parentName:"p",href:"./usecases"},"here"),"\n\u26a1\ufe0f For the ",(0,o.kt)("strong",{parentName:"p"},"latest release"),", the ",(0,o.kt)("strong",{parentName:"p"},"Getting Started")," section or the ",(0,o.kt)("strong",{parentName:"p"},"FAQ")," visit our initial ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/main/README.md"},"README.md")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./operation-administration/introduction"},"Introduction")," - Some basics of TruBudget"),(0,o.kt)("p",null,"Installation - How to install TruBudget"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/installation/create-a-new-network/bare-metal"},"Bare Metal Installation")," - installation without Docker (deprecated)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/installation/create-a-new-network/docker"},"Deploying using Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/operation-administration/introduction#environment-variables"},"Environment Variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/operation-administration/introduction#organizations-and-nodes-in-trubudget"},"Organizations and Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/installation/create-a-new-network/connection-process"},"Node connection process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/installation/connect-to-an-existing-network/docker"},"Connect to an existing network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/update-trubudget"},"Update TruBudget")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/logging"},"Logging")," - Information on the API log and how to handle it"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/security"},"Security")," - Information on the security aspects of Trubudget"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./known-issues/intro"},"Troubleshooting")," - How to solve known issues")),(0,o.kt)("p",null,"Contributing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./developer/developer-setup"},"Developer Setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./operation-administration/logging"},"Logging")," - Information on the API log and how to handle it"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./known-issues/intro"},"Troubleshooting")," - How to solve known issues")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./user-guide/README"},"User Guide")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./user-guide/projects/project"},"Projects/Subprojects/Workflowitems")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./user-guide/users-and-groups/user"},"Users and Groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./user-guide/network/nodes"},"Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./user-guide/backup"},"Backup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./user-guide/notifications"},"Notifications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./user-guide/users-and-groups/permissions"},"Permissions"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/user-guide/README#faq"},"FAQ")," - Frequently asked questions"))}d.isMDXComponent=!0}}]);