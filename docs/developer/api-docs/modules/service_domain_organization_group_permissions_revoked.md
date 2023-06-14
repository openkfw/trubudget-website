# service/domain/organization/group\_permissions\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_permissions\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)

### Variables

- [schema](service_domain_organization_group_permissions_revoked.md#schema)

### Functions

- [createEvent](service_domain_organization_group_permissions_revoked.md#createevent)
- [validate](service_domain_organization_group_permissions_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/organization/group_permissions_revoked.ts:22](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_permissions_revoked.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `permission`, `revokee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_revoked.ts:32](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_permissions_revoked.ts#L32)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_revoked.ts:59](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/group_permissions_revoked.ts#L59)
