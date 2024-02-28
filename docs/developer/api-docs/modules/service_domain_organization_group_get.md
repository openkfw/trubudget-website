# service/domain/organization/group\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_get

## Table of contents

### Functions

- [getAllGroups](service_domain_organization_group_get.md#getallgroups)
- [getOneGroup](service_domain_organization_group_get.md#getonegroup)

## Functions

### getAllGroups

▸ **getAllGroups**(`ctx`, `_user`, `repository`): `Promise`\<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `_user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Group`](../interfaces/service_domain_organization_group.Group.md)[]\>

#### Defined in

[src/service/domain/organization/group_get.ts:36](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/organization/group_get.ts#L36)

___

### getOneGroup

▸ **getOneGroup**(`ctx`, `_user`, `groupId`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `_user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `groupId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Group`](../interfaces/service_domain_organization_group.Group.md)\>\>

#### Defined in

[src/service/domain/organization/group_get.ts:14](https://github.com/openkfw/TruBudget/blob/26ade46/api/src/service/domain/organization/group_get.ts#L14)
