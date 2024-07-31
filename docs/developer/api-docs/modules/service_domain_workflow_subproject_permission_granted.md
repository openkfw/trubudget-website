# service/domain/workflow/subproject\_permission\_granted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_permission\_granted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_permission_granted.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_permission_granted.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_permission_granted.md#createevent)
- [mutate](service_domain_workflow_subproject_permission_granted.md#mutate)
- [validate](service_domain_workflow_subproject_permission_granted.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_permission_granted.ts:25](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_permission_granted.ts#L25)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `permission`, `grantee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `grantee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_permission_granted.ts:37](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_permission_granted.ts#L37)

___

### mutate

▸ **mutate**(`subproject`, `event`): [`Type`](result.md#type)\<`void`\>

Applies the event to the given subproject, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified
subproject is automatically validated when obtained using
`subproject_eventsourcing.ts`:`newSubprojectFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_permission_granted.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/subproject_permission_granted.ts:81](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_permission_granted.ts#L81)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_permission_granted.ts:66](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/subproject_permission_granted.ts#L66)
