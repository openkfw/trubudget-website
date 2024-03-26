# service/user\_password\_change
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_password\_change

## Table of contents

### Functions

- [changeUserPassword](service_user_password_change.md#changeuserpassword)

## Functions

### changeUserPassword

▸ **changeUserPassword**(`conn`, `ctx`, `serviceUser`, `issuerOrganization`, `requestData`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `requestData` | [`RequestData`](../interfaces/service_domain_organization_user_password_change.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/user_password_change.ts:12](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/user_password_change.ts#L12)
