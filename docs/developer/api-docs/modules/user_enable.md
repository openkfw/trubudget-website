# user\_enable
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / user\_enable

## Table of contents

### Functions

- [addHttpHandler](user_enable.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`, `service`): `void`

Creates an http handler that handles incoming http requests for the `/global.enableUser` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |
| `service` | `Service` | the service {@link Service} object used to offer an interface to the domain logic |

#### Returns

`void`

#### Defined in

[src/user_enable.ts:112](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/user_enable.ts#L112)
