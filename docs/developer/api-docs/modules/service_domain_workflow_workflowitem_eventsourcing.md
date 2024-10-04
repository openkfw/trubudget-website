# service/domain/workflow/workflowitem\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_eventsourcing

## Table of contents

### Functions

- [newWorkflowitemFromEvent](service_domain_workflow_workflowitem_eventsourcing.md#newworkflowitemfromevent)
- [parseWorkflowitemFromSnapshot](service_domain_workflow_workflowitem_eventsourcing.md#parseworkflowitemfromsnapshot)
- [sourceWorkflowitemFromSnapshot](service_domain_workflow_workflowitem_eventsourcing.md#sourceworkflowitemfromsnapshot)

## Functions

### newWorkflowitemFromEvent

▸ **newWorkflowitemFromEvent**(`ctx`, `workflowitem`, `event`): [`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

Returns a new workflowitem with the given event applied, or an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_eventsourcing.ts:156](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L156)

___

### parseWorkflowitemFromSnapshot

▸ **parseWorkflowitemFromSnapshot**(`workflowitemJson`): [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowitemJson` | `any` |

#### Returns

[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)

#### Defined in

[src/service/domain/workflow/workflowitem_eventsourcing.ts:86](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L86)

___

### sourceWorkflowitemFromSnapshot

▸ **sourceWorkflowitemFromSnapshot**(`ctx`, `events`, `_withLog`, `workflowitemJson?`): [`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `_withLog` | `boolean` |
| `workflowitemJson?` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_eventsourcing.ts:20](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/workflowitem_eventsourcing.ts#L20)
