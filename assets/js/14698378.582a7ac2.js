"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1532],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),o=m(a),N=r,h=o["".concat(d,".").concat(N)]||o[N]||s[N]||i;return a?n.createElement(h,l(l({ref:t},k),{},{components:a})):n.createElement(h,l({ref:t},k))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=o;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},98768:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return o}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={},d="MultichainClient",m={unversionedId:"developer/api-docs/interfaces/service_Client_h.MultichainClient",id:"developer/api-docs/interfaces/service_Client_h.MultichainClient",isDocsHomePage:!1,title:"MultichainClient",description:"Api Code Documentation / Exports / service/Client.h / MultichainClient",source:"@site/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient.md",sourceDirName:"developer/api-docs/interfaces",slug:"/developer/api-docs/interfaces/service_Client_h.MultichainClient",permalink:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient.md",version:"current",lastUpdatedBy:"egdmrsy",lastUpdatedAt:1686746303,formattedLastUpdatedAt:"6/14/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LogEntry",permalink:"/docs/developer/api-docs/interfaces/service_Client_h.LogEntry"},next:{title:"PeerInfo",permalink:"/docs/developer/api-docs/interfaces/service_Client_h.PeerInfo"}},k=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"getInfo",id:"getinfo",children:[]},{value:"getLastBlockInfo",id:"getlastblockinfo",children:[]},{value:"getLatestValues",id:"getlatestvalues",children:[]},{value:"getOrCreateStream",id:"getorcreatestream",children:[]},{value:"getPeerInfo",id:"getpeerinfo",children:[]},{value:"getRpcClient",id:"getrpcclient",children:[]},{value:"getValue",id:"getvalue",children:[]},{value:"getValues",id:"getvalues",children:[]},{value:"isValidAddress",id:"isvalidaddress",children:[]},{value:"latestValuesForKey",id:"latestvaluesforkey",children:[]},{value:"listBlocksByHeight",id:"listblocksbyheight",children:[]},{value:"listStreamBlockItemsByHeight",id:"liststreamblockitemsbyheight",children:[]},{value:"ping",id:"ping",children:[]},{value:"setValue",id:"setvalue",children:[]},{value:"streamItems",id:"streamitems",children:[]},{value:"streams",id:"streams",children:[]},{value:"updateStreamItem",id:"updatestreamitem",children:[]},{value:"updateValue",id:"updatevalue",children:[]},{value:"v2_readStreamItems",id:"v2_readstreamitems",children:[]}]}],s={toc:k};function o(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multichainclient"},"MultichainClient"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README"},"Api Code Documentation")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules/service_Client_h"},"service/Client.h")," / MultichainClient"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/service_Client_h"},"service/Client.h"),".MultichainClient"),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/service_Client.RpcMultichainClient"},(0,i.kt)("inlineCode",{parentName:"a"},"RpcMultichainClient")))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getinfo"},"getInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getlastblockinfo"},"getLastBlockInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getlatestvalues"},"getLatestValues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getorcreatestream"},"getOrCreateStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getpeerinfo"},"getPeerInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getrpcclient"},"getRpcClient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getvalue"},"getValue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#getvalues"},"getValues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#isvalidaddress"},"isValidAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#latestvaluesforkey"},"latestValuesForKey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#listblocksbyheight"},"listBlocksByHeight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#liststreamblockitemsbyheight"},"listStreamBlockItemsByHeight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#ping"},"ping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#setvalue"},"setValue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#streamitems"},"streamItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#streams"},"streams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#updatestreamitem"},"updateStreamItem")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#updatevalue"},"updateValue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/developer/api-docs/interfaces/service_Client_h.MultichainClient#v2_readstreamitems"},"v2","_","readStreamItems"))),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"getinfo"},"getInfo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getInfo"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L138"},"src/service/Client.h.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getlastblockinfo"},"getLastBlockInfo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getLastBlockInfo"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"skip?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.BlockInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockInfo")),">"),(0,i.kt)("p",null,"Get the latest block, possibly skipping a few."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"skip?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number of blocks to skip, default 0 (= latest block)")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.BlockInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockInfo")),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L116"},"src/service/Client.h.ts:116")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getlatestvalues"},"getLatestValues"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getLatestValues"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nValues?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItemPair"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItemPair")),"[]",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nValues?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItemPair"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItemPair")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L165"},"src/service/Client.h.ts:165")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getorcreatestream"},"getOrCreateStream"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getOrCreateStream"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"service_Client_h.CreateStreamOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateStreamOptions")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L129"},"src/service/Client.h.ts:129")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpeerinfo"},"getPeerInfo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPeerInfo"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.PeerInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"PeerInfo")),"[]",">"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.PeerInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"PeerInfo")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L141"},"src/service/Client.h.ts:141")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getrpcclient"},"getRpcClient"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getRpcClient"),"(): ",(0,i.kt)("a",{parentName:"p",href:"../classes/service_RpcClient.RpcClient"},(0,i.kt)("inlineCode",{parentName:"a"},"RpcClient"))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../classes/service_RpcClient.RpcClient"},(0,i.kt)("inlineCode",{parentName:"a"},"RpcClient"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L179"},"src/service/Client.h.ts:179")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getvalue"},"getValue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getValue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItemPair"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItemPair")),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItemPair"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItemPair")),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L168"},"src/service/Client.h.ts:168")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getvalues"},"getValues"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getValues"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nValues?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItemPair"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItemPair")),"[]",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nValues?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItemPair"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItemPair")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L162"},"src/service/Client.h.ts:162")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isvalidaddress"},"isValidAddress"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isValidAddress"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L145"},"src/service/Client.h.ts:145")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"latestvaluesforkey"},"latestValuesForKey"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"latestValuesForKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nValues?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nValues?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L148"},"src/service/Client.h.ts:148")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"listblocksbyheight"},"listBlocksByHeight"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"listBlocksByHeight"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"from?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"verbose?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.BlockListItem"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockListItem")),"[]",">"),(0,i.kt)("p",null,"Retrieve all blocks metadata by block height range.\nYou can retrieve the current maximum block height through calling getLastBlockInfo"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"highest block height to return (inclusive)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"from?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"lowest block to return (inclusive), defaults to 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"verbose?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"verbose output, defaults to false")))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.BlockListItem"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockListItem")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L126"},"src/service/Client.h.ts:126")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"liststreamblockitemsbyheight"},"listStreamBlockItemsByHeight"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"listStreamBlockItemsByHeight"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"from?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"verbose?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_liststreamkeyitems.Item"},(0,i.kt)("inlineCode",{parentName:"a"},"Item")),"[]",">"),(0,i.kt)("p",null,"Retrieve all items within a stream by block height range."),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stream Name to Read")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Highest block height to retrieve (inclusive)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"from?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Lowest block height to retrieve (inclusive), defaults to 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"verbose?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Get verbose data (not typed!)")))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_liststreamkeyitems.Item"},(0,i.kt)("inlineCode",{parentName:"a"},"Item")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L195"},"src/service/Client.h.ts:195")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ping"},"ping"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"ping"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L143"},"src/service/Client.h.ts:143")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setvalue"},"setValue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setValue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"streamKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/developer/api-docs/modules/service_Client_h#streamkey"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamKey")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L171"},"src/service/Client.h.ts:171")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"streamitems"},"streamItems"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"streamItems"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamId"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItem"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItem")),"[]",">"),(0,i.kt)("h4",{id:"parameters-10"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-14"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.StreamItem"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamItem")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L135"},"src/service/Client.h.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"streams"},"streams"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"streams"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"stream?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.Stream"},(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),"[]",">"),(0,i.kt)("h4",{id:"parameters-11"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stream?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-15"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_Client_h.Stream"},(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L132"},"src/service/Client.h.ts:132")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatestreamitem"},"updateStreamItem"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateStreamItem"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"parameters-12"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-16"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L155"},"src/service/Client.h.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatevalue"},"updateValue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateValue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updateCallback"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-13"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updateCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"current"),": ",(0,i.kt)("a",{parentName:"td",href:"service_Client_h.Resource"},(0,i.kt)("inlineCode",{parentName:"a"},"Resource")),") => ",(0,i.kt)("a",{parentName:"td",href:"service_Client_h.Resource"},(0,i.kt)("inlineCode",{parentName:"a"},"Resource")))))),(0,i.kt)("h4",{id:"returns-17"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L173"},"src/service/Client.h.ts:173")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"v2_readstreamitems"},"v2","_","readStreamItems"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"v2_readStreamItems"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"streamName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nValues?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_liststreamkeyitems.Item"},(0,i.kt)("inlineCode",{parentName:"a"},"Item")),"[]",">"),(0,i.kt)("h4",{id:"parameters-14"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"streamName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nValues?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-18"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"service_liststreamkeyitems.Item"},(0,i.kt)("inlineCode",{parentName:"a"},"Item")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/Client.h.ts#L181"},"src/service/Client.h.ts:181")))}o.isMDXComponent=!0}}]);