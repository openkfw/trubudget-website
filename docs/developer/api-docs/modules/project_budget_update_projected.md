# project\_budget\_update\_projected
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_budget\_update\_projected

## Table of contents

### Functions

- [addHttpHandler](project_budget_update_projected.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/project.budget.updateProjected` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_budget_update_projected.ts:146](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/project_budget_update_projected.ts#L146)
