# service/workflowitem\_document\_delete
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_document\_delete

## Table of contents

### Interfaces

- [Service](../interfaces/service_workflowitem_document_delete.Service.md)

### Functions

- [deleteDocument](service_workflowitem_document_delete.md#deletedocument)

## Functions

### deleteDocument

▸ **deleteDocument**(`conn`, `storageServiceClient`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `documentId`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `storageServiceClient` | [`StorageServiceClientI`](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `documentId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_document_delete.ts:38](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/workflowitem_document_delete.ts#L38)
