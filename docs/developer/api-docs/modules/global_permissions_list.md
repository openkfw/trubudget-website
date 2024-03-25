# global\_permissions\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / global\_permissions\_list

## Table of contents

### Functions

- [addHttpHandler](global_permissions_list.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.listPermissions` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/global_permissions_list.ts:63](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/global_permissions_list.ts#L63)
