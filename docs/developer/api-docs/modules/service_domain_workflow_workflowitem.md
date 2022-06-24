# service/domain/workflow/workflowitem
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem

## Table of contents

### Interfaces

- [RedactedWorkflowitem](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)
- [Workflowitem](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)

### Type aliases

- [Id](service_domain_workflow_workflowitem.md#id)
- [ScrubbedWorkflowitem](service_domain_workflow_workflowitem.md#scrubbedworkflowitem)

### Variables

- [idSchema](service_domain_workflow_workflowitem.md#idschema)

### Functions

- [permits](service_domain_workflow_workflowitem.md#permits)
- [redact](service_domain_workflow_workflowitem.md#redact)
- [validate](service_domain_workflow_workflowitem.md#validate)

## Type aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:17](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem.ts#L17)

___

### ScrubbedWorkflowitem

Ƭ **ScrubbedWorkflowitem**: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) \| [`RedactedWorkflowitem`](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:68](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem.ts#L68)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:19](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem.ts#L19)

## Functions

### permits

▸ **permits**(`workflowitem`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:136](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem.ts#L136)

___

### redact

▸ **redact**(`workflowitem`): [`RedactedWorkflowitem`](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowitem` | [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) |

#### Returns

[`RedactedWorkflowitem`](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:151](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem.ts#L151)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem.ts:131](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/workflowitem.ts#L131)
