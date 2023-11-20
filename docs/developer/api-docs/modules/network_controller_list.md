# network/controller/list
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/controller/list

## Table of contents

### Functions

- [getNodeList](network_controller_list.md#getnodelist)

## Functions

### getNodeList

▸ **getNodeList**(`conn`, `ctx`, `issuer`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

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

[src/network/controller/list.ts:41](https://github.com/openkfw/TruBudget/blob/92640998/api/src/network/controller/list.ts#L41)
