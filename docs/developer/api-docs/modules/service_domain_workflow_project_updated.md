# service/domain/workflow/project\_updated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_updated.Event.md)
- [Modification](../interfaces/service_domain_workflow_project_updated.Modification.md)

### Variables

- [modificationSchema](service_domain_workflow_project_updated.md#modificationschema)
- [schema](service_domain_workflow_project_updated.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_updated.md#createevent)
- [mutate](service_domain_workflow_project_updated.md#mutate)
- [validate](service_domain_workflow_project_updated.md#validate)

## Variables

### modificationSchema

• `Const` **modificationSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_updated.ts:26](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_updated.ts#L26)

___

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_updated.ts:44](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_updated.ts#L44)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `modification`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `modification` | [`Modification`](../interfaces/service_domain_workflow_project_updated.Modification.md) |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_updated.ts:54](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_updated.ts#L54)

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
| `event` | [`Event`](../interfaces/service_domain_workflow_project_updated.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/project_updated.ts:95](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_updated.ts#L95)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_updated.ts:80](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_updated.ts#L80)
