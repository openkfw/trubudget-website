# service/domain/document/document\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_get

## Table of contents

### Functions

- [getAllDocumentInfos](service_domain_document_document_get.md#getalldocumentinfos)
- [getAllDocumentReferences](service_domain_document_document_get.md#getalldocumentreferences)
- [getDocumentInfo](service_domain_document_document_get.md#getdocumentinfo)

## Functions

### getAllDocumentInfos

▸ **getAllDocumentInfos**(`ctx`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)[]\>\>

#### Defined in

[src/service/domain/document/document_get.ts:24](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/document/document_get.ts#L24)

___

### getAllDocumentReferences

▸ **getAllDocumentReferences**(`repository`): `Promise`\<[`Type`](result.md#type)\<[`DocumentOrExternalLinkReference`](service_domain_document_document.md#documentorexternallinkreference)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`DocumentOrExternalLinkReference`](service_domain_document_document.md#documentorexternallinkreference)[]\>\>

#### Defined in

[src/service/domain/document/document_get.ts:55](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/document/document_get.ts#L55)

___

### getDocumentInfo

▸ **getDocumentInfo**(`ctx`, `docId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md) \| `undefined`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `docId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md) \| `undefined`\>\>

#### Defined in

[src/service/domain/document/document_get.ts:39](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/document/document_get.ts#L39)
