# Service
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/subproject\_create](../modules/service_subproject_create.md) / Service

[service/subproject\_create](../modules/service_subproject_create.md).Service

## Table of contents

### Methods

- [createSubproject](service_subproject_create.Service.md#createsubproject)

## Methods

### createSubproject

▸ **createSubproject**(`ctx`, `user`, `createRequest`): `Promise`\<[`Type`](../modules/result.md#type)\<[`ResourceMap`](../modules/service_domain_ResourceMap.md#resourcemap)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](service_domain_organization_service_user.ServiceUser.md) |
| `createRequest` | [`RequestData`](service_domain_workflow_subproject_create.RequestData.md) |

#### Returns

`Promise`\<[`Type`](../modules/result.md#type)\<[`ResourceMap`](../modules/service_domain_ResourceMap.md#resourcemap)\>\>

#### Defined in

[src/service/subproject_create.ts:19](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/subproject_create.ts#L19)
