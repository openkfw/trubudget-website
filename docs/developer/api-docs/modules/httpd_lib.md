# httpd/lib
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/lib

## Table of contents

### Interfaces

- [AuthenticatedRequest](../interfaces/httpd_lib.AuthenticatedRequest.md)
- [ErrorResponse](../interfaces/httpd_lib.ErrorResponse.md)
- [SuccessResponse](../interfaces/httpd_lib.SuccessResponse.md)

### Type Aliases

- [HttpResponse](httpd_lib.md#httpresponse)
- [HttpStatusCode](httpd_lib.md#httpstatuscode)

### Functions

- [throwParseError](httpd_lib.md#throwparseerror)
- [throwParseErrorIfUndefined](httpd_lib.md#throwparseerrorifundefined)

## Type Aliases

### HttpResponse

Ƭ **HttpResponse**: [[`HttpStatusCode`](httpd_lib.md#httpstatuscode), [`SuccessResponse`](../interfaces/httpd_lib.SuccessResponse.md) \| [`ErrorResponse`](../interfaces/httpd_lib.ErrorResponse.md)]

#### Defined in

[src/httpd/lib.ts:25](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/httpd/lib.ts#L25)

___

### HttpStatusCode

Ƭ **HttpStatusCode**: `number`

#### Defined in

[src/httpd/lib.ts:24](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/httpd/lib.ts#L24)

## Functions

### throwParseError

▸ **throwParseError**(`badKeys`, `message?`): [`TruBudgetError`](../classes/error.TruBudgetError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `badKeys` | `any` |
| `message?` | `any` |

#### Returns

[`TruBudgetError`](../classes/error.TruBudgetError.md)

#### Defined in

[src/httpd/lib.ts:27](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/httpd/lib.ts#L27)

___

### throwParseErrorIfUndefined

▸ **throwParseErrorIfUndefined**(`obj`, `path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `path` | `any` |

#### Returns

`void`

#### Defined in

[src/httpd/lib.ts:31](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/httpd/lib.ts#L31)
