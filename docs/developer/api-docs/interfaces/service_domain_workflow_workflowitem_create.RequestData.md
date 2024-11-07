# RequestData: service/domain/workflow/workflowitem_create
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/workflow/workflowitem\_create](../modules/service_domain_workflow_workflowitem_create.md) / RequestData

[service/domain/workflow/workflowitem\_create](../modules/service_domain_workflow_workflowitem_create.md).RequestData

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
- [fundingOrganization](service_domain_workflow_workflowitem_create.RequestData.md#fundingorganization)
- [projectId](service_domain_workflow_workflowitem_create.RequestData.md#projectid)
- [status](service_domain_workflow_workflowitem_create.RequestData.md#status)
- [subprojectId](service_domain_workflow_workflowitem_create.RequestData.md#subprojectid)
- [tags](service_domain_workflow_workflowitem_create.RequestData.md#tags)
- [workflowitemId](service_domain_workflow_workflowitem_create.RequestData.md#workflowitemid)
- [workflowitemType](service_domain_workflow_workflowitem_create.RequestData.md#workflowitemtype)

## Properties

### additionalData

• `Optional` **additionalData**: `object`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:53](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L53)

___

### amount

• `Optional` **amount**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:45](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L45)

___

### amountType

• **amountType**: ``"N/A"`` \| ``"disbursed"`` \| ``"allocated"``

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:47](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L47)

___

### assignee

• `Optional` **assignee**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:51](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L51)

___

### billingDate

• `Optional` **billingDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:49](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L49)

___

### currency

• `Optional` **currency**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:46](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L46)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:44](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L44)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:43](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L43)

___

### documents

• `Optional` **documents**: [`UploadedDocument`](service_domain_document_document.UploadedDocument.md)[]

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:52](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L52)

___

### dueDate

• `Optional` **dueDate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:50](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L50)

___

### exchangeRate

• `Optional` **exchangeRate**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:48](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L48)

___

### fundingOrganization

• `Optional` **fundingOrganization**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:56](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L56)

___

### projectId

• **projectId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:39](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L39)

___

### status

• `Optional` **status**: ``"closed"`` \| ``"open"``

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:42](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L42)

___

### subprojectId

• **subprojectId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:40](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L40)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:55](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L55)

___

### workflowitemId

• `Optional` **workflowitemId**: `string`

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:41](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L41)

___

### workflowitemType

• `Optional` **workflowitemType**: [`default`](../modules/service_domain_workflowitem_types_types.md#default)

#### Defined in

[src/service/domain/workflow/workflowitem_create.ts:54](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/workflowitem_create.ts#L54)
