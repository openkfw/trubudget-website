# service/domain/document/document
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document

## Table of contents

### Interfaces

- [DeleteDocumentResponse](../interfaces/service_domain_document_document.DeleteDocumentResponse.md)
- [DeletedDocument](../interfaces/service_domain_document_document.DeletedDocument.md)
- [DocumentLink](../interfaces/service_domain_document_document.DocumentLink.md)
- [DocumentReference](../interfaces/service_domain_document_document.DocumentReference.md)
- [ExternalLinkReference](../interfaces/service_domain_document_document.ExternalLinkReference.md)
- [GenericDocument](../interfaces/service_domain_document_document.GenericDocument.md)
- [StoredDocument](../interfaces/service_domain_document_document.StoredDocument.md)
- [UploadedDocument](../interfaces/service_domain_document_document.UploadedDocument.md)

### Type Aliases

- [DocumentOrExternalLinkReference](service_domain_document_document.md#documentorexternallinkreference)
- [UploadedDocumentOrLink](service_domain_document_document.md#uploadeddocumentorlink)

### Variables

- [documentReferenceSchema](service_domain_document_document.md#documentreferenceschema)
- [storedDocumentSchema](service_domain_document_document.md#storeddocumentschema)
- [uploadedDocumentSchema](service_domain_document_document.md#uploadeddocumentschema)

### Functions

- [hashBase64String](service_domain_document_document.md#hashbase64string)
- [hashDocument](service_domain_document_document.md#hashdocument)
- [hashDocuments](service_domain_document_document.md#hashdocuments)
- [validate](service_domain_document_document.md#validate)

## Type Aliases

### DocumentOrExternalLinkReference

Ƭ **DocumentOrExternalLinkReference**: [`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md) \| [`ExternalLinkReference`](../interfaces/service_domain_document_document.ExternalLinkReference.md)

#### Defined in

[src/service/domain/document/document.ts:43](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L43)

___

### UploadedDocumentOrLink

Ƭ **UploadedDocumentOrLink**: [`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md) \| [`DocumentLink`](../interfaces/service_domain_document_document.DocumentLink.md)

#### Defined in

[src/service/domain/document/document.ts:72](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L72)

## Variables

### documentReferenceSchema

• `Const` **documentReferenceSchema**: `AlternativesSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:45](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L45)

___

### storedDocumentSchema

• `Const` **storedDocumentSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:18](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L18)

___

### uploadedDocumentSchema

• `Const` **uploadedDocumentSchema**: `AlternativesSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:74](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L74)

## Functions

### hashBase64String

▸ **hashBase64String**(`base64String`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `base64String` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/service/domain/document/document.ts:129](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L129)

___

### hashDocument

▸ **hashDocument**(`document`): `Promise`\<[`Type`](result.md#type)\<[`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md)\>\>

#### Defined in

[src/service/domain/document/document.ts:97](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L97)

___

### hashDocuments

▸ **hashDocuments**(`documents`): `Promise`\<[`Type`](result.md#type)\<[`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `documents` | [`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md)[] |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md)[]\>\>

#### Defined in

[src/service/domain/document/document.ts:108](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L108)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md)\>

#### Defined in

[src/service/domain/document/document.ts:137](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/document/document.ts#L137)
