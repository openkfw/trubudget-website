# service/group\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/group\_permissions\_list

## Table of contents

### Functions

- [getGroupPermissions](service_group_permissions_list.md#getgrouppermissions)

## Functions

### getGroupPermissions

▸ **getGroupPermissions**(`conn`, `ctx`, `serviceUser`, `groupId`): `Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/group_permissions_list.ts:14](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/group_permissions_list.ts#L14)
