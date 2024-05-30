# service/workflowitems\_reorder
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitems\_reorder

## Table of contents

### Functions

- [setWorkflowitemOrdering](service_workflowitems_reorder.md#setworkflowitemordering)

## Functions

### setWorkflowitemOrdering

▸ **setWorkflowitemOrdering**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `ordering`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `ordering` | [`WorkflowitemOrdering`](service_domain_workflow_workflowitem_ordering.md#workflowitemordering) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitems_reorder.ts:15](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/workflowitems_reorder.ts#L15)
