(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9099],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=c,h=p["".concat(s,".").concat(f)]||p[f]||l[f]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5976:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(2122),c=r(9756),i=(r(7294),r(3905)),o=["components"],a={sidebar_position:1},s="Record architecture decisions",u={unversionedId:"developer/architecture/record-architecture-decisions",id:"developer/architecture/record-architecture-decisions",isDocsHomePage:!1,title:"Record architecture decisions",description:"Date: 03/04/2018",source:"@site/docs/developer/architecture/0001-record-architecture-decisions.md",sourceDirName:"developer/architecture",slug:"/developer/architecture/record-architecture-decisions",permalink:"/docs/developer/architecture/record-architecture-decisions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/architecture/0001-record-architecture-decisions.md",version:"current",lastUpdatedBy:"Stezido",lastUpdatedAt:1644232711,formattedLastUpdatedAt:"2/7/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture Decision Records",permalink:"/docs/developer/architecture/intro"},next:{title:"Access Control Model",permalink:"/docs/developer/architecture/access-control-model"}},d=[{value:"Status",id:"status",children:[]},{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],l={toc:d};function p(e){var t=e.components,r=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"record-architecture-decisions"},"Record architecture decisions"),(0,i.kt)("p",null,"Date: 03/04/2018"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"We need to record the architectural decisions made on this project."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We will use Architecture Decision Records, as described by Michael Nygard in this article: ",(0,i.kt)("a",{parentName:"p",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions")),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"See Michael Nygard's article, linked above."))}p.isMDXComponent=!0}}]);