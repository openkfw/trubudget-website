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
- [headers](httpd_lib.AuthenticatedRequest.md#headers)
- [hostname](httpd_lib.AuthenticatedRequest.md#hostname)
- [id](httpd_lib.AuthenticatedRequest.md#id)
- [ip](httpd_lib.AuthenticatedRequest.md#ip)
- [ips](httpd_lib.AuthenticatedRequest.md#ips)
- [is404](httpd_lib.AuthenticatedRequest.md#is404)
- [log](httpd_lib.AuthenticatedRequest.md#log)
- [method](httpd_lib.AuthenticatedRequest.md#method)
- [metrics](httpd_lib.AuthenticatedRequest.md#metrics)
- [params](httpd_lib.AuthenticatedRequest.md#params)
- [protocol](httpd_lib.AuthenticatedRequest.md#protocol)
- [query](httpd_lib.AuthenticatedRequest.md#query)
- [raw](httpd_lib.AuthenticatedRequest.md#raw)
- [req](httpd_lib.AuthenticatedRequest.md#req)
- [routerMethod](httpd_lib.AuthenticatedRequest.md#routermethod)
- [routerPath](httpd_lib.AuthenticatedRequest.md#routerpath)
- [server](httpd_lib.AuthenticatedRequest.md#server)
- [socket](httpd_lib.AuthenticatedRequest.md#socket)
- [url](httpd_lib.AuthenticatedRequest.md#url)
- [user](httpd_lib.AuthenticatedRequest.md#user)
- [validationError](httpd_lib.AuthenticatedRequest.md#validationerror)

## Properties

### body

• **body**: `unknown`

#### Inherited from

FastifyRequest.body

#### Defined in

node_modules/fastify/types/request.d.ts:32

___

### connection

• `Readonly` **connection**: `Socket`

#### Inherited from

FastifyRequest.connection

#### Defined in

node_modules/fastify/types/request.d.ts:55

___

### context

• **context**: `FastifyContext`<`unknown`\>

#### Inherited from

FastifyRequest.context

#### Defined in

node_modules/fastify/types/request.d.ts:33

___

### headers

• **headers**: `IncomingHttpHeaders`

#### Inherited from

FastifyRequest.headers

#### Defined in

node_modules/fastify/types/request.d.ts:29

___

### hostname

• `Readonly` **hostname**: `string`

#### Inherited from

FastifyRequest.hostname

#### Defined in

node_modules/fastify/types/request.d.ts:44

___

### id

• **id**: `any`

#### Inherited from

FastifyRequest.id

#### Defined in

node_modules/fastify/types/request.d.ts:25

___

### ip

• `Readonly` **ip**: `string`

#### Inherited from

FastifyRequest.ip

#### Defined in

node_modules/fastify/types/request.d.ts:42

___

### ips

• `Optional` `Readonly` **ips**: `string`[]

#### Inherited from

FastifyRequest.ips

#### Defined in

node_modules/fastify/types/request.d.ts:43

___

### is404

• `Readonly` **is404**: `boolean`

#### Inherited from

FastifyRequest.is404

#### Defined in

node_modules/fastify/types/request.d.ts:50

___

### log

• **log**: `FastifyLoggerInstance`

#### Inherited from

FastifyRequest.log

#### Defined in

node_modules/fastify/types/request.d.ts:30

___

### method

• `Readonly` **method**: `string`

#### Inherited from

FastifyRequest.method

#### Defined in

node_modules/fastify/types/request.d.ts:47

___

### metrics

• `Optional` **metrics**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hist` | (`labels?`: `Partial`<`Record`<`string`, `string` \| `number`\>\>) => `void` |
| `sum` | (`labels?`: `Partial`<`Record`<`string`, `string` \| `number`\>\>) => `void` |

#### Inherited from

FastifyRequest.metrics

#### Defined in

node_modules/fastify-metrics/dist/index.d.ts:18

___

### params

• **params**: `unknown`

#### Inherited from

FastifyRequest.params

#### Defined in

node_modules/fastify/types/request.d.ts:26

___

### protocol

• `Readonly` **protocol**: ``"http"`` \| ``"https"``

#### Inherited from

FastifyRequest.protocol

#### Defined in

node_modules/fastify/types/request.d.ts:46

___

### query

• **query**: `unknown`

#### Inherited from

FastifyRequest.query

#### Defined in

node_modules/fastify/types/request.d.ts:28

___

### raw

• **raw**: `IncomingMessage`

#### Inherited from

FastifyRequest.raw

#### Defined in

node_modules/fastify/types/request.d.ts:27

___

### req

• `Readonly` **req**: `IncomingMessage`

**`deprecated`** Use `raw` property

#### Inherited from

FastifyRequest.req

#### Defined in

node_modules/fastify/types/request.d.ts:41

___

### routerMethod

• `Readonly` **routerMethod**: `string`

#### Inherited from

FastifyRequest.routerMethod

#### Defined in

node_modules/fastify/types/request.d.ts:49

___

### routerPath

• `Readonly` **routerPath**: `string`

#### Inherited from

FastifyRequest.routerPath

#### Defined in

node_modules/fastify/types/request.d.ts:48

___

### server

• **server**: `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyRequest.server

#### Defined in

node_modules/fastify/types/request.d.ts:31

___

### socket

• `Readonly` **socket**: `Socket`

#### Inherited from

FastifyRequest.socket

#### Defined in

node_modules/fastify/types/request.d.ts:51

___

### url

• `Readonly` **url**: `string`

#### Inherited from

FastifyRequest.url

#### Defined in

node_modules/fastify/types/request.d.ts:45

___

### user

• **user**: [`AuthToken`](authz_token.AuthToken.md)

#### Defined in

[src/httpd/lib.ts:7](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/httpd/lib.ts#L7)

___

### validationError

• `Optional` **validationError**: `Error` & { `validation`: `any` ; `validationContext`: `string`  }

in order for this to be used the user should ensure they have set the attachValidation option.

#### Inherited from

FastifyRequest.validationError

#### Defined in

node_modules/fastify/types/request.d.ts:36
