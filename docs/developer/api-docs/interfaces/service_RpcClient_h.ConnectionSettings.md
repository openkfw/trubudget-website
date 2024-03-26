# ConnectionSettings
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/RpcClient.h](../modules/service_RpcClient_h.md) / ConnectionSettings

[service/RpcClient.h](../modules/service_RpcClient_h.md).ConnectionSettings

Connection settings.

## Table of contents

### Properties

- [host](service_RpcClient_h.ConnectionSettings.md#host)
- [password](service_RpcClient_h.ConnectionSettings.md#password)
- [port](service_RpcClient_h.ConnectionSettings.md#port)
- [protocol](service_RpcClient_h.ConnectionSettings.md#protocol)
- [username](service_RpcClient_h.ConnectionSettings.md#username)

## Properties

### host

• `Optional` `Readonly` **host**: `string`

IP address or hostname of the node to connect to.

**`Default`**

```ts
'localhost'
```

#### Defined in

[src/service/RpcClient.h.ts:18](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/RpcClient.h.ts#L18)

___

### password

• `Readonly` **password**: `string`

Password to use for authentication.

#### Defined in

[src/service/RpcClient.h.ts:35](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/RpcClient.h.ts#L35)

___

### port

• `Optional` `Readonly` **port**: `number`

Port number of the node to connect to.

**`Default`**

```ts
8570
```

#### Defined in

[src/service/RpcClient.h.ts:24](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/RpcClient.h.ts#L24)

___

### protocol

• `Optional` `Readonly` **protocol**: ``"http"`` \| ``"https"``

Protocol to use for the connection.

**`Default`**

```ts
'http'
```

#### Defined in

[src/service/RpcClient.h.ts:12](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/RpcClient.h.ts#L12)

___

### username

• `Optional` `Readonly` **username**: `string`

Username to use for authentication.

**`Default`**

```ts
'multichainrpc'
```

#### Defined in

[src/service/RpcClient.h.ts:30](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/RpcClient.h.ts#L30)
