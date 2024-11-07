# global\_permission\_grant
[Api Code Documentation](../README.md) / [Exports](../modules.md) / global\_permission\_grant

## Table of contents

### Functions

- [addHttpHandler](global_permission_grant.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.grantPermission` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/global_permission_grant.ts:118](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/global_permission_grant.ts#L118)
