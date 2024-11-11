# handlerUtils
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / handlerUtils

## Table of contents

### Functions

- [extractUser](handlerUtils.md#extractuser)
- [parseMultiPartFile](handlerUtils.md#parsemultipartfile)
- [parseMultiPartRequest](handlerUtils.md#parsemultipartrequest)

## Functions

### extractUser

▸ **extractUser**(`request`): [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AuthenticatedRequest`](../interfaces/httpd_lib.AuthenticatedRequest.md) |

#### Returns

[`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md)

#### Defined in

[src/handlerUtils.ts:6](https://github.com/openkfw/TruBudget/blob/086d599/api/src/handlerUtils.ts#L6)

___

### parseMultiPartFile

▸ **parseMultiPartFile**(`part`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `MultipartFile` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/handlerUtils.ts:16](https://github.com/openkfw/TruBudget/blob/086d599/api/src/handlerUtils.ts#L16)

___

### parseMultiPartRequest

▸ **parseMultiPartRequest**(`request`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AuthenticatedRequest`](../interfaces/httpd_lib.AuthenticatedRequest.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/handlerUtils.ts:25](https://github.com/openkfw/TruBudget/blob/086d599/api/src/handlerUtils.ts#L25)
