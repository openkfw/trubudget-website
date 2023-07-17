# service/domain/workflow/global\_permission\_revoked
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permission\_revoked

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_global_permission_revoked.Event.md)

### Variables

- [schema](service_domain_workflow_global_permission_revoked.md#schema)

### Functions

- [createEvent](service_domain_workflow_global_permission_revoked.md#createevent)
- [validate](service_domain_workflow_global_permission_revoked.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`<`any`\>

#### Defined in

[src/service/domain/workflow/global_permission_revoked.ts:20](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/global_permission_revoked.ts#L20)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `permission`, `revokee`, `time?`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_global_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `revokee` | `string` |
| `time` | `string` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_global_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/global_permission_revoked.ts:29](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/global_permission_revoked.ts#L29)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_global_permission_revoked.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`Event`](../interfaces/service_domain_workflow_global_permission_revoked.Event.md)\>

#### Defined in

[src/service/domain/workflow/global_permission_revoked.ts:54](https://github.com/openkfw/TruBudget/blob/95e6f8a/api/src/service/domain/workflow/global_permission_revoked.ts#L54)
