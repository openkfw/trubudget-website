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
| `service` | [`Service`](../interfaces/service_subproject_create.Service.md) | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_create.ts:180](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/subproject_create.ts#L180)
