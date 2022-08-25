# service/domain/workflow/project\_projected\_budget\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_projected\_budget\_update

## Table of contents

### Functions

- [updateProjectedBudget](service_domain_workflow_project_projected_budget_update.md#updateprojectedbudget)

## Functions

### updateProjectedBudget

▸ **updateProjectedBudget**(`ctx`, `issuer`, `projectId`, `organization`, `value`, `currencyCode`, `repository`): `Promise`<[`Type`](result.md#type)<{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: `State`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `organization` | `string` |
| `value` | `string` |
| `currencyCode` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `projectedBudgets`: `State`  }\>\>

#### Defined in

[src/service/domain/workflow/project_projected_budget_update.ts:26](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/project_projected_budget_update.ts#L26)
