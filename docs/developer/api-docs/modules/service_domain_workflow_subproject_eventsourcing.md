# service/domain/workflow/subproject\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_eventsourcing

## Table of contents

### Functions

- [newSubprojectFromEvent](service_domain_workflow_subproject_eventsourcing.md#newsubprojectfromevent)
- [parseSubprojectFromSnapshot](service_domain_workflow_subproject_eventsourcing.md#parsesubprojectfromsnapshot)
- [sourceSubprojectFromSnapshot](service_domain_workflow_subproject_eventsourcing.md#sourcesubprojectfromsnapshot)
- [sourceSubprojects](service_domain_workflow_subproject_eventsourcing.md#sourcesubprojects)

## Functions

### newSubprojectFromEvent

▸ **newSubprojectFromEvent**(`ctx`, `subproject`, `event`): [`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

Returns a new subproject with the given event applied, or an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Defined in

[src/service/domain/workflow/subproject_eventsourcing.ts:218](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/subproject_eventsourcing.ts#L218)

___

### parseSubprojectFromSnapshot

▸ **parseSubprojectFromSnapshot**(`subprojectJson`): [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subprojectJson` | `any` |

#### Returns

[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)

#### Defined in

[src/service/domain/workflow/subproject_eventsourcing.ts:88](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/subproject_eventsourcing.ts#L88)

___

### sourceSubprojectFromSnapshot

▸ **sourceSubprojectFromSnapshot**(`ctx`, `events`, `withLog`, `subprojectJson?`): [`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `withLog` | `boolean` |
| `subprojectJson?` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Defined in

[src/service/domain/workflow/subproject_eventsourcing.ts:20](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/subproject_eventsourcing.ts#L20)

___

### sourceSubprojects

▸ **sourceSubprojects**(`ctx`, `events`, `origin?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `origin?` | `Map`\<`string`, [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |
| `subprojects` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[] |

#### Defined in

[src/service/domain/workflow/subproject_eventsourcing.ts:108](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/subproject_eventsourcing.ts#L108)
