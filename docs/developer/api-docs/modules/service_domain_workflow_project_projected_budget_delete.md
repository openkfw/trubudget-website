# service/domain/workflow/project\_projected\_budget\_delete
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_projected\_budget\_delete

## Table of contents

### Functions

- [deleteProjectedBudget](service_domain_workflow_project_projected_budget_delete.md#deleteprojectedbudget)

## Functions

### deleteProjectedBudget

▸ **deleteProjectedBudget**(`ctx`, `issuer`, `projectId`, `organization`, `currencyCode`, `repository`): `Promise`<[`Type`](result.md#type)<{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: `State`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `organization` | `string` |
| `currencyCode` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: `State`  }\>\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_delete.ts:26](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/project_projected_budget_delete.ts#L26)
