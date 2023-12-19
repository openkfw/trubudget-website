# RequestData: 
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/workflow/project\_create](../modules/service_domain_workflow_project_create.md) / RequestData

[service/domain/workflow/project\_create](../modules/service_domain_workflow_project_create.md).RequestData

Initial data for the new project as given in the request.

Looks a lot like `InitialData` in the domain layer's `project_created.ts`, except
that there are more optional fields that get initialized using default values.

## Table of contents

### Properties

- [additionalData](service_domain_workflow_project_create.RequestData.md#additionaldata)
- [assignee](service_domain_workflow_project_create.RequestData.md#assignee)
- [description](service_domain_workflow_project_create.RequestData.md#description)
- [displayName](service_domain_workflow_project_create.RequestData.md#displayname)
- [id](service_domain_workflow_project_create.RequestData.md#id)
- [projectedBudgets](service_domain_workflow_project_create.RequestData.md#projectedbudgets)
- [status](service_domain_workflow_project_create.RequestData.md#status)
- [tags](service_domain_workflow_project_create.RequestData.md#tags)
- [thumbnail](service_domain_workflow_project_create.RequestData.md#thumbnail)

## Properties

### additionalData

• `Optional` **additionalData**: `object`

#### Defined in

[src/service/domain/workflow/project_create.ts:35](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L35)

___

### assignee

• `Optional` **assignee**: `string`

#### Defined in

[src/service/domain/workflow/project_create.ts:32](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L32)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/service/domain/workflow/project_create.ts:31](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L31)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/service/domain/workflow/project_create.ts:30](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Defined in

[src/service/domain/workflow/project_create.ts:28](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L28)

___

### projectedBudgets

• `Optional` **projectedBudgets**: [`ProjectedBudget`](service_domain_workflow_projected_budget.ProjectedBudget.md)[]

#### Defined in

[src/service/domain/workflow/project_create.ts:34](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L34)

___

### status

• `Optional` **status**: ``"closed"`` \| ``"open"``

#### Defined in

[src/service/domain/workflow/project_create.ts:29](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L29)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[src/service/domain/workflow/project_create.ts:36](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L36)

___

### thumbnail

• `Optional` **thumbnail**: `string`

#### Defined in

[src/service/domain/workflow/project_create.ts:33](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/workflow/project_create.ts#L33)
