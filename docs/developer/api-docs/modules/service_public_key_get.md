# service/public\_key\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/public\_key\_get

## Table of contents

### Functions

- [getPublicKey](service_public_key_get.md#getpublickey)

## Functions

### getPublicKey

▸ **getPublicKey**(`conn`, `ctx`, `organization`): `Promise`\<[`Type`](result.md#type)\<[`PublicKeyBase64`](service_domain_organization_public_key.md#publickeybase64)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `organization` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`PublicKeyBase64`](service_domain_organization_public_key.md#publickeybase64)\>\>

#### Defined in

[src/service/public_key_get.ts:10](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/public_key_get.ts#L10)
