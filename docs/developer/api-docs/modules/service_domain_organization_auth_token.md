# service/domain/organization/auth\_token
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/auth\_token

## Table of contents

### Interfaces

- [AuthToken](../interfaces/service_domain_organization_auth_token.AuthToken.md)

### Functions

- [canAssumeIdentity](service_domain_organization_auth_token.md#canassumeidentity)
- [fromUserRecord](service_domain_organization_auth_token.md#fromuserrecord)
- [permits](service_domain_organization_auth_token.md#permits)

## Functions

### canAssumeIdentity

▸ **canAssumeIdentity**(`user`, `identity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `Object` |
| `user.groups` | `string`[] |
| `user.id` | `string` |
| `identity` | `string` |

#### Returns

`boolean`

#### Defined in

[src/service/domain/organization/auth_token.ts:23](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/organization/auth_token.ts#L23)

___

### fromUserRecord

▸ **fromUserRecord**(`user`, `repository`, `metadata?`): `Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md) |
| `repository` | `Repository` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`AuthToken`](../interfaces/service_domain_organization_auth_token.AuthToken.md)\>\>

#### Defined in

[src/service/domain/organization/auth_token.ts:38](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/organization/auth_token.ts#L38)

___

### permits

▸ **permits**(`permissions`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permissions`](service_domain_permissions.md#permissions) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/organization/auth_token.ts:84](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/organization/auth_token.ts#L84)
