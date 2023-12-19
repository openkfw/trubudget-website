# service/project\_list
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_list

## Table of contents

### Functions

- [listProjects](service_project_list.md#listprojects)

## Functions

### listProjects

▸ **listProjects**(`conn`, `ctx`, `serviceUser`): `Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`Project`](../interfaces/service_domain_workflow_project.Project.md)[]\>\>

#### Defined in

[src/service/project_list.ts:11](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/project_list.ts#L11)
