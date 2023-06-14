# service/domain/organization/user\_password\_change
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_password\_change

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_user_password_change.RequestData.md)

### Functions

- [changeUserPassword](service_domain_organization_user_password_change.md#changeuserpassword)
- [validate](service_domain_organization_user_password_change.md#validate)

## Functions

### changeUserPassword

▸ **changeUserPassword**(`ctx`, `issuer`, `issuerOrganization`, `data`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `data` | [`RequestData`](../interfaces/service_domain_organization_user_password_change.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/organization/user_password_change.ts:38](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/user_password_change.ts#L38)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`RequestData`](../interfaces/service_domain_organization_user_password_change.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`RequestData`](../interfaces/service_domain_organization_user_password_change.RequestData.md)\>

#### Defined in

[src/service/domain/organization/user_password_change.ts:28](https://github.com/openkfw/TruBudget/blob/4d7fd4be/api/src/service/domain/organization/user_password_change.ts#L28)
