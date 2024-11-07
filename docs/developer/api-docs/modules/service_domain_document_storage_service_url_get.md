# service/domain/document/storage\_service\_url\_get
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/storage\_service\_url\_get

## Table of contents

### Functions

- [getAllStorageServiceUrls](service_domain_document_storage_service_url_get.md#getallstorageserviceurls)
- [getStorageServiceUrl](service_domain_document_storage_service_url_get.md#getstorageserviceurl)

## Functions

### getAllStorageServiceUrls

▸ **getAllStorageServiceUrls**(`repository`): `Promise`\<[`Type`](result.md#type)\<`Map`\<`string`, `string`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`Map`\<`string`, `string`\>\>\>

#### Defined in

[src/service/domain/document/storage_service_url_get.ts:13](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/document/storage_service_url_get.ts#L13)

___

### getStorageServiceUrl

▸ **getStorageServiceUrl**(`organization`, `repository`): `Promise`\<[`Type`](result.md#type)\<`string` \| `undefined`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `organization` | `any` |
| `repository` | `any` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`string` \| `undefined`\>\>

#### Defined in

[src/service/domain/document/storage_service_url_get.ts:28](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/document/storage_service_url_get.ts#L28)
