# service/domain/organization/user\_query
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_query

## Table of contents

### Functions

- [getUser](service_domain_organization_user_query.md#getuser)
- [getUsers](service_domain_organization_user_query.md#getusers)
- [userExists](service_domain_organization_user_query.md#userexists)

## Functions

### getUser

▸ **getUser**(`conn`, `ctx`, `serviceUser`, `userId`): `Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `userId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>\>

#### Defined in

[src/service/domain/organization/user_query.ts:31](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_query.ts#L31)

___

### getUsers

▸ **getUsers**(`conn`, `ctx`, `serviceUser`): `Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)[]\>\>

#### Defined in

[src/service/domain/organization/user_query.ts:14](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_query.ts#L14)

___

### userExists

▸ **userExists**(`conn`, `ctx`, `serviceUser`, `userId`): `Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `userId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Defined in

[src/service/domain/organization/user_query.ts:51](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/user_query.ts#L51)
