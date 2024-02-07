# service/domain/workflow/subproject\_snapshot\_publish
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_snapshot\_publish

## Table of contents

### Functions

- [publishSubprojectSnapshot](service_domain_workflow_subproject_snapshot_publish.md#publishsubprojectsnapshot)

## Functions

### publishSubprojectSnapshot

▸ **publishSubprojectSnapshot**(`ctx`, `conn`, `streamName`, `subprojectId`, `creatingUser`, `ordering?`): `Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `subprojectId` | `string` |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `ordering?` | [`WorkflowitemOrdering`](service_domain_workflow_workflowitem_ordering.md#workflowitemordering) |

#### Returns

`Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Defined in

[src/service/domain/workflow/subproject_snapshot_publish.ts:15](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/domain/workflow/subproject_snapshot_publish.ts#L15)
