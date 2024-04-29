# service/domain/workflow/workflowitem\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_permissions\_list

## Table of contents

### Functions

- [getAll](service_domain_workflow_workflowitem_permissions_list.md#getall)

## Functions

### getAll

▸ **getAll**(`ctx`, `user`, `projectId`, `subprojectId`, `workflowitemId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_permissions_list.ts:20](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/workflow/workflowitem_permissions_list.ts#L20)
