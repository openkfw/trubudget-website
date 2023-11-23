# AuthenticatedRequest
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [httpd/lib](../modules/httpd_lib.md) / AuthenticatedRequest

[httpd/lib](../modules/httpd_lib.md).AuthenticatedRequest

## Hierarchy

- `FastifyRequest`

  ↳ **`AuthenticatedRequest`**

## Table of contents

### Properties

- [body](httpd_lib.AuthenticatedRequest.md#body)
- [connection](httpd_lib.AuthenticatedRequest.md#connection)
- [context](httpd_lib.AuthenticatedRequest.md#context)
- [cookies](httpd_lib.AuthenticatedRequest.md#cookies)
- [headers](httpd_lib.AuthenticatedRequest.md#headers)
- [hostname](httpd_lib.AuthenticatedRequest.md#hostname)
- [id](httpd_lib.AuthenticatedRequest.md#id)
- [ip](httpd_lib.AuthenticatedRequest.md#ip)
- [ips](httpd_lib.AuthenticatedRequest.md#ips)
- [is404](httpd_lib.AuthenticatedRequest.md#is404)
- [log](httpd_lib.AuthenticatedRequest.md#log)
- [method](httpd_lib.AuthenticatedRequest.md#method)
- [originalUrl](httpd_lib.AuthenticatedRequest.md#originalurl)
- [params](httpd_lib.AuthenticatedRequest.md#params)
- [protocol](httpd_lib.AuthenticatedRequest.md#protocol)
- [query](httpd_lib.AuthenticatedRequest.md#query)
- [raw](httpd_lib.AuthenticatedRequest.md#raw)
- [req](httpd_lib.AuthenticatedRequest.md#req)
- [routeConfig](httpd_lib.AuthenticatedRequest.md#routeconfig)
- [routeOptions](httpd_lib.AuthenticatedRequest.md#routeoptions)
- [routeSchema](httpd_lib.AuthenticatedRequest.md#routeschema)
- [routerMethod](httpd_lib.AuthenticatedRequest.md#routermethod)
- [routerPath](httpd_lib.AuthenticatedRequest.md#routerpath)
- [server](httpd_lib.AuthenticatedRequest.md#server)
- [socket](httpd_lib.AuthenticatedRequest.md#socket)
- [url](httpd_lib.AuthenticatedRequest.md#url)
- [user](httpd_lib.AuthenticatedRequest.md#user)
- [validationError](httpd_lib.AuthenticatedRequest.md#validationerror)

### Methods

- [compileValidationSchema](httpd_lib.AuthenticatedRequest.md#compilevalidationschema)
- [getValidationFunction](httpd_lib.AuthenticatedRequest.md#getvalidationfunction)
- [jwtDecode](httpd_lib.AuthenticatedRequest.md#jwtdecode)
- [jwtVerify](httpd_lib.AuthenticatedRequest.md#jwtverify)
- [signCookie](httpd_lib.AuthenticatedRequest.md#signcookie)
- [unsignCookie](httpd_lib.AuthenticatedRequest.md#unsigncookie)
- [validateInput](httpd_lib.AuthenticatedRequest.md#validateinput)

## Properties

### body

• **body**: `unknown`

#### Inherited from

FastifyRequest.body

#### Defined in

node_modules/fastify/types/request.d.ts:62

___

### connection

• `Readonly` **connection**: `Socket`

#### Inherited from

FastifyRequest.connection

#### Defined in

node_modules/fastify/types/request.d.ts:95

___

### context

• **context**: `FastifyRequestContext`\<`unknown`\>

#### Inherited from

FastifyRequest.context

#### Defined in

node_modules/fastify/types/request.d.ts:63

___

### cookies

• **cookies**: `Object`

Request cookies

#### Index signature

▪ [cookieName: `string`]: `string` \| `undefined`

#### Inherited from

FastifyRequest.cookies

#### Defined in

node_modules/@fastify/cookie/types/plugin.d.ts:30

___

### headers

• **headers**: `IncomingHttpHeaders`

#### Inherited from

FastifyRequest.headers

#### Defined in

node_modules/fastify/types/request.d.ts:59

___

### hostname

• `Readonly` **hostname**: `string`

#### Inherited from

FastifyRequest.hostname

#### Defined in

node_modules/fastify/types/request.d.ts:76

___

### id

• **id**: `string`

#### Inherited from

FastifyRequest.id

#### Defined in

node_modules/fastify/types/request.d.ts:55

___

### ip

• `Readonly` **ip**: `string`

#### Inherited from

FastifyRequest.ip

#### Defined in

node_modules/fastify/types/request.d.ts:74

___

### ips

• `Optional` `Readonly` **ips**: `string`[]

#### Inherited from

FastifyRequest.ips

#### Defined in

node_modules/fastify/types/request.d.ts:75

___

### is404

• `Readonly` **is404**: `boolean`

#### Inherited from

FastifyRequest.is404

#### Defined in

node_modules/fastify/types/request.d.ts:84

___

### log

• **log**: `FastifyBaseLogger`

#### Inherited from

FastifyRequest.log

#### Defined in

node_modules/fastify/types/request.d.ts:60

___

### method

• `Readonly` **method**: `string`

#### Inherited from

FastifyRequest.method

#### Defined in

node_modules/fastify/types/request.d.ts:80

___

### originalUrl

• `Readonly` **originalUrl**: `string`

#### Inherited from

FastifyRequest.originalUrl

#### Defined in

node_modules/fastify/types/request.d.ts:78

___

### params

• **params**: `unknown`

#### Inherited from

FastifyRequest.params

#### Defined in

node_modules/fastify/types/request.d.ts:56

___

### protocol

• `Readonly` **protocol**: ``"http"`` \| ``"https"``

#### Inherited from

FastifyRequest.protocol

#### Defined in

node_modules/fastify/types/request.d.ts:79

___

### query

• **query**: `unknown`

#### Inherited from

FastifyRequest.query

#### Defined in

node_modules/fastify/types/request.d.ts:58

___

### raw

• **raw**: `IncomingMessage`

#### Inherited from

FastifyRequest.raw

#### Defined in

node_modules/fastify/types/request.d.ts:57

___

### req

• `Readonly` **req**: `IncomingMessage`

**`Deprecated`**

Use `raw` property

#### Inherited from

FastifyRequest.req

#### Defined in

node_modules/fastify/types/request.d.ts:73

___

### routeConfig

• **routeConfig**: `FastifyContextConfig` & `FastifyRouteConfig`

#### Inherited from

FastifyRequest.routeConfig

#### Defined in

node_modules/fastify/types/request.d.ts:64

___

### routeOptions

• `Readonly` **routeOptions**: `Readonly`\<`RequestRouteOptions`\<`unknown`, `FastifySchema`\>\>

#### Inherited from

FastifyRequest.routeOptions

#### Defined in

node_modules/fastify/types/request.d.ts:83

___

### routeSchema

• **routeSchema**: `FastifySchema`

#### Inherited from

FastifyRequest.routeSchema

#### Defined in

node_modules/fastify/types/request.d.ts:65

___

### routerMethod

• `Readonly` **routerMethod**: `string`

#### Inherited from

FastifyRequest.routerMethod

#### Defined in

node_modules/fastify/types/request.d.ts:82

___

### routerPath

• `Readonly` **routerPath**: `string`

#### Inherited from

FastifyRequest.routerPath

#### Defined in

node_modules/fastify/types/request.d.ts:81

___

### server

• **server**: `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyRequest.server

#### Defined in

node_modules/fastify/types/request.d.ts:61

___

### socket

• `Readonly` **socket**: `Socket`

#### Inherited from

FastifyRequest.socket

#### Defined in

node_modules/fastify/types/request.d.ts:85

___

### url

• `Readonly` **url**: `string`

#### Inherited from

FastifyRequest.url

#### Defined in

node_modules/fastify/types/request.d.ts:77

___

### user

• **user**: [`AuthToken`](authz_token.AuthToken.md)

#### Overrides

FastifyRequest.user

#### Defined in

[src/httpd/lib.ts:7](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/httpd/lib.ts#L7)

___

### validationError

• `Optional` **validationError**: `Error` & \{ `validation`: `any` ; `validationContext`: `string`  }

in order for this to be used the user should ensure they have set the attachValidation option.

#### Inherited from

FastifyRequest.validationError

#### Defined in

node_modules/fastify/types/request.d.ts:68

## Methods

### compileValidationSchema

▸ **compileValidationSchema**(`schema`, `httpPart?`): `ValidationFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `Object` |
| `httpPart?` | `HTTPRequestPart` |

#### Returns

`ValidationFunction`

#### Inherited from

FastifyRequest.compileValidationSchema

#### Defined in

node_modules/fastify/types/request.d.ts:89

___

### getValidationFunction

▸ **getValidationFunction**(`httpPart`): `ValidationFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpPart` | `HTTPRequestPart` |

#### Returns

`ValidationFunction`

#### Inherited from

FastifyRequest.getValidationFunction

#### Defined in

node_modules/fastify/types/request.d.ts:87

▸ **getValidationFunction**(`schema`): `ValidationFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `Object` |

#### Returns

`ValidationFunction`

#### Inherited from

FastifyRequest.getValidationFunction

#### Defined in

node_modules/fastify/types/request.d.ts:88

___

### jwtDecode

▸ **jwtDecode**\<`Decoded`\>(`options?`): `Promise`\<`Decoded`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `DecodePayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FastifyJwtDecodeOptions` |

#### Returns

`Promise`\<`Decoded`\>

#### Inherited from

FastifyRequest.jwtDecode

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:34

▸ **jwtDecode**\<`Decoded`\>(`callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `DecodePayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `DecodeCallback`\<`Decoded`\> |

#### Returns

`void`

#### Inherited from

FastifyRequest.jwtDecode

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:35

▸ **jwtDecode**\<`Decoded`\>(`options`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `DecodePayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FastifyJwtDecodeOptions` |
| `callback` | `DecodeCallback`\<`Decoded`\> |

#### Returns

`void`

#### Inherited from

FastifyRequest.jwtDecode

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:36

___

### jwtVerify

▸ **jwtVerify**\<`Decoded`\>(`options?`): `Promise`\<`Decoded`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `VerifyPayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FastifyJwtVerifyOptions` |

#### Returns

`Promise`\<`Decoded`\>

#### Inherited from

FastifyRequest.jwtVerify

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:29

▸ **jwtVerify**\<`Decoded`\>(`callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `VerifyPayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `VerifierCallback` |

#### Returns

`void`

#### Inherited from

FastifyRequest.jwtVerify

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:30

▸ **jwtVerify**\<`Decoded`\>(`options`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `VerifyPayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FastifyJwtVerifyOptions` |
| `callback` | `VerifierCallback` |

#### Returns

`void`

#### Inherited from

FastifyRequest.jwtVerify

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:31

▸ **jwtVerify**\<`Decoded`\>(`options?`): `Promise`\<`Decoded`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `VerifyPayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`VerifyOptions`\> |

#### Returns

`Promise`\<`Decoded`\>

#### Inherited from

FastifyRequest.jwtVerify

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:32

▸ **jwtVerify**\<`Decoded`\>(`options`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Decoded` | extends `VerifyPayloadType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<`VerifyOptions`\> |
| `callback` | `VerifierCallback` |

#### Returns

`void`

#### Inherited from

FastifyRequest.jwtVerify

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:33

___

### signCookie

▸ **signCookie**(`value`): `string`

Signs the specified cookie using the secret/signer provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | cookie value |

#### Returns

`string`

#### Inherited from

FastifyRequest.signCookie

#### Defined in

node_modules/@fastify/cookie/types/plugin.d.ts:45

___

### unsignCookie

▸ **unsignCookie**(`value`): `UnsignResult`

Unsigns the specified cookie using the secret/signer provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Cookie value |

#### Returns

`UnsignResult`

#### Inherited from

FastifyRequest.unsignCookie

#### Defined in

node_modules/@fastify/cookie/types/plugin.d.ts:51

___

### validateInput

▸ **validateInput**(`input`, `schema`, `httpPart?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `schema` | `Object` |
| `httpPart?` | `HTTPRequestPart` |

#### Returns

`boolean`

#### Inherited from

FastifyRequest.validateInput

#### Defined in

node_modules/fastify/types/request.d.ts:90

▸ **validateInput**(`input`, `httpPart?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `httpPart?` | `HTTPRequestPart` |

#### Returns

`boolean`

#### Inherited from

FastifyRequest.validateInput

#### Defined in

node_modules/fastify/types/request.d.ts:91
