# user\_listAssignments
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_listAssignments

## Table of contents

### Functions

- [addHttpHandler](user_listAssignments.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.listAssignments` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_listAssignments.ts:86](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/user_listAssignments.ts#L86)
