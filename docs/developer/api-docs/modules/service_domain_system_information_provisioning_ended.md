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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/system_information/provisioning_ended.ts:19](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/system_information/provisioning_ended.ts#L19)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_ended.ts:27](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/system_information/provisioning_ended.ts#L27)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_system_information_provisioning_ended.Event.md)\>

#### Defined in

[src/service/domain/system_information/provisioning_ended.ts:49](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/system_information/provisioning_ended.ts#L49)
