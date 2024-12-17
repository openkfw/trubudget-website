# service/domain/workflow/project\_closed
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_closed

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_closed.Event.md)

### Variables

- [schema](service_domain_workflow_project_closed.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_closed.md#createevent)
- [mutate](service_domain_workflow_project_closed.md#mutate)
- [validate](service_domain_workflow_project_closed.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_closed.ts:22](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_closed.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_closed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_closed.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_closed.ts:31](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_closed.ts#L31)

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
| `event` | [`Event`](../interfaces/service_domain_workflow_project_closed.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/project_closed.ts:68](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_closed.ts#L68)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_closed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_closed.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_closed.ts:53](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/project_closed.ts#L53)
