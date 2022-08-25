# service/domain/document/document\_uploaded
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_uploaded

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_document_document_uploaded.Event.md)

### Variables

- [schema](service_domain_document_document_uploaded.md#schema)

### Functions

- [createEvent](service_domain_document_document_uploaded.md#createevent)
- [createFrom](service_domain_document_document_uploaded.md#createfrom)
- [validate](service_domain_document_document_uploaded.md#validate)
- [validateDocument](service_domain_document_document_uploaded.md#validatedocument)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/document/document_uploaded.ts:25](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/document/document_uploaded.ts#L25)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `docId`, `fileName`, `organization`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_uploaded.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `docId` | `string` |
| `fileName` | `string` |
| `organization` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_uploaded.Event.md)\>

#### Defined in

[src/service/domain/document/document_uploaded.ts:41](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/document/document_uploaded.ts#L41)

___

### createFrom

▸ **createFrom**(`ctx`, `event`): [`Type`](result.md#type)<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`Event`](../interfaces/service_domain_document_document_uploaded.Event.md) |

#### Returns

[`Type`](result.md#type)<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)\>

#### Defined in

[src/service/domain/document/document_uploaded.ts:82](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/document/document_uploaded.ts#L82)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_uploaded.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_document_uploaded.Event.md)\>

#### Defined in

[src/service/domain/document/document_uploaded.ts:36](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/document/document_uploaded.ts#L36)

___

### validateDocument

▸ **validateDocument**(`input`): [`Type`](result.md#type)<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)\>

#### Defined in

[src/service/domain/document/document_uploaded.ts:77](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/document/document_uploaded.ts#L77)
