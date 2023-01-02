# service/domain/workflow/workflowitems\_reordered
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitems\_reordered

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitems_reordered.Event.md)

### Variables

- [schema](service_domain_workflow_workflowitems_reordered.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitems_reordered.md#createevent)
- [mutate](service_domain_workflow_workflowitems_reordered.md#mutate)
- [validate](service_domain_workflow_workflowitems_reordered.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/workflow/workflowitems_reordered.ts:22](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/workflowitems_reordered.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `ordering`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitems_reordered.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `ordering` | `string`[] |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitems_reordered.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitems_reordered.ts:32](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/workflowitems_reordered.ts#L32)

___

### mutate

▸ **mutate**(`subproject`, `event`): [`Type`](result.md#type)<`void`\>

Applies the event to the given subproject, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified
subproject is automatically validated when obtained using
`subproject_eventsourcing.ts`:`newSubprojectFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_workflowitems_reordered.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/workflowitems_reordered.ts:72](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/workflowitems_reordered.ts#L72)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitems_reordered.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitems_reordered.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitems_reordered.ts:57](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/workflowitems_reordered.ts#L57)