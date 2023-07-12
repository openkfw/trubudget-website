# service/project\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_permission\_revoke

## Table of contents

### References

- [RequestData](service_project_permission_revoke.md#requestdata)

### Functions

- [revokeProjectPermission](service_project_permission_revoke.md#revokeprojectpermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### revokeProjectPermission

▸ **revokeProjectPermission**(`conn`, `ctx`, `serviceUser`, `projectId`, `revokee`, `intent`): `Promise`<[`Type`](result.md#type)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`<[`Type`](result.md#type)<`void`\>\>

#### Defined in

[src/service/project_permission_revoke.ts:16](https://github.com/openkfw/TruBudget/blob/0804644/api/src/service/project_permission_revoke.ts#L16)
