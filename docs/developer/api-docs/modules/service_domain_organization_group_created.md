# service/domain/organization/group\_created
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_created

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_group_created.Event.md)

### Variables

- [schema](service_domain_organization_group_created.md#schema)

### Functions

- [createEvent](service_domain_organization_group_created.md#createevent)
- [validate](service_domain_organization_group_created.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/group_created.ts:40](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_created.ts#L40)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `group`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `group` | `InitialData` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Defined in

[src/service/domain/organization/group_created.ts:48](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_created.ts#L48)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Defined in

[src/service/domain/organization/group_created.ts:70](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_created.ts#L70)
