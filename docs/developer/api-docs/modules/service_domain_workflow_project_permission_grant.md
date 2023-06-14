# service/domain/workflow/project\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_permission\_grant

## Table of contents

### Functions

- [grantProjectPermission](service_domain_workflow_project_permission_grant.md#grantprojectpermission)

## Functions

### grantProjectPermission

▸ **grantProjectPermission**(`ctx`, `issuer`, `projectId`, `grantee`, `intent`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/project_permission_grant.ts:21](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/workflow/project_permission_grant.ts#L21)
