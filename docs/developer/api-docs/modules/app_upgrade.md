# app\_upgrade
[Api Code Documentation](../README.md) / [Exports](../modules.md) / app\_upgrade

## Table of contents

### Functions

- [addHttpHandler](app_upgrade.md#addhttphandler)

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

[src/app_upgrade.ts:118](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/app_upgrade.ts#L118)
