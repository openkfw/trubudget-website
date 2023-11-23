# service/project\_projected\_budget\_delete
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_projected\_budget\_delete

## Table of contents

### Functions

- [deleteProjectedBudget](service_project_projected_budget_delete.md#deleteprojectedbudget)

## Functions

### deleteProjectedBudget

▸ **deleteProjectedBudget**(`conn`, `ctx`, `serviceUser`, `projectId`, `organization`, `currencyCode`): `Promise`\<[`Type`](result.md#type)\<[`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `organization` | `string` |
| `currencyCode` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`ProjectedBudget`](../interfaces/service_domain_workflow_projected_budget.ProjectedBudget.md)[]\>\>

#### Defined in

[src/service/project_projected_budget_delete.ts:16](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/project_projected_budget_delete.ts#L16)
