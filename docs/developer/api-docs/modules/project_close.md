# project\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_close

## Table of contents

### Functions

- [addHttpHandler](project_close.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/project.close`` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service {@link Service} object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_close.ts:108](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/project_close.ts#L108)