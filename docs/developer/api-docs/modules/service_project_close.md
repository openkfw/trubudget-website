# service/project\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_close

## Table of contents

### Functions

- [closeProject](service_project_close.md#closeproject)

## Functions

### closeProject

▸ **closeProject**(`conn`, `ctx`, `serviceUser`, `projectId`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/project_close.ts:15](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/project_close.ts#L15)
