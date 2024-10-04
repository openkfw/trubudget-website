# project\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_create

## Table of contents

### Functions

- [addHttpHandler](project_create.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.createProject` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_create.ts:173](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/project_create.ts#L173)
