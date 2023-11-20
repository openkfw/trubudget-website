# service/domain/workflow/subproject\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_eventsourcing

## Table of contents

### Functions

- [newSubprojectFromEvent](service_domain_workflow_subproject_eventsourcing.md#newsubprojectfromevent)
- [sourceSubprojects](service_domain_workflow_subproject_eventsourcing.md#sourcesubprojects)

## Functions

### newSubprojectFromEvent

▸ **newSubprojectFromEvent**(`ctx`, `subproject`, `event`): [`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

Returns a new subproject with the given event applied, or an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

[`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Defined in

[src/service/domain/workflow/subproject_eventsourcing.ts:130](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/subproject_eventsourcing.ts#L130)

___

### sourceSubprojects

▸ **sourceSubprojects**(`ctx`, `events`, `origin?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `origin?` | `Map`<`string`, [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |
| `subprojects` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[] |

#### Defined in

[src/service/domain/workflow/subproject_eventsourcing.ts:20](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/workflow/subproject_eventsourcing.ts#L20)
