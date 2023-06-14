# service/domain/workflowitem\_types/restricted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflowitem\_types/restricted

## Table of contents

### Functions

- [createEvents](service_domain_workflowitem_types_restricted.md#createevents)

## Functions

### createEvents

▸ **createEvents**(`originEvent`, `ctx`, `publisher`, `workflowitem`): [`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `originEvent` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `publisher` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |

#### Returns

[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>

#### Defined in

[src/service/domain/workflowitem_types/restricted.ts:14](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflowitem_types/restricted.ts#L14)
