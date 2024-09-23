# subproject\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_update

## Table of contents

### Functions

- [addHttpHandler](subproject_update.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.update` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_update.ts:132](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/subproject_update.ts#L132)
