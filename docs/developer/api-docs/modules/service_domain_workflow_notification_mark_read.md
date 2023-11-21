# service/domain/workflow/notification\_mark\_read
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/notification\_mark\_read

## Table of contents

### Functions

- [markRead](service_domain_workflow_notification_mark_read.md#markread)

## Functions

### markRead

▸ **markRead**(`ctx`, `user`, `notificationId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `notificationId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/notification_mark_read.ts:18](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/workflow/notification_mark_read.ts#L18)
