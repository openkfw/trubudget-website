# service/notification\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/notification\_list

## Table of contents

### Functions

- [getNotificationsForUser](service_notification_list.md#getnotificationsforuser)

## Functions

### getNotificationsForUser

▸ **getNotificationsForUser**(`conn`, `ctx`, `user`): `Promise`\<[`Type`](result.md#type)\<[`Notification`](../interfaces/service_domain_workflow_notification.Notification.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Notification`](../interfaces/service_domain_workflow_notification.Notification.md)[]\>\>

#### Defined in

[src/service/notification_list.ts:11](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/notification_list.ts#L11)
