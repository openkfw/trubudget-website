# project\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_update

## Table of contents

### Functions

- [addHttpHandler](project_update.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/project.update` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_update.ts:134](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/project_update.ts#L134)
