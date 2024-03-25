# group\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / group\_create

## Table of contents

### Functions

- [addHttpHandler](group_create.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.createGroup` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/group_create.ts:164](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/group_create.ts#L164)
