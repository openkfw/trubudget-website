# httpd/router
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / httpd/router

## Table of contents

### Functions

- [registerRoutes](httpd_router.md#registerroutes)

## Functions

### registerRoutes

▸ **registerRoutes**(`server`, `conn`, `urlPrefix`, `blockchainHost`, `blockchainPort`, `storageServiceClient`, `invalidateCache`): `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\> |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `urlPrefix` | `string` |
| `blockchainHost` | `string` |
| `blockchainPort` | `number` |
| `storageServiceClient` | [`default`](../classes/service_Client_storage_service.default.md) |
| `invalidateCache` | () => `void` |

#### Returns

`FastifyInstance`<`Server`, `IncomingMessage`, `ServerResponse`, `FastifyLoggerInstance`\>

#### Defined in

[src/httpd/router.ts:208](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/httpd/router.ts#L208)
