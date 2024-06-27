# service/domain/workflow/user\_assignments\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/user\_assignments\_get

## Table of contents

### Interfaces

- [RequestData](../interfaces/service_domain_workflow_user_assignments_get.RequestData.md)

### Functions

- [getUserAssignments](service_domain_workflow_user_assignments_get.md#getuserassignments)
- [hasAssignments](service_domain_workflow_user_assignments_get.md#hasassignments)
- [toString](service_domain_workflow_user_assignments_get.md#tostring)

## Functions

### getUserAssignments

▸ **getUserAssignments**(`ctx`, `userId`, `issuer`, `issuerOrganization`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`UserAssignments`](../interfaces/service_domain_workflow_user_assignments.UserAssignments.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `userId` | `string` |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`UserAssignments`](../interfaces/service_domain_workflow_user_assignments.UserAssignments.md)\>\>

#### Defined in

[src/service/domain/workflow/user_assignments_get.ts:41](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/user_assignments_get.ts#L41)

___

### hasAssignments

▸ **hasAssignments**(`assignments`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `assignments` | [`UserAssignments`](../interfaces/service_domain_workflow_user_assignments.UserAssignments.md) |

#### Returns

`boolean`

#### Defined in

[src/service/domain/workflow/user_assignments_get.ts:187](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/user_assignments_get.ts#L187)

___

### toString

▸ **toString**(`assignments`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `assignments` | [`UserAssignments`](../interfaces/service_domain_workflow_user_assignments.UserAssignments.md) |

#### Returns

`string`

#### Defined in

[src/service/domain/workflow/user_assignments_get.ts:148](https://github.com/openkfw/TruBudget/blob/3b9e793/api/src/service/domain/workflow/user_assignments_get.ts#L148)
