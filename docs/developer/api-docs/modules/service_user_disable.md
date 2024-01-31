# service/user\_disable
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_disable

## Table of contents

### Functions

- [disableUser](service_user_disable.md#disableuser)

## Functions

### disableUser

▸ **disableUser**(`conn`, `ctx`, `serviceUser`, `issuerOrganization`, `revokee`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `revokee` | [`RequestData`](../interfaces/service_domain_organization_user_disable.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/user_disable.ts:14](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/user_disable.ts#L14)
