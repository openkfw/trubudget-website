# service/domain/organization/public\_key\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/public\_key\_get

## Table of contents

### Functions

- [getAllPublicKeys](service_domain_organization_public_key_get.md#getallpublickeys)
- [getPublicKey](service_domain_organization_public_key_get.md#getpublickey)
- [publicKeyAlreadyExists](service_domain_organization_public_key_get.md#publickeyalreadyexists)

## Functions

### getAllPublicKeys

▸ **getAllPublicKeys**(`ctx`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`KeysByOrganization`](service_domain_organization_public_key_eventsourcing.md#keysbyorganization)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`KeysByOrganization`](service_domain_organization_public_key_eventsourcing.md#keysbyorganization)\>\>

#### Defined in

[src/service/domain/organization/public_key_get.ts:16](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/public_key_get.ts#L16)

___

### getPublicKey

▸ **getPublicKey**(`ctx`, `organization`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`PublicKeyBase64`](service_domain_organization_public_key.md#publickeybase64)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `organization` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`PublicKeyBase64`](service_domain_organization_public_key.md#publickeybase64)\>\>

#### Defined in

[src/service/domain/organization/public_key_get.ts:33](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/public_key_get.ts#L33)

___

### publicKeyAlreadyExists

▸ **publicKeyAlreadyExists**(`ctx`, `organization`, `repository`): `Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `organization` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Defined in

[src/service/domain/organization/public_key_get.ts:57](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/public_key_get.ts#L57)
