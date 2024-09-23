# service/workflowitem\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_permission\_revoke

## Table of contents

### References

- [RequestData](service_workflowitem_permission_revoke.md#requestdata)

### Functions

- [revokeWorkflowitemPermission](service_workflowitem_permission_revoke.md#revokeworkflowitempermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### revokeWorkflowitemPermission

▸ **revokeWorkflowitemPermission**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `revokee`, `intent`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_permission_revoke.ts:19](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/workflowitem_permission_revoke.ts#L19)
