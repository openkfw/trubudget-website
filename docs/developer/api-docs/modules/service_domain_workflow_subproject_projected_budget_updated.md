# service/domain/workflow/subproject\_projected\_budget\_updated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_projected\_budget\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_projected_budget_updated.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_projected_budget_updated.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_projected_budget_updated.md#createevent)
- [mutate](service_domain_workflow_subproject_projected_budget_updated.md#mutate)
- [validate](service_domain_workflow_subproject_projected_budget_updated.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_projected_budget_updated.ts:24](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_projected_budget_updated.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `organization`, `value`, `currencyCode`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_projected_budget_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `organization` | `string` |
| `value` | `string` |
| `currencyCode` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_projected_budget_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_projected_budget_updated.ts:36](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_projected_budget_updated.ts#L36)

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
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_projected_budget_updated.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/subproject_projected_budget_updated.ts:79](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_projected_budget_updated.ts#L79)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_projected_budget_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_projected_budget_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_projected_budget_updated.ts:64](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_projected_budget_updated.ts#L64)
