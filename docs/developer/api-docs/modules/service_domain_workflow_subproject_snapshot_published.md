# service/domain/workflow/subproject\_snapshot\_published
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_snapshot\_published

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_snapshot_published.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_snapshot_published.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_snapshot_published.md#createevent)
- [validate](service_domain_workflow_subproject_snapshot_published.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_snapshot_published.ts:20](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_snapshot_published.ts#L20)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `subproject`, `time?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_snapshot_published.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_snapshot_published.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_snapshot_published.ts:29](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_snapshot_published.ts#L29)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_snapshot_published.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_snapshot_published.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_snapshot_published.ts:51](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_snapshot_published.ts#L51)
