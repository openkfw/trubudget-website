# provisioning\_start
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / provisioning\_start

## Table of contents

### Functions

- [addHttpHandler](provisioning_start.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/provisioning.start` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/provisioning_start.ts:99](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/provisioning_start.ts#L99)
