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

[src/httpd/index.ts:121](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/httpd/index.ts#L121)

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

[src/httpd/index.ts:122](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/httpd/index.ts#L122)

___

### log

• **log**: `MaybeHistoryEvent`[]

#### Defined in

[src/httpd/index.ts:120](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/httpd/index.ts#L120)
