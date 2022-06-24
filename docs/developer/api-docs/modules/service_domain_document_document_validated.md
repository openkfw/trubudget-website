# service/domain/document/document\_validated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_validated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_document_document_validated.Event.md)

### Variables

- [schema](service_domain_document_document_validated.md#schema)

### Functions

- [createEvent](service_domain_document_document_validated.md#createevent)
- [mutate](service_domain_document_document_validated.md#mutate)
- [validate](service_domain_document_document_validated.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/document/document_validated.ts:24](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_validated.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`isDocumentValid`, `documentId`, `source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDocumentValid` | `boolean` |
| `documentId` | `string` |
| `source` | `string` |
| `publisher` | `string` |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Defined in

[src/service/domain/document/document_validated.ts:36](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_validated.ts#L36)

___

### mutate

▸ **mutate**(`_workflowitem`, `event`): [`Type`](result.md#type)<`void`\>

Applies the event to the given workflowitem, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified
workflowitem is automatically validated when obtained using
`workflowitem_eventsourcing.ts`:`newWorkflowitemFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `event` | [`Event`](../interfaces/service_domain_document_document_validated.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/document/document_validated.ts:79](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_validated.ts#L79)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Defined in

[src/service/domain/document/document_validated.ts:64](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_validated.ts#L64)
