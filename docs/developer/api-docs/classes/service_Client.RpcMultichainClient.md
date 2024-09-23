# RpcMultichainClient
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/Client](../modules/service_Client.md) / RpcMultichainClient

[service/Client](../modules/service_Client.md).RpcMultichainClient

## Implements

- [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md)

## Table of contents

### Constructors

- [constructor](service_Client.RpcMultichainClient.md#constructor)

### Properties

- [hasWriteLock](service_Client.RpcMultichainClient.md#haswritelock)
- [rpcClient](service_Client.RpcMultichainClient.md#rpcclient)

### Methods

- [getInfo](service_Client.RpcMultichainClient.md#getinfo)
- [getLastBlockInfo](service_Client.RpcMultichainClient.md#getlastblockinfo)
- [getLatestValues](service_Client.RpcMultichainClient.md#getlatestvalues)
- [getOrCreateStream](service_Client.RpcMultichainClient.md#getorcreatestream)
- [getPeerInfo](service_Client.RpcMultichainClient.md#getpeerinfo)
- [getRpcClient](service_Client.RpcMultichainClient.md#getrpcclient)
- [getValue](service_Client.RpcMultichainClient.md#getvalue)
- [getValues](service_Client.RpcMultichainClient.md#getvalues)
- [isValidAddress](service_Client.RpcMultichainClient.md#isvalidaddress)
- [latestValuesForKey](service_Client.RpcMultichainClient.md#latestvaluesforkey)
- [listBlocksByHeight](service_Client.RpcMultichainClient.md#listblocksbyheight)
- [listStreamBlockItemsByHeight](service_Client.RpcMultichainClient.md#liststreamblockitemsbyheight)
- [ping](service_Client.RpcMultichainClient.md#ping)
- [setValue](service_Client.RpcMultichainClient.md#setvalue)
- [streamItems](service_Client.RpcMultichainClient.md#streamitems)
- [streams](service_Client.RpcMultichainClient.md#streams)
- [updateStreamItem](service_Client.RpcMultichainClient.md#updatestreamitem)
- [updateValue](service_Client.RpcMultichainClient.md#updatevalue)
- [v2\_readStreamItems](service_Client.RpcMultichainClient.md#v2_readstreamitems)

## Constructors

### constructor

• **new RpcMultichainClient**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ConnectionSettings`](../interfaces/service_RpcClient_h.ConnectionSettings.md) |

#### Defined in

[src/service/Client.ts:46](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L46)

## Properties

### hasWriteLock

• `Private` **hasWriteLock**: `boolean`

#### Defined in

[src/service/Client.ts:44](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L44)

___

### rpcClient

• `Private` **rpcClient**: [`RpcClient`](service_RpcClient.RpcClient.md)

#### Defined in

[src/service/Client.ts:42](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L42)

## Methods

### getInfo

▸ **getInfo**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getInfo](../interfaces/service_Client_h.MultichainClient.md#getinfo)

#### Defined in

[src/service/Client.ts:137](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L137)

___

### getLastBlockInfo

▸ **getLastBlockInfo**(`skip?`): `Promise`\<[`BlockInfo`](../interfaces/service_Client_h.BlockInfo.md)\>

Get the latest block, possibly skipping a few.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skip` | `number` | `0` | number of blocks to skip, default 0 (= latest block) |

#### Returns

`Promise`\<[`BlockInfo`](../interfaces/service_Client_h.BlockInfo.md)\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getLastBlockInfo](../interfaces/service_Client_h.MultichainClient.md#getlastblockinfo)

#### Defined in

[src/service/Client.ts:246](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L246)

___

### getLatestValues

▸ **getLatestValues**(`streamName`, `key`, `nValues?`): `Promise`\<[`StreamItemPair`](../interfaces/service_Client_h.StreamItemPair.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `streamName` | `string` | `undefined` |
| `key` | `string` | `undefined` |
| `nValues` | `number` | `maxItemCount` |

#### Returns

`Promise`\<[`StreamItemPair`](../interfaces/service_Client_h.StreamItemPair.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getLatestValues](../interfaces/service_Client_h.MultichainClient.md#getlatestvalues)

#### Defined in

[src/service/Client.ts:161](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L161)

___

### getOrCreateStream

▸ **getOrCreateStream**(`options`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateStreamOptions`](../interfaces/service_Client_h.CreateStreamOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getOrCreateStream](../interfaces/service_Client_h.MultichainClient.md#getorcreatestream)

#### Defined in

[src/service/Client.ts:55](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L55)

___

### getPeerInfo

▸ **getPeerInfo**(): `Promise`\<[`PeerInfo`](../interfaces/service_Client_h.PeerInfo.md)[]\>

#### Returns

`Promise`\<[`PeerInfo`](../interfaces/service_Client_h.PeerInfo.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getPeerInfo](../interfaces/service_Client_h.MultichainClient.md#getpeerinfo)

#### Defined in

[src/service/Client.ts:250](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L250)

___

### getRpcClient

▸ **getRpcClient**(): [`RpcClient`](service_RpcClient.RpcClient.md)

#### Returns

[`RpcClient`](service_RpcClient.RpcClient.md)

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getRpcClient](../interfaces/service_Client_h.MultichainClient.md#getrpcclient)

#### Defined in

[src/service/Client.ts:51](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L51)

___

### getValue

▸ **getValue**(`streamName`, `key`): `Promise`\<[`StreamItemPair`](../interfaces/service_Client_h.StreamItemPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<[`StreamItemPair`](../interfaces/service_Client_h.StreamItemPair.md)\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getValue](../interfaces/service_Client_h.MultichainClient.md#getvalue)

#### Defined in

[src/service/Client.ts:208](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L208)

___

### getValues

▸ **getValues**(`streamName`, `key`, `nValues?`): `Promise`\<[`StreamItemPair`](../interfaces/service_Client_h.StreamItemPair.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `streamName` | `string` | `undefined` |
| `key` | `string` | `undefined` |
| `nValues` | `number` | `maxItemCount` |

#### Returns

`Promise`\<[`StreamItemPair`](../interfaces/service_Client_h.StreamItemPair.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[getValues](../interfaces/service_Client_h.MultichainClient.md#getvalues)

#### Defined in

[src/service/Client.ts:141](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L141)

___

### isValidAddress

▸ **isValidAddress**(`address`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[isValidAddress](../interfaces/service_Client_h.MultichainClient.md#isvalidaddress)

#### Defined in

[src/service/Client.ts:132](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L132)

___

### latestValuesForKey

▸ **latestValuesForKey**(`streamId`, `key`, `nValues?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `streamId` | `string` | `undefined` |
| `key` | `string` | `undefined` |
| `nValues` | `number` | `1` |

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[latestValuesForKey](../interfaces/service_Client_h.MultichainClient.md#latestvaluesforkey)

#### Defined in

[src/service/Client.ts:108](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L108)

___

### listBlocksByHeight

▸ **listBlocksByHeight**(`to`, `from?`, `verbose?`): `Promise`\<[`BlockListItem`](../interfaces/service_Client_h.BlockListItem.md)[]\>

Retrieve all blocks metadata by block height range.
You can retrieve the current maximum block height through calling getLastBlockInfo

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `to` | `number` | `undefined` | highest block height to return (inclusive) |
| `from` | `string` \| `number` | `0` | lowest block to return (inclusive), defaults to 0 |
| `verbose` | `boolean` | `false` | verbose output, defaults to false |

#### Returns

`Promise`\<[`BlockListItem`](../interfaces/service_Client_h.BlockListItem.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[listBlocksByHeight](../interfaces/service_Client_h.MultichainClient.md#listblocksbyheight)

#### Defined in

[src/service/Client.ts:258](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L258)

___

### listStreamBlockItemsByHeight

▸ **listStreamBlockItemsByHeight**(`streamName`, `to`, `from?`, `verbose?`): `Promise`\<[`Item`](../interfaces/service_liststreamkeyitems.Item.md)[]\>

Retrieve all items within a stream by block height range.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `streamName` | `string` | `undefined` | Stream Name to Read |
| `to` | `number` | `undefined` | Highest block height to retrieve (inclusive) |
| `from` | `number` | `0` | Lowest block height to retrieve (inclusive), defaults to 0 |
| `verbose` | `boolean` | `false` | Get verbose data (not typed!) |

#### Returns

`Promise`\<[`Item`](../interfaces/service_liststreamkeyitems.Item.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[listStreamBlockItemsByHeight](../interfaces/service_Client_h.MultichainClient.md#liststreamblockitemsbyheight)

#### Defined in

[src/service/Client.ts:266](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L266)

___

### ping

▸ **ping**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[ping](../interfaces/service_Client_h.MultichainClient.md#ping)

#### Defined in

[src/service/Client.ts:254](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L254)

___

### setValue

▸ **setValue**(`streamName`, `streamkey`, `object`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `streamkey` | [`StreamKey`](../modules/service_Client_h.md#streamkey) |
| `object` | `any` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[setValue](../interfaces/service_Client_h.MultichainClient.md#setvalue)

#### Defined in

[src/service/Client.ts:221](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L221)

___

### streamItems

▸ **streamItems**(`streamId`): `Promise`\<[`StreamItem`](../interfaces/service_Client_h.StreamItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | `string` |

#### Returns

`Promise`\<[`StreamItem`](../interfaces/service_Client_h.StreamItem.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[streamItems](../interfaces/service_Client_h.MultichainClient.md#streamitems)

#### Defined in

[src/service/Client.ts:95](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L95)

___

### streams

▸ **streams**(`name?`): `Promise`\<[`Stream`](../interfaces/service_Client_h.Stream.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`Promise`\<[`Stream`](../interfaces/service_Client_h.Stream.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[streams](../interfaces/service_Client_h.MultichainClient.md#streams)

#### Defined in

[src/service/Client.ts:82](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L82)

___

### updateStreamItem

▸ **updateStreamItem**(`streamId`, `key`, `object`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | `string` |
| `key` | `string` |
| `object` | `any` |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[updateStreamItem](../interfaces/service_Client_h.MultichainClient.md#updatestreamitem)

#### Defined in

[src/service/Client.ts:123](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L123)

___

### updateValue

▸ **updateValue**(`streamName`, `key`, `updateCallback`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamName` | `string` |
| `key` | `string` |
| `updateCallback` | (`_`: [`Resource`](../interfaces/service_Client_h.Resource.md)) => [`Resource`](../interfaces/service_Client_h.Resource.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[updateValue](../interfaces/service_Client_h.MultichainClient.md#updatevalue)

#### Defined in

[src/service/Client.ts:226](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L226)

___

### v2\_readStreamItems

▸ **v2_readStreamItems**(`streamName`, `key`, `nValues?`): `Promise`\<[`Item`](../interfaces/service_liststreamkeyitems.Item.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `streamName` | `string` | `undefined` |
| `key` | `string` | `undefined` |
| `nValues` | `number` | `maxItemCount` |

#### Returns

`Promise`\<[`Item`](../interfaces/service_liststreamkeyitems.Item.md)[]\>

#### Implementation of

[MultichainClient](../interfaces/service_Client_h.MultichainClient.md).[v2_readStreamItems](../interfaces/service_Client_h.MultichainClient.md#v2_readstreamitems)

#### Defined in

[src/service/Client.ts:283](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/Client.ts#L283)
