# service/workflowitem\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_create

## Table of contents

### References

- [RequestData](service_workflowitem_create.md#requestdata)

### Functions

- [createWorkflowitem](service_workflowitem_create.md#createworkflowitem)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_workflowitem_create.RequestData.md)

## Functions

### createWorkflowitem

▸ **createWorkflowitem**(`conn`, `storageServiceClient`, `ctx`, `serviceUser`, `requestData`): `Promise`<[`Type`](result.md#type)<[`ResourceMap`](service_domain_ResourceMap.md#resourcemap)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `storageServiceClient` | [`StorageServiceClientI`](../interfaces/service_Client_storage_service_h.StorageServiceClientI.md) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_workflow_workflowitem_create.RequestData.md) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`ResourceMap`](service_domain_ResourceMap.md#resourcemap)\>\>

#### Defined in

[src/service/workflowitem_create.ts:25](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/workflowitem_create.ts#L25)
