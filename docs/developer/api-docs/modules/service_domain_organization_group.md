# service/domain/organization/group
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group

## Table of contents

### Interfaces

- [Group](../interfaces/service_domain_organization_group.Group.md)

### Type Aliases

- [Id](service_domain_organization_group.md#id)
- [Member](service_domain_organization_group.md#member)

### Variables

- [idSchema](service_domain_organization_group.md#idschema)
- [memberSchema](service_domain_organization_group.md#memberschema)
- [membersSchema](service_domain_organization_group.md#membersschema)

### Functions

- [permits](service_domain_organization_group.md#permits)
- [validate](service_domain_organization_group.md#validate)

## Type Aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/organization/group.ts:12](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L12)

___

### Member

Ƭ **Member**: [`Identity`](service_domain_organization_identity.md#identity)

#### Defined in

[src/service/domain/organization/group.ts:15](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L15)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`<`string`\>

#### Defined in

[src/service/domain/organization/group.ts:13](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L13)

___

### memberSchema

• `Const` **memberSchema**: `StringSchema`<`string`\>

#### Defined in

[src/service/domain/organization/group.ts:16](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L16)

___

### membersSchema

• `Const` **membersSchema**: `ArraySchema`<`any`[]\>

#### Defined in

[src/service/domain/organization/group.ts:17](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L17)

## Functions

### permits

▸ **permits**(`group`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`Group`](../interfaces/service_domain_organization_group.Group.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/organization/group.ts:47](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L47)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>

#### Defined in

[src/service/domain/organization/group.ts:42](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group.ts#L42)
