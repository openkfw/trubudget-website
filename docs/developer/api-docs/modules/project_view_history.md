# project\_view\_history
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_view\_history

## Table of contents

### Functions

- [addHttpHandler](project_view_history.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/project.viewHistory` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_view_history.ts:258](https://github.com/openkfw/TruBudget/blob/0804644/api/src/project_view_history.ts#L258)
