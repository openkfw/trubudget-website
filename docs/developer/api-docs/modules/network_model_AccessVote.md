# network/model/AccessVote
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/model/AccessVote

## Table of contents

### Type Aliases

- [T](network_model_AccessVote.md#t)

### Variables

- [adminPermissions](network_model_AccessVote.md#adminpermissions)
- [basicPermissions](network_model_AccessVote.md#basicpermissions)
- [exclusiveAdminPermissions](network_model_AccessVote.md#exclusiveadminpermissions)

### Functions

- [isValid](network_model_AccessVote.md#isvalid)

## Type Aliases

### T

Ƭ **T**: ``"none"`` \| ``"basic"`` \| ``"admin"``

#### Defined in

[src/network/model/AccessVote.ts:3](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/network/model/AccessVote.ts#L3)

## Variables

### adminPermissions

• `Const` **adminPermissions**: [`NetworkPermission`](network_model_Nodes.md#networkpermission)[]

#### Defined in

[src/network/model/AccessVote.ts:14](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/network/model/AccessVote.ts#L14)

___

### basicPermissions

• `Const` **basicPermissions**: [`NetworkPermission`](network_model_Nodes.md#networkpermission)[]

#### Defined in

[src/network/model/AccessVote.ts:6](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/network/model/AccessVote.ts#L6)

___

### exclusiveAdminPermissions

• `Const` **exclusiveAdminPermissions**: [`NetworkPermission`](network_model_Nodes.md#networkpermission)[]

#### Defined in

[src/network/model/AccessVote.ts:13](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/network/model/AccessVote.ts#L13)

## Functions

### isValid

▸ **isValid**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

[src/network/model/AccessVote.ts:19](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/network/model/AccessVote.ts#L19)
