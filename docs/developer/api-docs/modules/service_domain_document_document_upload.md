# service/domain/document/document\_upload
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_upload

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_document_document_upload.RequestData.md)

### Functions

- [uploadDocument](service_domain_document_document_upload.md#uploaddocument)

## Functions

### uploadDocument

▸ **uploadDocument**(`ctx`, `issuer`, `requestData`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_document_document_upload.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/document/document_upload.ts:34](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/document/document_upload.ts#L34)
