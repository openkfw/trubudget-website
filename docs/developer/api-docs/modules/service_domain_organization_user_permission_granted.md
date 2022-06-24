# service/domain/organization/user\_permission\_granted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_permission\_granted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_user_permission_granted.Event.md)

### Variables

- [schema](service_domain_organization_user_permission_granted.md#schema)

### Functions

- [createEvent](service_domain_organization_user_permission_granted.md#createevent)
- [mutate](service_domain_organization_user_permission_granted.md#mutate)
- [validate](service_domain_organization_user_permission_granted.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/user_permission_granted.ts:22](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_granted.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `userId`, `permission`, `grantee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `userId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `grantee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/organization/user_permission_granted.ts:32](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_granted.ts#L32)

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
| `event` | [`Event`](../interfaces/service_domain_organization_user_permission_granted.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/organization/user_permission_granted.ts:73](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_granted.ts#L73)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/organization/user_permission_granted.ts:58](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_granted.ts#L58)
