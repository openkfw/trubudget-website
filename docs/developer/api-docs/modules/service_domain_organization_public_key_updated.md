# service/domain/organization/public\_key\_updated
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/public\_key\_updated

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_public_key_updated.Event.md)

### Variables

- [schema](service_domain_organization_public_key_updated.md#schema)

### Functions

- [createEvent](service_domain_organization_public_key_updated.md#createevent)
- [validate](service_domain_organization_public_key_updated.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`

#### Defined in

[src/service/domain/organization/public_key_updated.ts:19](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/public_key_updated.ts#L19)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `organization`, `publicKey`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `organization` | `string` |
| `publicKey` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Defined in

[src/service/domain/organization/public_key_updated.ts:28](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/public_key_updated.ts#L28)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Defined in

[src/service/domain/organization/public_key_updated.ts:52](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/public_key_updated.ts#L52)
