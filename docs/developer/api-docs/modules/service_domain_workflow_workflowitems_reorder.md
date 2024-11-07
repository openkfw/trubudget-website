# service/domain/workflow/workflowitems\_reorder
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitems\_reorder

## Table of contents

### Functions

- [setWorkflowitemOrdering](service_domain_workflow_workflowitems_reorder.md#setworkflowitemordering)

## Functions

### setWorkflowitemOrdering

▸ **setWorkflowitemOrdering**(`ctx`, `issuer`, `projectId`, `subprojectId`, `ordering`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `ordering` | [`WorkflowitemOrdering`](service_domain_workflow_workflowitem_ordering.md#workflowitemordering) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitems_reorder.ts:26](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitems_reorder.ts#L26)
