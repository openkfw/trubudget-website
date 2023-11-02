# service/domain/organization/public\_key\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/public\_key\_update

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_public_key_update.RequestData.md)

### Functions

- [updatePublicKey](service_domain_organization_public_key_update.md#updatepublickey)
- [validate](service_domain_organization_public_key_update.md#validate)

## Functions

### updatePublicKey

▸ **updatePublicKey**(`ctx`, `creatingUser`, `requestData`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_organization_public_key_update.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Defined in

[src/service/domain/organization/public_key_update.ts:33](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/public_key_update.ts#L33)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`RequestData`](../interfaces/service_domain_organization_public_key_update.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`RequestData`](../interfaces/service_domain_organization_public_key_update.RequestData.md)\>

#### Defined in

[src/service/domain/organization/public_key_update.ts:24](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/public_key_update.ts#L24)
