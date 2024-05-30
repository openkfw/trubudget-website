# Workflowitem
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [httpd](../modules/httpd.md) / Workflowitem

[httpd](../modules/httpd.md).Workflowitem

## Table of contents

### Properties

- [allowedIntents](httpd.Workflowitem.md#allowedintents)
- [data](httpd.Workflowitem.md#data)

## Properties

### allowedIntents

• **allowedIntents**: [`default`](../modules/authz_intents.md#default)[]

#### Defined in

[src/httpd/index.ts:135](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/httpd/index.ts#L135)

___

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount?` | ``null`` \| `string` |
| `amountType` | ``null`` \| ``"N/A"`` \| ``"disbursed"`` \| ``"allocated"`` |
| `assignee?` | ``null`` \| `string` |
| `billingDate?` | ``null`` \| `string` |
| `creationUnixTs` | `string` |
| `currency?` | ``null`` \| `string` |
| `description` | ``null`` \| `string` |
| `displayName` | ``null`` \| `string` |
| `documents?` | ``null`` \| [`Document`](httpd.Document.md)[] |
| `dueDate?` | ``null`` \| `string` |
| `exchangeRate?` | ``null`` \| `string` |
| `id` | `string` |
| `status` | ``"closed"`` \| ``"open"`` |
| `workflowitemType?` | [`default`](../modules/service_domain_workflowitem_types_types.md#default) |

#### Defined in

[src/httpd/index.ts:136](https://github.com/openkfw/TruBudget/blob/d07ad94/api/src/httpd/index.ts#L136)
