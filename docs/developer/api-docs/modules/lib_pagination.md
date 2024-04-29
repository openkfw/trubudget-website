# lib/pagination
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / lib/pagination

## Table of contents

### Interfaces

- [Pagination](../interfaces/lib_pagination.Pagination.md)

### Functions

- [makePagination](lib_pagination.md#makepagination)
- [paginate](lib_pagination.md#paginate)

## Functions

### makePagination

▸ **makePagination**\<`T`\>(`route`, `records`, `currentChunk`, `limit`, `optionalParams`): [`Pagination`](../interfaces/lib_pagination.Pagination.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | `string` |
| `records` | `T`[] |
| `currentChunk` | `number` |
| `limit` | `number` |
| `optionalParams` | `Record`\<`string`, `any`\> |

#### Returns

[`Pagination`](../interfaces/lib_pagination.Pagination.md)

#### Defined in

[src/lib/pagination.ts:12](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/lib/pagination.ts#L12)

___

### paginate

▸ **paginate**\<`T`\>(`route`, `records`, `query`): [`T`[], [`Pagination`](../interfaces/lib_pagination.Pagination.md)]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | `string` |
| `records` | `T`[] |
| `query` | `Object` |
| `query.limit` | `string` \| `number` |
| `query.order?` | `string` |
| `query.page` | `string` \| `number` |
| `query.search?` | `string` |
| `query.sort?` | `string` |

#### Returns

[`T`[], [`Pagination`](../interfaces/lib_pagination.Pagination.md)]

#### Defined in

[src/lib/pagination.ts:45](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/lib/pagination.ts#L45)
