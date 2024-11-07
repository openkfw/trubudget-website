# http\_errors
[Api Code Documentation](../README.md) / [Exports](../modules.md) / http\_errors

## Table of contents

### Functions

- [toHttpError](http_errors.md#tohttperror)

## Functions

### toHttpError

▸ **toHttpError**(`error`, `version?`): `Object`

Converts an error object to an appropriate http error

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `error` | `unknown` | `undefined` |
| `version` | `string` | `"1.0"` |

#### Returns

`Object`

an error object containing appropriate status code and an ErrorBody

| Name | Type |
| :------ | :------ |
| `body` | `ErrorBody` |
| `code` | `number` |

#### Defined in

[src/http_errors.ts:22](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/http_errors.ts#L22)
