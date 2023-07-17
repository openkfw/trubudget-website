# notification\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / notification\_list

## Table of contents

### Functions

- [addHttpHandler](notification_list.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/notification.list` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/notification_list.ts:402](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/notification_list.ts#L402)
