# service/domain/workflow/global\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permission\_revoke

## Table of contents

### Functions

- [revokeGlobalPermission](service_domain_workflow_global_permission_revoke.md#revokeglobalpermission)

## Functions

### revokeGlobalPermission

▸ **revokeGlobalPermission**(`ctx`, `issuer`, `issuerOrganization`, `revokee`, `intent`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/global_permission_revoke.ts:23](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/global_permission_revoke.ts#L23)
