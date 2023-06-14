# service/domain/workflow/notification\_marked\_read
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/notification\_marked\_read

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_notification_marked_read.Event.md)

### Variables

- [schema](service_domain_workflow_notification_marked_read.md#schema)

### Functions

- [createEvent](service_domain_workflow_notification_marked_read.md#createevent)
- [validate](service_domain_workflow_notification_marked_read.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/notification_marked_read.ts:23](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/notification_marked_read.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `notificationId`, `recipient`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `notificationId` | `string` |
| `recipient` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Defined in

[src/service/domain/workflow/notification_marked_read.ts:32](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/notification_marked_read.ts#L32)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Defined in

[src/service/domain/workflow/notification_marked_read.ts:56](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/notification_marked_read.ts#L56)
