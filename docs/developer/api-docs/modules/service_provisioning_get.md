# service/provisioning\_get
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/provisioning\_get

## Table of contents

### Functions

- [getProvisionStatus](service_provisioning_get.md#getprovisionstatus)

## Functions

### getProvisionStatus

▸ **getProvisionStatus**(`conn`, `ctx`, `serviceUser`): `Promise`\<[`Type`](result.md#type)\<[`ProvisioningStatus`](../interfaces/service_domain_system_information_system_information.ProvisioningStatus.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`ProvisioningStatus`](../interfaces/service_domain_system_information_system_information.ProvisioningStatus.md)\>\>

#### Defined in

[src/service/provisioning_get.ts:11](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/provisioning_get.ts#L11)
