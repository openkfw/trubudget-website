# default
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/RpcResponse.h](../modules/service_RpcResponse_h.md) / default

[service/RpcResponse.h](../modules/service_RpcResponse_h.md).default

JSON-RPC response.

## Table of contents

### Properties

- [error](service_RpcResponse_h.default.md#error)
- [id](service_RpcResponse_h.default.md#id)
- [result](service_RpcResponse_h.default.md#result)

## Properties

### error

• `Readonly` **error**: ``null`` \| [`Error`](service_RpcResponse_h.Error.md)

Error object, if method invocation failed.

#### Defined in

[src/service/RpcResponse.h.ts:14](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcResponse.h.ts#L14)

___

### id

• `Readonly` **id**: ``null`` \| `string` \| `number`

Identifier of the request associated with the response, if any.

#### Defined in

[src/service/RpcResponse.h.ts:19](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcResponse.h.ts#L19)

___

### result

• `Readonly` **result**: `any`

Result of the invoked method, if successful.

#### Defined in

[src/service/RpcResponse.h.ts:9](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcResponse.h.ts#L9)
