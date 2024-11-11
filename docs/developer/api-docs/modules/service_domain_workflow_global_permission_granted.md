# service/domain/workflow/global\_permission\_granted
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permission\_granted

## Table of contents

### Interfaces

- [Event](../interfaces/service_domain_workflow_global_permission_granted.Event.md)

### Variables

- [schema](service_domain_workflow_global_permission_granted.md#schema)

### Functions

- [createEvent](service_domain_workflow_global_permission_granted.md#createevent)
- [validate](service_domain_workflow_global_permission_granted.md#validate)

## Variables

### schema

• `Const` **schema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/workflow/global_permission_granted.ts:23](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/global_permission_granted.ts#L23)

## Functions

### createEvent

▸ **createEvent**(`source`, `publisher`, `permission`, `grantee`, `time?`, `metadata?`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_global_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `publisher` | `string` |
| `permission` | [`default`](authz_intents.md#default) |
| `grantee` | `string` |
| `time` | `string` |
| `metadata?` | [`UserMetadata`](service_domain_metadata.md#usermetadata) |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_global_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/workflow/global_permission_granted.ts:33](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/global_permission_granted.ts#L33)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_global_permission_granted.Event.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)\<[`Event`](../interfaces/service_domain_workflow_global_permission_granted.Event.md)\>

#### Defined in

[src/service/domain/workflow/global_permission_granted.ts:58](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/workflow/global_permission_granted.ts#L58)
