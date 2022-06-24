# service/domain/network/node\_declined
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/network/node\_declined

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_network_node_declined.Event.md)

### Variables

- [schema](service_domain_network_node_declined.md#schema)

### Functions

- [createEvent](service_domain_network_node_declined.md#createevent)
- [validate](service_domain_network_node_declined.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/network/node_declined.ts:21](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/network/node_declined.ts#L21)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `address`, `organization`, `declinerAddress`, `declinerOrganization`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `address` | `string` |
| `organization` | `string` |
| `declinerAddress` | `string` |
| `declinerOrganization` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Defined in

[src/service/domain/network/node_declined.ts:32](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/network/node_declined.ts#L32)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Defined in

[src/service/domain/network/node_declined.ts:60](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/network/node_declined.ts#L60)
