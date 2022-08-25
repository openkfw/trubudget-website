# service/workflowitem\_get\_details
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_get\_details

## Table of contents

### Functions

- [getWorkflowitemDetails](service_workflowitem_get_details.md#getworkflowitemdetails)

## Functions

### getWorkflowitemDetails

▸ **getWorkflowitemDetails**(`conn`, `storageServiceClient`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`<[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

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

#### Returns

`Promise`<[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Defined in

[src/service/workflowitem_get_details.ts:16](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/workflowitem_get_details.ts#L16)
