(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9514,6035],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1992:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ge});var a=n(7294),r=n(3905),o=n(2263),l=n(6291),s=n(8115),c=n(7462),i=n(6010),d=n(9306),u=n(1839),p=n(3783),m=n(7898),h=n(6742),b=n(3919),y=n(5537);const g=e=>a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var f=n(4478),v=n(8617),k=n(4973);const E="sidebar_a3j0",C="sidebarWithHideableNavbar_VlPv",N="sidebarHidden_OqfG",S="sidebarLogo_hmkv",_="menu_cyFh",Z="menuLinkText_lRH+",x="menuWithAnnouncementBar_+O1J",T="collapseSidebarButton_eoK2",j="collapseSidebarButtonIcon_e+kA",O="sidebarMenuIcon_iZzd",I="sidebarMenuCloseIcon_6kU2",P=(e,t)=>"link"===e.type?(0,d.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>P(e,t))),w=(0,a.memo)((function(e){let{items:t,...n}=e;return t.map(((e,t)=>a.createElement(B,(0,c.Z)({key:t,item:e},n))))}));function B(e){return"category"===e.item.type?a.createElement(D,e):a.createElement(L,e)}function D(e){let{item:t,onItemClick:n,collapsible:r,activePath:o,...l}=e;const{items:s,label:u}=t,p=P(t,o),m=(0,d.D9)(p),[h,b]=(0,a.useState)((()=>!!r&&(!p&&t.collapsed))),y=(0,a.useRef)(null),[g,f]=(0,a.useState)(void 0),v=function(e){var t;void 0===e&&(e=!0),f(e?(null==(t=y.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((()=>{p&&!m&&h&&b(!1)}),[p,m,h]);const k=(0,a.useCallback)((e=>{e.preventDefault(),g||v(),setTimeout((()=>b((e=>!e))),100)}),[g]);return 0===s.length?null:a.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":h})},a.createElement("a",(0,c.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&p,[Z]:!r}),onClick:r?k:void 0,href:r?"#":void 0},l),u),a.createElement("ul",{className:"menu__list",ref:y,style:{height:g},onTransitionEnd:()=>{h||v(!1)}},a.createElement(w,{items:s,tabIndex:h?"-1":"0",onItemClick:n,collapsible:r,activePath:o})))}function L(e){let{item:t,onItemClick:n,activePath:r,collapsible:o,...l}=e;const{href:s,label:d}=t,u=P(t,r);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,c.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":u}),to:s},(0,b.Z)(s)&&{isNavLink:!0,exact:!0,onClick:n},l),(0,b.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}function R(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",T),onClick:t},a.createElement(g,{className:j}))}function A(e){let{responsiveSidebarOpened:t,onClick:n}=e;return a.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,i.Z)(O,I)},"\xd7"):a.createElement(f.Z,{className:O,height:24,width:24}))}const M=function(e){let{path:t,sidebar:n,sidebarCollapsible:r=!0,onCollapse:o,isHidden:l}=e;const s=function(){const{isClosed:e}=(0,d.nT)(),[t,n]=(0,a.useState)(!e);return(0,m.Z)((t=>{let{scrollY:a}=t;e||n(0===a)})),t}(),{navbar:{hideOnScroll:c},hideableSidebar:h}=(0,d.LU)(),{isClosed:b}=(0,d.nT)(),{showResponsiveSidebar:g,closeResponsiveSidebar:f,toggleResponsiveSidebar:v}=function(){const[e,t]=(0,a.useState)(!1);(0,u.Z)(e);const n=(0,p.Z)();return(0,a.useEffect)((()=>{n===p.D.desktop&&t(!1)}),[n]),{showResponsiveSidebar:e,closeResponsiveSidebar:(0,a.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:(0,a.useCallback)((()=>{t((e=>!e))}),[t])}}();return a.createElement("div",{className:(0,i.Z)(E,{[C]:c,[N]:l})},c&&a.createElement(y.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,i.Z)("menu","menu--responsive","thin-scrollbar",_,{"menu--show":g,[x]:!b&&s}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(A,{responsiveSidebarOpened:g,onClick:v}),a.createElement("ul",{className:"menu__list"},a.createElement(w,{items:n,onItemClick:f,collapsible:r,activePath:t}))),h&&a.createElement(R,{onClick:o}))};const H={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var z={Prism:n(7410).Z,theme:H};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W.apply(this,arguments)}var U=/\r\n|\r|\n/,$=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},V=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},J=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=W({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=W({},n,{backgroundColor:null}),r};function K(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const X=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),F(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?J(e.theme,e.language):void 0;return t.themeDict=n})),F(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=W({},K(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?W({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),F(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),F(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=W({},K(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?W({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),F(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,s=[],c=[s];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,d=t[l],u=n[l][o];if("string"==typeof u?(d=l>0?d:["plain"],i=u):(d=V(d,u.type),u.alias&&(d=V(d,u.alias)),i=u.content),"string"==typeof i){var p=i.split(U),m=p.length;s.push({types:d,content:p[0]});for(var h=1;h<m;h++)$(s),c.push(s=[]),s.push({types:d,content:p[h]})}else l++,t.push(d),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return $(s),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var q=n(7594),Q=n.n(q);const Y={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var G=n(5350);const ee=()=>{const{prism:e}=(0,d.LU)(),{isDarkTheme:t}=(0,G.Z)(),n=e.theme||Y,a=e.darkTheme||n;return t?a:n},te="codeBlockContainer_J+bg",ne="codeBlockContent_csEI",ae="codeBlockTitle_oQzk",re="codeBlock_rtdJ",oe="codeBlockWithTitle_ZT05",le="copyButton_M3SB",se="codeBlockLines_1zSZ",ce=/{([\d,-]+)}/,ie=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")")).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function de(e){let{children:t,className:n,metastring:r,title:o}=e;const{prism:l}=(0,d.LU)(),[s,u]=(0,a.useState)(!1),[p,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m(!0)}),[]);const h=(0,d.bc)(r)||o,b=(0,a.useRef)(null);let y=[];const g=ee(),f=Array.isArray(t)?t.join(""):t;if(r&&ce.test(r)){const e=r.match(ce)[1];y=Q()(e).filter((e=>e>0))}let v=n&&n.replace(/language-/,"");!v&&l.defaultLanguage&&(v=l.defaultLanguage);let E=f.replace(/\n$/,"");if(0===y.length&&void 0!==v){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return ie(["js","jsBlock"]);case"jsx":case"tsx":return ie(["js","jsBlock","jsx"]);case"html":return ie(["js","jsBlock","html"]);case"python":case"py":return ie(["python"]);default:return ie()}})(v),n=f.replace(/\n$/,"").split("\n");let a;for(let r=0;r<n.length;){const o=r+1,l=n[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=o+",";break;case"highlight-start":a=o;break;case"highlight-end":e+=a+"-"+(o-1)+","}n.splice(r,1)}else r+=1}y=Q()(e),E=n.join("\n")}const C=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus()}(E),u(!0),setTimeout((()=>u(!1)),2e3)};return a.createElement(X,(0,c.Z)({},z,{key:String(p),theme:g,code:E,language:v}),(e=>{let{className:t,style:n,tokens:r,getLineProps:o,getTokenProps:l}=e;return a.createElement("div",{className:te},h&&a.createElement("div",{style:n,className:ae},h),a.createElement("div",{className:(0,i.Z)(ne,v)},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,re,"thin-scrollbar",{[oe]:h}),style:n},a.createElement("code",{className:se},r.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return y.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,c.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,c.Z)({key:t},l({token:e,key:t}))))))})))),a.createElement("button",{ref:b,type:"button","aria-label":(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(le,"clean-btn"),onClick:C},s?a.createElement(k.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(k.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ue=n(6159);const pe={code:e=>{const{children:t}=e;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(de,e):a.createElement("code",e)},a:e=>a.createElement(h.Z,e),pre:e=>{var t;const{children:n}=e;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(de,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,ue.Z)("h1"),h2:(0,ue.Z)("h2"),h3:(0,ue.Z)("h3"),h4:(0,ue.Z)("h4"),h5:(0,ue.Z)("h5"),h6:(0,ue.Z)("h6")};var me=n(4608),he=n(5977);const be={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainer:"docSidebarContainer_0YBq",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};function ye(e){var t,n;let{currentDocRoute:l,versionMetadata:c,children:u}=e;const{siteConfig:p,isClient:m}=(0,o.Z)(),{pluginId:h,version:b}=c,{sidebarName:y,sidebar:f}=function(e){let{versionMetadata:t,currentDocRoute:n}=e;const{permalinkToSidebar:a,docsSidebars:r}=t,o=a[n.path]||a[(l=n.path,l.endsWith("/")?l:l+"/")]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];var l;return{sidebar:r[o],sidebarName:o}}({versionMetadata:c,currentDocRoute:l}),[v,E]=(0,a.useState)(!1),[C,N]=(0,a.useState)(!1),S=(0,a.useCallback)((()=>{C&&N(!1),E(!v)}),[C]);return a.createElement(s.Z,{key:m,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:b,tag:(0,d.os)(h,b)}},a.createElement("div",{className:be.docPage},f&&a.createElement("aside",{className:(0,i.Z)(be.docSidebarContainer,{[be.docSidebarContainerHidden]:v}),onTransitionEnd:e=>{e.currentTarget.classList.contains(be.docSidebarContainer)&&v&&N(!0)}},a.createElement(M,{key:y,sidebar:f,path:l.path,sidebarCollapsible:null==(t=null==(n=p.themeConfig)?void 0:n.sidebarCollapsible)||t,onCollapse:S,isHidden:C}),C&&a.createElement("div",{className:be.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(g,{className:be.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(be.docMainContainer,{[be.docMainContainerEnhanced]:v||!f})},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,{[be.docItemWrapperEnhanced]:v})},a.createElement(r.Zo,{components:pe},u)))))}const ge=function(e){const{route:{routes:t},versionMetadata:n,location:r}=e,o=t.find((e=>(0,he.LX)(r.pathname,e)));return o?a.createElement(ye,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):a.createElement(me.default,e)}},6159:(e,t,n)=>{"use strict";n.d(t,{N:()=>d,Z:()=>u});var a=n(7462),r=n(7294),o=n(6010),l=n(4973),s=n(9306);const c="enhancedAnchor_WiXH",i="h1Heading_dC7a",d=function(e){let{...t}=e;return r.createElement("header",null,r.createElement("h1",(0,a.Z)({},t,{id:void 0,className:i}),t.children))},u=e=>{return"h1"===e?d:(t=e,function(e){let{id:n,...a}=e;const{navbar:{hideOnScroll:i}}=(0,s.LU)();return n?r.createElement(t,a,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",{[c]:!i}),id:n}),a.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,a)});var t}},4608:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(7294),r=n(8115),o=n(4973);const l=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),r=n(4184),o=n.n(r),l=n(5977),s=n(2263),c=n(8084);const i=e=>{const t=(0,a.useRef)(!1),r=(0,a.useRef)(null),[i,d]=(0,a.useState)(!1),u=(0,l.k6)(),{siteConfig:p={},isClient:m=!1}=(0,s.Z)(),{baseUrl:h}=p,b=(0,c.usePluginData)("docusaurus-lunr-search"),y=()=>{t.current||(Promise.all([fetch(""+h+b.fileNames.searchDoc).then((e=>e.json())),fetch(""+h+b.fileNames.lunrIndex).then((e=>e.json())),Promise.all([n.e(9878),n.e(4452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,3195))]).then((e=>{let[t,n,{default:a}]=e;0!==t.length&&(((e,t,n)=>{new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,n)=>{const a=h+n.url;document.createElement("a").href=a,u.push(a)}})})(t,n,a),d(!0))})),t.current=!0)},g=(0,a.useCallback)((t=>{r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return m&&y(),a.createElement("div",{className:"navbar__search",key:"search-box"},a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),a.createElement("input",{id:"search_input_react",type:"search",placeholder:i?"Search":"Loading...","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:y,onMouseOver:y,onFocus:g,onBlur:g,ref:r,disabled:!i}))}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);