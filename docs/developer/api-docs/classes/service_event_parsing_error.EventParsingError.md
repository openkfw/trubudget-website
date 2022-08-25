# EventParsingError
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/event\_parsing\_error](../modules/service_event_parsing_error.md) / EventParsingError

[service/event_parsing_error](../modules/service_event_parsing_error.md).EventParsingError

## Hierarchy

- `Error`

  ↳ **`EventParsingError`**

## Table of contents

### Constructors

- [constructor](service_event_parsing_error.EventParsingError.md#constructor)

### Properties

- [message](service_event_parsing_error.EventParsingError.md#message)
- [name](service_event_parsing_error.EventParsingError.md#name)
- [stack](service_event_parsing_error.EventParsingError.md#stack)
- [prepareStackTrace](service_event_parsing_error.EventParsingError.md#preparestacktrace)
- [stackTraceLimit](service_event_parsing_error.EventParsingError.md#stacktracelimit)

### Methods

- [captureStackTrace](service_event_parsing_error.EventParsingError.md#capturestacktrace)

## Constructors

### constructor

• **new EventParsingError**(`error`, `event`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` \| `Error` |
| `event` | [`Event`](../interfaces/service_event.Event.md) |

#### Overrides

Error.constructor

#### Defined in

[src/service/event_parsing_error.ts:4](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/event_parsing_error.ts#L4)

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
