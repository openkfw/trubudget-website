"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[43046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,k=p["".concat(d,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},42039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="Updating TruBudget",l={unversionedId:"operation-administration/update-trubudget",id:"operation-administration/update-trubudget",title:"Updating TruBudget",description:"This guide shows three different possibilities how to safely update your Trubudget without any loss of data. Especially the wallet address and the node's private keys need to be remembered, so that the node can be identified within the network and doesn't need to ask for connect permissions again after the update. The wallet address and private keys are stored in the wallet.dat file located in the root folder of a multichain node.",source:"@site/docs/operation-administration/update-trubudget.md",sourceDirName:"operation-administration",slug:"/operation-administration/update-trubudget",permalink:"/docs/operation-administration/update-trubudget",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/update-trubudget.md",tags:[],version:"current",lastUpdatedBy:"Georgia Moldovan",lastUpdatedAt:1697196098,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running TruBudget",permalink:"/docs/operation-administration/resource-requirements"},next:{title:"Introduction",permalink:"/docs/user-guide/"}},d={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Version update",id:"version-update",level:2},{value:"Minor version",id:"minor-version",level:3},{value:"Update from version 1.x to 2.x",id:"update-from-version-1x-to-2x",level:3},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Full state backup",id:"full-state-backup",level:3},{value:"Full state backup via backup feature",id:"full-state-backup-via-backup-feature",level:3},{value:"Wallet backup",id:"wallet-backup",level:3},{value:"wallet.dat",id:"walletdat",level:4},{value:"params.dat",id:"paramsdat",level:4},{value:"multichain.conf",id:"multichainconf",level:4},{value:"Hints and Pitfalls",id:"hints-and-pitfalls",level:3}],u={toc:s},p="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating-trubudget"},"Updating TruBudget"),(0,r.kt)("p",null,"This guide shows three different possibilities how to safely update your Trubudget without any loss of data. Especially the wallet address and the node's private keys need to be remembered, so that the node can be identified within the network and doesn't need to ask for connect permissions again after the update. The wallet address and private keys are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.dat")," file located in the root folder of a multichain node."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updating-trubudget"},"Updating TruBudget"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#version-update"},"Version update"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minor-version"},"Minor version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-from-version-1x-to-2x"},"Update from version 1.x to 2.x")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#backup-and-restore"},"Backup and restore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#full-state-backup"},"Full state backup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#full-state-backup-via-backup-feature"},"Full state backup via backup feature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#wallet-backup"},"Wallet backup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#walletdat"},"wallet.dat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#paramsdat"},"params.dat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multichainconf"},"multichain.conf")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hints-and-pitfalls"},"Hints and Pitfalls"))))))),(0,r.kt)("h2",{id:"version-update"},"Version update"),(0,r.kt)("h3",{id:"minor-version"},"Minor version"),(0,r.kt)("p",null,"In order to do the minor update of TruBudget e.g. from 2.0.0 to version 2.1.0 you are required to do several steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure the multichain data and other persistent data is saved. The recommended option is to use volumes to persist TruBudget data. This option mounts a volume into the container depending on your infrastructure you can use docker volumes (docker compose setup) or persistent volumes (kubernetes). If the data is not saved - ",(0,r.kt)("a",{parentName:"li",href:"#backup-and-restore"},"do a backup"),"."),(0,r.kt)("li",{parentName:"ol"},"Update the version used in the deployment. Use a specific release published on ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/u/trubudget"},"docker-hub"),". "),(0,r.kt)("li",{parentName:"ol"},"Check the changelog file for changes. All bigger modifications to the system which are relevant to the user are added to the CHANGELOG.md.\nAfter checking the changelog verify if additional actions are needed to enable new features. "),(0,r.kt)("li",{parentName:"ol"},"Restart TruBudget."),(0,r.kt)("li",{parentName:"ol"},"(Optional) Check the status page in the TruBudget UI if all components use the correct version.")),(0,r.kt)("h3",{id:"update-from-version-1x-to-2x"},"Update from version 1.x to 2.x"),(0,r.kt)("p",null,"In TruBudget 2.0.0, the Test and Prod Environment has been removed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openkfw/TruBudget/issues/954"},"#954"),". This means the DropDown menu to select Prod and Test at the Login-page is removed and the frontend and excel-export-service is only connected to one API and one Blockchain. If you want to update TruBudget 2.0.0 or higher from version 1.30.0 or lower, you must re-set some new ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," vars for your setup. If you want to use 2 Environments, you need to setup an additional Frontend with another URL and connect it to another API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Removed ",(0,r.kt)("inlineCode",{parentName:"th"},"env")," vars"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_TEST_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"Host address of API for Test environment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_TEST_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Port of API for Test environment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_PROD_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"Host address of API for Prod environment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_PROD_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Port of API for Prod environment")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"New ",(0,r.kt)("inlineCode",{parentName:"th"},"env")," vars"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"Host address of API that should be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Port of API that should be used")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want keep Prod and Test environment, you need to setup an additional Frontend with another URL and connect one to Test-API and one to Prod-API.")),(0,r.kt)("h2",{id:"backup-and-restore"},"Backup and restore"),(0,r.kt)("h3",{id:"full-state-backup"},"Full state backup"),(0,r.kt)("p",null,"The full state of a node and all its configuration parameters is saved in the node's blockchain directory (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain/TrubudgetChain/"),"). When backing up the full state of your node, it is required to stop the container first, otherwise the consistency of the backed-up files cannot be ensured."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the multichain daemon of the node you want to update"),(0,r.kt)("li",{parentName:"ol"},"Copy the whole chain folder (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"TrubudgetChain"),") located in the .multichain folder of the node"),(0,r.kt)("li",{parentName:"ol"},"[Optional]"," Update Trubudget"),(0,r.kt)("li",{parentName:"ol"},"Put the copied chain folder in the .multichain folder of the new or updated node"),(0,r.kt)("li",{parentName:"ol"},"Start the multichain daemon again so it can connect with its old wallet address/private keys")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Note that a node which is started after an update but before replacing the chain folder, the node will ask for permission to connect to the network since it received a new wallet address."),(0,r.kt)("li",{parentName:"ul"},"If the Trubudget blockchain is running with docker there is currently no way to replace the folder before starting. The network will receive a network access request and currently it cannot be removed from the request stack."),(0,r.kt)("li",{parentName:"ul"},"Make sure the multichain folder especially the wallet.dat file is deleted or securely saved afterwards since it contains the node's private keys and wallet address."))),(0,r.kt)("h3",{id:"full-state-backup-via-backup-feature"},"Full state backup via backup feature"),(0,r.kt)("p",null,"TruBudget provides a backup endpoint that allows to perform a backup via the frontend. For a detailed explanation how to create/restore a backup via the frontend check out this guide ",(0,r.kt)("a",{parentName:"p",href:"../user-guide/backup"},"Create/Restore a Backup"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into Trubudget's frontend with the root user"),(0,r.kt)("li",{parentName:"ol"},"Click the backup download button in the side navigation bar"),(0,r.kt)("li",{parentName:"ol"},"Caution: The downloaded backup.gz file can be used to restore the Trubudget node's state again including wallet address and private keys, so be careful."),(0,r.kt)("li",{parentName:"ol"},"Stop the node"),(0,r.kt)("li",{parentName:"ol"},"Update the node to a newer version"),(0,r.kt)("li",{parentName:"ol"},"Start the node again"),(0,r.kt)("li",{parentName:"ol"},"Log into Trubudget's frontend with the root user"),(0,r.kt)("li",{parentName:"ol"},"Click the backup restore button in the side navigation bar and provide the backup.gz file"),(0,r.kt)("li",{parentName:"ol"},"After a successful restore the root user is logged out automatically")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Only the root user can download/restore a backup via frontend/api."),(0,r.kt)("li",{parentName:"ul"},"Note that a node which is started after an update but before replacing the chain folder, the node will ask for permission to connect to the network since it received a new wallet address."))),(0,r.kt)("h3",{id:"wallet-backup"},"Wallet backup"),(0,r.kt)("p",null,"It is possible to perform a backup only of the wallet.dat file. Thus it is not necessary to stop the node and the size of the backed-up data is considerably smaller. The wallet.dat is stored in a node's blockchain directory ",(0,r.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain/TrubudgetChain/"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the wallet.dat file located in a node's blockchain directory"),(0,r.kt)("li",{parentName:"ol"},"Obtain a another node's address"),(0,r.kt)("li",{parentName:"ol"},"Delete the node's blockchain directory"),(0,r.kt)("li",{parentName:"ol"},"[Optional]"," Update TruBudget"),(0,r.kt)("li",{parentName:"ol"},"Start to connect to the network using the previously obtained node address"),(0,r.kt)("li",{parentName:"ol"},"Replace the newly created wallet.dat file with the backed-up version of the wallet.dat file"),(0,r.kt)("li",{parentName:"ol"},"Start the multichain daemon again and connect to the network"),(0,r.kt)("li",{parentName:"ol"},"Delete the copy of the wallet.dat file")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hints")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MultiChain provides the API command ",(0,r.kt)("inlineCode",{parentName:"li"},"backupwallet")," to directly back up the wallet.dat file but it won't work with the TrubudgetChain, so it is required to copy the file manually."),(0,r.kt)("li",{parentName:"ul"},"Note that after the update a node asks for permission to connect again until the wallet.dat file is replaced since it received a new wallet address."),(0,r.kt)("li",{parentName:"ul"},"Make sure the multichain folder especially the wallet.dat file is deleted or securely saved afterwards since it contains the node's private keys and wallet address.")),(0,r.kt)("p",null,"For further information how to back up and restore a node check out the MultiChain Website: ",(0,r.kt)("a",{parentName:"p",href:"https://www.multichain.com/developers/backing-up-restoring-nodes/"},"Backing Up and Restoring Nodes"),"."),(0,r.kt)("h4",{id:"walletdat"},"wallet.dat"),(0,r.kt)("p",null,"In the wallet.dat file the wallet address and the private key of a node's wallet is stored. Based on a node's address it will be granted access by the alpha node. The node is then identified and remembered by its wallet address within the network. Since it's a node's identification it has to be kept confidential and should not be shared with any third party."),(0,r.kt)("h4",{id:"paramsdat"},"params.dat"),(0,r.kt)("p",null,"In the params.dat file all basic chain parameters are stored. The parameters configure the blockchain and can be modified before the blockchain is initialized. A node's parameters can be retrieved using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getblockchainparams")," API command."),(0,r.kt)("p",null,"A full list of the blockhain's parameters can be found on the MultiChain Website: ",(0,r.kt)("a",{parentName:"p",href:"https://www.multichain.com/developers/blockchain-parameters/"},"Blockchain Parameters"),"."),(0,r.kt)("h4",{id:"multichainconf"},"multichain.conf"),(0,r.kt)("p",null,"MultiChain creates two multichain.conf files. One is stored in the MultiChain's directory ",(0,r.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain")," and the other one inside of the TrubudgetChain's directory ",(0,r.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain/TrubudgetChain"),". Both contain basic configuration parameters like the RPC Port, the RPC User, the RPC Password and the RPC Allow IP. The first multichain.conf file is created when the blockchain is set up. The second one is created when the node is initialized."),(0,r.kt)("h3",{id:"hints-and-pitfalls"},"Hints and Pitfalls"),(0,r.kt)("p",null,"A downloaded backup might sometimes be saved with an invalid hash. When trying to restore the backup using this corrupted .gz file, the error shown below might occur."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore backup failed",src:a(45087).Z,width:"2211",height:"1657"})),(0,r.kt)("p",null,"If this error occurs and you are certain that the ",(0,r.kt)("inlineCode",{parentName:"p"},"backup.gz")," compressed folder you want to upload is indeed a valid TruBudget backup, you can run a script that will fix the invalid hash, in order to sucessfully restore the backup."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/blockchain")," folder and open your favorite shell"),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run check_backup")," and add the path to the backup.gz file you want to fix (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'npm run check_backup -- "path/to/backup.gz"'),")"),(0,r.kt)("li",{parentName:"ol"},"The script will print out the result of the check which tells you if the backup is valid or not."),(0,r.kt)("li",{parentName:"ol"},"Optionally, type -f/--fix after the path. This option will also fix the hash if it is invalid. A new file ",(0,r.kt)("inlineCode",{parentName:"li"},"backup updated.gz")," will be created in the same location as the one you provided. It is an exact copy of your backup, but with a corrected hash"),(0,r.kt)("li",{parentName:"ol"},"You can now use this file to restore your backup")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your filename contains a blank space (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"backup (1).gz"),"), you should use quotation marks when entering the path, so it will be recognized as one argument and not two separate ones.")))}c.isMDXComponent=!0},45087:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/failed_restore_error-158bc4de255e3e2b9fa8f510a9bf6f60.jpeg"}}]);