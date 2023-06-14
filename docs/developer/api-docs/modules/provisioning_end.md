# provisioning\_end
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / provisioning\_end

## Table of contents

### Functions

- [addHttpHandler](provisioning_end.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/provisioning.end` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/provisioning_end.ts:98](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/provisioning_end.ts#L98)
