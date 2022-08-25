# subproject\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / subproject\_permission\_grant

## Table of contents

### Functions

- [addHttpHandler](subproject_permission_grant.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/subproject.intent.grantPermission` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service {@link Service} object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/subproject_permission_grant.ts:127](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/subproject_permission_grant.ts#L127)
