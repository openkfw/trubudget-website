# service/domain/workflow/workflowitem\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_assign

## Table of contents

### Functions

- [assignWorkflowitem](service_domain_workflow_workflowitem_assign.md#assignworkflowitem)

## Functions

### assignWorkflowitem

▸ **assignWorkflowitem**(`ctx`, `issuer`, `assignee`, `projectId`, `subprojectId`, `workflowitemId`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `workflowitem`: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `assignee` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `workflowitem`: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)  }\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_assign.ts:28](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem_assign.ts#L28)
