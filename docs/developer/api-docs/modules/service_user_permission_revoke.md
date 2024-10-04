# service/user\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_permission\_revoke

## Table of contents

### References

- [RequestData](service_user_permission_revoke.md#requestdata)

### Functions

- [revokeUserPermission](service_user_permission_revoke.md#revokeuserpermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### revokeUserPermission

▸ **revokeUserPermission**(`conn`, `ctx`, `serviceUser`, `revokerOrganization`, `userId`, `revokee`, `intent`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `revokerOrganization` | `string` |
| `userId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/user_permission_revoke.ts:19](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/user_permission_revoke.ts#L19)
