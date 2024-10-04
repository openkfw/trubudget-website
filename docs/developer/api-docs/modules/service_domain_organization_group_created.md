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

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/group_created.ts:44](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/group_created.ts#L44)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `group`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `group` | `InitialData` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Defined in

[src/service/domain/organization/group_created.ts:53](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/group_created.ts#L53)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_created.Event.md)\>

#### Defined in

[src/service/domain/organization/group_created.ts:77](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/group_created.ts#L77)
