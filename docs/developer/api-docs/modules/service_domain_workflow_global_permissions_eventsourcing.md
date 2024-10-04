# service/domain/workflow/global\_permissions\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permissions\_eventsourcing

## Table of contents

### Functions

- [sourceGlobalPermissions](service_domain_workflow_global_permissions_eventsourcing.md#sourceglobalpermissions)

## Functions

### sourceGlobalPermissions

▸ **sourceGlobalPermissions**(`ctx`, `events`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `events` | [`BusinessEvent`](service_domain_business_event.md#businessevent)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `errors` | [`EventSourcingError`](../classes/service_domain_errors_event_sourcing_error.EventSourcingError.md)[] |
| `globalPermissions` | [`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md) |

#### Defined in

[src/service/domain/workflow/global_permissions_eventsourcing.ts:12](https://github.com/openkfw/TruBudget/blob/90402cb/api/src/service/domain/workflow/global_permissions_eventsourcing.ts#L12)
