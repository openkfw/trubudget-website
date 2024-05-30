# service/domain/workflowitem\_types/apply\_workflowitem\_type
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflowitem\_types/apply\_workflowitem\_type

## Table of contents

### Functions

- [applyWorkflowitemType](service_domain_workflowitem_types_apply_workflowitem_type.md#applyworkflowitemtype)

## Functions

### applyWorkflowitemType

▸ **applyWorkflowitemType**(`originEvent`, `ctx`, `publisher`, `workflowitem`): [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `originEvent` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `publisher` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |

#### Returns

[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>

#### Defined in

[src/service/domain/workflowitem_types/apply_workflowitem_type.ts:8](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/workflowitem_types/apply_workflowitem_type.ts#L8)
