# service/domain/organization/group\_member\_removed
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_member\_removed

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_group_member_removed.Event.md)

### Variables

- [schema](service_domain_organization_group_member_removed.md#schema)

### Functions

- [createEvent](service_domain_organization_group_member_removed.md#createevent)
- [validate](service_domain_organization_group_member_removed.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/organization/group_member_removed.ts:20](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/group_member_removed.ts#L20)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `members`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `members` | `string`[] |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_removed.ts:29](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/group_member_removed.ts#L29)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_removed.ts:53](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/group_member_removed.ts#L53)
