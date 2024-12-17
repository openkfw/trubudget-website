# NotFound
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/not\_found](../modules/service_domain_errors_not_found.md) / NotFound

[service/domain/errors/not\_found](../modules/service_domain_errors_not_found.md).NotFound

## Hierarchy

- `Error`

  ↳ **`NotFound`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_not_found.NotFound.md#constructor)

### Properties

- [ctx](service_domain_errors_not_found.NotFound.md#ctx)
- [entityId](service_domain_errors_not_found.NotFound.md#entityid)
- [entityType](service_domain_errors_not_found.NotFound.md#entitytype)
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
| `entityType` | ``"key"`` \| ``"secret"`` \| ``"document"`` \| ``"user"`` \| ``"group"`` \| ``"project"`` \| ``"subproject"`` \| ``"workflowitem"`` \| ``"notification"`` |
| `entityId` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/service/domain/errors/not_found.ts:4](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/errors/not_found.ts#L4)

## Properties

### ctx

• `Private` `Readonly` **ctx**: [`Ctx`](../interfaces/lib_ctx.Ctx.md)

#### Defined in

[src/service/domain/errors/not_found.ts:5](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/errors/not_found.ts#L5)

___

### entityId

• `Private` `Readonly` **entityId**: `string`

#### Defined in

[src/service/domain/errors/not_found.ts:16](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/errors/not_found.ts#L16)

___

### entityType

• `Private` `Readonly` **entityType**: ``"key"`` \| ``"secret"`` \| ``"document"`` \| ``"user"`` \| ``"group"`` \| ``"project"`` \| ``"subproject"`` \| ``"workflowitem"`` \| ``"notification"``

#### Defined in

[src/service/domain/errors/not_found.ts:6](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/errors/not_found.ts#L6)

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
