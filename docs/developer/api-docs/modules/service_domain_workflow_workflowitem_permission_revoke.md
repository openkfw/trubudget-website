# service/domain/workflow/workflowitem\_permission\_revoke
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_permission\_revoke

## Table of contents

### Functions

- [revokeWorkflowitemPermission](service_domain_workflow_workflowitem_permission_revoke.md#revokeworkflowitempermission)

## Functions

### revokeWorkflowitemPermission

▸ **revokeWorkflowitemPermission**(`ctx`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `revokee`, `intent`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `revokee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_permission_revoke.ts:29](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem_permission_revoke.ts#L29)
