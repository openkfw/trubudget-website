# service/domain/workflow/project\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_permission\_revoke

## Table of contents

### Functions

- [revokeProjectPermission](service_domain_workflow_project_permission_revoke.md#revokeprojectpermission)

## Functions

### revokeProjectPermission

▸ **revokeProjectPermission**(`ctx`, `issuer`, `projectId`, `revokee`, `intent`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/project_permission_revoke.ts:22](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_permission_revoke.ts#L22)
