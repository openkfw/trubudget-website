# httpd/server
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/server

## Table of contents

### Functions

- [createBasicApp](httpd_server.md#createbasicapp)

## Functions

### createBasicApp

▸ **createBasicApp**(`jwtSecret`, `urlPrefix`, `apiPort`, `accessControlAllowOrigin`, `rateLimit`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwtSecret` | `string` |
| `urlPrefix` | `string` |
| `apiPort` | `number` |
| `accessControlAllowOrigin` | `string` |
| `rateLimit` | `undefined` \| `number` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Defined in

[src/httpd/server.ts:139](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/httpd/server.ts#L139)
