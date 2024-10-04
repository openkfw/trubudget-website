# service/domain/workflow/project\_created
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_created

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_created.Event.md)

### Variables

- [schema](service_domain_workflow_project_created.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_created.md#createevent)
- [createFrom](service_domain_workflow_project_created.md#createfrom)
- [validate](service_domain_workflow_project_created.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_created.ts:55](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/project_created.ts#L55)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `project`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `project` | `InitialData` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_created.ts:64](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/project_created.ts#L64)

___

### createFrom

▸ **createFrom**(`ctx`, `event`): [`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_project_created.Event.md) |

#### Returns

[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Defined in

[src/service/domain/workflow/project_created.ts:93](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/project_created.ts#L93)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_created.ts:88](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/project_created.ts#L88)
