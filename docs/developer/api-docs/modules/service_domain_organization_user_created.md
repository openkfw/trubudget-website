# service/domain/organization/user\_created
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_created

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_user_created.Event.md)

### Variables

- [schema](service_domain_organization_user_created.md#schema)

### Functions

- [createEvent](service_domain_organization_user_created.md#createevent)
- [createFrom](service_domain_organization_user_created.md#createfrom)
- [validate](service_domain_organization_user_created.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/user_created.ts:48](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/user_created.ts#L48)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `user`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `user` | `InitialData` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_created.Event.md)\>

#### Defined in

[src/service/domain/organization/user_created.ts:57](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/user_created.ts#L57)

___

### createFrom

▸ **createFrom**(`ctx`, `event`): [`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `event` | [`Event`](../interfaces/service_domain_organization_user_created.Event.md) |

#### Returns

[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>

#### Defined in

[src/service/domain/organization/user_created.ts:86](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/user_created.ts#L86)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_created.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_user_created.Event.md)\>

#### Defined in

[src/service/domain/organization/user_created.ts:81](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/user_created.ts#L81)
