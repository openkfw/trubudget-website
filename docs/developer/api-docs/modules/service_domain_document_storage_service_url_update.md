# service/domain/document/storage\_service\_url\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/storage\_service\_url\_update

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_document_storage_service_url_update.RequestData.md)

### Functions

- [storageServiceUrlPublish](service_domain_document_storage_service_url_update.md#storageserviceurlpublish)
- [validate](service_domain_document_storage_service_url_update.md#validate)

## Functions

### storageServiceUrlPublish

▸ **storageServiceUrlPublish**(`ctx`, `issuer`, `requestData`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_document_storage_service_url_update.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Defined in

[src/service/domain/document/storage_service_url_update.ts:26](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/document/storage_service_url_update.ts#L26)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_document_storage_service_url_update.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_document_storage_service_url_update.RequestData.md)\>

#### Defined in

[src/service/domain/document/storage_service_url_update.ts:16](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/document/storage_service_url_update.ts#L16)
