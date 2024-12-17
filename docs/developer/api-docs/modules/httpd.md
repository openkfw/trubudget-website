# httpd
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd

## Table of contents

### Interfaces

- [CreateProjectPayload](../interfaces/httpd.CreateProjectPayload.md)
- [Document](../interfaces/httpd.Document.md)
- [Project](../interfaces/httpd.Project.md)
- [ProjectAndSubprojects](../interfaces/httpd.ProjectAndSubprojects.md)
- [Workflowitem](../interfaces/httpd.Workflowitem.md)

### Type Aliases

- [AllPermissionsGranter](httpd.md#allpermissionsgranter)
- [AllPermissionsReader](httpd.md#allpermissionsreader)
- [AllProjectsReader](httpd.md#allprojectsreader)
- [AllWorkflowitemsReader](httpd.md#allworkflowitemsreader)
- [GlobalPermissionGranter](httpd.md#globalpermissiongranter)
- [GlobalPermissionRevoker](httpd.md#globalpermissionrevoker)
- [Permissions](httpd.md#permissions)
- [ProjectPermissionsGranter](httpd.md#projectpermissionsgranter)
- [ProjectPermissionsReader](httpd.md#projectpermissionsreader)
- [ProjectReader](httpd.md#projectreader)
- [WorkflowitemAssigner](httpd.md#workflowitemassigner)
- [WorkflowitemCloser](httpd.md#workflowitemcloser)
- [WorkflowitemUpdater](httpd.md#workflowitemupdater)

## Type Aliases

### AllPermissionsGranter

Ƭ **AllPermissionsGranter**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `grantee`: `string`) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `grantee`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `grantee` | `string` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:41](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L41)

___

### AllPermissionsReader

Ƭ **AllPermissionsReader**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md)) => `Promise`\<[`Permissions`](httpd.md#permissions)\>

#### Type declaration

▸ (`token`): `Promise`\<[`Permissions`](httpd.md#permissions)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |

##### Returns

`Promise`\<[`Permissions`](httpd.md#permissions)\>

#### Defined in

[src/httpd/index.ts:21](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L21)

___

### AllProjectsReader

Ƭ **AllProjectsReader**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md)) => `Promise`\<[`Project`](../interfaces/httpd.Project.md)[]\>

#### Type declaration

▸ (`token`): `Promise`\<[`Project`](../interfaces/httpd.Project.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |

##### Returns

`Promise`\<[`Project`](../interfaces/httpd.Project.md)[]\>

#### Defined in

[src/httpd/index.ts:14](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L14)

___

### AllWorkflowitemsReader

Ƭ **AllWorkflowitemsReader**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `subprojectId`: `string`) => `Promise`\<[`Workflowitem`](../interfaces/httpd.Workflowitem.md)[]\>

#### Type declaration

▸ (`token`, `projectId`, `subprojectId`): `Promise`\<[`Workflowitem`](../interfaces/httpd.Workflowitem.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

##### Returns

`Promise`\<[`Workflowitem`](../interfaces/httpd.Workflowitem.md)[]\>

#### Defined in

[src/httpd/index.ts:15](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L15)

___

### GlobalPermissionGranter

Ƭ **GlobalPermissionGranter**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `grantee`: `string`, `intent`: [`default`](authz_intents.md#default)) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `grantee`, `intent`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:35](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L35)

___

### GlobalPermissionRevoker

Ƭ **GlobalPermissionRevoker**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `recipient`: `string`, `intent`: [`default`](authz_intents.md#default)) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `recipient`, `intent`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `recipient` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:43](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L43)

___

### Permissions

Ƭ **Permissions**: \{ [key in default]?: string[] }

#### Defined in

[src/httpd/index.ts:10](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L10)

___

### ProjectPermissionsGranter

Ƭ **ProjectPermissionsGranter**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `grantee`: `string`, `intent`: [`default`](authz_intents.md#default)) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `projectId`, `grantee`, `intent`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:28](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L28)

___

### ProjectPermissionsReader

Ƭ **ProjectPermissionsReader**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`) => `Promise`\<[`Permissions`](httpd.md#permissions)\>

#### Type declaration

▸ (`token`, `projectId`): `Promise`\<[`Permissions`](httpd.md#permissions)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |

##### Returns

`Promise`\<[`Permissions`](httpd.md#permissions)\>

#### Defined in

[src/httpd/index.ts:23](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L23)

___

### ProjectReader

Ƭ **ProjectReader**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `id`: `string`) => `Promise`\<[`ProjectAndSubprojects`](../interfaces/httpd.ProjectAndSubprojects.md)\>

#### Type declaration

▸ (`token`, `id`): `Promise`\<[`ProjectAndSubprojects`](../interfaces/httpd.ProjectAndSubprojects.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `id` | `string` |

##### Returns

`Promise`\<[`ProjectAndSubprojects`](../interfaces/httpd.ProjectAndSubprojects.md)\>

#### Defined in

[src/httpd/index.ts:12](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L12)

___

### WorkflowitemAssigner

Ƭ **WorkflowitemAssigner**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `subprojectId`: `string`, `workflowitemId`: `string`, `newAssignee`: `string`) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `projectId`, `subprojectId`, `workflowitemId`, `newAssignee`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `newAssignee` | `string` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:88](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L88)

___

### WorkflowitemCloser

Ƭ **WorkflowitemCloser**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `subprojectId`: `string`, `workflowitemId`: `string`) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:72](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L72)

___

### WorkflowitemUpdater

Ƭ **WorkflowitemUpdater**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `subprojectId`: `string`, `workflowitemId`: `string`, `updatedData`: `any`) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `projectId`, `subprojectId`, `workflowitemId`, `updatedData`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `updatedData` | `any` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:79](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L79)
