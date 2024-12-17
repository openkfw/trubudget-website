# service/domain/workflow/historyFilter
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/historyFilter

## Table of contents

### Type Aliases

- [Filter](service_domain_workflow_historyFilter.md#filter)

### Functions

- [filterTraceEvents](service_domain_workflow_historyFilter.md#filtertraceevents)

## Type Aliases

### Filter

Ƭ **Filter**: `RequireAtLeastOne`\<`FilterBase`, ``"publisher"`` \| ``"startAt"`` \| ``"endAt"`` \| ``"eventType"``\>

#### Defined in

[src/service/domain/workflow/historyFilter.ts:21](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/historyFilter.ts#L21)

## Functions

### filterTraceEvents

▸ **filterTraceEvents**\<`T`\>(`traceEvents`, `filter`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TraceEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `traceEvents` | `T`[] |
| `filter` | [`Filter`](service_domain_workflow_historyFilter.md#filter) |

#### Returns

`T`[]

#### Defined in

[src/service/domain/workflow/historyFilter.ts:23](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/service/domain/workflow/historyFilter.ts#L23)
