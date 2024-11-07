# service/domain/workflow/subproject\_updated
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_updated.Event.md)
- [UpdatedData](../interfaces/service_domain_workflow_subproject_updated.UpdatedData.md)

### Variables

- [schema](service_domain_workflow_subproject_updated.md#schema)
- [updatedDataSchema](service_domain_workflow_subproject_updated.md#updateddataschema)

### Functions

- [createEvent](service_domain_workflow_subproject_updated.md#createevent)
- [mutate](service_domain_workflow_subproject_updated.md#mutate)
- [validate](service_domain_workflow_subproject_updated.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_updated.ts:43](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_updated.ts#L43)

___

### updatedDataSchema

• `Const` **updatedDataSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_updated.ts:33](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_updated.ts#L33)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `update`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `update` | [`UpdatedData`](../interfaces/service_domain_workflow_subproject_updated.UpdatedData.md) |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_updated.ts:54](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_updated.ts#L54)

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
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_updated.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/subproject_updated.ts:96](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_updated.ts#L96)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_updated.ts:81](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_updated.ts#L81)
