# service/domain/workflow/workflowitem\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_permission\_grant

## Table of contents

### Functions

- [grantWorkflowitemPermission](service_domain_workflow_workflowitem_permission_grant.md#grantworkflowitempermission)

## Functions

### grantWorkflowitemPermission

▸ **grantWorkflowitemPermission**(`ctx`, `issuer`, `projectId`, `subprojectId`, `workflowitemId`, `grantee`, `intent`, `repository`): `Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `workflowitemId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/workflow/workflowitem_permission_grant.ts:36](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/workflowitem_permission_grant.ts#L36)
