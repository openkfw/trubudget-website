# service/domain/organization/group\_query
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_query

## Table of contents

### Functions

- [getGroup](service_domain_organization_group_query.md#getgroup)
- [getGroups](service_domain_organization_group_query.md#getgroups)
- [getGroupsForUser](service_domain_organization_group_query.md#getgroupsforuser)
- [groupExists](service_domain_organization_group_query.md#groupexists)
- [resolveUsers](service_domain_organization_group_query.md#resolveusers)

## Functions

### getGroup

▸ **getGroup**(`conn`, `ctx`, `serviceUser`, `groupId`): `Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>\>

#### Defined in

[src/service/domain/organization/group_query.ts:36](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/group_query.ts#L36)

___

### getGroups

▸ **getGroups**(`conn`, `ctx`, `serviceUser`): `Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>\>

#### Defined in

[src/service/domain/organization/group_query.ts:15](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/group_query.ts#L15)

___

### getGroupsForUser

▸ **getGroupsForUser**(`conn`, `ctx`, `serviceUser`, `targetUserId`): `Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `targetUserId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>\>

#### Defined in

[src/service/domain/organization/group_query.ts:58](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/group_query.ts#L58)

___

### groupExists

▸ **groupExists**(`conn`, `ctx`, `serviceUser`, `groupId`): `Promise`<[`Type`](result.md#type)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<`boolean`\>\>

#### Defined in

[src/service/domain/organization/group_query.ts:75](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/group_query.ts#L75)

___

### resolveUsers

▸ **resolveUsers**(`conn`, `ctx`, `serviceUser`, `identity`, `getGroupFn?`, `getUserFn?`, `groupSet?`): `Promise`<[`Type`](result.md#type)<[`Id`](service_domain_organization_user_record.md#id)[]\>\>

returns all users for given identity
 if identity is an user return it,
 else if identity is group resolve identities of the group

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) | `undefined` |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) | `undefined` |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) | `undefined` |
| `identity` | `string` | `undefined` |
| `getGroupFn` | (`conn`: [`ConnToken`](service_conn.md#conntoken), `ctx`: [`Ctx`](../interfaces/lib_ctx.Ctx.md), `serviceUser`: [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md), `groupId`: `string`) => `Promise`<[`Type`](result.md#type)<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>\> | `getGroup` |
| `getUserFn` | (`conn`: [`ConnToken`](service_conn.md#conntoken), `ctx`: [`Ctx`](../interfaces/lib_ctx.Ctx.md), `serviceUser`: [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md), `userId`: `string`) => `Promise`<[`Type`](result.md#type)<[`UserRecord`](../interfaces/service_domain_organization_user_record.UserRecord.md)\>\> | `getUser` |
| `groupSet` | `Set`<`string`\> | `undefined` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Id`](service_domain_organization_user_record.md#id)[]\>\>

#### Defined in

[src/service/domain/organization/group_query.ts:95](https://github.com/openkfw/TruBudget/blob/a06c11b/api/src/service/domain/organization/group_query.ts#L95)
