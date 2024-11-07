# service/subproject\_assign
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_assign

## Table of contents

### Functions

- [assignSubproject](service_subproject_assign.md#assignsubproject)

## Functions

### assignSubproject

▸ **assignSubproject**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `assignee`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `assignee` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/subproject_assign.ts:18](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/subproject_assign.ts#L18)
