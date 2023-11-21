# service/domain/document/storage\_service\_url\_eventsourcing
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/storage\_service\_url\_eventsourcing

## Table of contents

### Functions

- [applyStorageServiceUrls](service_domain_document_storage_service_url_eventsourcing.md#applystorageserviceurls)
- [sourceStorageServiceUrls](service_domain_document_storage_service_url_eventsourcing.md#sourcestorageserviceurls)

## Functions

### applyStorageServiceUrls

▸ **applyStorageServiceUrls**(`urls`, `event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `Map`\<`string`, `string`\> |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

`void`

#### Defined in

[src/service/domain/document/storage_service_url_eventsourcing.ts:13](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/storage_service_url_eventsourcing.ts#L13)

___

### sourceStorageServiceUrls

▸ **sourceStorageServiceUrls**(`events`): `Map`\<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |

#### Returns

`Map`\<`string`, `string`\>

#### Defined in

[src/service/domain/document/storage_service_url_eventsourcing.ts:4](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/document/storage_service_url_eventsourcing.ts#L4)
