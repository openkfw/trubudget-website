# service/domain/workflow/workflowitem\_created
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_created

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitem_created.Event.md)

### Variables

- [schema](service_domain_workflow_workflowitem_created.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitem_created.md#createevent)
- [createFrom](service_domain_workflow_workflowitem_created.md#createfrom)
- [validate](service_domain_workflow_workflowitem_created.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_created.ts:74](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_created.ts#L74)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitem`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitem` | `InitialData` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_created.ts:85](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_created.ts#L85)

___

### createFrom

▸ **createFrom**(`ctx`, `event`): [`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_workflowitem_created.Event.md) |

#### Returns

[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_created.ts:117](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_created.ts#L117)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_created.ts:112](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_created.ts#L112)
