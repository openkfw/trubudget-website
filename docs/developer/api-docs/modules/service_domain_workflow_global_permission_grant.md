# service/domain/workflow/global\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permission\_grant

## Table of contents

### Functions

- [grantGlobalPermission](service_domain_workflow_global_permission_grant.md#grantglobalpermission)

## Functions

### grantGlobalPermission

▸ **grantGlobalPermission**(`ctx`, `issuer`, `issuerOrganization`, `grantee`, `intent`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/global_permission_grant.ts:21](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/global_permission_grant.ts#L21)
