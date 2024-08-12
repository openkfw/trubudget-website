# AlreadyExists
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/already\_exists](../modules/service_domain_errors_already_exists.md) / AlreadyExists

[service/domain/errors/already\_exists](../modules/service_domain_errors_already_exists.md).AlreadyExists

**`Param`**

Identity which already exists.

**`Param`**

Optional custom error message.

## Hierarchy

- `Error`

  ↳ **`AlreadyExists`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_already_exists.AlreadyExists.md#constructor)

### Properties

- [businessEvent](service_domain_errors_already_exists.AlreadyExists.md#businessevent)
- [ctx](service_domain_errors_already_exists.AlreadyExists.md#ctx)
- [message](service_domain_errors_already_exists.AlreadyExists.md#message)
- [name](service_domain_errors_already_exists.AlreadyExists.md#name)
- [stack](service_domain_errors_already_exists.AlreadyExists.md#stack)
- [prepareStackTrace](service_domain_errors_already_exists.AlreadyExists.md#preparestacktrace)
- [stackTraceLimit](service_domain_errors_already_exists.AlreadyExists.md#stacktracelimit)

### Methods

- [captureStackTrace](service_domain_errors_already_exists.AlreadyExists.md#capturestacktrace)

## Constructors

### constructor

• **new AlreadyExists**(`ctx`, `businessEvent`, `id`, `message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `businessEvent` | [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent) |
| `id` | `string` |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/service/domain/errors/already_exists.ts:9](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/errors/already_exists.ts#L9)

## Properties

### businessEvent

• `Private` `Readonly` **businessEvent**: [`BusinessEvent`](../modules/service_domain_business_event.md#businessevent)

#### Defined in

[src/service/domain/errors/already_exists.ts:11](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/errors/already_exists.ts#L11)

___

### ctx

• `Private` `Readonly` **ctx**: [`Ctx`](../interfaces/lib_ctx.Ctx.md)

#### Defined in

[src/service/domain/errors/already_exists.ts:10](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/errors/already_exists.ts#L10)

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
