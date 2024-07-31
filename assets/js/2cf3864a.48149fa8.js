"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[43046],{57382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(85893),a=n(11151);const r={},s="Updating TruBudget",d={id:"operation-administration/update-trubudget",title:"Updating TruBudget",description:"This guide shows three different possibilities how to safely update your Trubudget without any loss of data. Especially the wallet address and the node's private keys need to be remembered, so that the node can be identified within the network and doesn't need to ask for connect permissions again after the update. The wallet address and private keys are stored in the wallet.dat file located in the root folder of a multichain node.",source:"@site/docs/operation-administration/update-trubudget.md",sourceDirName:"operation-administration",slug:"/operation-administration/update-trubudget",permalink:"/docs/operation-administration/update-trubudget",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/update-trubudget.md",tags:[],version:"current",lastUpdatedBy:"MartinJurcoGlina",lastUpdatedAt:1722425965,formattedLastUpdatedAt:"Jul 31, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Telemetry",permalink:"/docs/operation-administration/telemetry"},next:{title:"Introduction",permalink:"/docs/user-guide/"}},o={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Version update",id:"version-update",level:2},{value:"Minor version",id:"minor-version",level:3},{value:"Update from version 1.x to 2.x",id:"update-from-version-1x-to-2x",level:3},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Full state backup",id:"full-state-backup",level:3},{value:"Full state backup via backup feature",id:"full-state-backup-via-backup-feature",level:3},{value:"Wallet backup",id:"wallet-backup",level:3},{value:"wallet.dat",id:"walletdat",level:4},{value:"params.dat",id:"paramsdat",level:4},{value:"multichain.conf",id:"multichainconf",level:4},{value:"Hints and Pitfalls",id:"hints-and-pitfalls",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"updating-trubudget",children:"Updating TruBudget"}),"\n",(0,i.jsxs)(t.p,{children:["This guide shows three different possibilities how to safely update your Trubudget without any loss of data. Especially the wallet address and the node's private keys need to be remembered, so that the node can be identified within the network and doesn't need to ask for connect permissions again after the update. The wallet address and private keys are stored in the ",(0,i.jsx)(t.code,{children:"wallet.dat"})," file located in the root folder of a multichain node."]}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#updating-trubudget",children:"Updating TruBudget"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#version-update",children:"Version update"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#minor-version",children:"Minor version"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#update-from-version-1x-to-2x",children:"Update from version 1.x to 2.x"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#backup-and-restore",children:"Backup and restore"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#full-state-backup",children:"Full state backup"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#full-state-backup-via-backup-feature",children:"Full state backup via backup feature"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#wallet-backup",children:"Wallet backup"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#walletdat",children:"wallet.dat"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#paramsdat",children:"params.dat"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#multichainconf",children:"multichain.conf"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#hints-and-pitfalls",children:"Hints and Pitfalls"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"version-update",children:"Version update"}),"\n",(0,i.jsx)(t.h3,{id:"minor-version",children:"Minor version"}),"\n",(0,i.jsx)(t.p,{children:"In order to do the minor update of TruBudget e.g. from 2.0.0 to version 2.1.0 you are required to do several steps."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure the multichain data and other persistent data is saved. The recommended option is to use volumes to persist TruBudget data. This option mounts a volume into the container depending on your infrastructure you can use docker volumes (docker compose setup) or persistent volumes (kubernetes). If the data is not saved - ",(0,i.jsx)(t.a,{href:"#backup-and-restore",children:"do a backup"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Update the version used in the deployment. Use a specific release published on ",(0,i.jsx)(t.a,{href:"https://hub.docker.com/u/trubudget",children:"docker-hub"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Check the changelog file for changes. All bigger modifications to the system which are relevant to the user are added to the CHANGELOG.md.\nAfter checking the changelog verify if additional actions are needed to enable new features."}),"\n",(0,i.jsx)(t.li,{children:"Restart TruBudget."}),"\n",(0,i.jsx)(t.li,{children:"(Optional) Check the status page in the TruBudget UI if all components use the correct version."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"update-from-version-1x-to-2x",children:"Update from version 1.x to 2.x"}),"\n",(0,i.jsxs)(t.p,{children:["In TruBudget 2.0.0, the Test and Prod Environment has been removed in ",(0,i.jsx)(t.a,{href:"https://github.com/openkfw/TruBudget/issues/954",children:"#954"}),". This means the DropDown menu to select Prod and Test at the Login-page is removed and the frontend and excel-export-service is only connected to one API and one Blockchain. If you want to update TruBudget 2.0.0 or higher from version 1.30.0 or lower, you must re-set some new ",(0,i.jsx)(t.code,{children:"env"})," vars for your setup. If you want to use 2 Environments, you need to setup an additional Frontend with another URL and connect it to another API."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:["Removed ",(0,i.jsx)(t.code,{children:"env"})," vars"]}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"API_TEST_HOST"}),(0,i.jsx)(t.td,{children:"Host address of API for Test environment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"API_TEST_PORT"}),(0,i.jsx)(t.td,{children:"Port of API for Test environment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"API_PROD_HOST"}),(0,i.jsx)(t.td,{children:"Host address of API for Prod environment"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"API_PROD_PORT"}),(0,i.jsx)(t.td,{children:"Port of API for Prod environment"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:["New ",(0,i.jsx)(t.code,{children:"env"})," vars"]}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"API_HOST"}),(0,i.jsx)(t.td,{children:"Host address of API that should be used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"API_PORT"}),(0,i.jsx)(t.td,{children:"Port of API that should be used"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If you want keep Prod and Test environment, you need to setup an additional Frontend with another URL and connect one to Test-API and one to Prod-API."})}),"\n",(0,i.jsx)(t.h2,{id:"backup-and-restore",children:"Backup and restore"}),"\n",(0,i.jsx)(t.h3,{id:"full-state-backup",children:"Full state backup"}),"\n",(0,i.jsxs)(t.p,{children:["The full state of a node and all its configuration parameters is saved in the node's blockchain directory (e.g. ",(0,i.jsx)(t.code,{children:"[PathToMultichainData]/.multichain/TrubudgetChain/"}),"). When backing up the full state of your node, it is required to stop the container first, otherwise the consistency of the backed-up files cannot be ensured."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Stop the multichain daemon of the node you want to update"}),"\n",(0,i.jsxs)(t.li,{children:["Copy the whole chain folder (e.g. ",(0,i.jsx)(t.code,{children:"TrubudgetChain"}),") located in the .multichain folder of the node"]}),"\n",(0,i.jsx)(t.li,{children:"[Optional] Update Trubudget"}),"\n",(0,i.jsx)(t.li,{children:"Put the copied chain folder in the .multichain folder of the new or updated node"}),"\n",(0,i.jsx)(t.li,{children:"Start the multichain daemon again so it can connect with its old wallet address/private keys"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note that a node which is started after an update but before replacing the chain folder, the node will ask for permission to connect to the network since it received a new wallet address."}),"\n",(0,i.jsx)(t.li,{children:"If the Trubudget blockchain is running with docker there is currently no way to replace the folder before starting. The network will receive a network access request and currently it cannot be removed from the request stack."}),"\n",(0,i.jsx)(t.li,{children:"Make sure the multichain folder especially the wallet.dat file is deleted or securely saved afterwards since it contains the node's private keys and wallet address."}),"\n"]})}),"\n",(0,i.jsx)(t.h3,{id:"full-state-backup-via-backup-feature",children:"Full state backup via backup feature"}),"\n",(0,i.jsxs)(t.p,{children:["TruBudget provides a backup endpoint that allows to perform a backup via the frontend. For a detailed explanation how to create/restore a backup via the frontend check out this guide ",(0,i.jsx)(t.a,{href:"../user-guide/backup",children:"Create/Restore a Backup"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Log into Trubudget's frontend with the root user"}),"\n",(0,i.jsx)(t.li,{children:"Click the backup download button in the side navigation bar"}),"\n",(0,i.jsx)(t.li,{children:"Caution: The downloaded backup.gz file can be used to restore the Trubudget node's state again including wallet address and private keys, so be careful."}),"\n",(0,i.jsx)(t.li,{children:"Stop the node"}),"\n",(0,i.jsx)(t.li,{children:"Update the node to a newer version"}),"\n",(0,i.jsx)(t.li,{children:"Start the node again"}),"\n",(0,i.jsx)(t.li,{children:"Log into Trubudget's frontend with the root user"}),"\n",(0,i.jsx)(t.li,{children:"Click the backup restore button in the side navigation bar and provide the backup.gz file"}),"\n",(0,i.jsx)(t.li,{children:"After a successful restore the root user is logged out automatically"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Only the root user can download/restore a backup via frontend/api."}),"\n",(0,i.jsx)(t.li,{children:"Note that a node which is started after an update but before replacing the chain folder, the node will ask for permission to connect to the network since it received a new wallet address."}),"\n"]})}),"\n",(0,i.jsx)(t.h3,{id:"wallet-backup",children:"Wallet backup"}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to perform a backup only of the wallet.dat file. Thus it is not necessary to stop the node and the size of the backed-up data is considerably smaller. The wallet.dat is stored in a node's blockchain directory ",(0,i.jsx)(t.code,{children:"[PathToMultichainData]/.multichain/TrubudgetChain/"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Copy the wallet.dat file located in a node's blockchain directory"}),"\n",(0,i.jsx)(t.li,{children:"Obtain a another node's address"}),"\n",(0,i.jsx)(t.li,{children:"Delete the node's blockchain directory"}),"\n",(0,i.jsx)(t.li,{children:"[Optional] Update TruBudget"}),"\n",(0,i.jsx)(t.li,{children:"Start to connect to the network using the previously obtained node address"}),"\n",(0,i.jsx)(t.li,{children:"Replace the newly created wallet.dat file with the backed-up version of the wallet.dat file"}),"\n",(0,i.jsx)(t.li,{children:"Start the multichain daemon again and connect to the network"}),"\n",(0,i.jsx)(t.li,{children:"Delete the copy of the wallet.dat file"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Hints"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["MultiChain provides the API command ",(0,i.jsx)(t.code,{children:"backupwallet"})," to directly back up the wallet.dat file but it won't work with the TrubudgetChain, so it is required to copy the file manually."]}),"\n",(0,i.jsx)(t.li,{children:"Note that after the update a node asks for permission to connect again until the wallet.dat file is replaced since it received a new wallet address."}),"\n",(0,i.jsx)(t.li,{children:"Make sure the multichain folder especially the wallet.dat file is deleted or securely saved afterwards since it contains the node's private keys and wallet address."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For further information how to back up and restore a node check out the MultiChain Website: ",(0,i.jsx)(t.a,{href:"https://www.multichain.com/developers/backing-up-restoring-nodes/",children:"Backing Up and Restoring Nodes"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"walletdat",children:"wallet.dat"}),"\n",(0,i.jsx)(t.p,{children:"In the wallet.dat file the wallet address and the private key of a node's wallet is stored. Based on a node's address it will be granted access by the alpha node. The node is then identified and remembered by its wallet address within the network. Since it's a node's identification it has to be kept confidential and should not be shared with any third party."}),"\n",(0,i.jsx)(t.h4,{id:"paramsdat",children:"params.dat"}),"\n",(0,i.jsxs)(t.p,{children:["In the params.dat file all basic chain parameters are stored. The parameters configure the blockchain and can be modified before the blockchain is initialized. A node's parameters can be retrieved using the ",(0,i.jsx)(t.code,{children:"getblockchainparams"})," API command."]}),"\n",(0,i.jsxs)(t.p,{children:["A full list of the blockhain's parameters can be found on the MultiChain Website: ",(0,i.jsx)(t.a,{href:"https://www.multichain.com/developers/blockchain-parameters/",children:"Blockchain Parameters"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"multichainconf",children:"multichain.conf"}),"\n",(0,i.jsxs)(t.p,{children:["MultiChain creates two multichain.conf files. One is stored in the MultiChain's directory ",(0,i.jsx)(t.code,{children:"[PathToMultichainData]/.multichain"})," and the other one inside of the TrubudgetChain's directory ",(0,i.jsx)(t.code,{children:"[PathToMultichainData]/.multichain/TrubudgetChain"}),". Both contain basic configuration parameters like the RPC Port, the RPC User, the RPC Password and the RPC Allow IP. The first multichain.conf file is created when the blockchain is set up. The second one is created when the node is initialized."]}),"\n",(0,i.jsx)(t.h3,{id:"hints-and-pitfalls",children:"Hints and Pitfalls"}),"\n",(0,i.jsx)(t.p,{children:"A downloaded backup might sometimes be saved with an invalid hash. When trying to restore the backup using this corrupted .gz file, the error shown below might occur."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"restore backup failed",src:n(45087).Z+"",width:"2211",height:"1657"})}),"\n",(0,i.jsxs)(t.p,{children:["If this error occurs and you are certain that the ",(0,i.jsx)(t.code,{children:"backup.gz"})," compressed folder you want to upload is indeed a valid TruBudget backup, you can run a script that will fix the invalid hash, in order to sucessfully restore the backup."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to the ",(0,i.jsx)(t.code,{children:"/blockchain"})," folder and open your favorite shell"]}),"\n",(0,i.jsxs)(t.li,{children:["Type ",(0,i.jsx)(t.code,{children:"npm run check_backup"})," and add the path to the backup.gz file you want to fix (e.g. ",(0,i.jsx)(t.code,{children:'npm run check_backup -- "path/to/backup.gz"'}),")"]}),"\n",(0,i.jsx)(t.li,{children:"The script will print out the result of the check which tells you if the backup is valid or not."}),"\n",(0,i.jsxs)(t.li,{children:["Optionally, type -f/--fix after the path. This option will also fix the hash if it is invalid. A new file ",(0,i.jsx)(t.code,{children:"backup updated.gz"})," will be created in the same location as the one you provided. It is an exact copy of your backup, but with a corrected hash"]}),"\n",(0,i.jsx)(t.li,{children:"You can now use this file to restore your backup"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If your filename contains a blank space (e.g. ",(0,i.jsx)(t.code,{children:"backup (1).gz"}),"), you should use quotation marks when entering the path, so it will be recognized as one argument and not two separate ones."]})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},45087:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/failed_restore_error-158bc4de255e3e2b9fa8f510a9bf6f60.jpeg"},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var i=n(67294);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);