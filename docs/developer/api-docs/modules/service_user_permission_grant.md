# service/user\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_permission\_grant

## Table of contents

### References

- [RequestData](service_user_permission_grant.md#requestdata)

### Functions

- [grantUserPermission](service_user_permission_grant.md#grantuserpermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### grantUserPermission

▸ **grantUserPermission**(`conn`, `ctx`, `serviceUser`, `granterOrganization`, `userId`, `grantee`, `intent`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `granterOrganization` | `string` |
| `userId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/user_permission_grant.ts:16](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/user_permission_grant.ts#L16)
