# service/domain/workflow/workflowitem\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_eventsourcing

## Table of contents

### Functions

- [newWorkflowitemFromEvent](service_domain_workflow_workflowitem_eventsourcing.md#newworkflowitemfromevent)
- [sourceWorkflowitems](service_domain_workflow_workflowitem_eventsourcing.md#sourceworkflowitems)

## Functions

### newWorkflowitemFromEvent

▸ **newWorkflowitemFromEvent**(`ctx`, `workflowitem`, `event`): [`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

Returns a new workflowitem with the given event applied, or an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_eventsourcing.ts:131](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L131)

___

### sourceWorkflowitems

▸ **sourceWorkflowitems**(`ctx`, `events`, `origin?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `origin?` | `Map`<`string`, [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |
| `workflowitems` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)[] |

#### Defined in

[src/service/domain/workflow/workflowitem_eventsourcing.ts:18](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L18)
