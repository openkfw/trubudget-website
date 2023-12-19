# service/domain/workflow/notification\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/notification\_eventsourcing

## Table of contents

### Functions

- [sourceNotifications](service_domain_workflow_notification_eventsourcing.md#sourcenotifications)

## Functions

### sourceNotifications

▸ **sourceNotifications**(`ctx`, `events`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | [`EventSourcingError`](../classes/service_domain_errors_event_sourcing_error.EventSourcingError.md)[] |
| `notificationsById` | `NotificationsById` |

#### Defined in

[src/service/domain/workflow/notification_eventsourcing.ts:15](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/notification_eventsourcing.ts#L15)
