"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[39651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={},a="service/provisioning_end",p={unversionedId:"developer/api-docs/modules/service_provisioning_end",id:"developer/api-docs/modules/service_provisioning_end",title:"service/provisioning\\_end",description:"Api Code Documentation / Exports / service/provisioning\\_end",source:"@site/docs/developer/api-docs/modules/service_provisioning_end.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_provisioning_end",permalink:"/docs/developer/api-docs/modules/service_provisioning_end",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_provisioning_end.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/project\\_update",permalink:"/docs/developer/api-docs/modules/service_project_update"},next:{title:"service/provisioning\\_get",permalink:"/docs/developer/api-docs/modules/service_provisioning_get"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"setProvisioningEndFlag",id:"setprovisioningendflag",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],l={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serviceprovisioning_end"},"service/provisioning","_","end"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/provisioning","_","end"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_provisioning_end#setprovisioningendflag"},"setProvisioningEndFlag"))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"setprovisioningendflag"},"setProvisioningEndFlag"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setProvisioningEndFlag"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"conn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceUser"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"conn")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_conn#conntoken"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnToken")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,i.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serviceUser")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,i.kt)("inlineCode",{parentName:"a"},"ServiceUser")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/api-docs/modules/result#type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/provisioning_end.ts#L11"},"src/service/provisioning_end.ts:11")))}u.isMDXComponent=!0}}]);