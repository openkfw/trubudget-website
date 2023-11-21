# service/project\_create
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/project\_create

## Table of contents

### References

- [RequestData](service_project_create.md#requestdata)

### Functions

- [createProject](service_project_create.md#createproject)

## References

### RequestData

Re-exports [RequestData](../interfaces/service_domain_workflow_project_create.RequestData.md)

## Functions

### createProject

▸ **createProject**(`conn`, `ctx`, `serviceUser`, `requestData`): `Promise`\<[`Type`](result.md#type)\<[`ResourceMap`](service_domain_ResourceMap.md#resourcemap)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `requestData` | [`RequestData`](../interfaces/service_domain_workflow_project_create.RequestData.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`ResourceMap`](service_domain_ResourceMap.md#resourcemap)\>\>

#### Defined in

[src/service/project_create.ts:16](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/project_create.ts#L16)
