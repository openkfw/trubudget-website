# default
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/RpcError](../modules/service_RpcError.md) / default

[service/RpcError](../modules/service_RpcError.md).default

Error thrown by an [[RpcClientInstance]], if parsing the body of the response failed.

## Hierarchy

- `Error`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](service_RpcError.default.md#constructor)

### Properties

- [body](service_RpcError.default.md#body)
- [headers](service_RpcError.default.md#headers)
- [message](service_RpcError.default.md#message)
- [name](service_RpcError.default.md#name)
- [stack](service_RpcError.default.md#stack)
- [status](service_RpcError.default.md#status)
- [statusText](service_RpcError.default.md#statustext)
- [prepareStackTrace](service_RpcError.default.md#preparestacktrace)
- [stackTraceLimit](service_RpcError.default.md#stacktracelimit)

### Methods

- [captureStackTrace](service_RpcError.default.md#capturestacktrace)

## Constructors

### constructor

• **new default**(`status`, `statusText`, `headers`, `body`)

Creates an instance of [[RpcError]].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | `number` | Status code of the HTTP response. |
| `statusText` | `string` | Status text of the HTTP response. |
| `headers` | `object` | Headers of the HTTP response. |
| `body` | `string` | Body of the HTTP response. |

#### Overrides

Error.constructor

#### Defined in

[src/service/RpcError.ts:12](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcError.ts#L12)

## Properties

### body

• `Readonly` **body**: `string`

Body of the HTTP response.

#### Defined in

[src/service/RpcError.ts:16](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcError.ts#L16)

___

### headers

• `Readonly` **headers**: `object`

Headers of the HTTP response.

#### Defined in

[src/service/RpcError.ts:15](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcError.ts#L15)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### status

• `Readonly` **status**: `number`

Status code of the HTTP response.

#### Defined in

[src/service/RpcError.ts:13](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcError.ts#L13)

___

### statusText

• `Readonly` **statusText**: `string`

Status text of the HTTP response.

#### Defined in

[src/service/RpcError.ts:14](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/RpcError.ts#L14)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:29

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:20
