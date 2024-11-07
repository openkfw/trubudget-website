# service/domain/organization/user\_enabled
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_enabled

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_user_enabled.Event.md)

### Variables

- [schema](service_domain_organization_user_enabled.md#schema)

### Functions

- [createEvent](service_domain_organization_user_enabled.md#createevent)
- [mutate](service_domain_organization_user_enabled.md#mutate)
- [validate](service_domain_organization_user_enabled.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/user_enabled.ts:31](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_enabled.ts#L31)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `user`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_enabled.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `user` | `InitialData` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_enabled.Event.md)\>

#### Defined in

[src/service/domain/organization/user_enabled.ts:40](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_enabled.ts#L40)

___

### mutate

▸ **mutate**(`user`, `event`): [`Type`](result.md#type)\<`void`\>

Applies the event to the given user, or returns an error.

When an error is returned (or thrown), any already applied modifications are
discarded.

This function is not expected to validate its changes; instead, the modified user
is automatically validated when obtained using
`user_eventsourcing.ts`:`newUserFromEvent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md) |
| `event` | [`Event`](../interfaces/service_domain_organization_user_enabled.Event.md) |

#### Returns

[`Type`](result.md#type)\<`void`\>

#### Defined in

[src/service/domain/organization/user_enabled.ts:79](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_enabled.ts#L79)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_enabled.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_enabled.Event.md)\>

#### Defined in

[src/service/domain/organization/user_enabled.ts:64](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_enabled.ts#L64)
