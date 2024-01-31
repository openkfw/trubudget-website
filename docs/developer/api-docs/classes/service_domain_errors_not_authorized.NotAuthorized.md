# NotAuthorized
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/errors/not\_authorized](../modules/service_domain_errors_not_authorized.md) / NotAuthorized

[service/domain/errors/not\_authorized](../modules/service_domain_errors_not_authorized.md).NotAuthorized

## Hierarchy

- [`VError`](http_errors_bad_request.BadRequest.md#verror)

  ↳ **`NotAuthorized`**

## Table of contents

### Constructors

- [constructor](service_domain_errors_not_authorized.NotAuthorized.md#constructor)

### Properties

- [cause](service_domain_errors_not_authorized.NotAuthorized.md#cause)
- [message](service_domain_errors_not_authorized.NotAuthorized.md#message)
- [name](service_domain_errors_not_authorized.NotAuthorized.md#name)
- [stack](service_domain_errors_not_authorized.NotAuthorized.md#stack)
- [VError](service_domain_errors_not_authorized.NotAuthorized.md#verror)
- [prepareStackTrace](service_domain_errors_not_authorized.NotAuthorized.md#preparestacktrace)
- [stackTraceLimit](service_domain_errors_not_authorized.NotAuthorized.md#stacktracelimit)

### Methods

- [captureStackTrace](service_domain_errors_not_authorized.NotAuthorized.md#capturestacktrace)
- [cause](service_domain_errors_not_authorized.NotAuthorized.md#cause-1)
- [errorForEach](service_domain_errors_not_authorized.NotAuthorized.md#errorforeach)
- [errorFromList](service_domain_errors_not_authorized.NotAuthorized.md#errorfromlist)
- [findCauseByName](service_domain_errors_not_authorized.NotAuthorized.md#findcausebyname)
- [fullStack](service_domain_errors_not_authorized.NotAuthorized.md#fullstack)
- [hasCauseWithName](service_domain_errors_not_authorized.NotAuthorized.md#hascausewithname)
- [info](service_domain_errors_not_authorized.NotAuthorized.md#info)

## Constructors

### constructor

• **new NotAuthorized**(`info`, `cause?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Info` |
| `cause?` | `Error` |

#### Overrides

VError.constructor

#### Defined in

[src/service/domain/errors/not_authorized.ts:33](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/errors/not_authorized.ts#L33)

## Properties

### cause

• **cause**: () => `undefined` \| `Error`

#### Type declaration

▸ (): `undefined` \| `Error`

##### Returns

`undefined` \| `Error`

#### Inherited from

VError.cause

#### Defined in

node_modules/@types/verror/index.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

VError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

VError.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

VError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### VError

▪ `Static` **VError**: typeof `VError`

#### Inherited from

VError.VError

#### Defined in

node_modules/@types/verror/index.d.ts:16

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

VError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

VError.stackTraceLimit

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

VError.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### cause

▸ `Static` **cause**(`err`): ``null`` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

``null`` \| `Error`

#### Inherited from

VError.cause

#### Defined in

node_modules/@types/verror/index.d.ts:18

___

### errorForEach

▸ `Static` **errorForEach**(`err`, `func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `func` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

VError.errorForEach

#### Defined in

node_modules/@types/verror/index.d.ts:24

___

### errorFromList

▸ `Static` **errorFromList**\<`T`\>(`errors`): ``null`` \| `T` \| `MultiError`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `T`[] |

#### Returns

``null`` \| `T` \| `MultiError`

#### Inherited from

VError.errorFromList

#### Defined in

node_modules/@types/verror/index.d.ts:23

___

### findCauseByName

▸ `Static` **findCauseByName**(`err`, `name`): ``null`` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `name` | `string` |

#### Returns

``null`` \| `Error`

#### Inherited from

VError.findCauseByName

#### Defined in

node_modules/@types/verror/index.d.ts:21

___

### fullStack

▸ `Static` **fullStack**(`err`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`string`

#### Inherited from

VError.fullStack

#### Defined in

node_modules/@types/verror/index.d.ts:20

___

### hasCauseWithName

▸ `Static` **hasCauseWithName**(`err`, `name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

VError.hasCauseWithName

#### Defined in

node_modules/@types/verror/index.d.ts:22

___

### info

▸ `Static` **info**(`err`): `Info`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`Info`

#### Inherited from

VError.info

#### Defined in

node_modules/@types/verror/index.d.ts:19
