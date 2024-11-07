# StorageServiceClientI
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/Client\_storage\_service.h](../modules/service_Client_storage_service_h.md) / StorageServiceClientI

[service/Client\_storage\_service.h](../modules/service_Client_storage_service_h.md).StorageServiceClientI

## Implemented by

- [`default`](../classes/service_Client_storage_service.default.md)

## Table of contents

### Methods

- [deleteObject](service_Client_storage_service_h.StorageServiceClientI.md#deleteobject)
- [downloadObject](service_Client_storage_service_h.StorageServiceClientI.md#downloadobject)
- [getVersion](service_Client_storage_service_h.StorageServiceClientI.md#getversion)
- [isReady](service_Client_storage_service_h.StorageServiceClientI.md#isready)
- [uploadObject](service_Client_storage_service_h.StorageServiceClientI.md#uploadobject)

## Methods

### deleteObject

▸ **deleteObject**(`id`, `secret`): `Promise`\<[`Type`](../modules/result.md#type)\<[`DeleteResponse`](service_Client_storage_service_h.DeleteResponse.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `secret` | `string` |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`DeleteResponse`](service_Client_storage_service_h.DeleteResponse.md)\>\>

#### Defined in

[src/service/Client_storage_service.h.ts:61](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/Client_storage_service.h.ts#L61)

___

### downloadObject

▸ **downloadObject**(`id`, `secret`): `Promise`\<[`Type`](../modules/result.md#type)\<[`StorageObject`](service_Client_storage_service_h.StorageObject.md)\>\>

Download an object using the matching secret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of object stored |
| `secret` | `string` | secret to access the object's data |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`StorageObject`](service_Client_storage_service_h.StorageObject.md)\>\>

#### Defined in

[src/service/Client_storage_service.h.ts:60](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/Client_storage_service.h.ts#L60)

___

### getVersion

▸ **getVersion**(): `Promise`\<[`Version`](service_Client_storage_service_h.Version.md)\>

Get version of conncted storage service

#### Returns

`Promise`\<[`Version`](service_Client_storage_service_h.Version.md)\>

#### Defined in

[src/service/Client_storage_service.h.ts:38](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/Client_storage_service.h.ts#L38)

___

### isReady

▸ **isReady**(): `Promise`\<`boolean`\>

Get readiness sattus of storage service

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/service/Client_storage_service.h.ts:33](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/Client_storage_service.h.ts#L33)

___

### uploadObject

▸ **uploadObject**(`file`): `Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](service_Client_storage_service_h.UploadResponse.md)\>\>

Upload an object using the

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`](service_domain_document_document_upload.File.md) | File object containing id, fileName, documentBase64, and an optional comment. |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](service_Client_storage_service_h.UploadResponse.md)\>\>

- A promise that resolves to the upload response.

#### Defined in

[src/service/Client_storage_service.h.ts:53](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/Client_storage_service.h.ts#L53)
