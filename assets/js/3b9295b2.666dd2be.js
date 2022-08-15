"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6840:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5},a="Workflowitem-ordering",l={unversionedId:"developer/architecture/workflowitem-ordering",id:"developer/architecture/workflowitem-ordering",isDocsHomePage:!1,title:"Workflowitem-ordering",description:"Date: 04/05/2018",source:"@site/docs/developer/architecture/0005-workflowitem-ordering.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/workflowitem-ordering",permalink:"/docs/developer/architecture/workflowitem-ordering",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0005-workflowitem-ordering.md",version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1625740150,formattedLastUpdatedAt:"7/8/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Resource-level lifetime",permalink:"/docs/developer/architecture/ressource-level-lifetime"},next:{title:"Multi-node setup",permalink:"/docs/developer/architecture/multi-node-setup"}},s=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workflowitem-ordering"},"Workflowitem-ordering"),(0,o.kt)("p",null,"Date: 04/05/2018"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Draft"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Workflowitems are sorted by their creation time by default, but there needs to be some mechanism that allows for manual sorting as well (mainly relevant for the UI). Previously, each workflowitem would hold a pointer to the previous item in the list. However, this approach cannot prevent an inconsistent state if there is a data race between two concurrent requests: it may happen that two workflowitems share the same pointer (turning the list into a tree)."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"We solve this by maintaining the ordering as a list, stored with the subproject the workflowitems belong to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'subproject stream:\n  stream item "workflowitem_ordering" => { data: [id1, id2, ...], log: [], permissions: {}}\n')),(0,o.kt)("p",null,"Note that we use the resource structure here simply to be able to treat the record like any other, but ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"permissions")," have no meaning at the time of writing."),(0,o.kt)("p",null,"Since Multichain doesn't offer transactions for stream operations, we cannot guarantee that a newly created workflowitem would always be recorded in the list, so we apply the following trick when computing the ordering:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Workflowitems that are included in the workflowitem-ordering are included in the result exactly in that ordering;"),(0,o.kt)("li",{parentName:"ul"},"all remaining workflowitems are sorted by their creation time and appended to the result.")),(0,o.kt)("p",null,"Because workflowitems are sorted by their creation time by default, newly created items ",(0,o.kt)("em",{parentName:"p"},"do not")," have to be added to the ordering, so no inconsistensies can occur."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"Using this approach, we get the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Without setting an ordering through an API call, the ordering list is empty and all items are sorted by their creation time."),(0,o.kt)("li",{parentName:"ul"},"When an ordering is set, it is respected when returning workflowitems."),(0,o.kt)("li",{parentName:"ul"},"The case of concurrent requests:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Concurrent creation causes both items to be appended to the list, ordered by their creation time, or in arbitrary order in case the creation times are equal."),(0,o.kt)("li",{parentName:"ul"},"Concurrent updates of the ordering is a race with all-or-nothing semantics: whoever finished the update last wins, and there can never be any inconsistencies."))),(0,o.kt)("li",{parentName:"ul"},"If an update to the ordering does not include a workflowitem that was not present when the request was issued, when returning the ordered list of workflowitems, the missing workflowitem is simply set as the last element (which makes sense: it is the newest workflowitem, after all).")))}u.isMDXComponent=!0}}]);