# service/domain/document/document\_shared
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_shared

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_document_document_shared.Event.md)
- [SecretPublished](../interfaces/service_domain_document_document_shared.SecretPublished.md)

### Variables

- [schema](service_domain_document_document_shared.md#schema)

### Functions

- [createEvent](service_domain_document_document_shared.md#createevent)
- [validate](service_domain_document_document_shared.md#validate)
- [validateSecret](service_domain_document_document_shared.md#validatesecret)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document_shared.ts:28](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/document/document_shared.ts#L28)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `docId`, `organization`, `encryptedSecret`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `docId` | `string` |
| `organization` | `string` |
| `encryptedSecret` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Defined in

[src/service/domain/document/document_shared.ts:44](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/document/document_shared.ts#L44)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Defined in

[src/service/domain/document/document_shared.ts:39](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/document/document_shared.ts#L39)

___

### validateSecret

▸ **validateSecret**(`input`): [`Type`](result.md#type)\<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)\>

#### Defined in

[src/service/domain/document/document_shared.ts:79](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/document/document_shared.ts#L79)
