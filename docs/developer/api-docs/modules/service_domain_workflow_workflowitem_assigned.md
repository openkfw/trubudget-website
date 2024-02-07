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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:25](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/workflowitem_assigned.ts#L25)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `assignee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

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
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:37](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/workflowitem_assigned.ts#L37)

___

### mutate

▸ **mutate**(`workflowitem`, `event`): [`Type`](result.md#type)\<`void`\>

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

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:81](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/workflowitem_assigned.ts#L81)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_assigned.ts:66](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/workflowitem_assigned.ts#L66)
