(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7346],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={},u="Issues during Developer Setup",l={unversionedId:"known-issues/dev",id:"known-issues/dev",isDocsHomePage:!1,title:"Issues during Developer Setup",description:"Docker disables wifi network adapter",source:"@site/docs/known-issues/dev.md",sourceDirName:"known-issues",slug:"/known-issues/dev",permalink:"/trubudget-website/docs/known-issues/dev",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/known-issues/dev.md",version:"current",lastUpdatedBy:"mayrmartin",lastUpdatedAt:1625822852,formattedLastUpdatedAt:"7/9/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Errors during Local Installation",permalink:"/trubudget-website/docs/known-issues/local"},next:{title:"Environment Variables",permalink:"/trubudget-website/docs/enviroment-variables"}},p=[{value:"Docker disables wifi network adapter",id:"docker-disables-wifi-network-adapter",children:[]},{value:"Port 8000 is already in use",id:"port-8000-is-already-in-use",children:[{value:"Port 80 used by PID 4",id:"port-80-used-by-pid-4",children:[]}]}],d={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"issues-during-developer-setup"},"Issues during Developer Setup"),(0,i.kt)("h2",{id:"docker-disables-wifi-network-adapter"},"Docker disables wifi network adapter"),(0,i.kt)("p",null,"If you install Docker on Windows while using Pulse Secure it's possible that you will experience network issues. The solution is to disable pulse secure to prevent it from disabling your wifi adapter. You can find a detailed solution here: ",(0,i.kt)("a",{parentName:"p",href:"https://forums.docker.com/t/wifi-adapter-disabled-when-hyper-v-network-adapter-enabled-native/18063/9"},"Solution")," for this issue."),(0,i.kt)("h2",{id:"port-8000-is-already-in-use"},"Port 8000 is already in use"),(0,i.kt)("p",null,"This means that another process is blocking the port that you want to use for communication. To solve this, you need to find this process and stop it."),(0,i.kt)("p",null,"You can find the process by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"netsh http show servicestate\n")),(0,i.kt)("p",null,"in the Windows Command Prompt (or PowerShell) and looking for the process that is running on port 80 and note down the PID of the proccess.\nIn the task manager, find the process with the PID and end it if it's not needed by the system."),(0,i.kt)("p",null,"You can find a detailed solution on ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/32873386"},"Stackoverflow"),"."),(0,i.kt)("h3",{id:"port-80-used-by-pid-4"},"Port 80 used by PID 4"),(0,i.kt)("p",null,"This means that there is a system process blocking port 80. If you want to use TruBudget in production, you should find and disable that process. If you want to test TruBudget on your machine, an easy way to fix it is to set the exposed ports in the Yaml file to a different one. Locate the file ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose/local/master-node.yml")," (or the one in the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," folder) and change the following part"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'frontend:\n  build:\n    context: ../../frontend\n  ports:\n    - "80:80" # Mapping the nginx port\n')),(0,i.kt)("p",null,"to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'frontend:\n  build:\n    context: ../../frontend\n  ports:\n    - "90:80" # Mapping the nginx port\n')),(0,i.kt)("p",null,"Then you can access the frontend via ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:90")," after start."))}c.isMDXComponent=!0}}]);