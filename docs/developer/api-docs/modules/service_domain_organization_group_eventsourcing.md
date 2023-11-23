# service/domain/organization/group\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/group\_eventsourcing

## Table of contents

### Functions

- [sourceGroups](service_domain_organization_group_eventsourcing.md#sourcegroups)

## Functions

### sourceGroups

▸ **sourceGroups**(`ctx`, `events`): `Object`

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
| `groups` | [`Group`](../interfaces/service_domain_organization_group.Group.md)[] |

#### Defined in

[src/service/domain/organization/group_eventsourcing.ts:15](https://github.com/openkfw/TruBudget/blob/422cbec/api/src/service/domain/organization/group_eventsourcing.ts#L15)
