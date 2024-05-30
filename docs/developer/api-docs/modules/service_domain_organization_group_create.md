# service/domain/organization/group\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_create

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_organization_group_create.RequestData.md)

### Functions

- [createGroup](service_domain_organization_group_create.md#creategroup)
- [validate](service_domain_organization_group_create.md#validate)

## Functions

### createGroup

▸ **createGroup**(`ctx`, `creatingUser`, `data`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `creatingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `data` | [`RequestData`](../interfaces/service_domain_organization_group_create.RequestData.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/organization/group_create.ts:49](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/organization/group_create.ts#L49)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_group_create.RequestData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`RequestData`](../interfaces/service_domain_organization_group_create.RequestData.md)\>

#### Defined in

[src/service/domain/organization/group_create.ts:38](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/domain/organization/group_create.ts#L38)
