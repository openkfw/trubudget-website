# network/controller/listActive
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/controller/listActive

## Table of contents

### Functions

- [getActiveNodes](network_controller_listActive.md#getactivenodes)

## Functions

### getActiveNodes

▸ **getActiveNodes**(`conn`, `ctx`, `issuer`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `req` | [`AuthenticatedRequest`](../interfaces/httpd_lib.AuthenticatedRequest.md) |

#### Returns

`Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/network/controller/listActive.ts:14](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/network/controller/listActive.ts#L14)
