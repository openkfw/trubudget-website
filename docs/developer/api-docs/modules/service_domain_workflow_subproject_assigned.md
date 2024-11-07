# service/domain/workflow/subproject\_assigned
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_assigned

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_assigned.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_assigned.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_assigned.md#createevent)
- [mutate](service_domain_workflow_subproject_assigned.md#mutate)
- [validate](service_domain_workflow_subproject_assigned.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_assigned.ts:25](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_assigned.ts#L25)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `assignee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `assignee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_assigned.ts:36](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_assigned.ts#L36)

___

### mutate

▸ **mutate**(`subproject`, `event`): [`Type`](result.md#type)\<`void`\>

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
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_assigned.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/subproject_assigned.ts:78](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_assigned.ts#L78)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_assigned.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_assigned.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_assigned.ts:63](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_assigned.ts#L63)
