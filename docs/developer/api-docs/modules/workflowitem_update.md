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
| `service` | [`WorkflowitemUpdateServiceInterface`](../interfaces/index.WorkflowitemUpdateServiceInterface.md) | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_update.ts:163](https://github.com/openkfw/TruBudget/blob/2e1b1a6/api/src/workflowitem_update.ts#L163)
