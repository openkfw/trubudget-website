# service/ProjectEvents
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/ProjectEvents

## Table of contents

### Interfaces

- [HistoryEvent](../interfaces/service_ProjectEvents.HistoryEvent.md)
- [Project](../interfaces/service_ProjectEvents.Project.md)
- [ProjectUpdate](../interfaces/service_ProjectEvents.ProjectUpdate.md)

### Functions

- [applyStreamItems](service_ProjectEvents.md#applystreamitems)
- [createProjectOnChain](service_ProjectEvents.md#createprojectonchain)
- [getProject](service_ProjectEvents.md#getproject)
- [getProjectList](service_ProjectEvents.md#getprojectlist)
- [getProjectPermissionList](service_ProjectEvents.md#getprojectpermissionlist)
- [grantProjectPermission](service_ProjectEvents.md#grantprojectpermission)
- [updateProject](service_ProjectEvents.md#updateproject)
- [writeProjectAssignedToChain](service_ProjectEvents.md#writeprojectassignedtochain)

## Functions

### applyStreamItems

▸ **applyStreamItems**(`streamItems`, `projectsByName?`): `Map`<`string`, [`Project`](../interfaces/service_ProjectEvents.Project.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamItems` | [`Item`](../interfaces/service_liststreamkeyitems.Item.md)[] |
| `projectsByName` | `Map`<`string`, [`Project`](../interfaces/service_ProjectEvents.Project.md)\> |

#### Returns

`Map`<`string`, [`Project`](../interfaces/service_ProjectEvents.Project.md)\>

#### Defined in

[src/service/ProjectEvents.ts:203](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L203)

___

### createProjectOnChain

▸ **createProjectOnChain**(`conn`, `issuer`, `project`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `project` | [`Project`](../interfaces/service_ProjectEvents.Project.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/ProjectEvents.ts:54](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L54)

___

### getProject

▸ **getProject**(`conn`, `id`): `Promise`<[`Project`](../interfaces/service_ProjectEvents.Project.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `id` | `string` |

#### Returns

`Promise`<[`Project`](../interfaces/service_ProjectEvents.Project.md)\>

#### Defined in

[src/service/ProjectEvents.ts:148](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L148)

___

### getProjectList

▸ **getProjectList**(`conn`): `Promise`<[`Project`](../interfaces/service_ProjectEvents.Project.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |

#### Returns

`Promise`<[`Project`](../interfaces/service_ProjectEvents.Project.md)[]\>

#### Defined in

[src/service/ProjectEvents.ts:160](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L160)

___

### getProjectPermissionList

▸ **getProjectPermissionList**(`conn`, `projectId`): `Promise`<[`Permissions`](authz_types.md#permissions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `projectId` | `string` |

#### Returns

`Promise`<[`Permissions`](authz_types.md#permissions)\>

#### Defined in

[src/service/ProjectEvents.ts:166](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L166)

___

### grantProjectPermission

▸ **grantProjectPermission**(`conn`, `issuer`, `projectId`, `grantee`, `intent`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/ProjectEvents.ts:174](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L174)

___

### updateProject

▸ **updateProject**(`conn`, `issuer`, `projectId`, `update`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `update` | [`ProjectUpdate`](../interfaces/service_ProjectEvents.ProjectUpdate.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/ProjectEvents.ts:120](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L120)

___

### writeProjectAssignedToChain

▸ **writeProjectAssignedToChain**(`conn`, `issuer`, `projectId`, `assignee`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `issuer` | [`Issuer`](../interfaces/service_issuer.Issuer.md) |
| `projectId` | `string` |
| `assignee` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/ProjectEvents.ts:93](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/ProjectEvents.ts#L93)
