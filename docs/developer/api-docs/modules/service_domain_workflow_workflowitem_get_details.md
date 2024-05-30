# service/domain/workflow/workflowitem\_get\_details
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_get\_details

## Table of contents

### Functions

- [getWorkflowitemDetails](service_domain_workflow_workflowitem_get_details.md#getworkflowitemdetails)

## Functions

### getWorkflowitemDetails

▸ **getWorkflowitemDetails**(`ctx`, `user`, `workflowitemId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `workflowitemId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_get_details.ts:16](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflow/workflowitem_get_details.ts#L16)
