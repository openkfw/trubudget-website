# service/domain/workflow/subproject\_created
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_created

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_created.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_created.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_created.md#createevent)
- [createFrom](service_domain_workflow_subproject_created.md#createfrom)
- [validate](service_domain_workflow_subproject_created.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_created.ts:57](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_created.ts#L57)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subproject`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subproject` | `InitialData` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_created.ts:66](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_created.ts#L66)

___

### createFrom

▸ **createFrom**(`ctx`, `event`): [`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md) |

#### Returns

[`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Defined in

[src/service/domain/workflow/subproject_created.ts:95](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_created.ts#L95)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_created.ts:90](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/subproject_created.ts#L90)
