# service/domain/workflow/workflowitem\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_list

## Table of contents

### Functions

- [getAllVisible](service_domain_workflow_workflowitem_list.md#getallvisible)

## Functions

### getAllVisible

▸ **getAllVisible**(`ctx`, `user`, `projectId`, `subprojectId`, `repository`): `Promise`<[`Type`](result.md#type)<[`ScrubbedWorkflowitem`](service_domain_workflow_workflowitem.md#scrubbedworkflowitem)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`ScrubbedWorkflowitem`](service_domain_workflow_workflowitem.md#scrubbedworkflowitem)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_list.ts:27](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_list.ts#L27)
