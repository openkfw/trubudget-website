# user\_authenticate
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_authenticate

## Table of contents

### Variables

- [MAX\_GROUPS\_LENGTH](user_authenticate.md#max_groups_length)
- [accessTokenExpirationInMinutesWithrefreshToken](user_authenticate.md#accesstokenexpirationinminuteswithrefreshtoken)
- [refreshTokenExpirationInDays](user_authenticate.md#refreshtokenexpirationindays)

### Functions

- [addHttpHandler](user_authenticate.md#addhttphandler)

## Variables

### MAX\_GROUPS\_LENGTH

• `Const` **MAX\_GROUPS\_LENGTH**: ``3000``

#### Defined in

[src/user_authenticate.ts:16](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/user_authenticate.ts#L16)

___

### accessTokenExpirationInMinutesWithrefreshToken

• `Const` **accessTokenExpirationInMinutesWithrefreshToken**: ``10``

#### Defined in

[src/user_authenticate.ts:17](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/user_authenticate.ts#L17)

___

### refreshTokenExpirationInDays

• `Const` **refreshTokenExpirationInDays**: ``8``

#### Defined in

[src/user_authenticate.ts:18](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/user_authenticate.ts#L18)

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

[src/user_authenticate.ts:205](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/user_authenticate.ts#L205)
