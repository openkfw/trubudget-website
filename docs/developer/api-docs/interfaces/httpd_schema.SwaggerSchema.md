# SwaggerSchema
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [httpd/schema](../modules/httpd_schema.md) / SwaggerSchema

[httpd/schema](../modules/httpd_schema.md).SwaggerSchema

## Hierarchy

- `FastifySchema`

  ↳ **`SwaggerSchema`**

## Table of contents

### Properties

- [body](httpd_schema.SwaggerSchema.md#body)
- [consumes](httpd_schema.SwaggerSchema.md#consumes)
- [deprecated](httpd_schema.SwaggerSchema.md#deprecated)
- [description](httpd_schema.SwaggerSchema.md#description)
- [externalDocs](httpd_schema.SwaggerSchema.md#externaldocs)
- [headers](httpd_schema.SwaggerSchema.md#headers)
- [hide](httpd_schema.SwaggerSchema.md#hide)
- [operationId](httpd_schema.SwaggerSchema.md#operationid)
- [params](httpd_schema.SwaggerSchema.md#params)
- [produces](httpd_schema.SwaggerSchema.md#produces)
- [querystring](httpd_schema.SwaggerSchema.md#querystring)
- [response](httpd_schema.SwaggerSchema.md#response)
- [security](httpd_schema.SwaggerSchema.md#security)
- [summary](httpd_schema.SwaggerSchema.md#summary)
- [tags](httpd_schema.SwaggerSchema.md#tags)

## Properties

### body

• `Optional` **body**: `unknown`

#### Inherited from

FastifySchema.body

#### Defined in

node_modules/fastify/types/schema.d.ts:11

___

### consumes

• `Optional` **consumes**: `string`[]

#### Overrides

FastifySchema.consumes

#### Defined in

[src/httpd/schema.ts:8](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/schema.ts#L8)

___

### deprecated

• `Optional` **deprecated**: `boolean`

#### Inherited from

FastifySchema.deprecated

#### Defined in

node_modules/@fastify/swagger/index.d.ts:36

___

### description

• **description**: `string`

#### Overrides

FastifySchema.description

#### Defined in

[src/httpd/schema.ts:4](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/schema.ts#L4)

___

### externalDocs

• `Optional` **externalDocs**: `ExternalDocumentationObject` \| `ExternalDocumentationObject`

#### Inherited from

FastifySchema.externalDocs

#### Defined in

node_modules/@fastify/swagger/index.d.ts:42

___

### headers

• `Optional` **headers**: `unknown`

#### Inherited from

FastifySchema.headers

#### Defined in

node_modules/fastify/types/schema.d.ts:14

___

### hide

• `Optional` **hide**: `boolean`

#### Inherited from

FastifySchema.hide

#### Defined in

node_modules/@fastify/swagger/index.d.ts:35

___

### operationId

• `Optional` **operationId**: `string`

OpenAPI operation unique identifier

#### Inherited from

FastifySchema.operationId

#### Defined in

node_modules/@fastify/swagger/index.d.ts:47

___

### params

• `Optional` **params**: `unknown`

#### Inherited from

FastifySchema.params

#### Defined in

node_modules/fastify/types/schema.d.ts:13

___

### produces

• `Optional` **produces**: readonly `string`[]

#### Inherited from

FastifySchema.produces

#### Defined in

node_modules/@fastify/swagger/index.d.ts:41

___

### querystring

• `Optional` **querystring**: `unknown`

#### Inherited from

FastifySchema.querystring

#### Defined in

node_modules/fastify/types/schema.d.ts:12

___

### response

• `Optional` **response**: `unknown`

#### Inherited from

FastifySchema.response

#### Defined in

node_modules/fastify/types/schema.d.ts:15

___

### security

• `Optional` **security**: \{ `[securityLabel: string]`: `string`[];  }[]

#### Overrides

FastifySchema.security

#### Defined in

[src/httpd/schema.ts:7](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/schema.ts#L7)

___

### summary

• **summary**: `string`

#### Overrides

FastifySchema.summary

#### Defined in

[src/httpd/schema.ts:6](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/schema.ts#L6)

___

### tags

• **tags**: `string`[]

#### Overrides

FastifySchema.tags

#### Defined in

[src/httpd/schema.ts:5](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/httpd/schema.ts#L5)
