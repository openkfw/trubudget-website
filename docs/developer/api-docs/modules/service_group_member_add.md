# service/group\_member\_add
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/group\_member\_add

## Table of contents

### Functions

- [addMembers](service_group_member_add.md#addmembers)

## Functions

### addMembers

▸ **addMembers**(`conn`, `ctx`, `serviceUser`, `groupId`, `newMembers`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |
| `newMembers` | `string`[] |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/group_member_add.ts:14](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/group_member_add.ts#L14)
