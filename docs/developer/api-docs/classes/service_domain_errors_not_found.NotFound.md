# NotFound
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/not\_found](../modules/service_domain_errors_not_found.md) / NotFound

[service/domain/errors/not_found](../modules/service_domain_errors_not_found.md).NotFound

## Hierarchy

- `Error`

  ↳ **`NotFound`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_not_found.NotFound.md#constructor)

### Properties

- [message](service_domain_errors_not_found.NotFound.md#message)
- [name](service_domain_errors_not_found.NotFound.md#name)
- [stack](service_domain_errors_not_found.NotFound.md#stack)
- [prepareStackTrace](service_domain_errors_not_found.NotFound.md#preparestacktrace)
- [stackTraceLimit](service_domain_errors_not_found.NotFound.md#stacktracelimit)

### Methods

- [captureStackTrace](service_domain_errors_not_found.NotFound.md#capturestacktrace)

## Constructors

### constructor

• **new NotFound**(`ctx`, `entityType`, `entityId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `entityType` | ``"project"`` \| ``"subproject"`` \| ``"workflowitem"`` \| ``"group"`` \| ``"user"`` \| ``"document"`` \| ``"notification"`` \| ``"key"`` \| ``"secret"`` |
| `entityId` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/service/domain/errors/not_found.ts:4](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/errors/not_found.ts#L4)

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
