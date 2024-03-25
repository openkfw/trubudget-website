# InvalidCommand
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/invalid\_command](../modules/service_domain_errors_invalid_command.md) / InvalidCommand

[service/domain/errors/invalid\_command](../modules/service_domain_errors_invalid_command.md).InvalidCommand

## Hierarchy

- `Error`

  ↳ **`InvalidCommand`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_invalid_command.InvalidCommand.md#constructor)

### Properties

- [businessEvent](service_domain_errors_invalid_command.InvalidCommand.md#businessevent)
- [ctx](service_domain_errors_invalid_command.InvalidCommand.md#ctx)
- [message](service_domain_errors_invalid_command.InvalidCommand.md#message)
- [name](service_domain_errors_invalid_command.InvalidCommand.md#name)
- [stack](service_domain_errors_invalid_command.InvalidCommand.md#stack)
- [validationErrors](service_domain_errors_invalid_command.InvalidCommand.md#validationerrors)
- [prepareStackTrace](service_domain_errors_invalid_command.InvalidCommand.md#preparestacktrace)
- [stackTraceLimit](service_domain_errors_invalid_command.InvalidCommand.md#stacktracelimit)

### Methods

- [captureStackTrace](service_domain_errors_invalid_command.InvalidCommand.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidCommand**(`ctx`, `businessEvent`, `validationErrors`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `businessEvent` | [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent) |
| `validationErrors` | `Error`[] |

#### Overrides

Error.constructor

#### Defined in

[src/service/domain/errors/invalid_command.ts:5](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/errors/invalid_command.ts#L5)

## Properties

### businessEvent

• `Private` `Readonly` **businessEvent**: [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent)

#### Defined in

[src/service/domain/errors/invalid_command.ts:7](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/errors/invalid_command.ts#L7)

___

### ctx

• `Private` `Readonly` **ctx**: [`Ctx`](../interfaces/lib_ctx.Ctx.md)

#### Defined in

[src/service/domain/errors/invalid_command.ts:6](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/errors/invalid_command.ts#L6)

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

### validationErrors

• `Private` `Readonly` **validationErrors**: `Error`[]

#### Defined in

[src/service/domain/errors/invalid_command.ts:8](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/errors/invalid_command.ts#L8)

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
