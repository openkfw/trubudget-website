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
- [ProjectAssigner](httpd.md#projectassigner)
- [ProjectCreator](httpd.md#projectcreator)
- [ProjectPermissionsGranter](httpd.md#projectpermissionsgranter)
- [ProjectPermissionsReader](httpd.md#projectpermissionsreader)
- [ProjectReader](httpd.md#projectreader)
- [ProjectUpdater](httpd.md#projectupdater)
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

[src/httpd/index.ts:43](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L43)

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

[src/httpd/index.ts:23](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L23)

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

[src/httpd/index.ts:16](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L16)

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

[src/httpd/index.ts:17](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L17)

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

[src/httpd/index.ts:37](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L37)

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

[src/httpd/index.ts:45](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L45)

___

### Permissions

Ƭ **Permissions**: \{ [key in default]?: string[] }

#### Defined in

[src/httpd/index.ts:12](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L12)

___

### ProjectAssigner

Ƭ **ProjectAssigner**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `assignee`: `string`) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `projectId`, `assignee`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `assignee` | `string` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:58](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L58)

___

### ProjectCreator

Ƭ **ProjectCreator**: (`ctx`: [`Ctx`](../interfaces/lib_ctx.Ctx.md), `issuer`: [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md), `token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `payload`: [`CreateProjectPayload`](../interfaces/httpd.CreateProjectPayload.md)) => `Promise`\<`void`\>

#### Type declaration

▸ (`ctx`, `issuer`, `token`, `payload`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `payload` | [`CreateProjectPayload`](../interfaces/httpd.CreateProjectPayload.md) |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:51](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L51)

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

[src/httpd/index.ts:30](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L30)

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

[src/httpd/index.ts:25](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L25)

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

[src/httpd/index.ts:14](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L14)

___

### ProjectUpdater

Ƭ **ProjectUpdater**: (`token`: [`AuthToken`](../interfaces/authz_token.AuthToken.md), `projectId`: `string`, `update`: `object`) => `Promise`\<`void`\>

#### Type declaration

▸ (`token`, `projectId`, `update`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `projectId` | `string` |
| `update` | `object` |

##### Returns

`Promise`\<`void`\>

#### Defined in

[src/httpd/index.ts:64](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L64)

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

[src/httpd/index.ts:105](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L105)

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

[src/httpd/index.ts:89](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L89)

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

[src/httpd/index.ts:96](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/httpd/index.ts#L96)
