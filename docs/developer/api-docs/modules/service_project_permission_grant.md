# service/project\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_permission\_grant

## Table of contents

### References

- [RequestData](service_project_permission_grant.md#requestdata)

### Functions

- [grantProjectPermission](service_project_permission_grant.md#grantprojectpermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### grantProjectPermission

▸ **grantProjectPermission**(`conn`, `ctx`, `serviceUser`, `projectId`, `grantee`, `intent`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/project_permission_grant.ts:17](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/project_permission_grant.ts#L17)
