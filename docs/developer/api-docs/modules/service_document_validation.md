# service/document\_validation
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/document\_validation

## Table of contents

### Functions

- [isSameDocument](service_document_validation.md#issamedocument)

## Functions

### isSameDocument

▸ **isSameDocument**(`documentBase64`, `expectedSHA256`, `documentId`, `conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`): `Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

Returns true if the given hash matches the given document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `documentBase64` | `string` |
| `expectedSHA256` | `string` |
| `documentId` | `string` |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`boolean`\>\>

#### Defined in

[src/service/document_validation.ts:25](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/document_validation.ts#L25)
