# service/domain/organization/group\_permissions\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_permissions\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)

### Variables

- [schema](service_domain_organization_group_permissions_revoked.md#schema)

### Functions

- [createEvent](service_domain_organization_group_permissions_revoked.md#createevent)
- [validate](service_domain_organization_group_permissions_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/organization/group_permissions_revoked.ts:24](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/organization/group_permissions_revoked.ts#L24)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `groupId`, `permission`, `revokee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `groupId` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_revoked.ts:35](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/organization/group_permissions_revoked.ts#L35)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_organization_group_permissions_revoked.Event.md)\>

#### Defined in

[src/service/domain/organization/group_permissions_revoked.ts:64](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/organization/group_permissions_revoked.ts#L64)
