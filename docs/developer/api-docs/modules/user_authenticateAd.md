# user\_authenticateAd
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_authenticateAd

## Table of contents

### Functions

- [addHttpHandler](user_authenticateAd.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`, `jwt`): `void`

Creates an http handler that handles incoming http requests for the `/user.authenticate` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |
| `jwt` | [`JwtConfig`](../interfaces/config.JwtConfig.md) | - |

#### Returns

`void`

#### Defined in

[src/user_authenticateAd.ts:196](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/user_authenticateAd.ts#L196)
