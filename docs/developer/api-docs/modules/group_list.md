# group\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / group\_list

## Table of contents

### Functions

- [addHttpHandler](group_list.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/group.list` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/group_list.ts:88](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/group_list.ts#L88)
