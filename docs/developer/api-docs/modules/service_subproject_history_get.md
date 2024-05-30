# service/subproject\_history\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_history\_get

## Table of contents

### Functions

- [getSubprojectHistory](service_subproject_history_get.md#getsubprojecthistory)

## Functions

### getSubprojectHistory

▸ **getSubprojectHistory**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `filter?`): `Promise`\<[`Type`](result.md#type)\<[`SubprojectTraceEvent`](../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `filter?` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`SubprojectTraceEvent`](../interfaces/service_domain_workflow_subproject_trace_event.SubprojectTraceEvent.md)[]\>\>

#### Defined in

[src/service/subproject_history_get.ts:19](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/subproject_history_get.ts#L19)
