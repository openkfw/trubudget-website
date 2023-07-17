# service/domain/organization/group\_member\_remove
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_member\_remove

## Table of contents

### Functions

- [removeMembers](service_domain_organization_group_member_remove.md#removemembers)

## Functions

### removeMembers

▸ **removeMembers**(`ctx`, `issuer`, `groupId`, `members`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |
| `members` | `string`[] |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Defined in

[src/service/domain/organization/group_member_remove.ts:18](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/organization/group_member_remove.ts#L18)
