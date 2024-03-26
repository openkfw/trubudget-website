# service/domain/document/document\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_eventsourcing

## Table of contents

### Functions

- [processDocumentEvents](service_domain_document_document_eventsourcing.md#processdocumentevents)
- [sourceSecrets](service_domain_document_document_eventsourcing.md#sourcesecrets)

## Functions

### processDocumentEvents

▸ **processDocumentEvents**(`ctx`, `events`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `documents` | [`StoredDocument`](../interfaces/service_domain_document_document.StoredDocument.md)[] |
| `errors` | `Error`[] |

#### Defined in

[src/service/domain/document/document_eventsourcing.ts:12](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/document/document_eventsourcing.ts#L12)

___

### sourceSecrets

▸ **sourceSecrets**(`ctx`, `events`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |
| `secrets` | [`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)[] |

#### Defined in

[src/service/domain/document/document_eventsourcing.ts:101](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/document/document_eventsourcing.ts#L101)
