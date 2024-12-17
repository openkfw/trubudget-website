"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[77503],{80891:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-guide/users-and-groups/permissions","title":"Permissions","description":"Description:","source":"@site/docs/user-guide/users-and-groups/permissions.md","sourceDirName":"user-guide/users-and-groups","slug":"/user-guide/users-and-groups/permissions","permalink":"/docs/user-guide/users-and-groups/permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/master/website/docs/user-guide/users-and-groups/permissions.md","tags":[],"version":"current","lastUpdatedBy":"Peter Baus","lastUpdatedAt":1734439313000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Group","permalink":"/docs/user-guide/users-and-groups/group"},"next":{"title":"Project","permalink":"/docs/user-guide/projects/project"}}');var n=i(74848),r=i(28453);const o={sidebar_position:3},l="Permissions",c={},d=[{value:"Global permissions",id:"global-permissions",level:2},{value:"New permissions",id:"new-permissions",level:3},{value:"Admin permissions",id:"admin-permissions",level:3},{value:"Project permissions",id:"project-permissions",level:2},{value:"View permissions",id:"view-permissions",level:3},{value:"Write permissions",id:"write-permissions",level:3},{value:"Admin permissions",id:"admin-permissions-1",level:3},{value:"Subproject permissions",id:"subproject-permissions",level:2},{value:"View permissions",id:"view-permissions-1",level:3},{value:"Write permissions",id:"write-permissions-1",level:3},{value:"Admin permissions",id:"admin-permissions-2",level:3},{value:"Workflow permissions",id:"workflow-permissions",level:2},{value:"View permissions",id:"view-permissions-2",level:3},{value:"Write permissions",id:"write-permissions-2",level:3},{value:"Admin permissions",id:"admin-permissions-3",level:3},{value:"Permission intents",id:"permission-intents",level:2}];function h(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"permissions",children:"Permissions"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(s.p,{children:['The purpose of a permission is to allow access to information or functionality to certain users only. Most permissions\nare self explaining, but if more information are required click on the intent of the permission. The intent for example\nfor "create User" would be global.createUser. A complete ',(0,n.jsx)(s.a,{href:"#permission-intents",children:"list of all existing permissions"})," can be\nfound at the end of this document."]}),"\n",(0,n.jsx)(s.h2,{id:"global-permissions",children:"Global permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"All permissions not limited to projects, subprojects or workflowitems are global permissions. Global permissions can be\nadded to users or to groups.\nAll global permissions are documented at the bottom of this document."}),"\n",(0,n.jsx)(s.h3,{id:"new-permissions",children:"New permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"Once a user/group is created, administrators can grant/revoke global permissions for them."}),"\n",(0,n.jsx)(s.h3,{id:"admin-permissions",children:"Admin permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"A sample set of global permissions are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"... create projects"}),"\n",(0,n.jsx)(s.li,{children:"... create user/group"}),"\n",(0,n.jsx)(s.li,{children:"... grant/revoke global permissions to others"}),"\n",(0,n.jsx)(s.li,{children:"... access the nodes section"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(s.li,{children:'Click the "User" menu point'}),"\n",(0,n.jsx)(s.li,{children:"Click the lock item in line of the user that you want to grant/revoke permissions.."}),"\n",(0,n.jsx)(s.li,{children:"Select the permissions that you want to grant/revoke"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"open global permission dialog",src:i(77336).A+"",width:"1849",height:"933"})}),"\n",(0,n.jsx)(s.h2,{id:"project-permissions",children:"Project permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"These section describes all permissions related to a project. Selecting a user or group grant them the specific\npermission and deselecting revoke them the specific permissions."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(s.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(s.li,{children:"Click the lock icon in the bottom right corner of a project to open the permissions dialog"}),"\n",(0,n.jsx)(s.li,{children:"After selecting/deselecting certain users or groups click on submit to open a confirmation"}),"\n",(0,n.jsx)(s.li,{children:"If additional permissions are required the confirmation dialog lists these."}),"\n",(0,n.jsx)(s.li,{children:"Confirming the dialog first executes all additional actions listed if there are any, then grant/revoke the\nusers/groups"}),"\n",(0,n.jsx)(s.li,{children:"If no additional permissions have to be granted the users/groups are granted/revoked all selected permissions"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"open project permission dialog",src:i(11532).A+"",width:"2400",height:"1106"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["More information about a specific intent can be found in the ",(0,n.jsx)(s.a,{href:"../projects/project",children:"project section"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"The user who created the project is automatically assigned to it."}),"\n",(0,n.jsx)(s.li,{children:"Granting assign permissions also grants view permission-permissions because it is needed in the assign process."}),"\n",(0,n.jsxs)(s.li,{children:["More information about the confirmation dialog can be found in the ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation section"}),"."]}),"\n"]})}),"\n",(0,n.jsx)(s.h3,{id:"view-permissions",children:"View permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"view project in overview" : show the project on the overview site'}),"\n",(0,n.jsx)(s.li,{children:'"view project details" : show the project\'s details by accessing the project details site'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h3,{id:"write-permissions",children:"Write permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"Create subprojects" : create a subproject'}),"\n",(0,n.jsx)(s.li,{children:'"Assign project to others" : assign a user/group to a project'}),"\n",(0,n.jsx)(s.li,{children:'"Close project" : close a project'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h3,{id:"admin-permissions-1",children:"Admin permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"View permissions" : show which user/group has which permission on the project'}),"\n",(0,n.jsx)(s.li,{children:'"Grant permissions" - grant project permissions to a user/group'}),"\n",(0,n.jsx)(s.li,{children:'"Revoke permissions" - revoke project permissions from a user/group'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h2,{id:"subproject-permissions",children:"Subproject permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"These section describes all permissions related to a subproject"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(s.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(s.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(s.li,{children:"Click the lock icon on the right of the subproject to open the permissions dialog"}),"\n",(0,n.jsx)(s.li,{children:"After selecting/deselecting certain users or groups click on submit to open a confirmation"}),"\n",(0,n.jsx)(s.li,{children:"If additional permissions are required the confirmation dialog lists these."}),"\n",(0,n.jsx)(s.li,{children:"Confirming the dialog first executes all additional actions listed if there are any, then grant/revoke the\nusers/groups"}),"\n",(0,n.jsx)(s.li,{children:"If no additional permissions have to be granted the users/groups are granted/revoked all selected permissions"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"open subproject permission dialog",src:i(23624).A+"",width:"1849",height:"867"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["More information about a specific action on a subproject can be found in\nthe ",(0,n.jsx)(s.a,{href:"./../projects/subproject",children:"subproject section"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"view-permissions-1",children:"View permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"Following intents do exist related to view permissions of a subproject:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"view subproject overview" : show the subproject on the project detail site'}),"\n",(0,n.jsx)(s.li,{children:'"view subproject details" : show the subproject\'s details by accessing the subproject details site'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]}),"\n",(0,n.jsx)(s.li,{children:'"view project overview" and "view project details" are also required to view a subproject'}),"\n"]})}),"\n",(0,n.jsx)(s.h3,{id:"write-permissions-1",children:"Write permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"Following intents do exist related to write permissions of a project:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"Create workflow items" : create a workflowitem'}),"\n",(0,n.jsx)(s.li,{children:'"Update subproject" : edit title, currency, comment or budget amount of the subproject'}),"\n",(0,n.jsx)(s.li,{children:'"Assign subproject" : assign a user/group to the subproject'}),"\n",(0,n.jsx)(s.li,{children:'"Close subproject" : close the subproject'}),"\n",(0,n.jsx)(s.li,{children:'"Reorder workflow items" : reorder workflowitems that are not redacted/closed'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h3,{id:"admin-permissions-2",children:"Admin permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"View subproject permissions" : show which user/group has which permission on the subproject'}),"\n",(0,n.jsx)(s.li,{children:'"Grant subproject permissions" - grant subproject permissions to a user/group'}),"\n",(0,n.jsx)(s.li,{children:'"Revoke subproject permissions" - revoke subproject permissions from a user/group'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h2,{id:"workflow-permissions",children:"Workflow permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"These section describes all permissions related to a workflowitem"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Instructions:"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Click the button in the upper left corner to open the side-navigation-bar"}),"\n",(0,n.jsx)(s.li,{children:'Click the "Projects" menu point'}),"\n",(0,n.jsx)(s.li,{children:"Click the blue magnifier icon in the bottom right corner of a project"}),"\n",(0,n.jsx)(s.li,{children:"Click the grey magnifier icon on the most right of the subproject you want to view"}),"\n",(0,n.jsx)(s.li,{children:"Click the lock icon on the right of the workflowitem to open the permissions dialog"}),"\n",(0,n.jsx)(s.li,{children:"After selecting/deselecting certain users or groups click on submit to open a confirmation"}),"\n",(0,n.jsx)(s.li,{children:"If additional permissions are required the confirmation dialog lists these."}),"\n",(0,n.jsx)(s.li,{children:"Confirming the dialog first executes all additional actions listed if there are any, then grant/revoke the\nusers/groups"}),"\n",(0,n.jsx)(s.li,{children:"If no additional permissions have to be granted the users/groups are granted/revoked all selected permissions"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"open workflowitem permission dialog",src:i(35207).A+"",width:"1829",height:"937"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["More information about a specific intent can be found in the ",(0,n.jsx)(s.a,{href:"./../projects/workflowitem",children:"workflowitem section"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"If a user has any write permission but no view permission the workflowitem is shown as redacted."}),"\n"]})}),"\n",(0,n.jsx)(s.h3,{id:"view-permissions-2",children:"View permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"Following intents do exist related to view permissions of a subproject:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"View workflowitem" : show the workflowitem\' details on the subproject detail site'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]}),"\n",(0,n.jsx)(s.li,{children:'"view project overview", "view project details", "view subproject overview" and "view subproject details" are also\nrequired to view a workflowitem'}),"\n"]})}),"\n",(0,n.jsx)(s.h3,{id:"write-permissions-2",children:"Write permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"Following intents do exist related to write permissions of a project:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"Assign workflowitem" : assign a user/group to the workflowitem'}),"\n",(0,n.jsx)(s.li,{children:'"Update workflowitem" : edit title, comment, budget or add documents to the workflowitem'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h3,{id:"admin-permissions-3",children:"Admin permissions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description:"})}),"\n",(0,n.jsx)(s.p,{children:"Following permissions do exist related to a workflowitem:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'"View subproject permissions" : show which user/group has which permission on the workflowitem'}),"\n",(0,n.jsx)(s.li,{children:'"Grant subproject permissions" - grant workflowitem permissions to a user/group'}),"\n",(0,n.jsx)(s.li,{children:'"Revoke subproject permissions" - revoke workflowitem permissions from a user/group'}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If the grantee has not all necessary view permissions yet a dialog opens which shows all required permissions.\nOn confirm they are granted. (see ",(0,n.jsx)(s.a,{href:"./../confirmation",children:"confirmation"})," for more Details)"]})}),"\n",(0,n.jsx)(s.h2,{id:"permission-intents",children:"Permission intents"}),"\n",(0,n.jsxs)(s.p,{children:["Following list describes all existing permissions. If you need more information how you can make use of a specific\npermission, access the documentation of the specific section via the ",(0,n.jsx)(s.a,{href:"../README",children:"User-Guide overview"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Intent"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"network.listActive"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show how many peers are connected to the current network in the upper right corner (currently logged in user excluded)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.listPermissions"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the intent has no influence on the trubudget website"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.grantPermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"assign admin permissions to a user while creating a user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.grantAllPermissions"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"assign admin permissions to a user while creating a user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.revokePermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the intent has no influence on the trubudget website"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.createProject"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"create a project on the overview site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.createUser"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"create a user with or without admin permissions (requires global.grantPermission)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.disableUser"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"disable a user (user is not able to login nor to be assigned, permissions persist)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.enableUser"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"enable a user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"global.createGroup"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"create a group with or without admin permissions"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"group.addUser"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"add a user/group to a group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"group.removeUser"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"add a user/group to a group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"network.list"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"access the nodes site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"network.voteForPermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"vote for a new organization to join the network"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"network.approveNewOrganization"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"approve a new organization to join the network"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"network.approveNewNodeForExistingOrganization"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"approve a new node for an existing organization"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.list"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show the project on the overview site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.viewDetails"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show the project's details by accessing the project details site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.assign"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"assign a user/group to the project"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.update"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the intent has no influence on the trubudget website"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.intent.listPermissions"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show which user/group has which permission on the project"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.intent.grantPermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"grant project permissions to a user/group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.intent.revokePermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"revoke project permissions from a user/group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.createSubproject"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"create a subproject"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.viewHistory"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"access the history of the project"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"project.close"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"close the project"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.list"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show the subproject on the project detail site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.viewDetails"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show the subproject's details by accessing the subproject details site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.assign"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"assign a user/group to the subproject"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.update"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"edit title, currency, comment or budget amount of the subproject"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.intent.listPermissions"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show which user/group has which permission on the subproject"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.intent.grantPermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"grant subproject permissions to a user/group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.intent.revokePermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"revoke subproject permissions from a user/group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.createWorkflowitem"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"create a workflowitem"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.viewHistory"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"access the history of the subproject"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.close"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"close the subproject"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"subproject.reorderWorkflowitems"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"reorder workflowitems that are not redacted/closed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"workflowitem.list"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show the workflowitem' details on the subproject detail site"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"workflowitem.assign"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"assign a user/group to the workflowitem"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"workflowitem.update"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"edit title, comment, budget or add documents to the workflowitem"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"workflowitem.intent.listPermissions"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"show which user/group has which permission on the workflowitem"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"workflowitem.intent.grantPermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"grant workflowitem permissions to a user/group"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"workflowitem.intent.revokePermission"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"revoke workflowitem permissions from a user/group"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},77336:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/open_global_permission_dialog-679f28e44b8f0df6dbd8f400f0a9352d.png"},11532:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/open_project_permission_dialog-9c9c59f6288bd6321269f696ec15fe01.jpg"},23624:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/open_subproject_permission_dialog-16c10058e7326062c6280a206d843fb9.png"},35207:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/open_workflowitem_permission_dialog-df760f7b4ed5cf1c4ec71db65017c17b.png"},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>l});var t=i(96540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);