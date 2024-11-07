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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/document/storage_service_url_updated.ts:21](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/document/storage_service_url_updated.ts#L21)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `organization`, `organizationUrl`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `organization` | `string` |
| `organizationUrl` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Defined in

[src/service/domain/document/storage_service_url_updated.ts:31](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/document/storage_service_url_updated.ts#L31)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_document_storage_service_url_updated.Event.md)\>

#### Defined in

[src/service/domain/document/storage_service_url_updated.ts:55](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/document/storage_service_url_updated.ts#L55)
