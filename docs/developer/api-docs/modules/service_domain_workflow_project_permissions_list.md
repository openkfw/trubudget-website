# service/domain/workflow/project\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_permissions\_list

## Table of contents

### Functions

- [getProjectPermissions](service_domain_workflow_project_permissions_list.md#getprojectpermissions)

## Functions

### getProjectPermissions

▸ **getProjectPermissions**(`ctx`, `user`, `projectId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/domain/workflow/project_permissions_list.ts:14](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/workflow/project_permissions_list.ts#L14)
