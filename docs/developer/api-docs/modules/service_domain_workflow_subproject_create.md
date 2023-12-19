# service/domain/workflow/subproject\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_create

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_workflow_subproject_create.RequestData.md)

### Functions

- [createSubproject](service_domain_workflow_subproject_create.md#createsubproject)
- [validate](service_domain_workflow_subproject_create.md#validate)

## Functions

### createSubproject

▸ **createSubproject**(`ctx`, `issuer`, `reqData`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `reqData` | [`RequestData`](../interfaces/service_domain_workflow_subproject_create.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_subproject_created.Event.md)\>\>

#### Defined in

[src/service/domain/workflow/subproject_create.ts:62](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/subproject_create.ts#L62)

___

### validate

▸ **validate**(`input`): [`RequestData`](../interfaces/service_domain_workflow_subproject_create.RequestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`RequestData`](../interfaces/service_domain_workflow_subproject_create.RequestData.md)

#### Defined in

[src/service/domain/workflow/subproject_create.ts:52](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/subproject_create.ts#L52)
