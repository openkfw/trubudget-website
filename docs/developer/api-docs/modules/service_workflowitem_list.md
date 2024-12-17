# service/workflowitem\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_list

## Table of contents

### Functions

- [listWorkflowitems](service_workflowitem_list.md#listworkflowitems)

## Functions

### listWorkflowitems

▸ **listWorkflowitems**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`): `Promise`\<[`Type`](result.md#type)\<[`ScrubbedWorkflowitem`](service_domain_workflow_workflowitem.md#scrubbedworkflowitem)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`ScrubbedWorkflowitem`](service_domain_workflow_workflowitem.md#scrubbedworkflowitem)[]\>\>

#### Defined in

[src/service/workflowitem_list.ts:14](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/workflowitem_list.ts#L14)
