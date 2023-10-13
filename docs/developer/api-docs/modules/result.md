# result
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / result

## Table of contents

### Type Aliases

- [Type](result.md#type)

### Functions

- [isErr](result.md#iserr)
- [isOk](result.md#isok)
- [map](result.md#map)
- [mapErr](result.md#maperr)
- [unwrap](result.md#unwrap)
- [unwrapErr](result.md#unwraperr)
- [unwrapOr](result.md#unwrapor)

## Type Aliases

### Type

Ƭ **Type**<`T`\>: `Result`<`T`\>

Type Result that can either contain a given type T or an Error

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/result.ts:11](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L11)

## Functions

### isErr

▸ **isErr**<`T`\>(`result`): result is Error

Checks if the given result is an error

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an object wrapped in a Result that might be an error |

#### Returns

result is Error

a boolean indicating if the given result is an error or not

#### Defined in

[src/result.ts:19](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L19)

___

### isOk

▸ **isOk**<`T`\>(`result`): result is T

Checks if the given result is Ok

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an object wrapped in a Result that might be an error |

#### Returns

result is T

a boolean indicating if the given result is ok or not

#### Defined in

[src/result.ts:29](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L29)

___

### map

▸ **map**<`T`, `U`\>(`result`, `fn`): `Result`<`U`\>

Maps the result to an error or applies the desired function on the result

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an element wrapped in a Result |
| `fn` | `MapFn`<`T`, `U`\> | a callback function that should be applied to the result |

#### Returns

`Result`<`U`\>

the result of the function or an error

#### Defined in

[src/result.ts:44](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L44)

___

### mapErr

▸ **mapErr**<`T`\>(`result`, `fn`): `Result`<`T`\>

Applies a function to an error or returns the result

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an element wrapped in a Result |
| `fn` | `MapFn`<`Error`, `Error`\> | a callback function that should be applied to the result |

#### Returns

`Result`<`T`\>

the result of the function if the element is an error or the given element otherwise

#### Defined in

[src/result.ts:59](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L59)

___

### unwrap

▸ **unwrap**<`T`\>(`result`, `message?`): `T` \| `never`

Unwraps the result or throws an error

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an element wrapped in a Result |
| `message?` | `string` | an optional message to be used when throwing the error |

#### Returns

`T` \| `never`

the unwrapped result

#### Defined in

[src/result.ts:74](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L74)

___

### unwrapErr

▸ **unwrapErr**<`T`\>(`result`, `message?`): `Error` \| `never`

Unwraps the error or throws an error

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an element wrapped in a Result |
| `message?` | `string` | an optional message to be used when throwing the error |

#### Returns

`Error` \| `never`

the unwrapped error if the given element was indeed an error

#### Defined in

[src/result.ts:93](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L93)

___

### unwrapOr

▸ **unwrapOr**<`T`, `U`\>(`result`, `defaultValue`): `T` \| `U`

Unwraps the result or returns a default value

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Result`<`T`\> | an element wrapped in a Result |
| `defaultValue` | `U` | default value |

#### Returns

`T` \| `U`

the unwrapped result or the default value in case the given element is an error

#### Defined in

[src/result.ts:108](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/result.ts#L108)
