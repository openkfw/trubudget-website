# service/workflowitem\_cache\_helper
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_cache\_helper

## Table of contents

### Functions

- [getAllWorkflowitems](service_workflowitem_cache_helper.md#getallworkflowitems)
- [getWorkflowitem](service_workflowitem_cache_helper.md#getworkflowitem)

## Functions

### getAllWorkflowitems

▸ **getAllWorkflowitems**(`conn`, `ctx`, `projectId`, `subprojectId`): `Promise`\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)[]\>

#### Defined in

[src/service/workflowitem_cache_helper.ts:28](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/workflowitem_cache_helper.ts#L28)

___

### getWorkflowitem

▸ **getWorkflowitem**(`conn`, `ctx`, `projectId`, `workflowitemId`): `Promise`\<[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `projectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Defined in

[src/service/workflowitem_cache_helper.ts:13](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/workflowitem_cache_helper.ts#L13)
