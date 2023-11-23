# subproject\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_create

## Table of contents

### Functions

- [addHttpHandler](subproject_create.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/project.createSubproject` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_create.ts:192](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/subproject_create.ts#L192)
