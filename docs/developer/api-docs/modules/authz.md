# authz
 
[Api Code Documentation](../README.md) / [Exports](../modules.md) / authz

## Table of contents

### Functions

- [authorized](authz.md#authorized)
- [getAllowedIntents](authz.md#getallowedintents)
- [getUserAndGroups](authz.md#getuserandgroups)
- [hasIntersection](authz.md#hasintersection)
- [throwIfUnauthorized](authz.md#throwifunauthorized)

## Functions

### authorized

▸ **authorized**(`token`, `intent`): (`resourcePermissions`: [`Permissions`](authz_types.md#permissions)) => `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`fn`

▸ (`resourcePermissions`): `Promise`\<`undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourcePermissions` | [`Permissions`](authz_types.md#permissions) |

##### Returns

`Promise`\<`undefined`\>

#### Defined in

[src/authz/index.ts:69](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authz/index.ts#L69)

___

### getAllowedIntents

▸ **getAllowedIntents**(`userAndGroups`, `resourcePermissions`): [`default`](authz_intents.md#default)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `userAndGroups` | [`People`](authz_types.md#people) |
| `resourcePermissions` | [`Permissions`](authz_types.md#permissions) |

#### Returns

[`default`](authz_intents.md#default)[]

#### Defined in

[src/authz/index.ts:21](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authz/index.ts#L21)

___

### getUserAndGroups

▸ **getUserAndGroups**(`token`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `Object` |
| `token.groups` | `string`[] |
| `token.userId` | `string` |

#### Returns

`string`[]

#### Defined in

[src/authz/index.ts:17](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authz/index.ts#L17)

___

### hasIntersection

▸ **hasIntersection**(`actualGroups`, `allowedGroups`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actualGroups` | `any` |
| `allowedGroups` | `any` |

#### Returns

`boolean`

#### Defined in

[src/authz/index.ts:14](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authz/index.ts#L14)

___

### throwIfUnauthorized

▸ **throwIfUnauthorized**(`token`, `intent`, `permissions`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `intent` | [`default`](authz_intents.md#default) |
| `permissions` | [`Permissions`](authz_types.md#permissions) |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

[src/authz/index.ts:78](https://github.com/openkfw/TruBudget/blob/e3c318d/api/src/authz/index.ts#L78)
