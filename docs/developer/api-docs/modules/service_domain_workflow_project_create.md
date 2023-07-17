# service/domain/workflow/project\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_create

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

### Functions

- [createProject](service_domain_workflow_project_create.md#createproject)
- [validate](service_domain_workflow_project_create.md#validate)

## Functions

### createProject

▸ **createProject**(`ctx`, `creatingUser`, `data`, `repository`): `Promise`<[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_created.Event.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `data` | [`RequestData`](../interfaces/service_domain_workflow_project_create.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_project_created.Event.md)\>\>

#### Defined in

[src/service/domain/workflow/project_create.ts:61](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/project_create.ts#L61)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`RequestData`](../interfaces/service_domain_workflow_project_create.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`RequestData`](../interfaces/service_domain_workflow_project_create.RequestData.md)\>

#### Defined in

[src/service/domain/workflow/project_create.ts:51](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/project_create.ts#L51)
