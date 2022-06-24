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
- [defaultTextParser](types.AugmentedFastifyInstance.md#defaulttextparser)
- [delete](types.AugmentedFastifyInstance.md#delete)
- [get](types.AugmentedFastifyInstance.md#get)
- [getDefaultJsonParser](types.AugmentedFastifyInstance.md#getdefaultjsonparser)
- [getDefaultRoute](types.AugmentedFastifyInstance.md#getdefaultroute)
- [hasContentTypeParser](types.AugmentedFastifyInstance.md#hascontenttypeparser)
- [head](types.AugmentedFastifyInstance.md#head)
- [initialConfig](types.AugmentedFastifyInstance.md#initialconfig)
- [log](types.AugmentedFastifyInstance.md#log)
- [metrics](types.AugmentedFastifyInstance.md#metrics)
- [options](types.AugmentedFastifyInstance.md#options)
- [patch](types.AugmentedFastifyInstance.md#patch)
- [post](types.AugmentedFastifyInstance.md#post)
- [prefix](types.AugmentedFastifyInstance.md#prefix)
- [put](types.AugmentedFastifyInstance.md#put)
- [register](types.AugmentedFastifyInstance.md#register)
- [removeAllContentTypeParsers](types.AugmentedFastifyInstance.md#removeallcontenttypeparsers)
- [removeContentTypeParser](types.AugmentedFastifyInstance.md#removecontenttypeparser)
- [server](types.AugmentedFastifyInstance.md#server)
- [swaggerCSP](types.AugmentedFastifyInstance.md#swaggercsp)
- [version](types.AugmentedFastifyInstance.md#version)

### Methods

- [addHook](types.AugmentedFastifyInstance.md#addhook)
- [addSchema](types.AugmentedFastifyInstance.md#addschema)
- [after](types.AugmentedFastifyInstance.md#after)
- [close](types.AugmentedFastifyInstance.md#close)
- [decorate](types.AugmentedFastifyInstance.md#decorate)
- [decorateReply](types.AugmentedFastifyInstance.md#decoratereply)
- [decorateRequest](types.AugmentedFastifyInstance.md#decoraterequest)
- [errorHandler](types.AugmentedFastifyInstance.md#errorhandler)
- [getSchema](types.AugmentedFastifyInstance.md#getschema)
- [getSchemas](types.AugmentedFastifyInstance.md#getschemas)
- [hasDecorator](types.AugmentedFastifyInstance.md#hasdecorator)
- [hasReplyDecorator](types.AugmentedFastifyInstance.md#hasreplydecorator)
- [hasRequestDecorator](types.AugmentedFastifyInstance.md#hasrequestdecorator)
- [inject](types.AugmentedFastifyInstance.md#inject)
- [listen](types.AugmentedFastifyInstance.md#listen)
- [printPlugins](types.AugmentedFastifyInstance.md#printplugins)
- [printRoutes](types.AugmentedFastifyInstance.md#printroutes)
- [ready](types.AugmentedFastifyInstance.md#ready)
- [route](types.AugmentedFastifyInstance.md#route)
- [routing](types.AugmentedFastifyInstance.md#routing)
- [setDefaultRoute](types.AugmentedFastifyInstance.md#setdefaultroute)
- [setErrorHandler](types.AugmentedFastifyInstance.md#seterrorhandler)
- [setNotFoundHandler](types.AugmentedFastifyInstance.md#setnotfoundhandler)
- [setReplySerializer](types.AugmentedFastifyInstance.md#setreplyserializer)
- [setSchemaController](types.AugmentedFastifyInstance.md#setschemacontroller)
- [setSchemaErrorFormatter](types.AugmentedFastifyInstance.md#setschemaerrorformatter)
- [setSerializerCompiler](types.AugmentedFastifyInstance.md#setserializercompiler)
- [setValidatorCompiler](types.AugmentedFastifyInstance.md#setvalidatorcompiler)

## Properties

### addContentTypeParser

• **addContentTypeParser**: `AddContentTypeParser`<`Server`, `IncomingMessage`\>

Add a content type parser

#### Inherited from

FastifyInstance.addContentTypeParser

#### Defined in

node_modules/fastify/types/instance.d.ts:422

___

### all

• **all**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.all

#### Defined in

node_modules/fastify/types/instance.d.ts:108

___

### authenticate

• **authenticate**: `any`

#### Defined in

[src/types.ts:8](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/types.ts#L8)

___

### defaultTextParser

• **defaultTextParser**: `FastifyBodyParser`<`string`, `Server`, `IncomingMessage`, `RouteGenericInterface`\>

Fastify default plain text parser

#### Inherited from

FastifyInstance.defaultTextParser

#### Defined in

node_modules/fastify/types/instance.d.ts:439

___

### delete

• **delete**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.delete

#### Defined in

node_modules/fastify/types/instance.d.ts:105

___

### get

• **get**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.get

#### Defined in

node_modules/fastify/types/instance.d.ts:101

___

### getDefaultJsonParser

• **getDefaultJsonParser**: `getDefaultJsonParser`

Fastify default JSON parser

#### Inherited from

FastifyInstance.getDefaultJsonParser

#### Defined in

node_modules/fastify/types/instance.d.ts:435

___

### getDefaultRoute

• **getDefaultRoute**: `DefaultRoute`<`IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.getDefaultRoute

#### Defined in

node_modules/fastify/types/instance.d.ts:92

___

### hasContentTypeParser

• **hasContentTypeParser**: `hasContentTypeParser`

#### Inherited from

FastifyInstance.hasContentTypeParser

#### Defined in

node_modules/fastify/types/instance.d.ts:423

___

### head

• **head**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.head

#### Defined in

node_modules/fastify/types/instance.d.ts:102

___

### initialConfig

• **initialConfig**: `Readonly`<{ `bodyLimit?`: `number` ; `caseSensitive?`: `boolean` ; `connectionTimeout?`: `number` ; `disableRequestLogging?`: `boolean` ; `forceCloseConnections?`: `boolean` ; `http2?`: `boolean` ; `http2SessionTimeout?`: `number` ; `https?`: `boolean` \| `Readonly`<{ `allowHTTP1`: `boolean`  }\> ; `ignoreTrailingSlash?`: `boolean` ; `keepAliveTimeout?`: `number` ; `maxParamLength?`: `number` ; `onConstructorPoisoning?`: `ConstructorAction` ; `onProtoPoisoning?`: `ProtoAction` ; `pluginTimeout?`: `number` ; `requestIdHeader?`: `string` ; `requestIdLogLabel?`: `string`  }\>

 Frozen read-only object registering the initial options passed down by the user to the fastify instance

#### Inherited from

FastifyInstance.initialConfig

#### Defined in

node_modules/fastify/types/instance.d.ts:454

___

### log

• **log**: `FastifyLoggerInstance`

#### Inherited from

FastifyInstance.log

#### Defined in

node_modules/fastify/types/instance.d.ts:37

___

### metrics

• **metrics**: `FastifyMetrics`

Metrics interface

#### Inherited from

FastifyInstance.metrics

#### Defined in

node_modules/fastify-metrics/dist/index.d.ts:9

___

### options

• **options**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.options

#### Defined in

node_modules/fastify/types/instance.d.ts:106

___

### patch

• **patch**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.patch

#### Defined in

node_modules/fastify/types/instance.d.ts:107

___

### post

• **post**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.post

#### Defined in

node_modules/fastify/types/instance.d.ts:103

___

### prefix

• **prefix**: `string`

#### Inherited from

FastifyInstance.prefix

#### Defined in

node_modules/fastify/types/instance.d.ts:35

___

### put

• **put**: `RouteShorthandMethod`<`Server`, `IncomingMessage`, `ServerResponse`\>

#### Inherited from

FastifyInstance.put

#### Defined in

node_modules/fastify/types/instance.d.ts:104

___

### register

• **register**: `FastifyRegister`<`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> & `PromiseLike`<`undefined`\>\>

#### Inherited from

FastifyInstance.register

#### Defined in

node_modules/fastify/types/instance.d.ts:89

___

### removeAllContentTypeParsers

• **removeAllContentTypeParsers**: `removeAllContentTypeParsers`

Remove all content type parsers, including the default ones

#### Inherited from

FastifyInstance.removeAllContentTypeParsers

#### Defined in

node_modules/fastify/types/instance.d.ts:431

___

### removeContentTypeParser

• **removeContentTypeParser**: `removeContentTypeParser`

Remove an existing content type parser

#### Inherited from

FastifyInstance.removeContentTypeParser

#### Defined in

node_modules/fastify/types/instance.d.ts:427

___

### server

• **server**: `Server`

#### Inherited from

FastifyInstance.server

#### Defined in

node_modules/fastify/types/instance.d.ts:34

___

### swaggerCSP

• **swaggerCSP**: `any`

#### Defined in

[src/types.ts:9](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/types.ts#L9)

___

### version

• **version**: `string`

#### Inherited from

FastifyInstance.version

#### Defined in

node_modules/fastify/types/instance.d.ts:36

## Methods

### addHook

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

`onRequest` is the first hook to be executed in the request lifecycle. There was no previous hook, the next hook will be `preParsing`.
 Notice: in the `onRequest` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRequest"`` |
| `hook` | `onRequestHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:118

▸ **addHook**<`RouteGeneric`, `ContextConfig`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRequest"`` |
| `hook` | `onRequestAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:127

▸ **addHook**<`RouteGeneric`, `ContextConfig`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

`preParsing` is the second hook to be executed in the request lifecycle. The previous hook was `onRequest`, the next hook will be `preValidation`.
Notice: in the `preParsing` hook, request.body will always be null, because the body parsing happens before the `preHandler` hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preParsing"`` |
| `hook` | `preParsingHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:139

▸ **addHook**<`RouteGeneric`, `ContextConfig`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preParsing"`` |
| `hook` | `preParsingAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:147

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

`preValidation` is the third hook to be executed in the request lifecycle. The previous hook was `preParsing`, the next hook will be `preHandler`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preValidation"`` |
| `hook` | `preValidationHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:158

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preValidation"`` |
| `hook` | `preValidationAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:167

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

`preHandler` is the fourth hook to be executed in the request lifecycle. The previous hook was `preValidation`, the next hook will be `preSerialization`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preHandler"`` |
| `hook` | `preHandlerHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:179

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preHandler"`` |
| `hook` | `preHandlerAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:188

▸ **addHook**<`PreSerializationPayload`, `RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

`preSerialization` is the fifth hook to be executed in the request lifecycle. The previous hook was `preHandler`, the next hook will be `onSend`.
 Note: the hook is NOT called if the payload is a string, a Buffer, a stream or null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PreSerializationPayload` | `unknown` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preSerialization"`` |
| `hook` | `preSerializationHookHandler`<`PreSerializationPayload`, `Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:201

▸ **addHook**<`PreSerializationPayload`, `RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PreSerializationPayload` | `unknown` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"preSerialization"`` |
| `hook` | `preSerializationAsyncHookHandler`<`PreSerializationPayload`, `Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:211

▸ **addHook**<`OnSendPayload`, `RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

You can change the payload with the `onSend` hook. It is the sixth hook to be executed in the request lifecycle. The previous hook was `preSerialization`, the next hook will be `onResponse`.
Note: If you change the payload, you may only change it to a string, a Buffer, a stream, or null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OnSendPayload` | `unknown` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onSend"`` |
| `hook` | `onSendHookHandler`<`OnSendPayload`, `Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:225

▸ **addHook**<`OnSendPayload`, `RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OnSendPayload` | `unknown` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onSend"`` |
| `hook` | `onSendAsyncHookHandler`<`OnSendPayload`, `Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:235

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

`onResponse` is the seventh and last hook in the request hook lifecycle. The previous hook was `onSend`, there is no next hook.
The onResponse hook is executed when a response has been sent, so you will not be able to send more data to the client. It can however be useful for sending data to external services, for example to gather statistics.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onResponse"`` |
| `hook` | `onResponseHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:249

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onResponse"`` |
| `hook` | `onResponseAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:258

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

`onTimeout` is useful if you need to monitor the request timed out in your service. (if the `connectionTimeout` property is set on the fastify instance)
The onTimeout hook is executed when a request is timed out and the http socket has been hanged up. Therefore you will not be able to send data to the client.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onTimeout"`` |
| `hook` | `onTimeoutHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:271

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onTimeout"`` |
| `hook` | `onTimeoutAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:280

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

This hook is useful if you need to do some custom error logging or add some specific header in case of error.
It is not intended for changing the error, and calling reply.send will throw an exception.
This hook will be executed only after the customErrorHandler has been executed, and only if the customErrorHandler sends an error back to the user (Note that the default customErrorHandler always sends the error back to the user).
Notice: unlike the other hooks, pass an error to the done function is not supported.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onError"`` |
| `hook` | `onErrorHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyError`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:295

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onError"`` |
| `hook` | `onErrorAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyError`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:304

▸ **addHook**<`RouteGeneric`, `ContextConfig`, `Logger`\>(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

Triggered when a new route is registered. Listeners are passed a routeOptions object as the sole parameter. The interface is synchronous, and, as such, the listener does not get passed a callback

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `Logger` | extends `FastifyLoggerInstance` = `FastifyLoggerInstance` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRoute"`` |
| `hook` | `onRouteHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `Logger`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `Logger`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:318

▸ **addHook**(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Triggered when a new plugin is registered and a new encapsulation context is created. The hook will be executed before the registered code.
This hook can be useful if you are developing a plugin that needs to know when a plugin context is formed, and you want to operate in that specific context.
Note: This hook will not be called if a plugin is wrapped inside fastify-plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onRegister"`` |
| `hook` | `onRegisterHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`, `FastifyPluginOptions`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:332

▸ **addHook**(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Triggered when fastify.listen() or fastify.ready() is invoked to start the server. It is useful when plugins need a "ready" event, for example to load data before the server start listening for requests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onReady"`` |
| `hook` | `onReadyHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:340

▸ **addHook**(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onReady"`` |
| `hook` | `onReadyAsyncHookHandler` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:345

▸ **addHook**(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Triggered when fastify.close() is invoked to stop the server. It is useful when plugins need a "shutdown" event, for example to close an open connection to a database.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onClose"`` |
| `hook` | `onCloseHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:353

▸ **addHook**(`name`, `hook`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"onClose"`` |
| `hook` | `onCloseAsyncHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addHook

#### Defined in

node_modules/fastify/types/instance.d.ts:358

___

### addSchema

▸ **addSchema**(`schema`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `unknown` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.addSchema

#### Defined in

node_modules/fastify/types/instance.d.ts:39

___

### after

▸ **after**(): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> & `PromiseLike`<`undefined`\>

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> & `PromiseLike`<`undefined`\>

#### Inherited from

FastifyInstance.after

#### Defined in

node_modules/fastify/types/instance.d.ts:43

▸ **after**(`afterListener`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterListener` | (`err`: `Error`) => `void` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.after

#### Defined in

node_modules/fastify/types/instance.d.ts:44

___

### close

▸ **close**(): `Promise`<`undefined`\>

#### Returns

`Promise`<`undefined`\>

#### Inherited from

FastifyInstance.close

#### Defined in

node_modules/fastify/types/instance.d.ts:46

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

node_modules/fastify/types/instance.d.ts:47

___

### decorate

▸ **decorate**<`T`\>(`property`, `value`, `dependencies?`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` \| `symbol` |
| `value` | `T` extends (...`args`: `any`[]) => `any` ? (`this`: `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>, ...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\> : `T` |
| `dependencies?` | `string`[] |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.decorate

#### Defined in

node_modules/fastify/types/instance.d.ts:50

___

### decorateReply

▸ **decorateReply**<`T`\>(`property`, `value`, `dependencies?`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` \| `symbol` |
| `value` | `T` extends (...`args`: `any`[]) => `any` ? (`this`: `FastifyReply`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGenericInterface`, `unknown`\>, ...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\> : `T` |
| `dependencies?` | `string`[] |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.decorateReply

#### Defined in

node_modules/fastify/types/instance.d.ts:64

___

### decorateRequest

▸ **decorateRequest**<`T`\>(`property`, `value`, `dependencies?`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` \| `symbol` |
| `value` | `T` extends (...`args`: `any`[]) => `any` ? (`this`: `FastifyRequest`<`RouteGenericInterface`, `Server`, `IncomingMessage`, `unknown`, `FastifyLoggerInstance`\>, ...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\> : `T` |
| `dependencies?` | `string`[] |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.decorateRequest

#### Defined in

node_modules/fastify/types/instance.d.ts:57

___

### errorHandler

▸ **errorHandler**(`error`, `request`, `reply`): `void`

Fastify default error handler

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `FastifyError` |
| `request` | `FastifyRequest`<`RouteGenericInterface`, `Server`, `IncomingMessage`, `unknown`, `FastifyLoggerInstance`\> |
| `reply` | `FastifyReply`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGenericInterface`, `unknown`\> |

#### Returns

`void`

#### Inherited from

FastifyInstance.errorHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:381

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

node_modules/fastify/types/instance.d.ts:40

___

### getSchemas

▸ **getSchemas**(): `Record`<`string`, `unknown`\>

#### Returns

`Record`<`string`, `unknown`\>

#### Inherited from

FastifyInstance.getSchemas

#### Defined in

node_modules/fastify/types/instance.d.ts:41

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

node_modules/fastify/types/instance.d.ts:71

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

node_modules/fastify/types/instance.d.ts:73

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

node_modules/fastify/types/instance.d.ts:72

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

node_modules/fastify/types/instance.d.ts:75

▸ **inject**(`opts`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `string` \| `InjectOptions` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

FastifyInstance.inject

#### Defined in

node_modules/fastify/types/instance.d.ts:76

▸ **inject**(): `Chain`

#### Returns

`Chain`

#### Inherited from

FastifyInstance.inject

#### Defined in

node_modules/fastify/types/instance.d.ts:77

___

### listen

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

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:79

▸ **listen**(`port`, `address`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `address` | `string` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:80

▸ **listen**(`port`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:81

▸ **listen**(`port`, `address?`, `backlog?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `string` \| `number` |
| `address?` | `string` |
| `backlog?` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:82

▸ **listen**(`opts`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.backlog?` | `number` |
| `opts.host?` | `string` |
| `opts.port` | `number` |
| `callback` | (`err`: ``null`` \| `Error`, `address`: `string`) => `void` |

#### Returns

`void`

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:83

▸ **listen**(`opts`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.backlog?` | `number` |
| `opts.host?` | `string` |
| `opts.port` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

FastifyInstance.listen

#### Defined in

node_modules/fastify/types/instance.d.ts:84

___

### printPlugins

▸ **printPlugins**(): `string`

Prints the representation of the plugin tree used by avvio, the plugin registration system

#### Returns

`string`

#### Inherited from

FastifyInstance.printPlugins

#### Defined in

node_modules/fastify/types/instance.d.ts:449

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

node_modules/fastify/types/instance.d.ts:444

___

### ready

▸ **ready**(): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> & `PromiseLike`<`undefined`\>

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> & `PromiseLike`<`undefined`\>

#### Inherited from

FastifyInstance.ready

#### Defined in

node_modules/fastify/types/instance.d.ts:86

▸ **ready**(`readyListener`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readyListener` | (`err`: `Error`) => `void` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.ready

#### Defined in

node_modules/fastify/types/instance.d.ts:87

___

### route

▸ **route**<`RouteGeneric`, `ContextConfig`, `SchemaCompiler`\>(`opts`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | `unknown` |
| `SchemaCompiler` | `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `RouteOptions`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `SchemaCompiler`, `FastifyLoggerInstance`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.route

#### Defined in

node_modules/fastify/types/instance.d.ts:95

___

### routing

▸ **routing**(`req`, `res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse` |

#### Returns

`void`

#### Inherited from

FastifyInstance.routing

#### Defined in

node_modules/fastify/types/instance.d.ts:91

___

### setDefaultRoute

▸ **setDefaultRoute**(`defaultRoute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultRoute` | `DefaultRoute`<`IncomingMessage`, `ServerResponse`\> |

#### Returns

`void`

#### Inherited from

FastifyInstance.setDefaultRoute

#### Defined in

node_modules/fastify/types/instance.d.ts:93

___

### setErrorHandler

▸ **setErrorHandler**<`TError`, `RouteGeneric`\>(`handler`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Set a function that will be called whenever an error happens

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | extends `Error` = `FastifyError` |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`this`: `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>, `error`: `TError`, `request`: `FastifyRequest`<`RouteGeneric`, `Server`, `IncomingMessage`, `unknown`, `FastifyLoggerInstance`\>, `reply`: `FastifyReply`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `unknown`\>) => `void` \| `Promise`<`void` \| `RouteGeneric`[``"Reply"``]\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setErrorHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:386

___

### setNotFoundHandler

▸ **setNotFoundHandler**<`RouteGeneric`\>(`handler`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Set the 404 handler

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`request`: `FastifyRequest`<`RouteGeneric`, `Server`, `IncomingMessage`, `unknown`, `FastifyLoggerInstance`\>, `reply`: `FastifyReply`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `unknown`\>) => `void` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setNotFoundHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:366

▸ **setNotFoundHandler**<`RouteGeneric`, `ContextConfig`\>(`opts`, `handler`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RouteGeneric` | extends `RouteGenericInterface` = `RouteGenericInterface` |
| `ContextConfig` | extends `unknown` = `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.preHandler?` | `preHandlerHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\> \| `preHandlerHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\>[] |
| `opts.preValidation?` | `preValidationHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\> \| `preValidationHookHandler`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `ContextConfig`, `FastifyLoggerInstance`\>[] |
| `handler` | (`request`: `FastifyRequest`<`RouteGeneric`, `Server`, `IncomingMessage`, `unknown`, `FastifyLoggerInstance`\>, `reply`: `FastifyReply`<`Server`, `IncomingMessage`, `ServerResponse`, `RouteGeneric`, `unknown`\>) => `void` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setNotFoundHandler

#### Defined in

node_modules/fastify/types/instance.d.ts:370

___

### setReplySerializer

▸ **setReplySerializer**(`replySerializer`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Set the reply serializer for all routes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replySerializer` | (`payload`: `unknown`, `statusCode`: `number`) => `string` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setReplySerializer

#### Defined in

node_modules/fastify/types/instance.d.ts:413

___

### setSchemaController

▸ **setSchemaController**(`schemaControllerOpts`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Set the schema controller for all routes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaControllerOpts` | `FastifySchemaControllerOptions` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setSchemaController

#### Defined in

node_modules/fastify/types/instance.d.ts:408

___

### setSchemaErrorFormatter

▸ **setSchemaErrorFormatter**(`errorFormatter`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorFormatter` | (`errors`: `FastifySchemaValidationError`[], `dataVar`: `string`) => `Error` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setSchemaErrorFormatter

#### Defined in

node_modules/fastify/types/instance.d.ts:418

___

### setSerializerCompiler

▸ **setSerializerCompiler**<`T`\>(`schemaCompiler`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Set the schema serializer for all routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCompiler` | `FastifySerializerCompiler`<`T`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setSerializerCompiler

#### Defined in

node_modules/fastify/types/instance.d.ts:403

___

### setValidatorCompiler

▸ **setValidatorCompiler**<`T`\>(`schemaCompiler`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

Set the schema validator for all routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `FastifySchema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCompiler` | `FastifySchemaCompiler`<`T`\> |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Inherited from

FastifyInstance.setValidatorCompiler

#### Defined in

node_modules/fastify/types/instance.d.ts:398
