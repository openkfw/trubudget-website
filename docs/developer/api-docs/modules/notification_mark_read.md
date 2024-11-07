# notification\_mark\_read
[Api Code Documentation](../README.md) / [Exports](../modules.md) / notification\_mark\_read

## Table of contents

### Functions

- [addHttpHandler](notification_mark_read.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/notification.markRead` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/notification_mark_read.ts:114](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/notification_mark_read.ts#L114)
