# service/domain/workflow/project\_permission\_granted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_permission\_granted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_permission_granted.Event.md)

### Variables

- [schema](service_domain_workflow_project_permission_granted.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_permission_granted.md#createevent)
- [mutate](service_domain_workflow_project_permission_granted.md#mutate)
- [validate](service_domain_workflow_project_permission_granted.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project_permission_granted.ts:24](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/workflow/project_permission_granted.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `permission`, `grantee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `grantee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_permission_granted.ts:35](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/workflow/project_permission_granted.ts#L35)

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
| `event` | [`Event`](../interfaces/service_domain_workflow_project_permission_granted.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/project_permission_granted.ts:78](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/workflow/project_permission_granted.ts#L78)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_project_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_permission_granted.ts:63](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/workflow/project_permission_granted.ts#L63)
