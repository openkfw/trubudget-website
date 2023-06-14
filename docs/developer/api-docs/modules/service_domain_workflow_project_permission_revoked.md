# service/domain/workflow/project\_permission\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_permission\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_project_permission_revoked.Event.md)

### Variables

- [schema](service_domain_workflow_project_permission_revoked.md#schema)

### Functions

- [createEvent](service_domain_workflow_project_permission_revoked.md#createevent)
- [mutate](service_domain_workflow_project_permission_revoked.md#mutate)
- [validate](service_domain_workflow_project_permission_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/project_permission_revoked.ts:22](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_permission_revoked.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `permission`, `revokee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_permission_revoked.ts:32](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_permission_revoked.ts#L32)

___

### mutate

▸ **mutate**(`project`, `event`): [`Type`](result.md#type)<`void`\>

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
| `event` | [`Event`](../interfaces/service_domain_workflow_project_permission_revoked.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/project_permission_revoked.ts:73](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_permission_revoked.ts#L73)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/project_permission_revoked.ts:58](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_permission_revoked.ts#L58)
