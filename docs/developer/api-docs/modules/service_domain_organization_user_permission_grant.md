# service/domain/organization/user\_permission\_grant
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/organization/user\_permission\_grant

## Table of contents

### Functions

- [grantUserPermission](service_domain_organization_user_permission_grant.md#grantuserpermission)

## Functions

### grantUserPermission

▸ **grantUserPermission**(`ctx`, `issuer`, `issuerOrganization`, `userId`, `grantee`, `intent`, `repository`): `Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Ctx`](../interfaces/lib_ctx.Ctx.md) |
| `issuer` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `issuerOrganization` | `string` |
| `userId` | `string` |
| `grantee` | `string` |
| `intent` | [`default`](authz_intents.md#default) |
| `repository` | `Repository` |

#### Returns

`Promise`<[`Type`](result.md#type)<[`BusinessEvent`](service_domain_business_event.md#businessevent)[]\>\>

#### Defined in

[src/service/domain/organization/user_permission_grant.ts:22](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/organization/user_permission_grant.ts#L22)
