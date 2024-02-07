# service/domain/workflow/subproject\_projected\_budget\_delete
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_projected\_budget\_delete

## Table of contents

### Functions

- [deleteProjectedBudget](service_domain_workflow_subproject_projected_budget_delete.md#deleteprojectedbudget)

## Functions

### deleteProjectedBudget

▸ **deleteProjectedBudget**(`ctx`, `issuer`, `projectId`, `subprojectId`, `organization`, `currencyCode`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: [`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `organization` | `string` |
| `currencyCode` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: [`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]  }\>\>

#### Defined in

[src/service/domain/workflow/subproject_projected_budget_delete.ts:28](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/subproject_projected_budget_delete.ts#L28)
