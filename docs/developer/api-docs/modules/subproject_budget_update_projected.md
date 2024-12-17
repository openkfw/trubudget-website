# subproject\_budget\_update\_projected
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_budget\_update\_projected

## Table of contents

### Functions

- [addHttpHandler](subproject_budget_update_projected.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.budget.updateProjected` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_budget_update_projected.ts:153](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/subproject_budget_update_projected.ts#L153)
