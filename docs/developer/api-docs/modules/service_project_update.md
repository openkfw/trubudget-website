# service/project\_update
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_update

## Table of contents

### Functions

- [updateProject](service_project_update.md#updateproject)

## Functions

### updateProject

▸ **updateProject**(`conn`, `ctx`, `serviceUser`, `projectId`, `requestData`): `Promise`<[`Type`](result.md#type)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `requestData` | [`Modification`](../interfaces/service_domain_workflow_project_updated.Modification.md) |

#### Returns

`Promise`<[`Type`](result.md#type)<`void`\>\>

#### Defined in

[src/service/project_update.ts:13](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/project_update.ts#L13)
