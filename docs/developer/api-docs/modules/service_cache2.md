# service/cache2
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/cache2

## Table of contents

### Type aliases

- [Cache2](service_cache2.md#cache2)
- [TransactionFn](service_cache2.md#transactionfn)

### Functions

- [getCacheInstance](service_cache2.md#getcacheinstance)
- [initCache](service_cache2.md#initcache)
- [invalidateCache](service_cache2.md#invalidatecache)
- [parseBusinessEvents](service_cache2.md#parsebusinessevents)
- [updateAggregates](service_cache2.md#updateaggregates)
- [withCache](service_cache2.md#withcache)

## Type aliases

### Cache2

Ƭ **Cache2**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cachedProjects` | `Map`<[`Id`](service_domain_workflow_project.md#id), [`Project`](../interfaces/service_domain_workflow_project.Project.md)\> |
| `cachedSubprojectLookup` | `Map`<[`Id`](service_domain_workflow_project.md#id), `Set`<[`Id`](service_domain_workflow_subproject.md#id)\>\> |
| `cachedSubprojects` | `Map`<[`Id`](service_domain_workflow_subproject.md#id), [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\> |
| `cachedWorkflowItems` | `Map`<[`Id`](service_domain_workflow_workflowitem.md#id), [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\> |
| `cachedWorkflowitemLookup` | `Map`<[`Id`](service_domain_workflow_subproject.md#id), `Set`<[`Id`](service_domain_workflow_workflowitem.md#id)\>\> |
| `eventsByStream` | `Map`<`StreamName`, [`BusinessEvent`](service_domain_business_event.md#businessevent)[]\> |
| `isWriteLocked` | `boolean` |
| `streamState` | `Map`<`StreamName`, `StreamCursor`\> |

#### Defined in

[src/service/cache2.ts:72](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L72)

___

### TransactionFn

Ƭ **TransactionFn**<`T`\>: (`cache`: `CacheInstance`) => `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`cache`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | `CacheInstance` |

##### Returns

`Promise`<`T`\>

#### Defined in

[src/service/cache2.ts:325](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L325)

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

[src/service/cache2.ts:144](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L144)

___

### initCache

▸ **initCache**(): [`Cache2`](service_cache2.md#cache2)

#### Returns

[`Cache2`](service_cache2.md#cache2)

#### Defined in

[src/service/cache2.ts:90](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L90)

___

### invalidateCache

▸ **invalidateCache**(`conn`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/cache2.ts:355](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L355)

___

### parseBusinessEvents

▸ **parseBusinessEvents**(`items`, `streamName`): [`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/service_liststreamitems.Item.md)[] |
| `streamName` | `string` |

#### Returns

[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>[]

#### Defined in

[src/service/cache2.ts:620](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L620)

___

### updateAggregates

▸ **updateAggregates**(`ctx`, `cache`, `newEvents`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `cache` | [`Cache2`](service_cache2.md#cache2) |
| `newEvents` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |

#### Returns

`void`

#### Defined in

[src/service/cache2.ts:526](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L526)

___

### withCache

▸ **withCache**<`T`\>(`conn`, `ctx`, `transaction`, `doRefresh?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) | `undefined` |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) | `undefined` |
| `transaction` | [`TransactionFn`](service_cache2.md#transactionfn)<`T`\> | `undefined` |
| `doRefresh` | `boolean` | `true` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/service/cache2.ts:327](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/cache2.ts#L327)
