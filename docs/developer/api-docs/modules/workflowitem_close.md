# workflowitem\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_close

## Table of contents

### Functions

- [addHttpHandler](workflowitem_close.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.close` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_close.ts:127](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/workflowitem_close.ts#L127)
