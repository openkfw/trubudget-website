# service/user\_create
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_create

## Table of contents

### Functions

- [createUser](service_user_create.md#createuser)

## Functions

### createUser

▸ **createUser**(`organizationSecret`, `conn`, `ctx`, `serviceUser`, `requestData`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `organizationSecret` | `string` |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_organization_user_create.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/user_create.ts:19](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/user_create.ts#L19)
