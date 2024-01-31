# service/domain/workflow/subproject\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_permission\_grant

## Table of contents

### Functions

- [grantSubprojectPermission](service_domain_workflow_subproject_permission_grant.md#grantsubprojectpermission)

## Functions

### grantSubprojectPermission

▸ **grantSubprojectPermission**(`ctx`, `issuer`, `projectId`, `subprojectId`, `grantee`, `intent`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/subproject_permission_grant.ts:26](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/subproject_permission_grant.ts#L26)
