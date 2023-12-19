# service/domain/system\_information/system\_information\_eventsourcing
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/system\_information/system\_information\_eventsourcing

## Table of contents

### Functions

- [sourceSystemInformation](service_domain_system_information_system_information_eventsourcing.md#sourcesysteminformation)

## Functions

### sourceSystemInformation

▸ **sourceSystemInformation**(`ctx`, `events`): `Object`

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
| `systemInformation` | [`SystemInformation`](../interfaces/service_domain_system_information_system_information.SystemInformation.md) |

#### Defined in

[src/service/domain/system_information/system_information_eventsourcing.ts:10](https://github.com/openkfw/TruBudget/blob/d2b440c/api/src/service/domain/system_information/system_information_eventsourcing.ts#L10)
