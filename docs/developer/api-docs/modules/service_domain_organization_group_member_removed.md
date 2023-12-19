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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/group_member_removed.ts:22](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/group_member_removed.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `members`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `members` | `string`[] |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_removed.ts:32](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/group_member_removed.ts#L32)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_removed.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_removed.ts:58](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/group_member_removed.ts#L58)
