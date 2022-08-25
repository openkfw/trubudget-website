# service/workflowitem\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_permissions\_list

## Table of contents

### References

- [RequestData](service_workflowitem_permissions_list.md#requestdata)

### Functions

- [listWorkflowitemPermissions](service_workflowitem_permissions_list.md#listworkflowitempermissions)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### listWorkflowitemPermissions

▸ **listWorkflowitemPermissions**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`<[`Type`](result.md#type)<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Permissions`](service_domain_permissions.md#permissions)\>\>

#### Defined in

[src/service/workflowitem_permissions_list.ts:16](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/workflowitem_permissions_list.ts#L16)
