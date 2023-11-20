# network/controller/approveNewNodeForExistingOrganization
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/controller/approveNewNodeForExistingOrganization

## Table of contents

### Functions

- [approveNewNodeForExistingOrganization](network_controller_approveNewNodeForExistingOrganization.md#approvenewnodeforexistingorganization)

## Functions

### approveNewNodeForExistingOrganization

▸ **approveNewNodeForExistingOrganization**(`conn`, `ctx`, `issuer`, `req`): `Promise`<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `req` | `any` |

#### Returns

`Promise`<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/network/controller/approveNewNodeForExistingOrganization.ts:10](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/network/controller/approveNewNodeForExistingOrganization.ts#L10)
