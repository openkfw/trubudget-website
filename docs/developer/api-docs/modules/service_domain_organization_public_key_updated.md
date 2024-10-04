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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/public_key_updated.ts:23](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/public_key_updated.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `organization`, `publicKey`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `organization` | `string` |
| `publicKey` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Defined in

[src/service/domain/organization/public_key_updated.ts:33](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/public_key_updated.ts#L33)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_public_key_updated.Event.md)\>

#### Defined in

[src/service/domain/organization/public_key_updated.ts:59](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/public_key_updated.ts#L59)
