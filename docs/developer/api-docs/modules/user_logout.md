# user\_logout
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_logout

## Table of contents

### Functions

- [addHttpHandler](user_logout.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`): `void`

Creates an http handler that handles incoming http requests for the `/user.logout` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |

#### Returns

`void`

#### Defined in

[src/user_logout.ts:109](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/user_logout.ts#L109)
