# service/subproject\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_update

## Table of contents

### Functions

- [updateSubproject](service_subproject_update.md#updatesubproject)

## Functions

### updateSubproject

▸ **updateSubproject**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `requestData`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `requestData` | [`UpdatedData`](../interfaces/service_domain_workflow_subproject_updated.UpdatedData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/subproject_update.ts:17](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/subproject_update.ts#L17)
