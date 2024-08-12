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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/network/node_declined.ts:24](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/network/node_declined.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `address`, `organization`, `declinerAddress`, `declinerOrganization`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

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
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Defined in

[src/service/domain/network/node_declined.ts:36](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/network/node_declined.ts#L36)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_network_node_declined.Event.md)\>

#### Defined in

[src/service/domain/network/node_declined.ts:66](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/network/node_declined.ts#L66)
