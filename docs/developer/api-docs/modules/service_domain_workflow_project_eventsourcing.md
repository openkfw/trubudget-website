# service/domain/workflow/project\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_eventsourcing

## Table of contents

### Functions

- [newProjectFromEvent](service_domain_workflow_project_eventsourcing.md#newprojectfromevent)
- [parseProjectFromSnapshot](service_domain_workflow_project_eventsourcing.md#parseprojectfromsnapshot)
- [sourceProjectFromSnapshot](service_domain_workflow_project_eventsourcing.md#sourceprojectfromsnapshot)
- [sourceProjects](service_domain_workflow_project_eventsourcing.md#sourceprojects)

## Functions

### newProjectFromEvent

▸ **newProjectFromEvent**(`ctx`, `project`, `event`): [`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

Returns a new project with the given event applied, or an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `project` | [`Project`](../interfaces/service_domain_workflow_project.Project.md) |
| `event` | [`BusinessEvent`](service_domain_business_event.md#businessevent) |

#### Returns

[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Defined in

[src/service/domain/workflow/project_eventsourcing.ts:128](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/project_eventsourcing.ts#L128)

___

### parseProjectFromSnapshot

▸ **parseProjectFromSnapshot**(`projectJson`): [`Project`](../interfaces/service_domain_workflow_project.Project.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectJson` | `any` |

#### Returns

[`Project`](../interfaces/service_domain_workflow_project.Project.md)

#### Defined in

[src/service/domain/workflow/project_eventsourcing.ts:268](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/project_eventsourcing.ts#L268)

___

### sourceProjectFromSnapshot

▸ **sourceProjectFromSnapshot**(`ctx`, `events`, `withLog`, `projectJson?`): [`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `withLog` | `boolean` |
| `projectJson?` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Defined in

[src/service/domain/workflow/project_eventsourcing.ts:200](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/project_eventsourcing.ts#L200)

___

### sourceProjects

▸ **sourceProjects**(`ctx`, `events`, `origin?`): `Object`

deprecated

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |
| `origin?` | `Map`\<`string`, [`Project`](../interfaces/service_domain_workflow_project.Project.md)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | `Error`[] |
| `projects` | [`Project`](../interfaces/service_domain_workflow_project.Project.md)[] |

#### Defined in

[src/service/domain/workflow/project_eventsourcing.ts:22](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/project_eventsourcing.ts#L22)
