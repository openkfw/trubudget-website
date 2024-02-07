# service/subproject\_cache\_helper
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_cache\_helper

## Table of contents

### Functions

- [getAllSubprojects](service_subproject_cache_helper.md#getallsubprojects)
- [getSubproject](service_subproject_cache_helper.md#getsubproject)

## Functions

### getAllSubprojects

▸ **getAllSubprojects**(`conn`, `ctx`, `projectId`): `Promise`\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `projectId` | `string` |

#### Returns

`Promise`\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[]\>

#### Defined in

[src/service/subproject_cache_helper.ts:26](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/subproject_cache_helper.ts#L26)

___

### getSubproject

▸ **getSubproject**(`conn`, `ctx`, `projectId`, `subprojectId`): `Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Defined in

[src/service/subproject_cache_helper.ts:11](https://github.com/openkfw/TruBudget/blob/2e43ea7/api/src/service/subproject_cache_helper.ts#L11)
