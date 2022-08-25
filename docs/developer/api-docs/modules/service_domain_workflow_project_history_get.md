# service/domain/workflow/project\_history\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_history\_get

## Table of contents

### Functions

- [getHistory](service_domain_workflow_project_history_get.md#gethistory)

## Functions

### getHistory

▸ **getHistory**(`ctx`, `user`, `projectId`, `repository`, `filter?`): `Promise`<[`Type`](result.md#type)<[`ProjectTraceEvent`](../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `repository` | `Repository` |
| `filter?` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`ProjectTraceEvent`](../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent.md)[]\>\>

#### Defined in

[src/service/domain/workflow/project_history_get.ts:16](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/project_history_get.ts#L16)
