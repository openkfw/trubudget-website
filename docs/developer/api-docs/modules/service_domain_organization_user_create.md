# service/domain/organization/user\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_create

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_user_create.RequestData.md)

### Functions

- [createUser](service_domain_organization_user_create.md#createuser)
- [validate](service_domain_organization_user_create.md#validate)

## Functions

### createUser

▸ **createUser**(`ctx`, `creatingUser`, `data`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `data` | [`RequestData`](../interfaces/service_domain_organization_user_create.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/organization/user_create.ts:53](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/organization/user_create.ts#L53)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_user_create.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_user_create.RequestData.md)\>

#### Defined in

[src/service/domain/organization/user_create.ts:38](https://github.com/openkfw/TruBudget/blob/648f2bb/api/src/service/domain/organization/user_create.ts#L38)
