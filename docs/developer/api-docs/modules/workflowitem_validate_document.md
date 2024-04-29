# workflowitem\_validate\_document
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_validate\_document

## Table of contents

### Functions

- [addHttpHandler](workflowitem_validate_document.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.validateDocument` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_validate_document.ts:151](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/workflowitem_validate_document.ts#L151)
