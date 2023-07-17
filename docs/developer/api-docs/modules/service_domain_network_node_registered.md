# service/domain/network/node\_registered
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/network/node\_registered

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_network_node_registered.Event.md)

### Variables

- [schema](service_domain_network_node_registered.md#schema)

### Functions

- [createEvent](service_domain_network_node_registered.md#createevent)
- [validate](service_domain_network_node_registered.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/network/node_registered.ts:19](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/network/node_registered.ts#L19)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `address`, `organization`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `address` | `string` |
| `organization` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Defined in

[src/service/domain/network/node_registered.ts:28](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/network/node_registered.ts#L28)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Defined in

[src/service/domain/network/node_registered.ts:52](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/network/node_registered.ts#L52)
