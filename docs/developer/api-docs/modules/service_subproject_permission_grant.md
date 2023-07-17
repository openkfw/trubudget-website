# service/subproject\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_permission\_grant

## Table of contents

### References

- [RequestData](service_subproject_permission_grant.md#requestdata)

### Functions

- [grantSubprojectPermission](service_subproject_permission_grant.md#grantsubprojectpermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### grantSubprojectPermission

▸ **grantSubprojectPermission**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `grantee`, `intent`): `Promise`<[`Type`](result.md#type)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`<[`Type`](result.md#type)<`void`\>\>

#### Defined in

[src/service/subproject_permission_grant.ts:17](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/subproject_permission_grant.ts#L17)
