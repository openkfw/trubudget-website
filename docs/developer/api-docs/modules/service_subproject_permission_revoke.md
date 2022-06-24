# service/subproject\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_permission\_revoke

## Table of contents

### References

- [RequestData](service_subproject_permission_revoke.md#requestdata)

### Functions

- [revokeSubprojectPermission](service_subproject_permission_revoke.md#revokesubprojectpermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### revokeSubprojectPermission

▸ **revokeSubprojectPermission**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `revokee`, `intent`): `Promise`<[`Type`](result.md#type)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`<[`Type`](result.md#type)<`void`\>\>

#### Defined in

[src/service/subproject_permission_revoke.ts:17](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/subproject_permission_revoke.ts#L17)
