# service/user\_assignments\_get
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/user\_assignments\_get

## Table of contents

### Functions

- [getUserAssignments](service_user_assignments_get.md#getuserassignments)

## Functions

### getUserAssignments

▸ **getUserAssignments**(`conn`, `ctx`, `issuer`, `issuerOrganization`, `requestData`): `Promise`<[`Type`](result.md#type)<[`UserAssignments`](../interfaces/service_domain_workflow_user_assignments.UserAssignments.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `requestData` | [`RequestData`](../interfaces/service_domain_workflow_user_assignments_get.RequestData.md) |

#### Returns

`Promise`<[`Type`](result.md#type)<[`UserAssignments`](../interfaces/service_domain_workflow_user_assignments.UserAssignments.md)\>\>

#### Defined in

[src/service/user_assignments_get.ts:12](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/user_assignments_get.ts#L12)
