# RpcClient
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/RpcClient](../modules/service_RpcClient.md) / RpcClient

[service/RpcClient](../modules/service_RpcClient.md).RpcClient

## Table of contents

### Constructors

- [constructor](service_RpcClient.RpcClient.md#constructor)

### Properties

- [instance](service_RpcClient.RpcClient.md#instance)
- [timeStamp](service_RpcClient.RpcClient.md#timestamp)
- [tracer](service_RpcClient.RpcClient.md#tracer)

### Methods

- [convertToReadableItems](service_RpcClient.RpcClient.md#converttoreadableitems)
- [encryptItem](service_RpcClient.RpcClient.md#encryptitem)
- [generateRequest](service_RpcClient.RpcClient.md#generaterequest)
- [getOrDecryptItemData](service_RpcClient.RpcClient.md#getordecryptitemdata)
- [handleError](service_RpcClient.RpcClient.md#handleerror)
- [invoke](service_RpcClient.RpcClient.md#invoke)
- [invokePublish](service_RpcClient.RpcClient.md#invokepublish)
- [retrieveItems](service_RpcClient.RpcClient.md#retrieveitems)

## Constructors

### constructor

• **new RpcClient**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ConnectionSettings`](../interfaces/service_RpcClient_h.ConnectionSettings.md) |

#### Defined in

[src/service/RpcClient.ts:74](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L74)

## Properties

### instance

• `Private` **instance**: `AxiosInstance`

#### Defined in

[src/service/RpcClient.ts:68](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L68)

___

### timeStamp

• `Private` **timeStamp**: `any`

#### Defined in

[src/service/RpcClient.ts:70](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L70)

___

### tracer

• `Private` **tracer**: `any`

#### Defined in

[src/service/RpcClient.ts:72](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L72)

## Methods

### convertToReadableItems

▸ `Private` **convertToReadableItems**(`items`): `Promise`\<[`Type`](../modules/result.md#type)\<[`StreamItem`](../interfaces/service_RpcClient_h.StreamItem.md)\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`StreamItem`](../interfaces/service_RpcClient_h.StreamItem.md)[] |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`StreamItem`](../interfaces/service_RpcClient_h.StreamItem.md)\>[]\>

#### Defined in

[src/service/RpcClient.ts:366](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L366)

___

### encryptItem

▸ `Private` **encryptItem**(`item`): [`EncryptedItemToPublish`](../interfaces/service_RpcClient_h.EncryptedItemToPublish.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`ItemToPublish`](../interfaces/service_RpcClient_h.ItemToPublish.md) |

#### Returns

[`EncryptedItemToPublish`](../interfaces/service_RpcClient_h.EncryptedItemToPublish.md)

#### Defined in

[src/service/RpcClient.ts:315](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L315)

___

### generateRequest

▸ `Private` **generateRequest**(`stream`, `keys`, `streamitem`, `address?`, `offchain?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `String` |
| `keys` | `String` \| `String`[] |
| `streamitem` | [`ItemToPublish`](../interfaces/service_RpcClient_h.ItemToPublish.md) |
| `address?` | `String` |
| `offchain?` | `Boolean` |

#### Returns

`any`

#### Defined in

[src/service/RpcClient.ts:108](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L108)

___

### getOrDecryptItemData

▸ `Private` **getOrDecryptItemData**(`item`): [`Type`](../modules/result.md#type)\<[`StreamItem`](../interfaces/service_RpcClient_h.StreamItem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`StreamItem`](../interfaces/service_RpcClient_h.StreamItem.md) |

#### Returns

[`Type`](../modules/result.md#type)\<[`StreamItem`](../interfaces/service_RpcClient_h.StreamItem.md)\>

#### Defined in

[src/service/RpcClient.ts:324](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L324)

___

### handleError

▸ `Private` **handleError**(`error`, `method`, `params`): `undefined` \| [`default`](service_RpcError.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |
| `method` | `any` |
| `params` | `any` |

#### Returns

`undefined` \| [`default`](service_RpcError.default.md)

#### Defined in

[src/service/RpcClient.ts:268](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L268)

___

### invoke

▸ **invoke**(`method`, `...params`): `any`

Used to invoke MultiChain RPC-Commands. For publishing an event to the chain the invokePublish function should be used

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | the RPC-command to be invoked |
| `...params` | `any`[] | the parameters, depend on the specific method, can be stream name, keys, or others |

#### Returns

`any`

return value also depends on the speicific method, can be listitems, permissions, or others

#### Defined in

[src/service/RpcClient.ts:207](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L207)

___

### invokePublish

▸ **invokePublish**(`stream`, `keys`, `item`, `address?`, `offchain?`): `any`

Used to publish a stream item on the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `String` | name of the stream where the item should be published |
| `keys` | `String` \| `String`[] | keys of the stremitem |
| `item` | `any` | the item itself |
| `address?` | `String` | the address to publish the event from. is optional and is only used if the env var SIGNING_METHOD is used |
| `offchain?` | `Boolean` | a boolean indicating whether the item should be saved offchain or not |

#### Returns

`any`

#### Defined in

[src/service/RpcClient.ts:144](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L144)

___

### retrieveItems

▸ **retrieveItems**(`streamName`, `start`, `count`): `Promise`\<[`Item`](../interfaces/service_liststreamitems.Item.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `start` | `number` |
| `count` | `number` |

#### Returns

`Promise`\<[`Item`](../interfaces/service_liststreamitems.Item.md)[]\>

#### Defined in

[src/service/RpcClient.ts:361](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/RpcClient.ts#L361)
