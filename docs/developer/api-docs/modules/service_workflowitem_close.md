# service/workflowitem\_close
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/workflowitem\_close

## Table of contents

### Functions

- [closeWorkflowitem](service_workflowitem_close.md#closeworkflowitem)

## Functions

### closeWorkflowitem

▸ **closeWorkflowitem**(`conn`, `ctx`, `serviceUser`, `projectId`, `subprojectId`, `workflowitemId`, `rejectReason?`): `Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conn` | [`ConnToken`](service_conn.md#conntoken) |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `serviceUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `rejectReason?` | `string` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<`void`\>\>

#### Defined in

[src/service/workflowitem_close.ts:21](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/workflowitem_close.ts#L21)
