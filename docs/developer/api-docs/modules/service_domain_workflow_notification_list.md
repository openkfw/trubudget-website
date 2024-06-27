# service/domain/workflow/notification\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/notification\_list

## Table of contents

### Functions

- [getUserNotifications](service_domain_workflow_notification_list.md#getusernotifications)

## Functions

### getUserNotifications

▸ **getUserNotifications**(`ctx`, `user`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Notification`](../interfaces/service_domain_workflow_notification.Notification.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Notification`](../interfaces/service_domain_workflow_notification.Notification.md)[]\>\>

#### Defined in

[src/service/domain/workflow/notification_list.ts:14](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/notification_list.ts#L14)
