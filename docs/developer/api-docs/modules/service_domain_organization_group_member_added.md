# service/domain/organization/group\_member\_added
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_member\_added

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_group_member_added.Event.md)

### Variables

- [schema](service_domain_organization_group_member_added.md#schema)

### Functions

- [createEvent](service_domain_organization_group_member_added.md#createevent)
- [validate](service_domain_organization_group_member_added.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/group_member_added.ts:20](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_member_added.ts#L20)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `newMembers`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `newMembers` | `string`[] |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_added.ts:29](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_member_added.ts#L29)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_added.ts:53](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_member_added.ts#L53)
