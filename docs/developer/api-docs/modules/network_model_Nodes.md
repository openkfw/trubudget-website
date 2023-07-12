# network/model/Nodes
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/model/Nodes

## Table of contents

### Interfaces

- [AugmentedWalletAddress](../interfaces/network_model_Nodes.AugmentedWalletAddress.md)
- [NodeInfo](../interfaces/network_model_Nodes.NodeInfo.md)
- [PermissionInfo](../interfaces/network_model_Nodes.PermissionInfo.md)

### Type Aliases

- [NetworkPermission](network_model_Nodes.md#networkpermission)
- [Organization](network_model_Nodes.md#organization)
- [WalletAddress](network_model_Nodes.md#walletaddress)

### Functions

- [active](network_model_Nodes.md#active)
- [get](network_model_Nodes.md#get)
- [getNetworkPermissions](network_model_Nodes.md#getnetworkpermissions)
- [getNode](network_model_Nodes.md#getnode)
- [grant](network_model_Nodes.md#grant)
- [publish](network_model_Nodes.md#publish)
- [revoke](network_model_Nodes.md#revoke)

## Type Aliases

### NetworkPermission

Ƭ **NetworkPermission**: ``"connect"`` \| ``"send"`` \| ``"receive"`` \| ``"issue"`` \| ``"create"`` \| ``"mine"`` \| ``"activate"`` \| ``"admin"``

#### Defined in

[src/network/model/Nodes.ts:14](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L14)

___

### Organization

Ƭ **Organization**: `string`

#### Defined in

[src/network/model/Nodes.ts:13](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L13)

___

### WalletAddress

Ƭ **WalletAddress**: `string`

#### Defined in

[src/network/model/Nodes.ts:12](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L12)

## Functions

### active

▸ **active**(`multichain`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/network/model/Nodes.ts:235](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L235)

___

### get

▸ **get**(`multichain`): `Promise`<[`NodeInfo`](../interfaces/network_model_Nodes.NodeInfo.md)[]\>

Gets a list with all registered nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) | the multichain on which the nodes were registered |

#### Returns

`Promise`<[`NodeInfo`](../interfaces/network_model_Nodes.NodeInfo.md)[]\>

#### Defined in

[src/network/model/Nodes.ts:141](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L141)

___

### getNetworkPermissions

▸ **getNetworkPermissions**(`multichain`, `address`, `organizationsByAddress?`): `Promise`<[`PermissionInfo`](../interfaces/network_model_Nodes.PermissionInfo.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `address` | `string` |
| `organizationsByAddress?` | `Map`<`string`, `string`\> |

#### Returns

`Promise`<[`PermissionInfo`](../interfaces/network_model_Nodes.PermissionInfo.md)[]\>

#### Defined in

[src/network/model/Nodes.ts:306](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L306)

___

### getNode

▸ **getNode**(`multichain`, `address`, `organization?`): `Promise`<[`NodeInfo`](../interfaces/network_model_Nodes.NodeInfo.md) \| `undefined`\>

Gets a node registered on the multichain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) | the multichain on which the node is registered |
| `address` | `string` | the address of the node |
| `organization?` | `string` | if given, also checks that the organization of the node matches the address |

#### Returns

`Promise`<[`NodeInfo`](../interfaces/network_model_Nodes.NodeInfo.md) \| `undefined`\>

#### Defined in

[src/network/model/Nodes.ts:219](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L219)

___

### grant

▸ **grant**(`multichain`, `issuer`, `target`, `permissions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `issuer` | `string` |
| `target` | `string` |
| `permissions` | [`NetworkPermission`](network_model_Nodes.md#networkpermission)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/network/model/Nodes.ts:44](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L44)

___

### publish

▸ **publish**(`multichain`, `address`, `args`): `Promise`<[`Event`](../interfaces/service_event.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `address` | `string` |
| `args` | `Object` |
| `args.createdBy` | `string` |
| `args.creationTimestamp` | `Date` |
| `args.data` | `any` |
| `args.dataVersion` | `number` |
| `args.intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`<[`Event`](../interfaces/service_event.Event.md)\>

#### Defined in

[src/network/model/Nodes.ts:62](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L62)

___

### revoke

▸ **revoke**(`multichain`, `issuer`, `target`, `permissions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `issuer` | `string` |
| `target` | `string` |
| `permissions` | [`NetworkPermission`](network_model_Nodes.md#networkpermission)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/network/model/Nodes.ts:53](https://github.com/openkfw/TruBudget/blob/0804644/api/src/network/model/Nodes.ts#L53)
