# service/workflowitem\_history\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_history\_get

## Table of contents

### Functions

- [getWorkflowitemHistory](service_workflowitem_history_get.md#getworkflowitemhistory)

## Functions

### getWorkflowitemHistory

▸ **getWorkflowitemHistory**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `filter?`): `Promise`<[`Type`](result.md#type)<[`WorkflowitemTraceEvent`](../interfaces/service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `filter?` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`WorkflowitemTraceEvent`](../interfaces/service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent.md)[]\>\>

#### Defined in

[src/service/workflowitem_history_get.ts:16](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/workflowitem_history_get.ts#L16)
