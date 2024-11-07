# service/domain/workflow/workflowitem\_ordering
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/workflowitem\_ordering

## Table of contents

### Type Aliases

- [WorkflowitemOrdering](service_domain_workflow_workflowitem_ordering.md#workflowitemordering)

### Functions

- [sortWorkflowitems](service_domain_workflow_workflowitem_ordering.md#sortworkflowitems)

## Type Aliases

### WorkflowitemOrdering

Ƭ **WorkflowitemOrdering**: [`Id`](service_domain_workflow_workflowitem.md#id)[]

#### Defined in

[src/service/domain/workflow/workflowitem_ordering.ts:7](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_ordering.ts#L7)

## Functions

### sortWorkflowitems

▸ **sortWorkflowitems**\<`T`\>(`workflowitems`, `ordering`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ScrubbedWorkflowitem`](service_domain_workflow_workflowitem.md#scrubbedworkflowitem) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflowitems` | `T`[] |
| `ordering` | `string`[] |

#### Returns

`T`[]

#### Defined in

[src/service/domain/workflow/workflowitem_ordering.ts:14](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_ordering.ts#L14)
