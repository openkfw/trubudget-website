# service/domain/workflow/subproject
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject

## Table of contents

### Interfaces

- [Subproject](../interfaces/service_domain_workflow_subproject.Subproject.md)

### Type aliases

- [Id](service_domain_workflow_subproject.md#id)

### Variables

- [idSchema](service_domain_workflow_subproject.md#idschema)

### Functions

- [permits](service_domain_workflow_subproject.md#permits)
- [validate](service_domain_workflow_subproject.md#validate)

## Type aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/workflow/subproject.ts:16](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/subproject.ts#L16)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`

#### Defined in

[src/service/domain/workflow/subproject.ts:18](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/subproject.ts#L18)

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

[src/service/domain/workflow/subproject.ts:64](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/subproject.ts#L64)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)\>

#### Defined in

[src/service/domain/workflow/subproject.ts:59](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/workflow/subproject.ts#L59)