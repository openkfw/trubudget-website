# AugmentedFastifyInstance
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / AugmentedFastifyInstance

[types](../modules/types.md).AugmentedFastifyInstance

Interface representing an extended fastify instance

## Hierarchy

- `FastifyInstance`

  ↳ **`AugmentedFastifyInstance`**

## Table of contents

### Properties

- [addContentTypeParser](types.AugmentedFastifyInstance.md#addcontenttypeparser)
- [all](types.AugmentedFastifyInstance.md#all)
- [authenticate](types.AugmentedFastifyInstance.md#authenticate)
- [childLoggerFactory](types.AugmentedFastifyInstance.md#childloggerfactory)
- [decorate](types.AugmentedFastifyInstance.md#decorate)
- [decorateReply](types.AugmentedFastifyInstance.md#decoratereply)
- [decorateRequest](types.AugmentedFastifyInstance.md#decoraterequest)
- [defaultTextParser](types.AugmentedFastifyInstance.md#defaulttextparser)
- [delete](types.AugmentedFastifyInstance.md#delete)
- [errorHandler](types.AugmentedFastifyInstance.md#errorhandler)
- [get](types.AugmentedFastifyInstance.md#get)
- [getDefaultJsonParser](types.AugmentedFastifyInstance.md#getdefaultjsonparser)
- [hasContentTypeParser](types.AugmentedFastifyInstance.md#hascontenttypeparser)
- [head](types.AugmentedFastifyInstance.md#head)
- [initialConfig](types.AugmentedFastifyInstance.md#initialconfig)
- [jwt](types.AugmentedFastifyInstance.md#jwt)
- [listeningOrigin](types.AugmentedFastifyInstance.md#listeningorigin)
- [log](types.AugmentedFastifyInstance.md#log)
- [metrics](types.AugmentedFastifyInstance.md#metrics)
- [multipartErrors](types.AugmentedFastifyInstance.md#multiparterrors)
- [options](types.AugmentedFastifyInstance.md#options)
- [patch](types.AugmentedFastifyInstance.md#patch)
- [pluginName](types.AugmentedFastifyInstance.md#pluginname)
- [post](types.AugmentedFastifyInstance.md#post)
- [prefix](types.AugmentedFastifyInstance.md#prefix)
- [put](types.AugmentedFastifyInstance.md#put)
- [rateLimit](types.AugmentedFastifyInstance.md#ratelimit)
- [register](types.AugmentedFastifyInstance.md#register)
- [removeAllContentTypeParsers](types.AugmentedFastifyInstance.md#removeallcontenttypeparsers)
- [removeContentTypeParser](types.AugmentedFastifyInstance.md#removecontenttypeparser)
- [serializerCompiler](types.AugmentedFastifyInstance.md#serializercompiler)
- [server](types.AugmentedFastifyInstance.md#server)
- [swagger](types.AugmentedFastifyInstance.md#swagger)
- [swaggerCSP](types.AugmentedFastifyInstance.md#swaggercsp)
- [validatorCompiler](types.AugmentedFastifyInstance.md#validatorcompiler)
- [version](types.AugmentedFastifyInstance.md#version)

### Methods

- [[asyncDispose]](types.AugmentedFastifyInstance.md#[asyncdispose])
- [addConstraintStrategy](types.AugmentedFastifyInstance.md#addconstraintstrategy)
- [addHook](types.AugmentedFastifyInstance.md#addhook)
- [addSchema](types.AugmentedFastifyInstance.md#addschema)
- [addresses](types.AugmentedFastifyInstance.md#addresses)
- [after](types.AugmentedFastifyInstance.md#after)
- [close](types.AugmentedFastifyInstance.md#close)
- [findRoute](types.AugmentedFastifyInstance.md#findroute)
- [getDefaultRoute](types.AugmentedFastifyInstance.md#getdefaultroute)
- [getSchema](types.AugmentedFastifyInstance.md#getschema)
- [getSchemas](types.AugmentedFastifyInstance.md#getschemas)
- [hasConstraintStrategy](types.AugmentedFastifyInstance.md#hasconstraintstrategy)
- [hasDecorator](types.AugmentedFastifyInstance.md#hasdecorator)
- [hasPlugin](types.AugmentedFastifyInstance.md#hasplugin)
- [hasReplyDecorator](types.AugmentedFastifyInstance.md#hasreplydecorator)
- [hasRequestDecorator](types.AugmentedFastifyInstance.md#hasrequestdecorator)
- [hasRoute](types.AugmentedFastifyInstance.md#hasroute)
- [inject](types.AugmentedFastifyInstance.md#inject)
- [listen](types.AugmentedFastifyInstance.md#listen)
- [parseCookie](types.AugmentedFastifyInstance.md#parsecookie)
- [printPlugins](types.AugmentedFastifyInstance.md#printplugins)
- [printRoutes](types.AugmentedFastifyInstance.md#printroutes)
- [ready](types.AugmentedFastifyInstance.md#ready)
- [route](types.AugmentedFastifyInstance.md#route)
- [routing](types.AugmentedFastifyInstance.md#routing)
- [serializeCookie](types.AugmentedFastifyInstance.md#serializecookie)
- [setChildLoggerFactory](types.AugmentedFastifyInstance.md#setchildloggerfactory)
- [setDefaultRoute](types.AugmentedFastifyInstance.md#setdefaultroute)
- [setErrorHandler](types.AugmentedFastifyInstance.md#seterrorhandler)
- [setGenReqId](types.AugmentedFastifyInstance.md#setgenreqid)
- [setNotFoundHandler](types.AugmentedFastifyInstance.md#setnotfoundhandler)
- [setReplySerializer](types.AugmentedFastifyInstance.md#setreplyserializer)
- [setSchemaController](types.AugmentedFastifyInstance.md#setschemacontroller)
- [setSchemaErrorFormatter](types.AugmentedFastifyInstance.md#setschemaerrorformatter)
- [setSerializerCompiler](types.AugmentedFastifyInstance.md#setserializercompiler)
- [setValidatorCompiler](types.AugmentedFastifyInstance.md#setvalidatorcompiler)
- [signCookie](types.AugmentedFastifyInstance.md#signcookie)
- [unsignCookie](types.AugmentedFastifyInstance.md#unsigncookie)
- [withTypeProvider](types.AugmentedFastifyInstance.md#withtypeprovider)

## Properties

### addContentTypeParser

• **addContentTypeParser**: `AddContentTypeParser`\<`RawServerDefault`, `IncomingMessage`, `RouteGenericInterface`, `FastifySchema`, `FastifyTypeProviderDefault`\>

Add a content type parser

#### Inherited from

FastifyInstance.addContentTypeParser

#### Defined in

node_modules/fastify/types/instance.d.ts:554

___

### all

• **all**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.all

#### Defined in

node_modules/fastify/types/instance.d.ts:215

___

### authenticate

• **authenticate**: `any`

#### Defined in

[src/types.ts:8](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/types.ts#L8)

___

### childLoggerFactory

• **childLoggerFactory**: `FastifyChildLoggerFactory`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Hook function that is called when creating a child logger instance for each request
which allows for modifying or adding child logger bindings and logger options, or
returning a completely custom child logger implementation.

#### Inherited from

FastifyInstance.childLoggerFactory

#### Defined in

node_modules/fastify/types/instance.d.ts:496

___

### decorate

• **decorate**: `DecorationMethod`\<`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>, `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>\>

#### Inherited from

FastifyInstance.decorate

#### Defined in

node_modules/fastify/types/instance.d.ts:152

___

### decorateReply

• **decorateReply**: `DecorationMethod`\<`FastifyReply`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`\>, `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>\>

#### Inherited from

FastifyInstance.decorateReply

#### Defined in

node_modules/fastify/types/instance.d.ts:154

___

### decorateRequest

• **decorateRequest**: `DecorationMethod`\<`FastifyRequest`\<`RouteGenericInterface`, `RawServerDefault`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>, `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>\>

#### Inherited from

FastifyInstance.decorateRequest

#### Defined in

node_modules/fastify/types/instance.d.ts:153

___

### defaultTextParser

• **defaultTextParser**: `FastifyBodyParser`\<`string`\>

Fastify default plain text parser

#### Inherited from

FastifyInstance.defaultTextParser

#### Defined in

node_modules/fastify/types/instance.d.ts:571

___

### delete

• **delete**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.delete

#### Defined in

node_modules/fastify/types/instance.d.ts:212

___

### errorHandler

• **errorHandler**: (`error`: `FastifyError`, `request`: `FastifyRequest`\<`RouteGenericInterface`, `RawServerDefault`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>, `reply`: `FastifyReply`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`\>) => `void`

#### Type declaration

▸ (`error`, `request`, `reply`): `void`

Fastify default error handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `FastifyError` |
| `request` | `FastifyRequest`\<`RouteGenericInterface`, `RawServerDefault`, `IncomingMessage`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\> |
| `reply` | `FastifyReply`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `unknown`\> |

##### Returns

`void`

#### Inherited from

FastifyInstance.errorHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:477

___

### get

• **get**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.get

#### Defined in

node_modules/fastify/types/instance.d.ts:208

___

### getDefaultJsonParser

• **getDefaultJsonParser**: `getDefaultJsonParser`

Fastify default JSON parser

#### Inherited from

FastifyInstance.getDefaultJsonParser

#### Defined in

node_modules/fastify/types/instance.d.ts:567

___

### hasContentTypeParser

• **hasContentTypeParser**: `hasContentTypeParser`

#### Inherited from

FastifyInstance.hasContentTypeParser

#### Defined in

node_modules/fastify/types/instance.d.ts:555

___

### head

• **head**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.head

#### Defined in

node_modules/fastify/types/instance.d.ts:209

___

### initialConfig

• **initialConfig**: `Readonly`\<\{ `allowUnsafeRegex?`: `boolean` ; `bodyLimit?`: `number` ; `caseSensitive?`: `boolean` ; `connectionTimeout?`: `number` ; `disableRequestLogging?`: `boolean` ; `forceCloseConnections?`: `boolean` ; `http2?`: `boolean` ; `http2SessionTimeout?`: `number` ; `https?`: `boolean` \| `Readonly`\<\{ `allowHTTP1`: `boolean`  }\> ; `ignoreDuplicateSlashes?`: `boolean` ; `ignoreTrailingSlash?`: `boolean` ; `keepAliveTimeout?`: `number` ; `maxParamLength?`: `number` ; `onConstructorPoisoning?`: `ConstructorAction` ; `onProtoPoisoning?`: `ProtoAction` ; `pluginTimeout?`: `number` ; `requestIdHeader?`: `string` \| ``false`` ; `requestIdLogLabel?`: `string` ; `useSemicolonDelimiter?`: `boolean`  }\>

Frozen read-only object registering the initial options passed down by the user to the fastify instance

#### Inherited from

FastifyInstance.initialConfig

#### Defined in

node_modules/fastify/types/instance.d.ts:586

___

### jwt

• **jwt**: `JWT`

#### Inherited from

FastifyInstance.jwt

#### Defined in

node_modules/@fastify/jwt/types/jwt.d.ts:17

___

### listeningOrigin

• **listeningOrigin**: `string`

#### Inherited from

FastifyInstance.listeningOrigin

#### Defined in

node_modules/fastify/types/instance.d.ts:132

___

### log

• **log**: `FastifyBaseLogger`

#### Inherited from

FastifyInstance.log

#### Defined in

node_modules/fastify/types/instance.d.ts:131

___

### metrics

• **metrics**: `IFastifyMetrics`

Metrics interface

#### Inherited from

FastifyInstance.metrics

#### Defined in

node_modules/fastify-metrics/dist/index.d.ts:12

___

### multipartErrors

• **multipartErrors**: `MultipartErrors`

#### Inherited from

FastifyInstance.multipartErrors

#### Defined in

node_modules/@fastify/multipart/types/index.d.ts:34

___

### options

• **options**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.options

#### Defined in

node_modules/fastify/types/instance.d.ts:213

___

### patch

• **patch**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.patch

#### Defined in

node_modules/fastify/types/instance.d.ts:214

___

### pluginName

• **pluginName**: `string`

#### Inherited from

FastifyInstance.pluginName

#### Defined in

node_modules/fastify/types/instance.d.ts:128

___

### post

• **post**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.post

#### Defined in

node_modules/fastify/types/instance.d.ts:210

___

### prefix

• **prefix**: `string`

#### Inherited from

FastifyInstance.prefix

#### Defined in

node_modules/fastify/types/instance.d.ts:129

___

### put

• **put**: `RouteShorthandMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.put

#### Defined in

node_modules/fastify/types/instance.d.ts:211

___

### rateLimit

• **rateLimit**: (`options?`: `RateLimitOptions`) => `preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Type declaration

▸ (`options?`): `preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `RateLimitOptions` |

##### Returns

`preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGenericInterface`, `unknown`, `FastifySchema`, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.rateLimit

#### Defined in

node_modules/@fastify/rate-limit/types/index.d.ts:12

___

### register

• **register**: `FastifyRegister`\<`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> & `PromiseLike`\<`undefined`\>, `RawServerDefault`, `FastifyTypeProvider`, `FastifyBaseLogger`\>

#### Inherited from

FastifyInstance.register

#### Defined in

node_modules/fastify/types/instance.d.ts:196

___

### removeAllContentTypeParsers

• **removeAllContentTypeParsers**: `removeAllContentTypeParsers`

Remove all content type parsers, including the default ones

#### Inherited from

FastifyInstance.removeAllContentTypeParsers

#### Defined in

node_modules/fastify/types/instance.d.ts:563

___

### removeContentTypeParser

• **removeContentTypeParser**: `removeContentTypeParser`

Remove an existing content type parser

#### Inherited from

FastifyInstance.removeContentTypeParser

#### Defined in

node_modules/fastify/types/instance.d.ts:559

___

### serializerCompiler

• **serializerCompiler**: `undefined` \| `FastifySerializerCompiler`\<`any`\>

Fastify schema serializer for all routes.

#### Inherited from

FastifyInstance.serializerCompiler

#### Defined in

node_modules/fastify/types/instance.d.ts:530

___

### server

• **server**: `RawServerDefault`

#### Inherited from

FastifyInstance.server

#### Defined in

node_modules/fastify/types/instance.d.ts:127

___

### swagger

• **swagger**: (`opts?`: \{ `yaml?`: ``false``  }) => `Document`\<{}\> & (`opts`: \{ `yaml`: ``true``  }) => `string` & (`opts`: \{ `yaml`: `boolean`  }) => `string` \| `Document`\<{}\>

#### Inherited from

FastifyInstance.swagger

#### Defined in

node_modules/@fastify/swagger/index.d.ts:23

___

### swaggerCSP

• **swaggerCSP**: `any`

#### Overrides

FastifyInstance.swaggerCSP

#### Defined in

[src/types.ts:9](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/types.ts#L9)

___

### validatorCompiler

• **validatorCompiler**: `undefined` \| `FastifySchemaCompiler`\<`any`\>

Fastify schema validator for all routes.

#### Inherited from

FastifyInstance.validatorCompiler

#### Defined in

node_modules/fastify/types/instance.d.ts:520

___

### version

• **version**: `string`

#### Inherited from

FastifyInstance.version

#### Defined in

node_modules/fastify/types/instance.d.ts:130

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`undefined`\>

Alias for [`()`](types.AugmentedFastifyInstance.md#close)

#### Returns

`Promise`\<`undefined`\>

#### Inherited from

FastifyInstance.[asyncDispose]

#### Defined in

node_modules/fastify/types/instance.d.ts:149

___

### addConstraintStrategy

▸ **addConstraintStrategy**(`strategy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | `ConstraintStrategy`\<`V1`, `unknown`\> |

#### Returns

`void`

#### Inherited from

FastifyInstance.addConstraintStrategy

#### Defined in

node_modules/fastify/types/instance.d.ts:161

___

### addHook

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`onRequest` is the first hook to be executed in the request lifecycle. There was no previous hook, the next hook will be `preParsing`.
 Notice: in the `onRequest` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `onRequestHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `onRequestAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `onRequestHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRequest"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onRequestAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `onRequestHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:237

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`preParsing` is the second hook to be executed in the request lifecycle. The previous hook was `onRequest`, the next hook will be `preValidation`.
Notice: in the `preParsing` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `preParsingHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `preParsingAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `preParsingHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preParsing"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `preParsingAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `preParsingHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:252

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`preValidation` is the third hook to be executed in the request lifecycle. The previous hook was `preParsing`, the next hook will be `preHandler`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `preValidationHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `preValidationAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `preValidationHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preValidation"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `preValidationAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `preValidationHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:266

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`preHandler` is the fourth hook to be executed in the request lifecycle. The previous hook was `preValidation`, the next hook will be `preSerialization`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `preHandlerHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `preHandlerHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preHandler"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `preHandlerHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:280

▸ **addHook**\<`PreSerializationPayload`, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`preSerialization` is the fifth hook to be executed in the request lifecycle. The previous hook was `preHandler`, the next hook will be `onSend`.
 Note: the hook is NOT called if the payload is a string, a Buffer, a stream or null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PreSerializationPayload` | `unknown` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `preSerializationHookHandler`\<`PreSerializationPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `preSerializationAsyncHookHandler`\<`PreSerializationPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `preSerializationHookHandler`\<`PreSerializationPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preSerialization"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `preSerializationAsyncHookHandler`\<`PreSerializationPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `preSerializationHookHandler`\<`PreSerializationPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:295

▸ **addHook**\<`OnSendPayload`, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

You can change the payload with the `onSend` hook. It is the sixth hook to be executed in the request lifecycle. The previous hook was `preSerialization`, the next hook will be `onResponse`.
Note: If you change the payload, you may only change it to a string, a Buffer, a stream, or null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OnSendPayload` | `unknown` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `onSendHookHandler`\<`OnSendPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `onSendAsyncHookHandler`\<`OnSendPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `onSendHookHandler`\<`OnSendPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onSend"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onSendAsyncHookHandler`\<`OnSendPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `onSendHookHandler`\<`OnSendPayload`, `RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:311

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`onResponse` is the seventh and last hook in the request hook lifecycle. The previous hook was `onSend`, there is no next hook.
The onResponse hook is executed when a response has been sent, so you will not be able to send more data to the client. It can however be useful for sending data to external services, for example to gather statistics.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `onResponseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `onResponseAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `onResponseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onResponse"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onResponseAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `onResponseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:327

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`onTimeout` is useful if you need to monitor the request timed out in your service. (if the `connectionTimeout` property is set on the fastify instance)
The onTimeout hook is executed when a request is timed out and the http socket has been hanged up. Therefore you will not be able to send data to the client.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `onTimeoutHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `onTimeoutAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `onTimeoutHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onTimeout"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onTimeoutAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `onTimeoutHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:342

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

`onRequestAbort` is useful if you need to monitor the if the client aborts the request (if the `request.raw.aborted` property is set to `true`).
The `onRequestAbort` hook is executed when a client closes the connection before the entire request has been received. Therefore, you will not be able to send data to the client.
Notice: client abort detection is not completely reliable. See: https://github.com/fastify/fastify/blob/main/docs/Guides/Detecting-When-Clients-Abort.md

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `onRequestAbortHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `onRequestAbortAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `onRequestAbortHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRequestAbort"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onRequestAbortAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `onRequestAbortHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:358

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

This hook is useful if you need to do some custom error logging or add some specific header in case of error.
It is not intended for changing the error, and calling reply.send will throw an exception.
This hook will be executed only after the customErrorHandler has been executed, and only if the customErrorHandler sends an error back to the user (Note that the default customErrorHandler always sends the error back to the user).
Notice: unlike the other hooks, pass an error to the done function is not supported.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |
| `Fn` | extends `onErrorHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `FastifyError`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> \| `onErrorAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `FastifyError`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> = `onErrorHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `FastifyError`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onError"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onErrorAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `FastifyError`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `onErrorHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `FastifyError`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:375

▸ **addHook**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `Logger`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

Triggered when a new route is registered. Listeners are passed a routeOptions object as the sole parameter. The interface is synchronous, and, as such, the listener does not get passed a callback

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `Logger` | extends `FastifyBaseLogger` = `FastifyBaseLogger` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRoute"`` |
| `hook` | `onRouteHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `Logger`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `Logger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:391

▸ **addHook**(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Triggered when a new plugin is registered and a new encapsulation context is created. The hook will be executed before the registered code.
This hook can be useful if you are developing a plugin that needs to know when a plugin context is formed, and you want to operate in that specific context.
Note: This hook will not be called if a plugin is wrapped inside fastify-plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRegister"`` |
| `hook` | `onRegisterHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`, `FastifyPluginOptions`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:406

▸ **addHook**\<`Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Triggered when fastify.listen() or fastify.ready() is invoked to start the server. It is useful when plugins need a "ready" event, for example to load data before the server start listening for requests.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `onReadyHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> \| `onReadyAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> = `onReadyHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onReady"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onReadyAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `onReadyHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:414

▸ **addHook**\<`Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Triggered when fastify.listen() is invoked to start the server. It is useful when plugins need a "onListen" event, for example to run logics after the server start listening for requests.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `onListenAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> \| `onListenHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> = `onListenHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onListen"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onListenAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `onListenHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:424

▸ **addHook**\<`Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need a "shutdown" event, for example to close an open connection to a database.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `onCloseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> \| `onCloseAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> = `onCloseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onClose"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `onCloseAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `onCloseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:434

▸ **addHook**\<`Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need to cancel some state to allow the server to close successfully.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `preCloseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> \| `preCloseAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> = `preCloseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preClose"`` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `preCloseAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `preCloseHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:444

▸ **addHook**\<`K`, `Fn`\>(`name`, `hook`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `ApplicationHook` \| `LifecycleHook` |
| `Fn` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |
| `hook` | `Fn` extends `unknown` ? `Fn` extends `AsyncFunction` ? `HookAsyncLookup`\<`K`\> : `HookLookup`\<`K`\> : `Fn` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:451

___

### addSchema

▸ **addSchema**(`schema`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `unknown` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.addSchema

#### Defined in

node_modules/fastify/types/instance.d.ts:136

___

### addresses

▸ **addresses**(): `AddressInfo`[]

#### Returns

`AddressInfo`[]

#### Inherited from

FastifyInstance.addresses

#### Defined in

node_modules/fastify/types/instance.d.ts:133

___

### after

▸ **after**(): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> & `PromiseLike`\<`undefined`\>

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> & `PromiseLike`\<`undefined`\>

#### Inherited from

FastifyInstance.after

#### Defined in

node_modules/fastify/types/instance.d.ts:140

▸ **after**(`afterListener`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterListener` | (`err`: ``null`` \| `Error`) => `void` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.after

#### Defined in

node_modules/fastify/types/instance.d.ts:141

___

### close

▸ **close**(): `Promise`\<`undefined`\>

#### Returns

`Promise`\<`undefined`\>

#### Inherited from

FastifyInstance.close

#### Defined in

node_modules/fastify/types/instance.d.ts:143

▸ **close**(`closeListener`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeListener` | () => `void` |

#### Returns

`undefined`

#### Inherited from

FastifyInstance.close

#### Defined in

node_modules/fastify/types/instance.d.ts:144

___

### findRoute

▸ **findRoute**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`\>(`opts`): `Omit`\<`FindMyWayFindResult`\<`RawServerDefault`\>, ``"store"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Pick`\<`RouteOptions`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>, ``"url"`` \| ``"method"`` \| ``"constraints"``\> |

#### Returns

`Omit`\<`FindMyWayFindResult`\<`RawServerDefault`\>, ``"store"``\>

#### Inherited from

FastifyInstance.findRoute

#### Defined in

node_modules/fastify/types/instance.d.ts:223

___

### getDefaultRoute

▸ **getDefaultRoute**(): `DefaultRoute`\<`IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>\>

#### Returns

`DefaultRoute`\<`IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>\>

#### Inherited from

FastifyInstance.getDefaultRoute

#### Defined in

node_modules/fastify/types/instance.d.ts:199

___

### getSchema

▸ **getSchema**(`schemaId`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaId` | `string` |

#### Returns

`unknown`

#### Inherited from

FastifyInstance.getSchema

#### Defined in

node_modules/fastify/types/instance.d.ts:137

___

### getSchemas

▸ **getSchemas**(): `Record`\<`string`, `unknown`\>

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

FastifyInstance.getSchemas

#### Defined in

node_modules/fastify/types/instance.d.ts:138

___

### hasConstraintStrategy

▸ **hasConstraintStrategy**(`strategyName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategyName` | `string` |

#### Returns

`boolean`

#### Inherited from

FastifyInstance.hasConstraintStrategy

#### Defined in

node_modules/fastify/types/instance.d.ts:162

___

### hasDecorator

▸ **hasDecorator**(`decorator`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decorator` | `string` \| `symbol` |

#### Returns

`boolean`

#### Inherited from

FastifyInstance.hasDecorator

#### Defined in

node_modules/fastify/types/instance.d.ts:156

___

### hasPlugin

▸ **hasPlugin**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

FastifyInstance.hasPlugin

#### Defined in

node_modules/fastify/types/instance.d.ts:159

___

### hasReplyDecorator

▸ **hasReplyDecorator**(`decorator`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decorator` | `string` \| `symbol` |

#### Returns

`boolean`

#### Inherited from

FastifyInstance.hasReplyDecorator

#### Defined in

node_modules/fastify/types/instance.d.ts:158

___

### hasRequestDecorator

▸ **hasRequestDecorator**(`decorator`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decorator` | `string` \| `symbol` |

#### Returns

`boolean`

#### Inherited from

FastifyInstance.hasRequestDecorator

#### Defined in

node_modules/fastify/types/instance.d.ts:157

___

### hasRoute

▸ **hasRoute**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`\>(`opts`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Pick`\<`RouteOptions`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\>, ``"url"`` \| ``"method"`` \| ``"constraints"``\> |

#### Returns

`boolean`

#### Inherited from

FastifyInstance.hasRoute

#### Defined in

node_modules/fastify/types/instance.d.ts:217

___

### inject

▸ **inject**(`opts`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `string` \| `InjectOptions` |
| `cb` | `CallbackFunc` |

#### Returns

`void`

#### Inherited from

FastifyInstance.inject

#### Defined in

node_modules/fastify/types/instance.d.ts:164

▸ **inject**(`opts`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `string` \| `InjectOptions` |

#### Returns

`Promise`\<`Response`\>

#### Inherited from

FastifyInstance.inject

#### Defined in

node_modules/fastify/types/instance.d.ts:165

▸ **inject**(): `Chain`

#### Returns

`Chain`

#### Inherited from

FastifyInstance.inject

#### Defined in

node_modules/fastify/types/instance.d.ts:166

___

### listen

▸ **listen**(`opts`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `FastifyListenOptions` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:168

▸ **listen**(`opts?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `FastifyListenOptions` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:169

▸ **listen**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:170

▸ **listen**(`port`, `address`, `backlog`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `address` | `string` |
| `backlog` | `number` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

**`Deprecated`**

Variadic listen method is deprecated. Please use `.listen(optionsObject, callback)` instead. The variadic signature will be removed in `fastify@5`

**`See`**

https://github.com/fastify/fastify/pull/3712

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:176

▸ **listen**(`port`, `address`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `address` | `string` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

**`Deprecated`**

Variadic listen method is deprecated. Please use `.listen(optionsObject, callback)` instead. The variadic signature will be removed in `fastify@5`

**`See`**

https://github.com/fastify/fastify/pull/3712

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:181

▸ **listen**(`port`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

**`Deprecated`**

Variadic listen method is deprecated. Please use `.listen(optionsObject, callback)` instead. The variadic signature will be removed in `fastify@5`

**`See`**

https://github.com/fastify/fastify/pull/3712

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:186

▸ **listen**(`port`, `address?`, `backlog?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `address?` | `string` |
| `backlog?` | `number` |

#### Returns

`Promise`\<`string`\>

**`Deprecated`**

Variadic listen method is deprecated. Please use `.listen(optionsObject)` instead. The variadic signature will be removed in `fastify@5`

**`See`**

https://github.com/fastify/fastify/pull/3712

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:191

___

### parseCookie

▸ **parseCookie**(`cookieHeader`): `Object`

Manual cookie parsing method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cookieHeader` | `string` | Raw cookie header value |

#### Returns

`Object`

**`Docs`**

https://github.com/fastify/fastify-cookie#manual-cookie-parsing

#### Inherited from

FastifyInstance.parseCookie

#### Defined in

node_modules/@fastify/cookie/types/plugin.d.ts:21

___

### printPlugins

▸ **printPlugins**(): `string`

Prints the representation of the plugin tree used by avvio, the plugin registration system

#### Returns

`string`

#### Inherited from

FastifyInstance.printPlugins

#### Defined in

node_modules/fastify/types/instance.d.ts:581

___

### printRoutes

▸ **printRoutes**(`opts?`): `string`

Prints the representation of the internal radix tree used by the router

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `PrintRoutesOptions` |

#### Returns

`string`

#### Inherited from

FastifyInstance.printRoutes

#### Defined in

node_modules/fastify/types/instance.d.ts:576

___

### ready

▸ **ready**(): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> & `PromiseLike`\<`undefined`\>

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> & `PromiseLike`\<`undefined`\>

#### Inherited from

FastifyInstance.ready

#### Defined in

node_modules/fastify/types/instance.d.ts:193

▸ **ready**(`readyListener`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readyListener` | (`err`: ``null`` \| `Error`) => `void` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.ready

#### Defined in

node_modules/fastify/types/instance.d.ts:194

___

### route

▸ **route**\<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`\>(`opts`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RouteOptions`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyTypeProviderDefault`, `FastifyBaseLogger`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.route

#### Defined in

node_modules/fastify/types/instance.d.ts:202

___

### routing

▸ **routing**(`req`, `res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`\<`IncomingMessage`\> |

#### Returns

`void`

#### Inherited from

FastifyInstance.routing

#### Defined in

node_modules/fastify/types/instance.d.ts:198

___

### serializeCookie

▸ **serializeCookie**(`name`, `value`, `opts?`): `string`

Serialize a cookie name-value pair into a Set-Cookie header string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Cookie name |
| `value` | `string` | Cookie value |
| `opts?` | `SerializeOptions` | Options |

#### Returns

`string`

**`Throws`**

When maxAge option is invalid

#### Inherited from

FastifyInstance.serializeCookie

#### Defined in

node_modules/@fastify/cookie/types/plugin.d.ts:14

___

### setChildLoggerFactory

▸ **setChildLoggerFactory**(`factory`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Hook function that is called when creating a child logger instance for each request
which allows for modifying or adding child logger bindings and logger options, or
returning a completely custom child logger implementation.

Child logger bindings have a performance advantage over per-log bindings, because
they are pre-serialised by Pino when the child logger is created.

For example:
```
function childLoggerFactory(logger, bindings, opts, rawReq) {
  // Calculate additional bindings from the request
  bindings.traceContext = rawReq.headers['x-cloud-trace-context']
  return logger.child(bindings, opts);
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `FastifyChildLoggerFactory`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setChildLoggerFactory

#### Defined in

node_modules/fastify/types/instance.d.ts:515

___

### setDefaultRoute

▸ **setDefaultRoute**(`defaultRoute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultRoute` | `DefaultRoute`\<`IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>\> |

#### Returns

`void`

#### Inherited from

FastifyInstance.setDefaultRoute

#### Defined in

node_modules/fastify/types/instance.d.ts:200

___

### setErrorHandler

▸ **setErrorHandler**\<`TError`, `RouteGeneric`, `SchemaCompiler`, `TypeProvider`\>(`handler`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>

Set a function that will be called whenever an error happens

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | extends `Error` = `FastifyError` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |
| `TypeProvider` | extends `FastifyTypeProvider` = `FastifyTypeProviderDefault` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`this`: `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>, `error`: `TError`, `request`: `FastifyRequest`\<`RouteGeneric`, `RawServerDefault`, `IncomingMessage`, `SchemaCompiler`, `TypeProvider`, `unknown`, `FastifyBaseLogger`, `ResolveFastifyRequestType`\<`TypeProvider`, `SchemaCompiler`, `RouteGeneric`\>\>, `reply`: `FastifyReply`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `unknown`, `SchemaCompiler`, `TypeProvider`, `UndefinedToUnknown`\<`KeysOf`\<`RouteGeneric`[``"Reply"``]\> extends `never` ? `ResolveReplyFromSchemaCompiler`\<`TypeProvider`, `SchemaCompiler`\> : `RouteGeneric`[``"Reply"``]\>\>) => `any` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>

#### Inherited from

FastifyInstance.setErrorHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:482

___

### setGenReqId

▸ **setGenReqId**(`fn`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Set a function that will generate a request-ids

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`req`: `IncomingMessage`) => `string` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setGenReqId

#### Defined in

node_modules/fastify/types/instance.d.ts:489

___

### setNotFoundHandler

▸ **setNotFoundHandler**\<`RouteGeneric`, `ContextConfig`, `TypeProvider`, `SchemaCompiler`\>(`handler`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>

Set the 404 handler

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | extends `unknown` = `unknown` |
| `TypeProvider` | extends `FastifyTypeProvider` = `FastifyTypeProviderDefault` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `RouteHandlerMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>

#### Inherited from

FastifyInstance.setNotFoundHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:462

▸ **setNotFoundHandler**\<`RouteGeneric`, `ContextConfig`, `TypeProvider`, `SchemaCompiler`\>(`opts`, `handler`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | extends `unknown` = `unknown` |
| `TypeProvider` | extends `FastifyTypeProvider` = `FastifyTypeProviderDefault` |
| `SchemaCompiler` | extends `FastifySchema` = `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.preHandler?` | `preHandlerHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\> \| `preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\> \| `preHandlerHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\>[] \| `preHandlerAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\>[] |
| `opts.preValidation?` | `preValidationHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\> \| `preValidationAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\> \| `preValidationHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\>[] \| `preValidationAsyncHookHandler`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\>[] |
| `handler` | `RouteHandlerMethod`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `TypeProvider`, `FastifyBaseLogger`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeProvider`\>

#### Inherited from

FastifyInstance.setNotFoundHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:466

___

### setReplySerializer

▸ **setReplySerializer**(`replySerializer`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Set the reply serializer for all routes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replySerializer` | (`payload`: `unknown`, `statusCode`: `number`) => `string` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setReplySerializer

#### Defined in

node_modules/fastify/types/instance.d.ts:545

___

### setSchemaController

▸ **setSchemaController**(`schemaControllerOpts`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Set the schema controller for all routes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaControllerOpts` | `FastifySchemaControllerOptions` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setSchemaController

#### Defined in

node_modules/fastify/types/instance.d.ts:540

___

### setSchemaErrorFormatter

▸ **setSchemaErrorFormatter**(`errorFormatter`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorFormatter` | `SchemaErrorFormatter` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setSchemaErrorFormatter

#### Defined in

node_modules/fastify/types/instance.d.ts:550

___

### setSerializerCompiler

▸ **setSerializerCompiler**\<`T`\>(`schemaCompiler`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Set the schema serializer for all routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCompiler` | `FastifySerializerCompiler`\<`T`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setSerializerCompiler

#### Defined in

node_modules/fastify/types/instance.d.ts:535

___

### setValidatorCompiler

▸ **setValidatorCompiler**\<`T`\>(`schemaCompiler`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

Set the schema validator for all routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCompiler` | `FastifySchemaCompiler`\<`T`\> |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Inherited from

FastifyInstance.setValidatorCompiler

#### Defined in

node_modules/fastify/types/instance.d.ts:525

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

FastifyInstance.signCookie

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

FastifyInstance.unsignCookie

#### Defined in

node_modules/@fastify/cookie/types/plugin.d.ts:51

___

### withTypeProvider

▸ **withTypeProvider**\<`Provider`\>(): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `Provider`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Provider` | extends `FastifyTypeProvider` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `Provider`\>

#### Inherited from

FastifyInstance.withTypeProvider

#### Defined in

node_modules/fastify/types/instance.d.ts:134
