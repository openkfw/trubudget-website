# service/domain/organization/user\_password\_changed
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_password\_changed

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_user_password_changed.Event.md)

### Variables

- [schema](service_domain_organization_user_password_changed.md#schema)

### Functions

- [createEvent](service_domain_organization_user_password_changed.md#createevent)
- [mutate](service_domain_organization_user_password_changed.md#mutate)
- [validate](service_domain_organization_user_password_changed.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/organization/user_password_changed.ts:29](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_password_changed.ts#L29)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `user`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_password_changed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `user` | `InitialData` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_password_changed.Event.md)\>

#### Defined in

[src/service/domain/organization/user_password_changed.ts:37](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_password_changed.ts#L37)

___

### mutate

▸ **mutate**(`user`, `event`): [`Type`](result.md#type)<`void`\>

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
| `event` | [`Event`](../interfaces/service_domain_organization_user_password_changed.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/organization/user_password_changed.ts:74](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_password_changed.ts#L74)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_password_changed.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_password_changed.Event.md)\>

#### Defined in

[src/service/domain/organization/user_password_changed.ts:59](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/user_password_changed.ts#L59)
