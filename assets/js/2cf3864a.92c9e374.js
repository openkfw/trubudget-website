(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3046],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=i,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4551:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r=["components"],l={},d="Updateing TruBudget",s={unversionedId:"operation-administration/update-trubudget",id:"operation-administration/update-trubudget",isDocsHomePage:!1,title:"Updateing TruBudget",description:"This guide shows three different possibilities how to safely update your Trubudget without any loss of data. Especially the wallet address and the node's private keys need to be remembered, so that the node can be identified within the network and doesn't need to ask for connect permissions again after the update. The wallet address and private keys are stored in the wallet.dat file located in the root folder of a multichain node.",source:"@site/docs/operation-administration/update-trubudget.md",sourceDirName:"operation-administration",slug:"/operation-administration/update-trubudget",permalink:"/trubudget-website/docs/operation-administration/update-trubudget",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/operation-administration/update-trubudget.md",version:"current",lastUpdatedBy:"Mayr Martin",lastUpdatedAt:1643289410,formattedLastUpdatedAt:"1/27/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multichain-Cli",permalink:"/trubudget-website/docs/operation-administration/multichain-cli"},next:{title:"Introduction",permalink:"/trubudget-website/docs/user-guide/README"}},c=[{value:"Full state backup",id:"full-state-backup",children:[]},{value:"Full state backup via backup endpoint",id:"full-state-backup-via-backup-endpoint",children:[]},{value:"Wallet backup",id:"wallet-backup",children:[{value:"wallet.dat",id:"walletdat",children:[]},{value:"params.dat",id:"paramsdat",children:[]},{value:"multichain.conf",id:"multichainconf",children:[]}]},{value:"Hints and Pitfalls",id:"hints-and-pitfalls",children:[]}],u={toc:c};function p(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updateing-trubudget"},"Updateing TruBudget"),(0,o.kt)("p",null,"This guide shows three different possibilities how to safely update your Trubudget without any loss of data. Especially the wallet address and the node's private keys need to be remembered, so that the node can be identified within the network and doesn't need to ask for connect permissions again after the update. The wallet address and private keys are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.dat")," file located in the root folder of a multichain node."),(0,o.kt)("h2",{id:"full-state-backup"},"Full state backup"),(0,o.kt)("p",null,"The full state of a node and all its configuration parameters is saved in the node's blockchain directory (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain/TrubudgetChain/"),"). When backing up the full state of your node, it is required to stop the container first, otherwise the consistency of the backed-up files cannot be ensured."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the multichain daemon of the node you want to update"),(0,o.kt)("li",{parentName:"ol"},"Copy the whole chain folder (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"TrubudgetChain"),") located in the .multichain folder of the node"),(0,o.kt)("li",{parentName:"ol"},"[Optional]"," Update Trubudget"),(0,o.kt)("li",{parentName:"ol"},"Put the copied chain folder in the .multichain folder of the new or updated node"),(0,o.kt)("li",{parentName:"ol"},"Start the multichain daemon again so it can connect with its old wallet address/private keys")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Note that a node which is started after an update but before replacing the chain folder, the node will ask for permission to connect to the network since it received a new wallet address."),(0,o.kt)("li",{parentName:"ul"},"If the Trubudget blockchain is running with docker there is currently no way to replace the folder before starting. The network will receive a network access request and currently it cannot be removed from the request stack."),(0,o.kt)("li",{parentName:"ul"},"Make sure the multichain folder especially the wallet.dat file is deleted or securely saved afterwards since it contains the node's private keys and wallet address.")))),(0,o.kt)("h2",{id:"full-state-backup-via-backup-endpoint"},"Full state backup via backup endpoint"),(0,o.kt)("p",null,"TruBudget provides a backup endpoint that allows to perform a backup via the frontend. For a detailed explanation how to create/restore a backup via the frontend check out this guide ",(0,o.kt)("a",{parentName:"p",href:"../user-guide/backup"},"Create/Restore a Backup"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into Trubudget's frontend with the root user"),(0,o.kt)("li",{parentName:"ol"},"Click the backup download button in the side navigation bar"),(0,o.kt)("li",{parentName:"ol"},"Caution: The downloaded backup.gz file can be used to restore the Trubudget node's state again including wallet address and private keys, so be careful."),(0,o.kt)("li",{parentName:"ol"},"Stop the node"),(0,o.kt)("li",{parentName:"ol"},"Update the node to a newer version"),(0,o.kt)("li",{parentName:"ol"},"Start the node again"),(0,o.kt)("li",{parentName:"ol"},"Log into Trubudget's frontend with the root user"),(0,o.kt)("li",{parentName:"ol"},"Click the backup restore button in the side navigation bar and provide the backup.gz file"),(0,o.kt)("li",{parentName:"ol"},"After a successful restore the root user is logged out automatically")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Only the root user can download/restore a backup via frontend/api."),(0,o.kt)("li",{parentName:"ul"},"Note that a node which is started after an update but before replacing the chain folder, the node will ask for permission to connect to the network since it received a new wallet address.")))),(0,o.kt)("h2",{id:"wallet-backup"},"Wallet backup"),(0,o.kt)("p",null,"It is possible to perform a backup only of the wallet.dat file. Thus it is not necessary to stop the node and the size of the backed-up data is considerably smaller. The wallet.dat is stored in a node's blockchain directory ",(0,o.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain/TrubudgetChain/"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the wallet.dat file located in a node's blockchain directory"),(0,o.kt)("li",{parentName:"ol"},"Obtain a another node's address"),(0,o.kt)("li",{parentName:"ol"},"Delete the node's blockchain directory"),(0,o.kt)("li",{parentName:"ol"},"[Optional]"," Update TruBudget"),(0,o.kt)("li",{parentName:"ol"},"Start to connect to the network using the previously obtained node address"),(0,o.kt)("li",{parentName:"ol"},"Replace the newly created wallet.dat file with the backed-up version of the wallet.dat file"),(0,o.kt)("li",{parentName:"ol"},"Start the multichain daemon again and connect to the network"),(0,o.kt)("li",{parentName:"ol"},"Delete the copy of the wallet.dat file")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hints")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MultiChain provides the API command ",(0,o.kt)("inlineCode",{parentName:"li"},"backupwallet")," to directly back up the wallet.dat file but it won't work with the TrubudgetChain, so it is required to copy the file manually."),(0,o.kt)("li",{parentName:"ul"},"Note that after the update a node asks for permission to connect again until the wallet.dat file is replaced since it received a new wallet address."),(0,o.kt)("li",{parentName:"ul"},"Make sure the multichain folder especially the wallet.dat file is deleted or securely saved afterwards since it contains the node's private keys and wallet address.")),(0,o.kt)("p",null,"For further information how to back up and restore a node check out the MultiChain Website: ",(0,o.kt)("a",{parentName:"p",href:"https://www.multichain.com/developers/backing-up-restoring-nodes/"},"Backing Up and Restoring Nodes"),"."),(0,o.kt)("h3",{id:"walletdat"},"wallet.dat"),(0,o.kt)("p",null,"In the wallet.dat file the wallet address and the private key of a node's wallet is stored. Based on a node's address it will be granted access by the master node. The node is then identified and remembered by its wallet address within the network. Since it's a node's identification it has to be kept confidential and should not be shared with any third party."),(0,o.kt)("h3",{id:"paramsdat"},"params.dat"),(0,o.kt)("p",null,"In the params.dat file all basic chain parameters are stored. The parameters configure the blockchain and can be modified before the blockchain is initialized. A node's parameters can be retrieved using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getblockchainparams")," API command."),(0,o.kt)("p",null,"A full list of the blockhain's parameters can be found on the MultiChain Website: ",(0,o.kt)("a",{parentName:"p",href:"https://www.multichain.com/developers/blockchain-parameters/"},"Blockchain Parameters"),"."),(0,o.kt)("h3",{id:"multichainconf"},"multichain.conf"),(0,o.kt)("p",null,"MultiChain creates two multichain.conf files. One is stored in the MultiChain's directory ",(0,o.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain")," and the other one inside of the TrubudgetChain's directory ",(0,o.kt)("inlineCode",{parentName:"p"},"[PathToMultichainData]/.multichain/TrubudgetChain"),". Both contain basic configuration parameters like the RPC Port, the RPC User, the RPC Password and the RPC Allow IP. The first multichain.conf file is created when the blockchain is set up. The second one is created when the node is initialized."),(0,o.kt)("h2",{id:"hints-and-pitfalls"},"Hints and Pitfalls"),(0,o.kt)("p",null,"A downloaded backup might sometimes be saved with an invalid hash. When trying to restore the backup using this corrupted .gz file, the error shown below might occur."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"restore backup failed",src:a(9545).Z})),(0,o.kt)("p",null,"If this error occurs and you are certain that the ",(0,o.kt)("inlineCode",{parentName:"p"},"backup.gz")," compressed folder you want to upload is indeed a valid TruBudget backup, you can run a script that will fix the invalid hash, in order to sucessfully restore the backup."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"/blockchain")," folder and open your favorite shell"),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run check_backup")," and add the path to the backup.gz file you want to fix (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'npm run check_backup -- "path/to/backup.gz"'),")"),(0,o.kt)("li",{parentName:"ol"},"The script will print out the result of the check which tells you if the backup is valid or not."),(0,o.kt)("li",{parentName:"ol"},"Optionally, type -f/--fix after the path. This option will also fix the hash if it is invalid. A new file ",(0,o.kt)("inlineCode",{parentName:"li"},"backup updated.gz")," will be created in the same location as the one you provided. It is an exact copy of your backup, but with a corrected hash"),(0,o.kt)("li",{parentName:"ol"},"You can now use this file to restore your backup")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your filename contains a blank space (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"backup (1).gz"),"), you should use quotation marks when entering the path, so it will be recognized as one argument and not two separate ones."))))}p.isMDXComponent=!0},9545:function(e,t,a){"use strict";t.Z=a.p+"assets/images/failed_restore_error-158bc4de255e3e2b9fa8f510a9bf6f60.jpeg"}}]);