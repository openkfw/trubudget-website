# service/domain/organization/user\_enable
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_enable

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_user_enable.RequestData.md)

### Functions

- [enableUser](service_domain_organization_user_enable.md#enableuser)
- [validate](service_domain_organization_user_enable.md#validate)

## Functions

### enableUser

▸ **enableUser**(`ctx`, `issuer`, `issuerOrganization`, `data`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `data` | [`RequestData`](../interfaces/service_domain_organization_user_enable.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/organization/user_enable.ts:38](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/user_enable.ts#L38)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_user_enable.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_user_enable.RequestData.md)\>

#### Defined in

[src/service/domain/organization/user_enable.ts:28](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/organization/user_enable.ts#L28)
