"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[46365],{46923:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"known-issues/local","title":"Errors during Local Installation","description":"API cannot connect to chain","source":"@site/docs/known-issues/local.md","sourceDirName":"known-issues","slug":"/known-issues/local","permalink":"/docs/known-issues/local","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/known-issues/local.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/known-issues/intro"},"next":{"title":"Issues during Developer Setup","permalink":"/docs/known-issues/dev"}}');var o=s(74848),r=s(28453);const t={sidebar_position:2},a="Errors during Local Installation",d={},l=[{value:"API cannot connect to chain",id:"api-cannot-connect-to-chain",level:2},{value:"Cannot start nginx",id:"cannot-start-nginx",level:2},{value:"Standard Welcome Page of nginx showing",id:"standard-welcome-page-of-nginx-showing",level:2},{value:"Node JS Permission Issue",id:"node-js-permission-issue",level:2},{value:"Unable to lock the administration direcectory",id:"unable-to-lock-the-administration-direcectory",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"errors-during-local-installation",children:"Errors during Local Installation"})}),"\n",(0,o.jsx)(n.h2,{id:"api-cannot-connect-to-chain",children:"API cannot connect to chain"}),"\n",(0,o.jsx)(n.p,{children:'If there is an error upon starting the API with the message "readiness: MultiChain connection failed", it\'s most likely because the blockchain was not started properly.'}),"\n",(0,o.jsx)(n.p,{children:"If you see the following error message:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[2018-10-03T12:13:23.950Z] INFO (TruBudget/16981 on servername): Connecting to MultiChain node\n    protocol: "http"\n    host: "127.0.0.1"\n    port: 8000\n    username: "multichainrpc"\n    password: "password"\nRegister fastify endpoint\nschema id ignored er58c69eg298c87e3899119e025eff1f\nschema id ignored fe9c2b24ade9a92360b3a898665678ac\n[2018-10-03T12:13:24.318Z] INFO (TruBudget/16981 servername): server is listening on 8080\n[2018-10-03T12:13:24.585Z] WARN (TruBudget/16981 servername):  "readiness: MultiChain connection failed"\n[2018-10-03T12:13:24.586Z] ERROR (TruBudget/16981 servername): MultiChain connection/permissions not ready yet\n'})}),"\n",(0,o.jsx)(n.p,{children:"then locate the running instances of the blockchain"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ps aux | grep multichain\n"})}),"\n",(0,o.jsx)(n.p,{children:"which will produce an output similar to this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root     17272  0.1  0.7 1042828 59520 ?       SLl  12:17   0:11 multichaind -txindex TrubudgetChain   -port=7447 -autosubscribe=streams\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then shutdown the process with the ",(0,o.jsx)(n.code,{children:"kill"}),' command with the first number after "root" (in this case 17272):']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kill 17272\n"})}),"\n",(0,o.jsx)(n.p,{children:"After this, start the blockchain again using the steps described in the guide (including the exports of the variables!)."}),"\n",(0,o.jsx)(n.h2,{id:"cannot-start-nginx",children:"Cannot start nginx"}),"\n",(0,o.jsx)(n.p,{children:"If you get the following error"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nnginx: [emerg] bind() to [::]:80 failed (98: Address already in use)\nnginx: [emerg] still could not bind()\n"})}),"\n",(0,o.jsx)(n.p,{children:"it means that there is already an instance of nginx running and using the port 80. To stop the other process (if it's not needed), list the nginx processes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ps aux | grep nginx\n"})}),"\n",(0,o.jsx)(n.p,{children:"which will produce an output similar to this one:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root     23979  0.0  0.1 116656  8660 pts/1    S    14:04   0:00 nginx: main process nginx -g daemon off;\nwww-data 23981  0.0  0.0 116984  2980 pts/1    S    14:04   0:00 nginx: worker process\nwww-data 23982  0.0  0.0 116984  3020 pts/1    S    14:04   0:00 nginx: worker process\n"})}),"\n",(0,o.jsx)(n.p,{children:"Only the root process needs to be shut down. This is done via"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nginx -s stop\n"})}),"\n",(0,o.jsx)(n.h2,{id:"standard-welcome-page-of-nginx-showing",children:"Standard Welcome Page of nginx showing"}),"\n",(0,o.jsxs)(n.p,{children:["If you enter the IP address of your machine and you are presented with the standard welcome screen of nginx instead of the Trubudget app, you need to modifiy the ",(0,o.jsx)(n.code,{children:"/etc/nginx/nginx.conf"}),' to disable the configuration of "sites-enabled".']}),"\n",(0,o.jsx)(n.p,{children:"First, login as root and open the nginx.conf file with your editor of choice:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo su\nnano /etc/nginx/nginx.conf\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then locate the line ",(0,o.jsx)(n.code,{children:"include /etc/nginx/sites-enabled/*"})," and disable it by putting a pound sybol at the beginning of the line:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"#include /etc/nginx/sites-enabled/*;\ninclude /etc/nginx/conf.d/*.conf;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"node-js-permission-issue",children:"Node JS Permission Issue"}),"\n",(0,o.jsxs)(n.p,{children:["If you receive an error running ",(0,o.jsx)(n.code,{children:"npm install"}),", that looks like the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'726 verbose stack Error: sodium-native@2.1.6 install: `node-gyp-build "node preinstall.js" "node postinstall.js"`\n726 verbose stack spawn ENOENT\n726 verbose stack     at ChildProcess.<anonymous> (/usr/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:48:18)\n726 verbose stack     at ChildProcess.emit (events.js:180:13)\n726 verbose stack     at maybeClose (internal/child_process.js:936:16)\n726 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:220:5)\n727 verbose pkgid sodium-native@2.1.6\n728 verbose cwd /root/trubudget/api\n729 verbose Linux 4.15.0-1025-azure\n730 verbose argv "/usr/bin/node" "/usr/bin/npm" "install"\n731 verbose node v9.11.2\n732 verbose npm  v5.6.0\n733 error file sh\n734 error code ELIFECYCLE\n735 error errno ENOENT\n736 error syscall spawn\n737 error sodium-native@2.1.6 install: `node-gyp-build "node preinstall.js" "node postinstall.js"`\n737 error spawn ENOENT\n738 error Failed at the sodium-native@2.1.6 install script.\n738 error This is probably not a problem with npm. There is likely additional logging output above.\n739 verbose exit [ 1, true ]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Check the global node_modules (",(0,o.jsx)(n.code,{children:"usr/lib/node_modules/"}),") permissions."]}),"\n",(0,o.jsx)(n.h2,{id:"unable-to-lock-the-administration-direcectory",children:"Unable to lock the administration direcectory"}),"\n",(0,o.jsx)(n.p,{children:"If you see the following error message"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?\n"})}),"\n",(0,o.jsx)(n.p,{children:"you need to delete the lock files (as root):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rm /var/lib/apt/lists/lock\nrm /var/cache/apt/archives/lock\nrm /var/lib/dpkg/lock\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);