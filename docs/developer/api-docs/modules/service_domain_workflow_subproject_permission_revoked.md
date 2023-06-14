# service/domain/workflow/subproject\_permission\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_permission\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_subproject_permission_revoked.Event.md)

### Variables

- [schema](service_domain_workflow_subproject_permission_revoked.md#schema)

### Functions

- [createEvent](service_domain_workflow_subproject_permission_revoked.md#createevent)
- [mutate](service_domain_workflow_subproject_permission_revoked.md#mutate)
- [validate](service_domain_workflow_subproject_permission_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/subproject_permission_revoked.ts:23](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_permission_revoked.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `permission`, `revokee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_permission_revoked.ts:34](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_permission_revoked.ts#L34)

___

### mutate

▸ **mutate**(`subproject`, `event`): [`Type`](result.md#type)<`void`\>

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
| `event` | [`Event`](../interfaces/service_domain_workflow_subproject_permission_revoked.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/subproject_permission_revoked.ts:76](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_permission_revoked.ts#L76)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_subproject_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/subproject_permission_revoked.ts:61](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/subproject_permission_revoked.ts#L61)
