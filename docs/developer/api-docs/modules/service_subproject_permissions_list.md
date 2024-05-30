# service/subproject\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_permissions\_list

## Table of contents

### Functions

- [listSubprojectPermissions](service_subproject_permissions_list.md#listsubprojectpermissions)

## Functions

### listSubprojectPermissions

▸ **listSubprojectPermissions**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`): `Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/subproject_permissions_list.ts:13](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/subproject_permissions_list.ts#L13)
