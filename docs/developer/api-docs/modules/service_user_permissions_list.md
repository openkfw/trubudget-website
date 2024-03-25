# service/user\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_permissions\_list

## Table of contents

### Functions

- [getUserPermissions](service_user_permissions_list.md#getuserpermissions)

## Functions

### getUserPermissions

▸ **getUserPermissions**(`conn`, `ctx`, `serviceUser`, `userId`): `Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `userId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/user_permissions_list.ts:12](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/user_permissions_list.ts#L12)
