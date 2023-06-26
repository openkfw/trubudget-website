"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[81327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=m(n),u=r,f=l["".concat(p,".").concat(u)]||l[u]||c[u]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var m=2;m<o;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var i=n(87462),r=(n(67294),n(3905));const o={},a="service/domain/system_information/provisioning_get",s={unversionedId:"developer/api-docs/modules/service_domain_system_information_provisioning_get",id:"developer/api-docs/modules/service_domain_system_information_provisioning_get",title:"service/domain/system\\_information/provisioning\\_get",description:"Api Code Documentation / Exports / service/domain/system\\information/provisioning\\get",source:"@site/docs/developer/api-docs/modules/service_domain_system_information_provisioning_get.md",sourceDirName:"developer/api-docs/modules",slug:"/developer/api-docs/modules/service_domain_system_information_provisioning_get",permalink:"/docs/developer/api-docs/modules/service_domain_system_information_provisioning_get",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/modules/service_domain_system_information_provisioning_get.md",tags:[],version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1687780005,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"service/domain/system\\_information/provisioning\\_ended",permalink:"/docs/developer/api-docs/modules/service_domain_system_information_provisioning_ended"},next:{title:"service/domain/system\\_information/provisioning\\_start",permalink:"/docs/developer/api-docs/modules/service_domain_system_information_provisioning_start"}},p={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getProvisionStatus",id:"getprovisionstatus",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:m},l="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"servicedomainsystem_informationprovisioning_get"},"service/domain/system","_","information/provisioning","_","get"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / service/domain/system","_","information/provisioning","_","get"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/modules/service_domain_system_information_provisioning_get#getprovisionstatus"},"getProvisionStatus"))),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"getprovisionstatus"},"getProvisionStatus"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getProvisionStatus"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"repository"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_system_information_system_information.ProvisioningStatus"},(0,r.kt)("inlineCode",{parentName:"a"},"ProvisioningStatus")),">",">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/lib_ctx.Ctx"},(0,r.kt)("inlineCode",{parentName:"a"},"Ctx")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/service_domain_organization_service_user.ServiceUser"},(0,r.kt)("inlineCode",{parentName:"a"},"ServiceUser")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"repository")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Repository"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"result#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("a",{parentName:"p",href:"../interfaces/service_domain_system_information_system_information.ProvisioningStatus"},(0,r.kt)("inlineCode",{parentName:"a"},"ProvisioningStatus")),">",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_get.ts#L16"},"src/service/domain/system_information/provisioning_get.ts:16")))}c.isMDXComponent=!0}}]);