# service/domain/workflow/global\_permissions
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/workflow/global\_permissions

## Table of contents

### Interfaces

- [GlobalPermissions](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)

### Functions

- [identitiesAuthorizedFor](service_domain_workflow_global_permissions.md#identitiesauthorizedfor)
- [permits](service_domain_workflow_global_permissions.md#permits)
- [validate](service_domain_workflow_global_permissions.md#validate)

## Functions

### identitiesAuthorizedFor

▸ **identitiesAuthorizedFor**(`globalPermissions`, `intent`): [`Identity`](service_domain_organization_identity.md#identity)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalPermissions` | [`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md) |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

[`Identity`](service_domain_organization_identity.md#identity)[]

#### Defined in

[src/service/domain/workflow/global_permissions.ts:31](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/global_permissions.ts#L31)

___

### permits

▸ **permits**(`globalPermissions`, `actingUser`, `intents`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalPermissions` | [`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md) |
| `actingUser` | [`ServiceUser`](../interfaces/service_domain_organization_service_user.ServiceUser.md) |
| `intents` | [`default`](authz_intents.md#default)[] |

#### Returns

`boolean`

#### Defined in

[src/service/domain/workflow/global_permissions.ts:38](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/global_permissions.ts#L38)

___

### validate

▸ **validate**(`input`): [`Type`](result.md#type)<[`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |

#### Returns

[`Type`](result.md#type)<[`GlobalPermissions`](../interfaces/service_domain_workflow_global_permissions.GlobalPermissions.md)\>

#### Defined in

[src/service/domain/workflow/global_permissions.ts:26](https://github.com/openkfw/TruBudget/blob/b9aaff0/api/src/service/domain/workflow/global_permissions.ts#L26)
