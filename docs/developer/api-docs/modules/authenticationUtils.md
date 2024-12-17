# authenticationUtils
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / authenticationUtils

## Table of contents

### Variables

- [accessTokenExpirationInHoursWithrefreshToken](authenticationUtils.md#accesstokenexpirationinhourswithrefreshtoken)
- [refreshTokenExpirationInHours](authenticationUtils.md#refreshtokenexpirationinhours)

### Functions

- [createRefreshJWTToken](authenticationUtils.md#createrefreshjwttoken)

## Variables

### accessTokenExpirationInHoursWithrefreshToken

• `Const` **accessTokenExpirationInHoursWithrefreshToken**: `number` = `config.accessTokenExpiration`

#### Defined in

[src/authenticationUtils.ts:6](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authenticationUtils.ts#L6)

___

### refreshTokenExpirationInHours

• `Const` **refreshTokenExpirationInHours**: `number` = `config.refreshTokenExpiration`

#### Defined in

[src/authenticationUtils.ts:5](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authenticationUtils.ts#L5)

## Functions

### createRefreshJWTToken

▸ **createRefreshJWTToken**(`payload`, `key`, `algorithm?`): `string`

Creates a refresh JWT Token

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `payload` | `Object` | `undefined` |
| `key` | `string` | `undefined` |
| `algorithm` | ``"HS256"`` \| ``"RS256"`` | `"HS256"` |

#### Returns

`string`

a string containing the encoded JWT token

#### Defined in

[src/authenticationUtils.ts:14](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authenticationUtils.ts#L14)
