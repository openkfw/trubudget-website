"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8554],{75461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(85893),o=n(11151);const r={},i="Backup",c={id:"user-guide/backup",title:"Backup",description:"Only the admin user (root) is allowed to create and restore backups of blockchain states.",source:"@site/docs/user-guide/backup.md",sourceDirName:"user-guide",slug:"/user-guide/backup",permalink:"/docs/user-guide/backup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/backup.md",tags:[],version:"current",lastUpdatedBy:"SamuelPull",lastUpdatedAt:1702996314,formattedLastUpdatedAt:"Dec 19, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service-Status",permalink:"/docs/user-guide/status/"},next:{title:"Confirmation",permalink:"/docs/user-guide/confirmation"}},a={},l=[{value:"Create a Backup",id:"create-a-backup",level:3},{value:"Restore a Backup",id:"restore-a-backup",level:3}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"backup",children:"Backup"}),"\n",(0,s.jsx)(t.p,{children:"Only the admin user (root) is allowed to create and restore backups of blockchain states."}),"\n",(0,s.jsxs)(t.p,{children:["While creating or restoring a backup the blockchain needs to be stopped. ",(0,s.jsx)(t.strong,{children:"During that time errors might pop up in the frontend"}),". Furthermore the MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use, that should be the case using the default configuration."]}),"\n",(0,s.jsx)(t.h3,{id:"create-a-backup",children:"Create a Backup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Description:"})}),"\n",(0,s.jsx)(t.p,{children:"These section describes how to create a gzip file which contains the current blockchain state."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Login into the frontend using the ",(0,s.jsx)(t.code,{children:"root"})," user"]}),"\n",(0,s.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Download"})," Button to create a backup of the current blockchain state"]}),"\n",(0,s.jsx)(t.li,{children:"Once the backup.gz file is downloaded you can rename it to whatever name you want"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"create backup",src:n(69643).Z+"",width:"2184",height:"1232"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Only the ",(0,s.jsx)(t.code,{children:"root"})," user is allowed to restore backups of blockchain states."]}),"\n",(0,s.jsx)(t.li,{children:"The MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"restore-a-backup",children:"Restore a Backup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Description:"})}),"\n",(0,s.jsx)(t.p,{children:"These section describes how to restore a blockchain state with an backup file created/downloaded before."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Instructions:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Login into the frontend using the ",(0,s.jsx)(t.code,{children:"root"})," user"]}),"\n",(0,s.jsx)(t.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Restore"})," Button"]}),"\n",(0,s.jsx)(t.li,{children:"Select the backup that you want to restore"}),"\n",(0,s.jsx)(t.li,{children:"When the backup is successfully restored you will be logged out\nYou are now able to login with whatever user you want and should see the projects & subprojects from your backup."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"restore backup",src:n(73631).Z+"",width:"2250",height:"1266"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Only the ",(0,s.jsx)(t.code,{children:"root"})," user is allowed to restore backups of blockchain states."]}),"\n",(0,s.jsx)(t.li,{children:"The MULTICHAIN_RPC_PASSWORD of the Blockchain Backup needs to be equal to the password that is currently in use."}),"\n",(0,s.jsx)(t.li,{children:"During restoring errors might pop up in the frontend of other users connected"}),"\n",(0,s.jsx)(t.li,{children:"After successfully restored the blockchain state, the user is logged out."}),"\n"]})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},69643:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/create_backup-313d20874f80d32458a991889af30198.jpg"},73631:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/restore_backup-e016b944071472bacccb0c5320f64f68.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(67294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);