# service/domain/workflow/project\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_get

## Table of contents

### Functions

- [getProject](service_domain_workflow_project_get.md#getproject)

## Functions

### getProject

▸ **getProject**(`ctx`, `user`, `projectId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Defined in

[src/service/domain/workflow/project_get.ts:15](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/project_get.ts#L15)
