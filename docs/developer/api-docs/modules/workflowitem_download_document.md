# workflowitem\_download\_document
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_download\_document

## Table of contents

### Functions

- [addHttpHandler](workflowitem_download_document.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.downloadDocument` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_download_document.ts:113](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/workflowitem_download_document.ts#L113)
