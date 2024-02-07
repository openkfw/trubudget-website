# lib/symmetricCrypto
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / lib/symmetricCrypto

## Table of contents

### Functions

- [decrypt](lib_symmetricCrypto.md#decrypt)
- [encrypt](lib_symmetricCrypto.md#encrypt)

## Functions

### decrypt

▸ **decrypt**(`organizationSecret`, `hexEncodedCiphertext`): [`Type`](result.md#type)\<`string`\>

Decrypts a hex-encoded ciphertext and returns the resulting string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `organizationSecret` | `string` |
| `hexEncodedCiphertext` | `string` |

#### Returns

[`Type`](result.md#type)\<`string`\>

#### Defined in

[src/lib/symmetricCrypto.ts:13](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/lib/symmetricCrypto.ts#L13)

___

### encrypt

▸ **encrypt**(`organizationSecret`, `plaintext`): `string`

Encrypts a string and returns resulting hex-encoded ciphertext.

#### Parameters

| Name | Type |
| :------ | :------ |
| `organizationSecret` | `string` |
| `plaintext` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/symmetricCrypto.ts:33](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/lib/symmetricCrypto.ts#L33)
