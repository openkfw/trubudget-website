# workflowitem\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_assign

## Table of contents

### Functions

- [addHttpHandler](workflowitem_assign.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.assign` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_assign.ts:126](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/workflowitem_assign.ts#L126)
