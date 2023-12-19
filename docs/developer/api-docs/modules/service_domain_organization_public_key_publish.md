# service/domain/organization/public\_key\_publish
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/public\_key\_publish

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_public_key_publish.RequestData.md)

### Functions

- [publishPublicKey](service_domain_organization_public_key_publish.md#publishpublickey)
- [validate](service_domain_organization_public_key_publish.md#validate)

## Functions

### publishPublicKey

▸ **publishPublicKey**(`ctx`, `creatingUser`, `requestData`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_organization_public_key_publish.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Defined in

[src/service/domain/organization/public_key_publish.ts:34](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/public_key_publish.ts#L34)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_public_key_publish.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_public_key_publish.RequestData.md)\>

#### Defined in

[src/service/domain/organization/public_key_publish.ts:25](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/public_key_publish.ts#L25)
