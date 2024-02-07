# service/project\_history\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_history\_get

## Table of contents

### Functions

- [getProjectHistory](service_project_history_get.md#getprojecthistory)

## Functions

### getProjectHistory

▸ **getProjectHistory**(`conn`, `ctx`, `serviceUser`, `projectId`, `filter?`): `Promise`\<[`Type`](result.md#type)\<[`ProjectTraceEvent`](../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `filter?` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`ProjectTraceEvent`](../interfaces/service_domain_workflow_project_trace_event.ProjectTraceEvent.md)[]\>\>

#### Defined in

[src/service/project_history_get.ts:18](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/project_history_get.ts#L18)
