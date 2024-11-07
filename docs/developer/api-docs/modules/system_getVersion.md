# system/getVersion
[Api Code Documentation](../README.md) / [Exports](../modules.md) / system/getVersion

## Table of contents

### Functions

- [getVersion](system_getVersion.md#getversion)

## Functions

### getVersion

▸ **getVersion**(`blockchainProtocol`, `blockchainHost`, `blockchainPort`, `multichainClient`, `storageServiceClient`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainProtocol` | ``"http"`` \| ``"https"`` |
| `blockchainHost` | `string` |
| `blockchainPort` | `number` |
| `multichainClient` | [`MultichainClient`](../interfaces/service_Client_h.MultichainClient.md) |
| `storageServiceClient` | [`default`](../classes/service_Client_storage_service.default.md) |

#### Returns

`Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/system/getVersion.ts:51](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/system/getVersion.ts#L51)
