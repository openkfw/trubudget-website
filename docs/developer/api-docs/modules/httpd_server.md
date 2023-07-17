# httpd/server
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/server

## Table of contents

### Functions

- [createBasicApp](httpd_server.md#createbasicapp)

## Functions

### createBasicApp

▸ **createBasicApp**(`jwtSecret`, `urlPrefix`, `apiPort`, `accessControlAllowOrigin`): `FastifyInstance`<`RawServerDefault`, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwtSecret` | `string` |
| `urlPrefix` | `string` |
| `apiPort` | `number` |
| `accessControlAllowOrigin` | `string` |

#### Returns

`FastifyInstance`<`RawServerDefault`, `IncomingMessage`, `ServerResponse`<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Defined in

[src/httpd/server.ts:133](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/httpd/server.ts#L133)
