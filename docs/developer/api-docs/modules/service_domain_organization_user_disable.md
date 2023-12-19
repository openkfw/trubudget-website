# service/domain/organization/user\_disable
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_disable

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_user_disable.RequestData.md)

### Functions

- [disableUser](service_domain_organization_user_disable.md#disableuser)
- [validate](service_domain_organization_user_disable.md#validate)

## Functions

### disableUser

▸ **disableUser**(`ctx`, `issuer`, `issuerOrganization`, `data`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `data` | [`RequestData`](../interfaces/service_domain_organization_user_disable.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/organization/user_disable.ts:39](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/user_disable.ts#L39)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_user_disable.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_user_disable.RequestData.md)\>

#### Defined in

[src/service/domain/organization/user_disable.ts:28](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/organization/user_disable.ts#L28)
