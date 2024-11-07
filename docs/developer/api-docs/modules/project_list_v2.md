# project\_list.v2
[Api Code Documentation](../README.md) / [Exports](../modules.md) / project\_list.v2

## Table of contents

### Functions

- [addHttpHandler](project_list_v2.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/v2/project.list` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/project_list.v2.ts:212](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/project_list.v2.ts#L212)
