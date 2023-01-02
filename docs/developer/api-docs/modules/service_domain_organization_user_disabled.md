# service/domain/organization/user\_disabled
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_disabled

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_user_disabled.Event.md)

### Variables

- [schema](service_domain_organization_user_disabled.md#schema)

### Functions

- [createEvent](service_domain_organization_user_disabled.md#createevent)
- [mutate](service_domain_organization_user_disabled.md#mutate)
- [validate](service_domain_organization_user_disabled.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/user_disabled.ts:27](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/user_disabled.ts#L27)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `user`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_disabled.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `user` | `InitialData` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_disabled.Event.md)\>

#### Defined in

[src/service/domain/organization/user_disabled.ts:35](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/user_disabled.ts#L35)

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
| `event` | [`Event`](../interfaces/service_domain_organization_user_disabled.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/organization/user_disabled.ts:72](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/user_disabled.ts#L72)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_disabled.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_disabled.Event.md)\>

#### Defined in

[src/service/domain/organization/user_disabled.ts:57](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/user_disabled.ts#L57)