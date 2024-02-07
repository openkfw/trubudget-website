# service/domain/workflow/subproject\_history\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_history\_get

## Table of contents

### Functions

- [getHistory](service_domain_workflow_subproject_history_get.md#gethistory)

## Functions

### getHistory

▸ **getHistory**(`ctx`, `user`, `projectId`, `subprojectId`, `repository`, `filter?`): `Promise`\<[`Type`](result.md#type)\<[`SubprojectTraceEvent`](../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `repository` | `Repository` |
| `filter?` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`SubprojectTraceEvent`](../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent.md)[]\>\>

#### Defined in

[src/service/domain/workflow/subproject_history_get.ts:16](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/subproject_history_get.ts#L16)
