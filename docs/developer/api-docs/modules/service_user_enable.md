# service/user\_enable
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_enable

## Table of contents

### Functions

- [enableUser](service_user_enable.md#enableuser)

## Functions

### enableUser

▸ **enableUser**(`conn`, `ctx`, `serviceUser`, `issuerOrganization`, `grantee`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `grantee` | [`RequestData`](../interfaces/service_domain_organization_user_enable.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/user_enable.ts:12](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/user_enable.ts#L12)
