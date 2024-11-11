# service/domain/workflow/subproject\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_assign

## Table of contents

### Functions

- [assignSubproject](service_domain_workflow_subproject_assign.md#assignsubproject)

## Functions

### assignSubproject

▸ **assignSubproject**(`ctx`, `issuer`, `projectId`, `subprojectId`, `assignee`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `subproject`: [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `assignee` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `subproject`: [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)  }\>\>

#### Defined in

[src/service/domain/workflow/subproject_assign.ts:25](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/subproject_assign.ts#L25)
