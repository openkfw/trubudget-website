# user\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_create

## Table of contents

### Functions

- [addHttpHandler](user_create.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.createUser` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_create.ts:168](https://github.com/openkfw/TruBudget/blob/086d599/api/src/user_create.ts#L168)
