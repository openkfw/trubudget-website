# service/domain/document/document\_upload
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_upload

## Table of contents

### Interfaces

- [File](../interfaces/service_domain_document_document_upload.File.md)
- [RequestData](../interfaces/service_domain_document_document_upload.RequestData.md)

### Functions

- [uploadDocument](service_domain_document_document_upload.md#uploaddocument)

## Functions

### uploadDocument

▸ **uploadDocument**(`ctx`, `issuer`, `file`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `file` | [`File`](../interfaces/service_domain_document_document_upload.File.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/document/document_upload.ts:44](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/document/document_upload.ts#L44)
