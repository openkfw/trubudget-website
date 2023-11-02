# service/cache
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/cache

## Table of contents

### Type Aliases

- [Cache](service_cache.md#cache)

### Functions

- [initCache](service_cache.md#initcache)

## Type Aliases

### Cache

Ƭ **Cache**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isWriteLocked` | `boolean` |
| `projectStreams?` | [`Stream`](../interfaces/service_Client_h.Stream.md)[] |
| `projects` | `Map`<`string`, `Project`\> |
| `streamState` | `Map`<`StreamName`, `StreamCursor`\> |

#### Defined in

[src/service/cache.ts:8](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/cache.ts#L8)

## Functions

### initCache

▸ **initCache**(): [`Cache`](service_cache.md#cache)

#### Returns

[`Cache`](service_cache.md#cache)

#### Defined in

[src/service/cache.ts:19](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/cache.ts#L19)
