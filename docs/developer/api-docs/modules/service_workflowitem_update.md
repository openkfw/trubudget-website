# service/workflowitem\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_update

## Table of contents

### Type Aliases

- [RequestData](service_workflowitem_update.md#requestdata)

### Functions

- [updateWorkflowitem](service_workflowitem_update.md#updateworkflowitem)

## Type Aliases

### RequestData

Ƭ **RequestData**: [`RequestData`](../interfaces/service_domain_workflow_workflowitem_update.RequestData.md)

#### Defined in

[src/service/workflowitem_update.ts:29](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/workflowitem_update.ts#L29)

## Functions

### updateWorkflowitem

▸ **updateWorkflowitem**(`conn`, `storageServiceClient`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `modification`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `storageServiceClient` | [`StorageServiceClientI`](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `modification` | [`RequestData`](../interfaces/service_domain_workflow_workflowitem_update.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_update.ts:31](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/workflowitem_update.ts#L31)
