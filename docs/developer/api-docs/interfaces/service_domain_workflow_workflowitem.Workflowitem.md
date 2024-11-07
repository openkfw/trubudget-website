# Workflowitem
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/workflow/workflowitem](../modules/service_domain_workflow_workflowitem.md) / Workflowitem

[service/domain/workflow/workflowitem](../modules/service_domain_workflow_workflowitem.md).Workflowitem

## Table of contents

### Properties

- [additionalData](service_domain_workflow_workflowitem.Workflowitem.md#additionaldata)
- [amount](service_domain_workflow_workflowitem.Workflowitem.md#amount)
- [amountType](service_domain_workflow_workflowitem.Workflowitem.md#amounttype)
- [assignee](service_domain_workflow_workflowitem.Workflowitem.md#assignee)
- [billingDate](service_domain_workflow_workflowitem.Workflowitem.md#billingdate)
- [createdAt](service_domain_workflow_workflowitem.Workflowitem.md#createdat)
- [currency](service_domain_workflow_workflowitem.Workflowitem.md#currency)
- [description](service_domain_workflow_workflowitem.Workflowitem.md#description)
- [displayName](service_domain_workflow_workflowitem.Workflowitem.md#displayname)
- [documents](service_domain_workflow_workflowitem.Workflowitem.md#documents)
- [dueDate](service_domain_workflow_workflowitem.Workflowitem.md#duedate)
- [exchangeRate](service_domain_workflow_workflowitem.Workflowitem.md#exchangerate)
- [fundingOrganization](service_domain_workflow_workflowitem.Workflowitem.md#fundingorganization)
- [id](service_domain_workflow_workflowitem.Workflowitem.md#id)
- [isRedacted](service_domain_workflow_workflowitem.Workflowitem.md#isredacted)
- [log](service_domain_workflow_workflowitem.Workflowitem.md#log)
- [permissions](service_domain_workflow_workflowitem.Workflowitem.md#permissions)
- [rejectReason](service_domain_workflow_workflowitem.Workflowitem.md#rejectreason)
- [status](service_domain_workflow_workflowitem.Workflowitem.md#status)
- [subprojectId](service_domain_workflow_workflowitem.Workflowitem.md#subprojectid)
- [tags](service_domain_workflow_workflowitem.Workflowitem.md#tags)
- [workflowitemType](service_domain_workflow_workflowitem.Workflowitem.md#workflowitemtype)

## Properties

### additionalData

• **additionalData**: `object`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:43](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L43)

___

### amount

• `Optional` **amount**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:32](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L32)

___

### amountType

• **amountType**: ``"N/A"`` \| ``"disbursed"`` \| ``"allocated"``

#### Defined in

[src/service/domain/workflow/workflowitem.ts:34](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L34)

___

### assignee

• **assignee**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:38](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L38)

___

### billingDate

• `Optional` **billingDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:31](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L31)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:27](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L27)

___

### currency

• `Optional` **currency**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:33](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L33)

___

### description

• **description**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:35](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L35)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:29](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L29)

___

### documents

• **documents**: [`DocumentOrExternalLinkReference`](../modules/service_domain_document_document.md#documentorexternallinkreference)[]

#### Defined in

[src/service/domain/workflow/workflowitem.ts:39](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L39)

___

### dueDate

• `Optional` **dueDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:28](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L28)

___

### exchangeRate

• `Optional` **exchangeRate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:30](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L30)

___

### fundingOrganization

• `Optional` **fundingOrganization**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:46](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L46)

___

### id

• **id**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:25](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L25)

___

### isRedacted

• **isRedacted**: ``false``

#### Defined in

[src/service/domain/workflow/workflowitem.ts:24](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L24)

___

### log

• **log**: [`WorkflowitemTraceEvent`](service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent.md)[]

#### Defined in

[src/service/domain/workflow/workflowitem.ts:41](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L41)

___

### permissions

• **permissions**: [`Permissions`](../modules/service_domain_permissions.md#permissions)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:40](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L40)

___

### rejectReason

• `Optional` **rejectReason**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:37](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L37)

___

### status

• **status**: ``"closed"`` \| ``"open"``

#### Defined in

[src/service/domain/workflow/workflowitem.ts:36](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L36)

___

### subprojectId

• **subprojectId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:26](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L26)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[src/service/domain/workflow/workflowitem.ts:45](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L45)

___

### workflowitemType

• `Optional` **workflowitemType**: [`default`](../modules/service_domain_workflowitem_types_types.md#default)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:44](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem.ts#L44)
