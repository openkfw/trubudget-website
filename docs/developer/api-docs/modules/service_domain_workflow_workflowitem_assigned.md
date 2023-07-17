# service/domain/workflow/workflowitem\_assigned
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_assigned

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)

### Variables

- [schema](service_domain_workflow_workflowitem_assigned.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitem_assigned.md#createevent)
- [mutate](service_domain_workflow_workflowitem_assigned.md#mutate)
- [validate](service_domain_workflow_workflowitem_assigned.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:23](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_assigned.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `assignee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `assignee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:34](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_assigned.ts#L34)

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
| `event` | [`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:76](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_assigned.ts#L76)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:61](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/workflowitem_assigned.ts#L61)
