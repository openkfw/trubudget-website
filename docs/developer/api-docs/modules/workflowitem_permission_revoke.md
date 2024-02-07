# workflowitem\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / workflowitem\_permission\_revoke

## Table of contents

### Functions

- [addHttpHandler](workflowitem_permission_revoke.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/workflowitem.intent.revokePermission` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/workflowitem_permission_revoke.ts:134](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/workflowitem_permission_revoke.ts#L134)
