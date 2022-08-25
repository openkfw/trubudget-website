# service/domain/organization/group\_member\_add
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_member\_add

## Table of contents

### Functions

- [addMembers](service_domain_organization_group_member_add.md#addmembers)

## Functions

### addMembers

▸ **addMembers**(`ctx`, `issuer`, `groupId`, `newMembers`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |
| `newMembers` | `string`[] |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)\>\>

#### Defined in

[src/service/domain/organization/group_member_add.ts:18](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/domain/organization/group_member_add.ts#L18)
