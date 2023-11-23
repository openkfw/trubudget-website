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
- [id](service_domain_workflow_workflowitem.Workflowitem.md#id)
- [isRedacted](service_domain_workflow_workflowitem.Workflowitem.md#isredacted)
- [log](service_domain_workflow_workflowitem.Workflowitem.md#log)
- [permissions](service_domain_workflow_workflowitem.Workflowitem.md#permissions)
- [rejectReason](service_domain_workflow_workflowitem.Workflowitem.md#rejectreason)
- [status](service_domain_workflow_workflowitem.Workflowitem.md#status)
- [subprojectId](service_domain_workflow_workflowitem.Workflowitem.md#subprojectid)
- [workflowitemType](service_domain_workflow_workflowitem.Workflowitem.md#workflowitemtype)

## Properties

### additionalData

• **additionalData**: `object`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:41](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L41)

___

### amount

• `Optional` **amount**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:30](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L30)

___

### amountType

• **amountType**: ``"N/A"`` \| ``"disbursed"`` \| ``"allocated"``

#### Defined in

[src/service/domain/workflow/workflowitem.ts:32](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L32)

___

### assignee

• **assignee**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:36](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L36)

___

### billingDate

• `Optional` **billingDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:29](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L29)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:25](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L25)

___

### currency

• `Optional` **currency**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:31](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L31)

___

### description

• **description**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:33](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L33)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:27](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L27)

___

### documents

• **documents**: [`DocumentReference`](service_domain_document_document.DocumentReference.md)[]

#### Defined in

[src/service/domain/workflow/workflowitem.ts:37](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L37)

___

### dueDate

• `Optional` **dueDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:26](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L26)

___

### exchangeRate

• `Optional` **exchangeRate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:28](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L28)

___

### id

• **id**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:23](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L23)

___

### isRedacted

• **isRedacted**: ``false``

#### Defined in

[src/service/domain/workflow/workflowitem.ts:22](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L22)

___

### log

• **log**: [`WorkflowitemTraceEvent`](service_domain_workflow_workflowitem_trace_event.WorkflowitemTraceEvent.md)[]

#### Defined in

[src/service/domain/workflow/workflowitem.ts:39](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L39)

___

### permissions

• **permissions**: [`Permissions`](../modules/service_domain_permissions.md#permissions)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:38](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L38)

___

### rejectReason

• `Optional` **rejectReason**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:35](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L35)

___

### status

• **status**: ``"closed"`` \| ``"open"``

#### Defined in

[src/service/domain/workflow/workflowitem.ts:34](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L34)

___

### subprojectId

• **subprojectId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem.ts:24](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L24)

___

### workflowitemType

• `Optional` **workflowitemType**: [`default`](../modules/service_domain_workflowitem_types_types.md#default)

#### Defined in

[src/service/domain/workflow/workflowitem.ts:42](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/workflow/workflowitem.ts#L42)
