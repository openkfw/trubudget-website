# service/domain/organization/user\_record
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_record

## Table of contents

### Interfaces

- [UserRecord](../interfaces/service_domain_organization_user_record.UserRecord.md)

### Type Aliases

- [Id](service_domain_organization_user_record.md#id)

### Variables

- [idSchema](service_domain_organization_user_record.md#idschema)

### Functions

- [permits](service_domain_organization_user_record.md#permits)
- [validate](service_domain_organization_user_record.md#validate)

## Type Aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/organization/user_record.ts:12](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_record.ts#L12)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`<`string`\>

#### Defined in

[src/service/domain/organization/user_record.ts:13](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_record.ts#L13)

## Functions

### permits

▸ **permits**(`user`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/organization/user_record.ts:46](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_record.ts#L46)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>

#### Defined in

[src/service/domain/organization/user_record.ts:41](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_record.ts#L41)
