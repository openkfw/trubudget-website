# workflowitem\_view\_history
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_view\_history

## Table of contents

### Functions

- [addHttpHandler](workflowitem_view_history.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.viewHistory` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_view_history.ts:257](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/workflowitem_view_history.ts#L257)
