# service/project\_assign
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_assign

## Table of contents

### Functions

- [assignProject](service_project_assign.md#assignproject)

## Functions

### assignProject

▸ **assignProject**(`conn`, `ctx`, `serviceUser`, `projectId`, `assignee`): `Promise`<[`Type`](result.md#type)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `assignee` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<`void`\>\>

#### Defined in

[src/service/project_assign.ts:14](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/project_assign.ts#L14)
