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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/system_information/provisioning_started.ts:19](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/system_information/provisioning_started.ts#L19)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_started.ts:27](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/system_information/provisioning_started.ts#L27)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_started.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_started.ts:50](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/system_information/provisioning_started.ts#L50)
