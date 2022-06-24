# service/domain/organization/user\_permission\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_permission\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_user_permission_revoked.Event.md)

### Variables

- [schema](service_domain_organization_user_permission_revoked.md#schema)

### Functions

- [createEvent](service_domain_organization_user_permission_revoked.md#createevent)
- [mutate](service_domain_organization_user_permission_revoked.md#mutate)
- [validate](service_domain_organization_user_permission_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/user_permission_revoked.ts:22](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_revoked.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `userId`, `permission`, `revokee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `userId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/organization/user_permission_revoked.ts:32](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_revoked.ts#L32)

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
| `event` | [`Event`](../interfaces/service_domain_organization_user_permission_revoked.Event.md) |

#### Returns

[`Type`](result.md#type)<`void`\>

#### Defined in

[src/service/domain/organization/user_permission_revoked.ts:73](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_revoked.ts#L73)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_user_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/organization/user_permission_revoked.ts:58](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_revoked.ts#L58)
