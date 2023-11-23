# organization/organization
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / organization/organization

## Table of contents

### Functions

- [ensureOrganizationStream](organization_organization.md#ensureorganizationstream)
- [getOrganizationAddress](organization_organization.md#getorganizationaddress)
- [getPrivateKey](organization_organization.md#getprivatekey)
- [organizationExists](organization_organization.md#organizationexists)
- [publishPrivateKey](organization_organization.md#publishprivatekey)

## Functions

### ensureOrganizationStream

▸ **ensureOrganizationStream**(`multichain`, `organization`, `organizationVaultSecret`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `organization` | `string` |
| `organizationVaultSecret` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/organization/organization.ts:31](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/organization/organization.ts#L31)

___

### getOrganizationAddress

▸ **getOrganizationAddress**(`multichain`, `organization`): `Promise`\<[`WalletAddress`](network_model_Nodes.md#walletaddress) \| `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `organization` | `string` |

#### Returns

`Promise`\<[`WalletAddress`](network_model_Nodes.md#walletaddress) \| `undefined`\>

#### Defined in

[src/organization/organization.ts:199](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/organization/organization.ts#L199)

___

### getPrivateKey

▸ **getPrivateKey**(`multichain`, `organization`, `organizationVaultSecret`): `Promise`\<[`Type`](result.md#type)\<`Base64String`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `organization` | `string` |
| `organizationVaultSecret` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`Base64String`\>\>

#### Defined in

[src/organization/organization.ts:65](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/organization/organization.ts#L65)

___

### organizationExists

▸ **organizationExists**(`multichain`, `organization`): `Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `organization` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Defined in

[src/organization/organization.ts:188](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/organization/organization.ts#L188)

___

### publishPrivateKey

▸ **publishPrivateKey**(`multichain`, `organization`, `privateKey`, `organizationVaultSecret`): `Promise`\<[`Type`](result.md#type)\<`PrivateKeyItem`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `organization` | `string` |
| `privateKey` | `string` |
| `organizationVaultSecret` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`PrivateKeyItem`\>\>

#### Defined in

[src/organization/organization.ts:92](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/organization/organization.ts#L92)
