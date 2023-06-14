# service/domain/network/nodes\_logged
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/network/nodes\_logged

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_network_nodes_logged.Event.md)

### Variables

- [schema](service_domain_network_nodes_logged.md#schema)

### Functions

- [createEvent](service_domain_network_nodes_logged.md#createevent)
- [validate](service_domain_network_nodes_logged.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/network/nodes_logged.ts:15](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/network/nodes_logged.ts#L15)

## Functions

### createEvent

▸ **createEvent**(`_type`, `date`, `peers`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | ``"peerinfo_saved"`` |
| `date` | `string` |
| `peers` | `unknown`[] |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Defined in

[src/service/domain/network/nodes_logged.ts:21](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/network/nodes_logged.ts#L21)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Defined in

[src/service/domain/network/nodes_logged.ts:40](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/network/nodes_logged.ts#L40)
