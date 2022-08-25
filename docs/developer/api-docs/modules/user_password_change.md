# user\_password\_change
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_password\_change

## Table of contents

### Functions

- [addHttpHandler](user_password_change.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/user.changePassword` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service {@link Service} object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_password_change.ts:115](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/user_password_change.ts#L115)
