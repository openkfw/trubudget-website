# service/domain/organization/group\_permissions\_granted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_permissions\_granted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_group_permissions_granted.Event.md)

### Variables

- [schema](service_domain_organization_group_permissions_granted.md#schema)

### Functions

- [createEvent](service_domain_organization_group_permissions_granted.md#createevent)
- [validate](service_domain_organization_group_permissions_granted.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/group_permissions_granted.ts:22](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/group_permissions_granted.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `permission`, `grantee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `grantee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_granted.ts:32](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/group_permissions_granted.ts#L32)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_granted.ts:59](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/group_permissions_granted.ts#L59)
