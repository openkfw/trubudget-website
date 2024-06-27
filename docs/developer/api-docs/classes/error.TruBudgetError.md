# TruBudgetError
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [error](../modules/error.md) / TruBudgetError

[error](../modules/error.md).TruBudgetError

Class representing custom TruBudget errors

## Hierarchy

- `Error`

  ↳ **`TruBudgetError`**

## Table of contents

### Constructors

- [constructor](error.TruBudgetError.md#constructor)

### Properties

- [address](error.TruBudgetError.md#address)
- [badKeys](error.TruBudgetError.md#badkeys)
- [contentType](error.TruBudgetError.md#contenttype)
- [event](error.TruBudgetError.md#event)
- [filePath](error.TruBudgetError.md#filepath)
- [kind](error.TruBudgetError.md#kind)
- [message](error.TruBudgetError.md#message)
- [name](error.TruBudgetError.md#name)
- [projectId](error.TruBudgetError.md#projectid)
- [stack](error.TruBudgetError.md#stack)
- [subprojectId](error.TruBudgetError.md#subprojectid)
- [targetId](error.TruBudgetError.md#targetid)
- [userId](error.TruBudgetError.md#userid)
- [what](error.TruBudgetError.md#what)
- [prepareStackTrace](error.TruBudgetError.md#preparestacktrace)
- [stackTraceLimit](error.TruBudgetError.md#stacktracelimit)

### Methods

- [captureStackTrace](error.TruBudgetError.md#capturestacktrace)

## Constructors

### constructor

• **new TruBudgetError**(`err`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`TruBudgetErrorType`](../modules/error.md#trubudgeterrortype) |

#### Overrides

Error.constructor

#### Defined in

[src/error.ts:135](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L135)

## Properties

### address

• **address**: `undefined` = `undefined`

#### Defined in

[src/error.ts:121](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L121)

___

### badKeys

• **badKeys**: `undefined` = `undefined`

#### Defined in

[src/error.ts:113](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L113)

___

### contentType

• **contentType**: `undefined` = `undefined`

#### Defined in

[src/error.ts:131](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L131)

___

### event

• **event**: `undefined` = `undefined`

#### Defined in

[src/error.ts:129](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L129)

___

### filePath

• **filePath**: `undefined` = `undefined`

#### Defined in

[src/error.ts:117](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L117)

___

### kind

• **kind**: `undefined` = `undefined`

#### Defined in

[src/error.ts:133](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L133)

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

### projectId

• **projectId**: `undefined` = `undefined`

#### Defined in

[src/error.ts:127](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L127)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### subprojectId

• **subprojectId**: `undefined` = `undefined`

#### Defined in

[src/error.ts:125](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L125)

___

### targetId

• **targetId**: `undefined` = `undefined`

#### Defined in

[src/error.ts:123](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L123)

___

### userId

• **userId**: `undefined` = `undefined`

#### Defined in

[src/error.ts:119](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L119)

___

### what

• **what**: `undefined` = `undefined`

#### Defined in

[src/error.ts:115](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/error.ts#L115)

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
