# service/domain/workflow/subproject\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_permission\_revoke

## Table of contents

### Functions

- [revokeSubprojectPermission](service_domain_workflow_subproject_permission_revoke.md#revokesubprojectpermission)

## Functions

### revokeSubprojectPermission

▸ **revokeSubprojectPermission**(`ctx`, `issuer`, `projectId`, `subprojectId`, `revokee`, `intent`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/subproject_permission_revoke.ts:27](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/subproject_permission_revoke.ts#L27)
