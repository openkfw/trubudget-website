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

[src/service/domain/network/node_declined.ts:25](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/network/node_declined.ts#L25)

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

[src/service/domain/network/node_declined.ts:37](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/network/node_declined.ts#L37)

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

[src/service/domain/network/node_declined.ts:67](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/network/node_declined.ts#L67)
