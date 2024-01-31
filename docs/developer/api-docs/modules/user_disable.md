# user\_disable
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_disable

## Table of contents

### Functions

- [addHttpHandler](user_disable.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.disableUser` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service Service object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_disable.ts:112](https://github.com/openkfw/TruBudget/blob/965031f/api/src/user_disable.ts#L112)
