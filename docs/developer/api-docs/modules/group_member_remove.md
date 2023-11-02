# group\_member\_remove
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / group\_member\_remove

## Table of contents

### Functions

- [addHttpHandler](group_member_remove.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/group.removeUser` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/group_member_remove.ts:121](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/group_member_remove.ts#L121)
