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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/network/node_registered.ts:22](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/network/node_registered.ts#L22)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `address`, `organization`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `address` | `string` |
| `organization` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Defined in

[src/service/domain/network/node_registered.ts:32](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/network/node_registered.ts#L32)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_registered.Event.md)\>

#### Defined in

[src/service/domain/network/node_registered.ts:58](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/network/node_registered.ts#L58)
