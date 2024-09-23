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

[src/service/domain/organization/group_member_added.ts:22](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/organization/group_member_added.ts#L22)

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

[src/service/domain/organization/group_member_added.ts:32](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/organization/group_member_added.ts#L32)

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

[src/service/domain/organization/group_member_added.ts:58](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/organization/group_member_added.ts#L58)
