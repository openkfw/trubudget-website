# service/cache2
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/cache2

## Table of contents

### Type Aliases

- [Cache2](service_cache2.md#cache2)
- [TransactionFn](service_cache2.md#transactionfn)

### Functions

- [getCacheInstance](service_cache2.md#getcacheinstance)
- [initCache](service_cache2.md#initcache)
- [invalidateCache](service_cache2.md#invalidatecache)
- [parseBusinessEvents](service_cache2.md#parsebusinessevents)
- [withCache](service_cache2.md#withcache)

## Type Aliases

### Cache2

Ƭ **Cache2**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ee` | `EventEmitter` |
| `eventsByStream` | `Map`\<`StreamName`, [`BusinessEvent`](service_domain_business_event.md#businessevent)[]\> |
| `isWriteLocked` | `boolean` |
| `streamState` | `Map`\<`StreamName`, `StreamCursor`\> |

#### Defined in

[src/service/cache2.ts:68](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L68)

___

### TransactionFn

Ƭ **TransactionFn**\<`T`\>: (`cache`: `CacheInstance`) => `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`cache`): `Promise`\<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | `CacheInstance` |

##### Returns

`Promise`\<`T`\>

#### Defined in

[src/service/cache2.ts:197](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L197)

## Functions

### getCacheInstance

▸ **getCacheInstance**(`ctx`, `cache`): `CacheInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `cache` | [`Cache2`](service_cache2.md#cache2) |

#### Returns

`CacheInstance`

#### Defined in

[src/service/cache2.ts:106](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L106)

___

### initCache

▸ **initCache**(): [`Cache2`](service_cache2.md#cache2)

#### Returns

[`Cache2`](service_cache2.md#cache2)

#### Defined in

[src/service/cache2.ts:78](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L78)

___

### invalidateCache

▸ **invalidateCache**(`conn`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/cache2.ts:227](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L227)

___

### parseBusinessEvents

▸ **parseBusinessEvents**(`items`, `streamName`): [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/service_liststreamitems.Item.md)[] |
| `streamName` | `string` |

#### Returns

[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>[]

#### Defined in

[src/service/cache2.ts:463](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L463)

___

### withCache

▸ **withCache**\<`T`\>(`conn`, `ctx`, `transaction`, `doRefresh?`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) | `undefined` |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) | `undefined` |
| `transaction` | [`TransactionFn`](service_cache2.md#transactionfn)\<`T`\> | `undefined` |
| `doRefresh` | `boolean` | `true` |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/service/cache2.ts:199](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/cache2.ts#L199)
