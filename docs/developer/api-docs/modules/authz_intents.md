# authz/intents
[Api Code Documentation](../README.md) / [Exports](../modules.md) / authz/intents

## Table of contents

### Type Aliases

- [ExposableIntent](authz_intents.md#exposableintent)
- [default](authz_intents.md#default)

### Variables

- [allIntents](authz_intents.md#allintents)
- [globalIntents](authz_intents.md#globalintents)
- [groupIntents](authz_intents.md#groupintents)
- [projectIntents](authz_intents.md#projectintents)
- [subprojectIntents](authz_intents.md#subprojectintents)
- [userAssignableIntents](authz_intents.md#userassignableintents)
- [userDefaultIntents](authz_intents.md#userdefaultintents)
- [userIntents](authz_intents.md#userintents)
- [workflowitemIntents](authz_intents.md#workflowitemintents)

## Type Aliases

### ExposableIntent

Ƭ **ExposableIntent**: `Exclude`\<[`default`](authz_intents.md#default), ``"project.close"`` \| ``"subproject.close"`` \| ``"workflowitem.close"``\>

#### Defined in

[src/authz/intents.ts:1](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L1)

___

### default

Ƭ **default**: ``"global.listPermissions"`` \| ``"global.grantPermission"`` \| ``"global.grantAllPermissions"`` \| ``"global.revokePermission"`` \| ``"global.createProject"`` \| ``"global.createUser"`` \| ``"global.enableUser"`` \| ``"global.disableUser"`` \| ``"global.listAssignments"`` \| ``"global.createGroup"`` \| ``"user.authenticate"`` \| ``"user.changePassword"`` \| ``"user.list"`` \| ``"user.intent.listPermissions"`` \| ``"user.intent.grantPermission"`` \| ``"user.intent.revokePermission"`` \| ``"group.addUser"`` \| ``"group.removeUser"`` \| ``"project.intent.listPermissions"`` \| ``"project.intent.grantPermission"`` \| ``"project.intent.revokePermission"`` \| ``"project.list"`` \| ``"project.viewDetails"`` \| ``"project.viewHistory"`` \| ``"project.assign"`` \| ``"project.update"`` \| ``"project.close"`` \| ``"project.createSubproject"`` \| ``"project.budget.updateProjected"`` \| ``"project.budget.deleteProjected"`` \| ``"subproject.intent.listPermissions"`` \| ``"subproject.intent.grantPermission"`` \| ``"subproject.intent.revokePermission"`` \| ``"subproject.list"`` \| ``"subproject.viewDetails"`` \| ``"subproject.viewHistory"`` \| ``"subproject.assign"`` \| ``"subproject.update"`` \| ``"subproject.close"`` \| ``"subproject.createWorkflowitem"`` \| ``"subproject.reorderWorkflowitems"`` \| ``"subproject.budget.updateProjected"`` \| ``"subproject.budget.deleteProjected"`` \| ``"workflowitem.intent.listPermissions"`` \| ``"workflowitem.intent.grantPermission"`` \| ``"workflowitem.intent.revokePermission"`` \| ``"workflowitem.list"`` \| ``"workflowitem.viewHistory"`` \| ``"workflowitem.assign"`` \| ``"workflowitem.update"`` \| ``"workflowitem.close"`` \| ``"notification.create"`` \| ``"network.registerNode"`` \| ``"network.list"`` \| ``"network.listActive"`` \| ``"network.voteForPermission"`` \| ``"network.approveNewOrganization"`` \| ``"network.approveNewNodeForExistingOrganization"`` \| ``"network.declineNode"`` \| ``"provisioning.start"`` \| ``"provisioning.end"`` \| ``"provisioning.get"``

#### Defined in

[src/authz/intents.ts:6](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L6)

## Variables

### allIntents

• `Const` **allIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:169](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L169)

___

### globalIntents

• `Const` **globalIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:70](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L70)

___

### groupIntents

• `Const` **groupIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:125](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L125)

___

### projectIntents

• `Const` **projectIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:127](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L127)

___

### subprojectIntents

• `Const` **subprojectIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:142](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L142)

___

### userAssignableIntents

• `Const` **userAssignableIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:93](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L93)

___

### userDefaultIntents

• `Const` **userDefaultIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:114](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L114)

___

### userIntents

• `Const` **userIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:116](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L116)

___

### workflowitemIntents

• `Const` **workflowitemIntents**: [`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/intents.ts:158](https://github.com/openkfw/TruBudget/blob/92640998/api/src/authz/intents.ts#L158)
