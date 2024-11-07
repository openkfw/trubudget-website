# Modification
[Api Code Documentation](../README.md) / [Exports](../modules.md) / [service/domain/workflow/project\_updated](../modules/service_domain_workflow_project_updated.md) / Modification

[service/domain/workflow/project\_updated](../modules/service_domain_workflow_project_updated.md).Modification

We only support updating very few fields with this command. For example,
`projectedBudgets` is not included here, because the semantics of updating it this
way are not quite clear, plus we want such a change to be explicit by causing a
dedicated event.

## Table of contents

### Properties

- [additionalData](service_domain_workflow_project_updated.Modification.md#additionaldata)
- [description](service_domain_workflow_project_updated.Modification.md#description)
- [displayName](service_domain_workflow_project_updated.Modification.md#displayname)
- [tags](service_domain_workflow_project_updated.Modification.md#tags)
- [thumbnail](service_domain_workflow_project_updated.Modification.md#thumbnail)

## Properties

### additionalData

• `Optional` **additionalData**: `object`

#### Defined in

[src/service/domain/workflow/project_updated.ts:24](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_updated.ts#L24)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/service/domain/workflow/project_updated.ts:22](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_updated.ts#L22)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[src/service/domain/workflow/project_updated.ts:21](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_updated.ts#L21)

___

### tags

• `Optional` **tags**: `string`[]

#### Defined in

[src/service/domain/workflow/project_updated.ts:25](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_updated.ts#L25)

___

### thumbnail

• `Optional` **thumbnail**: `string`

#### Defined in

[src/service/domain/workflow/project_updated.ts:23](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/workflow/project_updated.ts#L23)
