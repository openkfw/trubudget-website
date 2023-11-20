# service/domain/workflow/workflowitem\_history\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_history\_get

## Table of contents

### Functions

- [getHistory](service_domain_workflow_workflowitem_history_get.md#gethistory)

## Functions

### getHistory

▸ **getHistory**(`ctx`, `user`, `projectId`, `subprojectId`, `workflowitemId`, `repository`, `filter?`): `Promise`<[`Type`](result.md#type)<[`WorkflowitemTraceEvent`](../interfaces/service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `repository` | `Repository` |
| `filter?` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`WorkflowitemTraceEvent`](../interfaces/service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent.md)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_history_get.ts:20](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/workflowitem_history_get.ts#L20)
