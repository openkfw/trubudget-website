# service/domain/system\_information/provisioning\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/system\_information/provisioning\_get

## Table of contents

### Functions

- [getProvisionStatus](service_domain_system_information_provisioning_get.md#getprovisionstatus)

## Functions

### getProvisionStatus

▸ **getProvisionStatus**(`ctx`, `user`, `repository`): `Promise`<[`Type`](result.md#type)<[`ProvisioningStatus`](../interfaces/service_domain_system_information_system_information.ProvisioningStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `user` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`ProvisioningStatus`](../interfaces/service_domain_system_information_system_information.ProvisioningStatus.md)\>\>

#### Defined in

[src/service/domain/system_information/provisioning_get.ts:16](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/system_information/provisioning_get.ts#L16)
