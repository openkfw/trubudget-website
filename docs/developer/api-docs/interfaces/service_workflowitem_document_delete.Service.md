# Service
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/workflowitem\_document\_delete](../modules/service_workflowitem_document_delete.md) / Service

[service/workflowitem\_document\_delete](../modules/service_workflowitem_document_delete.md).Service

## Table of contents

### Methods

- [deleteDocument](service_workflowitem_document_delete.Service.md#deletedocument)

## Methods

### deleteDocument

▸ **deleteDocument**(`ctx`, `user`, `projectId`, `subprojectId`, `workflowitemId`, `documentId`): `Promise`\<[`Type`](../modules/result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `documentId` | `string` |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_document_delete.ts:28](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/workflowitem_document_delete.ts#L28)
