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

- [MAX\_DOCUMENT\_SIZE\_BASE64](service_domain_document_document.md#max_document_size_base64)
- [MAX\_DOCUMENT\_SIZE\_BINARY](service_domain_document_document.md#max_document_size_binary)
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

[src/service/domain/document/document.ts:46](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L46)

___

### UploadedDocumentOrLink

Ƭ **UploadedDocumentOrLink**: [`UploadedDocument`](../interfaces/service_domain_document_document.UploadedDocument.md) \| [`DocumentLink`](../interfaces/service_domain_document_document.DocumentLink.md)

#### Defined in

[src/service/domain/document/document.ts:75](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L75)

## Variables

### MAX\_DOCUMENT\_SIZE\_BASE64

• `Const` **MAX\_DOCUMENT\_SIZE\_BASE64**: `number`

#### Defined in

[src/service/domain/document/document.ts:8](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L8)

___

### MAX\_DOCUMENT\_SIZE\_BINARY

• `Const` **MAX\_DOCUMENT\_SIZE\_BINARY**: `number`

#### Defined in

[src/service/domain/document/document.ts:7](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L7)

___

### documentReferenceSchema

• `Const` **documentReferenceSchema**: `AlternativesSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:48](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L48)

___

### storedDocumentSchema

• `Const` **storedDocumentSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:21](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L21)

___

### uploadedDocumentSchema

• `Const` **uploadedDocumentSchema**: `AlternativesSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document.ts:77](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L77)

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

[src/service/domain/document/document.ts:132](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L132)

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

[src/service/domain/document/document.ts:100](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L100)

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

[src/service/domain/document/document.ts:111](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L111)

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

[src/service/domain/document/document.ts:140](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/document/document.ts#L140)
