# network/controller/vote
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / network/controller/vote

## Table of contents

### Functions

- [getCurrentVote](network_controller_vote.md#getcurrentvote)
- [voteForNetworkPermission](network_controller_vote.md#votefornetworkpermission)

## Functions

### getCurrentVote

▸ **getCurrentVote**(`multichain`, `callerAddress`, `targetAddress`): `Promise`\<[`T`](network_model_AccessVote.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multichain` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `callerAddress` | `string` |
| `targetAddress` | `string` |

#### Returns

`Promise`\<[`T`](network_model_AccessVote.md#t)\>

#### Defined in

[src/network/controller/vote.ts:62](https://github.com/openkfw/TruBudget/blob/965031f/api/src/network/controller/vote.ts#L62)

___

### voteForNetworkPermission

▸ **voteForNetworkPermission**(`conn`, `ctx`, `issuer`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

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

[src/network/controller/vote.ts:17](https://github.com/openkfw/TruBudget/blob/965031f/api/src/network/controller/vote.ts#L17)
