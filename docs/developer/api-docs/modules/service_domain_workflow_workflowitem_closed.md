# service/domain/workflow/workflowitem\_closed
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_closed

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitem_closed.Event.md)

### Variables

- [schema](service_domain_workflow_workflowitem_closed.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitem_closed.md#createevent)
- [mutate](service_domain_workflow_workflowitem_closed.md#mutate)
- [validate](service_domain_workflow_workflowitem_closed.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_closed.ts:23](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_closed.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `time?`, `rejectReason?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_closed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `time` | `string` |
| `rejectReason?` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_closed.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_closed.ts:34](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_closed.ts#L34)

___

### mutate

▸ **mutate**(`workflowitem`, `event`): [`Type`](result.md#type)<`void`\>

Applies the event to the given workflowitem, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified
workflowitem is automatically validated when obtained using
`workflowitem_eventsourcing.ts`:`newWorkflowitemFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_workflowitem_closed.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/workflowitem_closed.ts:75](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_closed.ts#L75)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_closed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_closed.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_closed.ts:60](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_closed.ts#L60)
