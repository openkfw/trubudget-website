# service/domain/workflow/project\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_list

## Table of contents

### Functions

- [dropHiddenHistoryEvents](service_domain_workflow_project_list.md#drophiddenhistoryevents)
- [getAllVisible](service_domain_workflow_project_list.md#getallvisible)

## Functions

### dropHiddenHistoryEvents

▸ **dropHiddenHistoryEvents**(`project`, `actingUser`): [`Project`](../interfaces/service_domain_workflow_project.Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../interfaces/service_domain_workflow_project.Project.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

[`Project`](../interfaces/service_domain_workflow_project.Project.md)

#### Defined in

[src/service/domain/workflow/project_list.ts:46](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/project_list.ts#L46)

___

### getAllVisible

▸ **getAllVisible**(`_ctx`, `user`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)[]\>\>

#### Defined in

[src/service/domain/workflow/project_list.ts:14](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/project_list.ts#L14)
