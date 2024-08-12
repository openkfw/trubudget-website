# service/global\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/global\_permission\_revoke

## Table of contents

### Functions

- [revokeGlobalPermission](service_global_permission_revoke.md#revokeglobalpermission)

## Functions

### revokeGlobalPermission

▸ **revokeGlobalPermission**(`conn`, `ctx`, `serviceUser`, `serviceUserOrganization`, `revokee`, `permission`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `serviceUserOrganization` | `string` |
| `revokee` | `string` |
| `permission` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/global_permission_revoke.ts:15](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/global_permission_revoke.ts#L15)
