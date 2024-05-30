# workflowitem\_delete\_document
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_delete\_document

## Table of contents

### Functions

- [addHttpHandler](workflowitem_delete_document.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.deleteDocument` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | [`Service`](../interfaces/service_workflowitem_document_delete.Service.md) | the service [Service](../interfaces/service_workflowitem_document_delete.Service.md) object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_delete_document.ts:98](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/workflowitem_delete_document.ts#L98)
