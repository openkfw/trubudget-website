# service/domain/workflow/project\_snapshot\_published
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_snapshot\_published

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_snapshot_published.Event.md)

### Variables

- [schema](service_domain_workflow_project_snapshot_published.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_snapshot_published.md#createevent)
- [validate](service_domain_workflow_project_snapshot_published.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_snapshot_published.ts:21](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_snapshot_published.ts#L21)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `project`, `time?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_snapshot_published.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `project` | [`Project`](../interfaces/service_domain_workflow_project.Project.md) |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_snapshot_published.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_snapshot_published.ts:29](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_snapshot_published.ts#L29)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_snapshot_published.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_snapshot_published.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_snapshot_published.ts:50](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_snapshot_published.ts#L50)
