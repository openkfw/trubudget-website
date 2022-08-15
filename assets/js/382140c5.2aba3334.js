"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2154],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=o,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9131:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},l="Errors during Local Installation",c={unversionedId:"known-issues/local",id:"known-issues/local",isDocsHomePage:!1,title:"Errors during Local Installation",description:"API cannot connect to chain",source:"@site/docs/known-issues/local.md",sourceDirName:"known-issues",slug:"/known-issues/local",permalink:"/docs/known-issues/local",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/known-issues/local.md",version:"current",lastUpdatedBy:"IngmarM",lastUpdatedAt:1660570557,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/known-issues/intro"},next:{title:"Issues during Developer Setup",permalink:"/docs/known-issues/dev"}},d=[{value:"API cannot connect to chain",id:"api-cannot-connect-to-chain",children:[]},{value:"Cannot start nginx",id:"cannot-start-nginx",children:[]},{value:"Standard Welcome Page of nginx showing",id:"standard-welcome-page-of-nginx-showing",children:[]},{value:"Node JS Permission Issue",id:"node-js-permission-issue",children:[]},{value:"Unable to lock the administration direcectory",id:"unable-to-lock-the-administration-direcectory",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"errors-during-local-installation"},"Errors during Local Installation"),(0,a.kt)("h2",{id:"api-cannot-connect-to-chain"},"API cannot connect to chain"),(0,a.kt)("p",null,'If there is an error upon starting the API with the message "readiness: MultiChain connection failed", it\'s most likely because the blockchain was not started properly.'),(0,a.kt)("p",null,"If you see the following error message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[2018-10-03T12:13:23.950Z] INFO (TruBudget/16981 on servername): Connecting to MultiChain node\n    protocol: "http"\n    host: "127.0.0.1"\n    port: 8000\n    username: "multichainrpc"\n    password: "password"\nRegister fastify endpoint\nschema id ignored er58c69eg298c87e3899119e025eff1f\nschema id ignored fe9c2b24ade9a92360b3a898665678ac\n[2018-10-03T12:13:24.318Z] INFO (TruBudget/16981 servername): server is listening on 8080\n[2018-10-03T12:13:24.585Z] WARN (TruBudget/16981 servername):  "readiness: MultiChain connection failed"\n[2018-10-03T12:13:24.586Z] ERROR (TruBudget/16981 servername): MultiChain connection/permissions not ready yet\n')),(0,a.kt)("p",null,"then locate the running instances of the blockchain"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux | grep multichain\n")),(0,a.kt)("p",null,"which will produce an output similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root     17272  0.1  0.7 1042828 59520 ?       SLl  12:17   0:11 multichaind -txindex TrubudgetChain   -port=7447 -autosubscribe=streams\n")),(0,a.kt)("p",null,"Then shutdown the process with the ",(0,a.kt)("inlineCode",{parentName:"p"},"kill"),' command with the first number after "root" (in this case 17272):'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kill 17272\n")),(0,a.kt)("p",null,"After this, start the blockchain again using the steps described in the guide (including the exports of the variables!)."),(0,a.kt)("h2",{id:"cannot-start-nginx"},"Cannot start nginx"),(0,a.kt)("p",null,"If you get the following error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] still could not bind()\n")),(0,a.kt)("p",null,"it means that there is already an instance of nginx running and using the port 80. To stop the other process (if it's not needed), list the nginx processes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux | grep nginx\n")),(0,a.kt)("p",null,"which will produce an output similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root     23979  0.0  0.1 116656  8660 pts/1    S    14:04   0:00 nginx: main process nginx -g daemon off;\nwww-data 23981  0.0  0.0 116984  2980 pts/1    S    14:04   0:00 nginx: worker process\nwww-data 23982  0.0  0.0 116984  3020 pts/1    S    14:04   0:00 nginx: worker process\n")),(0,a.kt)("p",null,"Only the root process needs to be shut down. This is done via"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s stop\n")),(0,a.kt)("h2",{id:"standard-welcome-page-of-nginx-showing"},"Standard Welcome Page of nginx showing"),(0,a.kt)("p",null,"If you enter the IP address of your machine and you are presented with the standard welcome screen of nginx instead of the Trubudget app, you need to modifiy the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),' to disable the configuration of "sites-enabled".'),(0,a.kt)("p",null,"First, login as root and open the nginx.conf file with your editor of choice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\nnano /etc/nginx/nginx.conf\n")),(0,a.kt)("p",null,"Then locate the line ",(0,a.kt)("inlineCode",{parentName:"p"},"include /etc/nginx/sites-enabled/*")," and disable it by putting a pound sybol at the beginning of the line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#include /etc/nginx/sites-enabled/*;\ninclude /etc/nginx/conf.d/*.conf;\n")),(0,a.kt)("h2",{id:"node-js-permission-issue"},"Node JS Permission Issue"),(0,a.kt)("p",null,"If you receive an error running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),", that looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'726 verbose stack Error: sodium-native@2.1.6 install: `node-gyp-build "node preinstall.js" "node postinstall.js"`\n726 verbose stack spawn ENOENT\n726 verbose stack     at ChildProcess.<anonymous> (/usr/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:48:18)\n726 verbose stack     at ChildProcess.emit (events.js:180:13)\n726 verbose stack     at maybeClose (internal/child_process.js:936:16)\n726 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:220:5)\n727 verbose pkgid sodium-native@2.1.6\n728 verbose cwd /root/trubudget/api\n729 verbose Linux 4.15.0-1025-azure\n730 verbose argv "/usr/bin/node" "/usr/bin/npm" "install"\n731 verbose node v9.11.2\n732 verbose npm  v5.6.0\n733 error file sh\n734 error code ELIFECYCLE\n735 error errno ENOENT\n736 error syscall spawn\n737 error sodium-native@2.1.6 install: `node-gyp-build "node preinstall.js" "node postinstall.js"`\n737 error spawn ENOENT\n738 error Failed at the sodium-native@2.1.6 install script.\n738 error This is probably not a problem with npm. There is likely additional logging output above.\n739 verbose exit [ 1, true ]\n')),(0,a.kt)("p",null,"Check the global node_modules (",(0,a.kt)("inlineCode",{parentName:"p"},"usr/lib/node_modules/"),") permissions."),(0,a.kt)("h2",{id:"unable-to-lock-the-administration-direcectory"},"Unable to lock the administration direcectory"),(0,a.kt)("p",null,"If you see the following error message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?\n")),(0,a.kt)("p",null,"you need to delete the lock files (as root):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm /var/lib/apt/lists/lock\nrm /var/cache/apt/archives/lock\nrm /var/lib/dpkg/lock\n")))}p.isMDXComponent=!0}}]);