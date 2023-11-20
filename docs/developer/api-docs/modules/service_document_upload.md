# service/document\_upload
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/document\_upload

## Table of contents

### Functions

- [documentUpload](service_document_upload.md#documentupload)

## Functions

### documentUpload

▸ **documentUpload**(`conn`, `storageServiceClient`, `ctx`, `serviceUser`, `requestData`): `Promise`<[`Type`](result.md#type)<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `storageServiceClient` | [`StorageServiceClientI`](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_document_document_upload.RequestData.md) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)\>\>

#### Defined in

[src/service/document_upload.ts:18](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/document_upload.ts#L18)
