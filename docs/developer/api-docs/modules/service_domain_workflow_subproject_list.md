# service/domain/workflow/subproject\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_list

## Table of contents

### Functions

- [getAllVisible](service_domain_workflow_subproject_list.md#getallvisible)

## Functions

### getAllVisible

▸ **getAllVisible**(`_ctx`, `user`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[]\>\>

#### Defined in

[src/service/domain/workflow/subproject_list.ts:15](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/domain/workflow/subproject_list.ts#L15)
