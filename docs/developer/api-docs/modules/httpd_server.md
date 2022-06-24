# httpd/server
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/server

## Table of contents

### Functions

- [createBasicApp](httpd_server.md#createbasicapp)

## Functions

### createBasicApp

▸ **createBasicApp**(`jwtSecret`, `urlPrefix`, `apiPort`, `swaggerBasePath`, `accessControlAllowOrigin`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwtSecret` | `string` |
| `urlPrefix` | `string` |
| `apiPort` | `number` |
| `swaggerBasePath` | `string` |
| `accessControlAllowOrigin` | `string` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Defined in

[src/httpd/server.ts:108](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/httpd/server.ts#L108)
