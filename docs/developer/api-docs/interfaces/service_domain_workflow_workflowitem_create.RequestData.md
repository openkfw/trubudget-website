# RequestData: 
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/workflow/workflowitem\_create](../modules/service_domain_workflow_workflowitem_create.md) / RequestData

[service/domain/workflow/workflowitem_create](../modules/service_domain_workflow_workflowitem_create.md).RequestData

## Table of contents

### Properties

- [additionalData](service_domain_workflow_workflowitem_create.RequestData.md#additionaldata)
- [amount](service_domain_workflow_workflowitem_create.RequestData.md#amount)
- [amountType](service_domain_workflow_workflowitem_create.RequestData.md#amounttype)
- [assignee](service_domain_workflow_workflowitem_create.RequestData.md#assignee)
- [billingDate](service_domain_workflow_workflowitem_create.RequestData.md#billingdate)
- [currency](service_domain_workflow_workflowitem_create.RequestData.md#currency)
- [description](service_domain_workflow_workflowitem_create.RequestData.md#description)
- [displayName](service_domain_workflow_workflowitem_create.RequestData.md#displayname)
- [documents](service_domain_workflow_workflowitem_create.RequestData.md#documents)
- [dueDate](service_domain_workflow_workflowitem_create.RequestData.md#duedate)
- [exchangeRate](service_domain_workflow_workflowitem_create.RequestData.md#exchangerate)
- [projectId](service_domain_workflow_workflowitem_create.RequestData.md#projectid)
- [status](service_domain_workflow_workflowitem_create.RequestData.md#status)
- [subprojectId](service_domain_workflow_workflowitem_create.RequestData.md#subprojectid)
- [workflowitemId](service_domain_workflow_workflowitem_create.RequestData.md#workflowitemid)
- [workflowitemType](service_domain_workflow_workflowitem_create.RequestData.md#workflowitemtype)

## Properties

### additionalData

• `Optional` **additionalData**: `object`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:48](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L48)

___

### amount

• `Optional` **amount**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:40](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L40)

___

### amountType

• **amountType**: ``"N/A"`` \| ``"disbursed"`` \| ``"allocated"``

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:42](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L42)

___

### assignee

• `Optional` **assignee**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:46](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L46)

___

### billingDate

• `Optional` **billingDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:44](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L44)

___

### currency

• `Optional` **currency**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:41](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L41)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:39](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L39)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:38](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L38)

___

### documents

• `Optional` **documents**: [`UploadedDocument`](service_domain_document_document.UploadedDocument.md)[]

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:47](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L47)

___

### dueDate

• `Optional` **dueDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:45](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L45)

___

### exchangeRate

• `Optional` **exchangeRate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:43](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L43)

___

### projectId

• **projectId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:34](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L34)

___

### status

• `Optional` **status**: ``"closed"`` \| ``"open"``

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:37](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L37)

___

### subprojectId

• **subprojectId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:35](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L35)

___

### workflowitemId

• `Optional` **workflowitemId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:36](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L36)

___

### workflowitemType

• `Optional` **workflowitemType**: [`default`](../modules/service_domain_workflowitem_types_types.md#default)

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:49](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/service/domain/workflow/workflowitem_create.ts#L49)
