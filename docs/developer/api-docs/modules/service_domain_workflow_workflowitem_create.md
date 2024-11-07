# service/domain/workflow/workflowitem\_create
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_create

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_workflow_workflowitem_create.RequestData.md)

### Functions

- [createWorkflowitem](service_domain_workflow_workflowitem_create.md#createworkflowitem)
- [validate](service_domain_workflow_workflowitem_create.md#validate)

## Functions

### createWorkflowitem

▸ **createWorkflowitem**(`ctx`, `issuer`, `reqData`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `reqData` | [`RequestData`](../interfaces/service_domain_workflow_workflowitem_create.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:167](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L167)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_workflow_workflowitem_create.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_workflow_workflowitem_create.RequestData.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:80](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L80)
