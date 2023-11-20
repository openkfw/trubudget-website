# service/domain/document/workflowitem\_document\_download
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/workflowitem\_document\_download

## Table of contents

### Functions

- [getDocument](service_domain_document_workflowitem_document_download.md#getdocument)

## Functions

### getDocument

▸ **getDocument**(`ctx`, `user`, `workflowitemId`, `documentId`, `repository`): `Promise`\<[`Type`](result.md#type)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `workflowitemId` | `string` |
| `documentId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`any`\>\>

#### Defined in

[src/service/domain/document/workflowitem_document_download.ts:110](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/workflowitem_document_download.ts#L110)
