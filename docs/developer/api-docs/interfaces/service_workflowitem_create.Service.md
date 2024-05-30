# Service
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/workflowitem\_create](../modules/service_workflowitem_create.md) / Service

[service/workflowitem\_create](../modules/service_workflowitem_create.md).Service

## Table of contents

### Methods

- [createWorkflowitem](service_workflowitem_create.Service.md#createworkflowitem)

## Methods

### createWorkflowitem

▸ **createWorkflowitem**(`ctx`, `user`, `createRequest`): `Promise`\<[`Type`](../modules/result.md#type)\<[`ResourceMap`](../modules/service_domain_ResourceMap.md#resourcemap)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](service_domain_organization_service_user.ServiceUser.md) |
| `createRequest` | [`RequestData`](service_domain_workflow_workflowitem_create.RequestData.md) |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`ResourceMap`](../modules/service_domain_ResourceMap.md#resourcemap)\>\>

#### Defined in

[src/service/workflowitem_create.ts:31](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/workflowitem_create.ts#L31)
