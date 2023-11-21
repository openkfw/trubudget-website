# service/store
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/store

## Table of contents

### Functions

- [store](service_store.md#store)

## Functions

### store

▸ **store**(`conn`, `ctx`, `event`, `publisherAddress`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |
| `publisherAddress` | `String` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/service/store.ts:15](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/store.ts#L15)
