# service/project\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_get

## Table of contents

### Functions

- [getProject](service_project_get.md#getproject)

## Functions

### getProject

▸ **getProject**(`conn`, `ctx`, `serviceUser`, `projectId`): `Promise`<[`Type`](result.md#type)<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`Project`](../interfaces/service_domain_workflow_project.Project.md)\>\>

#### Defined in

[src/service/project_get.ts:12](https://github.com/openkfw/TruBudget/blob/f6ee764/api/src/service/project_get.ts#L12)
