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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/notification_marked_read.ts:27](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/notification_marked_read.ts#L27)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `notificationId`, `recipient`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `notificationId` | `string` |
| `recipient` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Defined in

[src/service/domain/workflow/notification_marked_read.ts:37](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/notification_marked_read.ts#L37)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_notification_marked_read.Event.md)\>

#### Defined in

[src/service/domain/workflow/notification_marked_read.ts:63](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/notification_marked_read.ts#L63)
