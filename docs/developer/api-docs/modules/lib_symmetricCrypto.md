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

[src/lib/symmetricCrypto.ts:15](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/lib/symmetricCrypto.ts#L15)

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

[src/lib/symmetricCrypto.ts:35](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/lib/symmetricCrypto.ts#L35)
