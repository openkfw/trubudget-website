# service/subproject\_create
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/subproject\_create

## Table of contents

### References

- [RequestData](service_subproject_create.md#requestdata)

### Interfaces

- [Service](../interfaces/service_subproject_create.Service.md)

### Functions

- [createSubproject](service_subproject_create.md#createsubproject)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_subproject_create.RequestData.md)

## Functions

### createSubproject

▸ **createSubproject**(`conn`, `ctx`, `serviceUser`, `requestData`): `Promise`\<[`Type`](result.md#type)\<[`ResourceMap`](service_domain_ResourceMap.md#resourcemap)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_workflow_subproject_create.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`ResourceMap`](service_domain_ResourceMap.md#resourcemap)\>\>

#### Defined in

[src/service/subproject_create.ts:26](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/subproject_create.ts#L26)
