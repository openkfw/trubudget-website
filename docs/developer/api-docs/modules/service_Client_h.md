# service/Client.h
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/Client.h

## Table of contents

### References

- [RpcMultichainClient](service_Client_h.md#rpcmultichainclient)

### Interfaces

- [BlockInfo](../interfaces/service_Client_h.BlockInfo.md)
- [BlockListItem](../interfaces/service_Client_h.BlockListItem.md)
- [CreateStreamOptions](../interfaces/service_Client_h.CreateStreamOptions.md)
- [LogEntry](../interfaces/service_Client_h.LogEntry.md)
- [MultichainClient](../interfaces/service_Client_h.MultichainClient.md)
- [PeerInfo](../interfaces/service_Client_h.PeerInfo.md)
- [Resource](../interfaces/service_Client_h.Resource.md)
- [Stream](../interfaces/service_Client_h.Stream.md)
- [StreamItem](../interfaces/service_Client_h.StreamItem.md)
- [StreamItemPair](../interfaces/service_Client_h.StreamItemPair.md)

### Type Aliases

- [StreamKey](service_Client_h.md#streamkey)
- [StreamKind](service_Client_h.md#streamkind)
- [StreamName](service_Client_h.md#streamname)
- [StreamTxId](service_Client_h.md#streamtxid)
- [TxId](service_Client_h.md#txid)

## References

### RpcMultichainClient

Re-exports [RpcMultichainClient](../classes/service_Client.RpcMultichainClient.md)

## Type Aliases

### StreamKey

Ƭ **StreamKey**: `string`[]

#### Defined in

[src/service/Client.h.ts:105](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/Client.h.ts#L105)

___

### StreamKind

Ƭ **StreamKind**: ``"global"`` \| ``"organization"`` \| ``"users"`` \| ``"project"`` \| ``"subproject"`` \| ``"notifications"`` \| ``"public_keys"`` \| ``"documents"`` \| ``"nodes"`` \| ``"groups"`` \| ``"network_log"`` \| ``"system_information"``

#### Defined in

[src/service/Client.h.ts:8](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/Client.h.ts#L8)

___

### StreamName

Ƭ **StreamName**: `string`

#### Defined in

[src/service/Client.h.ts:29](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/Client.h.ts#L29)

___

### StreamTxId

Ƭ **StreamTxId**: [`TxId`](service_Client_h.md#txid)

#### Defined in

[src/service/Client.h.ts:30](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/Client.h.ts#L30)

___

### TxId

Ƭ **TxId**: `string`

#### Defined in

[src/service/Client.h.ts:27](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/Client.h.ts#L27)
