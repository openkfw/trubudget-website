# service/cache\_snapshot
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/cache\_snapshot

## Table of contents

### Functions

- [getLatestSnapshot](service_cache_snapshot.md#getlatestsnapshot)
- [parseBusinessEvents](service_cache_snapshot.md#parsebusinessevents)
- [publishSnapshot](service_cache_snapshot.md#publishsnapshot)

## Functions

### getLatestSnapshot

▸ **getLatestSnapshot**(`ctx`, `conn`, `streamName`, `key`, `eventType`): `Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `key` | `string` |
| `eventType` | ``"project_snapshot_published"`` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Defined in

[src/service/cache_snapshot.ts:79](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/cache_snapshot.ts#L79)

▸ **getLatestSnapshot**(`ctx`, `conn`, `streamName`, `key`, `eventType`): `Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `key` | `string` |
| `eventType` | ``"subproject_snapshot_published"`` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Defined in

[src/service/cache_snapshot.ts:87](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/cache_snapshot.ts#L87)

▸ **getLatestSnapshot**(`ctx`, `conn`, `streamName`, `key`, `eventType`): `Promise`\<[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `key` | `string` |
| `eventType` | ``"workflowitem_snapshot_published"`` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>\>

#### Defined in

[src/service/cache_snapshot.ts:95](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/cache_snapshot.ts#L95)

___

### parseBusinessEvents

▸ **parseBusinessEvents**(`items`, `streamName`): [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Item`](../interfaces/service_liststreamitems.Item.md)[] |
| `streamName` | `string` |

#### Returns

[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>[]

#### Defined in

[src/service/cache_snapshot.ts:337](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/cache_snapshot.ts#L337)

___

### publishSnapshot

▸ **publishSnapshot**(`ctx`, `conn`, `streamName`, `key`, `eventType`, `creatingUser`, `createEvent`, `ordering?`): `Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `streamName` | `string` |
| `key` | `string` |
| `eventType` | `string` |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `createEvent` | `Function` |
| `ordering?` | [`WorkflowitemOrdering`](service_domain_workflow_workflowitem_ordering.md#workflowitemordering) |

#### Returns

`Promise`\<\{ `canPublish`: `boolean` ; `eventData`: [`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>  }\>

#### Defined in

[src/service/cache_snapshot.ts:189](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/cache_snapshot.ts#L189)
