# service/workflowitem\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_permission\_grant

## Table of contents

### References

- [RequestData](service_workflowitem_permission_grant.md#requestdata)

### Functions

- [grantWorkflowitemPermission](service_workflowitem_permission_grant.md#grantworkflowitempermission)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### grantWorkflowitemPermission

▸ **grantWorkflowitemPermission**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `grantee`, `intent`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_permission_grant.ts:33](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/workflowitem_permission_grant.ts#L33)
