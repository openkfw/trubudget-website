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

[src/service/domain/network/node_registered.ts:21](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/network/node_registered.ts#L21)

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

[src/service/domain/network/node_registered.ts:31](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/network/node_registered.ts#L31)

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

[src/service/domain/network/node_registered.ts:57](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/network/node_registered.ts#L57)
