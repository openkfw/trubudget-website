# service/subproject\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_list

## Table of contents

### Functions

- [listSubprojects](service_subproject_list.md#listsubprojects)

## Functions

### listSubprojects

▸ **listSubprojects**(`conn`, `ctx`, `serviceUser`, `projectId`): `Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)[]\>\>

#### Defined in

[src/service/subproject_list.ts:12](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/service/subproject_list.ts#L12)
