# service/password
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/password

## Table of contents

### Type Aliases

- [Digest](service_password.md#digest)
- [Input](service_password.md#input)

### Functions

- [hashPassword](service_password.md#hashpassword)
- [isPasswordMatch](service_password.md#ispasswordmatch)

## Type Aliases

### Digest

Ƭ **Digest**: `string`

#### Defined in

[src/service/password.ts:6](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/password.ts#L6)

___

### Input

Ƭ **Input**: `string`

#### Defined in

[src/service/password.ts:5](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/password.ts#L5)

## Functions

### hashPassword

▸ **hashPassword**(`password`): `Promise`<`string`\>

Create a password hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/service/password.ts:11](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/password.ts#L11)

___

### isPasswordMatch

▸ **isPasswordMatch**(`candidatePassword`, `knownPasswordHash`): `Promise`<`boolean`\>

Validate a given password.

Uses a "constant-time" algorithm to counter timing attacks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `candidatePassword` | `string` |
| `knownPasswordHash` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/service/password.ts:19](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/password.ts#L19)
