# WorkflowitemUpdateServiceInterface
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / WorkflowitemUpdateServiceInterface

[index](../modules/index.md).WorkflowitemUpdateServiceInterface

Represents the service that updates a workflowitem

## Table of contents

### Methods

- [updateWorkflowitem](index.WorkflowitemUpdateServiceInterface.md#updateworkflowitem)

## Methods

### updateWorkflowitem

▸ **updateWorkflowitem**(`ctx`, `user`, `projectId`, `subprojectId`, `workflowitemId`, `data`): `Promise`\<[`Type`](../modules/result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `data` | [`RequestData`](service_domain_workflow_workflowitem_update.RequestData.md) |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<`void`\>\>

#### Defined in

[src/index.ts:910](https://github.com/openkfw/TruBudget/blob/086d599/api/src/index.ts#L910)
