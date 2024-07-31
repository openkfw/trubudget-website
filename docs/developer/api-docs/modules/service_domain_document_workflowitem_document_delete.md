# service/domain/document/workflowitem\_document\_delete
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/workflowitem\_document\_delete

## Table of contents

### Functions

- [deleteDocument](service_domain_document_workflowitem_document_delete.md#deletedocument)

## Functions

### deleteDocument

▸ **deleteDocument**(`ctx`, `user`, `projectId`, `subprojectId`, `workflowitemId`, `documentId`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[]  }\>\>

Deletes a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) | The context. |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) | The user performing the action. |
| `projectId` | `string` | The ID of the project. |
| `subprojectId` | `string` | The ID of the subproject. |
| `workflowitemId` | `string` | The ID of the workflowitem. |
| `documentId` | `string` | The ID of the document to delete. |
| `repository` | `DeleteDocumentRepository` | The repository for deleting the document. |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[]  }\>\>

A promise that resolves to an object containing the new events.

#### Defined in

[src/service/domain/document/workflowitem_document_delete.ts:128](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/document/workflowitem_document_delete.ts#L128)
