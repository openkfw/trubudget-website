# AuthenticatedRequest
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [httpd/lib](../modules/httpd_lib.md) / AuthenticatedRequest

[httpd/lib](../modules/httpd_lib.md).AuthenticatedRequest

## Hierarchy

- `FastifyRequest`

  ↳ **`AuthenticatedRequest`**

## Table of contents

### Properties

- [body](httpd_lib.AuthenticatedRequest.md#body)
- [cleanRequestFiles](httpd_lib.AuthenticatedRequest.md#cleanrequestfiles)
- [connection](httpd_lib.AuthenticatedRequest.md#connection)
- [context](httpd_lib.AuthenticatedRequest.md#context)
- [cookies](httpd_lib.AuthenticatedRequest.md#cookies)
- [file](httpd_lib.AuthenticatedRequest.md#file)
- [files](httpd_lib.AuthenticatedRequest.md#files)
- [headers](httpd_lib.AuthenticatedRequest.md#headers)
- [hostname](httpd_lib.AuthenticatedRequest.md#hostname)
- [id](httpd_lib.AuthenticatedRequest.md#id)
- [ip](httpd_lib.AuthenticatedRequest.md#ip)
- [ips](httpd_lib.AuthenticatedRequest.md#ips)
- [is404](httpd_lib.AuthenticatedRequest.md#is404)
- [isMultipart](httpd_lib.AuthenticatedRequest.md#ismultipart)
- [log](httpd_lib.AuthenticatedRequest.md#log)
- [method](httpd_lib.AuthenticatedRequest.md#method)
- [originalUrl](httpd_lib.AuthenticatedRequest.md#originalurl)
- [params](httpd_lib.AuthenticatedRequest.md#params)
- [parts](httpd_lib.AuthenticatedRequest.md#parts)
- [protocol](httpd_lib.AuthenticatedRequest.md#protocol)
- [query](httpd_lib.AuthenticatedRequest.md#query)
- [raw](httpd_lib.AuthenticatedRequest.md#raw)
- [req](httpd_lib.AuthenticatedRequest.md#req)
- [routeConfig](httpd_lib.AuthenticatedRequest.md#routeconfig)
- [routeOptions](httpd_lib.AuthenticatedRequest.md#routeoptions)
- [routeSchema](httpd_lib.AuthenticatedRequest.md#routeschema)
- [routerMethod](httpd_lib.AuthenticatedRequest.md#routermethod)
- [routerPath](httpd_lib.AuthenticatedRequest.md#routerpath)
- [saveRequestFiles](httpd_lib.AuthenticatedRequest.md#saverequestfiles)
- [savedRequestFiles](httpd_lib.AuthenticatedRequest.md#savedrequestfiles)
- [server](httpd_lib.AuthenticatedRequest.md#server)
- [socket](httpd_lib.AuthenticatedRequest.md#socket)
- [tmpUploads](httpd_lib.AuthenticatedRequest.md#tmpuploads)
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

node_modules/fastify/types/request.d.ts:64

___

### cleanRequestFiles

• **cleanRequestFiles**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Inherited from

FastifyRequest.cleanRequestFiles

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:27

___

### connection

• `Readonly` **connection**: `Socket`

#### Inherited from

FastifyRequest.connection

#### Defined in

node_modules/fastify/types/request.d.ts:97

___

### context

• **context**: `FastifyRequestContext`\<`unknown`\>

#### Inherited from

FastifyRequest.context

#### Defined in

node_modules/fastify/types/request.d.ts:65

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

### file

• **file**: (`options?`: `Omit`\<`BusboyConfig`, ``"headers"``\> \| `FastifyMultipartBaseOptions`) => `Promise`\<`undefined` \| `MultipartFile`\>

#### Type declaration

▸ (`options?`): `Promise`\<`undefined` \| `MultipartFile`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Omit`\<`BusboyConfig`, ``"headers"``\> \| `FastifyMultipartBaseOptions` |

##### Returns

`Promise`\<`undefined` \| `MultipartFile`\>

#### Inherited from

FastifyRequest.file

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:16

___

### files

• **files**: (`options?`: `Omit`\<`BusboyConfig`, ``"headers"``\> \| `FastifyMultipartBaseOptions`) => `AsyncIterableIterator`\<`MultipartFile`\>

#### Type declaration

▸ (`options?`): `AsyncIterableIterator`\<`MultipartFile`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Omit`\<`BusboyConfig`, ``"headers"``\> \| `FastifyMultipartBaseOptions` |

##### Returns

`AsyncIterableIterator`\<`MultipartFile`\>

#### Inherited from

FastifyRequest.files

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:19

___

### headers

• **headers**: `IncomingHttpHeaders`

#### Inherited from

FastifyRequest.headers

#### Defined in

node_modules/fastify/types/request.d.ts:61

___

### hostname

• `Readonly` **hostname**: `string`

#### Inherited from

FastifyRequest.hostname

#### Defined in

node_modules/fastify/types/request.d.ts:78

___

### id

• **id**: `string`

#### Inherited from

FastifyRequest.id

#### Defined in

node_modules/fastify/types/request.d.ts:57

___

### ip

• `Readonly` **ip**: `string`

#### Inherited from

FastifyRequest.ip

#### Defined in

node_modules/fastify/types/request.d.ts:76

___

### ips

• `Optional` `Readonly` **ips**: `string`[]

#### Inherited from

FastifyRequest.ips

#### Defined in

node_modules/fastify/types/request.d.ts:77

___

### is404

• `Readonly` **is404**: `boolean`

#### Inherited from

FastifyRequest.is404

#### Defined in

node_modules/fastify/types/request.d.ts:86

___

### isMultipart

• **isMultipart**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Inherited from

FastifyRequest.isMultipart

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:8

___

### log

• **log**: `FastifyBaseLogger`

#### Inherited from

FastifyRequest.log

#### Defined in

node_modules/fastify/types/request.d.ts:62

___

### method

• `Readonly` **method**: `string`

#### Inherited from

FastifyRequest.method

#### Defined in

node_modules/fastify/types/request.d.ts:82

___

### originalUrl

• `Readonly` **originalUrl**: `string`

#### Inherited from

FastifyRequest.originalUrl

#### Defined in

node_modules/fastify/types/request.d.ts:80

___

### params

• **params**: `unknown`

#### Inherited from

FastifyRequest.params

#### Defined in

node_modules/fastify/types/request.d.ts:58

___

### parts

• **parts**: (`options?`: `Omit`\<`BusboyConfig`, ``"headers"``\>) => `AsyncIterableIterator`\<`Multipart`\>

#### Type declaration

▸ (`options?`): `AsyncIterableIterator`\<`Multipart`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Omit`\<`BusboyConfig`, ``"headers"``\> |

##### Returns

`AsyncIterableIterator`\<`Multipart`\>

#### Inherited from

FastifyRequest.parts

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:11

___

### protocol

• `Readonly` **protocol**: ``"http"`` \| ``"https"``

#### Inherited from

FastifyRequest.protocol

#### Defined in

node_modules/fastify/types/request.d.ts:81

___

### query

• **query**: `unknown`

#### Inherited from

FastifyRequest.query

#### Defined in

node_modules/fastify/types/request.d.ts:60

___

### raw

• **raw**: `IncomingMessage`

#### Inherited from

FastifyRequest.raw

#### Defined in

node_modules/fastify/types/request.d.ts:59

___

### req

• `Readonly` **req**: `IncomingMessage`

**`Deprecated`**

Use `raw` property

#### Inherited from

FastifyRequest.req

#### Defined in

node_modules/fastify/types/request.d.ts:75

___

### routeConfig

• **routeConfig**: `FastifyContextConfig` & `FastifyRouteConfig`

#### Inherited from

FastifyRequest.routeConfig

#### Defined in

node_modules/fastify/types/request.d.ts:66

___

### routeOptions

• `Readonly` **routeOptions**: `Readonly`\<`RequestRouteOptions`\<`unknown`, `FastifySchema`\>\>

#### Inherited from

FastifyRequest.routeOptions

#### Defined in

node_modules/fastify/types/request.d.ts:85

___

### routeSchema

• `Optional` **routeSchema**: `FastifySchema`

#### Inherited from

FastifyRequest.routeSchema

#### Defined in

node_modules/fastify/types/request.d.ts:67

___

### routerMethod

• `Readonly` **routerMethod**: `string`

#### Inherited from

FastifyRequest.routerMethod

#### Defined in

node_modules/fastify/types/request.d.ts:84

___

### routerPath

• `Readonly` **routerPath**: `string`

#### Inherited from

FastifyRequest.routerPath

#### Defined in

node_modules/fastify/types/request.d.ts:83

___

### saveRequestFiles

• **saveRequestFiles**: (`options?`: `Omit`\<`BusboyConfig`, ``"headers"``\> & \{ `tmpdir?`: `string`  }) => `Promise`\<`SavedMultipartFile`[]\>

#### Type declaration

▸ (`options?`): `Promise`\<`SavedMultipartFile`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Omit`\<`BusboyConfig`, ``"headers"``\> & \{ `tmpdir?`: `string`  } |

##### Returns

`Promise`\<`SavedMultipartFile`[]\>

#### Inherited from

FastifyRequest.saveRequestFiles

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:24

___

### savedRequestFiles

• **savedRequestFiles**: ``null`` \| `SavedMultipartFile`[]

This will get populated as soon as a call to `saveRequestFiles` gets resolved. Avoiding any future duplicate work

#### Inherited from

FastifyRequest.savedRequestFiles

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:30

___

### server

• **server**: `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyRequest.server

#### Defined in

node_modules/fastify/types/request.d.ts:63

___

### socket

• `Readonly` **socket**: `Socket`

#### Inherited from

FastifyRequest.socket

#### Defined in

node_modules/fastify/types/request.d.ts:87

___

### tmpUploads

• **tmpUploads**: ``null`` \| `string`[]

#### Inherited from

FastifyRequest.tmpUploads

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:28

___

### url

• `Readonly` **url**: `string`

#### Inherited from

FastifyRequest.url

#### Defined in

node_modules/fastify/types/request.d.ts:79

___

### user

• **user**: [`AuthToken`](authz_token.AuthToken.md)

#### Overrides

FastifyRequest.user

#### Defined in

[src/httpd/lib.ts:8](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/httpd/lib.ts#L8)

___

### validationError

• `Optional` **validationError**: `Error` & \{ `validation`: `any` ; `validationContext`: `string`  }

in order for this to be used the user should ensure they have set the attachValidation option.

#### Inherited from

FastifyRequest.validationError

#### Defined in

node_modules/fastify/types/request.d.ts:70

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

node_modules/fastify/types/request.d.ts:91

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

node_modules/fastify/types/request.d.ts:89

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

node_modules/fastify/types/request.d.ts:90

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

node_modules/fastify/types/request.d.ts:92

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

node_modules/fastify/types/request.d.ts:93
