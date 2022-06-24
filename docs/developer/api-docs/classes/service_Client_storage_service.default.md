# default
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/Client\_storage\_service](../modules/service_Client_storage_service.md) / default

[service/Client_storage_service](../modules/service_Client_storage_service.md).default

## Implements

- [`StorageServiceClientI`](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md)

## Table of contents

### Constructors

- [constructor](service_Client_storage_service.default.md#constructor)

### Properties

- [axiosInstance](service_Client_storage_service.default.md#axiosinstance)
- [timeStamp](service_Client_storage_service.default.md#timestamp)

### Methods

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
| `settings` | `AxiosRequestConfig` |

#### Defined in

[src/service/Client_storage_service.ts:25](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L25)

## Properties

### axiosInstance

• `Private` **axiosInstance**: `AxiosInstance`

#### Defined in

[src/service/Client_storage_service.ts:21](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L21)

___

### timeStamp

• `Private` **timeStamp**: `number` = `0`

#### Defined in

[src/service/Client_storage_service.ts:23](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L23)

## Methods

### downloadObject

▸ **downloadObject**(`id`, `secret`): `Promise`<[`Type`](../modules/result.md#type)<[`StorageObject`](../interfaces/service_Client_storage_service_h.StorageObject.md)\>\>

Download an object using the matching secret

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `secret` | `string` |

#### Returns

`Promise`<[`Type`](../modules/result.md#type)<[`StorageObject`](../interfaces/service_Client_storage_service_h.StorageObject.md)\>\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[downloadObject](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#downloadobject)

#### Defined in

[src/service/Client_storage_service.ts:91](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L91)

___

### getAxiosInstance

▸ **getAxiosInstance**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/service/Client_storage_service.ts:128](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L128)

___

### getVersion

▸ **getVersion**(): `Promise`<[`Version`](../interfaces/service_Client_storage_service_h.Version.md)\>

Get version of conncted storage service

#### Returns

`Promise`<[`Version`](../interfaces/service_Client_storage_service_h.Version.md)\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[getVersion](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#getversion)

#### Defined in

[src/service/Client_storage_service.ts:54](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L54)

___

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

Get readiness sattus of storage service

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[isReady](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#isready)

#### Defined in

[src/service/Client_storage_service.ts:49](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L49)

___

### uploadObject

▸ **uploadObject**(`id`, `name`, `data`): `Promise`<[`Type`](../modules/result.md#type)<[`UploadResponse`](../interfaces/service_Client_storage_service_h.UploadResponse.md)\>\>

Upload an object using the

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `data` | `string` |

#### Returns

`Promise`<[`Type`](../modules/result.md#type)<[`UploadResponse`](../interfaces/service_Client_storage_service_h.UploadResponse.md)\>\>

#### Implementation of

[StorageServiceClientI](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md).[uploadObject](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md#uploadobject)

#### Defined in

[src/service/Client_storage_service.ts:68](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client_storage_service.ts#L68)
