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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/network/nodes_logged.ts:16](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/network/nodes_logged.ts#L16)

## Functions

### createEvent

▸ **createEvent**(`_type`, `date`, `peers`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | ``"peerinfo_saved"`` |
| `date` | `string` |
| `peers` | `unknown`[] |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Defined in

[src/service/domain/network/nodes_logged.ts:22](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/network/nodes_logged.ts#L22)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_nodes_logged.Event.md)\>

#### Defined in

[src/service/domain/network/nodes_logged.ts:41](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/network/nodes_logged.ts#L41)
