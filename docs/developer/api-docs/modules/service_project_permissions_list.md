# service/project\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_permissions\_list

## Table of contents

### Functions

- [getProjectPermissions](service_project_permissions_list.md#getprojectpermissions)

## Functions

### getProjectPermissions

▸ **getProjectPermissions**(`conn`, `ctx`, `serviceUser`, `projectId`): `Promise`<[`Type`](result.md#type)<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/project_permissions_list.ts:11](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/project_permissions_list.ts#L11)
