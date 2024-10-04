# service/domain/workflow/project\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_assign

## Table of contents

### Functions

- [assignProject](service_domain_workflow_project_assign.md#assignproject)

## Functions

### assignProject

▸ **assignProject**(`ctx`, `issuer`, `projectId`, `assignee`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `project`: [`Project`](../interfaces/service_domain_workflow_project.Project.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `assignee` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `project`: [`Project`](../interfaces/service_domain_workflow_project.Project.md)  }\>\>

#### Defined in

[src/service/domain/workflow/project_assign.ts:25](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/project_assign.ts#L25)
