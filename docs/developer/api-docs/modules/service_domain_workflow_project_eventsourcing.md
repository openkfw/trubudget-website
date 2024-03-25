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

[src/service/domain/workflow/project_eventsourcing.ts:125](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_eventsourcing.ts#L125)

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

[src/service/domain/workflow/project_eventsourcing.ts:265](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_eventsourcing.ts#L265)

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

[src/service/domain/workflow/project_eventsourcing.ts:197](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_eventsourcing.ts#L197)

___

### sourceProjects

▸ **sourceProjects**(`ctx`, `events`, `origin?`): `Object`

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

[src/service/domain/workflow/project_eventsourcing.ts:19](https://github.com/openkfw/TruBudget/blob/3cf6626/api/src/service/domain/workflow/project_eventsourcing.ts#L19)
