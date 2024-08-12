# user\_forgot\_password
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_forgot\_password

## Table of contents

### Functions

- [addHttpHandler](user_forgot_password.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`, `jwt`): `void`

Creates an http handler that handles incoming http requests for the `/v2/project.list` route

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

[src/user_forgot_password.ts:81](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/user_forgot_password.ts#L81)
