# provisioning\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / provisioning\_get

## Table of contents

### Functions

- [addHttpHandler](provisioning_get.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/provisioned` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/provisioning_get.ts:71](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/provisioning_get.ts#L71)
