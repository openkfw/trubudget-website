# service/domain/workflow/workflowitem\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_update

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_workflow_workflowitem_update.RequestData.md)

### Type Aliases

- [EventData](service_domain_workflow_workflowitem_update.md#eventdata)

### Variables

- [requestDataSchema](service_domain_workflow_workflowitem_update.md#requestdataschema)

### Functions

- [updateWorkflowitem](service_domain_workflow_workflowitem_update.md#updateworkflowitem)

## Type Aliases

### EventData

Ƭ **EventData**: [`Modification`](../interfaces/service_domain_workflow_workflowitem_updated.Modification.md)

#### Defined in

[src/service/domain/workflow/workflowitem_update.ts:44](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem_update.ts#L44)

## Variables

### requestDataSchema

• `Const` **requestDataSchema**: `ObjectSchema`\<`any`\> = `WorkflowitemUpdated.modificationSchema`

#### Defined in

[src/service/domain/workflow/workflowitem_update.ts:45](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem_update.ts#L45)

## Functions

### updateWorkflowitem

▸ **updateWorkflowitem**(`ctx`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `modification`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `workflowitem`: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `modification` | [`RequestData`](../interfaces/service_domain_workflow_workflowitem_update.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `workflowitem`: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)  }\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_update.ts:77](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem_update.ts#L77)
