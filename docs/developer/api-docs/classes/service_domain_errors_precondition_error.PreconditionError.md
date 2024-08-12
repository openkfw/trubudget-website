# PreconditionError
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/precondition\_error](../modules/service_domain_errors_precondition_error.md) / PreconditionError

[service/domain/errors/precondition\_error](../modules/service_domain_errors_precondition_error.md).PreconditionError

## Hierarchy

- `Error`

  ↳ **`PreconditionError`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_precondition_error.PreconditionError.md#constructor)

### Properties

- [businessEvent](service_domain_errors_precondition_error.PreconditionError.md#businessevent)
- [ctx](service_domain_errors_precondition_error.PreconditionError.md#ctx)
- [message](service_domain_errors_precondition_error.PreconditionError.md#message)
- [name](service_domain_errors_precondition_error.PreconditionError.md#name)
- [stack](service_domain_errors_precondition_error.PreconditionError.md#stack)
- [prepareStackTrace](service_domain_errors_precondition_error.PreconditionError.md#preparestacktrace)
- [stackTraceLimit](service_domain_errors_precondition_error.PreconditionError.md#stacktracelimit)

### Methods

- [captureStackTrace](service_domain_errors_precondition_error.PreconditionError.md#capturestacktrace)

## Constructors

### constructor

• **new PreconditionError**(`ctx`, `businessEvent`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `businessEvent` | [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent) |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/service/domain/errors/precondition_error.ts:5](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/errors/precondition_error.ts#L5)

## Properties

### businessEvent

• `Private` `Readonly` **businessEvent**: [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent)

#### Defined in

[src/service/domain/errors/precondition_error.ts:7](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/errors/precondition_error.ts#L7)

___

### ctx

• `Private` `Readonly` **ctx**: [`Ctx`](../interfaces/lib_ctx.Ctx.md)

#### Defined in

[src/service/domain/errors/precondition_error.ts:6](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/errors/precondition_error.ts#L6)

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
