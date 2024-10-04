# service/notification\_mark\_read
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/notification\_mark\_read

## Table of contents

### Functions

- [markRead](service_notification_mark_read.md#markread)

## Functions

### markRead

▸ **markRead**(`conn`, `ctx`, `serviceUser`, `notificationIds`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `notificationIds` | `string`[] |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/notification_mark_read.ts:16](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/notification_mark_read.ts#L16)
