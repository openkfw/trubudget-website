# service/workflowitem\_document\_download
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_document\_download

## Table of contents

### Functions

- [getDocument](service_workflowitem_document_download.md#getdocument)

## Functions

### getDocument

▸ **getDocument**(`conn`, `storageServiceClient`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `documentId`): `Promise`<[`Type`](result.md#type)<[`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md)\>\>

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

`Promise`<[`Type`](result.md#type)<[`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md)\>\>

#### Defined in

[src/service/workflowitem_document_download.ts:21](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/workflowitem_document_download.ts#L21)
