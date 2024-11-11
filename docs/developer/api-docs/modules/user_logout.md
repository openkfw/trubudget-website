# user\_logout
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_logout

## Table of contents

### Functions

- [addHttpHandler](user_logout.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/user.logout` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | [`UserLogoutAPIService`](../interfaces/index.UserLogoutAPIService.md) | - |

#### Returns

`void`

#### Defined in

[src/user_logout.ts:114](https://github.com/openkfw/TruBudget/blob/086d599/api/src/user_logout.ts#L114)
