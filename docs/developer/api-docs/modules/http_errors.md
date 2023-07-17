# http\_errors
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / http\_errors

## Table of contents

### Functions

- [toHttpError](http_errors.md#tohttperror)

## Functions

### toHttpError

▸ **toHttpError**(`error`): `Object`

Converts an error object to an appropriate http error

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

`Object`

an error object containing appropriate status code and an ErrorBody

| Name | Type |
| :------ | :------ |
| `body` | `ErrorBody` |
| `code` | `number` |

#### Defined in

[src/http_errors.ts:21](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/http_errors.ts#L21)
