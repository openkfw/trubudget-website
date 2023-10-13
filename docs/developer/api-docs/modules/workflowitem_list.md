# workflowitem\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_list

## Table of contents

### Functions

- [addHttpHandler](workflowitem_list.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.list` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_list.ts:182](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/workflowitem_list.ts#L182)
