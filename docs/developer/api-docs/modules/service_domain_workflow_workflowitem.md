# service/domain/workflow/workflowitem
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem

## Table of contents

### Interfaces

- [RedactedWorkflowitem](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)
- [Workflowitem](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)

### Type Aliases

- [Id](service_domain_workflow_workflowitem.md#id)
- [ScrubbedWorkflowitem](service_domain_workflow_workflowitem.md#scrubbedworkflowitem)

### Variables

- [idSchema](service_domain_workflow_workflowitem.md#idschema)
- [schema](service_domain_workflow_workflowitem.md#schema)

### Functions

- [permits](service_domain_workflow_workflowitem.md#permits)
- [redact](service_domain_workflow_workflowitem.md#redact)
- [validate](service_domain_workflow_workflowitem.md#validate)

## Type Aliases

### Id

Ƭ **Id**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:18](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L18)

___

### ScrubbedWorkflowitem

Ƭ **ScrubbedWorkflowitem**: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) \| [`RedactedWorkflowitem`](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:71](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L71)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/workflowitem.ts:20](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L20)

___

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem.ts:73](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L73)

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

[src/service/domain/workflow/workflowitem.ts:143](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L143)

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

[src/service/domain/workflow/workflowitem.ts:158](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L158)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md)\>

#### Defined in

[src/service/domain/workflow/workflowitem.ts:138](https://github.com/openkfw/TruBudget/blob/1602d8b/api/src/service/domain/workflow/workflowitem.ts#L138)
