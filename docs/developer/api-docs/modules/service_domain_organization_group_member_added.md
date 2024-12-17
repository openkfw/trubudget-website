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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/group_member_added.ts:24](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/group_member_added.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `newMembers`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `newMembers` | `string`[] |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_added.ts:34](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/group_member_added.ts#L34)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_member_added.Event.md)\>

#### Defined in

[src/service/domain/organization/group_member_added.ts:60](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/organization/group_member_added.ts#L60)
