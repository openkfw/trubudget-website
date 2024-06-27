# service/domain/workflow/workflowitem\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_close

## Table of contents

### Functions

- [closeWorkflowitem](service_domain_workflow_workflowitem_close.md#closeworkflowitem)

## Functions

### closeWorkflowitem

▸ **closeWorkflowitem**(`ctx`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `repository`, `rejectReason?`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `repository` | `Repository` |
| `rejectReason?` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_close.ts:37](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/workflowitem_close.ts#L37)
