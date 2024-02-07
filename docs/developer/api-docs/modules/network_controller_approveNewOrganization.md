# network/controller/approveNewOrganization
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/controller/approveNewOrganization

## Table of contents

### Functions

- [approveNewOrganization](network_controller_approveNewOrganization.md#approveneworganization)

## Functions

### approveNewOrganization

▸ **approveNewOrganization**(`conn`, `ctx`, `issuer`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

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

[src/network/controller/approveNewOrganization.ts:10](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/network/controller/approveNewOrganization.ts#L10)
