# service/domain/workflow/workflowitem\_snapshot\_publish
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_snapshot\_publish

## Table of contents

### Functions

- [publishWorkflowitemSnapshot](service_domain_workflow_workflowitem_snapshot_publish.md#publishworkflowitemsnapshot)

## Functions

### publishWorkflowitemSnapshot

▸ **publishWorkflowitemSnapshot**(`ctx`, `conn`, `streamName`, `workflowitemId`, `creatingUser`): `Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `workflowitemId` | `string` |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Defined in

[src/service/domain/workflow/workflowitem_snapshot_publish.ts:14](https://github.com/openkfw/TruBudget/blob/40b449a/api/src/service/domain/workflow/workflowitem_snapshot_publish.ts#L14)
