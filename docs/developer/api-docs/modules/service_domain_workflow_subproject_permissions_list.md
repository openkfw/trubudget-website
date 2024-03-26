# service/domain/workflow/subproject\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_permissions\_list

## Table of contents

### Functions

- [getSubprojectPermissions](service_domain_workflow_subproject_permissions_list.md#getsubprojectpermissions)

## Functions

### getSubprojectPermissions

▸ **getSubprojectPermissions**(`ctx`, `user`, `projectId`, `subprojectId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/domain/workflow/subproject_permissions_list.ts:18](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/subproject_permissions_list.ts#L18)
