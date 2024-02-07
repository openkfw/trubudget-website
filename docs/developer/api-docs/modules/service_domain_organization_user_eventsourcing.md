# service/domain/organization/user\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_eventsourcing

## Table of contents

### Functions

- [newUserFromEvent](service_domain_organization_user_eventsourcing.md#newuserfromevent)
- [sourceUserRecords](service_domain_organization_user_eventsourcing.md#sourceuserrecords)

## Functions

### newUserFromEvent

▸ **newUserFromEvent**(`ctx`, `user`, `event`): [`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>

Returns a new user with the given event applied, or an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>

#### Defined in

[src/service/domain/organization/user_eventsourcing.ts:145](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/organization/user_eventsourcing.ts#L145)

___

### sourceUserRecords

▸ **sourceUserRecords**(`ctx`, `events`, `origin?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `origin?` | `Map`\<`string`, [`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |
| `users` | [`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)[] |

#### Defined in

[src/service/domain/organization/user_eventsourcing.ts:17](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/organization/user_eventsourcing.ts#L17)
