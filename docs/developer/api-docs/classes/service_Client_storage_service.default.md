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

[src/service/Client_storage_service.ts:26](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L26)

## Properties

### axiosInstance

• `Private` **axiosInstance**: `AxiosInstance`

#### Defined in

[src/service/Client_storage_service.ts:22](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L22)

___

### timeStamp

• `Private` **timeStamp**: `number` = `0`

#### Defined in

[src/service/Client_storage_service.ts:24](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L24)

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

[src/service/Client_storage_service.ts:137](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L137)

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

[src/service/Client_storage_service.ts:96](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L96)

___

### getAxiosInstance

▸ **getAxiosInstance**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/service/Client_storage_service.ts:160](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L160)

___

### getVersion

▸ **getVersion**(): `Promise`\<[`Version`](../interfaces/service_Client_storage_service_h.Version.md)\>

Get version of conncted storage service

#### Returns

`Promise`\<[`Version`](../interfaces/service_Client_storage_service_h.Version.md)\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[getVersion](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#getversion)

#### Defined in

[src/service/Client_storage_service.ts:55](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L55)

___

### isReady

▸ **isReady**(): `Promise`\<`boolean`\>

Get readiness sattus of storage service

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[isReady](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#isready)

#### Defined in

[src/service/Client_storage_service.ts:50](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L50)

___

### uploadObject

▸ **uploadObject**(`id`, `name`, `data`): `Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](../interfaces/service_Client_storage_service_h.UploadResponse.md)\>\>

Upload an object using the

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of object |
| `name` | `string` | name of object |
| `data` | `string` | content of uploaded object base64 encoded |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](../interfaces/service_Client_storage_service_h.UploadResponse.md)\>\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[uploadObject](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#uploadobject)

#### Defined in

[src/service/Client_storage_service.ts:69](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/Client_storage_service.ts#L69)
