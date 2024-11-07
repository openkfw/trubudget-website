# service/domain/workflow/project\_close
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_close

## Table of contents

### Functions

- [closeProject](service_domain_workflow_project_close.md#closeproject)

## Functions

### closeProject

▸ **closeProject**(`ctx`, `issuer`, `projectId`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `project`: [`Project`](../interfaces/service_domain_workflow_project.Project.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `project`: [`Project`](../interfaces/service_domain_workflow_project.Project.md)  }\>\>

#### Defined in

[src/service/domain/workflow/project_close.ts:26](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_close.ts#L26)
