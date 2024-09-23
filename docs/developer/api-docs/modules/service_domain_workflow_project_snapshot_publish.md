# service/domain/workflow/project\_snapshot\_publish
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_snapshot\_publish

## Table of contents

### Functions

- [publishProjectSnapshot](service_domain_workflow_project_snapshot_publish.md#publishprojectsnapshot)

## Functions

### publishProjectSnapshot

▸ **publishProjectSnapshot**(`ctx`, `conn`, `streamName`, `creatingUser`): `Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Defined in

[src/service/domain/workflow/project_snapshot_publish.ts:14](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/project_snapshot_publish.ts#L14)
