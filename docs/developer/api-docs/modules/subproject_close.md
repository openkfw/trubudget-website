# subproject\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_close

## Table of contents

### Functions

- [addHttpHandler](subproject_close.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.close` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service {@link Service} object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_close.ts:117](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/subproject_close.ts#L117)
