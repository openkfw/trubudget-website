# service/domain/workflow/project
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/project

## Table of contents

### Interfaces

- [Project](../interfaces/service_domain_workflow_project.Project.md)

### Type Aliases

- [Id](service_domain_workflow_project.md#id)

### Variables

- [idSchema](service_domain_workflow_project.md#idschema)
- [schema](service_domain_workflow_project.md#schema)
- [tagsSchema](service_domain_workflow_project.md#tagsschema)

### Functions

- [permits](service_domain_workflow_project.md#permits)
- [validate](service_domain_workflow_project.md#validate)

## Type Aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/workflow/project.ts:14](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project.ts#L14)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/project.ts:16](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project.ts#L16)

___

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/project.ts:37](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project.ts#L37)

___

### tagsSchema

• `Const` **tagsSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/project.ts:17](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project.ts#L17)

## Functions

### permits

▸ **permits**(`project`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../interfaces/service_domain_workflow_project.Project.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/workflow/project.ts:57](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project.ts#L57)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>

#### Defined in

[src/service/domain/workflow/project.ts:52](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project.ts#L52)
