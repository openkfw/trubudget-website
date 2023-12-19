# MultichainClient
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/Client.h](../modules/service_Client_h.md) / MultichainClient

[service/Client.h](../modules/service_Client_h.md).MultichainClient

## Implemented by

- [`RpcMultichainClient`](../classes/service_Client.RpcMultichainClient.md)

## Table of contents

### Methods

- [getInfo](service_Client_h.MultichainClient.md#getinfo)
- [getLastBlockInfo](service_Client_h.MultichainClient.md#getlastblockinfo)
- [getLatestValues](service_Client_h.MultichainClient.md#getlatestvalues)
- [getOrCreateStream](service_Client_h.MultichainClient.md#getorcreatestream)
- [getPeerInfo](service_Client_h.MultichainClient.md#getpeerinfo)
- [getRpcClient](service_Client_h.MultichainClient.md#getrpcclient)
- [getValue](service_Client_h.MultichainClient.md#getvalue)
- [getValues](service_Client_h.MultichainClient.md#getvalues)
- [isValidAddress](service_Client_h.MultichainClient.md#isvalidaddress)
- [latestValuesForKey](service_Client_h.MultichainClient.md#latestvaluesforkey)
- [listBlocksByHeight](service_Client_h.MultichainClient.md#listblocksbyheight)
- [listStreamBlockItemsByHeight](service_Client_h.MultichainClient.md#liststreamblockitemsbyheight)
- [ping](service_Client_h.MultichainClient.md#ping)
- [setValue](service_Client_h.MultichainClient.md#setvalue)
- [streamItems](service_Client_h.MultichainClient.md#streamitems)
- [streams](service_Client_h.MultichainClient.md#streams)
- [updateStreamItem](service_Client_h.MultichainClient.md#updatestreamitem)
- [updateValue](service_Client_h.MultichainClient.md#updatevalue)
- [v2\_readStreamItems](service_Client_h.MultichainClient.md#v2_readstreamitems)

## Methods

### getInfo

▸ **getInfo**(): `any`

#### Returns

`any`

#### Defined in

[src/service/Client.h.ts:140](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L140)

___

### getLastBlockInfo

▸ **getLastBlockInfo**(`skip?`): `Promise`\<[`BlockInfo`](service_Client_h.BlockInfo.md)\>

Get the latest block, possibly skipping a few.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip?` | `number` | number of blocks to skip, default 0 (= latest block) |

#### Returns

`Promise`\<[`BlockInfo`](service_Client_h.BlockInfo.md)\>

#### Defined in

[src/service/Client.h.ts:118](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L118)

___

### getLatestValues

▸ **getLatestValues**(`streamName`, `key`, `nValues?`): `Promise`\<[`StreamItemPair`](service_Client_h.StreamItemPair.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |
| `nValues?` | `number` |

#### Returns

`Promise`\<[`StreamItemPair`](service_Client_h.StreamItemPair.md)[]\>

#### Defined in

[src/service/Client.h.ts:167](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L167)

___

### getOrCreateStream

▸ **getOrCreateStream**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateStreamOptions`](service_Client_h.CreateStreamOptions.md) |

#### Returns

`any`

#### Defined in

[src/service/Client.h.ts:131](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L131)

___

### getPeerInfo

▸ **getPeerInfo**(): `Promise`\<[`PeerInfo`](service_Client_h.PeerInfo.md)[]\>

#### Returns

`Promise`\<[`PeerInfo`](service_Client_h.PeerInfo.md)[]\>

#### Defined in

[src/service/Client.h.ts:143](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L143)

___

### getRpcClient

▸ **getRpcClient**(): [`RpcClient`](../classes/service_RpcClient.RpcClient.md)

#### Returns

[`RpcClient`](../classes/service_RpcClient.RpcClient.md)

#### Defined in

[src/service/Client.h.ts:181](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L181)

___

### getValue

▸ **getValue**(`streamName`, `key`): `Promise`\<[`StreamItemPair`](service_Client_h.StreamItemPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<[`StreamItemPair`](service_Client_h.StreamItemPair.md)\>

#### Defined in

[src/service/Client.h.ts:170](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L170)

___

### getValues

▸ **getValues**(`streamName`, `key`, `nValues?`): `Promise`\<[`StreamItemPair`](service_Client_h.StreamItemPair.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |
| `nValues?` | `number` |

#### Returns

`Promise`\<[`StreamItemPair`](service_Client_h.StreamItemPair.md)[]\>

#### Defined in

[src/service/Client.h.ts:164](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L164)

___

### isValidAddress

▸ **isValidAddress**(`address`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/service/Client.h.ts:147](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L147)

___

### latestValuesForKey

▸ **latestValuesForKey**(`streamId`, `key`, `nValues?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | `string` |
| `key` | `string` |
| `nValues?` | `number` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[src/service/Client.h.ts:150](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L150)

___

### listBlocksByHeight

▸ **listBlocksByHeight**(`to`, `from?`, `verbose?`): `Promise`\<[`BlockListItem`](service_Client_h.BlockListItem.md)[]\>

Retrieve all blocks metadata by block height range.
You can retrieve the current maximum block height through calling getLastBlockInfo

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `number` | highest block height to return (inclusive) |
| `from?` | `number` | lowest block to return (inclusive), defaults to 0 |
| `verbose?` | `boolean` | verbose output, defaults to false |

#### Returns

`Promise`\<[`BlockListItem`](service_Client_h.BlockListItem.md)[]\>

#### Defined in

[src/service/Client.h.ts:128](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L128)

___

### listStreamBlockItemsByHeight

▸ **listStreamBlockItemsByHeight**(`streamName`, `to`, `from?`, `verbose?`): `Promise`\<[`Item`](service_liststreamkeyitems.Item.md)[]\>

Retrieve all items within a stream by block height range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `streamName` | `string` | Stream Name to Read |
| `to` | `number` | Highest block height to retrieve (inclusive) |
| `from?` | `number` | Lowest block height to retrieve (inclusive), defaults to 0 |
| `verbose?` | `boolean` | Get verbose data (not typed!) |

#### Returns

`Promise`\<[`Item`](service_liststreamkeyitems.Item.md)[]\>

#### Defined in

[src/service/Client.h.ts:197](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L197)

___

### ping

▸ **ping**(): `any`

#### Returns

`any`

#### Defined in

[src/service/Client.h.ts:145](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L145)

___

### setValue

▸ **setValue**(`streamName`, `streamKey`, `object`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `streamKey` | [`StreamKey`](../modules/service_Client_h.md#streamkey) |
| `object` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/Client.h.ts:173](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L173)

___

### streamItems

▸ **streamItems**(`streamId`): `Promise`\<[`StreamItem`](service_Client_h.StreamItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | `string` |

#### Returns

`Promise`\<[`StreamItem`](service_Client_h.StreamItem.md)[]\>

#### Defined in

[src/service/Client.h.ts:137](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L137)

___

### streams

▸ **streams**(`stream?`): `Promise`\<[`Stream`](service_Client_h.Stream.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream?` | `string` |

#### Returns

`Promise`\<[`Stream`](service_Client_h.Stream.md)[]\>

#### Defined in

[src/service/Client.h.ts:134](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L134)

___

### updateStreamItem

▸ **updateStreamItem**(`streamId`, `key`, `object`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | `string` |
| `key` | `string` \| `string`[] |
| `object` | `any` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/service/Client.h.ts:157](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L157)

___

### updateValue

▸ **updateValue**(`streamName`, `key`, `updateCallback`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |
| `updateCallback` | (`current`: [`Resource`](service_Client_h.Resource.md)) => [`Resource`](service_Client_h.Resource.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/Client.h.ts:175](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L175)

___

### v2\_readStreamItems

▸ **v2_readStreamItems**(`streamName`, `key`, `nValues?`): `Promise`\<[`Item`](service_liststreamkeyitems.Item.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |
| `nValues?` | `number` |

#### Returns

`Promise`\<[`Item`](service_liststreamkeyitems.Item.md)[]\>

#### Defined in

[src/service/Client.h.ts:183](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/Client.h.ts#L183)
