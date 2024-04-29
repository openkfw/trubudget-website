# service/workflowitem\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_assign

## Table of contents

### Functions

- [assignWorkflowitem](service_workflowitem_assign.md#assignworkflowitem)

## Functions

### assignWorkflowitem

▸ **assignWorkflowitem**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `assignee`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `assignee` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_assign.ts:19](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/workflowitem_assign.ts#L19)
