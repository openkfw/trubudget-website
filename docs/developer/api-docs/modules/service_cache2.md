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
| `eventsByStream` | `Map`\<`StreamName`, [`BusinessEvent`](service_domain_business_event.md#businessevent)[]\> |
| `globalPermissions` | [`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md) |
| `isWriteLocked` | `boolean` |
| `lockQueue` | `ResolveFunction`[] |
| `streamState` | `Map`\<`StreamName`, `StreamCursor`\> |

#### Defined in

[src/service/cache2.ts:72](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L72)

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

[src/service/cache2.ts:220](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L220)

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

[src/service/cache2.ts:115](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L115)

___

### initCache

▸ **initCache**(): [`Cache2`](service_cache2.md#cache2)

#### Returns

[`Cache2`](service_cache2.md#cache2)

#### Defined in

[src/service/cache2.ts:84](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L84)

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

[src/service/cache2.ts:250](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L250)

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

[src/service/cache2.ts:495](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L495)

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

[src/service/cache2.ts:222](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/cache2.ts#L222)
