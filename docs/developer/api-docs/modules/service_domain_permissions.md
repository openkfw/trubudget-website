# service/domain/permissions
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / service/domain/permissions

## Table of contents

### Type Aliases

- [ExposablePermissions](service_domain_permissions.md#exposablepermissions)
- [Permissions](service_domain_permissions.md#permissions)

### Variables

- [permissionsSchema](service_domain_permissions.md#permissionsschema)

### Functions

- [getExposablePermissions](service_domain_permissions.md#getexposablepermissions)

## Type Aliases

### ExposablePermissions

Ƭ **ExposablePermissions**: \{ [key in ExposableIntent]?: Identity[] }

#### Defined in

[src/service/domain/permissions.ts:8](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/permissions.ts#L8)

___

### Permissions

Ƭ **Permissions**: \{ [key in default]?: Identity[] }

#### Defined in

[src/service/domain/permissions.ts:7](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/permissions.ts#L7)

## Variables

### permissionsSchema

• `Const` **permissionsSchema**: `ObjectSchema`\<`any`\>

#### Defined in

[src/service/domain/permissions.ts:10](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/permissions.ts#L10)

## Functions

### getExposablePermissions

▸ **getExposablePermissions**(`permissions`, `filter`): [`ExposablePermissions`](service_domain_permissions.md#exposablepermissions)

Removes permissions which should not be returned to the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `permissions` | [`Permissions`](service_domain_permissions.md#permissions) |
| `filter` | (``"project.close"`` \| ``"subproject.close"`` \| ``"workflowitem.close"``)[] |

#### Returns

[`ExposablePermissions`](service_domain_permissions.md#exposablepermissions)

#### Defined in

[src/service/domain/permissions.ts:20](https://github.com/openkfw/TruBudget/blob/086d599/api/src/service/domain/permissions.ts#L20)
