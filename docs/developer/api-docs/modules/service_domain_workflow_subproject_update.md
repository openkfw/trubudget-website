# service/domain/workflow/subproject\_update
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_update

## Table of contents

### Type Aliases

- [RequestData](service_domain_workflow_subproject_update.md#requestdata)

### Variables

- [requestDataSchema](service_domain_workflow_subproject_update.md#requestdataschema)

### Functions

- [updateSubproject](service_domain_workflow_subproject_update.md#updatesubproject)
- [validate](service_domain_workflow_subproject_update.md#validate)

## Type Aliases

### RequestData

Ƭ **RequestData**: [`UpdatedData`](../interfaces/service_domain_workflow_subproject_updated.UpdatedData.md)

#### Defined in

[src/service/domain/workflow/subproject_update.ts:22](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_update.ts#L22)

## Variables

### requestDataSchema

• `Const` **requestDataSchema**: `ObjectSchema`\<`any`\> = `SubprojectUpdated.updatedDataSchema`

#### Defined in

[src/service/domain/workflow/subproject_update.ts:23](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_update.ts#L23)

## Functions

### updateSubproject

▸ **updateSubproject**(`ctx`, `issuer`, `projectId`, `subprojectId`, `data`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `data` | [`UpdatedData`](../interfaces/service_domain_workflow_subproject_updated.UpdatedData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/subproject_update.ts:38](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_update.ts#L38)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](service_domain_workflow_subproject_update.md#requestdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](service_domain_workflow_subproject_update.md#requestdata)\>

#### Defined in

[src/service/domain/workflow/subproject_update.ts:25](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/subproject_update.ts#L25)
