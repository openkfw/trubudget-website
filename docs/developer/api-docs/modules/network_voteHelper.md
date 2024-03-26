# network/voteHelper
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/voteHelper

## Table of contents

### Functions

- [voteHelper](network_voteHelper.md#votehelper)

## Functions

### voteHelper

▸ **voteHelper**(`conn`, `ctx`, `issuer`, `user`, `targetAddress`, `vote`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `user` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `targetAddress` | `string` |
| `vote` | [`T`](network_model_AccessVote.md#t) |

#### Returns

`Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/network/voteHelper.ts:14](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/network/voteHelper.ts#L14)
