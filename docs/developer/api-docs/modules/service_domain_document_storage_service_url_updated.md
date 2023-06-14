# service/domain/document/storage\_service\_url\_updated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/storage\_service\_url\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_document_storage_service_url_updated.Event.md)

### Variables

- [schema](service_domain_document_storage_service_url_updated.md#schema)

### Functions

- [createEvent](service_domain_document_storage_service_url_updated.md#createevent)
- [validate](service_domain_document_storage_service_url_updated.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/document/storage_service_url_updated.ts:18](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/document/storage_service_url_updated.ts#L18)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `organization`, `organizationUrl`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `organization` | `string` |
| `organizationUrl` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Defined in

[src/service/domain/document/storage_service_url_updated.ts:27](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/document/storage_service_url_updated.ts#L27)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Defined in

[src/service/domain/document/storage_service_url_updated.ts:49](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/document/storage_service_url_updated.ts#L49)
