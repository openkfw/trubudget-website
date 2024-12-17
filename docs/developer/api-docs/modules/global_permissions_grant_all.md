# global\_permissions\_grant\_all
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / global\_permissions\_grant\_all

## Table of contents

### Functions

- [addHttpHandler](global_permissions_grant_all.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.grantAllPermissions` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/global_permissions_grant_all.ts:121](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/global_permissions_grant_all.ts#L121)
