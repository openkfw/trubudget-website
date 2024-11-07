# service/domain/organization/public\_key\_eventsourcing
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/public\_key\_eventsourcing

## Table of contents

### Type Aliases

- [KeysByOrganization](service_domain_organization_public_key_eventsourcing.md#keysbyorganization)

### Functions

- [sourcePublicKeys](service_domain_organization_public_key_eventsourcing.md#sourcepublickeys)

## Type Aliases

### KeysByOrganization

Ƭ **KeysByOrganization**: `Map`\<[`Organization`](service_domain_organization_public_key.md#organization), [`PublicKeyBase64`](service_domain_organization_public_key.md#publickeybase64)\>

#### Defined in

[src/service/domain/organization/public_key_eventsourcing.ts:11](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/public_key_eventsourcing.ts#L11)

## Functions

### sourcePublicKeys

▸ **sourcePublicKeys**(`ctx`, `events`): `Object`

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
| `keysByOrganization` | [`KeysByOrganization`](service_domain_organization_public_key_eventsourcing.md#keysbyorganization) |

#### Defined in

[src/service/domain/organization/public_key_eventsourcing.ts:13](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/service/domain/organization/public_key_eventsourcing.ts#L13)
