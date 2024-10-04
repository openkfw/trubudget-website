# user\_refreshToken
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_refreshToken

## Table of contents

### Functions

- [addHttpHandler](user_refreshToken.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`, `jwt`): `void`

Creates an http handler that handles incoming http requests for the `/user.authenticate` route

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

[src/user_refreshToken.ts:158](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/user_refreshToken.ts#L158)
