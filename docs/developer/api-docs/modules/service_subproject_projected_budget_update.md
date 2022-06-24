# service/subproject\_projected\_budget\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_projected\_budget\_update

## Table of contents

### Functions

- [updateProjectedBudget](service_subproject_projected_budget_update.md#updateprojectedbudget)

## Functions

### updateProjectedBudget

▸ **updateProjectedBudget**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `organization`, `value`, `currencyCode`): `Promise`<[`Type`](result.md#type)<[`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `organization` | `string` |
| `value` | `string` |
| `currencyCode` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]\>\>

#### Defined in

[src/service/subproject_projected_budget_update.ts:16](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/subproject_projected_budget_update.ts#L16)
