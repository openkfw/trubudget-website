# service/domain/system\_information/provisioning\_ended
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/system\_information/provisioning\_ended

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_system_information_provisioning_ended.Event.md)

### Variables

- [schema](service_domain_system_information_provisioning_ended.md#schema)

### Functions

- [createEvent](service_domain_system_information_provisioning_ended.md#createevent)
- [validate](service_domain_system_information_provisioning_ended.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/system_information/provisioning_ended.ts:17](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_ended.ts#L17)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_ended.ts:24](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_ended.ts#L24)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_ended.ts:44](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/system_information/provisioning_ended.ts#L44)
