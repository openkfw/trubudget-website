# user\_password\_reset
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_password\_reset

## Table of contents

### Functions

- [addHttpHandler](user_password_reset.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`, `jwt`): `void`

Creates an http handler that handles incoming http requests for the `/user.changePassword` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |
| `jwt` | [`JwtConfig`](../interfaces/config.JwtConfig.md) | - |

#### Returns

`void`

#### Defined in

[src/user_password_reset.ts:123](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/user_password_reset.ts#L123)
