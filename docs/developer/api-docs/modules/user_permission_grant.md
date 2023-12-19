# user\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_permission\_grant

## Table of contents

### Functions

- [addHttpHandler](user_permission_grant.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/user.intent.grantPermission` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_permission_grant.ts:128](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/user_permission_grant.ts#L128)
