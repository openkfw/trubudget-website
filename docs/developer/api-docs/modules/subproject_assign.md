# subproject\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_assign

## Table of contents

### Functions

- [addHttpHandler](subproject_assign.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.assign` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_assign.ts:122](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/subproject_assign.ts#L122)
