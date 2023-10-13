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

▸ **authorized**(`token`, `intent`): (`resourcePermissions`: [`Permissions`](authz_types.md#permissions)) => `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `intent` | [`default`](authz_intents.md#default) |

#### Returns

`fn`

▸ (`resourcePermissions`): `Promise`<`undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourcePermissions` | [`Permissions`](authz_types.md#permissions) |

##### Returns

`Promise`<`undefined`\>

#### Defined in

[src/authz/index.ts:68](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/index.ts#L68)

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

[src/authz/index.ts:20](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/index.ts#L20)

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

[src/authz/index.ts:16](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/index.ts#L16)

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

[src/authz/index.ts:13](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/index.ts#L13)

___

### throwIfUnauthorized

▸ **throwIfUnauthorized**(`token`, `intent`, `permissions`): `Promise`<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`AuthToken`](../interfaces/authz_token.AuthToken.md) |
| `intent` | [`default`](authz_intents.md#default) |
| `permissions` | [`Permissions`](authz_types.md#permissions) |

#### Returns

`Promise`<`undefined`\>

#### Defined in

[src/authz/index.ts:77](https://github.com/openkfw/TruBudget/blob/aca360d/api/src/authz/index.ts#L77)
