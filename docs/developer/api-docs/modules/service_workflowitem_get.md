# service/workflowitem\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_get

## Table of contents

### Functions

- [getWorkflowitem](service_workflowitem_get.md#getworkflowitem)

## Functions

### getWorkflowitem

▸ **getWorkflowitem**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`<[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Defined in

[src/service/workflowitem_get.ts:13](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/workflowitem_get.ts#L13)
