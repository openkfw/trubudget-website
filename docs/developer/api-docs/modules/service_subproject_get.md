# service/subproject\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_get

## Table of contents

### Functions

- [getSubproject](service_subproject_get.md#getsubproject)

## Functions

### getSubproject

▸ **getSubproject**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`): `Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Defined in

[src/service/subproject_get.ts:14](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/subproject_get.ts#L14)
