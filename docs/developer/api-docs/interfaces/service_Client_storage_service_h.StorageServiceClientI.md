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

[src/service/Client_storage_service.h.ts:51](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/Client_storage_service.h.ts#L51)

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

[src/service/Client_storage_service.h.ts:50](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/Client_storage_service.h.ts#L50)

___

### getVersion

▸ **getVersion**(): `Promise`\<[`Version`](service_Client_storage_service_h.Version.md)\>

Get version of conncted storage service

#### Returns

`Promise`\<[`Version`](service_Client_storage_service_h.Version.md)\>

#### Defined in

[src/service/Client_storage_service.h.ts:35](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/Client_storage_service.h.ts#L35)

___

### isReady

▸ **isReady**(): `Promise`\<`boolean`\>

Get readiness sattus of storage service

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/service/Client_storage_service.h.ts:30](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/Client_storage_service.h.ts#L30)

___

### uploadObject

▸ **uploadObject**(`id`, `name`, `data`): `Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](service_Client_storage_service_h.UploadResponse.md)\>\>

Upload an object using the

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of object |
| `name` | `string` | name of object |
| `data` | `string` | content of uploaded object base64 encoded |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`UploadResponse`](service_Client_storage_service_h.UploadResponse.md)\>\>

#### Defined in

[src/service/Client_storage_service.h.ts:43](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/Client_storage_service.h.ts#L43)
