# service/domain/workflow/global\_permissions\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permissions\_get

## Table of contents

### Functions

- [getGlobalPermissions](service_domain_workflow_global_permissions_get.md#getglobalpermissions)

## Functions

### getGlobalPermissions

▸ **getGlobalPermissions**(`ctx`, `user`, `repository`): `Promise`\<[`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)\>

#### Defined in

[src/service/domain/workflow/global_permissions_get.ts:13](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/service/domain/workflow/global_permissions_get.ts#L13)
