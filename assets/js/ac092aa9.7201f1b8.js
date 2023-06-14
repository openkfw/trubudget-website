"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[52778],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},u="Debugging TruBudget",l={unversionedId:"operation-administration/debugging",id:"operation-administration/debugging",isDocsHomePage:!1,title:"Debugging TruBudget",description:"This guide should offer some information on how to debug the TruBudget application and deployments, if any issue appears and you are not sure where to start. This might not cover every possible scenario, so if you tried the following steps and are stuck, you could open a new issue and we will try to help.",source:"@site/docs/operation-administration/debugging.md",sourceDirName:"operation-administration",slug:"/operation-administration/debugging",permalink:"/docs/operation-administration/debugging",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/debugging.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1686746303,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture in TruBudget",permalink:"/docs/operation-administration/architecture"},next:{title:"Securing communication between nodes",permalink:"/docs/operation-administration/encryption"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging-trubudget"},"Debugging TruBudget"),(0,a.kt)("p",null,"This guide should offer some information on how to debug the TruBudget application and deployments, if any issue appears and you are not sure where to start. This might not cover every possible scenario, so if you tried the following steps and are stuck, you could open a new issue and we will try to help."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Everything is running:")," Make sure all your components are up and running. Depending on your setup, please check that all TruBudget components haven't crashed. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logs:")," Check the logs of the TruBudget components that are affected. If you're not sure which component is affected start with the api (as most TruBudget logic happens there) and check components one by one. The logs should tell you exactly what went wrong, by showing an error message."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configuration:")," Make sure the components are configured properly. Common configurations to check are: same environment variables in all components (e.g. the ",(0,a.kt)("inlineCode",{parentName:"li"},"api")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"blockchain")," need the same ",(0,a.kt)("inlineCode",{parentName:"li"},"MULTICHAIN_RPC_PASSWORD"),"), all mandatory environment variables are set, and others."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Communication between components:")," Make sure the communication between components is working properly, and the correct environment variables are set to enable the communication (especially IPs and ports in this case). "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Insufficient resources:")," Make sure the components are not failing due to insufficient resources. Especially if the node you are using has a lot of data stored, the blockchain and api components (at least) might need more resources (CPU, RAM and storage)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Always use the latest version:")," Check that you are using the latest available stable version of TruBudget. The issue you are experiencing might have already been addressed and fixed in the newest version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bugs:")," If no other option until now applied to your case and you think there is a problem with the TruBudget software, please open a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openkfw/TruBudget/issues/new?assignees=&labels=bug&projects=&template=1.bug.md"},"bug request")," in our repository and we will get back to you.")))}d.isMDXComponent=!0}}]);