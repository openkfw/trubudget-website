# service/group\_create
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/group\_create

## Table of contents

### Functions

- [createGroup](service_group_create.md#creategroup)

## Functions

### createGroup

▸ **createGroup**(`conn`, `ctx`, `serviceUser`, `requestData`): `Promise`\<[`Type`](result.md#type)\<`Group`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_organization_group_create.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`Group`\>\>

#### Defined in

[src/service/group_create.ts:22](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/group_create.ts#L22)
