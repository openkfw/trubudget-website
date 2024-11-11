# service/project\_cache\_helper
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_cache\_helper

## Table of contents

### Functions

- [getAllProjects](service_project_cache_helper.md#getallprojects)
- [getProject](service_project_cache_helper.md#getproject)

## Functions

### getAllProjects

▸ **getAllProjects**(`conn`, `ctx`): `Promise`\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |

#### Returns

`Promise`\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)[]\>

#### Defined in

[src/service/project_cache_helper.ts:22](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/project_cache_helper.ts#L22)

___

### getProject

▸ **getProject**(`conn`, `ctx`, `projectId`): `Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `projectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Defined in

[src/service/project_cache_helper.ts:8](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/project_cache_helper.ts#L8)
