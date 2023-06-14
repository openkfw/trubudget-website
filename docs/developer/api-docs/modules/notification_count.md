# notification\_count
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / notification\_count

## Table of contents

### Functions

- [addHttpHandler](notification_count.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/notification.count` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/notification_count.ts:74](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/notification_count.ts#L74)
