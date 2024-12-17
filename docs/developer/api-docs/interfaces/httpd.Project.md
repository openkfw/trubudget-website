# Project
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [httpd](../modules/httpd.md) / Project

[httpd](../modules/httpd.md).Project

## Table of contents

### Properties

- [allowedIntents](httpd.Project.md#allowedintents)
- [data](httpd.Project.md#data)
- [log](httpd.Project.md#log)

## Properties

### allowedIntents

• **allowedIntents**: [`default`](../modules/authz_intents.md#default)[]

#### Defined in

[src/httpd/index.ts:104](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L104)

___

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assignee?` | `string` |
| `creationUnixTs` | `string` |
| `description` | `string` |
| `displayName` | `string` |
| `id` | `string` |
| `projectedBudgets` | `ProjectedBudget`[] |
| `status` | ``"closed"`` \| ``"open"`` |
| `thumbnail` | `string` |

#### Defined in

[src/httpd/index.ts:105](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L105)

___

### log

• **log**: `MaybeHistoryEvent`[]

#### Defined in

[src/httpd/index.ts:103](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/httpd/index.ts#L103)
