# subproject\_view\_details
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_view\_details

## Table of contents

### Functions

- [addHttpHandler](subproject_view_details.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.viewDetails` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_view_details.ts:218](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/subproject_view_details.ts#L218)
