# default
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/Client\_storage\_service](../modules/service_Client_storage_service.md) / default

[service/Client\_storage\_service](../modules/service_Client_storage_service.md).default

## Implements

- [`StorageServiceClientI`](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md)

## Table of contents

### Constructors

- [constructor](service_Client_storage_service.default.md#constructor)

### Properties

- [axiosInstance](service_Client_storage_service.default.md#axiosinstance)
- [timeStamp](service_Client_storage_service.default.md#timestamp)

### Methods

- [deleteObject](service_Client_storage_service.default.md#deleteobject)
- [downloadObject](service_Client_storage_service.default.md#downloadobject)
- [getAxiosInstance](service_Client_storage_service.default.md#getaxiosinstance)
- [getVersion](service_Client_storage_service.default.md#getversion)
- [isReady](service_Client_storage_service.default.md#isready)
- [uploadObject](service_Client_storage_service.default.md#uploadobject)

## Constructors

### constructor

• **new default**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `AxiosRequestConfig`\<`any`\> |

#### Defined in

[src/service/Client_storage_service.ts:28](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L28)

## Properties

### axiosInstance

• `Private` **axiosInstance**: `AxiosInstance`

#### Defined in

[src/service/Client_storage_service.ts:24](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L24)

___

### timeStamp

• `Private` **timeStamp**: `number` = `0`

#### Defined in

[src/service/Client_storage_service.ts:26](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L26)

## Methods

### deleteObject

▸ **deleteObject**(`id`, `secret`): `Promise`\<[`Type`](../modules/result.md#type)\<[`DeleteResponse`](../interfaces/service_Client_storage_service_h.DeleteResponse.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `secret` | `string` |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`DeleteResponse`](../interfaces/service_Client_storage_service_h.DeleteResponse.md)\>\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[deleteObject](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#deleteobject)

#### Defined in

[src/service/Client_storage_service.ts:140](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L140)

___

### downloadObject

▸ **downloadObject**(`id`, `secret`): `Promise`\<[`Type`](../modules/result.md#type)\<[`StorageObject`](../interfaces/service_Client_storage_service_h.StorageObject.md)\>\>

Download an object using the matching secret

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of object stored |
| `secret` | `string` | secret to access the object's data |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`StorageObject`](../interfaces/service_Client_storage_service_h.StorageObject.md)\>\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[downloadObject](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#downloadobject)

#### Defined in

[src/service/Client_storage_service.ts:98](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L98)

___

### getAxiosInstance

▸ **getAxiosInstance**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/service/Client_storage_service.ts:163](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L163)

___

### getVersion

▸ **getVersion**(): `Promise`\<[`Version`](../interfaces/service_Client_storage_service_h.Version.md)\>

Get version of conncted storage service

#### Returns

`Promise`\<[`Version`](../interfaces/service_Client_storage_service_h.Version.md)\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[getVersion](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#getversion)

#### Defined in

[src/service/Client_storage_service.ts:57](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L57)

___

### isReady

▸ **isReady**(): `Promise`\<`boolean`\>

Get readiness sattus of storage service

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[isReady](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#isready)

#### Defined in

[src/service/Client_storage_service.ts:52](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L52)

___

### uploadObject

▸ **uploadObject**(`file`): `Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](../interfaces/service_Client_storage_service_h.UploadResponse.md)\>\>

Upload an object using the

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`](../interfaces/service_domain_document_document_upload.File.md) | File object containing id, fileName, documentBase64, and an optional comment. |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](../interfaces/service_Client_storage_service_h.UploadResponse.md)\>\>

- A promise that resolves to the upload response.

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[uploadObject](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#uploadobject)

#### Defined in

[src/service/Client_storage_service.ts:71](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client_storage_service.ts#L71)
