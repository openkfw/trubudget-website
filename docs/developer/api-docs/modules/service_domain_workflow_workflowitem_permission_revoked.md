# service/domain/workflow/workflowitem\_permission\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_permission\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitem_permission_revoked.Event.md)

### Variables

- [schema](service_domain_workflow_workflowitem_permission_revoked.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitem_permission_revoked.md#createevent)
- [mutate](service_domain_workflow_workflowitem_permission_revoked.md#mutate)
- [validate](service_domain_workflow_workflowitem_permission_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_permission_revoked.ts:27](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_permission_revoked.ts#L27)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `permission`, `revokee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_permission_revoked.ts:40](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_permission_revoked.ts#L40)

___

### mutate

▸ **mutate**(`workflowitem`, `event`): [`Type`](result.md#type)\<`void`\>

Applies the event to the given workflowitem, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified
workflowitem is automatically validated when obtained using
`workflowitem_eventsourcing.ts`:`newWorkflowitemFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `event` | [`Event`](../interfaces/service_domain_workflow_workflowitem_permission_revoked.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/workflow/workflowitem_permission_revoked.ts:86](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_permission_revoked.ts#L86)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_workflowitem_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_permission_revoked.ts:71](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/workflowitem_permission_revoked.ts#L71)
