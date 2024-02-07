# workflowitem\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_update

## Table of contents

### Functions

- [addHttpHandler](workflowitem_update.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.update` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_update.ts:167](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/workflowitem_update.ts#L167)
