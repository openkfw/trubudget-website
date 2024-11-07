# service/global\_permission\_grant
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/global\_permission\_grant

## Table of contents

### Functions

- [grantGlobalPermission](service_global_permission_grant.md#grantglobalpermission)

## Functions

### grantGlobalPermission

▸ **grantGlobalPermission**(`conn`, `ctx`, `serviceUser`, `serviceUserOrganization`, `grantee`, `permission`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `serviceUserOrganization` | `string` |
| `grantee` | `string` |
| `permission` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/global_permission_grant.ts:17](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/global_permission_grant.ts#L17)
