# service/domain/document/document\_deleted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_deleted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_document_document_deleted.Event.md)

### Variables

- [schema](service_domain_document_document_deleted.md#schema)

### Functions

- [createEvent](service_domain_document_document_deleted.md#createevent)
- [createFrom](service_domain_document_document_deleted.md#createfrom)
- [validate](service_domain_document_document_deleted.md#validate)
- [validateDocument](service_domain_document_document_deleted.md#validatedocument)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/document_deleted.ts:22](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/document/document_deleted.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `docId`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_deleted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `docId` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_deleted.Event.md)\>

#### Defined in

[src/service/domain/document/document_deleted.ts:36](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/document/document_deleted.ts#L36)

___

### createFrom

▸ **createFrom**(`ctx`, `event`): [`Type`](result.md#type)\<[`DeletedDocument`](../interfaces/service_domain_document_document.DeletedDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`Event`](../interfaces/service_domain_document_document_deleted.Event.md) |

#### Returns

[`Type`](result.md#type)\<[`DeletedDocument`](../interfaces/service_domain_document_document.DeletedDocument.md)\>

#### Defined in

[src/service/domain/document/document_deleted.ts:74](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/document/document_deleted.ts#L74)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_deleted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Partial`\<[`Event`](../interfaces/service_domain_document_document_deleted.Event.md)\> |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_document_deleted.Event.md)\>

#### Defined in

[src/service/domain/document/document_deleted.ts:31](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/document/document_deleted.ts#L31)

___

### validateDocument

▸ **validateDocument**(`input`): [`Type`](result.md#type)\<[`DeletedDocument`](../interfaces/service_domain_document_document.DeletedDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Partial`\<[`DeletedDocument`](../interfaces/service_domain_document_document.DeletedDocument.md)\> |

#### Returns

[`Type`](result.md#type)\<[`DeletedDocument`](../interfaces/service_domain_document_document.DeletedDocument.md)\>

#### Defined in

[src/service/domain/document/document_deleted.ts:69](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/document/document_deleted.ts#L69)
