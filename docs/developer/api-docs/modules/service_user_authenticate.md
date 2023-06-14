# service/user\_authenticate
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_authenticate

## Table of contents

### Interfaces

- [UserLoginResponse](../interfaces/service_user_authenticate.UserLoginResponse.md)

### Functions

- [authenticate](service_user_authenticate.md#authenticate)

## Functions

### authenticate

▸ **authenticate**(`organization`, `organizationSecret`, `rootSecret`, `conn`, `ctx`, `userId`, `password`): `Promise`<[`Type`](result.md#type)<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

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

`Promise`<[`Type`](result.md#type)<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_authenticate.ts:30](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/user_authenticate.ts#L30)
