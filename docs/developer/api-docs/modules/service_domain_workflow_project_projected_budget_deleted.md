# service/domain/workflow/project\_projected\_budget\_deleted
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_projected\_budget\_deleted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_projected_budget_deleted.Event.md)

### Variables

- [schema](service_domain_workflow_project_projected_budget_deleted.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_projected_budget_deleted.md#createevent)
- [mutate](service_domain_workflow_project_projected_budget_deleted.md#mutate)
- [validate](service_domain_workflow_project_projected_budget_deleted.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_deleted.ts:23](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/workflow/project_projected_budget_deleted.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `organization`, `currencyCode`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_deleted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `organization` | `string` |
| `currencyCode` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_deleted.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_deleted.ts:34](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/workflow/project_projected_budget_deleted.ts#L34)

___

### mutate

▸ **mutate**(`project`, `event`): [`Type`](result.md#type)\<`void`\>

Applies the event to the given project, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified project
is automatically validated when obtained using
`project_eventsourcing.ts`:`newProjectFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../interfaces/service_domain_workflow_project.Project.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_project_projected_budget_deleted.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_deleted.ts:75](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/workflow/project_projected_budget_deleted.ts#L75)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_deleted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_projected_budget_deleted.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_deleted.ts:60](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/workflow/project_projected_budget_deleted.ts#L60)
