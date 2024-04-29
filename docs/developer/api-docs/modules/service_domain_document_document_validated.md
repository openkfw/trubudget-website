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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document_validated.ts:26](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/document/document_validated.ts#L26)

## Functions

### createEvent

▸ **createEvent**(`isDocumentValid`, `documentId`, `source`, `publisher`, `projectId`, `subprojectId`, `workflowitemId`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

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
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Defined in

[src/service/domain/document/document_validated.ts:39](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/document/document_validated.ts#L39)

___

### mutate

▸ **mutate**(`_workflowitem`, `event`): [`Type`](result.md#type)\<`void`\>

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

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/document/document_validated.ts:84](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/document/document_validated.ts#L84)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_validated.Event.md)\>

#### Defined in

[src/service/domain/document/document_validated.ts:69](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/document/document_validated.ts#L69)
