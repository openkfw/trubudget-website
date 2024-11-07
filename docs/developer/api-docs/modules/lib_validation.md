# lib/validation
[Api Code Documentation](../README.md) / [Exports](../modules.md) / lib/validation

## Table of contents

### Functions

- [asyncValue](lib_validation.md#asyncvalue)
- [findBadKeysInObject](lib_validation.md#findbadkeysinobject)
- [isDate](lib_validation.md#isdate)
- [isNonemptyString](lib_validation.md#isnonemptystring)
- [isNumber](lib_validation.md#isnumber)
- [isObject](lib_validation.md#isobject)
- [isUserOrUndefined](lib_validation.md#isuserorundefined)
- [value](lib_validation.md#value)

## Functions

### asyncValue

▸ **asyncValue**(`multichain`, `name`, `val`, `isValid`, `defaultValue?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | `any` |
| `name` | `any` |
| `val` | `any` |
| `isValid` | `any` |
| `defaultValue?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/validation.ts:62](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L62)

___

### findBadKeysInObject

▸ **findBadKeysInObject**(`expectedKeys`, `isGood`, `candidate`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedKeys` | `string`[] |
| `isGood` | (`val`: `unknown`) => `boolean` |
| `candidate` | `any` |

#### Returns

`string`[]

#### Defined in

[src/lib/validation.ts:35](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L35)

___

### isDate

▸ **isDate**(`date`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

`Date`

#### Defined in

[src/lib/validation.ts:42](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L42)

___

### isNonemptyString

▸ **isNonemptyString**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/lib/validation.ts:8](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L8)

___

### isNumber

▸ **isNumber**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`boolean`

#### Defined in

[src/lib/validation.ts:48](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L48)

___

### isObject

▸ **isObject**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`boolean`

#### Defined in

[src/lib/validation.ts:72](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L72)

___

### isUserOrUndefined

▸ **isUserOrUndefined**(`conn`, `ctx`, `issuer`, `input`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `input` | `any` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/validation.ts:12](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L12)

___

### value

▸ **value**(`name`, `val`, `isValid`, `defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `val` | `any` |
| `isValid` | `any` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Defined in

[src/lib/validation.ts:53](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/validation.ts#L53)
