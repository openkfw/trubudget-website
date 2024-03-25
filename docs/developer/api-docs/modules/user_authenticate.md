# user\_authenticate
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_authenticate

## Table of contents

### Functions

- [addHttpHandler](user_authenticate.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`, `jwtSecret`): `void`

Creates an http handler that handles incoming http requests for the `/user.authenticate` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |
| `jwtSecret` | `string` | - |

#### Returns

`void`

#### Defined in

[src/user_authenticate.ts:187](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/user_authenticate.ts#L187)
