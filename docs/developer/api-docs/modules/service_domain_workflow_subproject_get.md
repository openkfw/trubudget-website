# service/domain/workflow/subproject\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_get

## Table of contents

### Functions

- [getSubproject](service_domain_workflow_subproject_get.md#getsubproject)

## Functions

### getSubproject

▸ **getSubproject**(`ctx`, `user`, `subprojectId`, `repository`): `Promise`<[`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `subprojectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>\>

#### Defined in

[src/service/domain/workflow/subproject_get.ts:16](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/subproject_get.ts#L16)
