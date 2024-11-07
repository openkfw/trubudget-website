# service/public\_key\_update
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/public\_key\_update

## Table of contents

### Functions

- [updatePublicKey](service_public_key_update.md#updatepublickey)

## Functions

### updatePublicKey

▸ **updatePublicKey**(`conn`, `ctx`, `serviceUser`, `requestData`): `Promise`\<[`Type`](result.md#type)\<`PublicKey`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_organization_public_key_update.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`PublicKey`\>\>

#### Defined in

[src/service/public_key_update.ts:20](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/public_key_update.ts#L20)
