# service/user\_authenticate
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_authenticate

## Table of contents

### Interfaces

- [UserLoginResponse](../interfaces/service_user_authenticate.UserLoginResponse.md)

### Functions

- [authenticate](service_user_authenticate.md#authenticate)
- [authenticateUser](service_user_authenticate.md#authenticateuser)
- [authenticateWithToken](service_user_authenticate.md#authenticatewithtoken)

## Functions

### authenticate

▸ **authenticate**(`organization`, `organizationSecret`, `rootSecret`, `conn`, `ctx`, `userId`, `password`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | `string` |
| `organizationSecret` | `string` |
| `rootSecret` | `string` |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `userId` | `string` |
| `password` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_authenticate.ts:33](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/user_authenticate.ts#L33)

___

### authenticateUser

▸ **authenticateUser**(`conn`, `ctx`, `organization`, `organizationSecret`, `userId`, `password`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `organization` | `string` |
| `organizationSecret` | `string` |
| `userId` | `string` |
| `password` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_authenticate.ts:107](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/user_authenticate.ts#L107)

___

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

[src/service/user_authenticate.ts:191](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/user_authenticate.ts#L191)
