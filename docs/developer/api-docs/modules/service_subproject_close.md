# service/subproject\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_close

## Table of contents

### Functions

- [closeSubproject](service_subproject_close.md#closesubproject)

## Functions

### closeSubproject

▸ **closeSubproject**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/subproject_close.ts:16](https://github.com/openkfw/TruBudget/blob/965031f/api/src/service/subproject_close.ts#L16)
