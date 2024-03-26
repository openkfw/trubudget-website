# service/domain/workflow/subproject\_projected\_budget\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_projected\_budget\_update

## Table of contents

### Functions

- [updateProjectedBudget](service_domain_workflow_subproject_projected_budget_update.md#updateprojectedbudget)

## Functions

### updateProjectedBudget

▸ **updateProjectedBudget**(`ctx`, `issuer`, `projectId`, `subprojectId`, `organization`, `value`, `currencyCode`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: [`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `organization` | `string` |
| `value` | `string` |
| `currencyCode` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: [`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]  }\>\>

#### Defined in

[src/service/domain/workflow/subproject_projected_budget_update.ts:28](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/subproject_projected_budget_update.ts#L28)
