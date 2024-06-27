# global\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / global\_permission\_revoke

## Table of contents

### Functions

- [addHttpHandler](global_permission_revoke.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.revokePermission` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/global_permission_revoke.ts:117](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/global_permission_revoke.ts#L117)
