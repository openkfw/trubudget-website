# workflowitem\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_create

## Table of contents

### Functions

- [addHttpHandler](workflowitem_create.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.createWorkflowitem` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | [`Service`](../interfaces/service_workflowitem_create.Service.md) | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_create.ts:197](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/workflowitem_create.ts#L197)
