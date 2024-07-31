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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/group_permissions_granted.ts:24](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_permissions_granted.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `permission`, `grantee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `grantee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_granted.ts:35](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_permissions_granted.ts#L35)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_granted.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_granted.ts:64](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/organization/group_permissions_granted.ts#L64)
