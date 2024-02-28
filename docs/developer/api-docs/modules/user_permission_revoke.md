# user\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_permission\_revoke

## Table of contents

### Functions

- [addHttpHandler](user_permission_revoke.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/user.intent.revokePermission` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_permission_revoke.ts:128](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/user_permission_revoke.ts#L128)
