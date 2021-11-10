(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3533],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2961:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},u="How to write documentation for TruBudget",d={unversionedId:"developer/documentation",id:"developer/documentation",isDocsHomePage:!1,title:"How to write documentation for TruBudget",description:"Why?",source:"@site/docs/developer/documentation.md",sourceDirName:"developer",slug:"/developer/documentation",permalink:"/trubudget-website/docs/developer/documentation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer/documentation.md",version:"current",lastUpdatedBy:"Stefan Ziffer",lastUpdatedAt:1636560749,formattedLastUpdatedAt:"11/10/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Load and stress tests",permalink:"/trubudget-website/docs/developer/load-tests"},next:{title:"Introduction and Basics",permalink:"/trubudget-website/docs/operation-administration/introduction"}},c=[{value:"Why?",id:"why",children:[]},{value:"What is different to standard Markdown?",id:"what-is-different-to-standard-markdown",children:[{value:"The Syntax",id:"the-syntax",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-write-documentation-for-trubudget"},"How to write documentation for TruBudget"),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("p",null,"As you might have seen, TruBudget stores all relevant documentation in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder of the main repository.\nWhile reading the documentation in Markdown using a dedicated markdown reader is possible and quite easy for people working in tech, user with no tech background can have a hard time reading, and navigating through the documentation. This is why the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder in this repo is linked with the ",(0,a.kt)("a",{parentName:"p",href:"https://openkfw.github.io/trubudget-website/"},"TruBudget Website"),".\nWhen a new TruBudget version is released, the CI has an additional step which publishes the current documentation (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder) on the TruBudget Website."),(0,a.kt)("h2",{id:"what-is-different-to-standard-markdown"},"What is different to standard Markdown?"),(0,a.kt)("p",null,"The TruBudget Website is build using ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docosaurus"),". A static website generator optimized for publishing documentation. Docosaurus supports the standard Markdown syntax, MDX and React for defining and styling pages. Although sometimes React features might come in handy, ",(0,a.kt)("strong",{parentName:"p"},"avoid them"),". While MD and MDX is partially supported by GitHub, React features are not."),(0,a.kt)("h3",{id:"the-syntax"},"The Syntax"),(0,a.kt)("p",null,"The TruBudget Documentation heavily uses two features from Docosaurus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/2.0.0-beta.3/markdown-features/admonitions"},"Admonitions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar#autogenerated-sidebar-metadatas"},"Autogenerated sidebar metadata"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Admonitions")," are used to provide extra information such as notes, tips, or to make a user conscious about the possible side effects of an operation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Autogenerated sidebar metadata")," are used to determine the position of the document in the sidebar. This feature is mostly used when there are multiple folders in the directory."))}l.isMDXComponent=!0}}]);