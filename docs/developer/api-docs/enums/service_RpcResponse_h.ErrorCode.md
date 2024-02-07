# ErrorCode
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/RpcResponse.h](../modules/service_RpcResponse_h.md) / ErrorCode

[service/RpcResponse.h](../modules/service_RpcResponse_h.md).ErrorCode

JSON-RPC 2.0 predefined error codes.

## Table of contents

### Enumeration Members

- [InternalError](service_RpcResponse_h.ErrorCode.md#internalerror)
- [InvalidParams](service_RpcResponse_h.ErrorCode.md#invalidparams)
- [InvalidRequest](service_RpcResponse_h.ErrorCode.md#invalidrequest)
- [MethodNotFound](service_RpcResponse_h.ErrorCode.md#methodnotfound)
- [ParseError](service_RpcResponse_h.ErrorCode.md#parseerror)

## Enumeration Members

### InternalError

• **InternalError** = ``-32603``

Internal JSON-RPC error.

#### Defined in

[src/service/RpcResponse.h.ts:61](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/RpcResponse.h.ts#L61)

___

### InvalidParams

• **InvalidParams** = ``-32602``

The method arguments are invalid.

#### Defined in

[src/service/RpcResponse.h.ts:56](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/RpcResponse.h.ts#L56)

___

### InvalidRequest

• **InvalidRequest** = ``-32600``

The request body is an invalid JSON-RPC request.

#### Defined in

[src/service/RpcResponse.h.ts:46](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/RpcResponse.h.ts#L46)

___

### MethodNotFound

• **MethodNotFound** = ``-32601``

The invoked method does not exist.

#### Defined in

[src/service/RpcResponse.h.ts:51](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/RpcResponse.h.ts#L51)

___

### ParseError

• **ParseError** = ``-32700``

The request body is an invalid JSON document.

#### Defined in

[src/service/RpcResponse.h.ts:66](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/RpcResponse.h.ts#L66)
