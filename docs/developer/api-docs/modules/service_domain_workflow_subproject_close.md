# service/domain/workflow/subproject\_close
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/subproject\_close

## Table of contents

### Functions

- [closeSubproject](service_domain_workflow_subproject_close.md#closesubproject)

## Functions

### closeSubproject

▸ **closeSubproject**(`ctx`, `issuer`, `projectId`, `subprojectId`, `repository`): `Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `subproject`: [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `projectId` | `string` |
| `subprojectId` | `string` |
| `repository` | `Repository` |

#### Returns

`Promise`\<[`Type`](result.md#type)\<\{ `newEvents`: [`BusinessEvent`](service_domain_business_event.md#businessevent)[] ; `subproject`: [`Subproject`](../interfaces/service_domain_workflow_subproject.Subproject.md)  }\>\>

#### Defined in

[src/service/domain/workflow/subproject_close.ts:32](https://github.com/openkfw/TruBudget/blob/92640998/api/src/service/domain/workflow/subproject_close.ts#L32)
