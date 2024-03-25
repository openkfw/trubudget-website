# httpd/router
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/router

## Table of contents

### Functions

- [registerRoutes](httpd_router.md#registerroutes)

## Functions

### registerRoutes

▸ **registerRoutes**(`server`, `conn`, `urlPrefix`, `blockchainHost`, `blockchainPort`, `storageServiceClient`, `invalidateCache`): `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\> |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `urlPrefix` | `string` |
| `blockchainHost` | `string` |
| `blockchainPort` | `number` |
| `storageServiceClient` | [`default`](../classes/service_Client_storage_service.default.md) |
| `invalidateCache` | () => `void` |

#### Returns

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

#### Defined in

[src/httpd/router.ts:217](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/httpd/router.ts#L217)
