# service/domain/document/document\_validate
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_validate

## Table of contents

### Functions

- [documentValidate](service_domain_document_document_validate.md#documentvalidate)

## Functions

### documentValidate

▸ **documentValidate**(`isDocumentValid`, `documentId`, `ctx`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `workflowitem`: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDocumentValid` | `boolean` |
| `documentId` | `string` |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `workflowitem`: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)  }\>\>

#### Defined in

[src/service/domain/document/document_validate.ts:33](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/document/document_validate.ts#L33)
