# service/domain/document/secret\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/document/secret\_get

## Table of contents

### Functions

- [getAllSecrets](service_domain_document_secret_get.md#getallsecrets)
- [getSecret](service_domain_document_secret_get.md#getsecret)
- [secretAlreadyExists](service_domain_document_secret_get.md#secretalreadyexists)

## Functions

### getAllSecrets

▸ **getAllSecrets**(`ctx`, `repository`): `Promise`<[`Type`](result.md#type)<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)[]\>\>

#### Defined in

[src/service/domain/document/secret_get.ts:14](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/secret_get.ts#L14)

___

### getSecret

▸ **getSecret**(`ctx`, `docId`, `organization`, `repository`): `Promise`<[`Type`](result.md#type)<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `docId` | `string` |
| `organization` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`SecretPublished`](../interfaces/service_domain_document_document_shared.SecretPublished.md)\>\>

#### Defined in

[src/service/domain/document/secret_get.ts:27](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/secret_get.ts#L27)

___

### secretAlreadyExists

▸ **secretAlreadyExists**(`ctx`, `docId`, `organization`, `repository`): `Promise`<[`Type`](result.md#type)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `docId` | `string` |
| `organization` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<`boolean`\>\>

#### Defined in

[src/service/domain/document/secret_get.ts:49](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/document/secret_get.ts#L49)
