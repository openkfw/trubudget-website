# service/domain/document/document
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document

## Table of contents

### Interfaces

- [DocumentReference](../interfaces/service_domain_document_document.DocumentReference.md)
- [GenericDocument](../interfaces/service_domain_document_document.GenericDocument.md)
- [StoredDocument](../interfaces/service_domain_document_document.StoredDocument.md)
- [UploadedDocument](../interfaces/service_domain_document_document.UploadedDocument.md)

### Variables

- [documentReferenceSchema](service_domain_document_document.md#documentreferenceschema)
- [storedDocumentSchema](service_domain_document_document.md#storeddocumentschema)
- [uploadedDocumentSchema](service_domain_document_document.md#uploadeddocumentschema)

### Functions

- [hashDocument](service_domain_document_document.md#hashdocument)
- [hashDocuments](service_domain_document_document.md#hashdocuments)
- [validate](service_domain_document_document.md#validate)

## Variables

### documentReferenceSchema

• `Const` **documentReferenceSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:28](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/document/document.ts#L28)

___

### storedDocumentSchema

• `Const` **storedDocumentSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:14](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/document/document.ts#L14)

___

### uploadedDocumentSchema

• `Const` **uploadedDocumentSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:41](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/document/document.ts#L41)

## Functions

### hashDocument

▸ **hashDocument**(`document`): `Promise`\<[`Type`](result.md#type)\<[`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`DocumentReference`](../interfaces/service_domain_document_document.DocumentReference.md)\>\>

#### Defined in

[src/service/domain/document/document.ts:54](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/document/document.ts#L54)

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

[src/service/domain/document/document.ts:65](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/document/document.ts#L65)

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

[src/service/domain/document/document.ts:87](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/document/document.ts#L87)
