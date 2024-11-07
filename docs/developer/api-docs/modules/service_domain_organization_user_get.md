# service/domain/organization/user\_get
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_get

## Table of contents

### Functions

- [getAllUsers](service_domain_organization_user_get.md#getallusers)
- [getOneUser](service_domain_organization_user_get.md#getoneuser)

## Functions

### getAllUsers

▸ **getAllUsers**(`ctx`, `_serviceUser`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `_serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)[]\>\>

#### Defined in

[src/service/domain/organization/user_get.ts:42](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_get.ts#L42)

___

### getOneUser

▸ **getOneUser**(`ctx`, `_serviceUser`, `userId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `_serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `userId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>\>

#### Defined in

[src/service/domain/organization/user_get.ts:15](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_get.ts#L15)
