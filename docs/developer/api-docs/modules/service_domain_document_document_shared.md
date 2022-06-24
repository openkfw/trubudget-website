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

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/document/document_shared.ts:26](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_shared.ts#L26)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `docId`, `organization`, `encryptedSecret`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `docId` | `string` |
| `organization` | `string` |
| `encryptedSecret` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Defined in

[src/service/domain/document/document_shared.ts:41](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_shared.ts#L41)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_shared.Event.md)\>

#### Defined in

[src/service/domain/document/document_shared.ts:36](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_shared.ts#L36)

___

### validateSecret

▸ **validateSecret**(`input`): [`Type`](result.md#type)<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)\>

#### Defined in

[src/service/domain/document/document_shared.ts:74](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/document_shared.ts#L74)
