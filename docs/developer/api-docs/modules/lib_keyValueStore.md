# lib/keyValueStore
[Api Code Documentation](../README.md) / [Exports](../modules.md) / lib/keyValueStore

## Table of contents

### Functions

- [clearExpiredKeys](lib_keyValueStore.md#clearexpiredkeys)
- [clearValue](lib_keyValueStore.md#clearvalue)
- [getAllValues](lib_keyValueStore.md#getallvalues)
- [getValue](lib_keyValueStore.md#getvalue)
- [saveValue](lib_keyValueStore.md#savevalue)

## Functions

### clearExpiredKeys

▸ **clearExpiredKeys**(): `void`

#### Returns

`void`

#### Defined in

[src/lib/keyValueStore.ts:23](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/keyValueStore.ts#L23)

___

### clearValue

▸ **clearValue**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/lib/keyValueStore.ts:17](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/keyValueStore.ts#L17)

___

### getAllValues

▸ **getAllValues**(): `any`

#### Returns

`any`

#### Defined in

[src/lib/keyValueStore.ts:36](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/keyValueStore.ts#L36)

___

### getValue

▸ **getValue**(`key`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`unknown`

#### Defined in

[src/lib/keyValueStore.ts:15](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/keyValueStore.ts#L15)

___

### saveValue

▸ **saveValue**(`key`, `value`, `exp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Object` |
| `exp` | `number` \| `Date` |

#### Returns

`void`

#### Defined in

[src/lib/keyValueStore.ts:6](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/lib/keyValueStore.ts#L6)
