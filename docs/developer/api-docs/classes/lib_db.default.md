# default
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [lib/db](../modules/lib_db.md) / default

[lib/db](../modules/lib_db.md).default

## Table of contents

### Constructors

- [constructor](lib_db.default.md#constructor)

### Properties

- [pool](lib_db.default.md#pool)
- [refreshTokenColumnName](lib_db.default.md#refreshtokencolumnname)
- [userIdColumnName](lib_db.default.md#useridcolumnname)
- [validityColumnName](lib_db.default.md#validitycolumnname)

### Methods

- [createTable](lib_db.default.md#createtable)
- [deleteRefreshToken](lib_db.default.md#deleterefreshtoken)
- [disconnect](lib_db.default.md#disconnect)
- [executeQuery](lib_db.default.md#executequery)
- [getDb](lib_db.default.md#getdb)
- [getRefreshToken](lib_db.default.md#getrefreshtoken)
- [healthCheck](lib_db.default.md#healthcheck)
- [initializeConnection](lib_db.default.md#initializeconnection)
- [insertRefreshToken](lib_db.default.md#insertrefreshtoken)
- [liveness](lib_db.default.md#liveness)

## Constructors

### constructor

• **new default**()

## Properties

### pool

• `Private` **pool**: `Knex`\<`any`, `any`[]\>

#### Defined in

[src/lib/db.ts:12](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L12)

___

### refreshTokenColumnName

• `Private` **refreshTokenColumnName**: `string` = `"refresh_token"`

#### Defined in

[src/lib/db.ts:15](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L15)

___

### userIdColumnName

• `Private` **userIdColumnName**: `string` = `"user_id"`

#### Defined in

[src/lib/db.ts:14](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L14)

___

### validityColumnName

• `Private` **validityColumnName**: `string` = `"valid_until"`

#### Defined in

[src/lib/db.ts:16](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L16)

## Methods

### createTable

▸ `Private` **createTable**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/db.ts:149](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L149)

___

### deleteRefreshToken

▸ **deleteRefreshToken**(`refreshToken`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refreshToken` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/db.ts:98](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L98)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/db.ts:44](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L44)

___

### executeQuery

▸ **executeQuery**(`query`, `errorMessage?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | `QueryBuilder`\<`any`, `any`\> | `undefined` |
| `errorMessage` | `string` | `"Failed to execute database operation\n"` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/db.ts:18](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L18)

___

### getDb

▸ **getDb**(): `Promise`\<`Knex`\<`any`, `any`[]\>\>

#### Returns

`Promise`\<`Knex`\<`any`, `any`[]\>\>

#### Defined in

[src/lib/db.ts:29](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L29)

___

### getRefreshToken

▸ **getRefreshToken**(`refreshToken`): `Promise`\<`undefined` \| \{ `userId`: `string` ; `validUntil`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refreshToken` | `string` |

#### Returns

`Promise`\<`undefined` \| \{ `userId`: `string` ; `validUntil`: `number`  }\>

#### Defined in

[src/lib/db.ts:113](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L113)

___

### healthCheck

▸ **healthCheck**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/db.ts:51](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L51)

___

### initializeConnection

▸ `Private` **initializeConnection**(): `Knex`\<`any`, `any`[]\>

#### Returns

`Knex`\<`any`, `any`[]\>

#### Defined in

[src/lib/db.ts:135](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L135)

___

### insertRefreshToken

▸ **insertRefreshToken**(`userId`, `refreshToken`, `validUntil`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `refreshToken` | `string` |
| `validUntil` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/db.ts:79](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L79)

___

### liveness

▸ **liveness**(): `Promise`\<\{ `status`: `number` ; `statusText`: `string`  }\>

#### Returns

`Promise`\<\{ `status`: `number` ; `statusText`: `string`  }\>

#### Defined in

[src/lib/db.ts:68](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/lib/db.ts#L68)
