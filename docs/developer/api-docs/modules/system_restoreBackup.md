# system/restoreBackup
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / system/restoreBackup

## Table of contents

### Functions

- [restoreBackup](system_restoreBackup.md#restorebackup)

## Functions

### restoreBackup

▸ **restoreBackup**(`blockchainProtocol`, `blockchainHost`, `blockchainPort`, `req`): `Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainProtocol` | ``"http"`` \| ``"https"`` |
| `blockchainHost` | `string` |
| `blockchainPort` | `number` |
| `req` | [`AuthenticatedRequest`](../interfaces/httpd_lib.AuthenticatedRequest.md) |

#### Returns

`Promise`\<[`HttpResponse`](httpd_lib.md#httpresponse)\>

#### Defined in

[src/system/restoreBackup.ts:7](https://github.com/openkfw/TruBudget/blob/2e83742/api/src/system/restoreBackup.ts#L7)
