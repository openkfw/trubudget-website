# service/domain/workflow/subproject
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject

## Table of contents

### Interfaces

- [Subproject](../interfaces/service_domain_workflow_subproject.Subproject.md)

### Type Aliases

- [Id](service_domain_workflow_subproject.md#id)

### Variables

- [idSchema](service_domain_workflow_subproject.md#idschema)
- [schema](service_domain_workflow_subproject.md#schema)

### Functions

- [permits](service_domain_workflow_subproject.md#permits)
- [validate](service_domain_workflow_subproject.md#validate)

## Type Aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/workflow/subproject.ts:17](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/subproject.ts#L17)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/subproject.ts:19](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/subproject.ts#L19)

___

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/subproject.ts:43](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/subproject.ts#L43)

## Functions

### permits

▸ **permits**(`subproject`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subproject` | [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/workflow/subproject.ts:67](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/subproject.ts#L67)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Defined in

[src/service/domain/workflow/subproject.ts:62](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/subproject.ts#L62)
