# service/group\_member\_remove
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/group\_member\_remove

## Table of contents

### Functions

- [removeMembers](service_group_member_remove.md#removemembers)

## Functions

### removeMembers

▸ **removeMembers**(`conn`, `ctx`, `serviceUser`, `groupId`, `userIds`): `Promise`<[`Type`](result.md#type)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |
| `userIds` | `string`[] |

#### Returns

`Promise`<[`Type`](result.md#type)<`void`\>\>

#### Defined in

[src/service/group_member_remove.ts:12](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/group_member_remove.ts#L12)
