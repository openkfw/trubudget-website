# app\_latest\_version
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / app\_latest\_version

## Table of contents

### Functions

- [addHttpHandler](app_latest_version.md#addhttphandler)

## Functions

### addHttpHandler

▸ **addHttpHandler**(`server`, `urlPrefix`): `void`

Creates an http handler that handles incoming http requests for the `/app.upgrade` route

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | [`AugmentedFastifyInstance`](../interfaces/types.AugmentedFastifyInstance.md) | the current fastify server instance |
| `urlPrefix` | `string` | the prefix of the http url |

#### Returns

`void`

#### Defined in

[src/app_latest_version.ts:112](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/app_latest_version.ts#L112)
