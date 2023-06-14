# service/domain/system\_information/provisioning\_started
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/system\_information/provisioning\_started

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_system_information_provisioning_started.Event.md)

### Variables

- [schema](service_domain_system_information_provisioning_started.md#schema)

### Functions

- [createEvent](service_domain_system_information_provisioning_started.md#createevent)
- [validate](service_domain_system_information_provisioning_started.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/system_information/provisioning_started.ts:17](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_started.ts#L17)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_started.ts:24](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_started.ts#L24)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_started.ts:45](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_started.ts#L45)
