# service/domain/workflow/workflowitem\_updated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_workflowitem_updated.Event.md)
- [Modification](../interfaces/service_domain_workflow_workflowitem_updated.Modification.md)

### Variables

- [modificationSchema](service_domain_workflow_workflowitem_updated.md#modificationschema)
- [schema](service_domain_workflow_workflowitem_updated.md#schema)

### Functions

- [createEvent](service_domain_workflow_workflowitem_updated.md#createevent)
- [mutate](service_domain_workflow_workflowitem_updated.md#mutate)
- [validate](service_domain_workflow_workflowitem_updated.md#validate)

## Variables

### modificationSchema

• `Const` **modificationSchema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_updated.ts:30](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_updated.ts#L30)

___

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem_updated.ts:55](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_updated.ts#L55)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `update`, `time?`, `metadata?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `update` | [`Modification`](../interfaces/service_domain_workflow_workflowitem_updated.Modification.md) |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_updated.ts:67](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_updated.ts#L67)

___

### mutate

▸ **mutate**(`workflowitem`, `event`): [`Type`](result.md#type)<`void`\>

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
| `event` | [`Event`](../interfaces/service_domain_workflow_workflowitem_updated.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/workflow/workflowitem_updated.ts:113](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_updated.ts#L113)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_workflowitem_updated.Event.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_updated.ts:98](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_updated.ts#L98)
