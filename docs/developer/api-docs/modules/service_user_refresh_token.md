# service/user\_refresh\_token
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_refresh\_token

## Table of contents

### Interfaces

- [UserLoginResponse](../interfaces/service_user_refresh_token.UserLoginResponse.md)

### Functions

- [authenticateWithToken](service_user_refresh_token.md#authenticatewithtoken)
- [getUserAuthData](service_user_refresh_token.md#getuserauthdata)
- [validateRefreshToken](service_user_refresh_token.md#validaterefreshtoken)

## Functions

### authenticateWithToken

▸ **authenticateWithToken**(`organization`, `organizationSecret`, `conn`, `ctx`, `token`, `csrf`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | `string` |
| `organizationSecret` | `string` |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `token` | `string` |
| `csrf` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_refresh_token.ts:197](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/user_refresh_token.ts#L197)

___

### getUserAuthData

▸ **getUserAuthData**(`conn`, `ctx`, `organization`, `organizationSecret`, `userId`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `organization` | `string` |
| `organizationSecret` | `string` |
| `userId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_refresh_token.ts:118](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/user_refresh_token.ts#L118)

___

### validateRefreshToken

▸ **validateRefreshToken**(`organization`, `organizationSecret`, `conn`, `dbConnection`, `ctx`, `userId`, `refreshToken`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | `string` |
| `organizationSecret` | `string` |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `dbConnection` | [`default`](../classes/lib_db.default.md) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `userId` | `string` |
| `refreshToken` | `undefined` \| `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_refresh_token.ts:35](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/user_refresh_token.ts#L35)
