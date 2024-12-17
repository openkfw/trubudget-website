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

[src/service/domain/workflow/workflowitem.ts:19](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L19)

___

### ScrubbedWorkflowitem

Ƭ **ScrubbedWorkflowitem**: [`Workflowitem`](../interfaces/service_domain_workflow_workflowitem.Workflowitem.md) \| [`RedactedWorkflowitem`](../interfaces/service_domain_workflow_workflowitem.RedactedWorkflowitem.md)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:76](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L76)

## Variables

### idSchema

• `Const` **idSchema**: `StringSchema`\<`string`\>

#### Defined in

[src/service/domain/workflow/workflowitem.ts:21](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L21)

___

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/workflowitem.ts:78](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L78)

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

[src/service/domain/workflow/workflowitem.ts:150](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L150)

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

[src/service/domain/workflow/workflowitem.ts:165](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L165)

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

[src/service/domain/workflow/workflowitem.ts:145](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/workflowitem.ts#L145)
