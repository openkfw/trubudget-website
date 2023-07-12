# service/domain/workflow/notification\_created
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/notification\_created

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_notification_created.Event.md)

### Variables

- [schema](service_domain_workflow_notification_created.md#schema)

### Functions

- [createEvent](service_domain_workflow_notification_created.md#createevent)
- [validate](service_domain_workflow_notification_created.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/notification_created.ts:30](https://github.com/openkfw/TruBudget/blob/0804644/api/src/service/domain/workflow/notification_created.ts#L30)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `recipient`, `businessEvent`, `projectId?`, `subprojectId?`, `workflowitemId?`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `recipient` | `string` |
| `businessEvent` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |
| `projectId?` | `string` |
| `subprojectId?` | `string` |
| `workflowitemId?` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/notification_created.ts:44](https://github.com/openkfw/TruBudget/blob/0804644/api/src/service/domain/workflow/notification_created.ts#L44)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_notification_created.Event.md)\>

#### Defined in

[src/service/domain/workflow/notification_created.ts:75](https://github.com/openkfw/TruBudget/blob/0804644/api/src/service/domain/workflow/notification_created.ts#L75)
