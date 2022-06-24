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

### Type aliases

- [StreamKey](service_Client_h.md#streamkey)
- [StreamKind](service_Client_h.md#streamkind)
- [StreamName](service_Client_h.md#streamname)
- [StreamTxId](service_Client_h.md#streamtxid)
- [TxId](service_Client_h.md#txid)

## References

### RpcMultichainClient

Re-exports [RpcMultichainClient](../classes/service_Client.RpcMultichainClient.md)

## Type aliases

### StreamKey

Ƭ **StreamKey**: `string`[]

#### Defined in

[src/service/Client.h.ts:103](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client.h.ts#L103)

___

### StreamKind

Ƭ **StreamKind**: ``"global"`` \| ``"organization"`` \| ``"users"`` \| ``"project"`` \| ``"subproject"`` \| ``"notifications"`` \| ``"nodes"`` \| ``"groups"`` \| ``"network_log"`` \| ``"system_information"``

#### Defined in

[src/service/Client.h.ts:8](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client.h.ts#L8)

___

### StreamName

Ƭ **StreamName**: `string`

#### Defined in

[src/service/Client.h.ts:27](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client.h.ts#L27)

___

### StreamTxId

Ƭ **StreamTxId**: [`TxId`](service_Client_h.md#txid)

#### Defined in

[src/service/Client.h.ts:28](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client.h.ts#L28)

___

### TxId

Ƭ **TxId**: `string`

#### Defined in

[src/service/Client.h.ts:25](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/Client.h.ts#L25)
