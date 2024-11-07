# service/domain/workflow/project\_update
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project\_update

## Table of contents

### Type Aliases

- [RequestData](service_domain_workflow_project_update.md#requestdata)

### Variables

- [requestDataSchema](service_domain_workflow_project_update.md#requestdataschema)

### Functions

- [updateProject](service_domain_workflow_project_update.md#updateproject)
- [validate](service_domain_workflow_project_update.md#validate)

## Type Aliases

### RequestData

Ƭ **RequestData**: [`Modification`](../interfaces/service_domain_workflow_project_updated.Modification.md)

#### Defined in

[src/service/domain/workflow/project_update.ts:21](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_update.ts#L21)

## Variables

### requestDataSchema

• `Const` **requestDataSchema**: `ObjectSchema`\<`any`\> = `ProjectUpdated.modificationSchema`

#### Defined in

[src/service/domain/workflow/project_update.ts:22](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_update.ts#L22)

## Functions

### updateProject

▸ **updateProject**(`ctx`, `issuer`, `projectId`, `data`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `data` | [`Modification`](../interfaces/service_domain_workflow_project_updated.Modification.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/project_update.ts:34](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_update.ts#L34)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](service_domain_workflow_project_update.md#requestdata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](service_domain_workflow_project_update.md#requestdata)\>

#### Defined in

[src/service/domain/workflow/project_update.ts:24](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_update.ts#L24)
