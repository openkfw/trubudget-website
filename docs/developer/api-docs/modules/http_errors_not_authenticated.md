# http\_errors/not\_authenticated
[Api Code Documentation](../README.md) / [Exports](../modules.md) / http\_errors/not\_authenticated

## Table of contents

### Variables

- [schema](http_errors_not_authenticated.md#schema)

## Variables

### schema

• `Const` **schema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `properties` | \{ `apiVersion`: \{ `example`: `string` = "1.0"; `type`: `string` = "string" } ; `error`: \{ `properties`: \{ `code`: \{ `example`: `string` = "401"; `type`: `string` = "string" } ; `message`: \{ `example`: `string` = "A valid bearer-type HTTP authorization token (JWT) is required for this route."; `type`: `string` = "string" }  } ; `type`: `string` = "object" }  } |
| `properties.apiVersion` | \{ `example`: `string` = "1.0"; `type`: `string` = "string" } |
| `properties.apiVersion.example` | `string` |
| `properties.apiVersion.type` | `string` |
| `properties.error` | \{ `properties`: \{ `code`: \{ `example`: `string` = "401"; `type`: `string` = "string" } ; `message`: \{ `example`: `string` = "A valid bearer-type HTTP authorization token (JWT) is required for this route."; `type`: `string` = "string" }  } ; `type`: `string` = "object" } |
| `properties.error.properties` | \{ `code`: \{ `example`: `string` = "401"; `type`: `string` = "string" } ; `message`: \{ `example`: `string` = "A valid bearer-type HTTP authorization token (JWT) is required for this route."; `type`: `string` = "string" }  } |
| `properties.error.properties.code` | \{ `example`: `string` = "401"; `type`: `string` = "string" } |
| `properties.error.properties.code.example` | `string` |
| `properties.error.properties.code.type` | `string` |
| `properties.error.properties.message` | \{ `example`: `string` = "A valid bearer-type HTTP authorization token (JWT) is required for this route."; `type`: `string` = "string" } |
| `properties.error.properties.message.example` | `string` |
| `properties.error.properties.message.type` | `string` |
| `properties.error.type` | `string` |
| `type` | `string` |

#### Defined in

[src/http_errors/not_authenticated.ts:1](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/http_errors/not_authenticated.ts#L1)
