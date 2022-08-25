# workflowitems\_reorder
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitems\_reorder

## Table of contents

### Functions

- [addHttpHandler](workflowitems_reorder.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.reorderWorkflowitems` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service {@link Service} object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitems_reorder.ts:128](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/workflowitems_reorder.ts#L128)
