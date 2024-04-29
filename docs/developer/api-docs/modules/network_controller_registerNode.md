# network/controller/registerNode
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/controller/registerNode

## Table of contents

### Functions

- [registerNode](network_controller_registerNode.md#registernode)
- [registerNodeManual](network_controller_registerNode.md#registernodemanual)

## Functions

### registerNode

▸ **registerNode**(`multichain`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `req` | `any` |

#### Returns

`Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/network/controller/registerNode.ts:12](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/network/controller/registerNode.ts#L12)

___

### registerNodeManual

▸ **registerNodeManual**(`conn`, `ctx`, `issuer`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `req` | `any` |

#### Returns

`Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/network/controller/registerNode.ts:50](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/network/controller/registerNode.ts#L50)
