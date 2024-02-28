# service/domain/document/document\_share
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/document\_share

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_document_document_share.RequestData.md)

### Functions

- [shareDocument](service_domain_document_document_share.md#sharedocument)

## Functions

### shareDocument

▸ **shareDocument**(`ctx`, `issuer`, `requestData`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent) \| `undefined`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_document_document_share.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent) \| `undefined`\>\>

#### Defined in

[src/service/domain/document/document_share.ts:39](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/document/document_share.ts#L39)
