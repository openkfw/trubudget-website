# service/domain/workflow/workflowitem\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_get

## Table of contents

### Functions

- [getWorkflowitem](service_domain_workflow_workflowitem_get.md#getworkflowitem)

## Functions

### getWorkflowitem

▸ **getWorkflowitem**(`ctx`, `user`, `workflowitemId`, `repository`): `Promise`<[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `workflowitemId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_get.ts:16](https://github.com/openkfw/TruBudget/blob/0804644/api/src/service/domain/workflow/workflowitem_get.ts#L16)
