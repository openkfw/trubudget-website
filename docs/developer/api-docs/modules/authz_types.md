# authz/types
[Api Code Documentation](../README.md) / [Exports](../modules.md) / authz/types

## Table of contents

### Interfaces

- [NotAuthorizedError](../interfaces/authz_types.NotAuthorizedError.md)

### Type Aliases

- [GroupId](authz_types.md#groupid)
- [People](authz_types.md#people)
- [Permissions](authz_types.md#permissions)
- [UserId](authz_types.md#userid)

## Type Aliases

### GroupId

Ƭ **GroupId**: `string`

#### Defined in

[src/authz/types.ts:5](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/authz/types.ts#L5)

___

### People

Ƭ **People**: ([`UserId`](authz_types.md#userid) \| [`GroupId`](authz_types.md#groupid))[]

#### Defined in

[src/authz/types.ts:6](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/authz/types.ts#L6)

___

### Permissions

Ƭ **Permissions**: \{ [key in default]?: People }

#### Defined in

[src/authz/types.ts:8](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/authz/types.ts#L8)

___

### UserId

Ƭ **UserId**: `string`

#### Defined in

[src/authz/types.ts:4](https://github.com/openkfw/TruBudget/blob/c993c60c/api/src/authz/types.ts#L4)
