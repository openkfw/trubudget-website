# InvalidEvent
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/invalid\_event](../modules/service_domain_errors_invalid_event.md) / InvalidEvent

[service/domain/errors/invalid_event](../modules/service_domain_errors_invalid_event.md).InvalidEvent

## Hierarchy

- `Error`

  ↳ **`InvalidEvent`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_invalid_event.InvalidEvent.md#constructor)

### Properties

- [message](service_domain_errors_invalid_event.InvalidEvent.md#message)
- [name](service_domain_errors_invalid_event.InvalidEvent.md#name)
- [stack](service_domain_errors_invalid_event.InvalidEvent.md#stack)
- [prepareStackTrace](service_domain_errors_invalid_event.InvalidEvent.md#preparestacktrace)
- [stackTraceLimit](service_domain_errors_invalid_event.InvalidEvent.md#stacktracelimit)

### Methods

- [captureStackTrace](service_domain_errors_invalid_event.InvalidEvent.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidEvent**(`ctx`, `businessEvent`, `validationErrors`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `businessEvent` | [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent) |
| `validationErrors` | `Error`[] |

#### Overrides

Error.constructor

#### Defined in

[src/service/domain/errors/invalid_event.ts:5](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/errors/invalid_event.ts#L5)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

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

node_modules/@types/node/globals.d.ts:4
