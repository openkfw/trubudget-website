# service
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service

## Table of contents

### References

- [ConnToken](service.md#conntoken)
- [Event](service.md#event)
- [HistoryEvent](service.md#historyevent)
- [Issuer](service.md#issuer)
- [Project](service.md#project)
- [ProjectUpdate](service.md#projectupdate)
- [applyStreamItems](service.md#applystreamitems)
- [createProjectOnChain](service.md#createprojectonchain)
- [getProject](service.md#getproject)
- [getProjectList](service.md#getprojectlist)
- [getProjectPermissionList](service.md#getprojectpermissionlist)
- [grantProjectPermission](service.md#grantprojectpermission)
- [throwUnsupportedEventVersion](service.md#throwunsupportedeventversion)
- [updateProject](service.md#updateproject)
- [writeProjectAssignedToChain](service.md#writeprojectassignedtochain)

### Functions

- [assignWorkflowitem](service.md#assignworkflowitem)
- [closeWorkflowitem](service.md#closeworkflowitem)
- [getWorkflowitemOrdering](service.md#getworkflowitemordering)
- [grantGlobalPermission](service.md#grantglobalpermission)
- [init](service.md#init)
- [revokeGlobalPermission](service.md#revokeglobalpermission)
- [updateWorkflowitem](service.md#updateworkflowitem)

## References

### ConnToken

Re-exports [ConnToken](service_conn.md#conntoken)

___

### Event

Re-exports [Event](../interfaces/service_event.Event.md)

___

### HistoryEvent

Re-exports [HistoryEvent](../interfaces/service_ProjectEvents.HistoryEvent.md)

___

### Issuer

Re-exports [Issuer](../interfaces/service_issuer.Issuer.md)

___

### Project

Re-exports [Project](../interfaces/service_ProjectEvents.Project.md)

___

### ProjectUpdate

Re-exports [ProjectUpdate](../interfaces/service_ProjectEvents.ProjectUpdate.md)

___

### applyStreamItems

Re-exports [applyStreamItems](service_ProjectEvents.md#applystreamitems)

___

### createProjectOnChain

Re-exports [createProjectOnChain](service_ProjectEvents.md#createprojectonchain)

___

### getProject

Re-exports [getProject](service_ProjectEvents.md#getproject)

___

### getProjectList

Re-exports [getProjectList](service_ProjectEvents.md#getprojectlist)

___

### getProjectPermissionList

Re-exports [getProjectPermissionList](service_ProjectEvents.md#getprojectpermissionlist)

___

### grantProjectPermission

Re-exports [grantProjectPermission](service_ProjectEvents.md#grantprojectpermission)

___

### throwUnsupportedEventVersion

Re-exports [throwUnsupportedEventVersion](service_event.md#throwunsupportedeventversion)

___

### updateProject

Re-exports [updateProject](service_ProjectEvents.md#updateproject)

___

### writeProjectAssignedToChain

Re-exports [writeProjectAssignedToChain](service_ProjectEvents.md#writeprojectassignedtochain)

## Functions

### assignWorkflowitem

▸ **assignWorkflowitem**(`conn`, `issuer`, `newAssignee`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `newAssignee` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:288](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L288)

___

### closeWorkflowitem

▸ **closeWorkflowitem**(`conn`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:229](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L229)

___

### getWorkflowitemOrdering

▸ **getWorkflowitemOrdering**(`conn`, `projectId`, `subprojectId`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/service/index.ts:187](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L187)

___

### grantGlobalPermission

▸ **grantGlobalPermission**(`conn`, `issuer`, `grantee`, `intent`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:63](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L63)

___

### init

▸ **init**(`rpcSettings`): [`ConnToken`](service_conn.md#conntoken)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcSettings` | [`ConnectionSettings`](../interfaces/service_RpcClient_h.ConnectionSettings.md) |

#### Returns

[`ConnToken`](service_conn.md#conntoken)

#### Defined in

[src/service/index.ts:51](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L51)

___

### revokeGlobalPermission

▸ **revokeGlobalPermission**(`conn`, `issuer`, `recipient`, `intent`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `recipient` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:112](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L112)

___

### updateWorkflowitem

▸ **updateWorkflowitem**(`conn`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `data` | `Update` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/index.ts:258](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/index.ts#L258)
